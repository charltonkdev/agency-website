"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCard";

export default function ProgLangList() {
  return (
    <div className="w-[calc(50vw)] md:w-[30vw] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative left-[calc(12vw)] overflow-hidden">
        
      <div className="rotate-45 right-24 relative">
      <InfiniteMovingCards
        items={leftProg}
        direction="left"
        speed="normal"
      />
      </div>
      <div className="rotate-45 left-12 relative">
      <InfiniteMovingCards
        items={rightProg}
        direction="right"
        speed="normal"
      />
      </div>
    </div>
  );
}

const leftProg = [
  {
    name: "Works01",
    title: "Webflow",
    img: "",
  },
  {
    name: "Works02",
    title: "WordPress",
    img: "",
  },
  {
    name: "Works03",
    title: "NextJS",
    img: "",
  },
];

const rightProg = [
    {
      name: "Works04",
      title: "VueJS",
      img: "",
    },
    {
      name: "Works05",
      title: "TypeScript",
      img: "",
    },
    {
      name: "Works05",
      title: "React",
      img: "",
    },
  ];
