"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#F5EEDC] text-[#20251F] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full text-center p-8 rounded-3xl border-2 border-[#174D38] bg-[#FFFDF8] shadow-xl space-y-5">
        <span className="inline-block px-3 py-1 rounded-full bg-[#F45B91]/15 text-[#F45B91] font-mono text-xs font-bold">
          System Recovery
        </span>
        <h1 className="font-serif text-3xl font-bold text-[#174D38]">
          Something Went Astray
        </h1>
        <p className="text-sm text-[#454D41] leading-relaxed">
          An unexpected render cycle occurred. You can safely reset the interface.
        </p>
        <div className="pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#174D38] hover:bg-[#0E3525] px-6 py-3 font-mono text-xs font-bold text-[#F5EEDC] transition-all shadow-md"
          >
            ↻ Reset Interface
          </button>
        </div>
      </div>
    </div>
  );
}
