@echo off
chcp 65001 >nul
echo ========================================
echo Setup PostgreSQL - DeFi Risk Analyzer
echo ========================================
echo.

echo [1/3] Criando usuario admin...
psql -U postgres -c "CREATE USER admin WITH PASSWORD '123456';" 2>nul
if %errorlevel% equ 0 (
    echo Usuario admin criado com sucesso
) else (
    echo Usuario admin ja existe ou erro ao criar
)

echo.
echo [2/3] Criando banco de dados DeFiRiskIntelligence...
psql -U postgres -c "CREATE DATABASE DeFiRiskIntelligence OWNER admin;" 2>nul
if %errorlevel% equ 0 (
    echo Banco DeFiRiskIntelligence criado com sucesso
) else (
    echo Banco DeFiRiskIntelligence ja existe ou erro ao criar
)

echo.
echo [3/3] Concedendo privilegios...
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE DeFiRiskIntelligence TO admin;" 2>nul
psql -U postgres -d DeFiRiskIntelligence -c "GRANT ALL ON SCHEMA public TO admin;" 2>nul
echo Privilegios concedidos

echo.
echo ========================================
echo Setup concluido!
echo ========================================
echo.
echo Credenciais:
echo   Usuario: admin
echo   Senha: 123456
echo   Banco: DeFiRiskIntelligence
echo   Host: localhost
echo   Porta: 5432
echo.
pause
