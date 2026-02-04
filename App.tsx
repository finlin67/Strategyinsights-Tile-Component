import React from 'react';
import StrategyInsightsTile from './components/StrategyInsightsTile';
import { Target, BarChart3, Search, Play } from 'lucide-react';

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#0b0a0f] font-sans text-white selection:bg-[#7c3cec]/30">
      <div className="flex h-full grow flex-col">
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[1200px] flex-1">
            
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#7c3cec]/20 px-4 md:px-10 py-4 mb-8">
              <div className="flex items-center gap-4 text-white">
                <div className="size-8 text-[#7c3cec]">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_logo)">
                      <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_logo"><rect fill="white" height="48" width="48"></rect></clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">StrategyInsights</h2>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Platform</a>
                  <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Solutions</a>
                  <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Resources</a>
                </div>
                <div className="flex gap-3">
                  <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#7c3cec] text-white text-sm font-bold hover:bg-[#6a2ecb] transition-colors">
                    Get Started
                  </button>
                  <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-colors">
                    Log In
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center px-4 py-8 md:py-16">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3cec]/10 border border-[#7c3cec]/20 w-fit">
                    <span className="text-[#7c3cec] text-xs font-bold uppercase tracking-wider">Next-Gen Intelligence</span>
                  </div>
                  <h1 className="text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                    High-Precision <span className="text-[#7c3cec]">Revenue</span> Intelligence
                  </h1>
                  <p className="text-white/70 text-lg leading-relaxed max-w-[500px]">
                    Unlock strategic growth with the Central Intelligence Hub. Connect ABM, CX, and Research to drive measurable pipeline impact with AI-driven precision.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-[#7c3cec] hover:bg-[#7c3cec]/90 text-white text-base font-bold shadow-lg shadow-[#7c3cec]/25 transition-all">
                    Book a Demo
                  </button>
                  <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-white/5 hover:bg-white/10 text-white text-base font-bold border border-white/10 transition-all">
                    View Platform
                  </button>
                </div>
              </div>

              {/* Animated Tile Component */}
              <StrategyInsightsTile />
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-10 px-4 py-16 border-t border-white/5 mt-16">
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-3xl font-bold leading-tight">Strategic Intelligence Nodes</h2>
                <p className="text-white/60 text-base max-w-[600px]">Integrated data beams connecting your most critical business functions to create a unified revenue ecosystem.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Feature 1 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#7c3cec]/20 flex items-center justify-center text-[#7c3cec] group-hover:scale-110 transition-transform">
                    <Target size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-lg font-bold">ABM Strategy</h3>
                    <p className="text-white/50 text-sm leading-relaxed">Precision targeting for high-value accounts with real-time intent data monitoring.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#7c3cec]/20 flex items-center justify-center text-[#7c3cec] group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-lg font-bold">CX Intelligence</h3>
                    <p className="text-white/50 text-sm leading-relaxed">Map the entire customer journey and identify friction points before they impact churn.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#7c3cec]/20 flex items-center justify-center text-[#7c3cec] group-hover:scale-110 transition-transform">
                    <Search size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-lg font-bold">Market Research</h3>
                    <p className="text-white/50 text-sm leading-relaxed">Deep-dive competitive analysis and trend forecasting powered by proprietary datasets.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
              <div className="flex items-center gap-2 text-white/40">
                <span className="text-sm">© 2024 StrategyInsights. All rights reserved.</span>
              </div>
              <div className="flex gap-8">
                <a className="text-white/40 hover:text-white text-sm transition-colors" href="#">Privacy</a>
                <a className="text-white/40 hover:text-white text-sm transition-colors" href="#">Terms</a>
                <a className="text-white/40 hover:text-white text-sm transition-colors" href="#">Security</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}