'use client';
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@/public/Assets/images/images";

// Aazhimin-inspired marine color themes
const colorThemes = [
  {
    secondary: "bg-gradient-to-br from-blue-600 to-teal-500",
    buttonHover: "hover:from-blue-500 hover:to-teal-400",
    bgLight: "bg-blue-50/20",
    borderAccent: "border-blue-400",
    textColor: "text-blue-700"
  },
  {
    secondary: "bg-gradient-to-tr from-emerald-600 to-cyan-500",
    buttonHover: "hover:from-emerald-500 hover:to-cyan-400",
    bgLight: "bg-emerald-50/20",
    borderAccent: "border-emerald-400",
    textColor: "text-emerald-700"
  },
  {
    secondary: "bg-gradient-to-tr from-indigo-600 to-sky-500",
    buttonHover: "hover:from-indigo-500 hover:to-sky-400",
    bgLight: "bg-indigo-50/20",
    borderAccent: "border-indigo-400",
    textColor: "text-indigo-700"
  },
];

interface Item { id: number; name: string; description: string; image: string; href: string; }
interface Section { title: string; items: Item[]; }
interface AazhiminComponentProps { sections: Section[]; sectionId: number; }

export default function AazhiminComponent({ sections, sectionId }: AazhiminComponentProps) {
  const theme = colorThemes[sectionId % colorThemes.length];
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const scrollByCard = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild instanceof HTMLElement
        ? scrollRef.current.firstChild.offsetWidth + 16
        : 300;
      scrollRef.current.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    scroller.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => {
      scroller.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="relative flex flex-col py-4 md:py-16 bg-gradient-to-br from-white via-blue-50 to-emerald-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Assets/images/ocean-waves.svg')] bg-repeat opacity-5 z-0" />

      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto w-full px-6 md:px-10 mb-20"
        >
          <h2 className={`text-2xl md:text-4xl font-extrabold text-center mb-12 ${theme.textColor} drop-shadow-lg`}>
            {section.title}
          </h2>

          {/* Arrows */}
          <div className="flex justify-center mb-6 space-x-6">
            <button
              onClick={() => scrollByCard("left")}
              disabled={isAtStart}
              className={`p-3 rounded-full border ${theme.borderAccent} ${isAtStart ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"}`}
            >
              <Image src={ChevronDownIcon} alt="Left" className="h-5 w-5 rotate-90" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              disabled={isAtEnd}
              className={`p-3 rounded-full border ${theme.borderAccent} ${isAtEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"}`}
            >
              <Image src={ChevronDownIcon} alt="Right" className="h-5 w-5 -rotate-90" />
            </button>
          </div>

          <motion.div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory snap-center gap-6 px-4 scrollbar-hide scroll-smooth focus:outline-none"
            whileTap={{ cursor: "grabbing" }}
            tabIndex={0}
          >
            {section.items.map(item => (
              <motion.div
                key={item.id}
                className={`flex-shrink-0 w-[75vw] md:w-[40%] lg:w-[28%] bg-white rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${theme.borderAccent}`}
              >
                <div className="w-full h-52 relative">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <Link
                    href={item.href}
                    className={`px-5 py-2 rounded-full ${theme.secondary} ${theme.buttonHover} text-white text-sm transition-all shadow hover:shadow-lg inline-block text-center`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
