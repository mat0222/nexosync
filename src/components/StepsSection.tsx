import React from "react";
import {
  ClipboardCheck,
  MessagesSquare,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";

type StepTheme = {
  borderTop: string;
  numberBg: string;
  iconWrap: string;
  iconClass: string;
  lineColor: string;
  ring?: string;
};

const steps: {
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: StepTheme;
}[] = [
  {
    title: "Charlamos y definimos tu objetivo",
    description:
      "Analizo tu negocio, tu propuesta de valor y el público al que querés llegar. La idea es traducir lo que hacés en un mensaje claro.",
    icon: <MessagesSquare size={24} strokeWidth={2} />,
    theme: {
      borderTop: "border-t-[4px] border-t-sky-500",
      numberBg: "bg-sky-500 text-white",
      iconWrap: "bg-sky-100",
      iconClass: "text-sky-600",
      lineColor: "#0ea5e9",
    },
  },
  {
    title: "Propuesta + estructura de la web",
    description:
      "Te presento el mapa de secciones, un enfoque por conversión y los textos guía para que el sitio tenga un recorrido lógico.",
    icon: <ClipboardCheck size={24} strokeWidth={2} />,
    theme: {
      borderTop: "border-t-[4px] border-t-emerald-500",
      numberBg: "bg-emerald-500 text-white",
      iconWrap: "bg-emerald-100",
      iconClass: "text-emerald-600",
      lineColor: "#10b981",
    },
  },
  {
    title: "Diseño profesional (responsive y moderno)",
    description:
      "Diseño una interfaz elegante y rápida, adaptada a móvil. Se ajusta a tu marca y destaca lo importante.",
    icon: <Sparkles size={24} strokeWidth={2} />,
    theme: {
      borderTop: "border-t-[4px] border-t-amber-500",
      numberBg: "bg-amber-500 text-white",
      iconWrap: "bg-amber-100",
      iconClass: "text-amber-600",
      lineColor: "#f59e0b",
    },
  },
  {
    title: "Desarrollo y puesta a punto",
    description:
      "Implemento el sitio con buenas prácticas, performance y accesibilidad básica. Todo listo para publicar.",
    icon: <Wrench size={24} strokeWidth={2} />,
    theme: {
      borderTop: "border-t-[4px] border-t-violet-500",
      numberBg: "bg-violet-500 text-white",
      iconWrap: "bg-violet-100",
      iconClass: "text-violet-600",
      lineColor: "#8b5cf6",
    },
  },
  {
    title: "Publicación + acompañamiento",
    description:
      "Lanzamos y revisamos que todo funcione perfecto. Luego, soporte y mejoras para que tu web siga creciendo con vos.",
    icon: <Rocket size={24} strokeWidth={2} />,
    theme: {
      borderTop: "border-t-[4px] border-t-teal-500",
      numberBg: "bg-teal-500 text-white",
      iconWrap: "bg-teal-100",
      iconClass: "text-teal-600",
      lineColor: "#14b8a6",
      ring: "ring-2 ring-teal-300/80 shadow-lg shadow-teal-500/15",
    },
  },
];

function StepsConnector() {
  /* Línea en zigzag: coincide con cimas (pasos 1,3,5) y valles (2,4) */
  return (
    <div
      className="pointer-events-none absolute inset-x-[4%] top-8 z-0 hidden h-44 lg:block xl:inset-x-[5%]"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1100 140"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="stepsLineGradient" x1="0" y1="0" x2="1100" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="22%" stopColor="#10b981" />
            <stop offset="44%" stopColor="#f59e0b" />
            <stop offset="66%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <path
          d="M 55 40 C 85 32 95 32 110 32 C 210 32 255 100 330 100 C 430 100 475 32 550 32 C 650 32 695 100 770 100 C 870 100 915 32 990 32 C 1030 32 1045 36 1065 40"
          stroke="url(#stepsLineGradient)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-90"
        />
        {[
          { cx: 330, cy: 100, fill: steps[1]?.theme.lineColor },
          { cx: 770, cy: 100, fill: steps[3]?.theme.lineColor },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={5}
            fill={dot.fill ?? "#94a3b8"}
            opacity={0.95}
          />
        ))}
      </svg>
    </div>
  );
}

export const StepsSection: React.FC = () => {
  return (
    <section
      id="paso-a-paso"
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50 py-20 md:py-28"
    >
      {/* Patrón geométrico muy suave */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(226 232 240 / 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(226 232 240 / 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-4 pb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600">
            Paso a paso
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Así obtenés tu web (sin vueltas)
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Un proceso claro, con decisiones simples y foco en resultados:
            claridad para tus clientes, confianza para tu marca y una web
            lista para convertir.
          </p>
        </div>

        <div className="relative lg:pb-24">
          <StepsConnector />

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-4 xl:gap-5">
            {steps.map((step, idx) => {
              const { theme } = step;
              return (
                <article
                  key={step.title}
                  className={[
                    "relative flex flex-col rounded-2xl border border-slate-200/90 bg-white px-5 pb-6 pt-0 shadow-md shadow-slate-200/50 transition-all duration-300 hover:z-20 hover:shadow-xl hover:ring-2 hover:ring-sky-200/40 lg:hover:scale-[1.03]",
                    /* Montaña: impares arriba, pares abajo (solo desktop 5 cols) */
                    "lg:odd:-translate-y-1 lg:even:translate-y-[5.5rem]",
                    theme.borderTop,
                    theme.ring ?? "",
                  ].join(" ")}
                >
                  <div className="-mt-px flex justify-center pt-5">
                    <span
                      className={[
                        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold shadow-sm",
                        theme.numberBg,
                      ].join(" ")}
                    >
                      {idx + 1}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <div
                      className={[
                        "flex h-14 w-14 items-center justify-center rounded-xl",
                        theme.iconWrap,
                        theme.iconClass,
                      ].join(" ")}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="mt-4 text-center text-base font-extrabold leading-snug text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:justify-end lg:pr-2">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-sky-500/35 transition-colors hover:bg-sky-700"
          >
            Agendar una reunión
          </a>
        </div>
      </div>
    </section>
  );
}
