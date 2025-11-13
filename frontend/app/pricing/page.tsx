'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    { name: 'Free', price: '$0', features: ['5 wallet analyses/month', 'Basic risk metrics', 'Community support'] },
    { name: 'Pro', price: '$49', features: ['Unlimited analyses', 'Advanced analytics', 'Priority support', 'API access'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Custom integrations', 'Dedicated support', 'SLA guarantee', 'White-label'] },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple Pricing</h1>
        <p className="text-xl text-slate-400">Choose the plan that fits your needs</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={plan.popular ? 'card-premium' : 'card'}>
            {plan.popular && <div className="text-center mb-4"><span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">Most Popular</span></div>}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-white mb-6">{plan.price}<span className="text-lg text-slate-400">/mo</span></div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center text-slate-300"><Check className="w-5 h-5 text-green-400 mr-2" />{f}</li>
              ))}
            </ul>
            <button className="btn-primary w-full">Get Started</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
