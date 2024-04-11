import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../Hooks/useWindowSize";
import { MdPlace } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
export default function Services({ serRef, container }) {
  const windowSize = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [152, -940]);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% " });

  useEffect(() => {
    console.log("serviece", isInView);
  }, [isInView]);
  return (
    <motion.div
      ref={serRef}
      className="flex relative items-center justify-center w-full h-fit min-h-[90vh] bg-white overflow-hidden"
    >
      <motion.div
        className="flex flex-col absolute z-30 gap-8"
        ref={ref}
        initial="flase"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, transition: { duration: 0.8 } },
          visible: {
            opacity: 1,

            transition: { duration: 0.8 },
          },
        }}
      >
        <motion.p
          className=" text-white  custom-font z-30 md:text-[2em] text-[1.6em] text-center mx-40 font-bold"
          style={{ textShadow: "0px 0px 24px #000" }}
        >
          OFERUJEMY
        </motion.p>
        <motion.div
          className="flex  text-white  custom-font z-30  text-center mx-40 font-bold"
          style={{ textShadow: "0px 0px 22px #000" }}
        >
          <TbTruckDelivery color="black" className="text-[5.2em]" />
          <motion.span className="md:text-[4.5em] text-[3em]">
            - Sprawną dostawę
          </motion.span>
        </motion.div>
        <motion.div
          className="flex  text-white  custom-font z-30 text-center mx-40 font-bold"
          style={{ textShadow: "0px 0px 22px #000" }}
        >
          <MdPlace color="black" className="text-[5.2em]" />
          <motion.span className="md:text-[4.5em] text-[3em]">
            - Jedzenie na miejscu
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex relative h-[100vh] w-full border-2 border-white justify-center"
        style={windowSize.windowWidth > 768 ? { y } : { y: 0 }}
      >
        <motion.img
          src="Bread2.jpg"
          alt="Photo"
          className="w-[1060px] object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
