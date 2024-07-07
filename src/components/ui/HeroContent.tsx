'use client'
import { motion } from "framer-motion";

export default function HeroContent() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <motion.p
                className="text-4xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b text-white max-w-4xl text-center mix-blend-difference"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Transforming Ideas into Digital Excellence
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
            
        </div>
    )
}