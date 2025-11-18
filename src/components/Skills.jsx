import { motion } from 'framer-motion'
import { Code2, Database, Boxes, Palette, Rocket, Cpu } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Vite'] },
  { icon: Database, title: 'Backend', items: ['FastAPI', 'Node.js', 'Express', 'MongoDB'] },
  { icon: Boxes, title: 'Tools', items: ['Git/GitHub', 'Vercel', 'Docker', 'Figma'] },
  { icon: Cpu, title: 'Languages', items: ['JavaScript', 'Python', 'SQL', 'C++'] },
  { icon: Palette, title: 'Design', items: ['UI/UX', 'Accessibility', 'Prototyping'] },
  { icon: Rocket, title: 'Soft Skills', items: ['Collaboration', 'Communication', 'Problem Solving'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.08),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">Skills & Tech</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, items }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-lg hover:border-white/20 hover:bg-slate-900/60 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 flex items-center justify-center text-slate-900 shadow-md shadow-blue-500/30">
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="px-3 py-1 rounded-lg bg-white/5 text-slate-200/90 text-sm border border-white/10">{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
