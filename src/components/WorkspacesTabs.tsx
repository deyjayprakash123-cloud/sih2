"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  FileImage,
  Network,
  Database,
  Send,
  Download,
  Terminal,
  UploadCloud,
  CheckCircle2,
  FileText,
  FileSpreadsheet,
  Presentation,
  Code,
  Lock,
  RefreshCw,
  Search,
  Sliders,
  ChevronDown,
  Layers,
  Activity,
  ShieldAlert,
} from "lucide-react";

export default function WorkspacesTabs() {
  const [activeTab, setActiveTab] = useState<"chat" | "vision" | "network" | "rag">("chat");
  const [chatDownloaded, setChatDownloaded] = useState(false);
  const [showJson, setShowJson] = useState(false);
  const [isRefreshingLogs, setIsRefreshingLogs] = useState(false);

  const triggerRefreshLogs = () => {
    setIsRefreshingLogs(true);
    setTimeout(() => setIsRefreshingLogs(false), 800);
  };

  return (
    <section id="workspaces" className="py-20 sm:py-24 bg-[#0A0A0A] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#06B6D4] mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKSPACES</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
            Workspaces Showcase
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 text-xs sm:text-base font-sans px-2">
            Explore the four core operational views engineered for industrial engineers, plant managers, and security auditors.
          </p>
        </div>

        {/* Tab Navigation Buttons - Mobile Friendly 2x2 Grid or Flex Row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8 p-1.5 glass-panel rounded-2xl border border-[#262626] max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl font-mono text-[11px] sm:text-xs transition-all ${
              activeTab === "chat"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>1. Chat Agent</span>
          </button>

          <button
            onClick={() => setActiveTab("vision")}
            className={`flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl font-mono text-[11px] sm:text-xs transition-all ${
              activeTab === "vision"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <FileImage className="w-3.5 h-3.5 shrink-0" />
            <span>2. Image QA</span>
          </button>

          <button
            onClick={() => setActiveTab("network")}
            className={`flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl font-mono text-[11px] sm:text-xs transition-all ${
              activeTab === "network"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <Network className="w-3.5 h-3.5 shrink-0" />
            <span>3. Monitor</span>
          </button>

          <button
            onClick={() => setActiveTab("rag")}
            className={`flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl font-mono text-[11px] sm:text-xs transition-all ${
              activeTab === "rag"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <Database className="w-3.5 h-3.5 shrink-0" />
            <span>4. RAG Engine</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel rounded-2xl border border-[#262626] p-4 sm:p-8 min-h-[480px] shadow-2xl relative overflow-hidden">
          
          {/* TAB 1: Conversational Agent */}
          {activeTab === "chat" && (
            <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-3 gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#10B981] shrink-0" />
                    ReAct Agentic Chat Workspace
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Model: qwen2.5:3b (Local Ollama Engine)</p>
                </div>
                
                <button
                  onClick={() => {
                    setChatDownloaded(true);
                    setTimeout(() => setChatDownloaded(false), 3000);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 font-mono text-xs hover:bg-[#10B981]/20 transition-all w-full sm:w-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>{chatDownloaded ? "Generated! (.docx)" : "Export (.docx)"}</span>
                </button>
              </div>

              {/* Chat Message Window Mockup */}
              <div className="space-y-3 bg-[#0c0c0c] p-3 sm:p-4 rounded-xl border border-[#262626] font-mono text-xs max-h-[360px] overflow-y-auto">
                <div className="flex items-start gap-2 justify-end">
                  <div className="bg-[#171717] border border-[#262626] p-3 rounded-2xl max-w-[90%] sm:max-w-lg text-zinc-200">
                    <div className="text-[9px] text-zinc-500 mb-1">USER [Process Engineer]</div>
                    "Analyze high-pressure flare system telemetry on Loop #402 and draft a technical maintenance summary."
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/50 text-emerald-300 space-y-1 text-[10px] sm:text-[11px]">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                    <RefreshCw className="w-3 h-3 animate-spin shrink-0" />
                    ReAct Loop #1: Executing Telemetry Parsing Tool...
                  </div>
                  <div className="text-emerald-500 font-mono pl-4">
                    → querying local vector store: 'Loop_402_telemetry.csv'<br />
                    → calculated mean pressure: 42.8 bar (EXCEEDED)<br />
                    → invoking deliverable builder: docx_exporter.py
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0">
                    AI
                  </div>
                  <div className="bg-[#171717] border border-[#262626] p-3 sm:p-4 rounded-2xl max-w-[90%] sm:max-w-2xl text-zinc-200 space-y-2">
                    <div className="text-[10px] text-[#10B981] font-semibold mb-1">SOVEREIGN AGENT ANSWER</div>
                    <p className="leading-relaxed text-[11px] sm:text-xs">
                      Analysis complete for <span className="text-[#06B6D4]">Loop #402 High-Pressure Flare System</span>:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-zinc-300 text-[11px]">
                      <li><strong>Peak Pressure:</strong> 42.8 bar detected at 14:22 UTC.</li>
                      <li><strong>Root Cause:</strong> Valve CV-402 trim seating degradation.</li>
                      <li><strong>Action Item:</strong> Replace seals during Q3 overhaul.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chat Input Box */}
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="text"
                  readOnly
                  value="Query industrial telemetry or ask ReAct agent..."
                  className="flex-1 bg-[#0c0c0c] border border-[#262626] rounded-xl px-3.5 py-2.5 text-xs font-mono text-zinc-400 focus:outline-none"
                />
                <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-mono font-bold text-xs flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Diagram & Image QA (P&ID Engineering OCR) */}
          {activeTab === "vision" && (
            <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-3 gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <FileImage className="w-5 h-5 text-[#06B6D4] shrink-0" />
                    P&ID Diagram Inspection & Visual QA
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono">ISA-5.1 Tag Recognition Engine • LLaVA-7B Vision Model</p>
                </div>

                <button
                  onClick={() => setShowJson(!showJson)}
                  className="px-3.5 py-2 rounded-lg bg-[#171717] border border-[#262626] font-mono text-xs text-zinc-300 hover:text-white transition-colors w-full sm:w-auto"
                >
                  {showJson ? "Show Visual Bounding Boxes" : "View Extracted Tag JSON"}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2 bg-[#0c0c0c] rounded-xl border border-[#262626] p-3 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-[#262626] pb-2 text-[11px] font-mono">
                    <span className="text-zinc-400 truncate max-w-[200px] sm:max-w-none">
                      Blueprint_PID_Distillation_Col_4.png
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded text-[9px]">
                      OCR: PREPROCESSED
                    </span>
                  </div>

                  {!showJson ? (
                    <div className="my-3 p-4 sm:p-6 bg-[#141414] rounded-lg border border-[#262626] flex flex-col items-center justify-center min-h-[180px]">
                      <div className="w-full border border-dashed border-[#06B6D4]/60 p-3 sm:p-4 rounded bg-[#06B6D4]/5 relative">
                        <div className="text-[9px] font-mono text-[#06B6D4] bg-[#06B6D4]/20 px-1.5 py-0.5 rounded absolute -top-2.5 left-2 border border-[#06B6D4]/40">
                          TAG: CV-101 • 99.1% Confidence
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 py-2">
                          <span className="p-1.5 border border-emerald-500/50 rounded bg-emerald-950/30 text-emerald-400 text-[10px]">
                            PUMP P-101A
                          </span>
                          <span className="h-0.5 bg-cyan-500/50 flex-1 mx-2 relative">
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[8px] text-cyan-400">
                              3"-HC-100-CS
                            </span>
                          </span>
                          <span className="p-1.5 border border-amber-500/50 rounded bg-amber-950/30 text-amber-400 text-[10px]">
                            TT-104
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <pre className="my-3 p-3 bg-[#080808] rounded-lg border border-[#262626] font-mono text-[10px] text-emerald-400 overflow-x-auto">
{`{
  "pid_document": "Blueprint_PID_Distillation_Col_4.png",
  "detected_components": [
    { "tag": "CV-101", "type": "Control Valve", "confidence": 0.991 },
    { "tag": "P-101A", "type": "Centrifugal Pump", "confidence": 0.984 }
  ]
}`}
                    </pre>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs space-y-3">
                  <div className="text-zinc-400 font-semibold border-b border-[#262626] pb-2">
                    CONFIDENCE METRICS
                  </div>
                  <div>
                    <div className="flex justify-between text-zinc-300 text-[11px] mb-1">
                      <span>Tag Accuracy</span>
                      <span className="text-[#10B981] font-bold">98.4%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden">
                      <div className="w-[98.4%] h-full bg-[#10B981]" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#262626] space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Control Valves:</span>
                      <span className="text-emerald-400 font-bold">4 Verified</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Transmitters:</span>
                      <span className="text-cyan-400 font-bold">12 Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Network Monitor */}
          {activeTab === "network" && (
            <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-3 gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-[#10B981] shrink-0" />
                    Local Loopback & Air-Gap Audit Log
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono">127.0.0.1 Socket Monitor • Egress Firewall Verification</p>
                </div>

                <button
                  onClick={triggerRefreshLogs}
                  className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] font-mono text-xs text-zinc-300 hover:text-white transition-colors w-full sm:w-auto"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#10B981] ${isRefreshingLogs ? "animate-spin" : ""}`} />
                  <span>Refresh Packets</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[9px] uppercase">Active Host</div>
                  <div className="text-white font-bold text-xs sm:text-sm">127.0.0.1</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[9px] uppercase">Ollama Port</div>
                  <div className="text-[#06B6D4] font-bold text-xs sm:text-sm">11434</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[9px] uppercase">Egress</div>
                  <div className="text-[#10B981] font-bold text-xs sm:text-sm">0.00 Bytes</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[9px] uppercase">Air-Gap</div>
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3 shrink-0" /> SECURE
                  </div>
                </div>
              </div>

              {/* Terminal Packet Stream */}
              <div className="bg-[#080808] rounded-xl border border-[#262626] p-3 sm:p-4 font-mono text-xs space-y-2">
                <div className="text-zinc-500 text-[10px] pb-2 border-b border-[#262626] flex justify-between">
                  <span>PACKET STREAM</span>
                  <span className="text-emerald-500">LOCALHOST ONLY</span>
                </div>

                <div className="space-y-1 text-[10px] sm:text-[11px] overflow-x-auto">
                  <div className="text-zinc-300 whitespace-nowrap">
                    <span className="text-zinc-500">[127.0.0.1:54312]</span>{" "}
                    <span className="text-emerald-400">POST /api/chat</span> 200 OK (0.8ms)
                  </div>
                  <div className="text-zinc-300 whitespace-nowrap">
                    <span className="text-zinc-500">[EGRESS CHECK 0.0.0.0]</span>{" "}
                    <span className="text-red-400 font-bold">[DENIED] Firewall Policy: Air-Gapped</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RAG & Deliverables */}
          {activeTab === "rag" && (
            <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-3 gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#06B6D4] shrink-0" />
                    Local RAG Vector Store & Deliverables Engine
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono">ChromaDB Local Database • Nomic-Embed-Text (768 Dim)</p>
                </div>
              </div>

              {/* Vector RAG Search Preview */}
              <div className="bg-[#0c0c0c] rounded-xl border border-[#262626] p-3 sm:p-4 font-mono text-xs space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-[#171717] border border-[#262626] rounded-lg p-2">
                  <div className="flex items-center gap-2 flex-1">
                    <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                    <input
                      type="text"
                      readOnly
                      value="Query: 'Compressor lubrication intervals'"
                      className="bg-transparent text-zinc-200 text-xs w-full focus:outline-none"
                    />
                  </div>
                  <span className="text-[9px] bg-[#06B6D4]/20 text-[#06B6D4] px-2 py-0.5 rounded border border-[#06B6D4]/40 text-center">
                    Match: 0.942
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#141414] border border-[#262626] text-zinc-300 text-[10px] sm:text-[11px]">
                  <div className="text-emerald-400 font-semibold mb-1">RETRIEVED VECTOR MATCH #1 (Manual_Compressor.pdf)</div>
                  <p className="text-zinc-400">
                    "Synthetic ISO VG 68 lubricant must be flushed every 4,000 operational hours..."
                  </p>
                </div>
              </div>

              {/* 1-Click Deliverable Export Generator Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs">
                  <FileText className="w-5 h-5 text-blue-400 mb-1.5" />
                  <div className="font-bold text-white text-xs">.docx Report</div>
                  <button className="w-full mt-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px]">
                    Export .docx
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400 mb-1.5" />
                  <div className="font-bold text-white text-xs">.xlsx Excel</div>
                  <button className="w-full mt-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px]">
                    Export .xlsx
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs">
                  <Presentation className="w-5 h-5 text-amber-400 mb-1.5" />
                  <div className="font-bold text-white text-xs">.pptx Slides</div>
                  <button className="w-full mt-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px]">
                    Export .pptx
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs">
                  <Code className="w-5 h-5 text-purple-400 mb-1.5" />
                  <div className="font-bold text-white text-xs">.py Script</div>
                  <button className="w-full mt-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[10px]">
                    Export .py
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
