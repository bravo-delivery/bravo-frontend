import { ButtonProps } from "@/types/buttonProps";
import IconLoader from "../icons/IconLoader";

export default function GreenButton({
  children,
  className = "",
  disabled = false,
  isLoading = false,
  id,
  onClick,
}: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden flex items-center justify-center px-4 leading-[130%] rounded-full 
        bg-green text-white transition duration-300 ease-out enabled:active:scale-95 lg:enabled:hover:brightness-125 
        enabled:focus-visible:brightness-125 disabled:bg-green/50 disabled:text-white/50
      
   ${className}`}
    >
      {children}
      {isLoading ? <IconLoader /> : ""}
    </button>
  );
}
