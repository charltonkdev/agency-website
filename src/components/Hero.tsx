
import React from "react";
import dynamic from 'next/dynamic';
import SparklesBg from "./ui/SparklesBg";
import { Spotlight } from "./ui/Spotlight";
import HeroContent from "./ui/HeroContent";

// Dynamically import LostOrb without SSR
const LostOrb = dynamic(() => import('./LostOrb'), { ssr: false });

export default function Hero() {
    return (
        <div className="flex flex-col h-screen w-full bg-grid-white/[0.05] relative items-center justify-center">
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
            <HeroContent />
            <div className="w-full h-full absolute bottom-0">
                <LostOrb />
            </div>
        </div>
    );
}