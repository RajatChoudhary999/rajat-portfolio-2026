import { useEffect, useState } from "react";

export function useTweetWidgets() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const scriptId = "twitter-wjs";
    const existingScript = document.getElementById(scriptId);

    function markReady() {
      setStatus("ready");
    }

    function markError() {
      setStatus("error");
    }

    if (window.twttr?.widgets) {
      markReady();
      return undefined;
    }

    if (existingScript) {
      existingScript.addEventListener("load", markReady);
      existingScript.addEventListener("error", markError);
      return () => {
        existingScript.removeEventListener("load", markReady);
        existingScript.removeEventListener("error", markError);
      };
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.onload = markReady;
    script.onerror = markError;
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", markReady);
      script.removeEventListener("error", markError);
    };
  }, []);

  return status;
}
