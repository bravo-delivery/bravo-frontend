import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <AnimatedWrapper
        viewport={{ once: true, amount: 0.01 }}
        animation={fadeInAnimation({ delay: 0.8 })}
        className="absolute -z-20 top-[320px] xl:top-[212px] left-[calc(50%-537px)] w-[1055px] h-[1068px] backdrop-blur-[14px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
      ></AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="lg:hidden absolute -z-10 bottom-[214px] left-[calc(50%-178px)]"
      >
        <Image
          src="/images/delivery/hero/tomatoeSmallMob.webp"
          alt="tomatoe"
          width={263}
          height={337}
          priority
          className="w-[137px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden lg:block absolute -z-10 bottom-[0px] left-[calc(50%-530px)]"
      >
        <Image
          src="/images/delivery/hero/tomatoeSmallDesk.webp"
          alt="tomatoe"
          width={427}
          height={452}
          priority
          className="w-[226px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="lg:hidden absolute -z-10 bottom-[172px] right-[calc(50%-257px)]"
      >
        {" "}
        <Image
          src="/images/delivery/hero/tomatoeLargeMob.webp"
          alt="tomatoe"
          width={367}
          height={368}
          priority
          className="w-[184px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden lg:block absolute -z-30 bottom-0 right-[calc(50%-556px)]"
      >
        {" "}
        <Image
          src="/images/delivery/hero/tomatoeLargeDesk.webp"
          alt="tomatoe"
          width={486}
          height={250}
          priority
          className="w-[307px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="lg:hidden absolute -z-30 bottom-[193px] left-[calc(50%-302px)]"
      >
        {" "}
        <Image
          src="/images/delivery/hero/tomatoeLeftMob.webp"
          alt="tomatoe"
          width={468}
          height={468}
          priority
          className="w-[234px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden lg:block absolute bottom-[45px] right-[calc(50%-458px)]"
      >
        {" "}
        <Image
          src="/images/delivery/hero/leaveDesk.webp"
          alt="leaves"
          width={217}
          height={193}
          priority
          className="w-[108px] h-auto"
        />
      </AnimatedWrapper>
    </>
  );
}
