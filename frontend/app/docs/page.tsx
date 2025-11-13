'use client'

import { motion } from 'framer-motion'
import { Book, Code, Shield, Zap } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">API Documentation</h1>
        <p className="text-slate-400">Complete guide to integrate DeFi Risk Analyzer API</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <Book className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Getting Started</h3>
          <p className="text-slate-300 mb-4">Learn how to integrate our API in minutes</p>
          <a href="http://localhost:8000/docs" className="text-blue-400 hover:text-blue-300">Read Guide →</a>
        </div>

        <div className="card">
          <Code className="w-8 h-8 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">API Reference</h3>
          <p className="text-slate-300 mb-4">Complete API endpoints documentation</p>
          <a href="http://localhost:8000/docs" className="text-blue-400 hover:text-blue-300">View Docs →</a>
        </div>

        <div className="card">
          <Shield className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Authentication</h3>
          <p className="text-slate-300 mb-4">Secure your API requests with API keys</p>
          <a href="http://localhost:8000/docs" className="text-blue-400 hover:text-blue-300">Learn More →</a>
        </div>

        <div className="card">
          <Zap className="w-8 h-8 text-yellow-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Rate Limits</h3>
          <p className="text-slate-300 mb-4">Understand API rate limits and quotas</p>
          <a href="http://localhost:8000/docs" className="text-blue-400 hover:text-blue-300">View Limits →</a>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
{`curl -X POST "http://localhost:8000/api/v1/analyze/wallet" \\
  -H "Content-Type: application/json" \\
  -d '{
    "wallet_address": "0x...",
    "chain": "ethereum"
  }'`}
          </pre>
        </div>
      </div>
    </div>
  )
}
