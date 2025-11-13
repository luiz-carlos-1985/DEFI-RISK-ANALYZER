'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Activity } from 'lucide-react'
import AdvancedCharts from '../../components/AdvancedCharts'
import RiskHeatmap from '../../components/RiskHeatmap'

export default function AnalyticsPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Analytics Dashboard</h1>
        <p className="text-slate-400">Advanced market analytics and risk metrics</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="card">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-lg font-bold text-white">Total Volume</h3>
          </div>
          <div className="text-3xl font-bold text-white">$2.5B</div>
          <div className="text-green-400 text-sm mt-2">+12.5% from last week</div>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="text-lg font-bold text-white">Active Users</h3>
          </div>
          <div className="text-3xl font-bold text-white">45.2K</div>
          <div className="text-green-400 text-sm mt-2">+8.3% from last week</div>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 text-purple-400 mr-3" />
            <h3 className="text-lg font-bold text-white">Transactions</h3>
          </div>
          <div className="text-3xl font-bold text-white">1.2M</div>
          <div className="text-green-400 text-sm mt-2">+15.7% from last week</div>
        </div>
      </div>

      <div className="mb-8">
        <AdvancedCharts />
      </div>

      <RiskHeatmap />
    </div>
  )
}
