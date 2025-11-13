'use client'

import { motion } from 'framer-motion'
import { Wallet, TrendingUp, DollarSign, PieChart } from 'lucide-react'
import PortfolioTracker from '../../components/PortfolioTracker'
import YieldOptimizer from '../../components/YieldOptimizer'

export default function PortfolioPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Portfolio Management</h1>
        <p className="text-slate-400">Track and optimize your DeFi portfolio</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="card">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-slate-400 text-sm">Total Value</span>
          </div>
          <div className="text-2xl font-bold text-white">$0.00</div>
        </div>

        <div className="card">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-slate-400 text-sm">24h Change</span>
          </div>
          <div className="text-2xl font-bold text-green-400">+0.0%</div>
        </div>

        <div className="card">
          <div className="flex items-center mb-2">
            <Wallet className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-slate-400 text-sm">Wallets</span>
          </div>
          <div className="text-2xl font-bold text-white">0</div>
        </div>

        <div className="card">
          <div className="flex items-center mb-2">
            <PieChart className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-slate-400 text-sm">Assets</span>
          </div>
          <div className="text-2xl font-bold text-white">0</div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <PortfolioTracker onAnalyze={(addresses) => console.log('Analyzing:', addresses)} />
        <YieldOptimizer />
      </div>
    </div>
  )
}
