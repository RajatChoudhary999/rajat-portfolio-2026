import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#174D38]/15 bg-[#FAF6ED] py-10 font-mono text-xs text-[#78816B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-serif text-base font-bold text-[#174D38]">
              Rajat Choudhary <span className="text-[#F45B91]">/</span> Senior Full Stack Software Engineer
            </p>
            <p className="text-[11px] text-[#78816B]">
              TypeScript &bull; React &bull; React Native &bull; Node.js &bull; PostgreSQL &bull; AWS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/RajatChoudhary999"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#174D38] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rajatchoudhary999"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#174D38] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#home"
              className="text-[#174D38] font-bold hover:text-[#F45B91] transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#174D38]/10 text-center text-[11px] text-[#78816B]">
          © 2026 Rajat Choudhary. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
