"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function CronicaDos() {
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div id="cronica-2" className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)] overflow-hidden selection:bg-[var(--color-paramo-green)] selection:text-white">
      
      {/* Hero Portada */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[var(--color-paramo-dark)]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cronica-2/bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-4 w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[var(--color-paramo-yellow)] font-sans uppercase tracking-[0.3em] text-sm md:text-base font-bold drop-shadow-md">Crónica 2</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white drop-shadow-2xl leading-tight max-w-5xl mx-auto"
          >
            Memorias de un gigante de niebla
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 inline-block border-t border-[var(--color-paramo-yellow)]/30 pt-6"
          >
            <p className="text-lg md:text-xl font-sans uppercase tracking-widest text-[var(--color-paramo-dark)] drop-shadow-md">
              Por: Ana María mina
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </motion.div>

        {/* Citation */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-4 right-4 z-30 text-[10px] text-white/30 font-sans tracking-wide select-none"
        >
          Foto: De Ruta Por Colombia. (2021, 16 de abril). Laguna Negra, – Tenerife Valle del Cauca, Colombia [Fotografía]. Facebook.
        </motion.div>
      </section>

      {/* Cuerpo de la Crónica */}
      <section className="w-full relative bg-[var(--color-paramo-dark)] py-24 md:py-32">
        
        {/* Intro con Drop Cap */}
        <div className="max-w-4xl mx-auto px-6 w-full font-sans mb-12">
          <p className="text-2xl md:text-3xl font-serif text-[var(--color-paramo-bone)] leading-relaxed">
            <span className="float-left text-7xl md:text-8xl font-serif text-[var(--color-paramo-green)] leading-none pr-4 pt-2 mt-1 drop-shadow-sm">T</span>
            engo miles de años de existencia, pero hubo un siglo en que sentí envejecer de golpe, un pestañeo en mi eternidad que casi me cuesta la vida. Los humanos me conocen como el Páramo de las Hermosas. Soy un cuerpo inmenso hecho de roca, agua y viento, extendido a lo largo de 124.611 hectáreas en el corazón de la cordillera Central colombiana, tocando con mis dedos verdes y húmedos los departamentos del Valle del Cauca y el Tolima. Durante eras inmemorables, mi única tarea diaria fue respirar: absorber la niebla espesa con mis millones de frailejones, acunar las lagunas glaciares en mis lomos y parir el agua pura que desciende para alimentar a pueblos enteros. Sin embargo, mi geografía, esa bendición de conectar el Pacífico con el centro del país a través de corredores invisibles a más de 3.500 metros sobre el nivel del mar, se convirtió también en mi mayor condena.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">A finales del siglo XX, el silencio de mi soledad fue quebrado por un frío que no venía de las nubes, sino del plomo que se desprendía de unas manos manchadas. Mis senderos de musgo se transformaron de repente en venas por donde corriá la guerra. Me convertí, en contra de mi voluntad, en el hogar forzado de los bloques de las FARC, específicamente el Comando Conjunto Central liderado por alias &apos;Alfonso Cano&apos;. Mis bosques de alta montaña, evolucionados para proteger al oso de anteojos y a la danta, tuvieron que aprender a camuflar trincheras, cambuches y campamentos. Yo, un gigante diseñado exclusivamente para dar vida, experimenté el dolor de tener que aprender a ocultar la muerte en mis entrañas.</p>
        </div>

        {/* Pull Quote Giant */}
        <div className="max-w-5xl mx-auto px-6 w-full my-20 relative flex justify-center items-center">
          <div className="absolute text-[15rem] text-[var(--color-paramo-moss)]/10 font-serif leading-none select-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">"</div>
          <motion.blockquote 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-[var(--color-paramo-green)] leading-snug py-8 text-center max-w-4xl"
          >
            Yo, un gigante diseñado exclusivamente para dar vida, experimenté el dolor de tener que aprender a ocultar la muerte en mis entrañas.
          </motion.blockquote>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full mt-24 mb-12 text-center">
          <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-paramo-green)]">Las Cicatrices en mi piel</h3>
          <div className="w-16 h-1 bg-[var(--color-paramo-yellow)] mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Mis frailejones, que considero mis ancianos sabios y que crecen apenas un centímetro por año, vieron pasar filas interminables de hombres y mujeres jóvenes con fusiles al hombro. Vi cómo el verde original de mis laderas se tiñó con el camuflaje militar. Los estallidos de los morteros fracturaron mis lagunas; el eco de los combates asustó a mis aves y obligó al silencio forzado a mis pumas. Me dolió cada trinchera cavada en mi suelo, porque mi piel de turbera tarda siglos en formarse y apenas unos segundos en ser destruida por el impacto de una bomba o las pisadas constantes de batallones enteros.</p>
          <p className="mb-6 break-inside-avoid">Los humanos que habitaban mis faldas, esos campesinos que me respetaban como a un dios proveedor, también sufrieron mi secuestro. El miedo se instaló de forma permanente en las veredas de Palmira, Pradera, El Cerrito, Tuluá, Buga, Chaparral y Rioblanco. Nadie podía subir a mis cumbres sin el permiso de los señores de la guerra. Mis lagunas sagradas, que antes presenciaban ritos de contemplación, se volvieron cementerios improvisados y rutas de escape masivo bajo la niebla protectora que yo mismo emanaba, sintiéndome un cómplice involuntario de su huida. Don Evelio Ospina, uno de los tantos campesinos que me ha caminado y guiado en la zona de influencia de Pradera, describió mi suplicio diciendo que yo era un testigo que callaba por el ruido de las balas, que la naturaleza estaba secuestrada y que, cuando bombardeaban, sentía que mi tierra misma temblaba y lloraba agua sucia. Tenía razón: yo lloraba a través de mis ríos Tuluá, Amaime, Bugalagrande, Saldaña y Coello.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full mt-24 mb-12 text-center">
          <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-paramo-green)]">El Dolor en Tenerife</h3>
          <div className="w-16 h-1 bg-[var(--color-paramo-yellow)] mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Dentro de mi vasto cuerpo, hay un rincón que guarda una de mis llagas más profundas: el sector de Tenerife. Allí, el conflicto armado se ensañó con especial crueldad. Al ser un punto neurálgico para el control de los corredores de movilidad, contemplé cómo el tejido social y ecológico de esta zona se desmoronaba bajo el yugo de las armas.</p>
          <p className="mb-6 break-inside-avoid">Mis montañas en Tenerife temblaron de terror con cada bombardeo y operación. En esos años de oscuridad, me sentí profundamente impotente; veía a mi comunidad ser desplazada, mis suelos de cultivo arrasados y mis frailejones quemados por el fuego cruzado. Tenerife era un epicentro de resistencia campesina, pero también de una incertidumbre asfixiante, donde el viento solo transportaba el olor a pólvora y los gritos de una población atrapada en el techo del mundo.</p>
          <p className="mb-6 break-inside-avoid">Durante esa época, albergar más de 300 lagunas de origen glaciar en mi vientre dejó de ser un motivo de orgullo para convertirse en una fuente de angustia. Ese tesoro hídrico quedó confinado, rodeado de alambres y sembrado de minas antipersonal durante más de tres décadas. Fui catalogado por las Fuerzas Militares como &quot;zona roja&quot; debido a la inaccesibilidad a mis cumbres, lo que desató operaciones como la &apos;Operación Fuerte&apos; en 2004 y la &apos;Operación Odiseo&apos; en 2011. Esta última retumbó con violencia en mis entrañas, culminando con la caída de &apos;Alfonso Cano&apos;. Los helicópteros artillados rasgaron los cielos y el fuego de las explosiones quemó hectáreas de mí vegetación nativa. Fue un dolor agudo, una herida abierta en mis zonas más puras.</p>
        </div>

        {/* Imagen Original Intercalada full-bleed */}
        <div className="max-w-5xl mx-auto px-6 w-full my-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/images/cronica-2/story-1.jpg" 
              alt="Parque Nacional Natural Las Hermosas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)]/40 to-transparent" />
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-30 text-[10px] text-white/50 font-sans tracking-wide select-none bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
              Duma Studio (2026). [Video].
            </div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full mt-24 mb-12 text-center">
          <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-paramo-green)]">La Reconquista de mi Paz</h3>
          <div className="w-16 h-1 bg-[var(--color-paramo-yellow)] mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Tras la firma del Acuerdo de Paz en 2016, empecé un lento y necesario proceso de sanación. Los hombres armados poco a poco se marcharon hasta quedar solo unos cuantos que dejaron tras de sí el inmenso desafío de limpiar mis senderos de las trampas mortales que enterraron en mi suelo. Hoy, diez años después de aquel hito, puedo decir que mis heridas van sanando gracias a los mismos campesinos que regresaron a mis faldas. En zonas emblemáticas como Tenerife, el panorama ha dado un vuelco absoluto. Donde antes se respiraba miedo y resistencia armada, hoy se respira ecoturismo, reconciliación y resistencia ambiental organizada.</p>
          <p className="mb-6 break-inside-avoid">Me siento profundamente aliviado y renovado al ver que las comunidades de Tenerife y sus líderes locales defienden mi vida con la misma firmeza con la que sobrevivieron a la guerra. Ya no vienen a mí con tantos fusiles, sino acompañados de guardaparques y biólogos, decididos a sanar mi piel y a redescubrir los secretos de mis lagunas. Mis frailejones vuelven a crecer, ganando su centímetro anual sin el ruido de tanto plomo interrumpiendo su vejez. Sigo aquí, imponente, vistiendo mi abrigo de neblina matutina. He sobrevivido a la peor de las tormentas humanas. Soy el Páramo de las Hermosas: no un testigo mudo, sino un sobreviviente que hoy vuelve a respirar profundamente para devolverle la vida a quienes alguna vez me llenaron de muerte.</p>
        </div>

        {/* Cinematic Player Intercalado con Video Original */}
        <div className="max-w-5xl mx-auto px-6 w-full my-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-[var(--color-paramo-green)]/20 aspect-video bg-black"
          >
            {isPlaying ? (
              // Video original
              (() => {
                const videoUrl = "https://www.youtube.com/watch?v=VOMbnx9Tf-s";
                if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
                  let videoId = "";
                  if (videoUrl.includes("watch?v=")) {
                    videoId = videoUrl.split("watch?v=")[1].split("&")[0];
                  } else if (videoUrl.includes("youtu.be/")) {
                    videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
                  }
                  return (
                    <iframe 
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title="Laguna Negra"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  );
                }
                return (
                  <video 
                    src={videoUrl} 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                  />
                );
              })()
            ) : (
              <>
                <img 
                  src="/images/cronica-2/story-2.jpg" 
                  alt="Laguna Negra" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-2" size={32} />
                  </div>
                </button>
                <div className="absolute bottom-6 left-6 pointer-events-none">
                  <h3 className="font-serif text-2xl text-[var(--color-paramo-dark)]">Laguna Negra</h3>
                  <p className="font-sans text-sm text-[var(--color-paramo-dark)]/80 uppercase tracking-widest">Documental Breve</p>
                </div>
              </>
            )}
            {/* Crédito persistente para video y portada */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-30 text-[10px] text-white/50 font-sans tracking-wide select-none bg-black/40 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
              Duma Studio (2026). [Video].
            </div>
          </motion.div>
        </div>

      </section>

      {/* Botones de Navegación */}
      <section className="py-16 w-full border-t border-[var(--color-paramo-bone)]/10 bg-[var(--color-paramo-dark)]">
        <div className="flex flex-row justify-between items-center max-w-5xl mx-auto w-full px-6">
          <Link 
            href="/cronica/1"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-white text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-white hover:border-transparent transition-all duration-300"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold hidden md:inline">Atrás: Crónica 1</span>
            <span className="font-sans text-sm uppercase tracking-wider font-semibold md:hidden">Atrás</span>
          </Link>
          
          <Link 
            href="/cronica/3"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
          >
            <span className="font-sans text-sm uppercase tracking-wider font-semibold hidden md:inline">Siguiente: Crónica 3</span>
            <span className="font-sans text-sm uppercase tracking-wider font-semibold md:hidden">Siguiente</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
