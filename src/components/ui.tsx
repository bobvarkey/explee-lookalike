import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

const GRADS = ['from-emerald-300 to-teal-600', 'from-amber-200 to-orange-500', 'from-sky-300 to-indigo-500', 'from-rose-200 to-pink-500', 'from-lime-200 to-green-600', 'from-violet-300 to-purple-600']
export function Avatar({ name, size = 36 }: { name: string; size?: number }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('')
  const g = GRADS[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % GRADS.length]
  return <div style={{ width: size, height: size }} className={`shrink-0 rounded-full bg-gradient-to-br ${g} grid place-items-center text-[11px] font-semibold text-white`}>{initials}</div>
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <Reveal><h2 className="text-center text-[28px] sm:text-[40px] leading-tight tracking-tight font-medium mb-10 sm:mb-14">{children}</h2></Reveal>
}

/** Radiating dotted lines drawn in SVG, converging on the centre (generated, not copied). */
export function Rays({ className = '' }: { className?: string }) {
  const lines = Array.from({ length: 14 }, (_, i) => i)
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden>
      {lines.map((i) => {
        const y = 40 + i * 40
        return (
          <g key={i}>
            <path d={`M0 ${y} Q 300 ${y} 520 300`} stroke="#d9d6cf" strokeWidth="1" fill="none" opacity=".6" />
            <path d={`M1200 ${y} Q 900 ${y} 680 300`} stroke="#d9d6cf" strokeWidth="1" fill="none" opacity=".6" />
            {[0.2, 0.45, 0.7].map((t, k) => {
              const x = t * 520, yy = y + (300 - y) * t * t
              return <g key={k}>
                <circle cx={x} cy={yy} r="2" fill={k === 1 ? '#10b981' : '#bdb9b0'} className="animate-twinkle" style={{ animationDelay: `${(i * 3 + k) * 0.23}s` }} />
                <circle cx={1200 - x} cy={yy} r="2" fill={k === 0 ? '#10b981' : '#bdb9b0'} className="animate-twinkle" style={{ animationDelay: `${(i * 5 + k) * 0.19}s` }} />
              </g>
            })}
          </g>
        )
      })}
    </svg>
  )
}
