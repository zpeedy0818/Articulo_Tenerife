import { Navigation } from "@/components/Navigation";
import { SmoothScroller } from "@/components/SmoothScroller";
import { Clock, Calendar, User, BookOpen, ArrowLeft, ArrowRight, Map } from "lucide-react";
import Link from "next/link";

export default function ArticuloInvestigativoPage() {
  return (
    <SmoothScroller>
      <Navigation />
      <main className="bg-[var(--color-paramo-dark)] min-h-screen text-[var(--color-paramo-bone)] pb-20">
        
        {/* Banner Area */}
        <div className="relative w-full h-[55vh] overflow-hidden mb-8 border-b border-[var(--color-paramo-bone)]/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)] via-[var(--color-paramo-dark)]/20 to-transparent" />
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 text-center space-y-4">
            <span className="font-sans text-[var(--color-paramo-fog)] text-xs uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-2">
              <BookOpen size={14} className="text-[var(--color-paramo-moss)]" /> Reportaje Especial / Investigación
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-paramo-green)] leading-tight font-bold text-shadow-none">
              Semillas de Agua en Tierra de Fuego
            </h1>
            <p className="font-sans text-sm md:text-base text-[var(--color-paramo-bone)]/80 italic max-w-2xl mx-auto">
              "Cómo la resistencia comunitaria y el turismo de naturaleza están sanando las cicatrices del conflicto armado en el corregimiento de Tenerife."
            </p>
          </div>
        </div>

        {/* Article Meta Details */}
        <div className="max-w-3xl mx-auto px-6 mb-12 flex flex-wrap justify-between gap-6 border-b border-[var(--color-paramo-bone)]/10 pb-8 font-sans text-xs text-[var(--color-paramo-fog)] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <User size={16} className="text-[var(--color-paramo-moss)]" />
            <span>Por Redacción Cuidemos el Páramo</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-[var(--color-paramo-moss)]" />
            <span>23 de Mayo, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[var(--color-paramo-moss)]" />
            <span>12 min de lectura</span>
          </div>
        </div>

        {/* Editorial Body */}
        <article className="max-w-3xl mx-auto px-6 font-sans text-base md:text-lg text-[var(--color-paramo-bone)]/90 leading-relaxed space-y-8">
          
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:text-[var(--color-paramo-moss)]">
            El corregimiento de Tenerife, incrustado en la cordillera central de Colombia a más de 2.800 metros de altura, respira hoy un aire diferente. La neblina, que durante décadas sirvió como manto de camuflaje para los actores del conflicto armado, hoy cobija el florecimiento de una iniciativa sin precedentes: el turismo para la desestigmatización y la restauración ecológica del páramo.
          </p>

          <p>
            Durante las décadas de los 90 y principios de los 2000, esta despensa hídrica fue escenario de dolor y confrontaciones. La lejanía geográfica y el difícil acceso convirtieron la zona en un enclave estratégico. Sin embargo, el verdadero tesoro de Tenerife no radica en su valor táctico militar, sino en su valor ambiental: es el hogar de millones de frailejones centenarios, los custodios silenciosos que purifican y regulan el agua para miles de personas en el Valle del Cauca.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            La transformación del estigma en orgullo
          </h2>

          <p>
            "El principal reto no fue reforestar la montaña, sino reforestar la confianza de la gente", explica uno de los líderes de la comunidad. El estigma de ser catalogados como una 'zona roja' apartó a los científicos, a los viajeros y al mismo desarrollo estatal del territorio. La comunidad comprendió que la mejor forma de romper este estigma era abriendo las puertas de su casa a través del turismo comunitario.
          </p>

          <div className="my-12 p-8 bg-[var(--color-paramo-green)]/5 border-l-4 border-[var(--color-paramo-moss)] rounded-r-xl space-y-4">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-paramo-green)] italic font-medium leading-relaxed">
              "Hoy el visitante no viene a ver la guerra que fuimos, viene a tocar el agua que somos y a sembrar el futuro que queremos."
            </p>
            <span className="block text-xs uppercase tracking-widest text-[var(--color-paramo-moss)]">— Alejandro Guerrero, líder social</span>
          </div>

          <p>
            El proyecto <strong>“Cuidemos el Páramo Tenerife”</strong> nació como una respuesta autónoma de las familias campesinas. Diseñaron senderos de interpretación ambiental, formaron a jóvenes locales como guías de montaña e iniciaron programas de monitoreo de especies. El senderista hoy camina por rutas donde antes se caminaba con recelo, descubriendo la majestuosidad de lagunas sagradas y la magia del bosque altoandino.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            El Frailejón: El motor de la vida
          </h2>

          <p>
            En términos biológicos, el páramo de Tenerife es una joya única. Los frailejones crecen apenas un centímetro por año. Un individuo de dos metros ha resistido más de dos siglos de historia climática e historias humanas. Estos gigantes vegetales capturan la humedad de la niebla y la filtran lentamente hacia el suelo, alimentando las cuencas que abastecen de agua dulce a la región.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10">
              <img 
                src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop" 
                alt="Frailejones en la niebla" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop" 
                alt="Agua pura del páramo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p>
            La reforestación con especies nativas y la erradicación del pastoreo descontrolado han permitido recuperar más de 50 hectáreas de páramo degradado. Este esfuerzo se financia directamente con los ingresos generados por los visitantes, creando una economía circular donde el turismo financia la vida y la vida atrae al turismo.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            Un pacto por la memoria y la paz
          </h2>

          <p>
            El viaje hacia la desestigmatización de Tenerife no borra el pasado, lo resignifica. La memoria histórica se integra en cada ruta turística, no desde el resentimiento, sino desde la pedagogía de la paz. Los antiguos senderos de la guerrilla hoy son caminos de educación para estudiantes, biólogos e historiadores.
          </p>

          <p>
            Cuidar el páramo de Tenerife es, en última instancia, un acto de amor y de soberanía comunitaria. Es la demostración de que los territorios más golpeados por la violencia pueden liderar la transición ecológica de un país entero.
          </p>

        </article>

        {/* Footer Author Bio */}
        <div className="max-w-3xl mx-auto px-6 mt-12 pt-8 border-t border-[var(--color-paramo-bone)]/10 flex items-center gap-6">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--color-paramo-green)]/15 bg-[var(--color-paramo-green)]/5 shrink-0 flex items-center justify-center font-serif text-lg text-[var(--color-paramo-green)] font-bold">
            TE
          </div>
          <div>
            <h4 className="font-serif text-lg text-[var(--color-paramo-green)] font-bold">Tenerife Editorial</h4>
            <p className="font-sans text-sm text-[var(--color-paramo-fog)] leading-relaxed mt-1">
              Esta sección de investigación recopila los hallazgos de campo sobre dinámicas de conservación ecológica, turismo de naturaleza y memoria campesina.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-[var(--color-paramo-bone)]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link 
            href="/cronica/3"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-white text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-white hover:border-transparent transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Atrás: Crónica 3</span>
          </Link>
          
          <Link 
            href="/mapa"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Map size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Explorar Mapa e Imágenes 3D</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

      </main>
    </SmoothScroller>
  );
}
