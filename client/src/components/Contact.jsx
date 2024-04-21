import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { PiPhoneFill } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";
import { MdPlace } from "react-icons/md";

const variantsMenu = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: { type: "spring" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" },
  },
};

export default function Contact({ contRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("contact", isInView);
  }, [isInView]);
  return (
    <motion.div
      ref={contRef}
      className="flex flex-col w-full justify-center items-center custom-font gap-8 mt-16"
    >
      <motion.h1 className="flex text-white text-6xl">Masz pytania?</motion.h1>
      <motion.h1 className="flex text-white text-4xl">
        Napisz lub zadzwoń!
      </motion.h1>
      <motion.div
        ref={ref}
        className="flex flex-col md:flex-row w-full h-full justify-center items-center md:m-16 m-4 md:gap-32 gap-2"
        initial="false"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={variantsMenu}
        >
          <TbMailFilled color="white" fontSize={50} cursor={"pointer"} />
          <motion.p className="flex text-white">piekarenka@gmail.com</motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={variantsMenu}
        >
          <PiPhoneFill color="white" fontSize={50} cursor={"pointer"} />
          <motion.p className="flex text-white">964 446 102</motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={variantsMenu}
        >
          <MdPlace color="white" fontSize={50} cursor={"pointer"} />
          <motion.p className="flex text-white">
            ul. chlebowa 13, 50-014 Wrocław
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
