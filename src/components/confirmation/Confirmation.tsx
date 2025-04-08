import ConfirmationImages from "./ConfirmationImages";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function Confirmation() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative container xl:max-w-[1280px] pt-[455px] pb-[120px] xl:pt-[505px]">
        <div className="max-w-[300px] xl:max-w-[466px] mx-auto">
          <AnimatedWrapper
            as="h1"
            animation={fadeInAnimation({ y: 30 })}
            className="mb-[18px] text-32semi xl:text-40semi uppercase leading-[123%] text-center"
          >
            Дякуємо за замовлення!
          </AnimatedWrapper>
          <AnimatedWrapper
            as="p"
            animation={fadeInAnimation({ y: 30, delay: 0.8 })}
            className="mb-7 text-18reg xl:text-20reg leading-[123%] text-center"
          >
            Орієнтовний час доставки 25-30 хв
          </AnimatedWrapper>
          <AnimatedWrapper
            as="p"
            animation={fadeInAnimation({ y: 30, delay: 0.8 })}
            className="text-14light xl:text-16light leading-[123%] text-center"
          >
            Наш менеджер скоро зв’яжеться з вами для підтвердження замовлення
          </AnimatedWrapper>
        </div>
        <ConfirmationImages />
      </div>
    </section>
  );
}
