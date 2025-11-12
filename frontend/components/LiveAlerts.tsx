'use client'

import { useState, useEffect } from 'react'
import { Bell, AlertTriangle, TrendingDown, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Alert {
  id: string
  type: 'warning' | 'danger' | 'info'
  title: string
  message: string
  time: string
}

export default function LiveAlerts() {
  const [alerts] = useState<Alert[]>([
    { id: '1', type: 'warning', title: 'High Volatility', message: 'ETH volatility increased by 45%', time: '2 min ago' },
    { id: '2', type: 'danger', title: 'Liquidity Alert', message: 'Curve pool liquidity dropped 20%', time: '5 min ago' },
    { id: '3', type: 'info', title: 'New Opportunity', message: 'Aave APY increased to 8.5%', time: '10 min ago' }
  ])

  const getIcon = (type: string) => {
    switch(type) {
      case 'danger': return <AlertTriangle className="w-5 h-5 text-red-400" />
      case 'warning': return <TrendingDown className="w-5 h-5 text-yellow-400" />
      default: return <Shield className="w-5 h-5 text-blue-400" />
    }
  }

  const getBorderColor = (type: string) => {
    switch(type) {
      case 'danger': return 'border-red-500/50'
      case 'warning': return 'border-yellow-500/50'
      default: return 'border-blue-500/50'
    }
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Bell className="w-6 h-6 text-blue-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Live Alerts</h2>
        </div>
        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
          {alerts.length} Active
        </span>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`p-4 rounded-xl border-l-4 ${getBorderColor(alert.type)} bg-slate-800/50 hover:bg-slate-800/70 transition-colors`}
            >
              <div className="flex items-start gap-3">
                {getIcon(alert.type)}
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{alert.title}</h3>
                  <p className="text-slate-300 text-sm">{alert.message}</p>
                  <span className="text-slate-500 text-xs mt-2 block">
                    {alert.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
