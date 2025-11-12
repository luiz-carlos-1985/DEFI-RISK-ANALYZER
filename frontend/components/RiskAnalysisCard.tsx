'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, TrendingUp, Shield } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface RiskAnalysisCardProps {
  data: any
}

const RISK_COLORS = {
  LOW: '#10b981',
  MEDIUM: '#f59e0b',
  HIGH: '#f97316',
  CRITICAL: '#ef4444'
}

const RISK_CHART_DATA = [
  { name: 'Liquidity', value: 25, color: '#3b82f6' },
  { name: 'Market', value: 30, color: '#8b5cf6' },
  { name: 'Smart Contract', value: 25, color: '#06b6d4' },
  { name: 'Counterparty', value: 20, color: '#10b981' }
]

export default function RiskAnalysisCard({ data }: RiskAnalysisCardProps) {
  const riskAnalysis = data.risk_analysis
  const riskLevel = riskAnalysis.risk_level
  const riskScore = riskAnalysis.overall_risk_score

  const getRiskColor = (level: string) => RISK_COLORS[level as keyof typeof RISK_COLORS]
  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'LOW': return <Shield className="w-5 h-5" />
      case 'MEDIUM': return <TrendingUp className="w-5 h-5" />
      case 'HIGH': return <TrendingDown className="w-5 h-5" />
      case 'CRITICAL': return <AlertTriangle className="w-5 h-5" />
      default: return <Shield className="w-5 h-5" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Overall Risk</span>
            <div style={{ color: getRiskColor(riskLevel) }}>
              {getRiskIcon(riskLevel)}
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-white">
              {(riskScore * 100).toFixed(1)}%
            </span>
            <span 
              className="ml-2 px-2 py-1 rounded text-xs font-medium"
              style={{ 
                color: getRiskColor(riskLevel),
                backgroundColor: `${getRiskColor(riskLevel)}20`
              }}
            >
              {riskLevel}
            </span>
          </div>
        </div>

        <div className="card">
          <div className="text-slate-400 text-sm mb-2">Portfolio Value</div>
          <div className="text-2xl font-bold text-white">
            ${data.balance_data.balance_eth * 2000 || 0}
          </div>
          <div className="text-green-400 text-sm">
            {data.balance_data.balance_eth.toFixed(4)} ETH
          </div>
        </div>

        <div className="card">
          <div className="text-slate-400 text-sm mb-2">1-Day VaR</div>
          <div className="text-2xl font-bold text-white">
            ${riskAnalysis.var_metrics.var_1d.toFixed(0)}
          </div>
          <div className="text-red-400 text-sm">95% confidence</div>
        </div>

        <div className="card">
          <div className="text-slate-400 text-sm mb-2">Confidence</div>
          <div className="text-2xl font-bold text-white">
            {(riskAnalysis.confidence_score * 100).toFixed(0)}%
          </div>
          <div className="text-blue-400 text-sm">Model accuracy</div>
        </div>
      </div>

      {/* Risk Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Risk Components</h3>
          <div className="space-y-4">
            {Object.entries(riskAnalysis.risk_components).map(([key, value]) => {
              const percentage = (value as number) * 100
              const label = key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
              
              return (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{label}</span>
                    <span className="text-white">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Risk Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={RISK_CHART_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {RISK_CHART_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Value at Risk */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Value at Risk (VaR)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">1 Day</div>
            <div className="text-xl font-bold text-red-400">
              ${riskAnalysis.var_metrics.var_1d.toFixed(0)}
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">7 Days</div>
            <div className="text-xl font-bold text-red-400">
              ${riskAnalysis.var_metrics.var_7d.toFixed(0)}
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">30 Days</div>
            <div className="text-xl font-bold text-red-400">
              ${riskAnalysis.var_metrics.var_30d.toFixed(0)}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Risk Mitigation Recommendations</h3>
        <div className="space-y-3">
          {riskAnalysis.recommendations.map((recommendation: string, index: number) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-300">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}