import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Products({ prodRef }) {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  return (
    <motion.div
      ref={prodRef}
      className="flex flex-col h-fit bg-[#141414] w-full min-h-[90vh]"
    >
      <motion.h1
        ref={ref1}
        className="flex md:text-[4rem] text-[3rem] text-white items-center justify-center custom-font  py-8"
        style={{ textShadow: "#FC0 1px 0 10px" }}
        initial="flase"
        animate={isInView1 ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0.4,
            transition: { duration: 0.8, ease: "easeInOut" },
          },
          visible: {
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          },
        }}
      >
        NASZE PRODUKTY
      </motion.h1>
      <motion.div className="flex md:flex-row flex-col w-full h-fit  justify-center items-center">
        <motion.img
          src="Bread3.png"
          alt="Sweet"
          className="flexw-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-3xl md:ml-40 my-8 md:mr-8"
        />
        <motion.p className="text-white custom-font text-4xl md:p-40 p-16 md:text-left">
          Każdego dnia oferujemy świeżo wypiekane bułki oraz chleb, którym
          możesz uraczyć się z dodatkiem oliwy lub masła
        </motion.p>
      </motion.div>
      <motion.div className="flex md:flex-row flex-col-reverse w-full h-fit bg-black justify-center items-center">
        <motion.p className="text-white custom-font text-4xl md:p-40 p-16 md:text-right">
          Zapraszamy również do degustacji naszych wyjątkowych wyrobów
          cukierniczych takich jak ciasta, pączki i drożdżówki
        </motion.p>
        <motion.img
          src="Sweet1.png"
          alt="Sweet"
          className="flex w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-3xl md:mr-40 my-8 md:ml-8"
        />
      </motion.div>
    </motion.div>
  );
}
