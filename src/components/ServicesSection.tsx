import React from "react";
import { Rocket, RefreshCw, BriefcaseBusiness } from "lucide-react";

const services = [
  {
    title: "Sitios web a medida",
    description: "Landing pages y sitios corporativos orientados a conversión, pensados para mostrar tu propuesta de valor con claridad.",
    pill: "Ideal para emprendedores y pymes",
    icon: <Rocket size={24} />
  },
  {
    title: "Optimización y modernización",
    description: "Tomo tu sitio actual y lo renuevo con mejor performance, diseño responsive y buenas prácticas de UX/UI.",
    pill: "Rediseño y performance",
    icon: <RefreshCw size={24} />
  },
  {
    title: "Asesoría tech para negocios",
    description: "Te acompaño a definir la mejor estrategia digital: qué construir, con qué herramientas y cómo medir resultados.",
    pill: "Trusted Advisor",
    icon: <BriefcaseBusiness size={24} />
  }
];

export const ServicesSection: React.FC = () => {
  return (
    // Fondo oscuro con padding generoso para respirar
    <section id="servicios" className="bg-slate-900 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            ¿En qué te ayuda NexoSync?
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Unimos diseño, desarrollo y enfoque de negocio para que tu presencia
            online trabaje todos los días por vos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              // Tarjetas con fondo ligeramente más claro que el section para resaltar
              className="group flex flex-col justify-between rounded-[2rem] border border-slate-700/50 bg-slate-800/50 p-8 transition-all hover:bg-slate-800"
            >
              <div>
                <div className="mb-6 inline-flex rounded-2xl bg-sky-500/10 p-4 text-sky-400">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full bg-slate-700/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                    {service.pill}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
