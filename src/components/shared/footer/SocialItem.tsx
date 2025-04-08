import Link from "next/link";
import { ReactNode } from "react";

interface SocialItemProps {
  social: { link: string; icon: ReactNode };
}

export default function SocialItem({ social }: SocialItemProps) {
  const { link, icon } = social;
  return (
    <li>
      <Link
        href={link}
        className="text-white transition duration-300 ease-in-out active:text-green focus-visible:text-green
         lg:hover:text-green"
      >
        {icon}
      </Link>
    </li>
  );
}
