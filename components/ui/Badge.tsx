interface BadgeProps {
    text: string;
    className?: string;
  }
  
  export const Badge = ({ text, className }: BadgeProps) => {
    return (
      <div
        className={`
          inline-flex
          items-center
          gap-2
          bg-gray-100
          hover:bg-gray-200
          transition
          px-3
          py-2
          rounded-full
          shadow-sm
          ${className}
        `}
      >
        <span className="text-gray-700 text-xs font-semibold">
          {text}
        </span>
      </div>
    );
  }