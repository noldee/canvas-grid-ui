import { GridComponent } from "./components/GridComponent";

export default function Demo() {
  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-[#080808] text-zinc-900 dark:text-zinc-100 selection:bg-orange-500/30 transition-colors duration-1000">
      
      {/* OVERLAY: TEXTURA DE PAPEL / GRANO (Toque humano) */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[99] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative">
        
        {/* HERO / SECCIÓN 1: RAY-CAST */}
        <section className="px-6 py-12 md:py-32 max-w-[1400px] mx-auto">
          <header className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-orange-600"></span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-orange-600">Core Engine v.1</span>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-[120px] font-light leading-[0.85] tracking-tighter italic">
                Ray-Cast <br />
                <span className="font-serif not-italic font-medium text-zinc-400 dark:text-zinc-800">Spotlight</span>
              </h1>
            </div>
            <div className="md:col-span-4 flex items-end">
              <p className="text-lg md:text-xl leading-tight text-zinc-500 font-light max-w-[280px]">
                Sistemas de iluminación dinámica para interfaces de alto rendimiento.
              </p>
            </div>
          </header>

          <GridComponent columns={1} animation="Ray-Cast Spotlight" gap="gap-4 md:gap-0">
            {/* Grid dinámico: 1 col en móvil, 3 en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-200 dark:border-zinc-800">
              {[
                { n: "01", t: "Intelligent Grid", d: "Data visualization core" },
                { n: "02", t: "Ray-Cast Tech", d: "Optical physics engine" },
                { n: "03", t: "Premium UI", d: "Human-centric design" },
              ].map((item, i) => (
                <div key={i} className="group p-8 md:p-12 border-r border-b border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700 aspect-square md:aspect-auto md:h-80 flex flex-col justify-between">
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-orange-500 transition-colors tracking-widest uppercase">
                    Module // {item.n}
                  </span>
                  <div>
                    <h3 className="text-3xl font-medium mb-2 tracking-tight">{item.t}</h3>
                    <p className="text-sm text-zinc-500 font-mono italic">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </GridComponent>
        </section>

        {/* SECCIÓN 2: HIGH-TILT 3D (Bento Responsive) */}
        {/* --- SECCIÓN 2: HIGH-TILT 3D (BENTO RESPONSIVE) --- */}
        <section className="py-12 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase">High-Tilt System</h2>
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">PITCH: 35.00° / Z-AXIS: ENABLED</span>
          </div>

          {/* Usamos un grid de Tailwind directo para controlar el responsive perfecto */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Card Principal: 3 columnas en desktop, 1 en móvil */}
            <div className="lg:col-span-3 min-h-[400px] md:min-h-[550px]">
              <GridComponent columns={1} animation="High-Tilt 3D" gap="gap-0">
                <div className="w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-8 md:p-14 flex flex-col justify-between group overflow-hidden relative shadow-sm">
                  <div className="absolute top-8 right-8">
                    <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                      <span className="text-xl transform group-hover:rotate-45 transition-transform italic">↗</span>
                    </div>
                  </div>
                  
                  <h3 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                    Deep <br /> <span className="text-orange-600">Space.</span>
                  </h3>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono">
                    <div className="space-y-4">
                      <p className="max-w-[200px] text-[11px] leading-tight text-zinc-400 uppercase tracking-widest font-bold">
                        Motor de renderizado con profundidad real 2026.
                      </p>
                      <div className="flex gap-2">
                         <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[9px] rounded uppercase">Ref. X-01</span>
                         <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[9px] rounded uppercase">Stable</span>
                      </div>
                    </div>
                    <div className="text-[80px] md:text-[120px] font-black leading-none opacity-[0.03] select-none absolute -bottom-4 -right-4">3D</div>
                  </div>
                </div>
              </GridComponent>
            </div>

            {/* Cards Secundarias: Columna lateral en desktop, se apilan en móvil */}
            <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <GridComponent columns={1} animation="High-Tilt 3D" gap="gap-0">
                <div className="h-64 lg:h-[calc(50%-12px)] bg-[#e34c26] rounded-[2rem] p-8 flex flex-col justify-center items-center text-white group cursor-pointer overflow-hidden relative">
                  <span className="text-8xl font-serif italic font-bold group-hover:scale-110 transition-transform duration-700">A</span>
                  <p className="text-[10px] tracking-[0.5em] uppercase font-black mt-2 opacity-60">Primary</p>
                </div>
              </GridComponent>

              <GridComponent columns={1} animation="High-Tilt 3D" gap="gap-0">
                <div className="h-64 lg:h-[calc(50%-12px)] bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 flex flex-col justify-center items-center text-white group cursor-pointer hover:border-zinc-600 transition-all">
                  <span className="text-5xl font-serif italic font-medium tracking-tighter">B.02</span>
                  <p className="text-[10px] tracking-[0.5em] uppercase font-black mt-4 text-zinc-500">Secondary</p>
                </div>
              </GridComponent>
            </div>

          </div>
        </section>
        {/* SECCIÓN 3: MAGNETIC (Minimalista Extremo) */}
        <section className="px-6 py-32 text-center">
          <GridComponent columns={1} animation="Magnetic Force" gap="gap-0">
            <div className="max-w-2xl mx-auto group">
              <h2 className="text-sm font-mono tracking-[0.6em] uppercase text-zinc-400 mb-12 group-hover:text-orange-600 transition-all">
                Physical Attraction
              </h2>
              <div className="inline-block relative">
                <button className="text-4xl md:text-6xl font-serif italic border-b-2 border-zinc-900 dark:border-zinc-100 pb-4 hover:text-orange-600 hover:border-orange-600 transition-all duration-500">
                  Experience Force
                </button>
              </div>
            </div>
          </GridComponent>
        </section>

      </main>

      <footer className="px-6 py-12 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between gap-8 items-center">
        <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-zinc-400">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Awwwards</span>
        </div>
        <div className="text-[10px] font-mono text-zinc-400">
          © 2026 HUMAN_ENGINE_STUDIO
        </div>
      </footer>
    </div>
  );
}