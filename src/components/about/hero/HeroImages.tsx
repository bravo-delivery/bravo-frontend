import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ delay: 0.8 })}
        className="absolute -z-20 top-[103px] md:top-[140px] xl:top-[107px] left-[-215px] xl:left-[-319px] w-[575px] md:w-[730px] 
      xl:w-[1068px] h-[582px] md:h-[739px] xl:h-[1114px] backdrop-blur-[16px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
      >
        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
          className="hidden md:block absolute -z-10 md:top-[200px] lg:top-[240px] xl:top-[384px] md:left-[570px] xl:left-[902px]"
        >
          <Image
            src="/images/about/hero/tomatoesSmallDesk.webp"
            alt="tomatoe"
            width={494}
            height={511}
            priority
            className="w-[247px] h-auto"
          />
        </AnimatedWrapper>
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="md:hidden absolute -z-10 bottom-0 left-[62px] "
      >
        {" "}
        <Image
          src="/images/about/hero/tomatoeSmallMob.webp"
          alt="tomatoe"
          width={458}
          height={400}
          priority
          className="w-[229px] h-auto"
        />
      </AnimatedWrapper>

      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="md:hidden absolute -z-30 bottom-[-42px] left-[-101px] xl:left-auto xl:right-[-132px]"
      >
        <Image
          src="/images/about/hero/tomatoeBottomMob.webp"
          alt="tomatoe"
          width={544}
          height={544}
          priority
          className="w-[275px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden md:block absolute -z-30 bottom-0 md:left-[250px] xl:left-[500px]"
      >
        {" "}
        <Image
          src="/images/about/hero/tomatoesLargeDesk.webp"
          alt="tomatoe"
          width={761}
          height={370}
          priority
          className="w-[365px] h-auto"
        />
      </AnimatedWrapper>
    </>
  );
}
