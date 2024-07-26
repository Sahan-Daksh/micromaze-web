import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollWrapper = ({ children }) => {

  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        { children }
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;