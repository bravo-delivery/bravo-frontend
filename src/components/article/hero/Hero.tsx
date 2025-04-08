import { Article } from "@/types/article";
import Image from "next/image";
import { calculateReadingTime } from "@/utils/calculateReadingTime";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface HeroProps {
  article: Article;
}

export default function Hero({ article }: HeroProps) {
  const { title, description, mainImage } = article;

  const readingTime = calculateReadingTime(article);

  return (
    <section className="relative overflow-hidden">
      <Image
        src={mainImage.url}
        alt={mainImage.alt}
        fill
        priority
        sizes="100vw"
        className="absolute top-0 left-0 -z-20 w-full h-full object-cover"
      ></Image>
      <div className="relative container xl:max-w-[1280px] pt-[262px] xl:pt-[226px] pb-[40px] xl:pb-[68px]">
        <div className="max-w-[265px] xl:max-w-[441px]">
          <AnimatedWrapper
            viewport={{ once: true, amount: 0.01 }}
            animation={fadeInAnimation({ delay: 0.8 })}
            className="absolute -z-10 bottom-[-99px] md:bottom-[-300px] xl:bottom-[-600px] left-[-128px] md:left-[-300px] lg:left-[-220px] xl:left-[-313px] w-[500px] md:w-[700px] lg:w-[800px] xl:w-[1055px] h-[506px] 
      lg:h-[810px] md:h-[708px] xl:h-[1068px] backdrop-blur-[7px] xl:backdrop-blur-[14px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
          ></AnimatedWrapper>
          <AnimatedWrapper
            as="h1"
            animation={fadeInAnimation({ y: 30 })}
            className="mb-6 text-36bold xl:text-48bold leading-[123%] uppercase text-white"
          >
            {title}
          </AnimatedWrapper>
          <AnimatedWrapper
            as="p"
            animation={fadeInAnimation({ y: 30 })}
            className="mb-6 text-white"
          >
            {description}
          </AnimatedWrapper>
          <AnimatedWrapper
            animation={fadeInAnimation({ y: 30, delay: 1.6 })}
            className="flex items-center gap-x-3"
          >
            <Image
              src="/images/icons/clock.svg"
              alt="clock"
              width="27"
              height="27"
            />
            <p className="text-14med xl:text-20bold leading-[123%] text-white">
              {readingTime}&nbsp;хв на читання
            </p>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
