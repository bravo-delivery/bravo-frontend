import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="xl:hidden absolute -z-10 bottom-[-30px] left-[-49px]"
      >
        <Image
          src="/images/blog/hero/leaves.webp"
          alt="leaves"
          width={239}
          height={259}
          priority
          className="w-[120px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden xl:block absolute -z-10 bottom-0 left-[calc(50%-477px)]"
      >
        <Image
          src="/images/blog/hero/leavesDesk.webp"
          alt="leaves"
          width={556}
          height={182}
          priority
          className="w-[278px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="absolute -z-10 bottom-[183px] xl:bottom-[189px] left-[calc(50%-44px+133px)] xl:left-[calc(50%-44px+227px)]"
      >
        <Image
          src="/images/blog/hero/leave.webp"
          alt="leaves"
          width={88}
          height={91}
          priority
          className="w-[44px] xl:w-[83px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        viewport={{ once: true, amount: 0.01 }}
        animation={fadeInAnimation({ delay: 0.8 })}
        className="absolute -z-20 bottom-[-780px] xl:bottom-[-698px] left-[calc(50%-528px)] w-[1055px] h-[1068px] 
      backdrop-blur-[16px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
      ></AnimatedWrapper>
    </>
  );
}
