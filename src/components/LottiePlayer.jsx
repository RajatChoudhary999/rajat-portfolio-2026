import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";

export default function LottiePlayer({
  animationData,
  className = "w-full h-full min-h-[200px]",
  loop = true,
  autoplay = true,
  fallback = null,
}) {
  const [data, setData] = useState(() => (typeof animationData === "function" ? null : animationData));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (typeof animationData === "function") {
      animationData()
        .then((res) => {
          if (isMounted) setData(res);
        })
        .catch((err) => {
          console.warn("Lottie dynamic load error:", err);
        });
    } else {
      setData(animationData);
    }
    return () => {
      isMounted = false;
    };
  }, [animationData]);

  const instance = useLottie({
    src: data,
    loop: prefersReducedMotion ? false : loop,
    autoplay: prefersReducedMotion ? false : autoplay,
  });

  if (prefersReducedMotion && fallback) {
    return fallback;
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <div
        ref={instance?.setDisplayRef}
        style={{ width: "100%", height: "100%", minHeight: "180px" }}
      />
    </div>
  );
}
