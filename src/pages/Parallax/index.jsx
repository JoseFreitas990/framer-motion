import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./styles.scss";

const Parallax = () => {
  const offset = 50;
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight;
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset;

  const y = useTransform(scrollY, [initial, final], [offset, -offset]);

  return (
    <div className='section'>
      <motion.div className='parallax' style={{ y }}>
        <motion.h2 style={{ scale: scrollY * offset }}>Hello</motion.h2>
      </motion.div>
    </div>
  );
};

export default Parallax;
