@echo off
echo Checking Backend Status...
echo.

curl -s http://localhost:8000/health

if %errorlevel% equ 0 (
    echo.
    echo ✓ Backend is running!
) else (
    echo.
    echo ✗ Backend is NOT running!
    echo.
    echo Starting backend...
    start "Backend Server" cmd /k "python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"
)

pause
