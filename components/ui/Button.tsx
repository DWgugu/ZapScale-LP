import { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly onClick?: () => void;
  readonly isAnimated?: boolean;
  readonly href?: string;
}

export default function Button({
  children,
  className = "",
  onClick,
  isAnimated = false,
  href,
}: ButtonProps) {
  const baseClasses = "cursor-pointer px-6 py-3 rounded-sm font-semibold transition shadow-md hover:shadow-xl text-center";
  const classes = [
    baseClasses,
    isAnimated && "animate-float-soft",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`block ${classes}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}