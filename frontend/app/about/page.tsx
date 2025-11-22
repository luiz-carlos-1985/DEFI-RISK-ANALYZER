'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, Shield, Zap, Globe, Code } from 'lucide-react'

export default function AboutPage() {
  const team = [
    { name: 'Sarah Chen', role: 'CEO & Co-Founder', bg: 'from-blue-500 to-cyan-500' },
    { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', bg: 'from-purple-500 to-pink-500' },
    { name: 'Emily Watson', role: 'Head of Security', bg: 'from-green-500 to-emerald-500' },
    { name: 'David Kim', role: 'Lead AI Engineer', bg: 'from-orange-500 to-red-500' },
  ]

  const stats = [
    { value: '$2.3B+', label: 'Assets Protected', icon: Shield },
    { value: '10,000+', label: 'Active Users', icon: Users },
    { value: '20+', label: 'Blockchains', icon: Globe },
    { value: '99.9%', label: 'Uptime', icon: Zap },
  ]

  const values = [
    { icon: Target, title: 'Mission-Driven', desc: 'Making DeFi safer for everyone through cutting-edge technology and transparent risk analysis' },
    { icon: Code, title: 'Open Innovation', desc: 'Building on open-source principles with community-driven development and public audits' },
    { icon: Shield, title: 'Security First', desc: 'SOC2 compliant infrastructure with enterprise-grade security and regular penetration testing' },
    { icon: TrendingUp, title: 'Data Excellence', desc: 'Processing 10M+ transactions daily with sub-second latency and 95% prediction accuracy' },
  ]
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
          <span className="text-purple-400 text-sm font-semibold">ABOUT US</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Building the Future of DeFi
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          We're on a mission to make decentralized finance safer and more accessible through AI-powered risk intelligence
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, i) => (
          <div key={i} className="card text-center">
            <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="card">
          <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Founded in 2025 by former engineers from Google, Coinbase, and Chainalysis, DeFi Risk Analyzer emerged from a critical need: the lack of institutional-grade risk analysis tools in DeFi.
            </p>
            <p>
              After witnessing $2.3B lost to DeFi exploits in 2023, our founders built an AI-powered platform that analyzes 500+ risk factors across 20+ blockchains in real-time.
            </p>
            <p>
              Today, we protect over $2B in assets for 10,000+ users, from individual traders to institutional investors, helping them navigate DeFi with confidence.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-6">
          <div className="card bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-300">Democratize access to institutional-grade DeFi risk intelligence, making decentralized finance safer for everyone.</p>
          </div>
          <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
            <Award className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-slate-300">Become the global standard for DeFi risk analysis, protecting $100B+ in assets by 2026.</p>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="card text-center">
              <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <h2 className="text-4xl font-bold text-white text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }} whileHover={{ scale: 1.05 }} className="card text-center cursor-pointer">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.bg} mx-auto mb-4 flex items-center justify-center`}>
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-slate-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-20 card-premium text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">We're hiring talented engineers, data scientists, and blockchain experts to help build the future of DeFi</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">View Open Positions</button>
          <button className="btn-secondary text-lg px-8 py-4">Contact Us</button>
        </div>
      </motion.div>
    </div>
  )
}
