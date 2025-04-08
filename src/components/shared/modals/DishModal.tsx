import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Modal from "@/components/shared/modals/Modal";
import { Dish } from "@/types/dish";
import GreenButton from "@/components/shared/buttons/GreenButton";
import { useCartStore } from "@/store/cartStore";
import Counter from "./Counter";
import AnimatedWrapper from "../animatedWrappers/AnimatedWrapper";
import { AnimatePresence, motion } from "framer-motion";

interface DishModalProps {
  dish: Dish | null;
  isDishModalOpened: boolean;
  setIsDishModalOpened: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function DishModal({
  isDishModalOpened,
  setIsDishModalOpened,
  setIsCartModalOpened,
  dish,
}: DishModalProps) {
  const {
    cartItems,
    addToCart,
    setCartAnimation,
    setCartAnimationKey,
    setAnimatingImage,
  } = useCartStore();

  if (!dish) {
    return null;
  }
  const { id, image, title, price, weight, calories, description } = dish;

  const isDishInCart = cartItems.find((cartItem) => cartItem.id === id);

  return (
    <Modal
      isPopUpShown={isDishModalOpened}
      setIsPopUpShown={setIsDishModalOpened}
      className="min-w-[300px] max-w-[368px] tab:max-w-[496px] lg:max-w-[909px] w-[83.33%] tab:w-[496px] lg:w-[909px]"
    >
      <div className="w-full lg:flex">
        <div className="relative w-full lg:w-[45.8%] lg:h-full aspect-[300/219] lg:aspect-[437/640] rounded-[16px] overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt}
            sizes="100vw"
            fill
            className="relative -z-10 object-cover"
          />
        </div>
        <div className="lg:flex flex-col justify-between lg:w-[472px] px-5 lg:px-9 py-4 lg:py-12">
          <div>
            <h3 className="mb-2 lg:mb-3 text-20bold lg:text-24bold uppercase leading-[123%]">
              {title}
            </h3>
            <p className="mb-4 lg:mb-5 text-16semi lg:text-20semi leading-[123%]">
              {price}&nbsp;грн
            </p>
            <p className="mb-2 lg:text-16reg leading-[123%]">
              Вага:&nbsp;{weight}&nbsp;г
            </p>
            <p className="mb-5 lg:mb-8 lg:text-16reg leading-[123%]">
              Калорійність:&nbsp;{calories}&nbsp;ккал
            </p>
            <p className="mb-6 lg:mb-9 text-12light lg:text-14light leading-[123%]">
              {description}
            </p>
            <AnimatePresence>
              <div className="relative w-full h-[83px] lg:h-[91px]">
                {" "}
                {isDishInCart ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.1 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    className="absolute top-0 left-0 w-full"
                  >
                    <Counter id={id} className="w-full px-6" />
                    <GreenButton
                      onClick={() => {
                        setIsDishModalOpened(false);
                        setIsCartModalOpened(true);
                      }}
                      className="mt-3 w-full text-12med py-[10px] lg:py-3"
                    >
                      Перейти до кошика
                    </GreenButton>
                  </motion.div>
                ) : (
                  <AnimatedWrapper>
                    <GreenButton
                      id="add-to-cart-button"
                      onClick={() => {
                        setAnimatingImage(image);
                        setCartAnimationKey();
                        setCartAnimation(true);
                        setTimeout(() => {
                          setCartAnimation(false);
                          addToCart({ id, title, price, image, quantity: 1 });
                        }, 1500);
                      }}
                      className="w-full text-12med py-[10px] lg:py-3"
                    >
                      Додати в кошик
                    </GreenButton>
                  </AnimatedWrapper>
                )}
              </div>
            </AnimatePresence>
          </div>
          <p className="mt-6 lg:mt-0 text-12light lg:text-14light leading-[123%] text-green">
            *Страва містить алергени, якщо бажаєте їх прибрати, повідомте про це
            менеджеру під час оформлення замовлення
          </p>
        </div>
      </div>
    </Modal>
  );
}
