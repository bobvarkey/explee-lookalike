import type React from "react"
import { useEffect, useState } from 'react'
import { ChevronDown, LayoutGrid, Gift, BadgeCheck, MessageCircle, Menu, X, Send, UserCheck, CalendarCheck, CircleDollarSign, Sparkles, Check, Bot, Globe, Database, MapPin, Compass } from 'lucide-react'
import { BRAND } from './config'
import { Reveal, Avatar, SectionTitle, Rays } from './components/ui'
import { results, quotes, segments, people, stats, faqs } from './components/data'

function Logo() {
  return <a href="#" className="flex items-center gap-2 text-[22px] font-medium tracking-tight">
    <span className="grid grid-cols-2 gap-[2px]"><i className="h-2 w-2 rounded-[2px] bg-ink" /><i className="h-2 w-2 rounded-[2px] bg-brand-500" /><i className="h-2 w-2 rounded-[2px] bg-ink/40" /><i className="h-2 w-2 rounded-[2px] bg-ink" /></span>
    {BRAND.name.toLowerCase()}
  </a>
}

const products = [
  { icon: Bot, t: 'Outbound Agent', d: 'Autonomous prospecting & email' },
  { icon: Database, t: 'B2B Company Graph', d: '120M+ decision-makers' },
  { icon: MapPin, t: 'Local Business Data', d: '200M+ places' },
  { icon: Compass, t: 'Segment Finder', d: 'Explore niches by fit' },
]

function Nav() {
  const [open, setOpen] = useState(false), [mob, setMob] = useState(false), [scrolled, setScrolled] = useState(false)
  useEffect(() => { const f = () => setScrolled(scrollY > 8); addEventListener('scroll', f); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`sticky top-0 z-40 transition ${scrolled ? 'bg-paper/80 backdrop-blur border-b border-black/5' : ''}`}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1.5 py-2" onClick={() => setOpen(!open)}><LayoutGrid size={14} />Products<ChevronDown size={14} className={`transition ${open ? 'rotate-180' : ''}`} /></button>
            <div className={`absolute right-0 top-full w-72 rounded-2xl border border-black/5 bg-white p-2 shadow-xl transition ${open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'}`}>
              {products.map((p) => <a key={p.t} href="#" className="flex gap-3 rounded-xl p-3 hover:bg-paper"><p.icon size={18} className="mt-0.5 text-brand-600" /><div><div className="text-sm font-medium">{p.t}</div><div className="text-xs text-black/50">{p.d}</div></div></a>)}
            </div>
          </div>
          <a href="#pricing">Pricing</a><a href="#">Partners</a><a href="#">Sign in</a>
        </nav>
        <button className="md:hidden" onClick={() => setMob(!mob)} aria-label="Menu">{mob ? <X /> : <Menu />}</button>
      </div>
      {mob && <div className="border-t border-black/5 bg-paper px-5 pb-5 md:hidden">
        {products.map((p) => <a key={p.t} href="#" className="flex items-center gap-3 py-3 text-[15px]"><p.icon size={16} className="text-brand-600" />{p.t}</a>)}
        <div className="mt-2 flex flex-col gap-3 border-t border-black/5 pt-4 text-[15px]"><a href="#pricing" onClick={() => setMob(false)}>Pricing</a><a href="#">Partners</a><a href="#">Sign in</a></div>
      </div>}
    </header>
  )
}

function Counter() {
  const [n, setN] = useState(98214)
  useEffect(() => { const t = setInterval(() => setN((v) => v + Math.floor(Math.random() * 3)), 2500); return () => clearInterval(t) }, [])
  return <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[13px] shadow-sm"><b className="font-semibold tabular-nums">{n.toLocaleString()}</b> warm replies for 9,420 teams</div>
}

