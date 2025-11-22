# 📘 Backend Documentation - DeFi Risk Analyzer

## 🏗️ Arquitetura

### Stack Tecnológico
- **Framework:** FastAPI 0.104.1
- **Python:** 3.11+
- **Servidor:** Uvicorn (ASGI)
- **Banco de Dados:** PostgreSQL + SQLAlchemy
- **Cache:** Redis (opcional)
- **Blockchain:** Web3.py 6.12.0
- **Logging:** Structlog
- **Métricas:** Prometheus

### Estrutura de Diretórios
```
app/
├── api/                    # Rotas da API
│   ├── routes.py          # Rotas principais
│   ├── revolutionary_routes.py  # Features revolucionárias
│   └── saas_routes.py     # Features SaaS
├── core/                   # Configurações centrais
│   ├── config.py          # Variáveis de ambiente
│   └── database.py        # Conexão com banco
├── models/                 # Modelos SQLAlchemy
│   ├── portfolio.py
│   ├── protocol.py
│   ├── risk_assessment.py
│   └── transaction.py
├── schemas/                # Schemas Pydantic
│   └── __init__.py
├── services/               # Lógica de negócio
│   ├── ai_oracle.py
│   ├── blockchain_service.py
│   ├── defi_autopilot.py
│   ├── multiverse_simulator.py
│   ├── neural_market_prophet.py
│   ├── quantum_risk_engine.py
│   ├── realtime_shield.py
│   ├── risk_engine.py
│   ├── saas_engine.py
│   ├── social_trading.py
│   └── time_machine.py
├── utils/                  # Utilitários
└── main.py                # Ponto de entrada
```

---

## 🚀 Instalação e Configuração

### 1. Requisitos
```bash
Python 3.11+
PostgreSQL 14+ (opcional)
Redis (opcional)
```

### 2. Instalação Rápida
```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente (Windows)
venv\Scripts\activate

# Atualizar pip
python -m pip install --upgrade pip

# Instalar dependências
pip install -r requirements-minimal.txt
```

### 3. Configuração de Ambiente
```bash
# Copiar arquivo de exemplo
copy .env.example .env
```

**Variáveis de Ambiente (.env):**
```env
# API Configuration
API_V1_STR=/api/v1
PROJECT_NAME=DeFi Risk Analyzer
DEBUG=True

# Database
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/defi_risk
POSTGRES_USER=defi_user
POSTGRES_PASSWORD=secure_password
POSTGRES_DB=defi_risk

# Redis
REDIS_URL=redis://localhost:6379/0

# Blockchain
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_KEY
POLYGON_RPC_URL=https://polygon-rpc.com
BSC_RPC_URL=https://bsc-dataseed.binance.org

# Security
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# External APIs
COINGECKO_API_KEY=your_key
ETHERSCAN_API_KEY=your_key
```

### 4. Executar Servidor
```bash
# Desenvolvimento
python -m uvicorn app.main:app --reload

# Produção
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

**Acesso:**
- API: http://localhost:8000
- Docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- Métricas: http://localhost:8000/metrics

---

## 📡 API Endpoints

### Health Check
```http
GET /health
```
**Response:**
```json
{
  "status": "healthy",
  "service": "defi-risk-analyzer"
}
```

### Core Endpoints

#### 1. Análise de Risco de Protocolo
```http
POST /api/v1/protocols/analyze
```
**Request:**
```json
{
  "protocol_address": "0x1234...",
  "blockchain": "ethereum"
}
```
**Response:**
```json
{
  "risk_score": 75,
  "risk_level": "medium",
  "factors": {
    "smart_contract": 85,
    "liquidity": 70,
    "audit": 90
  },
  "recommendations": ["Add more liquidity", "Get audit"]
}
```

#### 2. Análise de Portfolio
```http
POST /api/v1/portfolio/analyze
```
**Request:**
```json
{
  "wallet_address": "0x1234...",
  "blockchain": "ethereum"
}
```
**Response:**
```json
{
  "total_value_usd": 50000,
  "risk_score": 65,
  "diversification": 0.75,
  "positions": [
    {
      "protocol": "Uniswap",
      "value_usd": 20000,
      "risk_score": 60
    }
  ]
}
```

### Revolutionary Features

#### 3. AI Oracle Prediction
```http
POST /api/v1/revolutionary/ai-oracle/predict
```
**Request:**
```json
{
  "protocol_address": "0x1234...",
  "prediction_days": 30
}
```
**Response:**
```json
{
  "prediction": {
    "price_change": 15.5,
    "confidence": 0.98,
    "risk_change": -5
  },
  "accuracy": "98%"
}
```

#### 4. Quantum Risk Analysis
```http
POST /api/v1/revolutionary/quantum/analyze
```

#### 5. Multiverse Simulation
```http
POST /api/v1/saas/multiverse/simulate
```

#### 6. DeFi Autopilot
```http
POST /api/v1/revolutionary/autopilot/activate
```

---

## 🔧 Services

### RiskEngine
```python
from app.services.risk_engine import RiskEngine

engine = RiskEngine()
risk_score = await engine.calculate_protocol_risk(protocol_address)
```

### BlockchainService
```python
from app.services.blockchain_service import BlockchainService

service = BlockchainService()
balance = await service.get_wallet_balance(address)
```

---

## 🗄️ Modelos de Dados

### Protocol Model
```python
class Protocol(Base):
    __tablename__ = "protocols"
    
    id = Column(Integer, primary_key=True)
    address = Column(String, unique=True, index=True)
    name = Column(String)
    blockchain = Column(String)
    risk_score = Column(Float)
    tvl_usd = Column(Float)
```

---

## 🚀 Deploy

### Docker
```bash
docker build -t defi-risk-analyzer-backend .
docker run -p 8000:8000 defi-risk-analyzer-backend
```

### Docker Compose
```bash
docker-compose up -d
```

---

**© 2024 DeFi Risk Analyzer - Backend Documentation**
