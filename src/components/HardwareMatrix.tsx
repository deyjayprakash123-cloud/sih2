"use client";

import React, { useState } from "react";
import { HardDrive, Cpu, ShieldCheck, CheckCircle2, Sliders, Layers, Sparkles } from "lucide-react";

export default function HardwareMatrix() {
  const [activeOcr, setActiveOcr] = useState<"easyocr" | "tesseract">("easyocr");

  const ocrConfigs = {
    easyocr: {
      title: "EasyOCR (GPU Accelerated - Recommended)",
      framework: "PyTorch + CUDA Engine",
      vram: "0.8 GB VRAM",
      accuracy: "99.4% on ISA-5.1 P&ID Blueprint Scans",
      desc: "Deep learning based text detector optimized for low-contrast technical drawings, rotated valve labels, and noisy blueprint background grain.",
      code: `# EasyOCR Setup in config.py
OCR_ENGINE = "easyocr"
EASYOCR_LANGUAGES = ["en"]
GPU_ACCELERATION = True  # Automatically uses CUDA / Metal`,
    },
    tesseract: {
      title: "Tesseract OCR (CPU Lightweight Fallback)",
      framework: "C++ Engine / PyTesseract",
      vram: "0.0 GB VRAM (Pure CPU)",
      accuracy: "94.2% on Standard Clear P&ID Scans",
      desc: "Ultra-lightweight CPU fallback requiring no GPU or VRAM. Ideal for zero-GPU server racks, virtual machines, and legacy laptops.",
      code: `# Tesseract Setup in config.py
OCR_ENGINE = "tesseract"
TESSERACT_PATH = r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
CPU_THREADS = 4`,
    },
  };

  return (
    <section id="hardware" className="py-24 bg-[#0A0A0A] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#06B6D4] mb-4">
            <HardDrive className="w-3.5 h-3.5" />
            <span>HARDWARE & OCR SPECS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hardware Constraints & OCR Engine
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-sans">
            Designed to run smoothly on modest industrial workstation hardware starting with just 4GB VRAM.
          </p>
        </div>

        {/* System Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel rounded-2xl p-6 border border-[#262626] hover:border-[#10B981]/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#10B981] font-bold">4GB VRAM MIN</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">VRAM & GPU Requirement</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Runs 3B and 4B quantized models seamlessly on consumer graphics cards (NVIDIA GTX 1650/RTX 3060, AMD RX, Apple M1/M2/M3).
            </p>
            <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs space-y-1.5 text-zinc-300">
              <div className="flex justify-between">
                <span>qwen2.5:3b</span>
                <span className="text-emerald-400">1.9 GB VRAM</span>
              </div>
              <div className="flex justify-between">
                <span>gemma3:4b</span>
                <span className="text-cyan-400">2.4 GB VRAM</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-[#262626] hover:border-[#06B6D4]/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
                <HardDrive className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#06B6D4] font-bold">8GB+ RAM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">System Memory & Disk</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Requires 8GB RAM for Python system overhead & ChromaDB vector index caching, plus 10GB SSD storage for local model weights.
            </p>
            <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs space-y-1.5 text-zinc-300">
              <div className="flex justify-between">
                <span>System RAM:</span>
                <span className="text-cyan-400">8 GB Recommended</span>
              </div>
              <div className="flex justify-between">
                <span>Disk Storage:</span>
                <span className="text-[#10B981]">12 GB NVMe SSD</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-[#262626] hover:border-[#10B981]/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">CROSS-PLATFORM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">OS Compatibility</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Fully supported across major enterprise and air-gapped industrial operating systems with standard shell environments.
            </p>
            <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs space-y-1.5 text-zinc-300">
              <div className="flex justify-between">
                <span>Linux:</span>
                <span className="text-emerald-400">Ubuntu / RHEL / Debian</span>
              </div>
              <div className="flex justify-between">
                <span>Windows:</span>
                <span className="text-cyan-400">Windows 10 / 11 / Server</span>
              </div>
              <div className="flex justify-between">
                <span>macOS:</span>
                <span className="text-teal-400">Apple Silicon / Intel</span>
              </div>
            </div>
          </div>

        </div>

        {/* OCR Engine Selection Toggle */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#262626]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-4 mb-6 gap-3">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#10B981]" />
                OCR Engine Configuration Matrix
              </h3>
              <p className="text-xs text-zinc-400 font-mono">Choose between GPU-Accelerated EasyOCR or CPU-Lightweight Tesseract</p>
            </div>

            <div className="flex items-center gap-2 bg-[#0c0c0c] p-1 rounded-xl border border-[#262626]">
              <button
                onClick={() => setActiveOcr("easyocr")}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeOcr === "easyocr"
                    ? "bg-[#10B981] text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EasyOCR (PyTorch)
              </button>
              <button
                onClick={() => setActiveOcr("tesseract")}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeOcr === "tesseract"
                    ? "bg-[#06B6D4] text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Tesseract (CPU)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4 font-mono text-xs">
              <div className="text-white text-base font-bold flex items-center gap-2">
                <span>{ocrConfigs[activeOcr].title}</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                {ocrConfigs[activeOcr].desc}
              </p>
              
              <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] space-y-2">
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-500">Framework:</span>
                  <span className="text-emerald-400 font-bold">{ocrConfigs[activeOcr].framework}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-500">VRAM Allocation:</span>
                  <span className="text-cyan-400 font-bold">{ocrConfigs[activeOcr].vram}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-500">Recognition Accuracy:</span>
                  <span className="text-[#10B981] font-bold">{ocrConfigs[activeOcr].accuracy}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#080808] rounded-xl border border-[#262626] p-4 font-mono text-xs">
              <div className="text-zinc-500 text-[11px] pb-2 border-b border-[#262626] mb-3 flex items-center justify-between">
                <span>CONFIGURATION CODE SNIPPET</span>
                <span className="text-[#10B981]">python</span>
              </div>
              <pre className="text-emerald-400 overflow-x-auto">
                <code>{ocrConfigs[activeOcr].code}</code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
