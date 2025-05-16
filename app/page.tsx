import { AboutUs } from "@/components/about-us/page";
import { CallToAction } from "@/components/call-to-action/page";
import Consulting from "@/components/consulting/page";
import { ContactUs } from "@/components/contact-us/page";
import { HeroSection } from "@/components/home-hero-section/page";
import OurHistory from "@/components/our-history/page";
import OurProcess from "@/components/our-process/page";
import OurServices from "@/components/our-services/page";
import Testimonials from "@/components/testimonials/page";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs/>
      <OurServices />
      <Consulting />
      <OurProcess />
      <OurHistory />
      <CallToAction />
      <Testimonials />
      <ContactUs />
    </>
  );
}
