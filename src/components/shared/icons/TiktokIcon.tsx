import { IconProps } from "../../../types/iconProps";

export default function TiktokIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="tiktok icon"
      className={`${className} w-10 md:w-7 h-auto`}
    >
      <path
        d="M27.6666 9.7C26.5276 8.39921 25.8998 6.729 25.9 5H20.75V25.6667C20.7111 26.7853 20.2392 27.8451 19.4338 28.6225C18.6284 29.3999 17.5526 29.834 16.4333 29.8333C14.0666 29.8333 12.1 27.9 12.1 25.5C12.1 22.6333 14.8666 20.4833 17.7166 21.3667V16.1C11.9666 15.3333 6.93329 19.8 6.93329 25.5C6.93329 31.05 11.5333 35 16.4166 35C21.65 35 25.9 30.75 25.9 25.5V15.0167C27.9883 16.5164 30.4956 17.3211 33.0666 17.3167V12.1667C33.0666 12.1667 29.9333 12.3167 27.6666 9.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
