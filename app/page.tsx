import { AboutUs } from "@/components/Home/aboutUs";
import { CallToAction } from "@/components/Home/callToAction";
import Consulting from "@/components/Home/consulting";
import { ContactUs } from "@/components/Home/contactUs";
import { HeroSection } from "@/components/Home/heroSection";
import OurHistory from "@/components/Home/ourHistory";
import OurProcess from "@/components/Home/ourProcess";
import OurServices from "@/components/Home/ourServices";
import OurTeam from "@/components/Home/ourTeam";
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
      <OurTeam />
      <ContactUs />
    </>
  );
}
