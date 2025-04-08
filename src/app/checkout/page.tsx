import Checkout from "@/components/checkout/Checkout";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function CheckoutPage() {
  return (
    <>
      <Header variant="black" />
      <main className="flex-1">
        <Checkout />
      </main>
      <Footer />
    </>
  );
}
