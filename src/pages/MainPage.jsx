import { useEffect, useState } from "react";
import Hero from "./layouts/Hero";
import Intro from "./layouts/Intro";
import About from "./layouts/About";
import Countdown from "./layouts/Countdown";
import Timeline from "./layouts/Timeline";
import Awards from "./layouts/Awards";
import FAQ from "./layouts/FAQ";
import Merch from "./layouts/Merch";
import Partners from "./layouts/Partners";
import Contact from "./layouts/Contact";
import FooterExport from "./layouts/Footer";
import AnimatedBackground from "../utils/AnimatedBackground";
import zIndex from "@mui/material/styles/zIndex";

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

      <Timeline />

      <Awards />

      <AnimatedBackground isActive={activeSegment === 0}>
        <FAQ />
      </AnimatedBackground>
      <div>
        <AnimatedBackground isActive={activeSegment === 1}  style={{ zIndex: 1000 }}>
          <Merch />
        </AnimatedBackground>
      </div>

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
