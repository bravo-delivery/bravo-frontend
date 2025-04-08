import { Dish } from "./dish";

export interface Category {
  id: string;
  title: string;
  url: string;
  order: number;
  dishes: Dish[] | [];
  metaTitle: string;
  metaDescription: string;
}
