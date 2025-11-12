'use client'

import { TrendingUp, Zap, DollarSign } from 'lucide-react'

export default function YieldOptimizer() {
  const opportunities = [
    { protocol: 'Aave V3', apy: 12.5, tvl: 8500, risk: 2.1, chain: 'Ethereum' },
    { protocol: 'Compound', apy: 9.8, tvl: 6200, risk: 2.3, chain: 'Ethereum' },
    { protocol: 'Curve 3pool', apy: 15.2, tvl: 12000, risk: 3.5, chain: 'Ethereum' },
    { protocol: 'Yearn Finance', apy: 18.7, tvl: 4500, risk: 4.8, chain: 'Polygon' }
  ]

  return (
    <div className="card-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Zap className="w-6 h-6 text-yellow-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Yield Optimizer</h2>
        </div>
        <button className="btn-primary text-sm py-2 px-4">
          Auto-Optimize
        </button>
      </div>

      <div className="space-y-3">
        {opportunities.map((opp, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold">{opp.protocol}</h3>
                <span className="text-slate-400 text-sm">{opp.chain}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{opp.apy}%</div>
                <span className="text-slate-400 text-xs">APY</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-slate-400">TVL: </span>
                  <span className="text-white">${opp.tvl}M</span>
                </div>
                <div>
                  <span className="text-slate-400">Risk: </span>
                  <span className={opp.risk <= 3 ? 'text-green-400' : 'text-yellow-400'}>
                    {opp.risk}/10
                  </span>
                </div>
              </div>
              <button className="btn-success text-xs py-1 px-3">
                Invest
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
