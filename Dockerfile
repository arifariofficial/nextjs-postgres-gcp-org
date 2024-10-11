# Use the latest Node.js Alpine as the base image
FROM node:lts-slim AS base

# Use the base image to install dependencies
FROM base AS deps

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies using npm
COPY package.json package-lock.json* ./
RUN npm install 

# Build the source code
FROM base AS builder
WORKDIR /usr/src/app

# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application and generate the standalone output
RUN npm run build

# Production image, copy all the necessary files
FROM base AS runner
WORKDIR /usr/src/app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files and set permissions
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Copy standalone and static Next.js build outputs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma schema
COPY --from=builder /app/prisma ./prisma

# Switch to non-root user
USER nextjs

# Expose the application port
EXPOSE 3000

# Set the default command to run the application
CMD ["node", "server.js"]