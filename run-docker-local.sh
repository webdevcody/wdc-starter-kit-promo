#!/bin/bash

# Exit on error
set -e

# Function to clean up container
cleanup() {
    echo "🧹 Cleaning up..."
    docker stop wdc-starter-kit-promo 2>/dev/null || true
    docker rm wdc-starter-kit-promo 2>/dev/null || true
    exit 0
}

# Set up trap for SIGTERM and SIGINT
trap cleanup SIGTERM SIGINT

echo "🚀 Building and running with Docker..."

# Clean up any existing container before starting
echo "🧹 Cleaning up any existing container..."
docker stop wdc-starter-kit-promo 2>/dev/null || true
docker rm wdc-starter-kit-promo 2>/dev/null || true

# Build the Docker image
echo "🏗️ Building Docker image..."
docker build -t wdc-starter-kit-promo .

# Run the container
echo "🚀 Starting container..."
docker run --name wdc-starter-kit-promo \
  -p 3000:3000 \
  --env-file .env \
  -v "$(pwd)/local.db:/app/local.db" \
  wdc-starter-kit-promo

# This will be executed when the container stops
cleanup 