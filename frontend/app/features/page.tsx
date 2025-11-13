'use client'

import { motion } from 'framer-motion'
import { Shield, Brain, Zap, BarChart3, Bell, Lock } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    { icon: Brain, title: 'AI-Powered Analysis', desc: 'Machine learning models with 95% accuracy for risk prediction' },
    { icon: Shield, title: 'Smart Contract Audit', desc: 'Automated security audits detecting vulnerabilities' },
    { icon: Zap, title: 'Real-time Monitoring', desc: 'Live alerts for market changes and risk events' },
    { icon: BarChart3, title: 'Advanced Analytics', desc: 'Comprehensive charts and risk metrics' },
    { icon: Bell, title: 'Custom Alerts', desc: 'Personalized notifications for your portfolio' },
    { icon: Lock, title: 'Enterprise Security', desc: 'Bank-grade security with encryption' },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Powerful Features</h1>
        <p className="text-xl text-slate-400">Everything you need for DeFi risk management</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="card">
            <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
