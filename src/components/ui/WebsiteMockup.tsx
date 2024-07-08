"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCard";

export default function WebsiteMockup() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Works01",
    title: "",
    img: "/works/works01.png",
  },
  {
    name: "Works02",
    title: "",
    img: "/works/works02.png",
  },
  {
    name: "Works03",
    title: "",
    img: "/works/works03.png",
  },
  {
    name: "Works04",
    title: "",
    img: "/works/works04.png",
  },
  {
    name: "Works05",
    title: "",
    img: "/works/works05.png",
  },
];
