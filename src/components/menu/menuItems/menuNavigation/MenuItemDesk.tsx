import ArrowInCircleIcon from "@/components/shared/icons/ArrowinCircleIcon";
import Link from "next/link";

interface MenuItemDeskProps {
  currentCategory: string;
  category: { title: string; url: string; order: number };
}

export default function MenuItemDesk({
  currentCategory,
  category,
}: MenuItemDeskProps) {
  return (
    <li
      className={`group min-w-[270px] rounded-full border active:scale-[95%] xl:hover:border-green/80 xl:hover:bg-green/80
         focus-visible:bg-green/80 focus-visible:border-green/80 transition duration-300 ease-in-out ${
           category.url === currentCategory
             ? " border-green bg-green"
             : "border-black bg-white"
         }`}
    >
      <Link
        href={`/menu/${category?.url}`}
        className={`flex items-center justify-between px-6 py-2 ${
          category.url === currentCategory ? "text-white" : "text-black"
        } xl:group-hover:text-white xl:group-[focus-visible]:text-white transition duration-300 ease-in-out`}
      >
        {category?.title}
        <ArrowInCircleIcon className="w-[33px] h-auto" />
      </Link>
    </li>
  );
}
