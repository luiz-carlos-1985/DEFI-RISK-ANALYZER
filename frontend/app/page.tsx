'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Search, TrendingUp, Shield, AlertTriangle, BarChart3, Zap, Target, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import RiskAnalysisCard from '../components/RiskAnalysisCard'
import ProtocolList from '../components/ProtocolList'
import MarketOverview from '../components/MarketOverview'
import PortfolioTracker from '../components/PortfolioTracker'
import RiskHeatmap from '../components/RiskHeatmap'
import LiveAlerts from '../components/LiveAlerts'
import AdvancedCharts from '../components/AdvancedCharts'
import SmartContractAuditor from '../components/SmartContractAuditor'
import GasTracker from '../components/GasTracker'
import YieldOptimizer from '../components/YieldOptimizer'
import { analyzeWallet, getMarketOverview, getTrendingProtocols } from '../lib/api'

export default function HomePage() {
  const [walletAddress, setWalletAddress] = useState('')
  const [selectedChain, setSelectedChain] = useState('ethereum')
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const { data: marketData } = useQuery({
    queryKey: ['market-overview'],
    queryFn: getMarketOverview,
  })

  const { data: trendingProtocols } = useQuery({
    queryKey: ['trending-protocols'],
    queryFn: () => getTrendingProtocols(10),
  })

  const handleAnalyzeWallet = async () => {
    if (!walletAddress) {
      toast.error('Please enter a wallet address')
      return
    }

    // Validate wallet address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      toast.error('Invalid wallet address format')
      return
    }

    setIsAnalyzing(true)
    const startTime = performance.now()
    
    try {
      const result = await analyzeWallet(walletAddress, selectedChain)
      setAnalysisResult(result)
      toast.success('Analysis completed successfully')
    } catch (error: any) {
      toast.error('Failed to analyze wallet')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10"></div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Advanced DeFi Risk Intelligence
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
          Enterprise-grade risk assessment powered by AI/ML • Real-time monitoring • Smart contract auditing • Portfolio optimization
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-300">Real-time Data</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-slate-300">95% Accuracy</span>
          </div>
        </div>
      </motion.div>

      {/* Market Overview */}
      {marketData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <MarketOverview data={marketData} />
        </motion.div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">

          {/* Wallet Analysis Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-blue-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Wallet Risk Analysis</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value.replace(/[^0-9a-fA-Fx]/g, ''))}
              placeholder="0x..."
              className="input-field"
              maxLength={42}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Blockchain
            </label>
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              className="input-field"
            >
              <option value="ethereum">Ethereum</option>
              <option value="polygon">Polygon</option>
              <option value="bsc">BSC</option>
              <option value="arbitrum">Arbitrum</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={handleAnalyzeWallet}
              disabled={isAnalyzing || !walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)}
              className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Analyze
                </>
              )}
            </button>
          </div>
        </div>

            {analysisResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <RiskAnalysisCard data={analysisResult} />
              </motion.div>
            )}
          </motion.div>

          {/* Portfolio Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <PortfolioTracker onAnalyze={(addresses) => console.log('Analyzing:', addresses)} />
          </motion.div>

          {/* Smart Contract Auditor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SmartContractAuditor />
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Live Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <LiveAlerts />
          </motion.div>

          {/* Risk Heatmap */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <RiskHeatmap />
          </motion.div>

          {/* Gas Tracker */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.42 }}
          >
            <GasTracker />
          </motion.div>
        </div>
      </div>

      {/* Yield Optimizer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44 }}
        className="mb-8"
      >
        <YieldOptimizer />
      </motion.div>

      {/* Advanced Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mb-8"
      >
        <AdvancedCharts />
      </motion.div>

      {/* Trending Protocols */}
      {trendingProtocols && trendingProtocols.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card mb-8"
        >
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Trending Protocols</h2>
          </div>
          <ProtocolList protocols={trendingProtocols} />
        </motion.div>
      )}

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <div className="card hover:glow-blue">
          <div className="flex items-center mb-4">
            <Brain className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-white">AI/ML Analysis</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Deep learning models with 95% accuracy for risk prediction and anomaly detection.
          </p>
        </div>

        <div className="card hover:glow-green">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Smart Contract Audit</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Automated security audits detecting vulnerabilities and gas optimization opportunities.
          </p>
        </div>

        <div className="card hover:glow-purple">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Real-time Alerts</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Instant notifications for market changes, liquidity events, and risk threshold breaches.
          </p>
        </div>

        <div className="card hover:glow-blue">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-orange-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Portfolio Optimization</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Multi-wallet tracking with advanced analytics and risk-adjusted return calculations.
          </p>
        </div>
      </motion.div>
    </div>
  )
}