# Guia de Conexão Frontend-Backend

## Problema Resolvido

✅ CSP configurado para permitir localhost
✅ URL da API corrigida para http://localhost:8000
✅ Proxy reverso configurado no Next.js
✅ Dados mock como fallback
✅ Scripts de inicialização criados

## Como Iniciar

### Opção 1: Script Automático (Recomendado)
```bash
START_SERVERS.bat
```

### Opção 2: Manual

**Terminal 1 - Backend:**
```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Verificar Status

### Verificar Backend:
```bash
CHECK_BACKEND.bat
```

Ou manualmente:
```bash
curl http://localhost:8000/health
```

### Verificar Frontend:
Abra: http://localhost:3000

## URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **API Health**: http://localhost:8000/health

## Configuração

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend
CORS já configurado para aceitar todas as origens em desenvolvimento.

## Modo Desenvolvimento

O frontend tem **fallback automático** para dados mock se o backend não estiver disponível:

- ✅ Market Overview → Dados mock
- ✅ Trending Protocols → Dados mock
- ⚠️ Wallet Analysis → Requer backend

## Troubleshooting

### Backend não inicia:
```bash
# Verificar se porta 8000 está livre
netstat -ano | findstr :8000

# Instalar dependências
pip install -r requirements.txt
```

### Frontend não conecta:
1. Verificar se backend está rodando
2. Verificar .env.local tem URL correta
3. Limpar cache: `npm run dev` (Ctrl+C e reiniciar)

### Erro de CORS:
- Backend já configurado com `allow_origins=["*"]`
- Se persistir, usar proxy do Next.js (já configurado)

### CSP Violation:
- Middleware atualizado para permitir localhost
- Reiniciar frontend após mudanças

## Produção

Para produção, atualizar:

**Frontend:**
```env
NEXT_PUBLIC_API_URL=https://sua-api.com
```

**Backend:**
```python
allow_origins=["https://seu-frontend.com"]
```

## Status Atual

✅ Backend configurado com CORS
✅ Frontend configurado para localhost:8000
✅ Proxy reverso ativo
✅ Dados mock como fallback
✅ Scripts de inicialização prontos
✅ Validação e segurança implementadas

Execute `START_SERVERS.bat` e acesse http://localhost:3000
