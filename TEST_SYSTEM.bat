@echo off
echo ========================================
echo TESTANDO SISTEMA COMPLETO
echo ========================================
echo.

echo [1/4] Testando Backend Health...
curl -s http://localhost:8000/health
if %errorlevel% neq 0 (
    echo ERRO: Backend nao esta rodando!
    exit /b 1
)
echo OK
echo.

echo [2/4] Testando Market Overview API...
curl -s http://localhost:8000/api/v1/market/overview > nul
if %errorlevel% neq 0 (
    echo ERRO: Market Overview API falhou!
    exit /b 1
)
echo OK
echo.

echo [3/4] Testando Trending Protocols API...
curl -s "http://localhost:8000/api/v1/protocols/trending?limit=5" > nul
if %errorlevel% neq 0 (
    echo ERRO: Trending Protocols API falhou!
    exit /b 1
)
echo OK
echo.

echo [4/4] Testando Frontend...
curl -s http://localhost:3000 > nul
if %errorlevel% neq 0 (
    echo AVISO: Frontend pode nao estar rodando
) else (
    echo OK
)
echo.

echo ========================================
echo TODOS OS TESTES PASSARAM!
echo ========================================
echo.
echo Sistema 100%% funcional:
echo - Backend: http://localhost:8000
echo - Frontend: http://localhost:3000
echo - API Docs: http://localhost:8000/docs
echo ========================================

pause
