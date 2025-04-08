import Menu from "@/components/menu/Menu";
import { GET_CATEGORY_METADATA } from "@/lib/datoCmsQueries";
import { getDataFromCmsByField } from "@/utils/getDataFromCmsByField";
import { metadata as defaultMetadata } from "@/app/layout"; // Імпортуємо дефолтні метадані
import type { Metadata } from "next";

interface MenuCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: MenuCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const res = await getDataFromCmsByField(GET_CATEGORY_METADATA, slug);
  const metaData = res?.data?.category;

  return {
    title: metaData?.metaTitle || defaultMetadata.title,
    description: metaData?.metaDescription || defaultMetadata.description,
    openGraph: {
      title: metaData?.metaTitle || defaultMetadata.title,
      description: metaData?.metaDescription || defaultMetadata.description,
    },
  };
}

export default async function MenuCategoryPage({
  params,
}: MenuCategoryPageProps) {
  const { slug } = await params;

  return (
    <>
      <Menu slug={slug} />
    </>
  );
}
