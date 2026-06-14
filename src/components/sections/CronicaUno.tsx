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
            <span className="text-[var(--color-paramo-yellow)] font-sans uppercase tracking-[0.3em] text-sm md:text-base font-bold drop-shadow-md">La Tierra</span>
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
            as manos ásperas, teñidas de tierra y con las uñas todavía marcadas por la cosecha, descansan sobre sus piernas mientras observa los bultos de cebolla apilados frente a él. A su alrededor, la galería central de Palmira parece tener un pulso propio. Desde temprano, los pasillos se llenan de cargadores que empujan carretillas, comerciantes que inspeccionan la mercancía y compradores que discuten el precio de cada bulto. El rechinar de las ruedas se mezcla con las voces que van y vienen de un extremo a otro, mientras el olor a tierra húmeda, todavía aferrado a las cosechas, se cuela entre los puestos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">El hombre guarda silencio unos segundos. No aparta la vista de la carga y, como si todavía estuviera en el cultivo, rompe el murmullo del mercado:</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—La gente piensa que el trabajo termina cuando uno arranca la cebolla, pero ahí es cuando empieza.</p>
          <p className="mb-6 break-inside-avoid">Se llama Álvaro Quintero Rojas. Tiene cincuenta y siete años y lleva más de cuatro décadas cultivando cebolla en Tenerife, un lugar donde las carreteras desaparecen para dar paso a las trochas de tierra y piedra. Allí, cuando una moto o un camión cargado atraviesa el camino, una nube de polvo se levanta y tarda varios segundos en volver al suelo. Unas cuantas casas, algunas separadas por cercas y otras casi pared con pared, rompen la continuidad de los cultivos que se extienden a ambos lados del camino.</p>
          <p className="mb-6 break-inside-avoid">En esas tierras, la jornada comienza mucho antes de que salga el sol y no termina cuando la cebolla abandona el surco. Ahora, mientras Álvaro recuerda ese paisaje, la galería sigue latiendo a su alrededor: las carretillas avanzan, los comerciantes buscan mercancía y los compradores negocian precios a pocos metros de distancia.</p>
          <p className="mb-6 break-inside-avoid">Para cualquiera que pase por el lugar, esos bultos son simplemente cebollas, pero para Álvaro son meses de trabajo, de madrugadas, de deudas pagadas; son el soporte de sus hijos, la historia de su familia y, también, parte de Tenerife.</p>
          <p className="mb-6 break-inside-avoid">Cuando Álvaro era niño, acompañaba a su padre a los cultivos antes de que saliera el sol. Recuerda caminar entre la neblina mientras escuchaba el ruido de las botas hundiéndose en el barro, las manos ásperas de su papá arrancando la maleza, las montañas completamente verdes y una frase que escuchó tantas veces que terminó convirtiéndose en una especie de ley familiar:</p>
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
          <p className="mb-6 break-inside-avoid">Su padre había llegado a Tenerife siendo joven; comenzó trabajando en terrenos ajenos hasta que, poco a poco, logró tener su propio cultivo.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—No era un hombre de muchas palabras, pero sabía leer la tierra —dice don Álvaro.</p>
          <p className="mb-6 break-inside-avoid">Sabía cuando una planta necesitaba agua, cuándo una cosecha prometía buenos resultados y sabía que en Tenerife la cebolla era mucho más que un cultivo: era una forma de vivir.</p>
          <p className="mb-6 break-inside-avoid">Álvaro creció observando. Primero ayudó a cargar herramientas; después, se embarró un poco las manos limpiando los cultivos; más tarde, cosechando junto a los trabajadores; y, cuando quiso darse cuenta, ya había dedicado media vida a la misma labor. Nunca pensó en marcharse.</p>
          <p className="mb-6 break-inside-avoid">Mientras muchos jóvenes soñaban con la ciudad, él imaginaba su futuro entre las montañas verdes y el aire fresco de Tenerife, entre la calma del horizonte anaranjado en las mañanas y esa neblina de frío penetrante en las madrugadas.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Yo siempre me vi aquí —dice mientras me enseña una foto de su casita en el teléfono—. Y aquí sigo —completa la frase con una sonrisa de orgullo que resplandece.</p>
          <p className="mb-6 break-inside-avoid">Álvaro cuenta que tenía poco más de veinte años cuando conoció a Marina en el corregimiento de Tenerife. Para entonces ya llevaba varias temporadas trabajando en los cultivos de cebolla y había aprendido que el campo exige paciencia. Se encontraban en el pequeño caserío del corregimiento, donde casi todos se conocen: en la tienda, en las reuniones del pueblo o cuando las familias coincidían en las labores agrícolas. Con el tiempo se casaron,tuvieron tres hijos, hoy de 12, 15 y 19 años, y construyeron una vida que dependía, casi por completo, del comportamiento de las cosechas.</p>
          <p className="mb-6 break-inside-avoid">La casa donde viven hoy no apareció de un día para otro. Nació despacio, como nacen los cultivos que Álvaro ha cuidado durante toda su vida. Primero brotaron las paredes de ladrillo; años después, una cosecha buena alcanzó para poner el techo. Luego llegaron las ventanas y, cuando la tierra volvió a responderles, el piso terminó de cubrir el cemento desnudo. Cada rincón de la casa guarda el recuerdo de una cosecha que salió bien.</p>
          <p className="mb-6 break-inside-avoid">Cuando Marina escucha a su esposo decir que la casa fue construida gracias a la cebolla, suele responder lo mismo:</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Gracias a la cebolla y al trabajo, bendito Dios.</p>
          <p className="mb-6 break-inside-avoid">Porque detrás de cada venta había meses enteros de esfuerzo. La cebolla pagó uniformes escolares, medicamentos, recibos, mercados y arreglos de la casa. Por eso, cuando Álvaro habla de agricultura, en realidad está hablando de algo más profundo: sostener a una familia durante generaciones.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Pero el dinero no llega de inmediato. Álvaro explica que una cosecha de cebolla tarda entre cuatro y cinco meses en estar lista para recoger. Durante ese tiempo hay que preparar la tierra, comprar semilla, aplicar fertilizantes, controlar malezas y estar pendiente del clima casi todos los días.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Esto no es sembrar y esperar —dice—. Aquí toca invertir y estar encima del cultivo.</p>
          <p className="mb-6 break-inside-avoid">Mientras habla, parece recorrer mentalmente cada etapa del proceso. Sus manos se mueven como si todavía caminaran entre los surcos de Tenerife. Explica que antes de sembrar hay que remover la tierra, dejarla respirar y prepararla para recibir la semilla. Después vienen semanas enteras de vigilancia constante. Hay que arrancar la maleza que compite por los nutrientes, revisar que las plantas no enfermen y observar el cielo casi con la misma atención con la que se observa el cultivo.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—La cebolla habla. Uno aprende a entenderla.</p>
          <p className="mb-6 break-inside-avoid">Sonríe mientras lo dice, pero no parece una exageración. Después de más de cuarenta años trabajando la tierra, Álvaro aprendió a leer señales que otros pasarían por alto: una hoja más amarilla de lo normal, una humedad distinta en el suelo, una nube oscura acercándose desde las montañas. La cebolla le avisa cuándo necesita agua, cuándo necesita paciencia y cuándo algo no marcha bien.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Si uno se descuida, pierde la inversión, menciona él.</p>
          <p className="mb-6 break-inside-avoid">Durante los meses que tarda la cosecha en crecer, el dinero desaparece bajo la tierra convertido en semillas, fertilizantes, jornales y esfuerzo. Cada semilla enterrada es una apuesta. Una apuesta que depende del clima, de la salud del cultivo y de un mercado que cambia constantemente.</p>
          <p className="mb-6 break-inside-avoid">Según cuenta, una hectárea puede producir entre veinte y treinta toneladas de cebolla en una buena temporada. La cifra impresiona, pero él se apresura a explicar que no todo se convierte en ganancia. Mucho antes de vender el primer bulto ya se han pagado trabajadores, transporte, insumos agrícolas y otros gastos que se acumulan durante meses.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—La gente ve la cebolla cuando ya está lista, pero no ve todo lo que hubo detrás para que llegara ahí.</p>
          <p className="mb-6 break-inside-avoid">Cuando los precios acompañan, una cosecha puede representar el ingreso con el que una familia campesina sostiene varios meses de gastos, paga estudios, mejora la vivienda o reinvierte en la siguiente siembra. La casa que comparte con Marina es prueba de ello. Cada pared, cada ventana y cada mejora llegaron poco a poco, empujadas por cosechas que salieron bien.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Gracias a la cebolla levantamos la casa y sacamos adelante a los muchachos.</p>
          <p className="mb-6 break-inside-avoid">La frase le sale acompañada de una sonrisa de orgullo.</p>
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
          <p className="mb-6 break-inside-avoid">Pero el campo rara vez ofrece certezas. Hay temporadas en las que el esfuerzo de varios meses apenas alcanza para recuperar lo invertido.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Uno nunca sabe cuánto va a valer la cebolla cuando llegue el momento de vender.</p>
          <p className="mb-6 break-inside-avoid">Entonces guarda silencio unos segundos. Su mirada se pierde entre los bultos apilados en la galería, como si estuviera buscando algo en ellos. Cuando vuelve a hablar, ya no se refiere al clima ni a los precios.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Antes era más complicado.</p>
          <p className="mb-6 break-inside-avoid">Hubo años en los que la cebolla no era la única que crecía en las montañas de Tenerife. También crecían el miedo y la incertidumbre. En aquella época, los gastos del cultivo no terminaban en las semillas, los fertilizantes o el transporte. Existían otros costos que nadie anotaba en las cuentas y que tampoco tenían relación con la agricultura.</p>
          <p className="mb-6 break-inside-avoid">Álvaro recuerda las llamadas “vacunas”. No menciona cifras exactas. Tampoco profundiza demasiado. Algunos recuerdos parecen quedarse atrapados en el mismo silencio con el que observa los cultivos.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Eso tocaba pagarlo.</p>
          <p className="mb-6 break-inside-avoid">La frase cae pesada, como una piedra lanzada al fondo de un pozo.</p>
          <p className="mb-6 break-inside-avoid">Durante años, parte del dinero que nacía de la tierra terminaba lejos de la tierra. Era una carga silenciosa que viajaba junto a cada cosecha. Un costo invisible que no aparecía en ninguna libreta, pero que pesaba sobre los hombros de quienes trabajaban el campo.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—¿Y qué más hacía uno? Tocaba seguir trabajando.</p>
          <p className="mb-6 break-inside-avoid">Porque abandonar la tierra nunca fue una opción. Los cultivos seguían creciendo, los hijos seguían necesitando alimento y las cuentas seguían llegando cada mes. Así que los campesinos continuaron sembrando, incluso cuando el miedo también parecía echar raíces en las montañas.</p>
          <p className="mb-6 break-inside-avoid">Cada peso que salía para esos cobros era dinero que dejaba de invertirse en el cultivo, en la casa o en el futuro de la familia. Sin embargo, la tierra seguía respondiendo a quienes la trabajaban. Tal vez por eso Álvaro nunca se fue.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Uno no podía dejar perder el cultivo.</p>
          <p className="mb-6 break-inside-avoid">A las dificultades económicas se sumaban otros problemas. Había temporadas en las que transportar la cosecha se convertía en una incertidumbre. Los compradores dudaban en subir hasta ciertas zonas rurales, algunos transportadores suspendían recorridos y los productos podían quedarse esperando durante días.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Nosotros sabíamos sembrar. El problema era no saber si la cebolla podía salir.</p>
          <p className="mb-6 break-inside-avoid">En Tenerife, muchas historias se parecen a la suya: la cebolla mueve buena parte de la economía local, genera empleo para jornaleros, beneficia a los transportadores, mantiene en funcionamiento pequeños negocios que venden herramientas e insumos agrícolas y permite que muchas familias permanezcan en el territorio.</p>
          <p className="mb-6 break-inside-avoid">La cebolla no solamente crece en la tierra, también circula por la economía del corregimiento.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Aquí casi todo gira alrededor de ella —dice Álvaro.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Y basta escucharlo unos minutos para entender que no exagera. Sin embargo, hubo años en los que sembrar no era la principal preocupación; la principal preocupación era vender. Álvaro lo recuerda, sobre todo una cosecha en 2015. Había sido una buena temporada: las lluvias llegaron cuando debían, las plantas crecieron sanas y la producción fue abundante. Durante varios días, él, sus tres hijos y varios trabajadores cosecharon cebolla desde el amanecer hasta la tarde. Los bultos comenzaron a acumularse uno sobre otro bajo un techo de zinc mal acomodado: cinco, diez, veinte, treinta. Cada uno representaba semanas de trabajo. Todo estaba listo para salir hacia Palmira, pero el camión no apareció.</p>
          <p className="mb-6 break-inside-avoid">Esa noche, Álvaro caminó una y otra vez alrededor de los bultos, miraba el reloj, volvía a hacer cuentas, esperaba y nada. Las horas pasaron y la cosecha siguió allí, inmóvil, esperando transporte.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Eso era lo que más desesperaba —recuerda—. Uno ya había hecho el trabajo más duro.</p>
          <p className="mb-6 break-inside-avoid">Aquella situación no era un hecho aislado. Durante años, Tenerife cargó con las dificultades propias de muchos territorios rurales atravesados por la violencia del conflicto armado. No siempre significaba que la gente abandonara el lugar de inmediato, pero sí que la vida cotidiana se veía marcada por el miedo, las amenazas y la incertidumbre. En algunos momentos hubo desplazamientos forzados de personas que tuvieron que salir del territorio, y en otros, restricciones indirectas: personas que evitaban subir a la zona, transportadores que suspendían recorridos y comerciantes que preferían no arriesgarse. Así, comercializar los productos agrícolas se volvía un proceso incierto. La economía local, aún así, seguía resistiendo.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Nosotros sabíamos sembrar —dice Álvaro—. El problema era no saber si la cebolla podía salir.</p>
          <p className="mb-6 break-inside-avoid">La frase parece sencilla, pero resume una realidad que afectó a numerosas familias campesinas, porque de poco sirve una buena cosecha si no logra llegar al mercado.</p>
          <p className="mb-6 break-inside-avoid">En noviembre de 2016 se firmó el Acuerdo de Paz. Hoy, diez años después, Álvaro no habla de política cuando recuerda ese momento; habla de trabajo, de economía, de confianza. Dice que los cambios no ocurrieron de un día para otro, no aparecieron milagros, no desaparecieron todos los problemas. Pero, poco a poco, comenzaron a transformarse algunas dinámicas: los compradores regresaron, los viajes comerciales se hicieron más frecuentes y la gente volvió a mirar hacia territorios como Tenerife con otros ojos.</p>
          <p className="mb-6 break-inside-avoid">La preocupación dejó de ser si la cosecha lograría salir; la preocupación volvió a ser producir bien.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Ahora uno pelea con el clima y con los precios —dice sonriendo.</p>
          <p className="mb-6 break-inside-avoid">Y aunque la frase parece una queja, en realidad encierra una diferencia enorme, porque significa que los problemas volvieron a ser los propios del trabajo agrícola, no los de una economía condicionada por la incertidumbre.</p>
          <p className="mb-6 break-inside-avoid">La galería central de Palmira continúa llena de movimiento; un comerciante negocia el valor de varios bultos, otro revisa la calidad de una carga recién llegada. Álvaro observa la escena con tranquilidad; lleva demasiados años haciendo esto como para sorprenderse. Sin embargo, cuando habla de la cebolla, todavía lo hace con una mezcla de respeto y gratitud: sabe que gracias a ella construyó una familia, sabe que gracias a ella permaneció en Tenerife y sabe que gracias a ella pudo ofrecer oportunidades a sus hijos. Y sabe, también, que detrás de cada cebolla que llega a Palmira existe una historia que casi nadie ve.</p>
          <p className="mb-6 break-inside-avoid">La historia de los campesinos que madrugan, la historia de las montañas donde crece el cultivo, la historia de los trabajadores que viven de la cosecha, la historia de un territorio que aprendió a sostenerse sobre la tierra. Antes de despedirse, Álvaro vuelve a sacar el celular, busca una fotografía, la amplía ante mis ojos y en la pantalla aparecen los cultivos extendiéndose sobre las montañas verdes de Tenerife. Él permaneció observándola unos segundos.</p>
          <p className="mb-6 break-inside-avoid italic font-serif text-[var(--color-paramo-yellow)]">—Todo sale de ahí —dice.</p>
          <p className="mb-6 break-inside-avoid">Esta vez no habla solamente de cebollas; habla de su padre, de Marina, de sus hijos, de los trabajadores, de las cosechas y de la economía de un corregimiento entero. Entonces, resulta imposible no pensar que, en Tenerife, la historia de una cebolla también es la historia de la paz, del trabajo y de la permanencia. Porque, durante décadas, los habitantes de estas montañas han seguido haciendo lo mismo: sembrar, cosechar, bajar la cebolla a Palmira y volver a empezar.</p>
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
          <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: El Páramo</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
      </section>

    </div>
  );
}
