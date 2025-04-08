import { getDataFromCms } from "@/utils/getDataFromCms";
import { GET_BLOG_ARTICLES_QUERY } from "@/lib/datoCmsQueries";
import ArticlesList from "./ArticlesList";

export default async function Articles() {
  const res = await getDataFromCms(GET_BLOG_ARTICLES_QUERY);

  const articles = res?.data?.allArticles;

  if (!articles) {
    return null;
  }

  return (
    <section className="container xl:max-w-[1280px] pt-[90px] pb-[120px] xl:pt-[120px] overflow-hidden">
      <ArticlesList articles={articles} />
    </section>
  );
}
