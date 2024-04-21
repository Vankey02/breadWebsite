import { useState, useRef, useEffect } from "react";
import { GiSlicedBread } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { useWindowSize } from "./Hooks/useWindowSize";
import Lenis from "@studio-freight/lenis";
import About from "./components/About";
import Services from "./components/Services";
import MainPage from "./components/MainPage";
import { motion, useInView } from "framer-motion";
import "./App.css";
import Products from "./components/Products";
import Contact from "./components/Contact";

const variantsMenu = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 0.6,
    x: 0,
    transition: { duration: 0.5 },
  },
};

function App() {
  const container = useRef(null);
  const aboutRef = useRef(null);
  const mainRef = useRef(null);
  const prodRef = useRef(null);
  const serRef = useRef(null);
  const contRef = useRef(null);

  const windowSize = useWindowSize();
  const [menuVisibility, setMenuVisibility] = useState(
    windowSize.windowWidth > 768 ? true : false
  );
  const aboutInView = useInView(aboutRef, { margin: "-50%" });
  const mainInView = useInView(mainRef, { margin: "-50%" });
  const prodInView = useInView(prodRef, { margin: "-50%" });
  const serInView = useInView(serRef, { margin: "-50%" });
  const contInView = useInView(contRef, { margin: "-20%" });
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    contInView && setActiveSection(5);
    console.log("contact");
  }, [contInView]);
  useEffect(() => {
    serInView && setActiveSection(4);
    console.log("service");
  }, [serInView]);
  useEffect(() => {
    prodInView && setActiveSection(3);
    console.log("prod");
  }, [prodInView]);
  useEffect(() => {
    mainInView && setActiveSection(1);
    console.log("main");
  }, [mainInView]);
  useEffect(() => {
    aboutInView && setActiveSection(2);
    console.log("about");
  }, [aboutInView]);
  const refs = [mainRef, aboutRef, prodRef, serRef, contRef];

  const sections = ["STRONA GŁÓWNA", "O NAS", "PRODUKTY", "USŁUGI", "KONTAKT"];

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <motion.div className="flex flex-col relative w-full  justify-start items-center bg-black overflow-hidden">
        <motion.div
          className="flex flex-col md:fixed absolute self-start m-10 w-fit h-fit hover:cursor-pointer z-40 md:mix-blend-difference invert"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1, transition: { type: "spring", delay: 0.5 } },
          }}
        >
          <GiSlicedBread fontSize={70} />
          <p className="custom-font">PIEKARENKA</p>
        </motion.div>
        <motion.div className="flex flex-col items-end fixed z-50 m-10 md:mix-blend-difference self-end">
          {windowSize.windowWidth < 768 && (
            <motion.button
              className="flex text-white my-4"
              onClick={() => {
                setMenuVisibility((prev) => !prev);
              }}
            >
              <TiThMenu className="text-[3em]" />
            </motion.button>
          )}
          {menuVisibility && (
            <motion.ul
              className="flex flex-col gap-4 text-right text-white custom-font "
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.5 },
                },
              }}
            >
              {sections.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    className={`cursor-pointer origin-right opacity-60`}
                    animate={
                      index + 1 === activeSection
                        ? { scale: 2.2, opacity: 1 }
                        : { scale: 1, opacity: 0.6 }
                    }
                    variants={variantsMenu}
                    onClick={() => {
                      refs[index].current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {item}
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </motion.div>
        <motion.div
          className="flex flex-col relative overflow-hidden items-center  justify-start w-full"
          ref={container}
        >
          <MainPage mainRef={mainRef} container={container} />
          <About aboutRef={aboutRef} container={container} />
          <Products prodRef={prodRef} />
          <Services serRef={serRef} container={container} />
          <Contact contRef={contRef} />
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;
