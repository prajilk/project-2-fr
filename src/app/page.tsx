import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Section1 from "@/components/section1/section1";
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/section3";
import Section4 from "@/components/section4/section4";
import Values from "@/components/values/values";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
