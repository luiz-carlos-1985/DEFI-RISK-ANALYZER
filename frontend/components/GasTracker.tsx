'use client'

import { Fuel, TrendingDown, TrendingUp } from 'lucide-react'

export default function GasTracker() {
  const gasData = [
    { chain: 'Ethereum', current: 45, trend: -12, optimal: 25 },
    { chain: 'Polygon', current: 35, trend: 8, optimal: 20 },
    { chain: 'Arbitrum', current: 0.5, trend: -5, optimal: 0.3 },
    { chain: 'Optimism', current: 0.8, trend: 15, optimal: 0.4 }
  ]

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <Fuel className="w-6 h-6 text-orange-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Gas Tracker</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {gasData.map((gas, i) => (
          <div key={i} className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 font-medium">{gas.chain}</span>
              <div className={`flex items-center ${gas.trend < 0 ? 'text-green-400' : 'text-red-400'}`}>
                {gas.trend < 0 ? (
                  <TrendingDown className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingUp className="w-4 h-4 mr-1" />
                )}
                <span className="text-xs">{Math.abs(gas.trend)}%</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{gas.current} Gwei</div>
            <div className="text-xs text-slate-400">Optimal: {gas.optimal} Gwei</div>
          </div>
        ))}
      </div>
    </div>
  )
}
