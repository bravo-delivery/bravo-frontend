import Confirmation from "@/components/confirmation/Confirmation";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function ConfirmationPage() {
  return (
    <>
      <Header variant="black" />
      <main className="flex-1">
        <Confirmation />
      </main>
      <Footer />
    </>
  );
}
