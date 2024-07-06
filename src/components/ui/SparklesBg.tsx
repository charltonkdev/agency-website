"use client";
import React from "react";
import { SparklesCore } from "./Sparkles";

export default function SparklesBg() {
  return (
    <div className="h-[40rem] absolute top-0 opacity-50 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>      
    </div>
  );
}
