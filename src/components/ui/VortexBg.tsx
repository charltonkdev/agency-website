import React from "react";
import { Vortex } from "./Vortex";

export default function VortexBg() {
  return (
    <div className="absolute pointer-events-none left-0 w-[calc(100%-4rem)] mx-auto rounded-md  h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        
      </Vortex>
    </div>
  );
}
