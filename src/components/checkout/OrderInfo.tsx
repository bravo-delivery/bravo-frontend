"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import CartListItem from "../shared/modals/cartModal/CartItem";
import { AnimatePresence, motion } from "framer-motion";
import { cartItemVariants } from "@/helpers/animation";

export default function OrderInfo() {
  const { getTotalAmount, cartItems } = useCartStore();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotalAmount());
  }, [getTotalAmount, cartItems]);

  return (
    <>
      <h2 className="mb-6 text-20med leading-[123%]">Ваше замовлення</h2>
      <>
        {cartItems.length > 0 ? (
          <ul
            className="flex flex-col md:flex-row md:flex-wrap xl:flex-col xl:flex-nowrap gap-y-4 xl:gap-y-[15px] md:gap-x-5 
          xl:h-[294px] overflow-hidden xl:overflow-y-auto xl:pr-2 scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-green/70"
          >
            <AnimatePresence>
              {cartItems.map((cartItem) => (
                <motion.li
                  variants={cartItemVariants}
                  key={cartItem.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="xl:mr-2 md:w-[calc(50%-10px)] xl:w-full flex gap-x-[11px] py-[14px] lg:py-4 px-3 border-[1.5px] border-black rounded-[8px]"
                >
                  <CartListItem cartItem={cartItem} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
            className="text-16reg lg:text-18reg leading-[123%] text-center py-[100px] text-black/50"
          >
            Ваш кошик порожній
          </motion.div>
        )}
        <div className="flex flex-row items-center justify-between mt-6 mb-4 xl:pr-2">
          <p>Загальна вартість</p>
          <p className="text-20med lg:text-24med leading-[123%]">
            {total}&nbsp;грн
          </p>
        </div>
      </>
    </>
  );
}
