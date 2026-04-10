import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AboutSection } from "./components/AboutSection";
import { ServicesOverviewSection } from "./components/ServicesOverviewSection";
import { StepsSection } from "./components/StepsSection";

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      .matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    if (reduceMotion) {
      // Evita animaciones si el usuario pidió menos movimiento
      sections.forEach((section) => section.classList.add("reveal--in"));
      return;
    }

    sections.forEach((section) => {
      section.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("reveal--in");
          obs.unobserve(el);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 text-[15px] md:text-[16px]">
      <Header />
      <main className="pb-16">
        <HeroSection />
        <section className="mt-16 w-full px-6 md:px-12 lg:px-20">
          <AboutSection />
        </section>
        <section className="mt-16 w-full px-6 md:px-12 lg:px-20">
          <ServicesSection />
        </section>
        <section className="mt-20 w-full px-6 md:px-12 lg:px-20">
          <ServicesOverviewSection />
        </section>
        <section className="mt-20 w-full px-6 md:px-12 lg:px-20">
          <StepsSection />
        </section>
        <section className="mt-20 w-full px-6 md:px-12 lg:px-20">
          <TestimonialsSection />
        </section>
        <section className="mt-20 w-full px-6 md:px-12 lg:px-20">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
