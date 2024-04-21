import { useEffect, useRef } from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import { useWindowSize } from "../Hooks/useWindowSize";

export default function About({ aboutRef, container }) {
  const windowSize = useWindowSize();
  const isInView = useInView(aboutRef, { margin: "-40% " });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [1600, -850]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1600, 850]);

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
        Od 46 lat jesteśmy aktywną piekarnią i cukiernią, tworząca historię
        wspaniałych wypieków i satysfakcji klientów. Pasjonujemy się pieczeniem,
        co w połaczeniu z wieloletnim doświadczeniem, przekłada się na
        niezawodną jakość naszego chleba i wyrobów cukierniczych. Fundamentami
        Piekarenki są tradycyjne przepisy i świeże składniki, które gwarantują
        wyjątkowy smak i charakter naszych produktów. Współpraca z nami to nie
        tylko delektowanie się doskonałym smakiem, ale również gwarancja
        uwzględnienia indywidualnych potrzeb klienta oraz terminowość.
        {/* Jesteśmy aktywną piekarnią i cukiernią, specjalizującą się w produkcji
        wysokiej jakości chleba, wypieków i słodkości. Nasza działalność
        koncentruje się na stosowaniu tradycyjnych przepisów oraz świeżych
        składników, co gwarantuje wyjątkowy smak i charakter naszych produktów.
        Współpraca z nami to nie tylko delektowanie się doskonałym smakiem, ale
        również korzyści takie jak elastyczność, terminowość oraz uwzględnienie
        indywidualnych potrzeb klienta kocham Cię!!!. */}
      </motion.div>
      <motion.p
        className="flex md:my-10 mt-4 md:text-[4rem] text-[4em] self-center items-center justify-center w-full  "
        style={{ textShadow: "#FC0 1px 0 10px" }}
      >
        Nasi piekarze
      </motion.p>
      <motion.div className="flex flex-col mt-16 justify-center w-[100vw] items-center md:text-[2.6rem] text-[1.8rem] text-[#FFFFED] md:pb-16 pb-8">
        <motion.div
          className="flex flex-col md:flex-row w-full justify-evenly"
          style={windowSize.windowWidth > 768 ? { x: x1 } : { x: 50 }}
        >
          {[
            { num: 1, name: "Justyna" },
            { num: 2, name: "Mateusz" },
          ].map((item, index) => {
            return (
              <div className="flex h-64 w-fit gap-8 justify-center">
                <img
                  src={`Photo${item.num}.png`}
                  className="w-40 h-40 rounded-3xl"
                />
                <div className=" text-[30px]">{item.name}</div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row justify-evenly w-full "
          style={windowSize.windowWidth > 768 ? { x: x2 } : { x: 50 }}
        >
          {[
            { num: 3, name: "Katarzyna" },
            { num: 4, name: "Krystian" },
          ].map((item, index) => {
            return (
              <motion.div className="flex h-64 w-fit gap-8 justify-center">
                <motion.img
                  src={`Photo${item.num}.png`}
                  className="w-40 h-40 rounded-3xl"
                />
                <motion.div className=" text-[30px]">{item.name}</motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
