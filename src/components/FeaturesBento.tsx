"use client";

import React, { useState } from "react";
import {
  Shield,
  Cpu,
  FileCheck,
  Eye,
  Server,
  Terminal,
  FileText,
  FileSpreadsheet,
  Presentation,
  Code,
  CheckCircle,
  Zap,
  Layers,
  ArrowRight,
  Database,
  Search,
} from "lucide-react";

export default function FeaturesBento() {
  // Card 2 Model Router State
  const [selectedTask, setSelectedTask] = useState<"reasoning" | "vision" | "embedding" | "code">("reasoning");

  // Card 4 Preprocessing Filter State
  const [selectedFilter, setSelectedFilter] = useState<string>("Adaptive Thresholding");

  const modelsMap = {
    reasoning: {
      name: "qwen2.5:3b",
      role: "ReAct Agent Engine & Technical Reasoning",
      speed: "45 tokens/sec",
      vram: "1.9 GB",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    vision: {
      name: "llava:7b",
      role: "P&ID Schematic & Image OCR QA",
      speed: "28 tokens/sec",
      vram: "3.8 GB",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    embedding: {
      name: "nomic-embed-text",
      role: "Local Vector Store & Semantic RAG Search",
      speed: "120 docs/sec",
      vram: "0.4 GB",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    },
    code: {
      name: "gemma3:4b",
      role: "Python Scripting & Excel Data Automation",
      speed: "38 tokens/sec",
      vram: "2.4 GB",
      badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
    },
  };

  const ocrVariants = [
    { name: "Adaptive Thresholding", desc: "Isolates low-contrast line strings in noisy P&ID scans." },
    { name: "Contrast Stretching", desc: "Enhances faded ISA-5.1 symbol boundaries." },
    { name: "Denoising (Bilateral)", desc: "Removes industrial scan grain while protecting line sharp edges." },
    { name: "Deskew & Rotation", desc: "Corrects 0.5°-5° scanner alignment skew automatically." },
    { name: "Canny Edge Detection", desc: "Extracts pipeline connectivity contours." },
    { name: "Morphological Filtering", desc: "Fills broken symbol loops on vintage blueprints." },
    { name: "Sharpening Filter", desc: "Increases tag text readability for OCR parsing." },
    { name: "Bilateral Smooth", desc: "Reduces salt-and-pepper noise in archival blueprints." },
  ];

  return (
    <section id="features" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#10B981] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Sovereign Capabilities
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-sans">
            Engineered specifically for zero-trust industrial networks, air-gapped refineries, and confidential manufacturing data pipelines.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1: Large (Spans 2 cols on md+) - 100% Offline Sovereignty */}
          <div className="md:col-span-2 glass-panel rounded-2xl p-6 sm:p-8 border border-[#262626] hover:border-[#10B981]/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Shield className="w-64 h-64 text-[#10B981]" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ZERO EXTERNAL API CALLS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">100% Offline Sovereignty</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                Operates completely air-gapped without external telemetry, telemetry leaks, or third-party cloud dependencies. Connects natively via <code className="text-[#06B6D4] font-mono bg-[#171717] px-1.5 py-0.5 rounded border border-[#262626]">http://localhost:11434</code> directly to Ollama.
              </p>
            </div>

            {/* Interactive Loopback Audit Terminal Mockup */}
            <div className="mt-6 bg-[#0c0c0c] rounded-xl border border-[#262626] p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-500 border-b border-[#262626] pb-2 mb-3">
                <span className="flex items-center gap-2 text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                  AIR-GAP EGRESS AUDIT LOG
                </span>
                <span className="text-[10px] text-emerald-500">LISTENING ON 127.0.0.1</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center text-zinc-300">
                  <span className="text-zinc-500">[00:00:01] POST /api/generate</span>
                  <span className="text-[#10B981]">200 OK (Local Loopback)</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span className="text-zinc-500">[00:00:02] OUTBOUND 0.0.0.0/0</span>
                  <span className="text-red-400 bg-red-950/50 px-1.5 py-0.5 rounded border border-red-900">
                    BLOCKED BY FIREWALL RULE #1
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span className="text-zinc-500">[00:00:03] EMBEDDINGS QUERY</span>
                  <span className="text-[#06B6D4]">Local ChromaDB Vector Store</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Intelligent Model Router */}
          <div className="glass-panel rounded-2xl p-6 border border-[#262626] hover:border-[#06B6D4]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#171717] px-2.5 py-1 rounded text-zinc-400 border border-[#262626]">
                  AUTO-DISPATCH
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Intelligent Model Router</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Dynamically routes user tasks to lightweight specialized models optimized for VRAM efficiency.
              </p>

              {/* Task Selector */}
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {(["reasoning", "vision", "embedding", "code"] as const).map((task) => (
                  <button
                    key={task}
                    onClick={() => setSelectedTask(task)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono capitalize transition-all border ${
                      selectedTask === task
                        ? "bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/60 font-semibold"
                        : "bg-[#171717] text-zinc-400 border-[#262626] hover:bg-[#262626]"
                    }`}
                  >
                    {task}
                  </button>
                ))}
              </div>

              {/* Active Model Info */}
              <div className="p-3.5 rounded-xl bg-[#0c0c0c] border border-[#262626] space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[10px] uppercase">Active Model:</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${modelsMap[selectedTask].badgeColor}`}>
                    {modelsMap[selectedTask].name}
                  </span>
                </div>
                <div className="text-zinc-300 text-[11px] truncate">
                  {modelsMap[selectedTask].role}
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 pt-1 border-t border-[#262626]">
                  <span>VRAM: {modelsMap[selectedTask].vram}</span>
                  <span>Speed: {modelsMap[selectedTask].speed}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-[#262626]">
              {["qwen2.5:3b", "gemma3:4b", "llava:7b", "nomic-embed-text"].map((m) => (
                <span key={m} className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#171717] text-zinc-400 border border-[#262626]">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 3: 1-Click Deliverables */}
          <div className="glass-panel rounded-2xl p-6 border border-[#262626] hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
                  <FileCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800">
                  NATIVE EXPORTS
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">1-Click Deliverables</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Generates polished industrial engineering reports directly into standard file formats without manual formatting.
              </p>

              {/* Supported File Grid */}
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] flex items-center gap-2.5 hover:border-[#10B981]/50 transition-colors">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-bold text-white text-xs">.docx</div>
                    <div className="text-[10px] text-zinc-500">Word Reports</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] flex items-center gap-2.5 hover:border-[#10B981]/50 transition-colors">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white text-xs">.xlsx</div>
                    <div className="text-[10px] text-zinc-500">Excel Data</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] flex items-center gap-2.5 hover:border-[#10B981]/50 transition-colors">
                  <Presentation className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="font-bold text-white text-xs">.pptx</div>
                    <div className="text-[10px] text-zinc-500">PPT Slides</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] flex items-center gap-2.5 hover:border-[#10B981]/50 transition-colors">
                  <Code className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-bold text-white text-xs">.py</div>
                    <div className="text-[10px] text-zinc-500">Python Scripts</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Automatic Style Injection</span>
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
            </div>
          </div>

          {/* CARD 4: Visual Intelligence & OCR (Spans 2 cols on md+) */}
          <div className="md:col-span-2 glass-panel rounded-2xl p-6 sm:p-8 border border-[#262626] hover:border-[#06B6D4]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800">
                  ISA-5.1 STANDARD DECODER
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Visual Intelligence & P&ID OCR</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                Extracts instrumentation tags, valve identifiers, and line numbers from complex engineering blueprints using 8 image preprocessing pipeline variants.
              </p>

              {/* Preprocessing Variant Interactive Selector */}
              <div className="mt-6">
                <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center justify-between">
                  <span>8 Preprocessing Pipeline Variants:</span>
                  <span className="text-[#06B6D4] font-semibold">{selectedFilter}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {ocrVariants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedFilter(variant.name)}
                      className={`p-2 rounded-lg text-[11px] font-mono text-left transition-all border ${
                        selectedFilter === variant.name
                          ? "bg-[#06B6D4]/20 text-cyan-300 border-[#06B6D4]"
                          : "bg-[#0c0c0c] text-zinc-400 border-[#262626] hover:bg-[#171717]"
                      }`}
                    >
                      <div className="truncate font-semibold">{variant.name}</div>
                    </button>
                  ))}
                </div>

                {/* Filter Description Box */}
                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs text-zinc-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                    <span>{ocrVariants.find((v) => v.name === selectedFilter)?.desc}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">OpenCV + PyTorch</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
