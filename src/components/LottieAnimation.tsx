"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  fallback?: React.ReactNode;
}

export default function LottieAnimation({
  animationData,
  className = "w-full h-full",
  loop = true,
  autoplay = true,
  fallback = null,
}: LottieAnimationProps) {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<any>(() =>
    typeof animationData === "function" ? null : animationData
  );

  useEffect(() => {
    setMounted(true);
    let active = true;

    if (typeof animationData === "function") {
      animationData()
        .then((res: any) => {
          if (active) {
            setData(res?.default || res);
          }
        })
        .catch((err: any) => {
          console.warn("Lottie loader error:", err);
        });
    } else {
      setData(animationData?.default || animationData);
    }

    return () => {
      active = false;
    };
  }, [animationData]);

  if (!mounted || !data) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {fallback || (
          <div className="w-8 h-8 rounded-full border-2 border-[#174D38]/20 border-t-[#F45B91] animate-spin" />
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Lottie
        src={data}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  );
}
