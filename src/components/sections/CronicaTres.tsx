"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, Play, Pause, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export function CronicaTres() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Inicializar el audio en el cliente
    audioRef.current = new Audio("/audio/testimonio.mp3");
    
    const audio = audioRef.current;
    
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    
    const handleEnded = () => {
      setIsPlayingAudio(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlayingAudio) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div id="cronica-3" className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)] overflow-hidden selection:bg-[var(--color-paramo-green)] selection:text-white">
      
      {/* Hero Portada */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[var(--color-paramo-dark)]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cronica-3/bg.jpg')" }}
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
            <span className="text-[var(--color-paramo-yellow)] font-sans uppercase tracking-[0.3em] text-sm md:text-base font-bold drop-shadow-md">Crónica 3</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white drop-shadow-2xl leading-tight max-w-5xl mx-auto"
          >
            El hombre que decidió cuidar el Páramo
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 inline-block border-t border-[var(--color-paramo-yellow)]/30 pt-6"
          >
            <p className="text-lg md:text-xl font-sans uppercase tracking-widest text-[var(--color-paramo-dark)] drop-shadow-md">
              Por: Kimberly Andrea Vargas
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

      {/* Cuerpo de la Crónica */}
      <section className="w-full relative bg-[var(--color-paramo-dark)] py-24 md:py-32">
        
        {/* Intro con Drop Cap */}
        <div className="max-w-4xl mx-auto px-6 w-full font-sans mb-12">
          <p className="text-2xl md:text-3xl font-serif text-[var(--color-paramo-bone)] leading-relaxed">
            <span className="float-left text-7xl md:text-8xl font-serif text-[var(--color-paramo-green)] leading-none pr-4 pt-2 mt-1 drop-shadow-sm">A</span>
            lejandro Guerrero recuerda muy consciente cuando llegó al campo a acompañar a su abuela y tíos gracias a  que su mamá con tres hijos le dificulta mucho conseguir trabajo, hasta que le dieron uno pero solo le aceptaban tener un hijo. Ella tomó la difícil decisión de dejar a su hija mayor con su papá y al niño (que aún no sabía lo consentido que era) con su abuela en el campo, lo que nadie esperaba era que esta etapa marcaría para siempre el futuro del páramo de las Hermosas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">La historia  de este hombre, cuyo ánimo pareciera no conocer el odio o la carencia, comenzó a mediados de septiembre,  hace cuatro décadas atrás, en San Juan de Pasto, en una finca donde su madre era ama de casa. Él creció en medio de una gran familia y al ser el único bebé desarrolló una personalidad malcriada siendo querido incluso por los dueños. En su cabeza porta una cicatriz que lo hace acordarse  de esos primeros cinco años de vida la se hizo al caer encima de una “pica”.</p>
          <p className="mb-6 break-inside-avoid">Esa cicatriz podría representar el cierre de  su vida simple y fácil. Su madre quedó embarazada por tercera vez de alguien distinto al padre de Alejandro, y en la finca ya no podían recibirla, ahí su madre decide separarse de su papá y comenzar una vida sola con sus tres hijos. Pasar de vivir en  una finca siendo el niño mimado a pasar su día en un hogar infantil esperando que su madre y su hermana  mayor lleguen de trabajar.</p>
          <p className="mb-6 break-inside-avoid">Su madre no podía gozar de una estabilidad, con tres hijos era muy complicado que la contratarán, por eso cuando volvieron a llamarla ella no dudó en aceptar aunque una de las condiciones fuera solo llevar a una hija. Decidió llevar a su hija mayor con el padre y al pequeño niño de seis años con la abuela donde crecería entre el campo. Su madre regresó a un trabajo fijo y le proporcionó a Alejandro el contexto donde se desarrollaría su amor por la naturaleza, que más adelante concluiría  con la creación de una asociación para la protección de esta.</p>
          <p className="mb-6 break-inside-avoid">El campo le proporcionó a Guerrero la oportunidad de amar todo lo que lo rodea, o como él dice: “todo lo que mi Diosito nos da”, la virgen y Dios lo han protegido desde siempre, y con sus oraciones se los agradece a diario.</p>
          <p className="mb-6 break-inside-avoid">Todos recuerdan su crianza con cierta nostalgia. Pero él la recuerda con intención, con felicidad, recuerdos muy amenos de cuando llegué al campo, sí, ya me cambió la vida total.</p>
          <p className="mb-6 break-inside-avoid">Y aunque fueran una familia con carencias o humilde, nunca fueron pobres. Alejandro piensa que alguien pobre es quien no tiene espíritu, quien no tiene ganas de salir adelante, y bajo esa descripción, ellos nunca fueron pobres. Iban a los potreros a coger guayabas o a subirse a árboles para recoger níspero, incluso a meterse a cafetales a coger guamas, naranjas, aguacates y bananos. Todas estas experiencias hicieron que no tuviese tiempo de pensar en que podría haber sido su vida de otra manera. Y que aunque en la casa no hubiese un sustento fijo no pasaban hambre, porque disfrutaban ir a cada una de las fincas para pedir alimentos como yuca, maíz o plátanos y así se hacían el “mercadito”. Aunque tenía que ser servicial y comedido como forma de pago.</p>
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
          <p className="mb-6 break-inside-avoid">El mediodía en la Plaza de la Concordia de Sevilla se clava en la nuca mientras su estómago empieza a sonar, un sonido compite con el ruido del pueblo. El hombre quien le había prometido "yo lo cuadro aquí cerca del pueblo" se fue diciendo que regresaría pronto. Pero las doce se hicieron la una, y la una se convirtió en las dos de la tarde. En esa hora, ya deja de ser curioso y comienza a dar  miedo: “me dio como susto, ya no tenía donde ir” . Lo único que le quedaba era ir a almorzar al restaurante Picotico, antes de agarrar un bus nuevamente hacía Cali donde vivía en esa época de su vida, no sin antes comprender dónde eran los espacios en los que él era recibido y en cuáles no.</p>
          <p className="mb-6 break-inside-avoid">Un señor le dijo que no se hiciera en un sitio porque eran las “ollas”. Y no se refería a callejones oscuros o lugares solitarios. Son las fincas más inmensas de Sevilla, con doscientos o trescientos trabajadores que, en plena época de cosecha traían consigo gente de muchos tipos de “culturas, si sabes a lo que me refiero”, entonces en 8 o 15 días no regresan.</p>
          <p className="mb-6 break-inside-avoid">Una semana después se encuentra con un amigo cualquiera que quiso acompañarlo en su camino a Sevilla, quien sorprendió a este hombre que a estas altura se podría considerar campesino, pues su amigo quería cambiar un trabajo de oficina por ir a trabajar en lo que salga. Al llegar los espera en una esquina cualquiera, la figura de un viejo “palento”, agachado que fuma un cigarrillo. Quien los mira: "¿ustedes no son de acá, cierto?". Bastó de una respuesta con el acento pastuso presente para producirle una risa franca. Pero en medio de esa risa suelta la frase que lo cambia todo. "Yo tengo cogidita de café, si quieren se van conmigo".</p>
        </div>

        {/* Audio Player Intercalado */}
        <div className="max-w-4xl mx-auto px-6 w-full my-16">
          <div className="bg-white/5 border border-[var(--color-paramo-moss)]/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-paramo-green)]/10 blur-3xl rounded-full" />
            <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] mb-6 relative z-10">Charla con don Alejandro</h4>
            <div className="flex items-center gap-6 relative z-10">
              <button 
                onClick={toggleAudio}
                className="w-16 h-16 shrink-0 rounded-full bg-[var(--color-paramo-green)] flex items-center justify-center text-white hover:bg-[var(--color-paramo-moss)] hover:scale-105 transition-all shadow-lg"
              >
                {isPlayingAudio ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
              </button>
              <div className="flex-1 h-3 bg-black/40 rounded-full overflow-hidden border border-white/5 relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-paramo-moss)] to-[var(--color-paramo-green)] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <p className="mt-6 text-sm text-[var(--color-paramo-bone)]/60 font-sans uppercase tracking-wider relative z-10 text-center">
              Audio: Alejandro comparte su visión sobre el páramo.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">En la misma esquina donde  se produce la charla, comienza el trayecto a la finca del señor. De la nada se completa el ”combo” con la llegada de un paisita espabilado y un hombre silencioso venido del Huila. Cuatro acentos, cuatro personas distintas unidas por el mismo par de botas nuevas compradas a las carreras y la necesidad del trabajo. Alejandro escuchó consejos y  decidió comprar la “parva", un mecatico y pancito para cuando llegarán allá. Con el cargamento a cuestas el grupo toma el camino hacia la vereda Samaria, rumbo a la finca La Gaviota.</p>
          <p className="mb-6 break-inside-avoid">Para este hombre que  apenas estaba dejando de ser un niño para convertirse en un hombre, cruzar el umbral de La Gaviota fue, en realidad, cruzar la frontera entre la adolescencia de la madurez, ya que allí comenzó un paréntesis de cinco años de absoluto silencio. A su casa no llegaron cartas, ni llamadas, ni razones; durante media década “el niño” bien podía estar respirando bajo un techo o enterrado bajo la misma tierra de Sevilla. "Yo me hice solo en la vida", se dice ahora con el orgullo de quien no se dejó corromper por el ambiente espeso de los cuartos. La crianza con unos buenos padres funcionó como un escudo contra los vicios del entorno, manteniendo limpio a un joven que maduraba a golpes.</p>
          <p className="mb-6 break-inside-avoid">La juventud le llegó como a cualquier ser humano, con ciertos gustos que se cumplían  incluso entre las extenuantes jornadas de cosecha. Cada ocho días, la vereda Samaria, se iluminaba y prendía con discotecas y lugares donde se  podrían conocer chicas. Fue en una de esas noches de música donde el azar apareció la mujer que se convertiría en la madre de sus hijos.</p>
          <p className="mb-6 break-inside-avoid">Él reconoce que han habido momentos donde sus dos ángeles (Dios y la Virgen María)  le han brindado personas con las cuales se siente cómodo y que lo han guiado en un camino para ser mejor persona, y así como él siente que su fé lo ha  ayudado siempre, le ha recomendado a sus hijos tener fé a pesar de lo malo que parezcan las cosas.</p>
          <p className="mb-6 break-inside-avoid">La mayoría madura a los 20 o cerca a esas edades, pero Alejandro  Guerrero maduro a sus 17 años, cuando conoció  a la madre de sus hijos. Aunque ella era mayor que él unos siete años más o menos, eso no impidió que ella quedara en embarazo, pero no fue grato porque decidió irse con otro señor y aunque dice que no paso nada, cuando regreso estaba sin el bebé porque dice ella que lo había perdido: “mi decepción fue demasiada, siempre dure bastante tiempo sin saber nada de ella, cuando volvió ya estaba sin el embarazo, había perdido al bebe según ella”</p>
        </div>

        {/* Imagen Original Intercalada full-bleed */}
        <div className="max-w-5xl mx-auto px-6 w-full my-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[60vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/5"
          >
            <img 
              src="/images/cronica-3/author.jpg" 
              alt="Alejandro Guerrero" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="font-serif text-4xl text-[var(--color-paramo-moss)]">Alejandro Guerrero</h3>
              <p className="font-sans text-[var(--color-paramo-moss)] text-sm uppercase tracking-widest mt-2">Líder Ambiental</p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Después de  esa desafortunada situación llegó Steven, su primer hijo, y lo que podría ser una experiencia de  papá primerizo agradable terminó siendo un sentimiento de afán por una mala jugada de una prima de su pareja. La prima los llamó y les prometió una finca por la parte de atrás de Tenerife, en Buga, unos familiares y una sobrina vivían allá, les dijeron que  era muy bueno y que les daban una finca para ellos, con lo que no contaban era que era zona guerrillera, y los familiares ni siquiera los habían anunciado frente al grupo armado.</p>
          <p className="mb-6 break-inside-avoid">Ellos confiando llegaron aproximadamente seis personas todas con niños a un lugar donde ni siquiera querían dejarlos trabajar por no ser del sector, Alejandro acostumbrado a trabajar por lo suyo y no tener las  cosas regaladas le estresaba no poder conseguir un trabajo para llevar la comida a su casa y más por que su pareja había quedado en embarazo nuevamente.</p>
          <p className="mb-6 break-inside-avoid">Cuando los grupos armados vieron a un jóven muy insistente recorriendo la zona con la excusa de “conseguir trabajo” lo citaron a la escuela donde se llevó a cabo una reunión y les dijeron que como no sabían quién era ni él, ni su esposa, tenía que irse,no estaban satisfechos con que él fuera por el territorio. Sin embargo, no es que no quisieran irse, es que no tenían con que irse, así que Alejandro habló con el comandante a  exponerle su caso: “a decirle que, pues, yo no tenía plata, pues no tenía trabajo, nadie nos daba trabajo por ser extraños y a nosotros nos habían llevado con mentiras”. Y consiguió que le permitieran hacer algo, ir a Buga a recoger chatarra y “cositas que se encontraba uno por allá, ya como pude, pues,logré cuadrar con un señor”, logró lo suficiente para conseguir comprar un pasaje con el cuál logró volver a Sevilla y otra vez iniciar de nuevo. Esto le dejó una moraleja: “jamás iba a volver a salir así de esa manera. Sería mejor primero ir a conocer donde uno va a vivir”.</p>
          <p className="mb-6 break-inside-avoid">Para este hombre, los lugares moldean la identidad, y en su caso, todo empieza con su origen. Él mismo explica que viene de una cultura pastusa donde las costumbres son distintas y el castellano "lo castigamos menos", pues las cosas se pronuncian por el nombre que es, como decirle mazorca al maíz. Su primer encuentro con Tenerife fue de "entrada por salida" debido a su situación familiar, pero ese viaje corto dejó un reflejo grabado en su memoria. Al mirar atrás, reconoce que las personas no caminan a ciegas: "Uno sí tiene un destino o un camino ya marcado, por así decirlo".</p>
          <p className="mb-6 break-inside-avoid">Ese camino lo trajo de regreso cuando estaba sin empleo en Sevilla. Un cuñado supervisor lo invitó a tomar unas medidas y terminó contratado por el arquitecto para trabajar en la construcción de la cancha de fútbol de Tenerife. Para un hombre que confiesa que la ciudad no es lo suyo, "que mi Diosito no me vaya a castigar mandándome a la ciudad", dice, encontrarse de repente con el paisaje de la zona fue un absoluto choque. Ver ese cañón, las montañas y los cultivos de cebolla, papa y fresa era algo totalmente nuevo para alguien que siempre había vivido en clima cálido.</p>
          <p className="mb-6 break-inside-avoid">El verdadero punto de quiebre ocurrió a los seis meses de su llegada, cuando un compañero de trabajo al que llaman "Pelusa" lo invitó a subir al páramo para acompañar a un grupo de niños “Boy Scouts”. Aunque Alejandro ya había estado en otros páramos, no tenía conocimiento de la fauna ni de la función de las plantas. El impacto de encontrarse con la Laguna Negra fue un quiebre definitivo en su vida:</p>
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
            "Para mí ese hermoso frailejón fue el que decidió mi camino aquí en Tenerife; es como si me hubiera dicho 'te necesito, ayúdame, quédate'".
          </motion.blockquote>
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/90 leading-relaxed md:columns-2 md:gap-12">
          <p className="mb-6 break-inside-avoid">Esa fascinación se transformó rápidamente en indignación al enfrentarse a la realidad del ecosistema en una época donde la ausencia de orden generaba un turismo desaforado. El caos era total. El momento exacto en que la contemplación de Alejandro se convirtió en un mandato de protección fue cuando vio a un visitante destruir un frailejón y notó la enorme cantidad de basura acumulada en el lugar. La falta de conciencia de la gente que subía al páramo le demostró que la belleza del entorno estaba en riesgo y que alguien tenía que hacer algo al respecto y  ese alguien iba a ser él.</p>
          <p className="mb-6 break-inside-avoid"> Así nació “Cuidemos al Páramo Tenerife” un proyecto que busca hacer turismo respetuoso con el ecosistema y que las personas disfruten del páramo sin que eso signifique pisar los frailejones o llevarse las plantas. Para él llevar el día a día actual es complicado, pero  ha aprendido en el camino a diferenciar y equilibrar el trabajo, la familia y su amor por la naturaleza. Convencido de que "la unión hace la fuerza", combate los temores de la comunidad y la falta de pertenencia con amabilidad y carisma, herramientas que considera un don para darse a querer. Su vida se sella en la alta montaña, porque para él, la experiencia no se desgasta con el tiempo: "Cada vez que subo a la Laguna Negra, cada vez que veo un frailejón, es como si fuera mi primera vez; es un amor a primera vista".</p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-24 bg-transparent w-full overflow-hidden border-t border-[var(--color-paramo-moss)]/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-serif text-4xl text-[var(--color-paramo-bone)]">El rostro de la montaña</h3>
            <div className="w-24 h-1 bg-[var(--color-paramo-green)] mx-auto mt-6" />
          </motion.div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(`/images/cronica-3/masonry-${num}.jpg`)}
                className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-xl cursor-pointer"
              >
                <img 
                  src={`/images/cronica-3/masonry-${num}.jpg`} 
                  alt={`Tenerife ${num}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-sans uppercase tracking-widest text-sm">Registro {num}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Botones de Navegación */}
      <section className="py-16 w-full border-t border-[var(--color-paramo-bone)]/10 bg-transparent">
        <div className="flex flex-row justify-between items-center max-w-5xl mx-auto w-full px-6">
          <Link 
            href="/cronica/2"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-transparent text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-white hover:border-transparent transition-all duration-300"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold hidden md:inline">Atrás: Crónica 2</span>
            <span className="font-sans text-sm uppercase tracking-wider font-semibold md:hidden">Atrás</span>
          </Link>
          
          <Link 
            href="/mapa"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
          >
            <span className="font-sans text-sm uppercase tracking-wider font-semibold hidden md:inline">Continuar al Mapa</span>
            <span className="font-sans text-sm uppercase tracking-wider font-semibold md:hidden">Mapa</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Expanded view" 
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
