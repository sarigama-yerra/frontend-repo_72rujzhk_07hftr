import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-sm">
      <li><a href="#projects" className="text-slate-200 hover:text-white transition">Projects</a></li>
      <li><a href="#skills" className="text-slate-200 hover:text-white transition">Skills</a></li>
      <li><a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a></li>
      <li className="flex items-center gap-4">
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white transition"><Github size={18} /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition"><Linkedin size={18} /></a>
        <a href="#contact" aria-label="Email" className="text-slate-300 hover:text-white transition"><Mail size={18} /></a>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-lg shadow-blue-500/20" />
              <span className="text-white font-semibold tracking-tight">Student Portfolio</span>
            </a>
            <nav className="hidden md:block">
              <NavLinks />
            </nav>
            <button className="md:hidden text-white/80" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
