import { IconProps } from "@/types/iconProps";

export default function IconPlus({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="plus"
      className={className}
    >
      <line
        x1="0.5"
        y1="6.83331"
        x2="13.5"
        y2="6.83331"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <line
        x1="6.83301"
        y1="13.5"
        x2="6.83301"
        y2="0.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
