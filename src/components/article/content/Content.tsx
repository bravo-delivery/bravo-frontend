import { Article } from "@/types/article";
import ContentList from "./ContentList";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface ContentProps {
  article: Article;
}

export default function Content({ article }: ContentProps) {
  const { mainContent, images } = article;

  return (
    <section className="container xl:max-w-[1280px] pt-[66px] xl:pt-[90px] pb-[120px]">
      <ContentList content={mainContent} />
      <div className="flex flex-col sm:flex-row gap-5 mt-[50px] sm:mt-[90px]">
        <AnimatedWrapper
          animation={fadeInAnimation({ y: 30 })}
          className="relative sm:w-[42.5%] aspect-[300/320] sm:aspect-[485/320] rounded-[18px] overflow-hidden"
        >
          <Image
            src={images[0].url}
            alt={images[0].alt}
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            className="w-full h-full object-cover"
          />
        </AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ y: 30, delay: 0.8 })}
          className="relative sm:w-[55.7%] aspect-[300/320] sm:aspect-[485/320] rounded-[18px] overflow-hidden"
        >
          <Image
            src={images[1].url}
            alt={images[1].alt}
            fill
            sizes="(max-width: 640px) 100vw, 55vw"
            className="w-full h-full object-cover"
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
