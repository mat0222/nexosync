import { useEffect, useState } from "react";
import { Linkedin, MessageCircle } from "lucide-react";

type NavLink = {
  id: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "problemas", label: "Por qué" },
  { id: "servicios-completos", label: "Servicios" },
  { id: "paso-a-paso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
];

const WHATSAPP_CHAT_URL = "https://wa.me/5493573414204";
const LINKEDIN_URL = "https://www.linkedin.com";

export const Header = () => {
  const [activeId, setActiveId] = useState<string>("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (visible.length > 0) {
          setActiveId((visible[0].target as HTMLElement).id);
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

  const goTo = (id: string) => {
    setActiveId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
          scrolled ? "px-3 pt-0 sm:px-6 md:px-8" : "px-0 pt-0",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex items-center justify-between gap-4 transition-all duration-300 ease-out",
            scrolled
              ? "mt-[3px] w-full max-w-5xl rounded-b-[1.75rem] bg-slate-950 px-5 py-3.5 shadow-lg shadow-slate-900/30 sm:px-7 sm:py-4 md:rounded-b-[2rem] md:px-8"
              : "max-w-7xl bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-10 lg:py-3.5",
          ].join(" ")}
        >
          <a
            href="#inicio"
            className="flex shrink-0 items-center"
            aria-label="NexoSync — ir al inicio"
            onClick={() => goTo("inicio")}
          >
            <img
              src="/logo-nav.png"
              alt="NexoSync — Impulsando tu negocio local"
              className={[
                "w-auto object-contain object-left transition-all duration-300",
                scrolled
                  ? "h-11 sm:h-12 md:h-14 max-w-[min(58vw,320px)]"
                  : "h-12 sm:h-14 md:h-16 lg:h-[4.5rem] max-w-[min(65vw,380px)]",
              ].join(" ")}
            />
          </a>

          {/* Nav completo solo arriba (desktop) */}
          {!scrolled ? (
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navegación principal"
            >
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => goTo(link.id)}
                    className={[
                      "rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      isActive
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-700 hover:text-sky-700",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          ) : null}

          <div className="flex items-center gap-2.5 sm:gap-3">
            {!scrolled ? (
              <div className="hidden items-center gap-3 sm:flex">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-white transition-colors hover:bg-sky-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} strokeWidth={2.25} aria-hidden />
                </a>
                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white transition-transform hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} strokeWidth={2.25} aria-hidden />
                </a>
              </div>
            ) : null}

            <a
              href="#contacto"
              onClick={() => goTo("contacto")}
              className={[
                "inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors sm:px-5 sm:py-2.5",
                scrolled
                  ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                  : "hidden bg-sky-600 text-white shadow-md shadow-sky-500/30 hover:bg-sky-700 md:inline-flex",
              ].join(" ")}
            >
              Cotizar proyecto
            </a>

            <button
              type="button"
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:h-11 sm:w-11",
                scrolled
                  ? "border border-white/25 bg-slate-900 text-white hover:border-white/50"
                  : "border border-slate-200 text-slate-800 lg:hidden",
              ].join(" ")}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={[
                    "block h-0.5 w-4 rounded-full transition-transform sm:w-[1.125rem]",
                    scrolled ? "bg-white" : "bg-slate-800",
                    menuOpen ? "translate-y-[5px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-0.5 w-4 rounded-full transition-opacity sm:w-[1.125rem]",
                    scrolled ? "bg-white" : "bg-slate-800",
                    menuOpen ? "opacity-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block h-0.5 w-4 rounded-full transition-transform sm:w-[1.125rem]",
                    scrolled ? "bg-white" : "bg-slate-800",
                    menuOpen ? "-translate-y-[5px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Espaciador: el header es fixed */}
      <div
        className={
          scrolled
            ? "h-[5.75rem] sm:h-[6.5rem] md:h-[7rem]"
            : "h-[5.75rem] sm:h-[6.5rem] md:h-[7rem] lg:h-[8rem]"
        }
        aria-hidden
      />

      {/* Menú overlay */}
      {menuOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={[
              "relative z-10 mx-auto mt-[4.5rem] w-[min(100%-1.5rem,28rem)] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/40",
              scrolled ? "sm:mt-[5rem]" : "sm:mt-[5.5rem]",
            ].join(" ")}
          >
            <nav className="flex flex-col p-3" aria-label="Menú">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => goTo(link.id)}
                    className={[
                      "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-sky-500/15 text-sky-300"
                        : "text-slate-200 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contacto"
                onClick={() => goTo("contacto")}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-950 hover:bg-sky-300"
              >
                Cotizar proyecto
              </a>
              <div className="mt-3 flex items-center gap-3 border-t border-white/10 px-2 pt-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-sky-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} strokeWidth={2.25} aria-hidden />
                </a>
                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} strokeWidth={2.25} aria-hidden />
                </a>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
};
