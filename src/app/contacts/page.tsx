import ContactsInfo from "@/components/contacts/contactsInfo/ContactsInfo";
import Hero from "@/components/contacts/hero/Hero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 over">
        <Hero />
        <ContactsInfo />
      </main>
      <Footer />
    </>
  );
}
