"use client";

import { useMenuStore } from "@/store/menuStore";
import MenuNavigationMob from "./menuItems/menuNavigation/MenuNavigationMob";
import MenuNavigationDesk from "./menuItems/menuNavigation/MenuNavigationDesk";
import DishesList from "./menuItems/DishesList";
import NoDishes from "./menuItems/NoDishes";

interface MenuProps {
  slug: string;
}

export default function Menu({ slug }: MenuProps) {
  const { categories } = useMenuStore((state) => state);

  if (!categories || !categories?.length) {
    return null;
  }

  const dishesList =
    slug === "all-dishes"
      ? categories.flatMap((category) => category.dishes)
      : categories.find((category) => category?.url === slug)?.dishes;

  return (
    <section id="menu" className="overflow-hidden">
      <MenuNavigationMob currentCategory={slug} />
      <div className="container w-full xl:max-w-[1280px] flex flex-col xl:flex-row gap-y-10 xl:gap-x-5 pb-[120px] overflow-auto xl:overflow-visible">
        <MenuNavigationDesk currentCategory={slug} />
        {!dishesList ? (
          <NoDishes>На жаль, такої сторінки не існує</NoDishes>
        ) : !dishesList?.length ? (
          <NoDishes>В даній категорії ще немає страв</NoDishes>
        ) : (
          <DishesList dishesList={dishesList} />
        )}
      </div>
    </section>
  );
}
