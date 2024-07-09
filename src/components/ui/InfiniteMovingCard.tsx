"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    title?: string;
    img?: string;
  }[];
  direction?: "left" | "right" | "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      switch (direction) {
        case "left":
          containerRef.current.style.setProperty("--animation-direction", "forwards");
          containerRef.current.style.setProperty("--animation-axis", "horizontal");
          break;
        case "right":
          containerRef.current.style.setProperty("--animation-direction", "reverse");
          containerRef.current.style.setProperty("--animation-axis", "horizontal");
          break;
        case "up":
          containerRef.current.style.setProperty("--animation-direction", "forwards");
          containerRef.current.style.setProperty("--animation-axis", "vertical");
          break;
        case "down":
          containerRef.current.style.setProperty("--animation-direction", "reverse");
          containerRef.current.style.setProperty("--animation-axis", "vertical");
          break;
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        direction === "left" || direction === "right"
          ? "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          : "[mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex",
          direction === "left" || direction === "right" ? "flex-row" : "flex-col",
          "min-w-full shrink-0 gap-4 py-4 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="h-full relative overflow-hidden rounded-2xl border border-b-0 flex-shrink-0 border-slate-700"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            {item.img && (
              <Image alt={item.title || "Image"} src={item.img} width={500} height={300} style={{ width: 'auto', height: 'auto' }} priority  />
            )}
            {item.title && (
              <p className="relative w-max px-6 py-2">{item.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
