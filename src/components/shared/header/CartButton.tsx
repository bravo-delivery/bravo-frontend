import CartIcon from "../icons/CartIcon";
import { useCartStore } from "@/store/cartStore";

interface CartButtonProps {
  className?: string;
  onClick: () => void;
  variant: "white" | "black";
}

export default function CartButton({
  variant,
  className,
  onClick,
}: CartButtonProps) {
  const { cartItems } = useCartStore();

  return (
    <button
      id="cart-button"
      onClick={onClick}
      data-label={cartItems?.length.toString()}
      className={`relative flex items-center justify-center size-[44px] rounded-[14px] ${
        variant === "white" ? "text-black bg-white" : "text-white bg-black"
      } ${className}`}
    >
      <>
        {cartItems.length > 0 ? (
          <span className="absolute top-[-8px] right-[-8px] size-[18px] text-12med text-white flex items-center justify-center rounded-full bg-pink">
            {cartItems.length}
          </span>
        ) : null}

        <CartIcon />
      </>
    </button>
  );
}
