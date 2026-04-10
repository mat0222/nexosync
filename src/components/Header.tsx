import { useEffect, useState } from "react";
import { Linkedin, MessageCircle } from "lucide-react";

type NavLink = {
  id: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "¿Quiénes somos?" },
  { id: "servicios-completos", label: "Servicios" },
  { id: "paso-a-paso", label: "Paso a paso" },
  { id: "testimonios", label: "Clientes" },
  { id: "contacto", label: "Contacto" },
];

/** Misma línea que el formulario de contacto */
const WHATSAPP_CHAT_URL = "https://wa.me/5493573414204";

/** Reemplazá por tu perfil de LinkedIn cuando lo tengas */
const LINKEDIN_URL = "https://www.linkedin.com";

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-end gap-5 sm:gap-6 ${className}`}
    >
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-[13px] font-medium text-slate-800 transition-colors hover:text-sky-700"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white transition-colors group-hover:bg-sky-700">
          <Linkedin size={18} strokeWidth={2.25} aria-hidden />
        </span>
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a
        href={WHATSAPP_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-[13px] font-medium text-slate-800 transition-colors hover:text-emerald-600"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 transition-transform group-hover:scale-105">
          <MessageCircle size={18} strokeWidth={2.25} aria-hidden />
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export const Header = () => {
  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).id;
          setActiveId(id);
        }
      },
      {
        threshold: [0.12, 0.25, 0.45],
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white shadow-sm shadow-slate-200/40">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-4 xl:px-14">
        {/* Fila móvil: logo | redes — en desktop solo logo aquí */}
        <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-start lg:shrink-0">
          <a
            href="#inicio"
            className="flex shrink-0 items-center"
            aria-label="NexoSync — ir al inicio"
            onClick={() => {
              setActiveId("inicio");
              document.getElementById("inicio")?.classList.add("reveal--in");
            }}
          >
            <img
              src="/logog.png"
              alt="NexoSync — Impulsando tu negocio local"
              className="h-16 w-auto object-contain object-left sm:h-20 md:h-24 lg:h-28 xl:h-[7.75rem] max-w-[min(92vw,400px)] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px]"
            />
          </a>
          <SocialLinks className="lg:hidden" />
        </div>

        {/* Centro: enlaces con | como en la referencia */}
        <nav
          className="flex flex-wrap items-center justify-center gap-y-2 lg:flex-1 lg:justify-center lg:gap-0"
          aria-label="Navegación principal"
        >
          {navLinks.map((link, index) => {
            const isActive = activeId === link.id;
            return (
              <span key={link.id} className="inline-flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-1.5 text-slate-300 select-none sm:mx-2.5 md:mx-3.5"
                    aria-hidden
                  >
                    |
                  </span>
                ) : null}
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveId(link.id);
                    document.getElementById(link.id)?.classList.add("reveal--in");
                  }}
                  className={[
                    "whitespace-nowrap px-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors sm:text-[11px] md:text-xs md:tracking-[0.16em]",
                    isActive
                      ? "text-sky-700 underline decoration-2 decoration-sky-600 underline-offset-[6px]"
                      : "text-slate-800 hover:text-sky-700",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              </span>
            );
          })}
        </nav>

        {/* Desktop: redes a la derecha */}
        <SocialLinks className="hidden shrink-0 lg:flex xl:min-w-[220px]" />
      </div>
    </header>
  );
};
