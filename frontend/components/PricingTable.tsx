'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star } from 'lucide-react'

export default function PricingTable() {
  const tiers = [
    {
      name: 'Starter',
      price: 49,
      yearlyPrice: 470,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '100 analyses/month',
        'Real-time alerts',
        'Email support',
        'Basic risk analysis',
        'Multi-chain support'
      ]
    },
    {
      name: 'Professional',
      price: 199,
      yearlyPrice: 1910,
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        '1,000 analyses/month',
        'AI Oracle predictions (98% accuracy)',
        'Neural Prophet (99.2% accuracy)',
        'Social Trading Network',
        'Priority support',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 999,
      yearlyPrice: 9590,
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      features: [
        'Unlimited analyses',
        'DeFi Autopilot (+47% APY)',
        'Realtime Shield (1ms response)',
        'Dedicated support',
        'Custom integrations',
        'White-label option'
      ]
    },
    {
      name: 'Quantum',
      price: 4999,
      yearlyPrice: 47990,
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      premium: true,
      features: [
        'Everything in Enterprise',
        'Quantum Risk Engine (10,000x faster)',
        'Multiverse Simulator (10,000 universes)',
        'Time Machine (100% accuracy)',
        '$10M Insurance coverage',
        '24/7 Concierge support'
      ]
    }
  ]

  return (
    <div className="py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Choose Your Competitive Advantage
        </h2>
        <p className="text-xl text-slate-300">
          Revolutionary features that competitors can't match
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {tiers.map((tier, index) => {
          const IconComponent = tier.icon
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card relative ${
                tier.popular ? 'ring-2 ring-purple-400 scale-105' : ''
              } ${tier.premium ? 'ring-2 ring-yellow-400' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {tier.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Ultimate Power
                  </span>
                </div>
              )}

              <div className={`p-3 rounded-lg bg-gradient-to-r ${tier.color} inline-block mb-4`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
                <div className="text-sm text-green-400 mt-1">
                  ${tier.yearlyPrice}/year (save 20%)
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full btn-primary bg-gradient-to-r ${tier.color}`}>
                Get Started
              </button>
            </motion.div>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-400 mb-4">All plans include 14-day free trial • No credit card required</p>
        <p className="text-slate-500 text-sm">30-day money-back guarantee • Cancel anytime</p>
      </div>
    </div>
  )
}