import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

import Keyboard from "../assets/graphics/keyboard.png";
import { RandomHumaan } from "../components/HummansLoader";
import { useMediaQuery } from "@uidotdev/usehooks";

const TopKeyboard = () => (
  <>
    <motion.div
      className="absolute w-[80%] md:w-[60%] h-fit overflow-hidden"
      style={{
        top: 0,
        left: "50%",
        translateX: "-50%",
      }}
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: "-50%",
        transition: { delay: 1, duration: 1 },
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-white via-white via-60% to-transparent z-10"></div>
      <img src={Keyboard} className="contrast-125" />
    </motion.div>
  </>
);

const BottomPeople = () => (
  <motion.div
    className="absolute w-full flex justify-center gap-6 scale-50 md:scale-100 -translate-y-5 md:translate-y-0"
    initial={{
      opacity: 0,
      top: "100%",
    }}
    animate={{
      opacity: 1,
      top: "80%",
      transition: { delay: 1, duration: 1 },
    }}
  >
    <motion.div
      key={0}
      style={{
        scale: 0.9 + Math.random() * 0.3,
        translateY: -200 + Math.random() * 100,
      }}
    >
      <div className="relative">
        <RandomHumaan />
      </div>
    </motion.div>
    <motion.div
      key={0}
      style={{
        scale: 0.9 + Math.random() * 0.3,
        translateY: -150 + Math.random() * 100,
      }}
    >
      <div className="relative">
        <RandomHumaan />
      </div>
    </motion.div>
    <motion.div
      key={1}
      style={{
        scale: 0.9 + Math.random() * 0.3,
        translateY: -50 + Math.random() * 100,
      }}
    >
      <div className="relative">
        <RandomHumaan />
      </div>
    </motion.div>
    <motion.div
      key={2}
      style={{
        scale: 0.9 + Math.random() * 0.3,
        translateY: -50 + Math.random() * 100,
        rotateY: 180,
      }}
    >
      <div className="relative">
        <RandomHumaan />
      </div>
    </motion.div>
    <motion.div
      key={3}
      style={{
        scale: 0.9 + Math.random() * 0.3,
        translateY: -150 + Math.random() * 100,
        rotateY: 180,
      }}
    >
      <div className="relative">
        <RandomHumaan />
      </div>
    </motion.div>
    <motion.div
      key={3}
      style={{
        scale: 0.9 + Math.random() * 0.3,
        translateY: -200 + Math.random() * 100,
        rotateY: 180,
      }}
    >
      <div className="relative">
        <RandomHumaan />
      </div>
    </motion.div>
  </motion.div>
);

export default function HeroSection() {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <motion.section
      initial={{ maxHeight: "100vh" }}
      animate={{
        maxHeight: isMd ? "36rem" : "26rem",
        transition: { delay: 0.5, duration: 1 },
      }}
      className="sticky top-0 flex justify-center items-center h-screen overflow-hidden mb-12"
    >
      <TopKeyboard />
      <motion.p
        className="z-50 relative text-4xl md:text-6xl font-bold text-center text-dev-brand font-serif"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
      >
        #We
        <TypeAnimation
          className="text-dev-complement"
          wrapper="span"
          repeat={0}
          cursor={false}
          sequence={[1550, "Innovated", 1000, "Made", 1000, "Coded"]}
        />
      </motion.p>
      <BottomPeople />
      <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-20"></div>
    </motion.section>
  );
}
