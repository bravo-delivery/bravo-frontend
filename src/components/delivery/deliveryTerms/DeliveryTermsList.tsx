import DeliveryTermItem from "./DeliveryTermItem";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";

export default function DeliveryTermsList() {
  const deliveryTermsList = [
    "Доставка здійснюється по місту Бровари.",
    "Доставка здійснюється щоденно з 09:00 до 22:00 кожного дня.",
    "Ми доставляємо замовлення як на домашню адресу, так і в офіси, щоб ви могли насолоджуватися корисною їжею будь-де.",
  ];
  return (
    <AnimatedWrapper
      as="ul"
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.5, delayChildren: 0.8 })}
      className="flex flex-col gap-6"
    >
      {deliveryTermsList.map((termItem, idx) => (
        <DeliveryTermItem key={idx} termItem={termItem} />
      ))}
    </AnimatedWrapper>
  );
}
