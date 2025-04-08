import PageTitle from "@/components/shared/titles/PageTitle";
import Image from "next/image";
import HeroImages from "./HeroImages";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/blog/hero/heroBg.webp"
        alt="background"
        width={2560}
        height={1378}
        priority
        className="absolute -z-30 top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="container xl:max-w-[1280px] pt-[455px] xl:pt-[439px] pb-16 xl:pb-[87px]">
        <AnimatedWrapper animation={fadeInAnimation({ y: 30 })}>
          <PageTitle className="mb-6 text-center">БЛОГ</PageTitle>
          <p className="max-w-[456px] xl:max-w-[513px] text-white text-center mx-auto">
            Ласкаво просимо до нашого блогу! Тут ми ділимося корисними порадами,
            експертними статтями та смачними рецептами, щоб зробити ваш раціон
            ще здоровішим і смачнішим.
          </p>
        </AnimatedWrapper>
      </div>
      <HeroImages />
    </section>
  );
}
