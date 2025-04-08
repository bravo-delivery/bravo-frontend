import Content from "@/components/article/content/Content";
import Hero from "@/components/article/hero/Hero";
import NoArticle from "./NoArticle";
import { Article } from "@/types/article";

interface ArticleProps {
  currentArticle: Article;
}

export default function ArticleInfo({ currentArticle }: ArticleProps) {
  return (
    <>
      {!currentArticle ? (
        <NoArticle />
      ) : (
        <>
          <Hero article={currentArticle} />
          <Content article={currentArticle} />
        </>
      )}
    </>
  );
}
