"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Article } from "@/types/article";
import ArticleItem from "./ArticleItem";
import Pagination from "@/components/shared/pagination/Pagination";
import { Suspense } from "react";
import { useItemsPerPage } from "@/hooks/useItemsPerPage";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { generateOrderNumber } from "@/utils/generateOrderNumber";
import Loader from "@/components/shared/loader/Loader";

interface ArticlesListProps {
  articles: Article[];
}

const SECTION_ID = "articles-list";

export default function ArticlesList({ articles }: ArticlesListProps) {
  const searchParams = useSearchParams();
  const [key, setKey] = useState(searchParams.toString());

  useEffect(() => {
    const key = generateOrderNumber();
    setKey(key);
  }, [searchParams]);

  return (
    <div id={SECTION_ID} className="flex flex-col justify-center items-center">
      <Suspense fallback={<Loader />}>
        <Pagination
          items={articles}
          scrollTargetId={SECTION_ID}
          useItemsPerPage={useItemsPerPage}
          className="w-full max-w-[320px] sm:max-w-[660px] lg:max-w-[1000px] xl:max-w-full mb-10 xl:mb-[62px]"
          renderItems={(currentItems) => (
            <AnimatedWrapper
              as="ul"
              viewport={{ once: true, amount: 0.1 }}
              animation={listVariants({
                staggerChildren: 0.4,
              })}
              key={key}
              className="flex flex-col gap-y-5 
          sm:flex-row sm:flex-wrap sm:gap-y-5 sm:gap-x-4 xl:gap-x-5 xl:gap-y-6"
            >
              {currentItems.map((article) => (
                <ArticleItem key={article.id} article={article} />
              ))}
            </AnimatedWrapper>
          )}
        />
      </Suspense>
    </div>
  );
}
