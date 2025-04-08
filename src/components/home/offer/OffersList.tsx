import OfferItem from "./OfferItem";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";

export default function OffersList() {
  const offersList = [
    {
      subtitle: "Швидка доставка",
      description: "Щоб їжа була завжди свіжою",
      quantity: "30 хв",
      text: "Середній час доставки",
    },
    {
      subtitle: "Нешкідливе приготування",
      description: "Готуємо на мангалі без зайвої олії",
      quantity: "98%",
      text: "Задоволених клієнтів",
    },
    {
      subtitle: "Безкоштовна доставка",
      description: "Якщо ви оплачуєте готівкою",
      quantity: "90%",
      text: "Клієнтів використовують це",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <AnimatedWrapper
        as="ul"
        viewport={{ once: true, amount: 0.3 }}
        animation={listVariants({ staggerChildren: 0.5 })}
        className="flex flex-col gap-y-[70px] md:flex-row gap-x-5 md:max-w-[708px] xl:max-w-full"
      >
        {offersList.map((offer, idx) => (
          <OfferItem key={idx} offer={offer} />
        ))}
      </AnimatedWrapper>
    </div>
  );
}
