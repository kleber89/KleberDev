#!/bin/bash

set -e

echo "================================================"
echo "KleberDev Portfolio - Setup Script"
echo "================================================"
echo ""

# Check prerequisites
echo "Checking prerequisites..."

if ! command -v java &> /dev/null; then
    echo "❌ Java not found. Please install Java 17+"
    exit 1
fi

if ! command -v mvn &> /dev/null; then
    echo "❌ Maven not found. Please install Maven 3.6+"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node 18+"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm 8+"
    exit 1
fi

echo "✅ All prerequisites found"
echo ""

# Build backend
echo "Building backend..."
cd backend
mvn clean package -DskipTests
cd ..
echo "✅ Backend built successfully"
echo ""

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..
echo "✅ Frontend dependencies installed"
echo ""

# Build frontend
echo "Building frontend..."
cd frontend
npm run build
cd ..
echo "✅ Frontend built successfully"
echo ""

echo "================================================"
echo "✅ Setup completed successfully!"
echo "================================================"
echo ""
echo "🚀 Next steps:"
echo ""
echo "For Development:"
echo "  Terminal 1: cd backend && mvn spring-boot:run"
echo "  Terminal 2: cd frontend && npm run dev"
echo ""
echo "For Production (Docker):"
echo "  docker-compose up --build"
echo ""
echo "For Heroku Deployment:"
echo "  See DEPLOYMENT.md for detailed instructions"
echo ""
echo "Visit http://localhost:3000 to see your portfolio"
echo ""
