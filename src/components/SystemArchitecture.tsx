"use client";

import React, { useState } from "react";
import {
  Monitor,
  GitBranch,
  Cpu,
  Bot,
  Layers,
  ArrowRight,
  Database,
  FileCheck,
  Eye,
  CheckCircle,
  Zap,
} from "lucide-react";

export default function SystemArchitecture() {
  const [selectedNode, setSelectedNode] = useState<string>("router");

  const nodesInfo: Record<string, { title: string; desc: string; specs: string[] }> = {
    ui: {
      title: "Streamlit Frontend UI",
      desc: "Lightweight web dashboard providing real-time interaction for chat, P&ID visual inspection, vector document uploading, and system audit logs.",
      specs: ["Responsive Web Interface", "Localhost Binding: 127.0.0.1:8501", "Zero External CDNs or Analytics"],
    },
    router: {
      title: "Intelligent Model Router",
      desc: "Evaluates incoming user prompts and document payloads to dynamically select the optimal local Ollama LLM based on task memory & VRAM constraints.",
      specs: ["Prompt Classification", "Dynamic Model Allocation", "Fallback Handling & Circuit Breaker"],
    },
    models: {
      title: "Local Models Engine (Ollama)",
      desc: "Four specialized air-gapped models running locally on standard GPU hardware without external cloud API calls.",
      specs: [
        "qwen2.5:3b (Agent Reasoning & Tool Use)",
        "llava:7b (P&ID Schematic & Visual QA)",
        "gemma3:4b (Python Code & Report Synthesis)",
        "nomic-embed-text (768-dim Vector Embeddings)",
      ],
    },
    agent: {
      title: "ReAct Agent Engine",
      desc: "Reasoning and Acting loop that autonomously calls Python helpers, performs multi-step calculation, parses vector search results, and self-corrects errors.",
      specs: ["Observation-Thought-Action Loop", "Local Python Tool Execution", "Strict Air-Gap Sandbox Isolation"],
    },
    deliverables: {
      title: "Deliverables & Vector Store",
      desc: "Final output generation stage connecting OCR preprocessing, ChromaDB vector indexing, and native office document rendering engines.",
      specs: [
        "ISA-5.1 Preprocessed P&ID Tag Extract",
        "Local ChromaDB Vector Database Index",
        "Native .docx, .xlsx, .pptx, .py Output Exporters",
      ],
    },
  };

  return (
    <section id="architecture" className="py-24 bg-[#0A0A0A] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#10B981] mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>SYSTEM PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Visual Architecture Diagram
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-sans">
            Sequential end-to-end flow from Streamlit web client to local Ollama LLM orchestration and deliverable generation.
          </p>
        </div>

        {/* Visual Architecture Flowchart */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-[#262626] shadow-2xl relative overflow-hidden">
          
          {/* Animated Connecting Line in Background */}
          <div className="hidden lg:block absolute top-[140px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#10B981]/30 z-0" />

          {/* Nodes Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            
            {/* NODE 1: Streamlit UI */}
            <div
              onClick={() => setSelectedNode("ui")}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                selectedNode === "ui"
                  ? "bg-[#10B981]/15 border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                  : "bg-[#171717] border-[#262626] hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-[#10B981]/20 text-[#10B981]">
                  <Monitor className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">STAGE 1</span>
              </div>
              <h4 className="font-bold text-white text-sm">Streamlit UI</h4>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">User Prompt & Blueprint Upload</p>
            </div>

            {/* NODE 2: Model Router */}
            <div
              onClick={() => setSelectedNode("router")}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                selectedNode === "router"
                  ? "bg-[#06B6D4]/15 border-[#06B6D4] shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                  : "bg-[#171717] border-[#262626] hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-[#06B6D4]/20 text-[#06B6D4]">
                  <GitBranch className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">STAGE 2</span>
              </div>
              <h4 className="font-bold text-white text-sm">Model Router</h4>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">Auto Task Dispatcher</p>
            </div>

            {/* NODE 3: Local Models */}
            <div
              onClick={() => setSelectedNode("models")}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                selectedNode === "models"
                  ? "bg-emerald-500/15 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                  : "bg-[#171717] border-[#262626] hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">STAGE 3</span>
              </div>
              <h4 className="font-bold text-white text-sm">Local LLMs</h4>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">Qwen • LLaVA • Gemma</p>
            </div>

            {/* NODE 4: ReAct Agent Engine */}
            <div
              onClick={() => setSelectedNode("agent")}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                selectedNode === "agent"
                  ? "bg-teal-500/15 border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.3)]"
                  : "bg-[#171717] border-[#262626] hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-teal-500/20 text-teal-400">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">STAGE 4</span>
              </div>
              <h4 className="font-bold text-white text-sm">ReAct Agent</h4>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">Tool Exec & Reasoning</p>
            </div>

            {/* NODE 5: Deliverables & Vector Store */}
            <div
              onClick={() => setSelectedNode("deliverables")}
              className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                selectedNode === "deliverables"
                  ? "bg-cyan-500/15 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                  : "bg-[#171717] border-[#262626] hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">STAGE 5</span>
              </div>
              <h4 className="font-bold text-white text-sm">Deliverables</h4>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">OCR • Vector DB • Exporters</p>
            </div>

          </div>

          {/* Node Specification Detail Card */}
          <div className="mt-8 p-6 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono transition-all">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <h3 className="font-bold text-white text-base">{nodesInfo[selectedNode].title}</h3>
              </div>
              <span className="text-xs text-zinc-500 uppercase">Subsystem Inspector</span>
            </div>

            <p className="text-zinc-300 text-xs leading-relaxed mb-4">
              {nodesInfo[selectedNode].desc}
            </p>

            <div className="space-y-2">
              <div className="text-[11px] text-zinc-400 uppercase font-semibold">Technical Highlights:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {nodesInfo[selectedNode].specs.map((spec, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-emerald-400 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
