"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const sections = ["inicio", "funcoes", "planos"];

export default function Header() {
  const [active, setActive] = useState("inicio");

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

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 px-32 flex items-center justify-between">
        
      <Image src="/zapscale-logo-default.png" alt="Logo" width={100} height={100} />
      <nav className="h-16 flex items-center justify-between">
        <ul className="flex items-center text-sm uppercase tracking-widest text-gray-400">

            <li>
                <a
                href="#inicio"
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

            <li>
                <a
                href="#planos"
                className={`px-4 py-2 transition-colors ${
                    active === "planos"
                    ? "text-white border-b-2 border-zapscale-primary"
                    : "hover:text-white"
                }`}
                >
                PLANOS
                </a>
            </li>

        </ul>

      </nav>
      <div>
        <Button className="bg-gradient-to-br from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-[10px] px-12">
            ASSINE O ZAPSCALE
        </Button>
      </div>
    </header>
  );
}