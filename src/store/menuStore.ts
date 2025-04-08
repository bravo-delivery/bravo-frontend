import { create } from "zustand";
import { Category } from "@/types/category";
import { Dish } from "@/types/dish";

interface MenuState {
  categories: Category[];
  promotion: Dish[];
  setCategories: (categories: Category[]) => void;
  setPromotion: (dishes: Dish[]) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  categories: [],
  promotion: [],
  setCategories: (categories) => set({ categories }),
  setPromotion: (promotion) => set({ promotion }),
}));
