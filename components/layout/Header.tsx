"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const sections = ["inicio", "funcoes", "planos", "como-funciona"];

const navItems = [
  { id: "inicio", label: "INÍCIO" },
  { id: "funcoes", label: "FUNÇÕES" },
  { id: "planos", label: "PLANOS" },
  { id: "como-funciona", label: "COMO FUNCIONA" },
];

export default function Header() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Bloquear scroll do body quando menu mobile estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (id: string) =>
    `block px-4 py-3 transition-colors text-lg ${
      active === id
        ? "text-white border-l-4 border-zapscale-primary pl-3"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 px-4 md:px-32 flex items-center justify-between h-16">
      {/* Desktop: nav centralizada */}
      <div className="hidden lg:block flex-1" aria-hidden />
      <nav className="hidden lg:flex h-16 items-center justify-center flex-shrink-0">
        <ul className="flex items-center text-sm uppercase tracking-widest text-gray-400">
          <li>
            <a
              href="#inicio"
              onClick={(e) => handleScrollTo(e, "inicio")}
              className={`px-4 py-2 transition-colors ${
                active === "inicio"
                  ? "text-white border-b-2 border-zapscale-primary"
                  : "hover:text-white"
              }`}
            >
              INÍCIO
            </a>
          </li>
          <li className="text-gray-600">|</li>
          <li>
            <a
              href="#funcoes"
              onClick={(e) => handleScrollTo(e, "funcoes")}
              className={`px-4 py-2 transition-colors ${
                active === "funcoes"
                  ? "text-white border-b-2 border-zapscale-primary"
                  : "hover:text-white"
              }`}
            >
              FUNÇÕES
            </a>
          </li>
          <li className="text-gray-600">|</li>
          <Image src="/zapscale-logo-default.png" alt="Logo" width={120} height={120} />
          <li className="text-gray-600">|</li>
          <li>
            <a
              href="#planos"
              onClick={(e) => handleScrollTo(e, "planos")}
              className={`px-4 py-2 transition-colors ${
                active === "planos"
                  ? "text-white border-b-2 border-zapscale-primary"
                  : "hover:text-white"
              }`}
            >
              PLANOS
            </a>
          </li>
          <li className="text-gray-600">|</li>
          <li>
            <a
              href="#como-funciona"
              onClick={(e) => handleScrollTo(e, "como-funciona")}
              className={`px-4 py-2 transition-colors ${
                active === "como-funciona"
                  ? "text-white border-b-2 border-zapscale-primary"
                  : "hover:text-white"
              }`}
            >
              COMO FUNCIONA
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile: logo + hamburger */}
      <div className="flex lg:hidden items-center justify-between w-full">
        <Image src="/zapscale-logo-default.png" alt="Logo" width={80} height={80} className="object-contain" />
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop: CTA (espacinho à direita para centralizar a nav) */}
      <div className="hidden lg:flex flex-1 justify-end">
        <Button className="bg-gradient-to-br from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-[10px] px-12">
          ASSINE O ZAPSCALE
        </Button>
      </div>

      {/* Overlay do menu mobile */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Painel do menu mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-black border-l border-gray-800 z-50 lg:hidden flex flex-col pt-20 px-6 transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 uppercase tracking-widest">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollTo(e, id)}
              className={linkClass(id)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <Button
            className="w-full bg-gradient-to-br from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-sm py-3"
            onClick={() => setMenuOpen(false)}
          >
            ASSINE O ZAPSCALE
          </Button>
        </div>
      </div>
    </header>
  );
}