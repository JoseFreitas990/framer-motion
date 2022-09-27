import React, { useRef, useEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import "./styles.scss";

const Lesson1 = () => {
  let logoRef = useRef(null);

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    gsap.to(".circle", {
      duration: 1,
      translateX: 0,
      opacity: 1,
      stagger: 0.2,
    });
  }, []);

  const handleExpand = () => {
    if (expand) {
      setExpand(false);
      gsap.to(".circle%20red", {
        scale: 2,
      });
    } else {
      setExpand(true);

      gsap.to(".circle", {
        scale: 1,
      });
    }
  };

  return (
    <div className='section'>
      <div className='circle' onClick={handleExpand} />
      <div className='circle red' onClick={handleExpand} />
      <div className='circle blue' onClick={handleExpand} />
    </div>
  );
};

export default Lesson1;
