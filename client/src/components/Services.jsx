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

  const y = useTransform(scrollYProgress, [0, 1], [390, -960]);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% " });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { margin: "-38% " });

  return (
    <motion.div className="flex flex-col w-full">
      <motion.div
        ref={serRef}
        className="flex flex-col relative items-center justify-center w-full h-fit min-h-[90vh] bg-white overflow-hidden"
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
          className="flex relative h-[100vh] w-full justify-center"
          style={windowSize.windowWidth > 768 ? { y } : { y: 0 }}
        >
          <motion.img
            src="Bread2.jpg"
            alt="Photo"
            className="w-[1060px] object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex relative h-[140vh] w-full bg-black justify-center"
        ref={ref1}
      >
        <motion.div
          className="absolute top-10 text-white custom-font md:text-[4rem] text-[2rem] z-20"
          style={{ textShadow: "#FC0 1px 0 10px" }}
        >
          Odwiedź nasz przytulny lokal!
        </motion.div>

        <motion.div
          className=" text-white lg:text-[2.5rem] text-[2rem] custom-font absolute w-[60vw] top-1/3 z-40 rounded-xl text-center  p-16"
          style={{
            textShadow: "0px 0px 22px #000",
          }}
        >
          Zapraszamy do naszego lokalu, który zachwyca swoją atomsferą i
          unoszącymi się zapachami. Niezależnie od tego jaki jest cel twojej
          wizyty, zapewniamy idealne miejsce do relaksu oraz cieszenia się
          wspaniałymi smakami.
        </motion.div>
        <motion.img
          src="H.jpg"
          alt="Photo"
          className="w-[1060px] object-cover rounded-t-3xl z-30"
          initial="flase"
          animate={!isInView1 ? "visible" : "hidden"}
          variants={{
            hidden: {
              width: "70vw",
              opacity: 0.6,
              marginTop: 150,
              transition: { duration: 1, ease: "easeInOut" },
            },
            visible: {
              opacity: 1,
              width: "100vw",
              marginTop: 0,

              transition: { duration: 1, ease: "easeInOut" },
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
}
