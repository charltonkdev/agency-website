import React from "react";
import { motion } from "framer-motion";
import SparklesBg from "./ui/SparklesBg";
import { Spotlight } from "./ui/Spotlight";
import LostOrb from "./LostOrb";

const Hero = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-grid-white/[0.07] relative items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="orange"
            />
            <Spotlight
                className="-top-40 left-20 md:left-80 md:-top-20"
                fill="blue"
            />
            <SparklesBg />
            <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <motion.p
                className="text-4xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b text-white max-w-4xl text-center mix-blend-difference"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Transforming Ideas into
                Digital Excellence
            </motion.p>
            <motion.p
                className="text-sm lg:textlg relative z-20 bg-clip-text text-transparent bg-gradient-to-b text-white py-8 max-w-sm md:max-w-4xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: .5 }}
            >
                Creating bespoke, innovative web solutions that drive your business forward.
            </motion.p>
            <motion.button
                type="button"
                className="text-sm relative z-20 px-4 py-2 bg-white text-black rounded-full text-center creativeBtn"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <span>Get Started</span>
            </motion.button>
            <motion.div
                className="w-full h-full absolute bottom-0"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.35 }}>
                <LostOrb />
            </motion.div>
        </div>
    );
}

export default Hero;
