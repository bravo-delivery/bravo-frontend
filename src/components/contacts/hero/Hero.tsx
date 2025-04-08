import PageTitle from "@/components/shared/titles/PageTitle";
import Image from "next/image";
import HeroImages from "./HeroImages";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/contacts/hero/heroBg.webp"
        alt="background"
        width={2560}
        height={1230}
        priority
        className="absolute -z-30 top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="container xl:max-w-[1280px] pt-[404px] xl:pt-[395px] pb-[70px] xl:pb-[61px]">
        <AnimatedWrapper animation={fadeInAnimation({ y: 30 })}>
          <PageTitle className="mb-5 text-center">Контакти</PageTitle>
          <p className="max-w-[274px] xl:max-w-[414px] mx-auto text-center text-white">
            Ми цінуємо кожного клієнта та завжди раді допомогти вам з вибором
            страв, оформленням замовлення або будь-якими іншими питаннями.
            Зв’яжіться з нами у зручний для вас спосіб!
          </p>
        </AnimatedWrapper>
        <HeroImages />
      </div>
    </section>
  );
}
