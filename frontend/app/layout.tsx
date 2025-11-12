'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { walletService } from '../lib/wallet'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 1,
        refetchOnMount: false,
      },
    },
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  }))

  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    try {
      const state = await walletService.connect()
      setWalletAddress(state.address)
      toast.success(`Connected: ${state.address?.slice(0, 6)}...${state.address?.slice(-4)}`)
    } catch (error: any) {
      if (error.message.includes('MetaMask not installed')) {
        toast.error('Please install MetaMask')
      } else {
        toast.error('Failed to connect wallet')
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = () => {
    walletService.disconnect()
    setWalletAddress(null)
    toast.success('Wallet disconnected')
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            <nav className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
              <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                  <div className="flex items-center gap-2 sm:gap-4 lg:gap-12">
                    <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      DeFi Risk
                    </h1>
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                      <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Dashboard</a>
                      <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Analytics</a>
                      <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Protocols</a>
                      <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">API</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="hidden sm:block px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
                      <span className="text-green-400 text-xs sm:text-sm font-semibold">● Live</span>
                    </div>
                    {walletAddress ? (
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="px-2 sm:px-4 py-1 sm:py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 text-xs sm:text-sm">
                          {walletAddress.slice(0, 4)}...{walletAddress.slice(-3)}
                        </div>
                        <button onClick={handleDisconnect} className="btn-secondary text-xs sm:text-sm py-1 sm:py-3 px-2 sm:px-6">Disconnect</button>
                      </div>
                    ) : (
                      <button 
                        onClick={handleConnectWallet} 
                        disabled={isConnecting}
                        className="btn-primary disabled:opacity-50 text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-6"
                      >
                        {isConnecting ? 'Connecting...' : 'Connect'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            <main>{children}</main>
            <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm mt-20">
              <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      DeFi Risk Intelligence
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Enterprise-grade DeFi risk analysis powered by AI and real-time blockchain data.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Product</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
                  <p>© 2024 DeFi Risk Intelligence. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#f1f5f9',
                border: '1px solid #334155'
              }
            }}
          />
        </QueryClientProvider>
      </body>
    </html>
  )
}