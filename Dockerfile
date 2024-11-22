# ================================
# Base image
# ----------------
    FROM node:22-alpine AS base

    # Set the working directory
    WORKDIR /app
    
    # Update npm to the desired version (optional)
    RUN npm install -g npm@latest
    
    # ================================
    # Dependencies stage
    # ----------------
    FROM base AS deps
    
    # Copy package files first to leverage caching
    COPY package.json package-lock.json* ./
    
    # Install dependencies without running scripts and with cache
    RUN npm ci
    
    # ================================
    # Build stage
    # ----------------
    FROM base AS build
    
    # Copy dependencies from deps stage
    COPY --from=deps /app/node_modules ./node_modules
    
    # Copy the rest of the project files, excluding .env via .dockerignore
    COPY . .
    
 
    # Generate Prisma client
    RUN npx prisma generate

    # Build the application
    RUN npm run build

    
    # ================================
    # Production image
    # ----------------
    FROM base AS runner
    
    # Set the working directory
    WORKDIR /app
    
    # Set environment variables
    ENV NODE_ENV=production
    ENV HOSTNAME="0.0.0.0"
    ENV PORT=3000
    
    # Create non-root user and group for better security
    RUN addgroup --system --gid 1001 nodejs \
        && adduser --system --uid 1001 nextjs
    
    # Copy only the necessary files from build stage
    COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
    COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
    COPY --from=build --chown=nextjs:nodejs /app/public ./public
    COPY --from=build --chown=nextjs:nodejs /app/package.json ./package.json
    COPY --from=build --chown=nextjs:nodejs /app/prisma ./prisma
    
    # Ensure proper permissions for prerender cache
    RUN mkdir -p .next && chown nextjs:nodejs .next
    
    # Switch to non-root user
    USER nextjs
    
    # Expose the application port
    EXPOSE $PORT
    
    # Set the default command to run the application
    CMD ["node", "server.js"]
    