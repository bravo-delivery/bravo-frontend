import SectionTitle from "@/components/shared/titles/SectionTitle";
import GreenButton from "@/components/shared/buttons/GreenButton";
import Link from "next/link";
import PromotionDesk from "./PromotionDesk";
import PromotionMob from "./PromotionMob";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function Promotion() {
  return (
    <section className="pt-[120px] pb-[99px] overflow-hidden min-h-[708px] sm:min-h-[606px] md:min-h-[593px] lg:min-h-[715px] xl:min-[750px]">
      <div className="container xl:max-w-[1280px]">
        <div className="flex flex-col gap-y-9 md:flex-row items-center justify-between mb-8 lg:mb-10">
          <AnimatedWrapper
            animation={fadeInAnimation({ y: 30 })}
            className="text-center md:text-left"
          >
            <SectionTitle>Акційні товари</SectionTitle>
          </AnimatedWrapper>
          <AnimatedWrapper
            animation={fadeInAnimation({ y: 30, delay: 0.4 })}
            className="w-full max-w-[326px] mx-auto md:mx-0"
          >
            <Link href="/menu/all-dishes">
              <GreenButton className="w-full text-16med py-4">
                Переглянути меню
              </GreenButton>
            </Link>
          </AnimatedWrapper>
        </div>
        <PromotionDesk />
      </div>
      <PromotionMob />
    </section>
  );
}
