"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const startPlayback = () => {
      video.play().catch(() => {});
    };

    if (document.readyState === "complete") {
      startPlayback();
    } else {
      window.addEventListener("load", startPlayback, { once: true });
    }

    return () => window.removeEventListener("load", startPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      poster="/about-hero.webp"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/photo.mp4" type="video/mp4" />
    </video>
  );
}
