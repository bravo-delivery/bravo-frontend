import { ButtonProps } from "@/types/buttonProps";

export default function MainButton({
  children,
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden flex items-center justify-center py-4 px-4 text-16med leading-[130%] rounded-full 
        bg-white disabled:bg-white/90 disabled:text-black/40 transition duration-300 ease-out enabled:active:scale-95      
   ${className}`}
    >
      <span
        className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/20 via-green/30 to-white/20 opacity-70 
skew-x-[-40deg] xl:group-enabled:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      {children}
    </button>
  );
}
