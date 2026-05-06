export default function HomePage() {
    return (
        <>
            {/* FIXED NAVIGATION HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm h-24">
                <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
                    <a href="#">
                        <img src="/logo.png" alt="Visiona EduLab" className="h-16 w-auto object-contain rounded-lg" />
                    </a>
                    <nav className="hidden md:flex items-center gap-10">
                        <a href="#experiencias" className="flex items-center gap-2 text-base font-semibold text-slate-600 hover:text-[#002147] transition">
                            <span className="w-3 h-3 rounded-full bg-[#50C878] flex-shrink-0"></span>
                            Experiencias
                        </a>
                        <a href="#metodologia" className="flex items-center gap-2 text-base font-semibold text-slate-600 hover:text-[#002147] transition">
                            <span className="w-3 h-3 rounded-full bg-[#FF8C00] flex-shrink-0"></span>
                            Metodología
                        </a>
                        <a href="#propuesta" className="flex items-center gap-2 text-base font-semibold text-slate-600 hover:text-[#002147] transition">
                            <span className="w-3 h-3 rounded-full bg-[#002147] flex-shrink-0"></span>
                            Propuesta
                        </a>
                        <a href="#contacto" className="flex items-center gap-2 text-base font-semibold text-slate-600 hover:text-[#002147] transition">
                            <span className="w-3 h-3 rounded-full bg-slate-800 flex-shrink-0"></span>
                            Contacto
                        </a>
                    </nav>
                    <a href="https://forms.gle/boNWoNnWQ2exeQk98" target="_blank" rel="noopener noreferrer" className="bg-[#FF8C00] text-white px-6 py-3 rounded-xl font-bold text-base hover:opacity-90 transition">
                        Solicitar demo
                    </a>
                </div>
            </header>

            <main className="bg-white text-slate-900 pt-24">

                {/* HERO SECTION */}
                <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-100 to-white px-6 py-0">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Logo animado — izquierda */}
                            <div className="flex-shrink-0 lg:w-2/5 flex justify-center lg:justify-start">
                                <div className="relative flex items-center justify-center w-[34rem] h-[34rem] md:w-[38rem] md:h-[38rem]">

                                    {/* Glow de fondo — aparece después del logo */}
                                    <div
                                        className="absolute w-48 h-48 bg-[#50C878]/20 rounded-full blur-3xl animate-orbital-appear animate-pulse-soft"
                                        style={{ animationDelay: '1.3s', animationDuration: '0.8s, 3s' }}
                                    />

                                    {/* Anillo exterior — aparece después y empieza a girar */}
                                    <div
                                        className="absolute w-[32rem] h-[32rem] md:w-[36rem] md:h-[36rem] rounded-full border border-dashed border-[#50C878]/40 animate-orbital-appear"
                                        style={{ animationDelay: '1.5s' }}
                                    >
                                        {/* Punto orbital — gira independiente para no deformarse */}
                                        <div
                                            className="absolute inset-0 rounded-full animate-orbit-slow"
                                            style={{ animationDelay: '1.5s' }}
                                        >
                                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#50C878] rounded-full shadow-[0_0_10px_rgba(80,200,120,0.9)]" />
                                        </div>
                                    </div>

                                    {/* Anillo interior — aparece un poco después */}
                                    <div
                                        className="absolute w-[26rem] h-[26rem] md:w-[30rem] md:h-[30rem] rounded-full border border-[#FF8C00]/35 animate-orbital-appear"
                                        style={{ animationDelay: '1.8s' }}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-full animate-orbit-medium"
                                            style={{ animationDelay: '1.8s' }}
                                        >
                                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#FF8C00] rounded-full shadow-[0_0_8px_rgba(255,140,0,0.9)]" />
                                        </div>
                                    </div>

                                    {/* Logo: reveal con shimmer + float encadenado */}
                                    <div className="animate-logo-enter z-10 relative overflow-hidden rounded-3xl">
                                        <img
                                            src="/logo.png"
                                            alt="Visiona EduLab"
                                            className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] object-contain rounded-3xl shadow-[0_20px_50px_rgba(0,33,71,0.25)]"
                                        />
                                        {/* Destello de luz que barre las letras */}
                                        <div className="animate-shimmer absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
                                    </div>

                                </div>
                            </div>

                            {/* Texto — derecha */}
                            <div className="lg:w-3/5 text-center lg:text-left">
                                <span className="inline-block bg-[#002147]/10 text-[#002147] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                                    Laboratorio de Innovación Tecnológica Educativa
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6l font-extrabold text-[#002147] leading-tight mb-6">
                                    Expandiendo los límites de la <span className="text-[#50C878]">educación</span>{' '}
                                    en la frontera de la <span className="text-[#FF8C00]">innovación tecnológica</span>.
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                                    Integramos Realidad Virtual (Meta Quest 3) para transformar el aprendizaje pasivo en una experiencia inmersiva, activa y memorable.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <a href="https://forms.gle/boNWoNnWQ2exeQk98" target="_blank" rel="noopener noreferrer" className="bg-[#FF8C00] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">
                                        Solicitar una demo gratuita
                                    </a>
                                    <a href="#experiencias" className="border-2 border-[#002147] text-[#002147] px-8 py-4 rounded-xl font-bold hover:bg-[#002147] hover:text-white transition">
                                        Conocer nuestras experiencias
                                    </a>
                                    <a href="/brochure.pdf" download className="text-[#002147] underline underline-offset-4 px-8 py-4 font-bold hover:text-[#FF8C00] transition">
                                        Descargá nuestra propuesta
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* QUOTE */}
                <section className="py-16 px-6 bg-[#002147] text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-slate-200">
                            "No se trata solo de tecnología, se trata de transformar la forma en que aprendemos hoy, para construir el futuro"
                        </p>
                    </div>
                </section>

                {/* PILARES DE APRENDIZAJE */}
                <section className="py-24 px-6 bg-slate-50">
                    <div id="experiencias" className="scroll-mt-20 max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147] mb-4">Nuestras Experiencias</h2>
                            <p className="text-slate-500 text-lg">4 pilares de aprendizaje inmersivo</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Astronomía */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80" alt="Sistema Solar" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-[#002147]/30 to-transparent" />
                                    <span className="absolute top-4 left-4 w-9 h-9 bg-[#50C878] text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg">1</span>
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#50C878]">Ciencias Naturales</span>
                                    <h3 className="text-lg font-extrabold text-[#002147]">Astronomía</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1">Comprensión de escalas y mecánica celestial explorando el Sistema Solar.</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Primaria</span>
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Secundaria</span>
                                    </div>
                                </div>
                            </div>

                            {/* Biología */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80" alt="Cuerpo Humano" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-[#002147]/30 to-transparent" />
                                    <span className="absolute top-4 left-4 w-9 h-9 bg-[#50C878] text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg">2</span>
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#50C878]">Ciencias Naturales</span>
                                    <h3 className="text-lg font-extrabold text-[#002147]">Biología</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1">Navegación anatómica interna y sistemas vitales del Cuerpo Humano.</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Primaria</span>
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Secundaria</span>
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Terciaria</span>
                                    </div>
                                </div>
                            </div>

                            {/* Geografía e Historia */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80" alt="7 Maravillas del Mundo" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-[#002147]/30 to-transparent" />
                                    <span className="absolute top-4 left-4 w-9 h-9 bg-[#FF8C00] text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg">3</span>
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C00]">Ciencias Sociales</span>
                                    <h3 className="text-lg font-extrabold text-[#002147]">Geografía e Historia</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1">Expediciones virtuales a las 7 Maravillas del Mundo e hitos globales.</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Primaria</span>
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Secundaria</span>
                                    </div>
                                </div>
                            </div>

                            {/* Arte y Estética */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80" alt="Obras Maestras" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-[#002147]/30 to-transparent" />
                                    <span className="absolute top-4 left-4 w-9 h-9 bg-[#002147] text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg border border-white/30">4</span>
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#002147]">Arte y Cultura</span>
                                    <h3 className="text-lg font-extrabold text-[#002147]">Arte y Estética</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1">Apreciación técnica y sensible de Obras Maestras en entornos inmersivos.</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Secundaria</span>
                                        <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">Terciaria</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PROPUESTA DE VALOR */}
                <section className="py-24 px-6 bg-white">
                    <div id="propuesta" className="scroll-mt-20 max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147] mb-4">¿Por qué Visiona EduLab?</h2>
                            <p className="text-slate-500 text-lg">Un modelo pedagógico respaldado por la neuroeducación</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <div className="text-4xl mb-4">🔬</div>
                                <h3 className="text-xl font-extrabold text-[#002147] mb-3">Metodología LAB</h3>
                                <p className="text-slate-500 leading-relaxed">Ciclo de 3 etapas basado en neuroeducación: pre-inmersión, exploración activa e integración de conocimientos.</p>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="text-xl font-extrabold text-[#002147] mb-3">Resultados Tangibles</h3>
                                <p className="text-slate-500 leading-relaxed">+75% de retención de contenido basado en el Método de Loci y la memoria espacial 3D.</p>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <div className="text-4xl mb-4">📈</div>
                                <h3 className="text-xl font-extrabold text-[#002147] mb-3">Escalabilidad</h3>
                                <p className="text-slate-500 leading-relaxed">Kit modular itinerante. Sin infraestructura previa: llevamos todo el equipamiento a tu institución.</p>
                            </div>
                        </div>
                        <div className="bg-[#002147] rounded-3xl p-8 md:p-12">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-3xl md:text-4xl font-extrabold text-[#50C878]">+75%</p>
                                    <p className="text-slate-300 text-sm mt-2">Retención de contenido</p>
                                </div>
                                <div className="border-x border-white/20">
                                    <p className="text-3xl md:text-4xl font-extrabold text-[#FF8C00]">4x</p>
                                    <p className="text-slate-300 text-sm mt-2">Mayor engagement</p>
                                </div>
                                <div>
                                    <p className="text-3xl md:text-4xl font-extrabold text-white">100%</p>
                                    <p className="text-slate-300 text-sm mt-2">Aprendizaje significativo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* METODOLOGÍA DE TRABAJO */}
                <section className="py-24 px-6 bg-slate-50">
                    <div id="metodologia" className="scroll-mt-20 max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147] mb-4">Metodología de Trabajo</h2>
                            <p className="text-slate-500 text-lg">45-60 minutos por sesión</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-[#002147] text-white rounded-full flex items-center justify-center font-extrabold mb-4">1</div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Pre-inmersión</p>
                                <h3 className="text-xl font-extrabold text-[#002147] mb-3">Contextualización</h3>
                                <p className="text-slate-500 leading-relaxed">Introducimos los conceptos clave del tema y activamos conocimientos previos para preparar el terreno cognitivo.</p>
                            </div>
                            <div className="bg-white rounded-3xl p-8 border-2 border-[#FF8C00] shadow-sm">
                                <div className="w-10 h-10 bg-[#FF8C00] text-white rounded-full flex items-center justify-center font-extrabold mb-4">2</div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">El Viaje</p>
                                <h3 className="text-xl font-extrabold text-[#002147] mb-3">Exploración Inmersiva</h3>
                                <img src="https://i.blogs.es/f78063/meta-quest-3/450_1000.jpeg" alt="Meta Quest 3" className="rounded-2xl w-full mb-4 object-cover h-32" />
                                <div className="flex items-center gap-3 bg-[#50C878]/10 rounded-xl p-3">
                                    <span className="text-2xl">🧠</span>
                                    <p className="text-sm font-bold text-[#002147]">+75% retención con Meta Quest 3</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-[#50C878] text-white rounded-full flex items-center justify-center font-extrabold mb-4">3</div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Post-inmersión</p>
                                <h3 className="text-xl font-extrabold text-[#002147] mb-3">Integración de Conocimientos</h3>
                                <p className="text-slate-500 leading-relaxed">Consolidamos el aprendizaje con actividades de reflexión, debate y síntesis que anclan los conceptos explorados.</p>
                            </div>
                        </div>
                        <div className="bg-[#002147] rounded-3xl p-10 text-white">
                            <h3 className="text-2xl font-extrabold mb-8 text-center">Gestionamos todo por vos</h3>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">🔄</span>
                                    <div>
                                        <p className="font-bold mb-1">Rotación eficiente</p>
                                        <p className="text-slate-300 text-sm leading-relaxed">Organizamos los turnos para que todos los alumnos participen sin perder tiempo de clase.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">🎧</span>
                                    <div>
                                        <p className="font-bold mb-1">Acompañamiento técnico</p>
                                        <p className="text-slate-300 text-sm leading-relaxed">Un especialista nuestro coordina toda la sesión. El docente solo facilita.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">🧩</span>
                                    <div>
                                        <p className="font-bold mb-1">Adaptabilidad</p>
                                        <p className="text-slate-300 text-sm leading-relaxed">Adaptamos el contenido al nivel educativo y al currículo de tu institución.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-slate-400 text-sm italic border-t border-white/10 pt-6">
                                No necesitás infraestructura previa. Llevamos todo el equipamiento y lo configuramos en tu institución.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ADN SECTION */}
                <section className="py-24 px-6 my-8">
                    <div className="bg-[#002147] text-white mx-0 md:mx-4 rounded-[3rem] shadow-2xl py-16 px-6 md:px-12">
                        <div id="adn" className="scroll-mt-20 max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Nuestro ADN</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div>
                                    <h3 className="text-[#50C878] font-black uppercase tracking-tighter text-2xl mb-3">Misión</h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Democratizar el acceso a la educación inmersiva, transformando el aula en un ecosistema de exploración científica mediante la neuroeducación.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#FF8C00] font-black uppercase tracking-tighter text-2xl mb-3">Visión</h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Liderar la transición hacia el aula del siglo XXII, inspirando a la próxima generación de mentes curiosas a través de la innovación tecnológica.
                                    </p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-12 text-center">
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
                        </div>
                    </div>
                </section>

                {/* CONTACTO CTA */}
                <section className="py-24 px-6 bg-white text-center">
                    <div id="contacto" className="scroll-mt-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#002147] mb-6">
                            ¿Listos para llevar la educación a otro nivel?
                        </h2>
                        <p className="text-slate-500 text-lg mb-10">
                            Contactanos y te armamos una propuesta a medida para tu institución.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://forms.gle/boNWoNnWQ2exeQk98" target="_blank" rel="noopener noreferrer" className="bg-[#FF8C00] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 hover:scale-105 transition">
                                Solicitar información
                            </a>
                            <a href="/brochure.pdf" download className="border-2 border-[#002147] text-[#002147] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#002147] hover:text-white transition">
                                Descargá nuestra propuesta 2026
                            </a>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-[#002147] text-white py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-10 mb-10">
                            <div>
                                <img src="/logo.png" alt="Visiona EduLab" className="h-12 mb-4 rounded-xl opacity-80 w-auto object-contain" />
                                <p className="text-slate-400 text-sm leading-relaxed">Laboratorio de Innovación Tecnológica Educativa</p>
                            </div>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Navegación</p>
                                <ul className="space-y-2">
                                    <li><a href="#experiencias" className="text-slate-300 hover:text-white text-sm transition">Experiencias</a></li>
                                    <li><a href="#metodologia" className="text-slate-300 hover:text-white text-sm transition">Metodología</a></li>
                                    <li><a href="#propuesta" className="text-slate-300 hover:text-white text-sm transition">Propuesta</a></li>
                                    <li><a href="#contacto" className="text-slate-300 hover:text-white text-sm transition">Contacto</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Contacto</p>
                                <a href="mailto:miguel.ponce@visionaedulab.com.ar" className="text-slate-300 hover:text-white text-sm transition block mb-6">
                                    miguel.ponce@visionaedulab.com.ar
                                </a>
                                <div className="flex gap-4">
                                    <a href="#" className="opacity-50 cursor-not-allowed text-slate-300 text-sm border border-white/20 px-3 py-1.5 rounded-lg">LinkedIn</a>
                                    <a href="#" className="opacity-50 cursor-not-allowed text-slate-300 text-sm border border-white/20 px-3 py-1.5 rounded-lg">Instagram</a>
                                    <a href="#" className="opacity-50 cursor-not-allowed text-slate-300 text-sm border border-white/20 px-3 py-1.5 rounded-lg">YouTube</a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/10 pt-6 text-center">
                            <p className="text-slate-400 text-sm">Visiona EduLab 2026 · Buenos Aires, Argentina</p>
                        </div>
                    </div>
                </footer>

            </main>
        </>
    );
}
