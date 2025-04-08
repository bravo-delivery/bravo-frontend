import { GET_MENU_BANNER } from "@/lib/datoCmsQueries";
import { getDataFromCms } from "@/utils/getDataFromCms";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Hero from "@/components/menu/hero/Hero";
import Loader from "@/components/shared/loader/Loader";
import { ReactNode, Suspense } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const res = await getDataFromCms(GET_MENU_BANNER);

  const banner = res?.data?.banner;

  return (
    <div>
      <Header shouldHideOnScroll={false} variant="black" />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Hero banner={banner} />
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
