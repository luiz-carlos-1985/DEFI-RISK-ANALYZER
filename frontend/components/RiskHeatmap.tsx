'use client'

import { Activity } from 'lucide-react'

interface RiskData {
  category: string
  protocols: Array<{ name: string; risk: number }>
}

export default function RiskHeatmap() {
  const data: RiskData[] = [
    { category: 'Lending', protocols: [
      { name: 'Aave', risk: 2.5 },
      { name: 'Compound', risk: 3.1 },
      { name: 'MakerDAO', risk: 2.8 }
    ]},
    { category: 'DEX', protocols: [
      { name: 'Uniswap', risk: 3.5 },
      { name: 'Curve', risk: 2.9 },
      { name: 'Balancer', risk: 4.2 }
    ]},
    { category: 'Yield', protocols: [
      { name: 'Yearn', risk: 5.1 },
      { name: 'Convex', risk: 4.8 },
      { name: 'Beefy', risk: 6.2 }
    ]}
  ]

  const getRiskColor = (risk: number) => {
    if (risk <= 3) return 'bg-green-500'
    if (risk <= 5) return 'bg-yellow-500'
    if (risk <= 7) return 'bg-orange-500'
    return 'bg-red-500'
  }

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <Activity className="w-6 h-6 text-orange-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Risk Heatmap</h2>
      </div>
      
      <div className="space-y-4">
        {data.map((category) => (
          <div key={category.category}>
            <h3 className="text-slate-300 font-medium mb-2">{category.category}</h3>
            <div className="grid grid-cols-3 gap-3">
              {category.protocols.map((protocol) => (
                <div
                  key={protocol.name}
                  className={`${getRiskColor(protocol.risk)} bg-opacity-20 border-2 ${getRiskColor(protocol.risk).replace('bg-', 'border-')} rounded-lg p-3 hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="text-white font-medium text-sm">{protocol.name}</div>
                  <div className={`text-xs ${getRiskColor(protocol.risk).replace('bg-', 'text-')}`}>
                    Risk: {protocol.risk.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
