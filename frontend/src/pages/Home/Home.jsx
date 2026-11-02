
import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import Services from "../../components/home/Services";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Process from "../../components/home/Process";
import Testimonials from "../../components/home/Testimonials";
// import CTA from "../../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
     
      <WhyChooseUs />
      <Process />
      <Testimonials />
      {/* 
      <CTA /> */}
    </>
  );
}
