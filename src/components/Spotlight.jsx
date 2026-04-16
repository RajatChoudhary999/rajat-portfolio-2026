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

  return <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_var(--pointer-x,_50%)_var(--pointer-y,_20%),rgba(212,180,131,0.12),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(141,116,81,0.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,244,228,0.06),transparent_26%)]" />;
}
