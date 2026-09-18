"use client";

import React from "react";
import { Shield, Lock, ArrowUp } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#262626] relative overflow-hidden py-12">
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand & Attribution */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#06B6D4]/20 border border-[#10B981]/40 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#10B981]" />
            </div>
            <div>
              <div className="text-white font-mono font-bold text-sm tracking-wider">
                SOVEREIGN<span className="text-[#10B981]">.AI</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Built by <span className="text-white font-medium">Jayaprakash Dey</span>.
              </p>
            </div>
          </div>

          {/* Center: Security Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-zinc-400">
            <Lock className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Air-Gapped Sovereign AI System • 100% On-Premises</span>
          </div>

          {/* Right Side: Links & Scroll to top */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com/deyjayprakash123-cloud/sih"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <span>GitHub Repo</span>
            </a>

            <span className="text-zinc-700">•</span>

            <span className="text-zinc-400">MIT License</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#171717] hover:bg-[#262626] border border-[#262626] text-zinc-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#1a1a1a] text-center text-[11px] font-mono text-zinc-600">
          © {new Date().getFullYear()} Sovereign On-Premise Agentic AI Workbench. Confidential & Industrial Grade.
        </div>
      </div>
    </footer>
  );
}
