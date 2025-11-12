@echo off
echo ========================================
echo DeFi Risk Analyzer - Setup Automatico
echo ========================================
echo.

cd /d C:\PROJETOS\DeFi-Risk-Analyzer

echo [1/6] Removendo ambiente antigo...
if exist venv rmdir /s /q venv

echo [2/6] Criando novo ambiente virtual...
python -m venv venv

echo [3/6] Ativando ambiente...
call venv\Scripts\activate.bat

echo [4/6] Atualizando pip...
python -m pip install --upgrade pip

echo [5/6] Instalando dependencias...
pip install -r requirements-minimal.txt

echo [6/6] Configurando ambiente...
if not exist .env copy .env.example .env

echo.
echo ========================================
echo Setup completo!
echo ========================================
echo.
echo Para executar o servidor:
echo   venv\Scripts\activate
echo   python -m uvicorn app.main:app --reload
echo.
echo Acesse: http://localhost:8000/docs
echo.
pause