import { 
  SparklesIcon, 
  BoltIcon, 
  CameraIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-lime-200">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-15%] left-[-10%] w-[40vw] h-[40vw] bg-lime-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[35vw] h-[35vw] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob [animation-delay:4s]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-yellow-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob [animation-delay:8s]"></div>
      </div>

      <header className="w-full transition-all duration-300">
        <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
          <a href="index.html" className="flex items-center gap-3 animate-fade-in-up hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-lime-500 rounded-xl flex items-center justify-center shadow-lg shadow-lime-200 rotate-3 transform transition-transform hover:rotate-0">
              <FireIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight">
              Nutri<span className="text-lime-500">Track</span>
            </span>
          </a>

        </nav>
      </header>

      <main className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-32">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 tracking-tighter animate-fade-in-up">
              Come <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">mejor</span>,<br/>
              vive <span className="italic font-serif font-light text-slate-400">bien</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                El equilibrio perfecto entre ciencia y bienestar. Monitorea tu nutrición con precisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
                <a 
                    href="calculadora.html"
                    className="w-full sm:w-auto px-10 py-5 bg-lime-500 text-white font-bold rounded-full shadow-2xl shadow-lime-200 hover:bg-lime-600 transition-all transform hover:-translate-y-1 active:scale-95"
                >
                    Empezar ahora
                </a>
                <a href="#caracteristicas" className="text-slate-400 font-medium hover:text-slate-900 transition-colors">
                    Ver características ↓
                </a>
            </div>
          </section>

          <section id="caracteristicas" className="grid md:grid-cols-2 gap-16 mb-16 animate-fade-in-up [animation-delay:600ms]">
            <a href="calculadora.html?category=1" className="group cursor-pointer">
                <div className="mb-6 overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 aspect-video flex items-center justify-center p-8 group-hover:border-lime-200 transition-all">
                    <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                        <SparklesIcon className="w-8 h-8 text-lime-600" />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Nutrición Inteligente</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Algoritmos diseñados para darte el desglose exacto de macronutrientes en cada comida.</p>
            </a>
            <a href="calculadora.html?category=2" className="group cursor-pointer">
                <div className="mb-6 overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 aspect-video flex items-center justify-center p-8 group-hover:border-emerald-200 transition-all">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                        <BoltIcon className="w-8 h-8 text-emerald-600" />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Energía en Movimiento</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Registra tus sesiones de entrenamiento y visualiza el impacto inmediato en tu balance diario.</p>
            </a>
          </section>

          <section className="max-w-md mx-auto mb-40 animate-fade-in-up [animation-delay:800ms]">
            <a href="camara.html" className="group cursor-pointer block text-center">
                <div className="mb-6 overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 aspect-video flex items-center justify-center p-8 group-hover:border-purple-200 transition-all">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                        <CameraIcon className="w-8 h-8 text-purple-600" />
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Cámara Inteligente</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Escanea tus platos y te calculamos todo automáticamente usando IA avanzada.</p>
            </a>
          </section>
        </div>
      </main>

      <footer className="py-20 border-t border-slate-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-300 mb-4 animate-fade-in-up">NutriTrack Digital</p>
        <p className="text-slate-400 text-sm italic">&copy; Jorge-R-V</p>
      </footer>
    </div>
  )
}
