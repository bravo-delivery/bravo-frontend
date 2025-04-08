import Image from "next/image";
import HeroImages from "./HeroImages";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/delivery/hero/heroBg.webp"
        alt="background"
        width={2560}
        height={1092}
        priority
        className="absolute -z-30 top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative container xl:max-w-[1280px] pt-[404px] pb-[60px] xl:pt-[334px] xl:pb-[73px]">
        <AnimatedWrapper
          as="h2"
          animation={fadeInAnimation({ y: 30 })}
          className="max-w-[274px] lg:max-w-[501px] mb-5 mx-auto text-36bold xl:text-48bold leading-[123%] uppercase text-center text-white"
        >
          Умови доставки
        </AnimatedWrapper>
        <AnimatedWrapper
          as="p"
          animation={fadeInAnimation({ y: 30 })}
          className="max-w-[280px] xl:max-w-[495px] mx-auto text-white text-center"
        >
          Ми дбаємо про ваш комфорт та здоров’я, тому пропонуємо швидку та
          зручну доставку корисного харчування прямо до ваших дверей.
        </AnimatedWrapper>
        <HeroImages />
      </div>
    </section>
  );
}
