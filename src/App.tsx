import { useEffect } from "react";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ServicesOverviewSection } from "./components/ServicesOverviewSection";
import { IncludesSection } from "./components/IncludesSection";
import { StepsSection } from "./components/StepsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      .matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    ).filter((section) => section.id !== "inicio");

    if (reduceMotion) {
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
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 text-[15px] antialiased md:text-[16px]">
      <ScrollProgressBar />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemsSection />
        <ServicesSection />
        <ServicesOverviewSection />
        <IncludesSection />
        <StepsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
