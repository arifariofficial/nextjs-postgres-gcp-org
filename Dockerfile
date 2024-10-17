# Use official Node.js runtime as a parent image with digest for security
FROM node:22-alpine AS base

# Set the working directory
WORKDIR /app

# Update npm to the desired version (optional, or remove if not needed)
RUN npm install -g npm@latest

# Base image to install dependencies
FROM base AS deps

# Copy package files first to leverage caching
COPY package.json package-lock.json* ./

# Install dependencies without running scripts and with cache
RUN npm install ci

# Rebuild the source code only when needed
FROM base AS builder

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy package files again (only if they change)
COPY package.json package-lock.json* ./

# Copy the rest of the project files
COPY . .

# Copy the .env file (but it will be removed later)
COPY .env .env

# Generate Prisma client and build the application
RUN npm run db-gen:prod && npm run build

# Remove .env file after the build process
RUN rm -f .env

# Production image, minimal setup
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Create non-root user and group for better security
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy only the necessary files from deps and builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Ensure proper permissions for prerender cache
RUN mkdir -p .next && chown nextjs:nodejs .next

# Switch to non-root user
USER nextjs

# Expose the application port
EXPOSE $PORT

# Set the default command to run the application
CMD ["npm", "start"]
