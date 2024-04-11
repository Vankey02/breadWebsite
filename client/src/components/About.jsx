import { useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

export default function About({ aboutRef }) {
  const isInView = useInView(aboutRef, { margin: "-40% " });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      ref={aboutRef}
      className="flex flex-col w-full h-fit min-h-[90vh] bg-black custom-font text-white z-30 justify-center "
    >
      <motion.p
        className="flex md:ml-40 ml-8 md:my-10 my-4 md:text-[4rem] text-[4em] self-start justify-self-start"
        style={{ textShadow: "#FC0 1px 0 10px" }}
        initial="flase"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -50, transition: { duration: 0.8 } },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          },
        }}
      >
        O NAS
      </motion.p>
      <motion.div
        className="flex md:mx-40 mx-8 md:text-[2.6rem] text-[1.8rem] text-[#FFFFED] md:pb-16 pb-8"
        initial="flase"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: 50, transition: { duration: 0.8 } },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          },
        }}
      >
        Jesteśmy aktywną piekarnią i cukiernią, specjalizującą się w produkcji
        wysokiej jakości chleba, wypieków i słodkości. Nasza działalność
        koncentruje się na stosowaniu tradycyjnych przepisów oraz świeżych
        składników, co gwarantuje wyjątkowy smak i charakter naszych produktów.
        Współpraca z nami to nie tylko delektowanie się doskonałym smakiem, ale
        również korzyści takie jak elastyczność, terminowość oraz uwzględnienie
        indywidualnych potrzeb klienta.
      </motion.div>
    </motion.div>
  );
}
