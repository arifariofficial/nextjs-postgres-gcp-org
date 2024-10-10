# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS base

# Use the base image to install system dependencies
FROM base AS deps

# Install system dependencies
RUN apk add --no-cache libc6-compat curl
RUN apk add --no-cache bind-tools busybox-extras iputils

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
ENV NODE_ENV=production
RUN npm install sharp && npm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Update npm to the latest version
RUN npm install -g npm@10.9.0

# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .


# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT 3000

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



# Expose the application port
EXPOSE 3000

# Set the default command to run the application
CMD HOSTNAME="0.0.0.0" node server.js


