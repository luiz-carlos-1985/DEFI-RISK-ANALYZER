# 📘 Frontend Documentation - DeFi Risk Analyzer

## 🏗️ Arquitetura

### Stack Tecnológico
- **Framework:** Next.js 14.0.3
- **React:** 18.2.0
- **TypeScript:** 5.3.2
- **Styling:** Tailwind CSS 3.3.5
- **UI Components:** Headless UI, Lucide React
- **Charts:** Recharts 2.8.0
- **Web3:** Wagmi 1.4.12, Ethers 6.8.1, RainbowKit 1.3.0
- **State Management:** TanStack Query 5.8.4
- **HTTP Client:** Axios 1.6.2
- **Animations:** Framer Motion 10.16.5

### Estrutura de Diretórios
```
frontend/
├── app/                    # App Router (Next.js 14)
│   ├── about/             # Página sobre
│   ├── analytics/         # Dashboard de analytics
│   ├── blog/              # Blog
│   ├── docs/              # Documentação
│   ├── features/          # Features
│   ├── portfolio/         # Portfolio tracker
│   ├── pricing/           # Pricing
│   ├── protocols/         # Protocolos DeFi
│   ├── support/           # Suporte
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/             # Componentes React
│   ├── AdvancedCharts.tsx
│   ├── GasTracker.tsx
│   ├── LiveAlerts.tsx
│   ├── MarketOverview.tsx
│   ├── PortfolioTracker.tsx
│   ├── PricingTable.tsx
│   ├── ProtocolList.tsx
│   ├── RevolutionaryDashboard.tsx
│   ├── RiskAnalysisCard.tsx
│   ├── RiskHeatmap.tsx
│   ├── SecurityDashboard.tsx
│   ├── SmartContractAuditor.tsx
│   └── YieldOptimizer.tsx
├── hooks/                  # Custom React Hooks
├── lib/                    # Bibliotecas e utilitários
│   ├── api.ts             # Cliente API
│   ├── errorHandler.ts    # Tratamento de erros
│   ├── mockData.ts        # Dados mock
│   ├── monitoring.ts      # Monitoramento
│   ├── security.ts        # Segurança
│   ├── validation.ts      # Validação
│   └── wallet.ts          # Integração wallet
├── types/                  # TypeScript types
├── .env.local             # Variáveis de ambiente
├── middleware.ts          # Middleware Next.js
├── next.config.js         # Configuração Next.js
├── tailwind.config.ts     # Configuração Tailwind
└── tsconfig.json          # Configuração TypeScript
```

---

## 🚀 Instalação e Configuração

### 1. Requisitos
```bash
Node.js 18+
npm ou yarn
```

### 2. Instalação
```bash
cd frontend

# Instalar dependências
npm install

# ou
yarn install
```

### 3. Configuração de Ambiente
```bash
# Copiar arquivo de exemplo
copy .env.example .env.local
```

**Variáveis de Ambiente (.env.local):**
```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_VERSION=v1

# Blockchain RPC URLs
NEXT_PUBLIC_ETHEREUM_RPC=https://mainnet.infura.io/v3/YOUR_KEY
NEXT_PUBLIC_POLYGON_RPC=https://polygon-rpc.com
NEXT_PUBLIC_BSC_RPC=https://bsc-dataseed.binance.org

# WalletConnect
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_QUANTUM=true
NEXT_PUBLIC_ENABLE_AUTOPILOT=true
```

### 4. Executar Aplicação
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

**Acesso:**
- Frontend: http://localhost:3000

---

## 📁 Páginas Principais

### Homepage (/)
```tsx
// app/page.tsx
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <RevolutionaryDashboard />
      <Pricing />
    </main>
  )
}
```

### Portfolio (/portfolio)
```tsx
// app/portfolio/page.tsx
export default function Portfolio() {
  return (
    <div>
      <PortfolioTracker />
      <RiskAnalysisCard />
      <YieldOptimizer />
    </div>
  )
}
```

### Analytics (/analytics)
```tsx
// app/analytics/page.tsx
export default function Analytics() {
  return (
    <div>
      <MarketOverview />
      <AdvancedCharts />
      <RiskHeatmap />
    </div>
  )
}
```

### Protocols (/protocols)
```tsx
// app/protocols/page.tsx
export default function Protocols() {
  return (
    <div>
      <ProtocolList />
      <SmartContractAuditor />
      <SecurityDashboard />
    </div>
  )
}
```

---

## 🧩 Componentes Principais

### PortfolioTracker
```tsx
import { PortfolioTracker } from '@/components/PortfolioTracker'

<PortfolioTracker 
  walletAddress="0x1234..."
  blockchain="ethereum"
/>
```

**Props:**
- `walletAddress`: string - Endereço da carteira
- `blockchain`: string - Blockchain (ethereum, polygon, bsc)

### RiskAnalysisCard
```tsx
import { RiskAnalysisCard } from '@/components/RiskAnalysisCard'

<RiskAnalysisCard 
  protocolAddress="0x1234..."
  showDetails={true}
/>
```

**Props:**
- `protocolAddress`: string - Endereço do protocolo
- `showDetails`: boolean - Mostrar detalhes

