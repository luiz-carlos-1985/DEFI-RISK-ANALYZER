@echo off
cd /d C:\PROJETOS\DeFi-Risk-Analyzer
call venv\Scripts\activate.bat
python -m uvicorn app.main:app --reload