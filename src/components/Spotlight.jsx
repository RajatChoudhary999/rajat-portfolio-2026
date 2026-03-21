import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const root = document.documentElement;

    function handleMove(event) {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_var(--pointer-x,_50%)_var(--pointer-y,_20%),rgba(255,186,73,0.14),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(87,193,184,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(242,104,56,0.12),transparent_26%)]" />;
}


