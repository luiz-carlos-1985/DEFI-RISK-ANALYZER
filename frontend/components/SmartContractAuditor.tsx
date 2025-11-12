'use client'

import { useState } from 'react'
import { FileCode, Search, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SmartContractAuditor() {
  const [contractAddress, setContractAddress] = useState('')
  const [auditResult, setAuditResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const mockAudit = () => {
    if (!contractAddress || !/^0x[a-fA-F0-9]{40}$/.test(contractAddress)) {
      return
    }
    
    setLoading(true)
    setTimeout(() => {
      setAuditResult({
        score: 8.5,
        issues: [
          { severity: 'high', title: 'Reentrancy vulnerability', line: 45, fixed: false },
          { severity: 'medium', title: 'Unchecked return value', line: 78, fixed: true },
          { severity: 'low', title: 'Gas optimization needed', line: 120, fixed: true }
        ],
        gasOptimization: 85,
        securityScore: 90
      })
      setLoading(false)
    }, 2000)
  }

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      default: return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
    }
  }

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <FileCode className="w-6 h-6 text-cyan-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Smart Contract Auditor</h2>
      </div>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value.replace(/[^0-9a-fA-Fx]/g, ''))}
          placeholder="0x..."
          className="input-field flex-1"
          maxLength={42}
        />
        <button 
          onClick={mockAudit} 
          disabled={loading || !contractAddress || !/^0x[a-fA-F0-9]{40}$/.test(contractAddress)} 
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2" />
              Audit
            </>
          )}
        </button>
      </div>

      {auditResult && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="metric-card">
              <div className="text-slate-400 text-sm mb-1">Overall Score</div>
              <div className="text-2xl font-bold text-green-400">{auditResult.score}/10</div>
            </div>
            <div className="metric-card">
              <div className="text-slate-400 text-sm mb-1">Security</div>
              <div className="text-2xl font-bold text-blue-400">{auditResult.securityScore}%</div>
            </div>
            <div className="metric-card">
              <div className="text-slate-400 text-sm mb-1">Gas Efficiency</div>
              <div className="text-2xl font-bold text-purple-400">{auditResult.gasOptimization}%</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold mb-3">Issues Found</h3>
            {auditResult.issues.map((issue: any, i: number) => (
              <div key={i} className={`p-4 rounded-xl border ${getSeverityColor(issue.severity)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {issue.fixed ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 mt-1" />
                    )}
                    <div>
                      <h4 className="text-white font-medium">{issue.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">Line {issue.line}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                    {issue.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
