import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useWindowSize } from "../Hooks/useWindowSize";

export default function MainPage({ mainRef, container }) {
  const windowSize = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 940]);
  //   useMotionValueEvent(y, "change", (latest) => {
  //     console.log("Main:", latest);
  //   });

  return (
    <>
      <motion.div className="flex relative min-h-[90vh]" ref={mainRef}>
        <motion.div
          className="flex flex-col absolute z-30 inset-0 items-center justify-center custom-font"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 0.7 },
            },
          }}
        >
          <motion.h2
            className="md:text-[7em] text-[4em] text-white"
            style={{ textShadow: "#FC0 1px 0 10px" }}
          >
            PIEKARENKA
          </motion.h2>
          <motion.h2
            className="text-[1em] text-white"
            style={{ textShadow: "#FC0 1px 0 10px" }}
          >
            PIECZEMY Z PASJĄ
          </motion.h2>
        </motion.div>
        <motion.div
          className="flex relative bg-black md:w-[1152px] w-[640px] h-[90vh] justify-center "
          style={windowSize.windowWidth > 768 ? { y } : { y: 0 }}
        >
          <motion.img
            src="Bread1.jpg"
            alt="Photo"
            className="flex relative md:w-[1440px] w-[800px] object-cover"
          />

          <motion.div className="absolute w-full h-[90vh] bg-gradient-to-r from-[#000000] via-transparent to-[#000000]"></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
