import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import Image from "next/image";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, y: 20, x: 20, delay: 1.6 })}
        className="absolute -z-10 top-[107px] left-[-52px] w-[111px] h-auto"
      >
        <Image
          src="/images/home/hero/leaves.webp"
          alt="leaves"
          width={223}
          height={273}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, y: 30, delay: 1.6 })}
        className="absolute -z-10 bottom-[-135px] xl:bottom-[-115px] left-[-110px] xl:left-auto xl:right-[-132px] w-[275px] h-auto"
      >
        <Image
          src="/images/home/hero/tomatoeBottomMob.webp"
          alt="tomatoe"
          width={275}
          height={275}
        />
      </AnimatedWrapper>
      <div
        className="absolute -z-20 top-[75px] xl:top-[-308px] left-[-228px] xl:left-[-248px] w-[593px] xl:w-[1099px] h-[601px] 
      xl:h-[1114px] "
      >
        <AnimatedWrapper
          animation={fadeInAnimation({ delay: 1.6 })}
          className="relative -z-10 w-full h-full backdrop-blur-[16px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
        ></AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
          className="xl:hidden absolute -z-10 top-[244px] right-[-38px] w-[100px] h-auto"
        >
          <Image
            src="/images/home/hero/tomatoeSmallMob.webp"
            alt="tomatoe"
            width={201}
            height={240}
          />
        </AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ x: -50, scale: 0.8, delay: 1.6 })}
          className="hidden xl:block absolute -z-10 top-[686px] left-[874px] w-[226px] h-auto"
        >
          {" "}
          <Image
            src="/images/home/hero/tomatoeSmallDesk.webp"
            alt="tomatoe"
            width={451}
            height={477}
          />
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="xl:hidden absolute -z-30 top-[403px] left-[288px] w-[137px] h-auto"
      >
        {" "}
        <Image
          src="/images/home/hero/tomatoeLargeMob.webp"
          alt="tomatoe"
          width={137}
          height={137}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ x: -50, y: -50, scale: 0.8, delay: 1.6 })}
        className="hidden xl:block absolute -z-30 top-[491px] left-[530px] w-[307px] h-auto"
      >
        <Image
          src="/images/home/hero/tomatoeLargeDesk.webp"
          alt="tomatoe"
          width={614}
          height={614}
        />
      </AnimatedWrapper>
    </>
  );
}
