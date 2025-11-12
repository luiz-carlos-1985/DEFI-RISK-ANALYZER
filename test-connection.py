import asyncio
import asyncpg
from dotenv import load_dotenv
import os

load_dotenv()

async def test():
    try:
        conn = await asyncpg.connect(
            user='admin',
            password='123456',
            database='DeFiRiskIntelligence',
            host='localhost',
            port=5432,
            timeout=5
        )
        print("✓ Conexao bem-sucedida!")
        await conn.close()
        return True
    except Exception as e:
        print(f"✗ Erro de conexao: {e}")
        return False

if __name__ == "__main__":
    asyncio.run(test())
