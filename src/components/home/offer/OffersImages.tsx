import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function OffersImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="hidden md:block absolute top-0 right-[215px] lg:right-[272px]"
      >
        <Image
          src="/images/home/offers/tomatoesDesk.webp"
          alt="tomatoes"
          width={760}
          height={474}
          className="w-[220px] lg:w-[300px] xl:w-[380px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="md:hidden absolute top-[195px] right-[-42px] lg:right-[272px]"
      >
        <Image
          src="/images/home/offers/tomatoesMob.webp"
          alt="tomatoes"
          width={474}
          height={355}
          className="w-[237px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="hidden md:block absolute top-[170px] xl:top-[275px] left-[22px] lg:left-[42px]"
      >
        <Image
          src="/images/home/offers/leavesDesk.webp"
          alt="leaves"
          width={359}
          height={231}
          className="w-[140px] xl:w-[180px] h-auto"
        />
      </AnimatedWrapper>
    </>
  );
}
