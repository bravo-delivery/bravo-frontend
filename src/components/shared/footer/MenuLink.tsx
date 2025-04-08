import Link from "next/link";

interface MenuLinkProps {
  menuItem: {
    title: string;
    link: string;
  };

  className?: string;
}

export default function MenuLink({
  menuItem,

  className = "",
}: MenuLinkProps) {
  const { title, link } = menuItem;

  return (
    <li className={`text-14reg md:text-16reg leading-[120%] ${className}`}>
      <Link
        href={link}
        className={`text-white transition duration-300 ease-in-out active:text-green focus-visible:text-green
         lg:hover:text-green`}
      >
        {title}
      </Link>
    </li>
  );
}
