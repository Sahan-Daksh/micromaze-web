import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Register from "./components/Register";
import Guidelines from "./components/Guidelines";
import Timeline from "./components/Timeline";
import Awards from "./components/Awards";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div>
      <Hero />
      <Intro/>
      <Countdown/>
      <About/>
      <Register/>
      <Guidelines/>
      <Timeline/>
      <Awards/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
