'use client'
import React from "react";
import { motion } from "framer-motion";
import LostOrb from "./LostOrb";

const Hero = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-grid-white/[0.07] relative items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

            <motion.p
                className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b text-white max-w-4xl text-center mix-blend-difference"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Transforming Ideas into
                <br />
                Digital Excellence
            </motion.p>
            <motion.p
                className="text-lg relative z-20 bg-clip-text text-transparent bg-gradient-to-b text-white py-8 max-w-4xl text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: .5 }}
            >
               Creating bespoke, innovative web solutions that drive your business forward.
            </motion.p>
            <LostOrb />
        </div>
    );
}

export default Hero;
