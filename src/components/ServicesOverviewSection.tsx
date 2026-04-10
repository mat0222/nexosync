import React from "react";
import { Server, Wrench, PenTool, CheckCircle2 } from "lucide-react";

const offerings = [
  {
    title: "Hosting administrado",
    description: "Nos ocupamos de la infraestructura para que tu sitio esté siempre online, rápido y seguro.",
    icon: <Server size={28} className="text-indigo-500" />,
    items: ["Configuración inicial", "Certificado SSL incluido", "Monitoreo de uptime"]
  },
  {
    title: "Mantenimiento y soporte",
    description: "Actualizaciones, pequeños cambios y mejoras continuas para que tu web no quede obsoleta.",
    icon: <Wrench size={28} className="text-amber-500" />,
    items: ["Corrección de errores (Bugs)", "Ajustes de contenido", "Backups periódicos"]
  },
  {
    title: "Creación desde cero",
    description: "Definición, diseño y desarrollo de páginas 100% alineadas a tus objetivos comerciales.",
    icon: <PenTool size={28} className="text-rose-500" />,
    items: ["Briefing y propuesta UX", "Diseño responsivo (Mobile First)", "Implementación en producción"]
  }
];

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section id="servicios-completos" className="bg-slate-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-16">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Tranquilidad garantizada
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Más que una web, un servicio completo.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Te acompaño desde la idea inicial hasta el mantenimiento técnico, para que tu 
            única preocupación sea atender a los clientes que llegan por la página.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offerings.map((offering) => (
            <article
              key={offering.title}
              className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40 border border-slate-100"
            >
              {/* Un pequeño resplandor de fondo detrás del ícono */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-slate-50 opacity-50 blur-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="inline-block rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  {offering.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {offering.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {offering.description}
                  </p>
                </div>
              </div>

              <ul className="relative z-10 mt-8 space-y-3 border-t border-slate-100 pt-6">
                {offering.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

