import Hero from "@/components/about/hero/Hero";
import Mission from "@/components/about/mission/Mission";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
