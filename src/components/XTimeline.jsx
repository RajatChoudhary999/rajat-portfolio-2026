import { useEffect, useRef, useState } from "react";
import { useTweetWidgets } from "@/hooks/useTweetWidgets";

export default function XTimeline({ username, profileUrl }) {
  const containerRef = useRef(null);
  const status = useTweetWidgets();
  const [timelineState, setTimelineState] = useState("loading");

  useEffect(() => {
    if (status !== "ready" || !containerRef.current) {
      if (status === "error") {
        setTimelineState("error");
      }
      return undefined;
    }

    let cancelled = false;
    const container = containerRef.current;
    container.innerHTML = "";

    const timeout = window.setTimeout(() => {
      if (!cancelled) {
        setTimelineState("error");
      }
    }, 6000);

    window.twttr.widgets
      .createTimeline(
        {
          sourceType: "profile",
          screenName: username,
        },
        container,
        {
          theme: "dark",
          chrome: "noheader nofooter noborders transparent noscrollbar",
          height: 680,
          dnt: true,
        },
      )
      .then((element) => {
        window.clearTimeout(timeout);
        if (cancelled || !element) {
          setTimelineState("error");
          return;
        }
        setTimelineState("ready");
      })
      .catch(() => {
        window.clearTimeout(timeout);
        if (!cancelled) {
          setTimelineState("error");
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [profileUrl, status, username]);

  return (
    <div className="relative min-h-[680px]">
      <div ref={containerRef} className={timelineState === "ready" ? "block" : "hidden"} />

      {timelineState !== "ready" ? (
        <div className="flex min-h-[680px] flex-col items-center justify-center rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/[0.18] text-3xl text-white">
            X
          </div>
          <p className="mt-6 text-lg font-semibold text-white">
            {timelineState === "loading" ? "Loading timeline..." : "Timeline unavailable here."}
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-surface-900)] transition hover:-translate-y-0.5"
          >
            View posts on X
          </a>
        </div>
      ) : null}
    </div>
  );
}
