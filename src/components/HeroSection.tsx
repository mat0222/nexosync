import React from "react";

const stats = [
  { value: "+20", label: "Proyectos en marcha" },
  { value: "100%", label: "Enfoque en conversión" },
  { value: "24h", label: "Respuesta habitual" },
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 20%, rgb(14 165 233 / 0.12), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 10%, rgb(11 121 208 / 0.1), transparent 50%), linear-gradient(180deg, #f8fafc 0%, #e2e8f0 55%, #f1f5f9 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(148 163 184 / 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(180deg, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-20 lg:px-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600">
            Desarrollo web · Córdoba
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Sitios web para negocios{" "}
            <span className="text-sky-600">que quieren crecer.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            En NexoSync creamos páginas profesionales con estrategia, diseño,
            desarrollo y soporte. Todo el proceso claro, de principio a fin.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-sky-500/35 transition-colors hover:bg-sky-700"
            >
              Hablemos de tu proyecto
            </a>
            <a
              href="#servicios-completos"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white/70 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 backdrop-blur-sm transition-colors hover:border-sky-500 hover:text-sky-700"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-300/60 pt-8 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
