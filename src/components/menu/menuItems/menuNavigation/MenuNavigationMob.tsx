"use client";
import { generateOrderNumber } from "@/utils/generateOrderNumber";
import { useState, useEffect } from "react";
import { useMenuStore } from "@/store/menuStore";
import MenuItemMob from "./MenuItemMob";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface MenuNavigationMobProps {
  currentCategory: string;
}

export default function MenuNavigationMob({
  currentCategory,
}: MenuNavigationMobProps) {
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
    <AnimatedWrapper
      as="nav"
      key={key}
      animation={fadeInAnimation({ y: 30 })}
      className="xl:hidden pl-[30px] pb-4 xs:ml-[calc((100vw-460px-60px)/2)] sm:ml-[calc((100vw-580px-60px)/2)] 
      md:ml-[calc((100vw-708px-60px)/2)] lg:ml-[calc((100vw-964px-60px)/2)] overflow-x-auto 
      scrollbar scrollbar-h-[2px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-transparent 
      scrollbar-track-transparent"
    >
      <ul className="flex gap-x-2">
        {sortedCategories.map((category, idx) => (
          <MenuItemMob
            category={category}
            currentCategory={currentCategory}
            key={idx}
          />
        ))}
      </ul>
    </AnimatedWrapper>
  );
}
