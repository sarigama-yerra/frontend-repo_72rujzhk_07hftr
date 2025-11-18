import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const sampleProjects = [
  {
    title: 'AI Study Planner',
    description: 'A planner that uses AI to schedule study sessions and track progress.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Campus Events App',
    description: 'Discover and RSVP to university events with real-time updates.',
    tags: ['React Native', 'Firebase'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Personal Finance Dashboard',
    description: 'Track budgets and visualize spending with interactive charts.',
    tags: ['Vite', 'Tailwind', 'D3.js'],
    live: 'https://example.com',
    repo: 'https://github.com/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(129,140,248,0.08),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          <Sparkles className="text-cyan-300" /> Featured Projects
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="group relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-lg overflow-hidden hover:border-white/20 hover:bg-slate-900/60 transition">
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-[conic-gradient(from_90deg_at_50%_50%,rgba(34,211,238,0.15),rgba(96,165,250,0.15),rgba(244,114,182,0.15),rgba(167,139,250,0.15),transparent_75%)]" />
              <div className="h-40 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-indigo-500/30" />
              <div className="relative p-6">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-slate-200/90">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition"><ExternalLink size={16} /> Live</a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition"><Github size={16} /> Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
