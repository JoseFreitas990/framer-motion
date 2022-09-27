import React, { useRef } from "react";
import "./styles.scss";
import { motion, useScroll } from "framer-motion";
const InView = () => {
  const firstSectionRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const header = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: { duration: 1 },
    },
  };

  const subHeader = {
    hidden: {
      translateY: 100,
      opacity: 0,
    },
    show: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <>
      <div className='first-section'>
        <motion.h1
          variants={header}
          animate='show'
          initial='hidden'
          className='header'
        >
          Slide from left
        </motion.h1>
        <motion.h2
          variants={subHeader}
          animate='show'
          initial='hidden'
          className='sub-header'
        >
          Go up
        </motion.h2>
        <motion.div></motion.div>
      </div>
      <div className='second-section'>
        <motion.h2
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1,
            translateX: 200,
          }}
        >
          Show me when InView
        </motion.h2>
      </div>
    </>
  );
};

export default InView;
