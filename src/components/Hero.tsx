"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Cpu,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Lock,
  Radio,
  Activity,
  Server,
  Zap,
} from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Hero() {
  const [pingCount, setPingCount] = useState(1420);
  const [isLivePing, setIsLivePing] = useState(true);
  const [latency, setLatency] = useState(0.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingCount((prev) => prev + 1);
      setLatency((Math.random() * 0.5 + 0.4).toFixed(1) as any);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow background circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-r from-[#06B6D4]/15 to-[#10B981]/15 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#10B981]/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Pill Alert */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#171717]/90 border border-[#262626] text-[10px] sm:text-xs font-mono text-zinc-300 mb-6 sm:mb-8 backdrop-blur-md shadow-inner max-w-full overflow-hidden">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[#10B981] font-semibold shrink-0">AIR-GAPPED SYSTEM</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-400 truncate">Zero Cloud Egress • 100% On-Premises</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.15] sm:leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-[#34D399] to-[#10B981]">
              Sovereign On-Premise
            </span>
            <br />
            <span className="text-white">Agentic AI Workbench</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-zinc-400 max-w-3xl font-sans leading-relaxed px-2">
            An air-gapped, privacy-first, on-premises AI Workbench engineered for confidential industrial environments, chemical engineering telemetry, and P&ID automation.
          </p>

          {/* Dynamic Shields / Badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] text-zinc-300">
              <Terminal className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Python 3.10+</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] text-zinc-300">
              <Server className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Ollama Air-Gapped</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
              <span>MIT License</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#10B981]/40 text-[#10B981] bg-[#10B981]/5">
              <Lock className="w-3.5 h-3.5" />
              <span>100% Local Sovereignty</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4">
            <a
              href="#installation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-mono font-bold text-black bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-xl hover:brightness-110 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/deyjayprakash123-cloud/sih"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-mono font-medium text-zinc-200 bg-[#171717] hover:bg-[#262626] border border-[#262626] rounded-xl transition-all active:scale-95"
            >
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Interactive Live Loopback Audit Ticker */}
          <div className="mt-10 sm:mt-14 w-full max-w-4xl glass-panel rounded-2xl p-4 sm:p-5 border border-[#262626] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
              
              <div className="flex items-center gap-3 w-full md:w-auto text-left">
                <div className="p-2 rounded-lg bg-[#10B981]/10 text-[#10B981] shrink-0">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-zinc-400 text-[10px] uppercase tracking-wider">Local Loopback Socket</div>
                  <div className="text-white font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    <span>http://127.0.0.1:11434</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full md:w-auto border-t md:border-t-0 md:border-l border-[#262626] pt-3 md:pt-0 md:pl-6 text-left">
                <div>
                  <div className="text-zinc-500 text-[9px] sm:text-[10px] uppercase">Latency</div>
                  <div className="text-[#06B6D4] font-bold text-xs sm:text-sm">{latency} ms</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[9px] sm:text-[10px] uppercase">Cloud Egress</div>
                  <div className="text-[#10B981] font-bold text-xs sm:text-sm">0.00 KB</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[9px] sm:text-[10px] uppercase">Air-Gap</div>
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 shrink-0" /> SECURE
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
