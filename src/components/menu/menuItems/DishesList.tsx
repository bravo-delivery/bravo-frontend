"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import DishCard from "./DishCard";
import Pagination from "@/components/shared/pagination/Pagination";
import { useDishesPerPage } from "@/hooks/useDishesPerPage";
import DishModal from "../../shared/modals/DishModal";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import CartModal from "@/components/shared/modals/cartModal/CartModal";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { Dish } from "@/types/dish";
import { generateOrderNumber } from "@/utils/generateOrderNumber";
import AddToCartAnimation from "./AddToCartAnimation";
import AnimatedListItem from "@/components/shared/animatedWrappers/AnimatedListItem";

interface DishesListProps {
  dishesList: Dish[];
}

export default function DishesList({ dishesList }: DishesListProps) {
  const [isDishModalOpened, setIsDishModalOpened] = useState(false);
  const [isCartModalOpened, setIsCartModalOpened] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish>(dishesList[0]);

  const searchParams = useSearchParams();
  const [key, setKey] = useState(searchParams.toString());

  useEffect(() => {
    const key = generateOrderNumber();
    setKey(key);
  }, [searchParams]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Pagination
        items={dishesList}
        scrollTargetId="menu"
        useItemsPerPage={useDishesPerPage}
        className="w-full mb-[26px] xl:mb-[70px]"
        renderItems={(currentItems) => (
          <AnimatedWrapper
            as="ul"
            viewport={{ once: true, amount: 0.1 }}
            animation={listVariants({
              staggerChildren: 0.4,
              delayChildren: 0.4,
            })}
            key={key}
            className="flex flex-wrap gap-x-5 gap-y-6 xl:gap-y-5 mt-10 xl:mt-0"
          >
            {currentItems.map((dish) => (
              <AnimatedListItem
                key={`${dish.id}-${window.location.search}`}
                className="w-[calc(50%-10px)] xs:w-[calc(33.3%-13.3px)] lg:w-[calc(25%-15px)] 
              xl:w-[calc(33.3%-13.3px)]"
              >
                <DishCard
                  dish={dish}
                  setIsDishModalOpened={setIsDishModalOpened}
                  setSelectedDish={setSelectedDish}
                />
              </AnimatedListItem>
            ))}
          </AnimatedWrapper>
        )}
      />
      <DishModal
        dish={selectedDish}
        isDishModalOpened={isDishModalOpened}
        setIsDishModalOpened={setIsDishModalOpened}
        setIsCartModalOpened={setIsCartModalOpened}
      />
      <CartModal
        isPopUpShown={isCartModalOpened}
        setIsPopUpShown={setIsCartModalOpened}
      />
      <Backdrop
        isVisible={isDishModalOpened || isCartModalOpened}
        onClick={() => {
          setIsDishModalOpened(false);
          setIsCartModalOpened(false);
        }}
      />
      <AddToCartAnimation />
    </div>
  );
}
