import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AnimeBackground from './components/AnimeBackground'
import ScrollProgress from './components/ScrollProgress'
import AnimeParticles from './components/AnimeParticles'
import KineticTitle from './components/KineticTitle'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0614] via-[#0a0a1a] to-[#0b0614] text-slate-200">
      <ScrollProgress />
      <AnimeBackground />
      <AnimeParticles />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

      <Navbar />
      <main className="relative">
        <Hero />
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-4">
            <KineticTitle />
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-400/80">© {new Date().getFullYear()} Your Name — 努力と情熱でコードを書く。</footer>
      </main>
    </div>
  )
}

export default App
