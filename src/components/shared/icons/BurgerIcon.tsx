import { IconProps } from "../../../types/iconProps";

export default function BurgerIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="burger menu icon"
      className={className}
    >
      <path
        d="M6.66638 30H33.333M6.66638 10H33.333H6.66638ZM6.66638 20H33.333H6.66638Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
