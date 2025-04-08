import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="xl:hidden absolute -z-10 top-[231px] right-[calc(50%-175px)] "
      >
        {" "}
        <Image
          src="/images/contacts/hero/tomatoeSmallMob.webp"
          alt="tomatoe"
          width={512}
          height={337}
          priority
          className="w-[256px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="xl:hidden absolute -z-30 top-[165px] right-[calc(50%-166px)]"
      >
        {" "}
        <Image
          src="/images/contacts/hero/tomatoeLargeMob.webp"
          alt="tomatoe"
          width={486}
          height={511}
          priority
          className="w-[243px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden xl:block absolute -z-10 top-[264px] right-[calc(50%-450px)] "
      >
        {" "}
        <Image
          src="/images/contacts/hero/tomatoeSmallDesk.webp"
          alt="tomatoe"
          width={446}
          height={524}
          priority
          className="w-[223px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden xl:block absolute -z-20 bottom-0 right-[calc(50%-557px)]"
      >
        {" "}
        <Image
          src="/images/contacts/hero/tomatoeLargeDesk.webp"
          alt="tomatoe"
          width={486}
          height={388}
          priority
          className="w-[243px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        viewport={{ once: true, amount: 0.1 }}
        animation={fadeInAnimation({ delay: 0.8 })}
        className="absolute -z-20 top-[320px] xl:top-[283px] left-[calc(50%-528px)] w-[1055px] h-[1068px] backdrop-blur-[7px] xl:backdrop-blur-[14px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
      ></AnimatedWrapper>
    </>
  );
}
