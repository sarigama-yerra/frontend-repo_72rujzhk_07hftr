import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop')] opacity-[0.02] bg-cover bg-center" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-400/80">© {new Date().getFullYear()} Your Name — Built with love and coffee.</footer>
      </main>
    </div>
  )
}

export default App
