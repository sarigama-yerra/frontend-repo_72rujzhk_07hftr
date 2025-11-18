import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90 backdrop-blur">
            <span className="animate-pulse">✨</span> コードで世界を描く
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-5 text-lg text-slate-200/90 max-w-xl">
            A passionate student developer crafting modern web apps with React, Node, and Python. I love building interactive, accessible experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-8 flex items-center gap-4">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-blue-500/30 hover:brightness-110 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Contact Me</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="mt-6 text-slate-300/80 text-sm">
            Open to internships and junior roles • Available for freelance
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}
