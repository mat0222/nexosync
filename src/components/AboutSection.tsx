import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        
        {/* Columna de Texto */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
              Quiénes somos
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl leading-tight">
              Soy Mateo, el nexo entre tu negocio y la web.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              En NexoSync ayudo a emprendedores y empresas a transformar ideas en
              sitios web claros, modernos y alineados con objetivos reales de
              negocio. Me enfoco en entender tu propuesta de valor y traducirla en
              una experiencia digital que genere confianza y resultados.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Trabajo con un proceso simple: escucho tu contexto, proponemos una
              solución concreta y te acompaño desde el diseño hasta el lanzamiento,
              incluyendo soporte y mejora continua.
            </p>
          </div>

        </div>

        {/* Columna de Imagen / Tarjeta */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          {/* Círculos de fondo decorativos */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-slate-50 rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-transform hover:rotate-6"></div>
          
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-800 shadow-2xl">
            <img
              src="/perfil.jpeg"
              alt="Mateo, fundador de NexoSync"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 pt-32">
              <h3 className="text-xl font-bold text-white">Mateo</h3>
              <p className="text-sky-400 font-medium mb-2">Fundador de NexoSync</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Desarrollador web y aliado digital de tu negocio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

