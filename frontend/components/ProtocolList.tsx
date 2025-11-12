'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

interface Protocol {
  id: string
  name: string
  tvl: number
  change24h: number
  riskScore: number
  risk_score?: number
  category: string
}

interface ProtocolListProps {
  protocols: Protocol[]
}

export default function ProtocolList({ protocols }: ProtocolListProps) {
  if (!protocols || protocols.length === 0) return null

  const getRiskColor = (score: number) => {
    if (score <= 3) return 'text-green-400'
    if (score <= 6) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="overflow-x-auto -mx-3 sm:mx-0">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">Protocol</th>
            <th className="text-right py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">TVL</th>
            <th className="text-right py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">24h</th>
            <th className="text-right py-2 sm:py-3 px-2 sm:px-4 text-slate-300 text-xs sm:text-sm">Risk</th>
          </tr>
        </thead>
        <tbody>
          {protocols.map((protocol, index) => (
            <tr key={protocol.id || index} className="border-b border-slate-800 hover:bg-slate-800/70 transition-all duration-200 cursor-pointer">
              <td className="py-3 sm:py-4 px-2 sm:px-4">
                <div>
                  <div className="font-medium text-white text-sm sm:text-base">{protocol.name}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{protocol.category}</div>
                </div>
              </td>
              <td className="text-right py-3 sm:py-4 px-2 sm:px-4 text-white text-sm sm:text-base">
                ${((protocol.tvl || 0) / 1000000).toFixed(0)}M
              </td>
              <td className="text-right py-3 sm:py-4 px-2 sm:px-4">
                <div className={`flex items-center justify-end text-sm sm:text-base ${(protocol.change24h || 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {(protocol.change24h || 0) >= 0 ? (
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  )}
                  {Math.abs(protocol.change24h || 0).toFixed(1)}%
                </div>
              </td>
              <td className="text-right py-3 sm:py-4 px-2 sm:px-4">
                <span className={`font-medium text-sm sm:text-base ${getRiskColor((protocol.riskScore || protocol.risk_score || 0) * 10)}`}>
                  {((protocol.riskScore || protocol.risk_score || 0) * 10).toFixed(1)}/10
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
