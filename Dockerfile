# Use the latest Node.js Alpine as the base image
FROM node:alpine AS base

# Use the base image to install system dependencies
FROM base AS deps

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies using npm
COPY package.json package-lock.json* ./
RUN npm install 

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application using npm
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files and set permissions
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma schema
COPY --from=builder /app/prisma ./prisma

# Switch to non-root user
USER nextjs

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Expose the application port
EXPOSE 3000

# Set the default command to run the application
CMD ["node", "server.js"]
