"use client";

import { useEffect } from "react";
import { useMenuStore } from "./menuStore";
import { Category } from "@/types/category";
import { Dish } from "@/types/dish";

type Props = {
  categories: Category[];
  promotion: Dish[];
  children: React.ReactNode;
};

export default function HydrateStore({
  categories,
  promotion,
  children,
}: Props) {
  const setMenuItems = useMenuStore((state) => state.setCategories);
  const setPromotionDishes = useMenuStore((state) => state.setPromotion);

  useEffect(() => {
    setMenuItems(categories);
    setPromotionDishes(promotion);
  }, [categories, setMenuItems, setPromotionDishes, promotion]);

  return <>{children}</>;
}
