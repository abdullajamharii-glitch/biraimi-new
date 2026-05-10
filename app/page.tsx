import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DeliveryMarquee } from "@/components/delivery-marquee";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Branches } from "@/components/branches";
import { InstagramReviews } from "@/components/instagram-reviews";
import { Reviews } from "@/components/reviews";
import { Contact } from "@/components/contact";
import { Footer, WhatsAppButton } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DeliveryMarquee />
      <div className="mx-auto max-w-[1920px] px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <About />
        <Menu />
        <Branches />
        <Reviews />
        <InstagramReviews />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
