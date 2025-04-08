import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface LogoProps {
  className: string;
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>>;
}

export default function Logo({ className, setIsHeaderMenuOpened }: LogoProps) {
  return (
    <Link
      href="/"
      className={`font-revival uppercase ${className}`}
      onClick={
        setIsHeaderMenuOpened ? () => setIsHeaderMenuOpened(false) : undefined
      }
    >
      Bravo
    </Link>
  );
}
