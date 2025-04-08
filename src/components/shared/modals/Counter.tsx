"use client";
import IconMinus from "@/components/shared/icons/IconMinus";
import { CartItem } from "@/types/cartItem";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import IconPlus from "@/components/shared/icons/IconPlus";

interface CounterProps {
  id: string;
  className?: string;
}

export default function Counter({ id, className = "" }: CounterProps) {
  const { increaseQuantity, decreaseQuantity, cartItems } = useCartStore();
  const [count, setCount] = useState(1);
  const getItemCount = (items: CartItem[], itemId: string): number => {
    return items.find((item) => item.id === itemId)?.quantity || 0;
  };

  useEffect(() => {
    setCount(getItemCount(cartItems, id));
  }, [cartItems, id]);

  const onMinusClick = () => {
    decreaseQuantity(id);
    setCount(count - 1);
  };

  const onPlusClick = () => {
    increaseQuantity(id);
    setCount(count + 1);
  };

  return (
    <div
      className={`flex items-center justify-between py-[7px] lg:py-[9px] border-[1.5px] border-black rounded-full ${className}`}
    >
      <button
        className="group flex items-center justify-center size-5"
        onClick={onMinusClick}
        disabled={count === 0}
        aria-label="minus"
      >
        <IconMinus className="size-[14px]" />
      </button>
      <span className="">{count}</span>
      <button
        className="flex items-center justify-center size-5"
        onClick={onPlusClick}
        aria-label="plus"
      >
        <IconPlus className="size-[14px]" />
      </button>
    </div>
  );
}
