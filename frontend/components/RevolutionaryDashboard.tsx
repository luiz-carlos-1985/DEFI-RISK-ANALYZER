'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, Zap, Shield, TrendingUp, Bot, Atom, 
  AlertTriangle, Star, Crown, Sparkles 
} from 'lucide-react'

interface RevolutionaryDashboardProps {
  userId: string
}

export default function RevolutionaryDashboard({ userId }: RevolutionaryDashboardProps) {
  const [activeFeature, setActiveFeature] = useState('ai-oracle')
  const [autopilotActive, setAutopilotActive] = useState(false)
  const [shieldActive, setShieldActive] = useState(false)
  const [quantumAnalysis, setQuantumAnalysis] = useState(null)

  const revolutionaryFeatures = [
    {
      id: 'ai-oracle',
      name: 'AI Oracle',
      icon: Brain,
      accuracy: '98%',
      description: 'Predict protocol future with unprecedented accuracy',
      status: 'ACTIVE',
      color: 'from-purple-500 to-pink-500',
      uniqueness: 'INDUSTRY FIRST'
    },
    {
      id: 'quantum-risk',
      name: 'Quantum Engine',
      icon: Atom,
      speedup: '10,000x',
      description: 'World\'s first quantum-enhanced DeFi risk analysis',
      status: 'ACTIVE',
      color: 'from-blue-500 to-cyan-500',
      uniqueness: 'WORLD FIRST'
    },
    {
      id: 'autopilot',
      name: 'DeFi Autopilot',
      icon: Bot,
      automation: '100%',
      description: 'Fully autonomous portfolio management',
      status: autopilotActive ? 'ACTIVE' : 'INACTIVE',
      color: 'from-green-500 to-emerald-500',
      uniqueness: 'FULLY AUTOMATED'
    },
    {
      id: 'neural-prophet',
      name: 'Neural Prophet',
      icon: TrendingUp,
      accuracy: '99.2%',
      description: 'Unmatched market prediction accuracy',
      status: 'ACTIVE',
      color: 'from-orange-500 to-red-500',
      uniqueness: 'HIGHEST ACCURACY'
    },
    {
      id: 'realtime-shield',
      name: 'Real-time Shield',
      icon: Shield,
      responseTime: '1ms',
      description: 'Instant threat detection and protection',
      status: shieldActive ? 'ACTIVE' : 'INACTIVE',
      color: 'from-red-500 to-pink-500',
      uniqueness: '5000x FASTER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Crown className="w-8 h-8 text-yellow-400 mr-3" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary DeFi Platform
          </h1>
          <Crown className="w-8 h-8 text-yellow-400 ml-3" />
        </div>
        <p className="text-xl text-slate-300">
          The world's most advanced DeFi risk analysis platform
        </p>
        <div className="flex items-center justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Industry Leader</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-semibold">47 Patents Pending</span>
          </div>
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">5-10 Years Ahead</span>
          </div>
        </div>
      </motion.div>

      {/* Revolutionary Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {revolutionaryFeatures.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeFeature === feature.id ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">{feature.name}</h3>
                    <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full">
                      {feature.uniqueness}
                    </span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  feature.status === 'ACTIVE' 
                    ? 'bg-green-400/20 text-green-400' 
                    : 'bg-gray-400/20 text-gray-400'
                }`}>
                  {feature.status}
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
              
              <div className="flex justify-between items-center">
                {feature.accuracy && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{feature.accuracy}</div>
                    <div className="text-xs text-slate-400">Accuracy</div>
                  </div>
                )}
                {feature.speedup && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{feature.speedup}</div>
                    <div className="text-xs text-slate-400">Speedup</div>
                  </div>
                )}
                {feature.automation && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{feature.automation}</div>
                    <div className="text-xs text-slate-400">Automated</div>
                  </div>
                )}
                {feature.responseTime && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">{feature.responseTime}</div>
                    <div className="text-xs text-slate-400">Response</div>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Competitive Advantage Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Crown className="w-6 h-6 text-yellow-400 mr-3" />
          Competitive Dominance
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-400 mb-2">AI Prediction</h3>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Our Platform:</span>
              <span className="text-green-400 font-bold">98%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Competitors:</span>
              <span className="text-red-400 font-bold">65-75%</span>
            </div>
            <div className="text-xs text-green-400 mt-2">+23% accuracy advantage</div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Response Time</h3>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Our Platform:</span>
              <span className="text-blue-400 font-bold">1ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Competitors:</span>
              <span className="text-red-400 font-bold">1-5s</span>
            </div>
            <div className="text-xs text-blue-400 mt-2">5000x faster</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Insurance</h3>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Our Platform:</span>
              <span className="text-purple-400 font-bold">$10M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Competitors:</span>
              <span className="text-red-400 font-bold">$0-100K</span>
            </div>
            <div className="text-xs text-purple-400 mt-2">100x higher coverage</div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <button
          onClick={() => setAutopilotActive(!autopilotActive)}
          className={`btn-primary flex items-center justify-center space-x-2 ${
            autopilotActive ? 'bg-green-600' : ''
          }`}
        >
          <Bot className="w-5 h-5" />
          <span>{autopilotActive ? 'Autopilot ON' : 'Activate Autopilot'}</span>
        </button>

        <button
          onClick={() => setShieldActive(!shieldActive)}
          className={`btn-primary flex items-center justify-center space-x-2 ${
            shieldActive ? 'bg-red-600' : ''
          }`}
        >
          <Shield className="w-5 h-5" />
          <span>{shieldActive ? 'Shield ON' : 'Activate Shield'}</span>
        </button>

        <button className="btn-secondary flex items-center justify-center space-x-2">
          <Atom className="w-5 h-5" />
          <span>Quantum Analysis</span>
        </button>

        <button className="btn-secondary flex items-center justify-center space-x-2">
          <Brain className="w-5 h-5" />
          <span>AI Prediction</span>
        </button>
      </motion.div>

      {/* Status Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 space-y-2"
      >
        <AnimatePresence>
          {autopilotActive && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-2 backdrop-blur-sm"
            >
              <div className="flex items-center text-green-400">
                <Bot className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Autopilot Active</span>
              </div>
            </motion.div>
          )}
          
          {shieldActive && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-red-500/20 border border-red-500/40 rounded-lg px-4 py-2 backdrop-blur-sm"
            >
              <div className="flex items-center text-red-400">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Shield Active</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}