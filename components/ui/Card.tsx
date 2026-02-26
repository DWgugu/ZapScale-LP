interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }
  
  export const Card = ({ title, description, icon }: CardProps) => {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        
        {icon && <div className="w-12 h-12 rounded-full 
          bg-gradient-to-r from-[#33d6ca] via-[#0abdb0] to-[#089a8f]
          mb-6 flex items-center justify-center text-white font-bold">
          {icon}
        </div>}
  
        <h3 className="text-base font-bold text-[#1a1a1a]">
          {title}
        </h3>
  
        <p className="mt-1 text-[#1a1a1a90] font-semibold leading-relaxed text-sm tracking-tight">
          {description}
        </p>
  
      </div>
    );
  }