@echo off
echo ========================================
echo DeFi Risk Analyzer - Start
echo ========================================
echo.

echo [1/3] Instalando dependencias...
pip install aiosqlite -q
if errorlevel 1 (
    echo Erro ao instalar aiosqlite
    pause
    exit /b 1
)
echo ✅ Dependencias OK

echo.
echo [2/3] Criando banco de dados...
python init_db.py
if errorlevel 1 (
    echo ⚠️  Aviso: Erro ao criar BD, mas continuando...
)

echo.
echo [3/3] Iniciando servidor...
echo.
echo ========================================
echo 🚀 Sistema iniciado!
echo ========================================
echo API: http://localhost:8000/docs
echo ========================================
echo.
python -m uvicorn app.main:app --reload
