"use client";
import { Dispatch, SetStateAction } from "react";
import DishCardButton from "@/components/shared/buttons/DishCardButton";
import { Dish } from "@/types/dish";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface DishCardProps {
  dish: Dish;
  setIsDishModalOpened: Dispatch<SetStateAction<boolean>>;
  setSelectedDish: Dispatch<SetStateAction<Dish>>;
  className?: string;
  promotion?: boolean;
}

export default function DishCard({
  dish,
  setIsDishModalOpened,
  setSelectedDish,
  className = "",
  promotion = false,
}: DishCardProps) {
  const { image, title, price, weight } = dish;

  const handleClick = () => {
    setSelectedDish(dish);
    setIsDishModalOpened(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer relative flex flex-col justify-end overflow-hidden aspect-[140/250] xl:aspect-[270/432] rounded-[8px] xl:rounded-[16px] ${className}`}
    >
      <Image
        src={image.url}
        alt={image.alt}
        sizes="50vw"
        fill
        className="relative -z-10 object-cover"
      />
      {promotion ? (
        <Marquee
          autoFill={true}
          className="marquee-absolute top-[15px] xl:top-5 h-6 xl:h-9 bg-black"
        >
          <span className="text-14bold xl:text-20bold uppercase leading-[123%] text-white">
            Акція
          </span>
          &nbsp; &nbsp;
        </Marquee>
      ) : null}
      <div className="px-2 xl:px-4 py-[7px] xl:py-5">
        <div className="px-[10px] xl:px-[18px] py-2 xl:py-[15px] rounded-[6px] bg-white bg-opacity-[16%] backdrop-blur-[30px] shadow-inner-custom">
          <h3 className="min-h-[29.5px] xl:min-h-[44px] mb-[6px] xl:mb-2 text-12bold xl:text-18bold leading-[123%] text-white line-clamp-2">
            {title}
          </h3>
          <div className="mb-[17px] flex items-center justify-between text-white">
            <p className="text-8semi xl:text-12semi leading-[123%]">
              {price}&nbsp;грн
            </p>
            <p className="text-8reg xl:text-12reg leading-[123%]">
              {weight}&nbsp;г
            </p>
          </div>
          <DishCardButton onClick={handleClick}>Замовити</DishCardButton>
        </div>
      </div>
    </div>
  );
}
