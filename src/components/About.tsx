'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation plays only once
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false); // Reset the animation when scrolling up
        }
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className='relative flex flex-col w-full h-screen p-12 lg:p-24 justify-center items-center'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='flex z-50 flex-col w-full text-xl leading-[2] md:text-3xl max-w-4xl md:leading-[2]'
      >
        Welcome to iDEA agency, where creativity meets technology. We are a team of passionate designers and developers dedicated to crafting stunning websites that not only look great but also deliver exceptional user experiences. With years of industry experience, we specialize in creating custom digital solutions tailored to your business needs. Our mission is to elevate your brand online and help you stand out in the digital landscape.
      </motion.div>
    </div>
  );
};

export default About;
