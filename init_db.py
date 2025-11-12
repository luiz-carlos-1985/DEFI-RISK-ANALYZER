"""
Script para inicializar o banco de dados automaticamente
"""
import asyncio
from app.core.database import init_db, engine
from app.models.protocol import Protocol
from app.models.risk_assessment import RiskAssessment
from app.models.portfolio import Portfolio
from app.models.transaction import Transaction

async def create_database():
    print("Iniciando criacao do banco de dados...")
    
    try:
        await init_db()
        print("Tabelas criadas com sucesso!")
        print("\nTabelas criadas:")
        print("  - protocols")
        print("  - risk_assessments")
        print("  - portfolios")
        print("  - transactions")
        print("  - users")
        print("  - subscriptions")
        print("  - alerts")
        
    except Exception as e:
        print(f"❌ Erro ao criar banco de dados: {e}")
        raise
    finally:
        await engine.dispose()

if __name__ == "__main__":
    asyncio.run(create_database())
