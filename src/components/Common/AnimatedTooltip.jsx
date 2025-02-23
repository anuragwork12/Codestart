import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]));

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-row justify-center items-center ">
      {items.map((item, idx) => (
        <div
          className={cn("mr-4", "relative", "group", idx !== 0 && "-ml-10")} // Overlap only if not the first item
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 10 } }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{ translateX, rotate, whiteSpace: "nowrap" }}
              className={cn("absolute", "-top-16", "-left-1/2", "translate-x-1/2", "flex", "text-xs", "flex-col", "items-center", "justify-center", "rounded-md", "bg-white", "text-black", "z-50", "shadow-xl", "px-4", "py-2")}
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
              <div className="font-bold relative z-30 text-base">{item.name}</div>
              <div className="text-black text-xs bg-white py-1 px-2 rounded-md">{item.designation}</div>
            </motion.div>
          )}
          <img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            className="object-cover m-0 p-0 object-top rounded-full h-16 w-16 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedTooltip;
