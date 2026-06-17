'use client'

import { useEffect, useRef } from 'react'

interface DeviceProps {
  device: {
    category: string
    name: string
    name2: string
    price: string
    spec: string
    type: string
    chip1Label: string; chip1Val: string
    chip2Label: string; chip2Val: string
    chip3Label: string; chip3Val: string
  }
  transitioning: boolean
}

export default function AnimatedDevice({ device, transitioning }: DeviceProps) {
  const graphRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!graphRef.current) return
    graphRef.current.innerHTML = ''
    const heights = [40, 65, 50, 80, 55, 70, 90, 60, 75, 45, 85, 55]
    heights.forEach((h, i) => {
      const col = document.createElement('div')
      col.style.cssText = `flex:1;height:4px;--bar-h:${h}%;border-radius:3px 3px 0 0;background:rgba(91,164,212,${0.35 + i * 0.04});animation:grow-bar 1.2s ease ${i * 0.07}s forwards;`
      graphRef.current!.appendChild(col)
    })
  }, [device.type])

  return (
    <div
      className={`relative transition-opacity duration-500 ${transitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}
      style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
    >
      {/* Floating spec chips */}
      <div className="animate-chip-1 absolute -left-5 top-[8%] bg-white/10 border border-sky/30 rounded-lg px-3.5 py-2 backdrop-blur-sm z-20">
        <div className="text-[10px] text-sky-muted mb-0.5">{device.chip1Label}</div>
        <div className="text-[13px] font-bold text-white">{device.chip1Val}</div>
      </div>
      <div className="animate-chip-2 absolute -left-8 top-[55%] bg-white/10 border border-sky/30 rounded-lg px-3.5 py-2 backdrop-blur-sm z-20">
        <div className="text-[10px] text-sky-muted mb-0.5">{device.chip2Label}</div>
        <div className="text-[13px] font-bold text-white">{device.chip2Val}</div>
      </div>
      <div className="animate-chip-3 absolute -right-3 top-[12%] bg-white/10 border border-sky/30 rounded-lg px-3.5 py-2 backdrop-blur-sm z-20">
        <div className="text-[10px] text-sky-muted mb-0.5">{device.chip3Label}</div>
        <div className="text-[13px] font-bold text-white">{device.chip3Val}</div>
      </div>

      {/* Device */}
      <div className="animate-float-device laptop-scene">
        {device.type === 'laptop' && <LaptopDevice graphRef={graphRef} />}
        {device.type === 'server' && <ServerDevice />}
        {device.type === 'monitor' && <MonitorDevice graphRef={graphRef} />}
      </div>
    </div>
  )
}

function LaptopDevice({ graphRef }: { graphRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="laptop-body w-[300px]" style={{ transformStyle: 'preserve-3d' }}>
      {/* Screen lid */}
      <div className="w-[300px] h-[188px] rounded-t-[10px] border-2 border-[#2a2a4a] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
        <div className="absolute inset-[8px] bg-[#0d1117] rounded-md overflow-hidden flex flex-col">
          {/* Browser bar */}
          <div className="bg-[#161b22] px-2.5 py-1.5 flex items-center gap-1.5 border-b border-[#21262d]">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-2 h-3.5 bg-sky/15 rounded" />
          </div>
          {/* Screen content */}
          <div className="flex-1 p-2.5 flex flex-col gap-1.5">
            <div className="h-2 w-4/5 bg-sky/30 rounded" />
            <div className="h-2 w-3/5 bg-sky/20 rounded" />
            <div className="h-2 w-[45%] bg-sky/15 rounded" />
            <div className="flex-1 flex items-end gap-1 pt-2" ref={graphRef} />
          </div>
        </div>
        {/* Logo watermark */}
        <div className="absolute bottom-2.5 right-2.5 opacity-30">
          <svg width="18" height="18" viewBox="0 0 46 46" fill="none">
            <rect width="46" height="46" rx="5" fill="#1565C0"/>
            <rect x="3.5" y="3.5" width="39" height="39" rx="2.5" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
            <text x="23" y="32" textAnchor="middle" fill="white" fontFamily="Georgia,serif" fontSize="22" fontWeight="700">I</text>
          </svg>
        </div>
      </div>
      {/* Hinge */}
      <div className="w-[300px] h-1 bg-gradient-to-b from-black to-[#2a2a4a]" />
      {/* Base / keyboard */}
      <div className="w-[300px] h-[168px] border-2 border-[#2a2a4a] border-t-[#333] relative overflow-hidden"
        style={{ background: 'linear-gradient(170deg, #1e1e32 0%, #151525 100%)' }}>
        <div className="absolute inset-[18px] bottom-[36px] grid gap-[3px]"
          style={{ gridTemplateColumns: 'repeat(13, 1fr)', gridTemplateRows: 'repeat(4, 1fr)' }}>
          {Array.from({ length: 52 }).map((_, i) => (
            <div key={i} className="bg-white/[0.06] rounded-[2px]" />
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-12 bg-white/[0.04] border border-white/[0.07] rounded" />
      </div>
      {/* Base bottom */}
      <div className="w-[300px] h-4 rounded-b-md border-2 border-[#2a2a4a] border-t-0 relative"
        style={{ background: 'linear-gradient(180deg, #2d2d4e 0%, #1a1a30 100%)' }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-[#111] rounded-t" />
      </div>
      {/* Screen glow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[180px] h-4 bg-sky/15 rounded-full blur-md" />
    </div>
  )
}

function ServerDevice() {
  return (
    <div className="laptop-body w-[300px]" style={{ transformStyle: 'preserve-3d' }}>
      {/* Server chassis */}
      {[0, 1, 2].map((unit) => (
        <div key={unit} className="w-[300px] h-16 rounded mb-1.5 border border-[#2a3a5a] flex items-center px-4 gap-3"
          style={{ background: 'linear-gradient(180deg, #1a2540 0%, #111a30 100%)' }}>
          {/* Drive bays */}
          <div className="flex gap-1">
            {[0,1,2,3].map(d => (
              <div key={d} className="w-6 h-8 bg-[#0d1525] rounded border border-[#2a3a5a] flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${d < 2 ? 'bg-green-500' : 'bg-sky/50'}`} />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-20 bg-sky/20 rounded mb-1.5" />
            <div className="h-1.5 w-14 bg-sky/10 rounded" />
          </div>
          {/* Status lights */}
          <div className="flex flex-col gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_4px_#22c55e]" />
            <div className="w-2 h-2 rounded-full bg-sky/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          </div>
          {/* Power button */}
          <div className="w-6 h-6 rounded border border-sky/30 flex items-center justify-center bg-[#1565C0]/20">
            <div className="w-2 h-2 rounded-full border-2 border-sky/60" />
          </div>
        </div>
      ))}
      {/* Rack ears */}
      <div className="w-[300px] h-3 rounded-b bg-[#0d1525] border border-[#1a2540] border-t-0" />
      {/* Glow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[200px] h-4 bg-green-500/10 rounded-full blur-md" />
    </div>
  )
}

function MonitorDevice({ graphRef }: { graphRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="laptop-body flex flex-col items-center" style={{ transformStyle: 'preserve-3d' }}>
      {/* Monitor screen */}
      <div className="w-[290px] h-[190px] rounded-[8px] border-2 border-[#2a2a4a] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f1a3e 100%)' }}>
        <div className="absolute inset-[6px] bg-[#0d1117] rounded overflow-hidden flex flex-col">
          <div className="bg-[#161b22] px-2.5 py-1.5 flex items-center gap-1.5 border-b border-[#21262d]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-1.5 h-3 bg-sky/15 rounded" />
          </div>
          <div className="flex-1 p-2.5 flex flex-col gap-1.5">
            <div className="h-2 w-4/5 bg-sky/30 rounded" />
            <div className="h-2 w-3/5 bg-sky/20 rounded" />
            <div className="flex-1 flex items-end gap-1 pt-2" ref={graphRef} />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 opacity-25">
          <svg width="16" height="16" viewBox="0 0 46 46" fill="none">
            <rect width="46" height="46" rx="5" fill="#1565C0"/>
            <rect x="3.5" y="3.5" width="39" height="39" rx="2.5" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
            <text x="23" y="32" textAnchor="middle" fill="white" fontFamily="Georgia,serif" fontSize="22" fontWeight="700">I</text>
          </svg>
        </div>
      </div>
      {/* Slim bezel */}
      <div className="w-[290px] h-4 border-x-2 border-b-2 border-[#2a2a4a] rounded-b-md"
        style={{ background: '#1a1a2e' }} />
      {/* Stand neck */}
      <div className="w-4 h-10 bg-[#1a1a2e] border-x-2 border-[#2a2a4a]" />
      {/* Stand base */}
      <div className="w-24 h-4 rounded-full border-2 border-[#2a2a4a]"
        style={{ background: 'linear-gradient(180deg, #2d2d4e 0%, #1a1a30 100%)' }} />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[160px] h-4 bg-sky/10 rounded-full blur-md" />
    </div>
  )
}
