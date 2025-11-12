'use client'

import { Shield, AlertTriangle, CheckCircle, Activity } from 'lucide-react'
import { monitoring } from '../lib/monitoring'
import { errorHandler } from '../lib/errorHandler'

export default function SecurityDashboard() {
  const performanceStats = monitoring.getPerformanceStats()
  const securitySummary = monitoring.getSecuritySummary()
  const errorLog = errorHandler.getErrorLog()

  const recentErrors = errorLog.slice(-5).reverse()

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <Shield className="w-6 h-6 text-green-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Security & Performance</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Avg Response Time</span>
            <Activity className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {performanceStats.avgDuration.toFixed(0)}ms
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Total Operations</span>
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {performanceStats.totalOperations}
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Security Events</span>
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {Object.values(securitySummary).reduce((a, b) => a + b, 0)}
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Error Rate</span>
            <AlertTriangle className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {recentErrors.length}
          </div>
        </div>
      </div>

      {recentErrors.length > 0 && (
        <div>
          <h3 className="text-white font-semibold mb-3">Recent Errors</h3>
          <div className="space-y-2">
            {recentErrors.map((error, i) => (
              <div key={i} className="bg-slate-800/50 rounded-lg p-3 border border-red-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-red-400 text-sm font-medium">{error.type}</span>
                  <span className="text-slate-500 text-xs">
                    {error.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mt-1">{error.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
