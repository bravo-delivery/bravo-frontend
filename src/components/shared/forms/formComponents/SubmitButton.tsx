import React from "react";
import { useCartStore } from "@/store/cartStore";
import GreenButton from "../../buttons/GreenButton";

interface SubmitButtonProps {
  onClick: () => void | Promise<void>;
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  children: string;
  className?: string;
}

export default function SubmitButton({
  onClick,
  dirty,
  isValid,
  isLoading,
  children,
  className = "",
}: SubmitButtonProps) {
  const { cartItems } = useCartStore();

  return (
    <GreenButton
      type="submit"
      onClick={onClick}
      disabled={!(dirty && isValid) || isLoading || !cartItems.length}
      isLoading={isLoading}
      className={`${className}`}
    >
      {children}
    </GreenButton>
  );
}
