import { useEffect, useRef } from 'react'

// Canvas-based particles for speedlines and starbursts
export default function AnimeParticles() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let dpr = Math.max(1, window.devicePixelRatio || 1)
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    const spawn = () => {
      // spawn starbursts and trails
      if (particles.length < 120) {
        for (let i = 0; i < 6; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.2) * 0.6,
            life: 0,
            max: 120 + Math.random() * 80,
            size: 0.8 + Math.random() * 1.8,
            hue: 190 + Math.random() * 80,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'
      for (let p of particles) {
        p.x += p.vx * dpr
        p.y += p.vy * dpr
        p.life += 1

        // wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const alpha = Math.sin((p.life / p.max) * Math.PI)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 20 * p.size)
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 70%, ${0.9 * alpha})`)
        grad.addColorStop(1, `hsla(${p.hue}, 95%, 50%, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, 12 * p.size, 0, Math.PI * 2)
        ctx.fill()

        // speedlines
        ctx.strokeStyle = `hsla(${p.hue}, 95%, 70%, ${0.35 * alpha})`
        ctx.lineWidth = 1 * dpr
        ctx.beginPath()
        ctx.moveTo(p.x - 14 * p.size, p.y)
        ctx.lineTo(p.x + 14 * p.size, p.y)
        ctx.stroke()
      }
      particles = particles.filter(p => p.life < p.max)
      spawn()
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    spawn()
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-50" />
}
