'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">We're building the future of DeFi risk management with cutting-edge AI and blockchain technology</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card text-center">
          <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
          <p className="text-slate-300">Make DeFi safer and more accessible through advanced risk analytics</p>
        </div>
        <div className="card text-center">
          <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
          <p className="text-slate-300">Expert developers and blockchain specialists from top tech companies</p>
        </div>
        <div className="card text-center">
          <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
          <p className="text-slate-300">Become the leading DeFi risk intelligence platform globally</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
        <p className="text-slate-300 mb-4">Founded in 2024, DeFi Risk Analyzer was born from the need for better risk management tools in the rapidly evolving DeFi ecosystem.</p>
        <p className="text-slate-300">We combine advanced machine learning, real-time blockchain data, and intuitive design to help users make informed decisions in the DeFi space.</p>
      </div>
    </div>
  )
}
