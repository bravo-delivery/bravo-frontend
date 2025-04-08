import PageTitle from "@/components/shared/titles/PageTitle";
import HeroImages from "./HeroImages";
import MainButton from "@/components/shared/buttons/MainButton";
import Link from "next/link";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedWrapper
        animation={fadeInAnimation({ duration: 1, opacity: 0.9 })}
        className="absolute -z-30 top-0 left-0 w-full h-full"
      >
        <Image
          src="/images/home/hero/heroBg.webp"
          alt="background"
          width={2560}
          height={1664}
          priority
          className="w-full h-full object-cover"
        />
      </AnimatedWrapper>
      <div className="relative container xl:max-w-[1280px] flex flex-col gap-y-[50px] pt-[173px] pb-[104px] xl:pt-[140px] xl:pb-[50px] md:flex-row md:justify-between">
        <HeroImages />
        <div className="md:mb-auto xl:pb-[77px]">
          <AnimatedWrapper
            animation={fadeInAnimation({ x: -50 })}
            className="max-w-[321px] xl:max-w-[510px] mb-6"
          >
            <PageTitle>
              Смакуй нешкідливе – замовляй смачну їжу вже зараз!
            </PageTitle>
          </AnimatedWrapper>
          <AnimatedWrapper animation={fadeInAnimation({ y: 30 })}>
            <p className="max-w-[300px] xl:max-w-[460px] mb-12 text-white">
              Готуємо для вас свіжу, збалансовану та корисну їжу, яка дарує
              енергію та насолоду без шкоди для здоров’я. Замовляйте легко –
              отримуйте швидко!
            </p>
            <Link
              href="/menu/all-dishes"
              className="block w-full max-w-[326px] mx-auto md:mx-0"
            >
              <MainButton className="w-full">Зробити замовлення</MainButton>
            </Link>
          </AnimatedWrapper>
        </div>
        <AnimatedWrapper
          animation={fadeInAnimation({ x: 30, delay: 0.8 })}
          as="p"
          className="md:max-w-[225px] md:mt-auto text-20bold xl:text-32bold leading-[123%] text-white uppercase text-center md:text-left"
        >
          Швидка доставка до 30 хв нешкідливих страв для вас!
        </AnimatedWrapper>
      </div>
    </section>
  );
}