### RevolutionaryDashboard
```tsx
import { RevolutionaryDashboard } from '@/components/RevolutionaryDashboard'

<RevolutionaryDashboard 
  userId="user123"
  features={['quantum', 'autopilot', 'oracle']}
/>
```

**Props:**
- `userId`: string - ID do usuário
- `features`: string[] - Features habilitadas

### AdvancedCharts
```tsx
import { AdvancedCharts } from '@/components/AdvancedCharts'

<AdvancedCharts 
  data={chartData}
  type="line"
  height={400}
/>
```

**Props:**
- `data`: ChartData[] - Dados do gráfico
- `type`: 'line' | 'bar' | 'area' - Tipo de gráfico
- `height`: number - Altura em pixels

---

## 🔌 API Integration

### Cliente API (lib/api.ts)
```typescript
import { apiClient } from '@/lib/api'

// Análise de protocolo
const analyzeProtocol = async (address: string) => {
  const response = await apiClient.post('/protocols/analyze', {
    protocol_address: address,
    blockchain: 'ethereum'
  })
  return response.data
}

// Análise de portfolio
const analyzePortfolio = async (walletAddress: string) => {
  const response = await apiClient.post('/portfolio/analyze', {
    wallet_address: walletAddress,
    blockchain: 'ethereum'
  })
  return response.data
}

// AI Oracle Prediction
const predictProtocol = async (address: string, days: number) => {
  const response = await apiClient.post('/revolutionary/ai-oracle/predict', {
    protocol_address: address,
    prediction_days: days
  })
  return response.data
}
```

### React Query Hooks
```typescript
import { useQuery, useMutation } from '@tanstack/react-query'

// Hook para análise de protocolo
export const useProtocolAnalysis = (address: string) => {
  return useQuery({
    queryKey: ['protocol', address],
    queryFn: () => analyzeProtocol(address),
    enabled: !!address
  })
}

// Hook para análise de portfolio
export const usePortfolioAnalysis = (walletAddress: string) => {
  return useQuery({
    queryKey: ['portfolio', walletAddress],
    queryFn: () => analyzePortfolio(walletAddress),
    enabled: !!walletAddress
  })
}

// Hook para ativar autopilot
export const useActivateAutopilot = () => {
  return useMutation({
    mutationFn: (data) => activateAutopilot(data),
    onSuccess: () => {
      toast.success('Autopilot ativado!')
    }
  })
}
```

---

## 🔗 Web3 Integration

### Wallet Connection (lib/wallet.ts)
```typescript
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export const WalletConnect = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div>
      {isConnected ? (
        <button onClick={() => disconnect()}>
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </button>
      ) : (
        <button onClick={() => connect({ connector: connectors[0] })}>
          Connect Wallet
        </button>
      )}
    </div>
  )
}
```

### Read Contract Data
```typescript
import { useContractRead } from 'wagmi'

export const useProtocolTVL = (address: string) => {
  return useContractRead({
    address: address as `0x${string}`,
    abi: PROTOCOL_ABI,
    functionName: 'getTotalValueLocked'
  })
}
```

---

## 🎨 Styling com Tailwind

### Configuração (tailwind.config.ts)
```typescript
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        success: '#10B981',
        danger: '#EF4444',
        warning: '#F59E0B',
      },
    },
  },
  plugins: [],
}
```

### Exemplo de Uso
```tsx
<div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg shadow-xl">
  <h2 className="text-2xl font-bold text-white mb-4">
    Risk Score
  </h2>
  <p className="text-4xl font-bold text-white">
    {riskScore}
  </p>
</div>
```

---

## 🔒 Segurança

### Input Validation (lib/validation.ts)
```typescript
export const validateAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '')
}
```

### Error Handling (lib/errorHandler.ts)
```typescript
export const handleApiError = (error: any) => {
  if (error.response) {
    toast.error(error.response.data.message)
  } else if (error.request) {
    toast.error('Network error. Please try again.')
  } else {
    toast.error('An unexpected error occurred.')
  }
}
```

---

## 📊 Monitoramento

### Performance Monitoring (lib/monitoring.ts)
```typescript
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}

export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}
```

---

## 🧪 Testes

### Configuração Jest
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Exemplo de Teste
```typescript
import { render, screen } from '@testing-library/react'
import { PortfolioTracker } from '@/components/PortfolioTracker'

describe('PortfolioTracker', () => {
  it('renders portfolio data', () => {
    render(<PortfolioTracker walletAddress="0x1234..." />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t defi-risk-analyzer-frontend .
docker run -p 3000:3000 defi-risk-analyzer-frontend
```

---

## 📈 Performance

### Otimizações
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic com Next.js
- **Lazy Loading:** React.lazy() para componentes pesados
- **Caching:** React Query para cache de dados
- **SSR/SSG:** Server-Side Rendering quando apropriado

### Lighthouse Score Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔧 Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Ou usar outra porta
npm run dev -- -p 3001
```

### Erro: TypeScript
```bash
npm run type-check
```

---

**© 2024 DeFi Risk Analyzer - Frontend Documentation**
