"use client";
import { useMenuStore } from "@/store/menuStore";
import MenuItemDesk from "./MenuItemDesk";
import { generateOrderNumber } from "@/utils/generateOrderNumber";
import { useState, useEffect } from "react";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface MenuNavigationDeskProps {
  currentCategory: string;
}

export default function MenuNavigationDesk({
  currentCategory,
}: MenuNavigationDeskProps) {
  const { categories } = useMenuStore((state) => state);
  const initialKey = generateOrderNumber();
  const [key, setKey] = useState(initialKey);

  useEffect(() => {
    const key = generateOrderNumber();
    setKey(key);
  }, [currentCategory]);

  if (!categories?.length) {
    return null;
  }

  const sortedCategories = [
    { title: "Всі страви", url: "all-dishes", order: 0 },
    ...categories,
  ].sort((a, b) => a.order - b.order);

  return (
    <nav className="hidden xl:block">
      <AnimatedWrapper
        as="ul"
        key={key}
        animation={fadeInAnimation({ y: 30 })}
        className="flex flex-col gap-y-3"
      >
        {sortedCategories.map((category, idx) => (
          <MenuItemDesk
            key={idx}
            currentCategory={currentCategory}
            category={category}
          />
        ))}
      </AnimatedWrapper>
    </nav>
  );
}
