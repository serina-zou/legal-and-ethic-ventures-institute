"use client";

import caipoImg from "../../public/buddy.png";
import legalBuddyImg from "../../public/Legal AI Buddy.png";
import legalFrameworkImg from "../../public/Legal & Ethics Framework Research.png";
import experientialImg from "../../public/Experiential Ventures Pipeline for legal and ethics.jpeg";
import humanoidImg from "../../public/humanoid.jpeg";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const OurProjectsCarosal: React.FC = () => {
  const slides = useMemo(
    () => [
      { src: caipoImg, alt: "CAIPO wearable AI assistant" },
      { src: legalBuddyImg, alt: "Legal Buddy" },
      { src: experientialImg, alt: "Experiential Ventures Pipeline" },
      { src: legalFrameworkImg, alt: "Ethics and Legal Framework Research" },
      { src: humanoidImg, alt: "Humanoid robot project" },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => next(), 5000);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX.current;
    const diff = startX.current - endX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <section className="rounded-[25px] overflow-hidden py-12 px-4 mb-4">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-[43px] font-bold text-foreground">Our Projects</h2>
        <p className="max-w-[488px] text-center text-lg leading-[140%] text-muted-foreground">
          Few of the many projects you can work on as soon as you join
        </p>

        <div className="relative w-full max-w-[1428px] py-10">
          <div
            className="overflow-hidden rounded-[40px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center justify-center px-1 sm:px-4">
                  <div className="relative w-full max-w-[1100px] aspect-[16/9] sm:aspect-[2/1] rounded-[40px] overflow-hidden bg-gray-900/60 ring-1 ring-white/10">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1100px) 1100px, 100vw"
                      className="object-cover object-center"
                      priority={i === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              className="p-2"
              onClick={prev}
              aria-label="Previous slide"
              type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.12155 10.5001H21.0002V13.5001H8.12155L13.0609 18.4395L10.9396 20.5608L2.37891 12.0001L10.9396 3.43945L13.0609 5.56077L8.12155 10.5001Z"
                  fill="#999999"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2.5 flex-wrap justify-center max-w-full">
              {slides.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all shrink-0 ${
                      active
                        ? "w-4 h-4 bg-[#F2784B]"
                        : "w-3 h-3 bg-[#999999] opacity-50 hover:opacity-80"
                    }`}
                  />
                );
              })}
            </div>

            <button
              className="p-2"
              onClick={next}
              aria-label="Next slide"
              type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4775 13.5573H2.92383V10.4432H15.4775L10.6628 5.31619L12.7306 3.11426L21.0752 12.0002L12.7306 20.8862L10.6628 18.6843L15.4775 13.5573Z"
                  fill="#999999"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsCarosal;
