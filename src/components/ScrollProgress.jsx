import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const p = height > 0 ? (scrolled / height) * 100 : 0
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[60]">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-transparent to-transparent opacity-50" />
      <div
        className="h-1 bg-[linear-gradient(90deg,#22d3ee_0%,#60a5fa_50%,#f472b6_100%)] shadow-[0_0_12px_#60a5fa] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
