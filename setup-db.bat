@echo off
echo ========================================
echo DeFi Risk Analyzer - Database Setup
echo ========================================
echo.

echo Checking Docker...
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker not found. Please install Docker Desktop.
    pause
    exit /b 1
)

echo Starting PostgreSQL with Docker...
docker run -d ^
  --name defi-postgres ^
  -e POSTGRES_USER=defi_user ^
  -e POSTGRES_PASSWORD=defi_pass ^
  -e POSTGRES_DB=defi_risk_db ^
  -p 5432:5432 ^
  postgres:15-alpine

if errorlevel 1 (
    echo.
    echo Container may already exist. Trying to start...
    docker start defi-postgres
)

echo.
echo Waiting for PostgreSQL to be ready...
timeout /t 5 /nobreak >nul

echo.
echo Starting Redis...
docker run -d ^
  --name defi-redis ^
  -p 6379:6379 ^
  redis:7-alpine

if errorlevel 1 (
    echo.
    echo Container may already exist. Trying to start...
    docker start defi-redis
)

echo.
echo ========================================
echo Database Setup Complete!
echo ========================================
echo PostgreSQL: localhost:5432
echo   Database: defi_risk_db
echo   User: defi_user
echo   Password: defi_pass
echo.
echo Redis: localhost:6379
echo ========================================
echo.
echo Run: python -m uvicorn app.main:app --reload
echo.
pause
