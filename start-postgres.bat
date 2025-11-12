@echo off
echo ========================================
echo DeFi Risk Analyzer - PostgreSQL Local
echo ========================================
echo.

echo [1/3] Criando banco de dados...
psql -U postgres -c "CREATE DATABASE defi_risk_db;" 2>nul
if errorlevel 1 (
    echo ⚠️  Banco ja existe ou erro ao criar
) else (
    echo ✅ Banco criado
)

echo.
echo [2/3] Criando tabelas...
venv\Scripts\python.exe init_db.py
if errorlevel 1 (
    echo Erro ao criar tabelas
    pause
    exit /b 1
)

echo.
echo [3/3] Iniciando servidor...
echo.
echo ========================================
echo Sistema iniciado!
echo ========================================
echo API: http://localhost:8000/docs
echo DB: postgresql://localhost:5432/defi_risk_db
echo ========================================
echo.
venv\Scripts\python.exe -m uvicorn app.main:app --reload
