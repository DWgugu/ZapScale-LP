"use client";

import { Check } from "lucide-react";
import Button from "./ui/Button";

interface PlanCardProps {
  title: string;
  price: string;
  subtitle?: string;
  description?: string;
  features: string[];
  highlight?: boolean;
  buttonText?: string;
  recommended?: boolean;
  targetLink?: string;
}

export const PlanCard = ({
  title,
  price,
  subtitle,
  description,
  features,
  highlight = false,
  buttonText = "COMEÇAR GRÁTIS",
  recommended = false,
  targetLink = "/",
}: PlanCardProps) => {
  return (
    <div className="relative w-full max-w-md">
      
      {/* Badge Recomendada */}
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="
            px-4 py-2
            rounded-full
            text-white
            font-semibold
            text-xs
            bg-gradient-to-r 
            from-[#33d6ca] 
            via-[#0abdb0] 
            to-[#089a8f]
            shadow-md
          ">
            Plano recomendado
          </div>
        </div>
      )}

      <div
        className={`
          rounded-2xl border
          ${recommended ? "bg-black" : "bg-white"}
          p-8
          shadow-sm
          transition-all
          hover:shadow-lg
          ${highlight ? "border-[#0abdb0]" : "border-gray-200"}
        `}
      >
        {/* Header */}
        <div className="mb-8">
          <p className={`text-lg ${recommended ? "text-white" : "text-gray-500"}`}>{title}</p>

          <h2 className={`text-5xl font-bold ${recommended ? "text-white" : "text-gray-900"} mt-4`}>
            {price}
          </h2>

          {subtitle && (
            <p className={`text-lg mt-2 ${recommended ? "text-white" : "text-gray-500"}`}>{subtitle}</p>
          )}
        </div>

        {description && (
          <p className={`text-center mt-6 ${recommended ? "text-white" : "text-gray-600"}`}>
            {description}
          </p>
        )}

        {/* Features */}
        <div className="mt-10 space-y-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 border-t pt-5 ${recommended ? "text-white" : "text-gray-800"}`}
            >
              <Check className="w-5 h-5 text-[#0abdb0] mt-1" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button href={targetLink} className="w-full mt-10 bg-gradient-to-r from-[#33d6ca] via-[#0abdb0] to-[#089a8f] text-white text-xs">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};