import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.07),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s work together</motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-4 text-slate-300/90">
          I’m actively seeking internships and junior roles. Feel free to reach out for collaborations or opportunities.
        </motion.p>
        <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} href="mailto:you@example.com" className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-blue-500/30 hover:brightness-110 transition">
          Email Me
        </motion.a>
      </div>
    </section>
  )
}
