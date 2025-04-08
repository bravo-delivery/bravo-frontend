import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";
import { calculateReadingTime } from "@/utils/calculateReadingTime";
import AnimatedListItem from "@/components/shared/animatedWrappers/AnimatedListItem";

interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const { title, description, mainImage, slug } = article;
  const readingTime = calculateReadingTime(article);
  return (
    <AnimatedListItem className="relative max-w-[320px] xl:max-w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.3%-13.3px)] min-h-full aspect-[300/454] xl:aspect-[366/454] rounded-[16px] text-white overflow-hidden">
      <Image
        src={mainImage?.url}
        alt={mainImage.alt}
        fill
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-article"></div>
      <div className="relative flex flex-col justify-between h-full px-6 sm:px-4 xl:px-7 pt-6 xl:pt-8 pb-5">
        <div>
          <Link href={`/blog/${slug}`}>
            <h2 className="mb-3 text-24semi xl:text-32semi leading-[123%] line-clamp-2">
              {title}
            </h2>

            <p className="text-14reg leading-[123%] line-clamp-4">
              {description}
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-x-3 justify-between w-full">
          <div className="flex items-center gap-x-[6px] p-4 sm:px-3 md:px-4 rounded-full bg-white bg-opacity-[16%] shadow-inner-custom backdrop-blur-[20px]">
            <Image
              src="/images/icons/clock.svg"
              alt="clock"
              width="27"
              height="27"
            />
            <p className="text-14med xl:text-18med leading-[123%]">
              {readingTime}&nbsp;хв на читання
            </p>
          </div>
          <Link href={`/blog/${slug}`}>
            <button className="group flex items-center justify-center size-[59px] rounded-[14px] bg-white">
              <Image
                src="/images/icons/arrow.svg"
                alt="arrow"
                width="29"
                height="29"
                className="translate-x-0 group-active:scale-95 group-[focus-visible]:translate-x-1 xl:group-hover:translate-x-1 transition duration-300 ease-out will-change-transform"
              />
            </button>
          </Link>
        </div>
      </div>
    </AnimatedListItem>
  );
}
