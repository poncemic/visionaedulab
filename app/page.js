export default function HomePage() {
    return (
        <main className="bg-white text-slate-900">

            {/* HERO SECTION */}
            <header className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-white px-6 py-20">
                <div className="max-w-7xl mx-auto w-full">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
                        {/* Misión */}
                        <div className="order-2 lg:order-1 lg:w-1/3 text-center lg:text-right">
                            <h3 className="text-[#50C878] font-black uppercase tracking-tighter text-2xl mb-2">Misión</h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                Democratizar el acceso a la educación inmersiva, transformando el aula en un ecosistema de exploración científica mediante la neuroeducación.
                            </p>
                        </div>

                        {/* Logo Central */}
                        <div className="order-1 lg:order-2 lg:w-1/3 flex justify-center">
                            <div className="relative hover:scale-105 transition-transform duration-500">
                                <img
                                    src="/logo.jpg"
                                    alt="Visiona EduLab"
                                    className="h-48 md:h-64 w-auto object-contain rounded-3xl p-4 bg-white border border-slate-100 shadow-[0_15px_25px_rgba(0,33,71,0.25)]"
                                />
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="order-3 lg:w-1/3 text-center lg:text-left">
                            <h3 className="text-[#FF8C00] font-black uppercase tracking-tighter text-2xl mb-2">Visión</h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                Liderar la transición hacia el aula del siglo XXII, inspirando a la próxima generación de mentes curiosas a través de la innovación tecnológica.
                            </p>
                        </div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#002147] leading-tight mb-8">
                            Expandiendo los límites de la <span className="text-[#50C878]">educación</span>{' '}
                            <br className="hidden md:block" />
                            en la frontera de la <span className="text-[#FF8C00]">innovación tecnológica</span>.
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#tecnologia" className="bg-[#FF8C00] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">Meta Quest 3</a>
                            <a href="#adn" className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">Nuestro ADN</a>
                            <a href="#quienes-somos" className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">Quiénes Somos</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECCIÓN: QUIÉNES SOMOS */}
            <section id="quienes-somos" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-slate-100">
                        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-3xl shadow-lg">
                            <img src="/miguel-ponce.jpg" alt="Miguel Ponce" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147] mb-2">Miguel Ponce</h2>
                            <p className="text-[#FF8C00] font-bold uppercase tracking-widest text-sm mb-6">Fundador &amp; Líder de Proyecto</p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Lidero Visiona EduLab con el firme propósito de integrar la neuroeducación y las tecnologías inmersivas en el núcleo del aprendizaje. Creemos que la curiosidad es el motor del conocimiento.
                            </p>
                            <a href="mailto:miguel.ponce@visionaedulab.com.ar" className="inline-flex items-center text-[#002147] font-bold hover:text-[#FF8C00] transition">
                                📩 miguel.ponce@visionaedulab.com.ar
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN: ADN */}
            <section id="adn" className="py-24 px-6 bg-[#002147] text-white rounded-[3rem] mx-4 shadow-2xl">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
                    <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                        <h4 className="text-2xl font-bold mb-4 text-[#50C878]">VISIONA</h4>
                        <p className="text-slate-300 italic">Anticipación y acción. Proyectamos escenarios futuros para hacerlos realidad hoy.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                        <h4 className="text-2xl font-bold mb-4 text-[#FF8C00]">EDU</h4>
                        <p className="text-slate-300 italic">Agilidad EdTech. Un enfoque moderno y tecnológico para el aprendizaje dinámico.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                        <h4 className="text-2xl font-bold mb-4 text-white">LAB</h4>
                        <p className="text-slate-300 italic">I+D Pedagógico. Espacio de experimentación donde se co-crea el conocimiento.</p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN: TECNOLOGÍA */}
            <section id="tecnologia" className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
                        <img src="https://i.blogs.es/f78063/meta-quest-3/450_1000.jpeg" alt="Meta Quest 3" className="rounded-3xl shadow-xl w-full" />
                        <div className="p-8 bg-white rounded-3xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-[#002147] mb-4">Realidad Mixta de Alta Resolución</h3>
                            <p className="text-slate-600">Integración perfecta del mundo físico con elementos digitales para una interacción intuitiva.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start bg-white p-6 rounded-2xl border-l-4 border-[#50C878] shadow-sm">
                                <div className="text-3xl mr-4">🧠</div>
                                <div>
                                    <h4 className="font-bold text-[#002147]">+75% Retención</h4>
                                    <p className="text-slate-600 text-sm">Basado en el Método de Loci y memoria espacial 3D.</p>
                                </div>
                            </div>
                            <a href="/dossier-2026.docx" download className="inline-block bg-[#002147] text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
                                Descargar Dossier 2026
                            </a>
                        </div>
                        <div className="bg-white p-10 rounded-[3rem] shadow-sm italic text-slate-600">
                            "No somos una empresa de tecnología, sino un laboratorio itinerante que resuelve la dificultad de retener conceptos abstractos."
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-16 px-6 text-center border-t border-slate-100 bg-slate-50">
                <img src="/logo.jpg" alt="Logo" className="h-12 mx-auto mb-6 opacity-60 grayscale" />
                <p className="text-xl font-bold text-[#002147]">Visiona EduLab 2026</p>
                <p className="text-slate-400 text-sm">Buenos Aires, Argentina</p>
            </footer>

        </main>
    );
}
