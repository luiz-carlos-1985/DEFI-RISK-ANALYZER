'use client'

import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react'

interface MarketData {
  total_tvl?: number
  totalTvl?: number
  tvl_change_24h?: number
  tvlChange24h?: number
  total_volume_24h?: number
  totalVolume24h?: number
  volume_change_24h?: number
  volumeChange24h?: number
  active_protocols?: number
  activeProtocols?: number
  risk_index?: number
  riskIndex?: number
}

interface MarketOverviewProps {
  data: MarketData
}

export default function MarketOverview({ data }: MarketOverviewProps) {
  if (!data) return null
  
  const formatNumber = (num: number) => {
    if (!num) return '$0'
    if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`
    return `$${num.toLocaleString()}`
  }

  const getRiskColor = (score: number) => {
    if (score <= 3) return 'text-green-400'
    if (score <= 6) return 'text-yellow-400'
    return 'text-red-400'
  }

  const tvl = data.total_tvl || data.totalTvl || 0
  const tvlChange = data.tvl_change_24h || data.tvlChange24h || 0
  const volume = data.total_volume_24h || data.totalVolume24h || 0
  const volumeChange = data.volume_change_24h || data.volumeChange24h || 0
  const protocols = data.active_protocols || data.activeProtocols || 0
  const riskIdx = data.risk_index || data.riskIndex || 0

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
      <div className="card hover:glow-blue">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-1 sm:mr-2" />
            <span className="text-slate-300 text-xs sm:text-sm">TVL</span>
          </div>
          <div className={`flex items-center ${tvlChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {tvlChange >= 0 ? (
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            ) : (
              <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            )}
            <span className="text-xs sm:text-sm">{Math.abs(tvlChange).toFixed(1)}%</span>
          </div>
        </div>
        <div className="text-lg sm:text-2xl font-bold text-white">
          {formatNumber(tvl)}
        </div>
      </div>

      <div className="card hover:glow-purple">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-1 sm:mr-2" />
            <span className="text-slate-300 text-xs sm:text-sm">Volume</span>
          </div>
          <div className={`flex items-center ${volumeChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {volumeChange >= 0 ? (
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            ) : (
              <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            )}
            <span className="text-xs sm:text-sm">{Math.abs(volumeChange).toFixed(1)}%</span>
          </div>
        </div>
        <div className="text-lg sm:text-2xl font-bold text-white">
          {formatNumber(volume)}
        </div>
      </div>

      <div className="card hover:glow-green">
        <div className="flex items-center mb-2">
          <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-1 sm:mr-2" />
          <span className="text-slate-300 text-xs sm:text-sm">Protocols</span>
        </div>
        <div className="text-lg sm:text-2xl font-bold text-white">
          {protocols.toLocaleString()}
        </div>
      </div>

      <div className="card hover:glow-blue">
        <div className="flex items-center mb-2">
          <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mr-1 sm:mr-2" />
          <span className="text-slate-300 text-xs sm:text-sm">Risk</span>
        </div>
        <div className={`text-lg sm:text-2xl font-bold ${getRiskColor(riskIdx)}`}>
          {riskIdx.toFixed(1)}/10
        </div>
      </div>
    </div>
  )
}
