import ArticleInfo from "@/components/article/Article";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import { GET_ARTICLE_BY_SLUG } from "@/lib/datoCmsQueries";
import { getDataFromCmsByField } from "@/utils/getDataFromCmsByField";
import { metadata as defaultMetadata } from "@/app/layout"; // Імпортуємо дефолтні метадані
import { Suspense } from "react";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article } = await params;
  const res = await getDataFromCmsByField(GET_ARTICLE_BY_SLUG, article);
  const articleData = res?.data?.allArticles[0];

  return {
    title: articleData?.title || defaultMetadata.title,
    description: articleData?.description || defaultMetadata.description,
    openGraph: {
      title: articleData?.title || defaultMetadata.title,
      description: articleData?.description || defaultMetadata.description,
      images: [
        {
          url: articleData?.images[0]?.url || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: articleData?.images[0]?.alt || "Bravo",
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;
  const res = await getDataFromCmsByField(GET_ARTICLE_BY_SLUG, article);
  const articleData = res?.data?.allArticles[0];

  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <ArticleInfo currentArticle={articleData} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
