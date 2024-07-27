import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Countdown from "../components/Countdown";
import Milestones from "../components/Timeline";
import Awards from "../components/Awards";
import FAQ from "../components/FAQ";
import Merch from "../components/Merch";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import FooterExport from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

export default function MainPage() {
  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prevSegment) => (prevSegment + 1) % 4); // Change 4 to the number of segments you have
    }, 5000); // Change the interval duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero />

      <Intro />

      <About />

      <Countdown />

      <Milestones />

      <Awards />

      <AnimatedBackground isActive={activeSegment === 0}>
        <FAQ />
      </AnimatedBackground>
      <AnimatedBackground isActive={activeSegment === 1}>
        <Merch />
      </AnimatedBackground>
      <AnimatedBackground isActive={activeSegment === 2}>
        <Partners />
      </AnimatedBackground>
      <AnimatedBackground isActive={activeSegment === 3}>
        <Contact />
      </AnimatedBackground>

      <FooterExport />
    </>
  );
}