function Hero() {
  const [url, setUrl] = useState('')
  return (
    <section className="relative flex items-center overflow-hidden px-5 py-10 sm:min-h-[calc(100vh-4rem)] sm:py-16">
      <Rays className="opacity-70 [mask-image:radial-gradient(ellipse_at_center,transparent_22%,#000_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal><Counter /></Reveal>
        <Reveal delay={80}><h1 className="text-[40px] leading-[1.05] sm:text-[64px] font-medium tracking-tight">Wake up to <span className="text-brand-600">warm replies</span><br />from your first day</h1></Reveal>
        <Reveal delay={160}><p className="mx-auto mt-6 max-w-xl text-[16px] sm:text-[18px] text-black/55">Autonomous agents map your market, pick the right buyers, write one-to-one emails and put meetings on your calendar.</p></Reveal>
        <Reveal delay={220}><div className="mt-5 flex flex-wrap justify-center gap-2 text-[13px]">
          <span className="rounded-full bg-black/5 px-3 py-1.5">No sales hires or mail setup</span>
          <span className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5"><Gift size={13} />Starter credits included</span>
        </div></Reveal>
        <Reveal delay={280}><form onSubmit={(e) => { e.preventDefault(); alert(`Demo only — ${BRAND.name} would now analyse ${url || 'your site'}.`) }} className="mx-auto mt-8 flex max-w-xl items-center rounded-2xl border-2 border-ink bg-white p-1.5 shadow-sm focus-within:ring-4 focus-within:ring-brand-100">
          <Globe size={18} className="ml-3 text-black/40" />
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter your website, e.g. acme.io" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[15px] outline-none" />
          <button className={`rounded-xl bg-ink px-4 py-3 text-sm font-medium text-white transition ${url ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>Start</button>
        </form>
        <button className="mt-4 text-sm underline-offset-4 hover:underline">No website yet? Describe your offer instead</button></Reveal>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <SectionTitle>Real numbers from real teams</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r, i) => <Reveal key={r.name} delay={i * 80}><div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,.04)]">
          <div className="flex items-center gap-3"><Avatar name={r.name} /><div className="flex-1"><div className="text-sm font-semibold">{r.name}</div><div className="text-xs text-black/50">{r.co}</div></div><BadgeCheck size={16} className="text-black/40" /></div>
          <p className="mt-4 flex-1 text-[15px] leading-relaxed">“{r.quote}”</p>
          <div className="mt-5 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-xl bg-paper py-3"><div className="text-xl font-semibold">{r.leads}</div><div className="text-xs text-black/50">warm leads</div></div>
            <div className="rounded-xl bg-paper py-3"><div className="text-xl font-semibold">{r.cpl}</div><div className="text-xs text-black/50">per lead</div></div>
          </div></div></Reveal>)}
      </div>
    </section>
  )
}

function Quote({ q }: { q: (typeof quotes)[number] }) {
  return <div className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,.04)]"><p className="text-[15px] leading-relaxed">“{q.text}”</p><div className="mt-4 flex items-center gap-3"><Avatar name={q.name} size={30} /><div><div className="text-sm font-semibold">{q.name}</div><div className="text-xs text-black/50">{q.co}</div></div></div></div>
}
function Marquee() {
  const rows = [quotes.slice(0, 5), quotes.slice(4)]
  return (
    <section className="py-16">
      <SectionTitle>What people tell us</SectionTitle>
      <div className="mask-x space-y-4 overflow-hidden">
        {rows.map((row, i) => <div key={i} className={`flex w-max gap-4 hover:[animation-play-state:paused] ${i ? 'animate-marquee-rev' : 'animate-marquee'}`}>{[...row, ...row, ...row, ...row].map((q, k) => <Quote key={k} q={q} />)}</div>)}
      </div>
    </section>
  )
}

const steps: { t: string; body: React.ReactNode }[] = [
  { t: 'Understands your offer', body: <div className="rounded-xl bg-paper p-4 text-sm"><div className="font-medium">brewcraft.example</div><p className="mt-1 text-black/55">Small-batch espresso equipment and beans for cafés and hospitality groups.</p><div className="mt-3 flex items-center gap-2 text-xs text-black/50"><Sparkles size={13} className="animate-pulse text-brand-600" />Scanning similar businesses…</div>{['grindhouse.example', 'beanworks.example', 'crema.example'].map((d) => <div key={d} className="mt-1.5 flex items-center gap-2 text-xs"><Check size={12} className="text-brand-600" />{d}</div>)}</div> },
  { t: 'Works out who buys it', body: <div className="rounded-xl bg-paper p-4 text-sm"><div className="mb-2 flex justify-between text-[11px] uppercase tracking-wide text-black/40"><span>Segment</span><span>Fit</span></div>{segments.map((s) => <div key={s.name} className="flex items-center justify-between border-t border-black/5 py-2"><span className="font-medium">{s.name}</span><span className="flex items-center gap-2"><i className="h-1.5 w-16 rounded bg-black/10"><i className="block h-full rounded bg-brand-500" style={{ width: `${s.fit}%` }} /></i>{s.fit}%</span></div>)}</div> },
  { t: 'Finds the exact people', body: <div className="grid gap-2 sm:grid-cols-2">{people.map((p) => <div key={p.name} className="flex items-center gap-3 rounded-xl bg-paper p-3 text-sm"><Avatar name={p.name} size={30} /><div><div className="font-medium">{p.name}</div><div className="text-xs text-black/50">{p.role} · {p.co}</div></div></div>)}</div> },
  { t: 'Writes every email personally', body: <div className="rounded-xl bg-paper p-4 text-sm leading-relaxed"><div className="text-black/50">Subject <b className="font-medium text-ink">Brewcraft × Ember Roastery</b></div><p className="mt-3">Hi Iris,</p><p className="mt-2">Noticed <b className="font-medium">Ember just opened a second tasting bar</b>. Keeping shots consistent across two sites is tough on older grinders; ours hold calibration for weeks.</p><p className="mt-2">Worth sending a loaner for a week?</p></div> },
  { t: 'Replies and books the call', body: <div className="space-y-2 text-sm"><div className="w-fit rounded-xl bg-paper px-3 py-2">Does it work with our current machines?</div><div className="ml-auto w-fit rounded-xl bg-brand-50 px-3 py-2">Yes — any standard 58mm group head.</div><div className="w-fit rounded-xl bg-paper px-3 py-2">Great, Thursday 11am?</div><div className="ml-auto flex w-fit items-center gap-2 rounded-xl bg-brand-50 px-3 py-2"><CalendarCheck size={14} />Booked, invite sent.</div></div> },
  { t: 'Learns and doubles down', body: <div className="rounded-xl bg-paper p-4 text-sm">{[['Specialty roasters', 'Scaling', '$1.80'], ['Boutique hotels', 'Scaling', '$2.10'], ['Catering firms', 'Testing', '$2.95'], ['University cafés', 'Paused', '$7.40']].map(([a, b, c]) => <div key={a} className="flex justify-between border-t border-black/5 py-2 first:border-0"><span className="font-medium">{a}</span><span className={`flex items-center gap-1.5 ${b === 'Paused' ? 'text-black/40' : ''}`}>{b}{b === 'Scaling' && <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />}</span><span>{c}</span></div>)}</div> },
]
function Pipeline() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8">
      <SectionTitle>One agent, the whole funnel</SectionTitle>
      <div className="relative">
        {steps.map((s, i) => <div key={s.t} className="sticky mb-6" style={{ top: 96 + i * 14 }}>
          <div className="grid gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,.05)] sm:grid-cols-2 sm:p-8">
            <div><div className="text-xs font-medium text-brand-600">Step {i + 1}</div><h3 className="mt-2 text-[24px] sm:text-[28px] font-medium leading-tight tracking-tight">{s.t}</h3></div>
            {s.body}
          </div>
        </div>)}
      </div>
    </section>
  )
}

function Stats() {
  return <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8"><SectionTitle>Built different, on purpose</SectionTitle>
    <div className="grid gap-4 md:grid-cols-3">{stats.map((s, i) => <Reveal key={s.big} delay={i * 100}><div className="h-full rounded-2xl bg-white p-7"><div className="text-[28px] sm:text-[34px] font-medium leading-tight tracking-tight">{s.prefix}{s.big} {s.label}</div><p className="mt-6 text-sm text-black/50">{s.sub}</p></div></Reveal>)}</div></section>
}

function Pricing() {
  const [v, setV] = useState(40)
  const emails = Math.round(v / 0.05)
  const cards = [{ i: Send, n: emails.toLocaleString(), l: 'Emails' }, { i: UserCheck, n: `~${Math.max(1, Math.round(v / 15))}–${Math.round(v / 6)}`, l: 'Warm leads' }, { i: CalendarCheck, n: `~${Math.max(1, Math.round(v / 35))}`, l: 'Meetings' }, { i: CircleDollarSign, n: '$1–$18', l: 'Per lead' }]
  return <section id="pricing" className="px-5 py-20"><SectionTitle>Usage-based. Cancel by pausing.</SectionTitle>
    <Reveal><div className="mx-auto max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,.05)]">
      <div className="text-2xl font-semibold tabular-nums">${v}</div>
      <input type="range" min={20} max={500} step={10} value={v} onChange={(e) => setV(+e.target.value)} className="mt-3 w-full" aria-label="Budget" />
      <div className="mt-5 grid grid-cols-2 gap-2">{cards.map((c) => <div key={c.l} className="rounded-xl bg-paper p-4"><div className="flex justify-between"><span className="text-xl font-semibold tabular-nums">{c.n}</span><c.i size={16} className="text-black/40" /></div><div className="mt-1 text-xs text-black/50">{c.l}</div></div>)}</div>
      <button className="mt-6 w-full rounded-xl bg-ink py-3.5 text-sm font-medium text-white transition hover:bg-black/80">Claim starter credits</button>
    </div></Reveal></section>
}

function Faq() {
  const [o, setO] = useState<number | null>(0)
  return <section className="mx-auto max-w-2xl px-5 py-16"><SectionTitle>Questions, answered</SectionTitle>
    {faqs.map((f, i) => <div key={f.q} className="border-b border-black/10"><button onClick={() => setO(o === i ? null : i)} className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium">{f.q}<ChevronDown size={16} className={`shrink-0 transition ${o === i ? 'rotate-180' : ''}`} /></button>
      <div className={`grid transition-all duration-300 ${o === i ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}><p className="overflow-hidden text-[15px] leading-relaxed text-black/60">{f.a}</p></div></div>)}
  </section>
}

