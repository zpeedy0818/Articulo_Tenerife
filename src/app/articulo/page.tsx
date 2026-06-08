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
            Con la iniciativa llamada Cuidemos el páramo, habitantes de Tenerife, zona rural de El Cerrito en Valle del Cauca, intentan dejar atrás el estigma que por mucho tiempo los ha señalado como una zona roja y corredor clave para grupos al margen de la ley. Apostando por el turismo de naturaleza y la conservación del ecosistema de alta montaña en el páramo de Las Hermosas, buscan que la idea de la guerra no sea lo primero que aparezca en la mente al pensar en el territorio.
          </p>

          <p>
            Desde 2022, la preocupación por el impacto ambiental que el turismo desmedido en la zona llevó a los habitantes de la montaña a organizarse y crear mecanismos de control para proteger un territorio que durante décadas también estuvo marcado por el aislamiento y el conflicto armado.
          </p>

          <div className="my-12 p-8 bg-[var(--color-paramo-green)]/5 border-l-4 border-[var(--color-paramo-moss)] rounded-r-xl space-y-4">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-paramo-green)] italic font-medium leading-relaxed">
              "La emoción de uno es pararme aquí al lado para la foto, pero no nos damos cuenta del ecosistema que estamos afectando."
            </p>
            <span className="block text-xs uppercase tracking-widest text-[var(--color-paramo-moss)]">— Alejandro Guerrero, al recordar cómo los visitantes llegaban sin control</span>
          </div>

          <p>
            Motos, cuatrimotos y grupos numerosos subían hasta la laguna y caminaban alrededor de los frailejones y colchones de agua, ecosistemas frágiles que sostienen gran parte del equilibrio hídrico de la montaña. De esa preocupación surgió <strong>Cuidemos el Páramo Tenerife</strong>, una organización comunitaria conformada principalmente por campesinos de la zona rural de El Cerrito que busca dar a conocer esta parte de la cordillera por sus paisajes y ecosistemas de alta montaña, y no por la violencia que ha acompañado al territorio durante más de cuatro décadas.
          </p>

          <p>
            Una de las apuestas de Cuidemos el Páramo Tenerife es la recuperación ambiental de la montaña a través de viveros comunitarios y procesos de reforestación con especies nativas del ecosistema de alta montaña. Alejandro Guerrero explica que la iniciativa busca ir más allá de sembrar árboles:
          </p>

          <div className="my-12 p-8 bg-[var(--color-paramo-green)]/5 border-l-4 border-[var(--color-paramo-moss)] rounded-r-xl space-y-4">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-paramo-green)] italic font-medium leading-relaxed">
              "Ustedes vienen, adquieren un arbolito o un frailejón y la idea es que suban a sembrarlo y obviamente ese va a ser su hijo, ustedes van a ser sus padres."
            </p>
            <span className="block text-xs uppercase tracking-widest text-[var(--color-paramo-moss)]">— Alejandro Guerrero, líder social</span>
          </div>

          <p>
            Después de la siembra, la comunidad realiza seguimiento del crecimiento de las plantas y comparte fotografías y actualizaciones con los visitantes a través de redes sociales para que puedan volver y reencontrarse con aquello que ayudaron a restaurar. “Es una manera de concientizar a las personas”, asegura Guerrero, mientras explica que el proyecto también busca generar recursos para las familias que integran la organización y fortalecer el cuidado comunitario del páramo.
          </p>

          <p>
            El proceso ha estado acompañado por otras acciones de conservación lideradas por habitantes de la montaña. Actualmente, el grupo realiza monitoreo ambiental, seguimiento de fauna con cámaras trampa y acompañamiento a los acueductos rurales de la zona. Guerrero, quien trabaja como guardabosques comunitario, asegura que gran parte de su labor consiste en hacer “charlas de conciencia ambiental”, monitorear las reservas y explicar a los visitantes por qué no pueden ingresar a ciertas zonas sensibles del ecosistema, como los valles de frailejones. “No falta el que quiere ir a meterse a tocar al frailejón y moverlo”, dice. Por eso, cada recorrido al páramo se hace acompañado por integrantes de la comunidad que buscan enseñar, controlar y proteger un territorio que durante décadas permaneció aislado y atravesado por distintas formas de violencia.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            La montaña atravesada por la guerra
          </h2>

          <p>
            La historia reciente de Tenerife estuvo marcada durante décadas por el conflicto armado y por la presencia de las Farc-EP en parte del páramo y el cañón de Las Hermosas. Según la Comisión de la Verdad, esta zona montañosa se consolidó como un corredor estratégico que conecta Cauca, Valle del Cauca, Huila y Tolima, convirtiéndose en un territorio clave para la movilidad y permanencia de actores armados en medio de la guerra.
          </p>

          <p>
            La llegada de las Farc-EP a Tenerife ocurrió en la primera mitad de la década de 1980, en medio de la expansión territorial impulsada por la organización guerrillera. Inicialmente, la presencia armada se instaló a través de pequeños grupos del Sexto Frente que buscaban consolidar apoyo social y político en una región caracterizada por la limitada presencia estatal y por las dificultades históricas de conexión con el resto del departamento. Con el paso de los años, la guerrilla terminó integrándose en la vida cotidiana de la montaña, ocupando funciones que tradicionalmente correspondían al Estado.
          </p>

          <p>
            Entre las décadas de 1980 y 1990, las Farc-EP regularon distintos aspectos de la vida comunitaria en Tenerife. Mediaban conflictos entre vecinos, intervenían en disputas familiares y laborales y ejercían control sobre parte de la economía local, especialmente alrededor de la producción de cebolla junca. La presencia guerrillera también se sostuvo a partir de mecanismos de control territorial y regulación social que transformaron las dinámicas de convivencia en la zona. Para muchos habitantes, convivir con la guerra se convirtió en una forma cotidiana de supervivencia resumida en una expresión repetida por la comunidad:
          </p>

          <div className="my-12 p-8 bg-[var(--color-paramo-green)]/5 border-l-4 border-[var(--color-paramo-moss)] rounded-r-xl space-y-4">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-paramo-green)] italic font-medium leading-relaxed">
              "Llevemos la fiesta en paz."
            </p>
            <span className="block text-xs uppercase tracking-widest text-[var(--color-paramo-moss)]">— Expresión repetida por la comunidad bajo el control armado</span>
          </div>

          <p>
            Sin embargo, a finales de los años noventa el conflicto se intensificó. En 1998, un ataque de las Farc-EP destruyó la estación de Policía del corregimiento y dejó varios agentes muertos, eliminando uno de los pocos referentes institucionales presentes en Tenerife. A partir de entonces aumentaron los controles armados, las restricciones de movilidad y los asesinatos selectivos contra personas señaladas de colaborar con otros actores armados. El miedo empezó a instalarse con mayor fuerza en la vida diaria de la población.
          </p>

          <p>
            La violencia escaló aún más en 2001 con la incursión del Bloque Calima de las Autodefensas Unidas de Colombia (AUC), que ingresó a Tenerife en busca de mandos guerrilleros que operaban en el corredor de Las Hermosas. Los enfrentamientos entre paramilitares y las Farc-EP provocaron el desplazamiento masivo de habitantes hacia Palmira y profundizaron la crisis humanitaria en la montaña. Durante los años siguientes, y en medio de la política de Seguridad Democrática impulsada por el gobierno nacional, el territorio quedó atrapado entre operaciones militares, combates y acciones armadas que deterioraron aún más las condiciones de vida de las comunidades campesinas.
          </p>

          <p>
            Hacia finales de la década del 2000, la estructura guerrillera en Tenerife comenzó a debilitarse progresivamente como resultado de la presión militar y de la fragmentación de sus redes en la zona. Años después, con la firma del Acuerdo de Paz entre el Estado colombiano y las Farc en 2016, parte de la presencia armada que durante décadas condicionó la vida cotidiana de la población comenzó a replegarse, abriendo lentamente espacio a nuevas formas de relacionarse con el territorio desde la memoria, la conservación ambiental y el turismo comunitario.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            Páramo, conservación y turismo comunitario
          </h2>

          <p>
            Declarado Parque Nacional Natural en 1977, Las Hermosas se extiende entre Valle del Cauca y Tolima a lo largo de más de 120 mil hectáreas de ecosistemas de alta montaña. El parque, que hace parte del complejo de páramos de la cordillera Central, alberga más de 400 lagunas y especies como el oso de anteojos, la danta de montaña, el pato andino y el periquito de los nevados. Desde estas montañas nacen varios de los afluentes hídricos que abastecen municipios de ambos departamentos y sostienen actividades agrícolas y energéticas de la región, razón por la que el páramo ha sido considerado uno de los ecosistemas estratégicos más importantes del suroccidente del país. Sus características naturales, la biodiversidad de alta montaña y los paisajes que atraviesan la cordillera también lo han convertido en un territorio propicio para el desarrollo de iniciativas de turismo de naturaleza, conservación ambiental y proyectos comunitarios alrededor del cuidado del ecosistema.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 relative">
              <img 
                src="/images/articulo/gallery-1.jpg" 
                alt="Frailejones en la niebla" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
                Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
              </div>
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-[var(--color-paramo-bone)]/10 relative">
              <img 
                src="/images/articulo/gallery-2.jpg" 
                alt="Agua pura del páramo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm">
                Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
              </div>
            </div>
          </div>

          <p>
            En este nuevo escenario de posconflicto empezaron a fortalecerse distintos procesos de restauración ecológica, turismo de naturaleza y conservación ambiental impulsados por comunidades rurales, organizaciones ambientales e instituciones nacionales e internacionales. En Las Hermosas surgieron proyectos enfocados en la recuperación de páramos, viveros comunitarios, reconversión productiva y formación ambiental que buscaban vincular a los habitantes de la montaña con el cuidado del ecosistema.
          </p>

          <p>
            En la zona rural de El Cerrito, una de esas apuestas fue el Corredor Turístico de la Montaña, un proyecto de turismo de naturaleza y desarrollo local sostenible impulsado por alianzas entre organizaciones comunitarias y entidades como la Universidad Autónoma de Occidente, la Corporación Autónoma Regional del Valle del Cauca, la Agencia de los Estados Unidos para el Desarrollo Internacional, el Instituto Humboldt y la asociación comunitaria ASOPALM. El proyecto buscó fortalecer iniciativas de turismo de naturaleza en sectores como el Páramo de las Domínguez, Pan de Azúcar y Valle Bonito a través de procesos de formación en guianza ambiental, avistamiento de aves, sostenibilidad y promoción turística para habitantes y emprendimientos locales.
          </p>

          <p>
            La iniciativa también impulsó la construcción de una identidad turística para la montaña mediante campañas digitales, material audiovisual y espacios de formación con estudiantes, guías y comunidades rurales del corregimiento de Tenerife. Todo esto con la idea de consolidar el turismo como una herramienta de desarrollo local sostenible y una alternativa para las comunidades que habitan alrededor del páramo.
          </p>

          <p>
            En medio de ese proceso surgió años después Cuidemos el Páramo Tenerife, retomando esa apuesta por la conservación ambiental, el trabajo comunitario y la protección del ecosistema de alta montaña desde iniciativas de reforestación, monitoreo ambiental y turismo responsable lideradas por habitantes del territorio.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] font-bold pt-6 border-l-4 border-[var(--color-paramo-moss)] pl-4">
            Sombras de Guerra
          </h2>

          <p>
            Sin embargo, mientras las comunidades de Tenerife intentan reconstruir su relación con la montaña a través de procesos de conservación y turismo comunitario, la guerra sigue apareciendo en la vida cotidiana del territorio. Ya no solamente permanece en los recuerdos de quienes crecieron en medio de retenes, enfrentamientos y presencia guerrillera, sino también en hechos recientes que demuestran que la violencia todavía no desaparece del todo de la cordillera.
          </p>

          <p>
            El pasado 8 de marzo de 2026, integrantes de la estructura Adán Izquierdo, perteneciente a las disidencias de las Farc, se enfrentaron con tropas del Ejército que custodiaban un puesto de votación en el corregimiento de Tenerife durante la jornada electoral. Aunque el hecho no dejó personas heridas y las autoridades lograron controlar la situación, el enfrentamiento volvió a poner sobre la mesa una realidad que en la montaña sigue siendo imposible de ignorar: el conflicto continúa presente, incluso en medio de los intentos de construir otros caminos para el territorio.
          </p>

          <p>
            Lo ocurrido hace apenas unos meses contrasta con las escenas que hoy también hacen parte de Tenerife. Mientras algunos habitantes suben al páramo para sembrar frailejones, limpiar senderos, monitorear fauna o acompañar recorridos ambientales, otros todavía viven con la incertidumbre de que la violencia pueda volver a alterar la tranquilidad de la montaña. Aun así, la comunidad insiste en quedarse, en cuidar el páramo y en defender una idea distinta de su territorio: una en la que Tenerife pueda ser reconocido más por el agua, los frailejones y el trabajo colectivo de sus habitantes que por la guerra que durante décadas marcó su historia.
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
