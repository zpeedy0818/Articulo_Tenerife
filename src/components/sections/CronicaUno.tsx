"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const galleryImages = [
  { id: 1, url: "/images/cronica-1/slider-1new.jpeg" },
  { id: 2, url: "/images/cronica-1/slider-2.jpg" },
  { id: 3, url: "/images/cronica-1/slider-3.jpg" },
  { id: 4, url: "/images/cronica-1/slider-4.jpeg" },
];

export function CronicaUno() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div id="cronica-1" ref={containerRef} className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-foreground)] selection:bg-[var(--color-paramo-green)] selection:text-white">
      
      {/* Hero Portada */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[var(--color-paramo-dark)]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cronica-1/bg.jpg')" }}
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
            <span className="text-[var(--color-paramo-yellow)] font-sans uppercase tracking-[0.3em] text-sm md:text-base font-bold drop-shadow-md">Crónica 1</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white drop-shadow-2xl leading-tight max-w-5xl mx-auto"
          >
            La tierra que sostiene la historia
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 inline-block border-t border-[var(--color-paramo-yellow)]/30 pt-6"
          >
            <p className="text-lg md:text-xl font-sans uppercase tracking-widest text-[var(--color-paramo-dark)] drop-shadow-md">
              Por: Valentina Tascón Caicedo
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </motion.div>
      </section>

      {/* Cuerpo del texto */}
      <section className="w-full relative bg-[var(--color-paramo-dark)] py-24 md:py-32">
        
        {/* Intro con Drop Cap */}
        <div className="max-w-4xl mx-auto px-6 w-full font-sans mb-12">
          <p className="text-2xl md:text-3xl font-serif text-[var(--color-paramo-bone)] leading-relaxed">
            <span className="float-left text-7xl md:text-8xl font-serif text-[var(--color-paramo-green)] leading-none pr-4 pt-2 mt-1 drop-shadow-sm">L</span>
            as manos ásperas, teñidas de tierra y con las uñas aún marcadas por la cosecha, descansan sobre sus piernas. Observa los bultos de cebolla apilados frente a él mientras la galería central de Palmira parece tener un pulso propio.
          </p>
        </div>

        {/* Text Column 1 */}
        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Desde temprano, los pasillos se llenan de cargadores que empujan carretillas, comerciantes que inspeccionan la mercancía y compradores que discuten el precio de cada bulto. El rechinar de las ruedas se mezcla con voces que van y vienen de un extremo a otro, mientras el olor a tierra húmeda, todavía aferrado a las cosechas, se cuela entre los puestos.</p>
          <p className="mb-6 break-inside-avoid">El hombre guarda silencio unos segundos. No aparta la mirada de la carga y, como si todavía estuviera en el cultivo, rompe el murmullo del mercado:</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—La gente piensa que el trabajo termina cuando uno arranca la cebolla, pero ahí es cuando empieza.</p>
          <p className="mb-6 break-inside-avoid">Se llama Álvaro Quintero Rojas. Tiene cincuenta y siete años y lleva más de cuatro décadas cultivando cebolla en Tenerife, un corregimiento donde las carreteras se convierten en trochas de tierra y piedra. Cuando una moto o un camión cargado atraviesa el camino, el polvo se levanta y tarda en volver al suelo. A los lados, algunas casas se alternan entre cercas y distancias cortas, interrumpiendo los cultivos que se extienden hasta donde alcanza la vista.</p>
          <p className="mb-6 break-inside-avoid">En esas tierras, la jornada comienza mucho antes de que salga el sol y no termina cuando la cebolla abandona el surco. Ahora, mientras Álvaro recuerda ese paisaje, la galería sigue latiendo a su alrededor: las carretillas avanzan, los comerciantes revisan mercancía y los compradores negocian a pocos metros.</p>
          <p className="mb-6 break-inside-avoid">Para cualquiera que pase, esos bultos son solo cebollas. Para él, son meses de trabajo, madrugadas, deudas saldadas; son el sustento de sus hijos, la historia de su familia y parte de Tenerife.</p>
          <p className="mb-6 break-inside-avoid">Cuando era niño, acompañaba a su padre al cultivo antes del amanecer. Recuerda caminar entre la neblina, el barro pegado a las botas, las manos de su padre arrancando maleza y una frase que se repetía como una ley:</p>
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
            —La tierra nunca le queda debiendo a quien la trabaja.
          </motion.blockquote>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Su padre llegó joven a Tenerife. Empezó trabajando tierras ajenas hasta que, poco a poco, logró tener su propio cultivo. No era hombre de muchas palabras, pero sabía leer la tierra: cuándo una planta necesitaba agua, cuándo una cosecha iba bien, cuándo había que esperar.</p>
          <p className="mb-6 break-inside-avoid">Álvaro creció observando. Primero cargó herramientas, luego ayudó en el deshierbe, después cosechó, y sin darse cuenta había pasado media vida en lo mismo. Nunca pensó en irse.</p>
          <p className="mb-6 break-inside-avoid">Mientras otros soñaban con la ciudad, él imaginaba su vida entre montañas verdes, el aire frío de las madrugadas y la neblina que cubre los cultivos al amanecer.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Yo siempre me vi aquí —dice mientras muestra una foto de su casa en el celular—. Y aquí sigo.</p>
          <p className="mb-6 break-inside-avoid">Conoció a Marina en el mismo territorio cuando tenía poco más de veinte años. Se encontraban en el caserío, en la tienda, en reuniones del pueblo o en las jornadas del campo. Con el tiempo se casaron y tuvieron tres hijos, hoy de 12, 15 y 19 años. Juntos construyeron una vida que dependía casi por completo de las cosechas.</p>
          <p className="mb-6 break-inside-avoid">La casa donde viven no apareció de un día para otro. Creció lentamente, como el mismo cultivo que han trabajado toda la vida. Primero se levantaron las paredes; luego, con una buena cosecha, llegó el techo; después las ventanas; y más tarde, el piso. Cada parte de la casa guarda el recuerdo de una temporada que salió bien.</p>
          <p className="mb-6 break-inside-avoid">Marina lo resume siempre de la misma forma:</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Gracias a la cebolla y al trabajo, bendito Dios.</p>
          <p className="mb-6 break-inside-avoid">Porque detrás de cada venta hay meses de esfuerzo. La cebolla ha pagado uniformes, medicamentos, mercados, recibos y mejoras de la casa. Hablar de agricultura, para Álvaro, es hablar de sostener una familia durante generaciones.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Pero el dinero no llega de inmediato. Una cosecha tarda entre cuatro y cinco meses en estar lista. Durante ese tiempo hay que preparar la tierra, comprar semilla, fertilizar, controlar malezas y estar pendiente del clima casi todos los días.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Esto no es sembrar y esperar —dice—. Aquí toca invertir y estar encima del cultivo.</p>
          <p className="mb-6 break-inside-avoid">Una hectárea puede producir entre 20 y 30 toneladas de cebolla en una buena temporada. Pero antes de vender ya se han pagado jornales, insumos, transporte y otros costos acumulados durante meses. Aun así, cuando el precio acompaña, una cosecha sostiene varios meses de gastos familiares.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Hay cosechas que alcanzan para ponerse al día; otras apenas para recuperar lo invertido —afirma.</p>
          <p className="mb-6 break-inside-avoid">En Tenerife, muchas historias se parecen a la suya. La cebolla mueve buena parte de la economía local, genera empleo, sostiene pequeños negocios y permite que muchas familias permanezcan en el territorio.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Aquí casi todo gira alrededor de ella —dice Álvaro.</p>
        </div>

        {/* Separator Decorativo */}
        <div className="py-12 flex justify-center opacity-50">
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-paramo-yellow)]"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-paramo-moss)]"></span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-paramo-green)]"></span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Y no exagera. Sin embargo, hubo años en los que el problema no era sembrar, sino vender.</p>
          <p className="mb-6 break-inside-avoid">Recuerda especialmente una cosecha en 2015. Había sido un buen año: lluvias oportunas, plantas sanas y producción abundante. Durante días trabajaron desde el amanecer hasta la tarde. Los bultos se acumulaban bajo un techo de zinc mal puesto: cinco, diez, veinte, treinta. Cada uno representaba semanas de trabajo.</p>
          <p className="mb-6 break-inside-avoid">Todo estaba listo para salir hacia Palmira, pero el camión no llegó.</p>
          <p className="mb-6 break-inside-avoid">Esa noche caminó alrededor de la cosecha una y otra vez. Miraba el reloj, hacía cuentas, esperaba. Pero las horas pasaban y la carga seguía inmóvil.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Eso era lo que más desesperaba —recuerda—. Uno ya había hecho lo más duro.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Aquella situación no era aislada. Durante años, Tenerife vivió las dificultades propias de territorios rurales atravesados por el conflicto armado. La vida no siempre se detenía, pero sí se volvía incierta. En algunos momentos hubo desplazamientos forzados y en otros restricciones indirectas: transportadores que evitaban la zona, compradores que no subían y rutas comerciales interrumpidas. Así, vender la producción se convertía en un proceso incierto.</p>
          <p className="mb-6 break-inside-avoid">La economía, sin embargo, resistía.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Nosotros sabíamos sembrar —dice Álvaro—. El problema era no saber si la cebolla podía salir.</p>
          <p className="mb-6 break-inside-avoid">La frase resume una realidad que marcó a muchas familias: de poco sirve producir si no se puede vender.</p>
          <p className="mb-6 break-inside-avoid">En 2016 se firmó el Acuerdo de Paz. Álvaro no lo recuerda en términos políticos, sino cotidianos: trabajo, movilidad, confianza. No fue un cambio inmediato, pero poco a poco regresaron los compradores, se reactivaron los viajes y el territorio volvió a ser mirado con otros ojos.</p>
          <p className="mb-6 break-inside-avoid">La preocupación dejó de ser si la cosecha saldría. Volvió a ser cómo producir mejor.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Ahora uno pelea con el clima y con los precios —dice sonriendo.</p>
          <p className="mb-6 break-inside-avoid">Y aunque suena a queja, en realidad marca una diferencia profunda: los problemas volvieron a ser los del campo, no los de la incertidumbre del conflicto.</p>
          <p className="mb-6 break-inside-avoid">La galería central de Palmira sigue llena de movimiento. Un comerciante negocia, otro revisa la calidad de la carga recién llegada. Álvaro observa en silencio, con la tranquilidad de quien ha repetido esta escena durante décadas.</p>
          <p className="mb-6 break-inside-avoid">Cuando habla de la cebolla lo hace con respeto. Sabe que gracias a ella construyó su casa, sostuvo a su familia y educó a sus hijos. Sabe también que detrás de cada bulto hay una historia que casi nunca se ve.</p>
          <p className="mb-6 break-inside-avoid">La de los campesinos que madrugan. La de las montañas que sostienen los cultivos. La de los trabajadores que viven de la cosecha. La de un territorio que aprendió a sostenerse sobre la tierra.</p>
          <p className="mb-6 break-inside-avoid">Antes de despedirse, vuelve a tomar el celular. Busca una foto, la amplía frente a sus ojos. En la pantalla aparecen los cultivos extendidos sobre las montañas verdes de Tenerife. La observa en silencio unos segundos.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Todo sale de ahí —dice.</p>
          <p className="mb-6 break-inside-avoid">Y esta vez no habla solo de cebolla. Habla de su padre, de Marina, de sus hijos, de los trabajadores, de las cosechas y de un territorio entero.</p>
          <p className="mb-6 break-inside-avoid">Entonces, resulta difícil no pensar que, en Tenerife, la historia de una cebolla también es la historia del trabajo, la permanencia y la vida que insiste en quedarse.</p>
          <p className="mb-6 break-inside-avoid">Porque durante décadas, aquí se ha seguido haciendo lo mismo: sembrar, cosechar, bajar la cebolla a Palmira y volver a empezar.</p>
        </div>
      </section>

      {/* Segundo Bloque: Galería Interactiva */}
      <section className="h-[80vh] w-full snap-start relative bg-[var(--color-paramo-dark)] overflow-hidden group border-t border-[var(--color-paramo-moss)]/20">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {galleryImages.map((img) => (
            <div key={img.id} className="min-w-full h-full relative overflow-hidden">
              <img 
                src={img.url} 
                alt={`Imagen de galería ${img.id}`} 
                className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 text-[10px] text-white/50 font-sans tracking-wide select-none bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center px-6">
          <button 
            onClick={prevSlide}
            className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-6">
          <button 
            onClick={nextSlide}
            className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {galleryImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={clsx(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                i === currentIndex ? "bg-[var(--color-paramo-yellow)] w-8" : "bg-white/50 hover:bg-white"
              )}
            />
          ))}
        </div>
      </section>

      {/* Botón Inferior */}
      <section className="py-16 w-full flex justify-center bg-[var(--color-paramo-dark)]">
        <Link 
          href="/cronica/2"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
        >
          <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: Crónica 2</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
      </section>

    </div>
  );
}
