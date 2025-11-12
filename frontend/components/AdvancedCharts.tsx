'use client'

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendingUp } from 'lucide-react'

const data = [
  { date: 'Jan', tvl: 45, risk: 3.2, volume: 120 },
  { date: 'Feb', tvl: 52, risk: 2.8, volume: 145 },
  { date: 'Mar', tvl: 48, risk: 3.5, volume: 135 },
  { date: 'Apr', tvl: 61, risk: 2.5, volume: 168 },
  { date: 'May', tvl: 58, risk: 3.1, volume: 152 },
  { date: 'Jun', tvl: 70, risk: 2.3, volume: 195 }
]

export default function AdvancedCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
          <h3 className="text-lg font-bold text-white">TVL Trend</h3>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTvl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
            <Area type="monotone" dataKey="tvl" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTvl)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
          <h3 className="text-lg font-bold text-white">Risk Score History</h3>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
            <Line type="monotone" dataKey="risk" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7', r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="card lg:col-span-2">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
          <h3 className="text-lg font-bold text-white">Volume Analysis</h3>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
            <Bar dataKey="volume" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
