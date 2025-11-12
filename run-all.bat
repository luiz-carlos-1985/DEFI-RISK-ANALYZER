@echo off
chcp 65001 >nul
echo ========================================
echo DeFi Risk Analyzer - Setup Completo
echo ========================================
echo.

echo [1/4] Criando usuario admin no PostgreSQL...
psql -U postgres -c "CREATE USER admin WITH PASSWORD '123456';" 2>nul
if %errorlevel% equ 0 (
    echo Usuario criado
) else (
    echo Usuario ja existe
)

echo.
echo [2/4] Criando banco DeFiRiskIntelligence...
psql -U postgres -c "CREATE DATABASE \"DeFiRiskIntelligence\" OWNER admin;" 2>nul
if %errorlevel% equ 0 (
    echo Banco criado
) else (
    echo Banco ja existe
)

echo.
echo [3/4] Concedendo privilegios...
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE \"DeFiRiskIntelligence\" TO admin;" 2>nul
psql -U postgres -d DeFiRiskIntelligence -c "GRANT ALL ON SCHEMA public TO admin;" 2>nul
echo Privilegios concedidos

echo.
echo [4/4] Criando tabelas...
venv\Scripts\python.exe init_db.py

echo.
echo ========================================
echo Iniciando servidor...
echo ========================================
echo.
venv\Scripts\python.exe -m uvicorn app.main:app --reload
