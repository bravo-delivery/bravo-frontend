import { CartItem } from "./cartItem";

export interface OrderData {
  orderDate: string;
  orderNumber: string;
  name: string;
  phone: string;
  address: string;
  payment: string;
  cartItems: CartItem[];
  totalSum: number;
}
