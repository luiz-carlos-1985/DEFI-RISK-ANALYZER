'use client'

import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    { title: 'Understanding DeFi Risk Metrics', date: '2024-01-15', author: 'John Doe', excerpt: 'Learn about the key metrics used to assess DeFi protocol risks...' },
    { title: 'Smart Contract Security Best Practices', date: '2024-01-10', author: 'Jane Smith', excerpt: 'Essential security practices for smart contract development...' },
    { title: 'The Future of DeFi Analytics', date: '2024-01-05', author: 'Mike Johnson', excerpt: 'How AI and ML are transforming DeFi risk analysis...' },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-xl text-slate-400">Latest insights on DeFi and risk management</p>
      </motion.div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="card hover:border-blue-500/50 cursor-pointer">
            <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{post.date}</div>
              <div className="flex items-center"><User className="w-4 h-4 mr-1" />{post.author}</div>
            </div>
            <p className="text-slate-300">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
