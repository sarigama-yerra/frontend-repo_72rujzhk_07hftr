import { motion, useScroll, useTransform } from 'framer-motion'

export default function KineticTitle() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 140])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])

  return (
    <div className="relative overflow-hidden">
      <motion.h2 style={{ y: y1 }} className="text-center text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#22d3ee,#60a5fa,#a78bfa,#f472b6)] drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
        未来のエンジニア
      </motion.h2>
      <motion.p style={{ y: y2, rotate }} className="mt-3 text-center text-slate-300/90">
        Build, learn, and ship — with style.
      </motion.p>
    </div>
  )
}
