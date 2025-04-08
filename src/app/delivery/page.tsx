import DeliveryTerms from "@/components/delivery/deliveryTerms/DeliveryTerms";
import Hero from "@/components/delivery/hero/Hero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <DeliveryTerms />
      </main>
      <Footer />
    </>
  );
}
