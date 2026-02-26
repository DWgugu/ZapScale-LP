"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div
        className={`
          rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg
          ${isOpen ? "bg-gradient-to-r from-[#33d6ca] via-[#0abdb0] to-[#089a8f] border-transparent" : "bg-black border-gray-800"}
        `}
      >

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-2 text-left cursor-pointer"
        >
          <span
            className={`
              text-base md:text-lg font-medium
              ${isOpen ? "text-white" : "text-gray-200"}
            `}
          >
            {title}
          </span>

          {isOpen ? (
            <Minus className="text-white w-5 h-5" />
          ) : (
            <Plus className="text-gray-400 w-5 h-5" />
          )}
        </button>

        <div
          className={`
            overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-96 opacity-100 px-6 pb-6" : "max-h-0 opacity-0"}
          `}
        >
          <div className="text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}