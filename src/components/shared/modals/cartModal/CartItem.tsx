import { CartItem } from "@/types/cartItem";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Counter from "../Counter";
import IconButton from "../../buttons/IconButton";

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartListItem({ cartItem }: CartItemProps) {
  const { removeFromCart } = useCartStore();
  const { id, title, price, image } = cartItem;

  return (
    <>
      <div className="relative aspect-[73/91] lg:aspect-[90/106] w-[73px] lg:w-[90px] overflow-hidden rounded-[6px]">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes="33vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-[14px] w-[54.3%]">
        <p className="mb-2 lg:mb-3 text-12med lg:text-14med leading-[123%] line-clamp-1">
          {title}
        </p>
        <p className="mb-[17px] text-14semi lg:text-16semi leading-[123%]">
          {price}&nbsp;грн
        </p>
        <Counter id={id} className="w-[124px] px-4" />
      </div>
      <IconButton
        handleClick={() => removeFromCart(id)}
        className="size-[18px] lg:size-6 ml-auto"
      >
        <Image
          src="/images/icons/trash.svg"
          alt="trash icon"
          width="18"
          height="18"
          className="size-[18px] lg:size-6"
        />
      </IconButton>
    </>
  );
}
