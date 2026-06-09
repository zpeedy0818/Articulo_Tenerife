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
          <div className="absolute inset-0 bg-[url('/images/articulo/banner.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)] via-[var(--color-paramo-dark)]/20 to-transparent" />
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-30 text-[10px] text-white/50 font-sans tracking-wide select-none bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
            Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 text-center space-y-4">
            <span className="font-sans text-[var(--color-paramo-fog)] text-xs uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-2">
              <BookOpen size={14} className="text-[var(--color-paramo-moss)]" /> Reportaje Especial / Investigación
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-paramo-green)] leading-tight font-bold text-shadow-none">
              Cuidemos el Páramo Tenerife
            </h1>
            <p className="font-sans text-sm md:text-base text-[var(--color-paramo-bone)]/80 italic max-w-2xl mx-auto">
              "La apuesta comunitaria frente al estigma del conflicto armado."
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
            <span>8 min de lectura</span>
          </div>
        </div>

        {/* Editorial Body */}
        <article className="max-w-3xl mx-auto px-6 font-sans text-base md:text-lg text-[var(--color-paramo-bone)]/90 leading-relaxed space-y-8">
          
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:text-[var(--color-paramo-moss)]">
            Turismo para desestigmatizar los territorios. Con la iniciativa llamada Cuidemos el páramo, habitantes de Tenerife, zona rural de El Cerrito en Valle del Cauca, intentan dejar atrás el estigma que por mucho tiempo los ha señalado como una zona roja y corredor clave para grupos al margen de la ley. Apostando por el turismo de naturaleza y la conservación del ecosistema de alta montaña en el páramo de Las Hermosas, buscan que la idea de la guerra no sea lo primero que aparezca en la mente al pensar en el territorio.
          </p>

          <div className="my-12 p-8 bg-[var(--color-paramo-green)]/5 border-l-4 border-[var(--color-paramo-moss)] rounded-r-xl space-y-4">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-paramo-green)] italic font-medium leading-relaxed">
              "La emoción de uno es pararme aquí al lado para la foto, pero no nos damos cuenta del ecosistema que estamos afectando."
            </p>
            <span className="block text-xs uppercase tracking-widest text-[var(--color-paramo-moss)]">— Alejandro Guerrero, guardabosques del corregimiento de Tenerife</span>
          </div>

          <p>
            Al recordar cómo grupos numerosos en motos y cuatrimotos subían sin control hasta la laguna, pisoteando los frailejones y colchones de agua que sostienen el equilibrio hídrico de la montaña, Alejandro Guerrero destaca la importancia de la iniciativa. Para frenar este impacto ambiental y proteger un territorio frágil, marcado además por cuatro décadas de aislamiento y conflicto armado, los campesinos de la zona rural de El Cerrito se organizaron en 2022 bajo la iniciativa Cuidemos el Páramo Tenerife.
          </p>

          <p>
            Con esta organización comunitaria, la población busca salvaguardar la alta montaña y transformar la narrativa de la región, apostando a que sea reconocida por la riqueza de sus paisajes y no por la violencia en su historia.
          </p>

          <div className="my-12 relative w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 bg-black/20 flex justify-center items-center">
            <img src="/images/articulo/image1.png" alt="Paisaje Tenerife" className="w-full h-auto max-h-[80vh] object-contain" />
            <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
              Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            La montaña atravesada por la guerra
          </h2>

          <p>
            Según la Comisión de la Verdad, el cañón de Las Hermosas y el páramo, que hace parte de Tenerife, se consolidaron como un corredor estratégico clave para la movilidad de actores armados al conectar Cauca, Valle del Cauca, Huila y Tolima. Fue en la primera mitad de la década de 1980, en medio de su expansión territorial, cuando las Farc-EP llegaron a la zona a través de pequeños grupos del Sexto Frente.
          </p>
          
          <p>
            Aprovechando el aislamiento geográfico y la limitada presencia estatal, la organización guerrillera se integró con los años en la vida cotidiana de la montaña y asumió funciones que correspondían al Estado; entre las décadas de 1980 y 1990, regularon la vida comunitaria mediando en conflictos vecinales, familiares o laborales, e incluso ejerciendo control sobre la economía local de la cebolla junca. Esta regulación social transformó por completo las dinámicas de convivencia, al punto que para los habitantes sobrevivir implicó normalizar la guerra.
          </p>

          <div className="my-12 relative w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 bg-black/20 flex justify-center items-center">
            <img src="/images/articulo/image2.jpg" alt="Montaña" className="w-full h-auto max-h-[80vh] object-contain" />
            <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
              Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
            </div>
          </div>

          <p className="text-sm italic text-[var(--color-paramo-fog)]">
            Escobar Escobar, Elizabeth. “Llevemos la fiesta en paz”: Guerrilla y orden local en Tenerife, Valle del Cauca, 1998-2010. Trabajo de investigación para aspirar al título de Maestría en Sociología, Universidad del Valle, Cali, 2015.
          </p>

          <p>
            Sin embargo, a finales de los años noventa el conflicto se intensificó. En 1998, un ataque de las Farc-EP destruyó la estación de Policía de Tenerife y dejó varios agentes muertos, eliminando el único referente institucional en la zona y dando paso a un régimen de restricciones de movilidad y asesinatos selectivos que preparó el terreno para que la violencia escalara aún más en 2001, año en que la incursión del Bloque Calima de las AUC y sus constantes enfrentamientos con la guerrilla provocaron el desplazamiento masivo de campesinos hacia Palmira.
          </p>

          <p>
            Durante los años siguientes, bajo la política de Seguridad Democrática, el territorio quedó atrapado en un fuego cruzado de operaciones militares y combates que terminaron por fracturar la vida en la montaña. Esta ofensiva y el recrudecimiento de la guerra no fueron exclusivos de Tenerife, sino que respondieron a una dinámica sistemática que afecto a toda la región.
          </p>

          <p>
            Como lo demuestra la investigadora Catalina Acosta Oidor en su estudio Anatomía del conflicto armado en el Valle del Cauca durante la primera década del siglo XXI, la zona vivió durante este periodo algunos de sus años más difíciles en materia de derechos humanos, un impacto cuantificable que se refleja con claridad en los picos de violencia del departamento. Este panorama de violencia explica el aislamiento y el abandono de las tierras en la región, una realidad que comenzó a transformarse a partir de la política de Seguridad Democrática implementada por el Estado.
          </p>

          <div className="my-12 relative w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 bg-black/20 flex justify-center items-center">
            <img src="/images/articulo/image3.png" alt="Naturaleza" className="w-full h-auto max-h-[80vh] object-contain" />
            <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
              Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
            </div>
          </div>

          <p>
            En la década del 2010, se hizo evidente el debilitamiento de las FARC en Tenerife debido a la fuerte presión militar en la zona, especialmente por la llegada de los Batallones de Alta Montaña que cortaron sus corredores de movilidad. Como resultado, la estructura quedó replegada geográficamente hacia los límites con Tuluá, perdiendo parte del control que antes ejercía sobre Tenerife.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            El turismo como apuesta nacional
          </h2>

          <p>
            Colombia había tenido, en décadas anteriores, una posición privilegiada como destino turístico. Según la investigación de Miriam Menchero Sánchez, "Colombia en posconflicto: ¿turismo para la paz o paz para el turismo?" (2018), en los años sesenta y setenta el país contaba con buena conectividad aérea, infraestructura sólida y un creciente posicionamiento en turismo de congresos y destinos de sol y playa.
          </p>

          <p>
            El número de turistas internacionales pasó de 161.000 en 1970 a más de 1,2 millones en 1980. Pero el recrudecimiento del conflicto armado desde los años ochenta frenó ese impulso de forma drástica. La inestabilidad afectó gravemente la seguridad, la accesibilidad y la imagen del país. El punto más crítico llegó en 1996, cuando los flujos de turistas internacionales cayeron un 54,9% respecto al año anterior, pasando de casi 1,4 millones de visitantes a apenas 630.500. Destinos de enorme valor arqueológico y natural como la Sierra Nevada de Santa Marta, San Agustín y Tierradentro quedaron prácticamente inaccesibles por los retenes ilegales y los riesgos en las vías.
          </p>

          <p>
            La firma del Acuerdo de Paz entre el Estado colombiano y las FARC-EP en 2016 abrió una ventana histórica que el sector no tardó en aprovechar. Desde el inicio del posconflicto se registró un incremento superior al 27% en las llegadas internacionales. Los investigadores que estudiaron este fenómeno global lo nombraron <em>Phoenix Tourism</em> o Turismo Fénix: un proceso de recuperación integral en el que las comunidades afectadas por la violencia extrema pasan de ser víctimas pasivas a protagonistas activas de su propio desarrollo a través del turismo.
          </p>

          <p>
            Colombia, según la Organización Mundial del Turismo, estaba volviendo del borde del abismo al mapa del turismo mundial. El Gobierno respondió con un marco institucional específico: el Plan Sectorial de Turismo "Turismo para la Construcción de la Paz", que buscaba convertir al sector en un instrumento para sanar las heridas de la guerra. Se articularon ocho regiones piloto de Turismo y Paz que integraron más de 42 municipios, desde la Serranía de la Macarena hasta el Urabá, y el programa Turismo, Paz y Convivencia llegó a incorporar más de 100 municipios víctimas del conflicto, categorizados como destinos emergentes o de posconflicto (Menchero Sánchez, 2018).
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            El ecoturismo en el posconflicto
          </h2>

          <p>
            En ese nuevo escenario, el turismo de naturaleza se perfiló como la principal fuente de biocomercio en Colombia, según explica Germán Morales, Ph.D. en Ciencias con énfasis en Biología y director de la Escuela de Turismo de la Universidad Autónoma de Occidente (UAO). Para canalizarlo, el Gobierno diseñó políticas orientadas a promover negocios verdes y biocomercio en las zonas más golpeadas por la violencia.
          </p>

          <p>
            Según la Organización Mundial del Turismo, el turismo de naturaleza es la categoría más amplia: agrupa todas las actividades en las que el entorno natural es el principal atractivo, desde el senderismo recreativo hasta el avistamiento de aves y los deportes de aventura, y abarca segmentos como el ecoturismo, el turismo rural y el turismo de aventura. El ecoturismo es una forma específica dentro de ese universo. El Ministerio de Comercio, Industria y Turismo de Colombia lo define, en su Política para el Desarrollo del Ecoturismo, como una modalidad que no solo busca el disfrute del entorno natural, sino que exige productos competitivos sostenibles ambiental, social y económicamente, y que deriven beneficios directos para la comunidad receptora, integrándola de manera activa en la prestación de servicios turísticos (MinCIT, 2003).
          </p>

          <p>
            Cuando en 2017 el programa buscaba un territorio piloto, el Viceministerio de Turismo necesitaba un lugar para experimentar con el proyecto de Turismo y Paz en zonas que antes eran consideradas las más críticas del conflicto (Morales, 2026). Fue entonces cuando la UAO postuló a Tenerife, argumentando que, aunque era un territorio desconocido a nivel nacional, había sido un punto clave del conflicto: sede y base operativa del comandante de las FARC Pablo Catatumbo, cuya movilidad aprovechaba los cañones que conectan Buga, Tuluá y el resto de la región.
          </p>

          <div className="my-12 p-8 bg-[var(--color-paramo-green)]/5 border-l-4 border-[var(--color-paramo-moss)] rounded-r-xl space-y-4">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-paramo-green)] italic font-medium leading-relaxed">
              "Apenas nos bajamos de las camionetas, todo el mundo cerró puertas, ventanas; nadie salía, nadie nos atendía."
            </p>
            <span className="block text-xs uppercase tracking-widest text-[var(--color-paramo-moss)]">— Germán Morales, recordando su llegada a Tenerife en 2016</span>
          </div>

          <p>
            Reactivar la confianza local era el primer paso obligatorio antes de trazar cualquier línea en un papel. La estrategia de la universidad para romper ese aislamiento fue llevar el debate nacional directamente al corazón del antiguo fortín guerrillero: el corregimiento sería la sede del Primer Foro Nacional de Turismo y Paz en 2018. La iniciativa enfrentó resistencia institucional. "Nadie en Bogotá sabe dónde queda Tenerife", recuerda Morales. Al final, el foro funcionó como catalizador: la comunidad abrió las puertas y comenzó a ver en el turismo una alternativa real.
          </p>

          <div className="my-12 relative w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 bg-black/20 flex justify-center items-center">
            <img src="/images/articulo/image4.png" alt="Comunidad Tenerife" className="w-full h-auto max-h-[80vh] object-contain" />
            <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
              Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
            </div>
          </div>

          <p>
            Esa experiencia permitió estructurar el programa Destinos de Paz, una propuesta de la UAO que articuló fondos de la Unión Europea, el programa Páramos de Colombia del Instituto Alexander von Humboldt y el Viceministerio de Turismo. Surgió entonces el primer dilema técnico: la Unión Europea quería promocionar la Laguna Negra y el Páramo de Las Domínguez. El equipo de la UAO se opuso por razones de conservación: al ser un ecosistema frágil de frailejones y producción de agua, el páramo debía reservarse para un turismo científico y especializado, redireccionando el flujo de visitantes comerciales hacia el casco urbano y las veredas a través de bionegocios (Morales, 2026).
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            El Corredor Turístico de la Montaña
          </h2>

          <p>
            Mientras el Gobierno trazaba políticas desde Bogotá, la Escuela de Turismo de la UAO pasó a ejecutar acciones directamente en el territorio. Bajo el modelo de Destinos de Paz, el equipo académico comenzó a diseñar un proyecto de turismo comunitario en Tenerife. Según relata Germán Morales, director de la Escuela de Turismo de la UAO, en entrevista para esta investigación (2026), para el nombre inicialmente se planteó la opción de "Corredor del Chinche". Sin embargo, Morales explica que descartó la idea de inmediato: "Eso no va a pegar en ninguna parte".
          </p>
          
          <p>
            Para el biólogo, la verdadera identidad del lugar estaba en su paisaje: "Algo que fascina a todo el mundo cuando entra aquí son las montañas". Así nació el Corredor Turístico de la Montaña, una propuesta que, en palabras de Morales, buscaba "reivindicar al montañero, al campesino" y devolverle el orgullo a una comunidad señalada por décadas solo por la violencia.
          </p>

          <p>
            Entre 2017 y 2019 el cambio fue visible. Los jóvenes y las familias pintaron las fachadas del pueblo, reemplazando los antiguos grafitis de los frentes guerrilleros por murales de osos de anteojos, aves y frailejones. En la entrada colgaron un letrero que resumía la transformación: "Bienvenidos al corredor turístico de las montañas, recinto de paz". El corredor llegó a operar con doce a catorce agencias de viajes y la economía local logró diversificarse con la apertura de casas de familia y restaurantes.
          </p>

          <p>
            El impacto se sintió directamente en los negocios de la carretera; Morales recuerda con detalle el dinamismo de los fines de semana: "Con Pilar y su familia tuvimos una sede de postres de leche... a la orilla de la carretera tenía una bodega gigante con mesas, con sillas. Eso era fila de carros ahí comprando queso, comprando leche, comprando yogur; ella vendía todos los postres que sacaban el fin de semana". Asimismo, destaca el éxito de otros productores del corregimiento: "Tuvimos la experiencia de Olga Quintero con el café (...) y en varias ocasiones ganó como el mejor café, el mejor café del Valle y uno de Colombia".
          </p>

          <div className="my-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 relative bg-black/20 flex justify-center items-center">
                <img src="/images/articulo/image5.jpg" alt="Vistas de montaña" className="w-full h-auto max-h-[60vh] object-contain" />
                <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
                  Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
                </div>
              </div>
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 relative bg-black/20 flex justify-center items-center">
                <img src="/images/articulo/image6.png" alt="Páramo" className="w-full h-auto max-h-[60vh] object-contain" />
                <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
                  Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 relative bg-black/20 flex justify-center items-center">
              <img src="/images/articulo/image7.png" alt="Páramo de Las Hermosas" className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
                Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
              </div>
            </div>
            <p className="text-center text-sm italic text-[var(--color-paramo-fog)] mt-4">
              Registro promocional del Corredor Turístico de la Montaña en Tenerife (El Cerrito, Valle del Cauca).
            </p>
          </div>

          <p>
            Sin embargo, el declive del proceso llegó por tres frentes simultáneos. Primero, surgieron tensiones internas de gobernanza con asociaciones que frenaban el avance equitativo del proyecto en la base comunitaria. Luego, en 2020, la pandemia paralizó por completo la actividad turística y obligó a la UAO a retirar su personal del territorio. Finalmente, entre 2021 y 2022, cambios en las dinámicas de orden público y seguridad en la alta montaña abrieron el camino para que grupos armados ilegales reocuparan las antiguas rutas.
          </p>

          <p>
            Ante este escenario, la universidad no podía seguir enviando estudiantes ni docentes a una zona con riesgos de seguridad. Sin financiamiento, sin acompañamiento técnico y sin garantías de seguridad, las comunidades no pudieron sostener el proyecto solas. "Apenas las instituciones salen de un territorio, las comunidades no tienen la capacidad de sostener el proceso... porque no tienen el conocimiento, porque no tienen la formación, porque no tienen la plata", dice Morales.
          </p>

          <p>
            Para 2023 el proyecto se dio por terminado. El flujo de visitantes cayó y el silencio volvió a las calles de Tenerife. Sin embargo, durante casi cuatro años el territorio demostró que la articulación institucional, el potencial natural y la identidad campesina pueden transformar una zona afectada por el conflicto armado. El modelo demostró su viabilidad en la práctica; lo que faltó, en última instancia, fueron garantías de seguridad sostenibles en el tiempo.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            Cuidemos el Páramo Tenerife: turismo en comunidad
          </h2>

          <p>
            Cuando las instituciones que habían impulsado el Corredor Turístico de la Montaña se fueron del territorio, un grupo de habitantes de Tenerife decidió no quedarse quieto. Inspirados en esa primera experiencia de turismo comunitario, tomaron las riendas por su propia cuenta. Así nació Cuidemos el Páramo Tenerife, una organización comunitaria que buscó proteger el páramo y darle continuidad a una idea que ya había demostrado ser posible.
          </p>

          <p>
            Ante la gravedad de la situación ambiental por turistas, la comunidad tomó la iniciativa y escaló la denuncia a las autoridades ambientales y locales. El llamado provocó una reunión de emergencia en el propio territorio, sentando en la misma mesa a la Alcaldía de El Cerrito, la Corporación Autónoma Regional del Valle del Cauca (CVC) y el Ministerio de Ambiente. El mensaje que obtuvieron fue directo: o la comunidad se hacía cargo, o el ecosistema pagaría las consecuencias. "O la comunidad se apersona... porque nosotros somos los primeros beneficiados de esta agua... Entonces debido a eso se organiza el grupo", recuerda Guerrero.
          </p>

          {/* Timeline Block */}
          <div className="my-14 p-8 bg-gradient-to-br from-[var(--color-paramo-green)]/10 to-transparent border border-[var(--color-paramo-bone)]/10 rounded-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-paramo-moss)] to-[var(--color-paramo-green)] rounded-l-xl"></div>
            
            <h3 className="font-serif text-2xl text-[var(--color-paramo-green)] font-bold mb-10 flex flex-col gap-1">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-paramo-moss)] font-semibold">Línea de Tiempo</span>
              De pueblo fantasma a destino turístico
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[7px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-paramo-moss)]/50 before:to-transparent">
              
              {[
                { year: "2016", text: "Llegada UAO." },
                { year: "2017", text: "Inicio del Corredor Turístico de la Montaña." },
                { year: "2018", text: "Foro Nacional de turismo y paz." },
                { year: "2019", text: "Pico de actividad turística." },
                { year: "2020", text: "Pandemia." },
                { year: "2021-22", text: "Retirada militar." },
                { year: "2022", text: "Primeros pasos de turismo comunitario." },
                { year: "2023", text: "Fin del proyecto 'Corredor Turístico de la Montaña'." },
                { year: "2023-Actualidad", text: "Cuidemos el Páramo Tenerife." }
              ].map((item, i) => (
                <div key={i} className="relative flex items-start pl-8 group">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[var(--color-paramo-dark)] bg-[var(--color-paramo-moss)] ring-2 ring-[var(--color-paramo-moss)]/30 group-hover:bg-[var(--color-paramo-green)] group-hover:ring-[var(--color-paramo-green)]/50 transition-all duration-300 z-10"></div>
                  <div>
                    <span className="font-serif font-bold text-[var(--color-paramo-green)] text-lg block leading-none mb-1 group-hover:text-[var(--color-paramo-moss)] transition-colors">{item.year}</span>
                    <p className="font-sans text-sm text-[var(--color-paramo-bone)]/80 m-0 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            Guerrero nació en Pasto y creció en el campo. Tras vivir veinticinco años en Sevilla, Valle, el trabajo lo llevó a Tenerife, donde finalmente se radicó. "Nunca me gustó la ciudad", dice. Desde ese arraigo construyó su rol como guardabosques, un cargo que el propio grupo logró gestionar ante la alcaldía del Cerrito. Sus funciones son amplias: charlas de conciencia ambiental, siembras, monitoreo de reservas hídricas y seguimiento de fauna a través de cámaras trampa.
          </p>

          <p>
            Hoy, el 90 o 95 por ciento de los visitantes que llegan al páramo lo hacen con reserva previa. Cada recorrido va acompañado de una charla que explica por qué no se puede entrar a los valles de frailejones, por qué está prohibido descender hasta la laguna y por qué el ecosistema exige una actitud de respeto antes de ser recorrido. Esa educación también llegó tarde para frenar algunos daños: cuando empezaron a hacer limpieza en los senderos, encontraron botellas rotas, carpas abandonadas y rastros de acampadas dentro del páramo.
          </p>

          <p>
            En el corazón operativo del proyecto está el vivero comunitario, donde un grupo de mujeres trabaja a diario preparando compost, perforando bolsas recicladas y sembrando especies destinadas a restaurar las zonas degradadas. La Gobernación aportó los materiales; la comunidad puso la mano de obra. "La idea es pensar en las generaciones futuras", dice una de ellas. Otra lo resume con una frase que condensa el espíritu de todo el proceso: "Para que vea que las mujeres también quieren un cambio".
          </p>

          <p>
            Pero Guerrero va más allá de la reforestación como acto técnico. Lo que propone es una estrategia de vínculo emocional entre el visitante y el páramo: que cada turista adopte un frailejón o un árbol, lo siembre con sus propias manos y lo considere su hijo. "Nosotros a ustedes, a medida que va creciendo, le vamos tomando fotos y pues se le va enviando para que ustedes vayan viendo", explica. La idea es que ese lazo afectivo motive al visitante a volver, a ver crecer lo que sembró, a entender que su paso por el páramo dejó algo vivo.
          </p>

          <p>
            El proyecto también ha enfrentado sus propias tensiones internas. La economía de Tenerife gira en torno a la cebolla junca, un cultivo que genera ingresos suficientes para que muchos habitantes no sientan la necesidad inmediata de unirse a procesos colectivos. "Como hay una buena entrada de dinero... cada cual tira para su lado... entonces no le interesa lo que pase en lo colectivo", reconoce Guerrero.
          </p>

          <p>
            Aun así, hay quienes ya cuentan lo que el proyecto les ha dado. Marcela García, habitante del corregimiento, lo dice sin rodeos: "He podido pagar los estudios a mi hijo". Para ella, el turismo comunitario no es una idea sino una realidad concreta que cambió su economía doméstica. Y agrega algo que va más allá de los números: "El ingreso de los visitantes le ha dado alegría y satisfacción de ver que nos visitan y las personas se maravillan de nuestra riqueza natural".
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            Turismo para desestigmatizar los territorios
          </h2>

          <p>
            Ser víctima del conflicto armado no siempre protege a una comunidad del estigma. Con frecuencia ocurre lo contrario: los habitantes de zonas históricamente marcadas por la guerra cargan con una doble condena, la de haber vivido la violencia y la de ser vistos desde afuera como parte de ella. El territorio se convierte en sinónimo de peligro, y quienes lo habitan, en extensión de esa amenaza. Cambiar esa percepción es, precisamente, uno de los efectos que sus promotores le atribuyen al turismo comunitario.
          </p>

          <p>
            Germán Morales lo explica desde una herramienta concreta: el marketing territorial. Para él, no se trata de maquillar la realidad ni de negar lo que ocurrió, sino de cambiar la conversación. "Lo que hace la narrativa del turismo es quitar esa narrativa del miedo y de inseguridad de la gente y vender lo que se puede vender", afirma. En la práctica, eso significa construir una imagen del lugar a partir de sus atributos reales: "¿Qué es lo más bonito que tiene Tenerife? Ah, las montañas, ah, la cebolla, ah, la leche, ah, los bosques de palma de cera... Y eso es lo que saca uno".
          </p>

          <p>
            Pero ¿es suficiente con cambiar el relato? El sociólogo Dwhait Hamit Vivas, de la Universidad del Pacífico, ofrece un marco conceptual para entender lo que ocurre en territorios como Tenerife. Lo que describe Morales desde la práctica del marketing, Vivas lo nombra desde la teoría como estigmatización territorial. En ese esquema, las comunidades afectadas por el conflicto sufren una doble afectación: la causada por la guerra y la generada por el estigma social.
          </p>

          <p>
            Frente a eso, Vivas considera que las iniciativas de turismo comunitario y turismo de naturaleza representan una alternativa significativa para transformar esa percepción. Actividades como el avistamiento de aves, los recorridos ecológicos y la promoción de la cultura campesina permiten visibilizar aspectos que quienes solo conocen Tenerife a través del conflicto nunca han visto. El turismo se convierte así en una herramienta que fortalece el tejido comunitario, fomenta el sentido de pertenencia y favorece la conservación de ecosistemas estratégicos.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            Sombras de la guerra
          </h2>

          <p>
            Sin embargo, mientras las comunidades de Tenerife intentan reconstruir su relación con la montaña a través de procesos de conservación y turismo comunitario, la guerra sigue apareciendo en la vida cotidiana del territorio. El pasado 8 de marzo de 2026, integrantes de la estructura Adán Izquierdo, perteneciente a las disidencias de las FARC, se enfrentaron con tropas del Ejército que custodiaban un puesto de votación en el corregimiento durante la jornada electoral. Aunque el hecho no dejó personas heridas, el enfrentamiento volvió a poner sobre la mesa una realidad en la montaña que sigue siendo imposible de ignorar.
          </p>

          <p>
            Diego Hidalgo, un joven de 22 años oriundo de El Cerrito, estuvo ese día en Tenerife cumpliendo su rol como jurado de votación. Alrededor del mediodía llegó un pequeño grupo de soldados al colegio. Poco después comenzaron los disparos. "Éramos cerca de 20 personas refugiadas en un baño pequeño", recuerda Diego. Durante aproximadamente dos horas escucharon las detonaciones afuera mientras algunos enviaban mensajes de despedida a sus familias.
          </p>

          <p>
            Para Diego, lo ocurrido no fue un hecho aislado sino la consecuencia directa de un patrón que se repite: el Estado que aparece en los territorios solo cuando hay elecciones, sin una presencia sostenida que genere condiciones reales de seguridad. "El conflicto se debe al olvido de las zonas rurales", dice. Y aun así, su descripción de Tenerife no es la de un lugar condenado: lo llama un territorio "demasiado hermoso", con paisajes que recuerdan al Eje Cafetero, palmas de cera y un potencial turístico que, en su opinión, solo necesita una intervención estatal que vaya más allá de lo militar.
          </p>

          <p>
            Lo ocurrido hace apenas unos meses contrasta con las escenas que hoy también hacen parte de Tenerife. Mientras algunos habitantes suben al páramo para sembrar frailejones, limpiar senderos, monitorear fauna o acompañar recorridos ambientales, otros todavía viven con la incertidumbre de que la violencia pueda volver a alterar la tranquilidad de la montaña. Aun así, la comunidad insiste en quedarse, en cuidar el páramo y en defender una idea distinta de su territorio: una en la que Tenerife pueda ser reconocido más por el agua, los frailejones y el trabajo colectivo de sus habitantes que por la guerra que durante décadas marcó su historia.
          </p>

          <div className="mt-12 p-6 bg-[var(--color-paramo-bone)]/5 border-l-4 border-[var(--color-paramo-fog)] rounded-r-lg">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[var(--color-paramo-fog)] mb-2">Nota Editorial</h4>
            <p className="font-sans text-xs text-[var(--color-paramo-bone)]/70 leading-relaxed">
              Obtener cifras específicas sobre el impacto del turismo en Tenerife y El Cerrito no fue posible en la fecha de entrega de este artículo. Ante una solicitud formal, la Gobernación respondió que los datos habían sido remitidos al SITUR, entidad cuya plataforma se encontraba fuera de servicio. La Secretaría de Desarrollo Económico de El Cerrito confirmó que desde 2024 implementan un Plan Sectorial de Turismo y que el seguimiento se hace a través de guías locales, quienes documentan en promedio 200 turistas mensuales acompañados en los senderos hacia la Laguna Negra y el Páramo de Las Domínguez.
            </p>
          </div>

          {/* Simplebooklet Embed */}
          <div className="mt-16 mb-8 text-center space-y-6">
            <h3 className="font-serif text-2xl text-[var(--color-paramo-green)] font-bold border-t border-[var(--color-paramo-bone)]/10 pt-16">
              Cuaderno de Imágenes: Sombras de Guerra
            </h3>
            <p className="font-sans text-sm text-[var(--color-paramo-bone)]/80 max-w-xl mx-auto">
              Explora el archivo visual interactivo que complementa esta investigación documental.
            </p>
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--color-paramo-bone)]/10 bg-[#1a1a1a] flex justify-center">
              <iframe 
                src="https://simplebooklet.com/sombrasdeguerra?source=qr#page=9" 
                className="w-full h-[500px] sm:h-[600px] border-0" 
                allowFullScreen 
                title="Sombras de Guerra - Simplebooklet"
              />
            </div>
          </div>

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
            href="/mapa"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-transparent text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-[var(--color-paramo-bone)] hover:border-transparent transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Atrás: Mapa</span>
          </Link>
          
          <Link 
            href="/collage"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: Memoria Visual</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

      </main>
    </SmoothScroller>
  );
}
