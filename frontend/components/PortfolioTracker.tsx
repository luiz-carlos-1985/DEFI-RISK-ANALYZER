'use client'

import { useState } from 'react'
import { Wallet, Plus, X, TrendingUp, DollarSign } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioTrackerProps {
  onAnalyze: (addresses: string[]) => void
}

export default function PortfolioTracker({ onAnalyze }: PortfolioTrackerProps) {
  const [wallets, setWallets] = useState<string[]>([''])

  const addWallet = () => {
    if (wallets.length >= 10) {
      return
    }
    setWallets([...wallets, ''])
  }
  
  const removeWallet = (index: number) => setWallets(wallets.filter((_, i) => i !== index))
  
  const updateWallet = (index: number, value: string) => {
    // Sanitize input
    const sanitized = value.replace(/[^0-9a-fA-Fx]/g, '')
    const updated = [...wallets]
    updated[index] = sanitized
    setWallets(updated)
  }

  const handleAnalyze = () => {
    const validAddresses = wallets.filter(w => /^0x[a-fA-F0-9]{40}$/.test(w))
    if (validAddresses.length === 0) {
      return
    }
    onAnalyze(validAddresses)
  }

  return (
    <div className="card-premium">
      <div className="flex items-center mb-6">
        <Wallet className="w-6 h-6 text-purple-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Portfolio Tracker</h2>
      </div>
      
      <AnimatePresence>
        {wallets.map((wallet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex gap-2 mb-3"
          >
            <input
              type="text"
              value={wallet}
              onChange={(e) => updateWallet(index, e.target.value)}
              placeholder={`Wallet ${index + 1} address`}
              className="input-field flex-1"
            />
            {wallets.length > 1 && (
              <button onClick={() => removeWallet(index)} className="btn-secondary px-3">
                <X className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="flex gap-3 mt-4">
        <button 
          onClick={addWallet} 
          disabled={wallets.length >= 10}
          className="btn-secondary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Wallet ({wallets.length}/10)
        </button>
        <button 
          onClick={handleAnalyze} 
          className="btn-success flex items-center flex-1"
        >
          <TrendingUp className="w-5 h-5 mr-2" />
          Analyze Portfolio
        </button>
      </div>
    </div>
  )
}
