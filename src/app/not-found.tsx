import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5EEDC] text-[#20251F] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full text-center p-8 rounded-3xl border-2 border-[#174D38] bg-[#FFFDF8] shadow-xl space-y-5">
        <span className="inline-block px-3 py-1 rounded-full bg-[#174D38]/10 text-[#174D38] font-mono text-xs font-bold">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-serif text-3xl font-bold text-[#174D38]">
          Lost in the Shipping Lanes
        </h1>
        <p className="text-sm text-[#454D41] leading-relaxed">
          The requested page or resource could not be found. Let&apos;s return back to the main portfolio.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#174D38] hover:bg-[#0E3525] px-6 py-3 font-mono text-xs font-bold text-[#F5EEDC] transition-all shadow-md"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
