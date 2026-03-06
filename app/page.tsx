"use client"

import Link from "next/link"
import { Users, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">AI-Enhanced Admission System</h1>
          <p className="text-xl text-slate-300">
            Streamlined university admissions with OCR verification, AI recommendations, and transparent merit lists
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Portal */}
          <Link
            href="/student/login"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-600/0 group-hover:from-cyan-500/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <Users className="w-7 h-7 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Student Portal</h2>
              <p className="text-slate-300 mb-6">
                Apply to programs, track your application, and view merit list results
              </p>
              <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                Get Started →
              </div>
            </div>
          </Link>

          {/* Admin Portal */}
          <Link
            href="/admin/login"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 p-8 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-600/0 group-hover:from-emerald-500/10 group-hover:to-emerald-600/10 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                <Settings className="w-7 h-7 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Admin Portal</h2>
              <p className="text-slate-300 mb-6">Manage applications, generate merit lists, and view analytics</p>
              <div className="inline-flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                Access Dashboard →
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-400 text-sm">
          <p className="mb-2">© 2025 Punjab University College of Information Technology. All rights reserved.</p>
          <p>Developed by Rida Nadeem, Muhammad Ahmad & Hafiz Awais</p>
        </div>
      </div>
    </div>
  )
}
