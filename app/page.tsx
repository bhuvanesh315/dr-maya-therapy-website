import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SplitIntro from "../components/SplitIntro";
import Specialties from "../components/Specialties";
import SupportSplit from "../components/SupportSplit";
import AboutLilac from "../components/AboutLilac";
import FAQs from "../components/FAQs";
import ProfessionalBackground from "../components/ProfessionalBackground";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SplitIntro />
      <Specialties />
      <SupportSplit />
      <AboutLilac />
      <FAQs />
      <ProfessionalBackground />
      <CallToAction />
      <Footer />
    </>
  );
}

