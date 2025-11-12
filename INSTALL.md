# 📦 Guia de Instalação Completo

## ✅ Instalação Testada e Funcionando

### Pré-requisitos
- Python 3.11+
- Node.js 18+ (opcional, apenas para frontend)
- Git

---

## 🚀 Instalação Rápida (5 minutos)

### 1. Clone o Repositório
```bash
git clone https://github.com/your-repo/defi-risk-analyzer.git
cd defi-risk-analyzer
```

### 2. Configure o Backend
```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente (Windows)
venv\Scripts\activate

# Atualizar pip
python -m pip install --upgrade pip

# Instalar dependências mínimas
pip install -r requirements-minimal.txt

# Configurar variáveis de ambiente
copy .env.example .env
```

### 3. Execute o Backend
```bash
python -m uvicorn app.main:app --reload
```

✅ **Backend rodando em:** http://localhost:8000/docs

---

## 🎨 Frontend (Opcional)

```bash
# Em outro terminal
cd frontend
npm install
copy .env.example .env.local
npm run dev
```

✅ **Frontend rodando em:** http://localhost:3000

---

## 🐳 Instalação com Docker

```bash
docker-compose up -d
```

**Acesse:**
- API: http://localhost:8000/docs
- Frontend: http://localhost:3000
- Grafana: http://localhost:3001

---

## 🔧 Troubleshooting

### Problema: "uvicorn não é reconhecido"
**Solução:**
```bash
python -m uvicorn app.main:app --reload
```

### Problema: "metadata-generation-failed"
**Solução:** Use requirements-minimal.txt
```bash
pip install -r requirements-minimal.txt
```

### Problema: "package.json not found"
**Solução:** Entre na pasta frontend
```bash
cd frontend
npm install
```

### Problema: "ModuleNotFoundError"
**Solução:** Reinstale dependências
```bash
pip install -r requirements-minimal.txt --force-reinstall
```

---

## 📊 Testar a API

### Health Check
```bash
curl http://localhost:8000/health
```

### Listar Endpoints
Acesse: http://localhost:8000/docs

### Testar Funcionalidade Revolucionária
```bash
curl -X POST "http://localhost:8000/api/v1/revolutionary/competitive-analysis"
```

---

## 🎯 Próximos Passos

1. ✅ Explore a documentação interativa: http://localhost:8000/docs
2. ✅ Teste as funcionalidades revolucionárias
3. ✅ Leia a documentação completa: `docs/API_DOCUMENTATION.md`
4. ✅ Configure para produção: `docs/PRODUCTION_DEPLOYMENT.md`

---

## 💡 Dicas

- Use `requirements-minimal.txt` para instalação rápida
- Use `requirements.txt` para instalação completa (com ML)
- Frontend é opcional - API funciona independentemente
- Todas as funcionalidades revolucionárias estão na API

---

**🚀 Sistema pronto para uso!**