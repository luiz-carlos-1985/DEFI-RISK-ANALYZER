# 🚀 Quick Start Guide - Instalação Rápida

## Opção 1: Instalação Simples (Sem Poetry)

### Backend

```bash
# 1. Criar ambiente virtual
python -m venv venv

# 2. Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# 3. Instalar dependências
pip install -r requirements.txt

# 4. Configurar variáveis de ambiente
copy .env.example .env

# 5. Executar servidor
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Acesse:** http://localhost:8000/docs

### Frontend

```bash
# 1. Entrar na pasta frontend
cd frontend

# 2. Instalar dependências
npm install

# 3. Configurar variáveis
copy .env.example .env.local

# 4. Executar
npm run dev
```

**Acesse:** http://localhost:3000

---

## Opção 2: Docker (Recomendado)

```bash
# Executar tudo com um comando
docker-compose up -d
```

**Acesse:**
- Frontend: http://localhost:3000
- API: http://localhost:8000/docs
- Grafana: http://localhost:3001

---

## Opção 3: Com Poetry

```bash
# 1. Instalar Poetry
pip install poetry

# 2. Instalar dependências
poetry install

# 3. Executar
poetry run uvicorn app.main:app --reload
```

---

## Testar API

### Health Check
```bash
curl http://localhost:8000/health
```

### Análise de Wallet
```bash
curl -X POST "http://localhost:8000/api/v1/analyze/wallet?wallet_address=0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb&chain=ethereum"
```

### AI Oracle (Requer Professional Tier)
```bash
curl -X POST "http://localhost:8000/api/v1/revolutionary/ai-oracle/predict" \
  -H "Content-Type: application/json" \
  -d '{"protocol_address": "0x1234", "prediction_days": 30}'
```

### Multiverse Simulator (Requer Quantum Tier)
```bash
curl -X POST "http://localhost:8000/api/v1/saas/multiverse/simulate" \
  -H "Content-Type: application/json" \
  -d '{"portfolio_data": {"total_value": 100000}, "user_id": "user123"}'
```

---

## Troubleshooting

### Erro: Poetry não encontrado
**Solução:** Use `requirements.txt` em vez de Poetry:
```bash
pip install -r requirements.txt
```

### Erro: Porta já em uso
**Solução:** Mude a porta:
```bash
uvicorn app.main:app --reload --port 8001
```

### Erro: Módulo não encontrado
**Solução:** Instale dependências novamente:
```bash
pip install -r requirements.txt --upgrade
```

---

## Próximos Passos

1. ✅ Explore a API: http://localhost:8000/docs
2. ✅ Teste funcionalidades revolucionárias
3. ✅ Leia documentação: `docs/API_DOCUMENTATION.md`
4. ✅ Configure para produção: `docs/PRODUCTION_DEPLOYMENT.md`

---

**🚀 Sistema pronto para uso!**