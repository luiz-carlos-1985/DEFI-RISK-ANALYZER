'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Book, HelpCircle } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Support Center</h1>
        <p className="text-xl text-slate-400">We're here to help you succeed</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="card">
          <Mail className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
          <p className="text-slate-300 mb-4">Get help via email within 24 hours</p>
          <a href="mailto:support@defi-risk.com" className="text-blue-400 hover:text-blue-300">support@defi-risk.com</a>
        </div>

        <div className="card">
          <MessageCircle className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
          <p className="text-slate-300 mb-4">Chat with our team in real-time</p>
          <button className="btn-primary">Start Chat</button>
        </div>

        <div className="card">
          <Book className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
          <p className="text-slate-300 mb-4">Comprehensive guides and tutorials</p>
          <a href="/docs" className="text-blue-400 hover:text-blue-300">View Docs →</a>
        </div>

        <div className="card">
          <HelpCircle className="w-12 h-12 text-orange-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">FAQ</h3>
          <p className="text-slate-300 mb-4">Find answers to common questions</p>
          <a href="#" className="text-blue-400 hover:text-blue-300">Browse FAQ →</a>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <input type="text" placeholder="Subject" className="input-field mb-4" />
        <textarea placeholder="Message" rows={5} className="input-field mb-4"></textarea>
        <button className="btn-primary">Send Message</button>
      </div>
    </div>
  )
}
