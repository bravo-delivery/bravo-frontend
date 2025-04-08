import Link from "next/link";
import { useRef, useLayoutEffect } from "react";

interface MenuItemMobProps {
  currentCategory: string;
  category: { title: string; url: string; order: number };
}

export default function MenuItemMob({
  currentCategory,
  category,
}: MenuItemMobProps) {
  const itemRef = useRef<HTMLLIElement>(null);

  useLayoutEffect(() => {
    if (category.url === currentCategory && itemRef.current) {
      const item = itemRef.current;
      const itemRect = item.getBoundingClientRect();
      const container = item.parentElement; // Отримуємо контейнер <ul>
      const containerRect = container?.getBoundingClientRect();

      if (containerRect) {
        // Перевіряємо, чи елемент повністю видимий у контейнері
        if (
          itemRect.left < containerRect.left ||
          itemRect.right > containerRect.right
        ) {
          // Якщо не видимий, прокручуємо до нього
          item.scrollIntoView({
            inline: "center",
            block: "nearest",
          });
        }
      }
    }
  }, [currentCategory, category.url]);

  return (
    <li
      ref={itemRef}
      className={`px-6 py-[15px] rounded-full border active:scale-95 transition duration-300 ease-in-out ${
        category.url === currentCategory
          ? "text-white border-green bg-green"
          : "text-black border-black bg-white"
      }`}
    >
      <Link
        href={`/menu/${category?.url}`}
        scroll={false}
        className="block whitespace-nowrap"
      >
        {category.title}
      </Link>
    </li>
  );
}