function FinalCta() {
  return <section className="relative overflow-hidden px-5 py-28 text-center"><Rays className="opacity-60 [mask-image:linear-gradient(to_bottom,transparent,#000)]" />
    <div className="relative"><Reveal><h2 className="text-[36px] sm:text-[56px] font-medium leading-[1.05] tracking-tight text-black/25">Skeptical? Fair.</h2></Reveal><Reveal delay={150}><h2 className="text-[36px] sm:text-[56px] font-medium leading-[1.05] tracking-tight">Let the replies convince you.</h2></Reveal>
      <Reveal delay={300}><button className="mt-8 rounded-xl bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-black/80">Try it with free credits</button></Reveal></div></section>
}

function Footer() {
  const cols = [['Products', ['Outbound Agent', 'B2B Company Graph', 'Local Business Data', 'Segment Finder']], ['Data by region', ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa']], ['Company', ['Pricing', 'Partner program', 'API docs', 'Security']]] as const
  return <footer className="border-t border-black/10 px-5 pt-14 pb-8 sm:px-8"><div className="mx-auto max-w-[1280px]">
    <div className="grid gap-10 sm:grid-cols-3">{cols.map(([h, ls]) => <div key={h}><div className="mb-4 text-sm font-semibold">{h}</div><ul className="space-y-2.5 text-sm text-black/55">{ls.map((l) => <li key={l}><a href="#" className="hover:text-ink">{l}</a></li>)}</ul></div>)}</div>
    <div className="mt-14 flex flex-col justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/50 sm:flex-row"><span>© {new Date().getFullYear()} {BRAND.name}. Placeholder brand for demonstration.</span><span className="flex gap-4"><a href="#">Terms</a><a href="#">Privacy</a></span></div>
  </div></footer>
}

export default function App() {
  return <>
    <Nav /><Hero /><Results /><Marquee /><Pipeline /><Stats /><Pricing /><Faq /><FinalCta /><Footer />
    <button aria-label="Chat" className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-lg transition hover:scale-105"><MessageCircle size={22} /></button>
  </>
}
