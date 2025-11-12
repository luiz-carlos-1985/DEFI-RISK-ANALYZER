# 🚀 Setup Completo - DeFi Risk Analyzer

## Pré-requisitos

- Python 3.11+
- Docker Desktop
- Node.js 18+ (para frontend)
- Git

## 1️⃣ Setup do Banco de Dados

### Opção A: Docker (Recomendado)

```bash
# Execute o script de setup
setup-db.bat
```

### Opção B: PostgreSQL Local

```bash
# Instale PostgreSQL 15
# Crie o banco de dados
createdb -U postgres defi_risk_db
```

## 2️⃣ Setup do Backend

```bash
# 1. Clone o repositório
git clone <repo-url>
cd DeFi-Risk-Analyzer

# 2. Crie ambiente virtual
python -m venv venv
venv\Scripts\activate

# 3. Instale dependências
pip install -r requirements-minimal.txt

# 4. Configure variáveis de ambiente
copy .env.example .env
# Edite .env com suas configurações

# 5. Execute migrações
alembic upgrade head

# 6. Inicie o servidor
python -m uvicorn app.main:app --reload
```

## 3️⃣ Setup do Frontend

```bash
cd frontend

# 1. Instale dependências
npm install

# 2. Configure ambiente
copy .env.example .env.local

# 3. Inicie o servidor
npm run dev
```

## 4️⃣ Verificação

### Backend
- API Docs: http://localhost:8000/docs
- Health Check: http://localhost:8000/health
- Metrics: http://localhost:8000/metrics

### Frontend
- App: http://localhost:3000

### Database
```bash
# Verifique conexão PostgreSQL
docker exec -it defi-postgres psql -U defi_user -d defi_risk_db

# Verifique Redis
docker exec -it defi-redis redis-cli ping
```

## 5️⃣ Funcionalidades Avançadas

### Cache Redis
- Ativado automaticamente
- TTL configurável por endpoint
- Invalidação inteligente

### Background Jobs (Celery)
```bash
# Terminal 1: Worker
celery -A app.celery_app worker --loglevel=info

# Terminal 2: Beat (scheduler)
celery -A app.celery_app beat --loglevel=info
```

### Monitoramento
- Prometheus: http://localhost:8000/metrics
- Grafana: http://localhost:3001 (via docker-compose)

## 6️⃣ Desenvolvimento

### Criar nova migração
```bash
alembic revision --autogenerate -m "description"
alembic upgrade head
```

### Testes
```bash
pytest tests/ -v
```

### Lint
```bash
black app/
flake8 app/
mypy app/
```

## 7️⃣ Produção

### Docker Compose
```bash
docker-compose up -d
```

### Kubernetes
```bash
kubectl apply -f kubernetes/
```

## 🔧 Troubleshooting

### Erro: "connection refused"
```bash
# Verifique se PostgreSQL está rodando
docker ps | findstr postgres

# Reinicie container
docker restart defi-postgres
```

### Erro: "database does not exist"
```bash
# Recrie o banco
docker exec -it defi-postgres createdb -U defi_user defi_risk_db
```

### Erro: "port already in use"
```bash
# Encontre processo usando a porta
netstat -ano | findstr :8000

# Mate o processo
taskkill /PID <pid> /F
```

## 📊 Estrutura do Banco de Dados

### Tabelas Principais
- `protocols` - Protocolos DeFi
- `risk_assessments` - Avaliações de risco
- `portfolios` - Portfólios de usuários
- `transactions` - Transações
- `users` - Usuários
- `subscriptions` - Assinaturas SaaS
- `alerts` - Alertas em tempo real

### Índices
- Otimizados para queries frequentes
- Índices compostos para joins
- Índices parciais para filtros

## 🚀 Performance

### Cache Strategy
- L1: Redis (hot data)
- L2: PostgreSQL (warm data)
- L3: Blockchain (cold data)

### Query Optimization
- Connection pooling
- Prepared statements
- Batch operations
- Async queries

## 🔐 Segurança

### Autenticação
- JWT tokens
- Refresh tokens
- Rate limiting

### Autorização
- Role-based access control (RBAC)
- API key management
- IP whitelisting

## 📈 Monitoramento

### Métricas
- Request latency
- Error rates
- Database connections
- Cache hit ratio
- Queue length

### Logs
- Structured logging (JSON)
- Log aggregation
- Error tracking (Sentry)

## 🎯 Próximos Passos

1. Configure suas API keys no `.env`
2. Execute `setup-db.bat`
3. Inicie o backend
4. Inicie o frontend
5. Acesse http://localhost:3000

**Pronto! Sistema completo funcionando! 🎉**
