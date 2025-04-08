import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Hero from "@/components/blog/hero/Hero";
import Articles from "@/components/blog/articles/Articles";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<Loader />}>
          <Articles />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
