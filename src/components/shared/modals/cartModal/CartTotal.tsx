"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import MainButton from "../../buttons/MainButton";
import { useCartStore } from "@/store/cartStore";
import AnimatedWrapper from "../../animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface CartTotalProps {
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CartTotal({ setIsPopUpShown }: CartTotalProps) {
  const { getTotalAmount, cartItems } = useCartStore();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotalAmount());
  }, [getTotalAmount, cartItems]);

  return (
    <AnimatedWrapper
      animation={fadeInAnimation({ y: 30, delay: 1.2 })}
      className="fixed bottom-0 right-0 w-full max-w-[515px] px-[30px] lg:px-9 py-9 bg-black rounded-tr-[16px] rounded-tl-[16px]"
    >
      <div className="flex flex-row items-center justify-between mb-8 lg:mb-7 text-white">
        <p>Загальна вартість</p>
        <p className="text-20med lg:text-24med leading-[123%]">
          {total}&nbsp;грн
        </p>
      </div>
      <Link href="/checkout" onClick={() => setIsPopUpShown(false)}>
        <MainButton disabled={!cartItems?.length} className="w-full">
          Оформити замовлення
        </MainButton>
      </Link>
    </AnimatedWrapper>
  );
}
