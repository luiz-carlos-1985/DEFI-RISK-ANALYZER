'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'
import ProtocolList from '../../components/ProtocolList'
import { getTrendingProtocols } from '../../lib/api'

export default function ProtocolsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const { data: protocols } = useQuery({
    queryKey: ['protocols'],
    queryFn: () => getTrendingProtocols(50),
  })

  const filteredProtocols = protocols?.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">DeFi Protocols</h1>
        <p className="text-slate-400">Explore and analyze DeFi protocols across multiple chains</p>
      </motion.div>

      <div className="card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search protocols..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field pl-10"
            >
              <option value="all">All Categories</option>
              <option value="Lending">Lending</option>
              <option value="DEX">DEX</option>
              <option value="Yield">Yield</option>
              <option value="Staking">Staking</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">
          {filteredProtocols?.length || 0} Protocols
        </h2>
        {filteredProtocols && <ProtocolList protocols={filteredProtocols} />}
      </div>
    </div>
  )
}
