import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/cartItem";

interface CartState {
  cartItems: CartItem[];
  addToCart: (newItem: CartItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  removeSingleItem: (itemId: string) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
  isCartAnimating: boolean;
  cartAnimationKey: number;
  animatingImage: { url: string; alt: string } | null;
  setCartAnimation: (isAnimating: boolean) => void;
  setCartAnimationKey: () => void;
  setAnimatingImage: (image: { url: string; alt: string } | null) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      isCartAnimating: false,
      cartAnimationKey: Date.now(),
      animatingImage: null,

      addToCart: (newItem) => {
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (item) => item.id === newItem.id
          );

          if (existingItemIndex !== -1) {
            const updatedCartItems = state.cartItems.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { cartItems: updatedCartItems };
          } else {
            return {
              cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
            };
          }
        });
      },

      removeFromCart: (itemId) => {
        set((state) => {
          const index = state.cartItems.findIndex((item) => item.id === itemId);
          if (index === -1) return state;

          return {
            cartItems: [
              ...state.cartItems.slice(0, index),
              ...state.cartItems.slice(index + 1),
            ],
          };
        });
      },

      removeSingleItem: (id) => {
        set({
          cartItems: get().cartItems.filter((cartItem) => cartItem.id !== id),
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getTotalAmount: () => {
        const { cartItems } = get();
        return cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },

      increaseQuantity: (itemId) => {
        set((state) => {
          const updatedCartItems = state.cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          );
          return { cartItems: updatedCartItems };
        });
      },

      decreaseQuantity: (itemId) => {
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === itemId
          );

          if (existingItem) {
            if (existingItem.quantity > 1) {
              const updatedCartItems = state.cartItems.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
              return { cartItems: updatedCartItems };
            } else {
              return {
                cartItems: state.cartItems.filter((item) => item.id !== itemId),
              };
            }
          }
          return state;
        });
      },

      setCartAnimation: (isAnimating) => {
        set({ isCartAnimating: isAnimating });
      },

      setCartAnimationKey: () => {
        set({ cartAnimationKey: Date.now() });
      },

      setAnimatingImage: (image) => {
        set({ animatingImage: image });
      },
    }),
    {
      name: "bravo-cart-storage",
    }
  )
);
