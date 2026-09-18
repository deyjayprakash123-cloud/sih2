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

  // Tab 1 Chat State
  const [chatDownloaded, setChatDownloaded] = useState(false);

  // Tab 2 Vision State
  const [showJson, setShowJson] = useState(false);

  // Tab 3 Network State
  const [isRefreshingLogs, setIsRefreshingLogs] = useState(false);

  const triggerRefreshLogs = () => {
    setIsRefreshingLogs(true);
    setTimeout(() => setIsRefreshingLogs(false), 800);
  };

  return (
    <section id="workspaces" className="py-24 bg-[#0A0A0A] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#06B6D4] mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKSPACES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Workspaces Showcase
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-sans">
            Explore the four core operational views engineered for industrial engineers, plant managers, and security auditors.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 glass-panel rounded-2xl border border-[#262626] max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all ${
              activeTab === "chat"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>1. Conversational Agent</span>
          </button>

          <button
            onClick={() => setActiveTab("vision")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all ${
              activeTab === "vision"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <FileImage className="w-4 h-4" />
            <span>2. Diagram & Image QA</span>
          </button>

          <button
            onClick={() => setActiveTab("network")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all ${
              activeTab === "network"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <Network className="w-4 h-4" />
            <span>3. Network Monitor</span>
          </button>

          <button
            onClick={() => setActiveTab("rag")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs transition-all ${
              activeTab === "rag"
                ? "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-[#171717]"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>4. RAG & Deliverables</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel rounded-2xl border border-[#262626] p-6 sm:p-8 min-h-[520px] shadow-2xl relative overflow-hidden">
          
          {/* TAB 1: Conversational Agent */}
          {activeTab === "chat" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Workspace Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-4 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#10B981]" />
                    ReAct Agentic Chat Workspace
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">Model: qwen2.5:3b (Local Ollama Engine)</p>
                </div>
                
                <button
                  onClick={() => {
                    setChatDownloaded(true);
                    setTimeout(() => setChatDownloaded(false), 3000);
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 font-mono text-xs hover:bg-[#10B981]/20 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{chatDownloaded ? "Report Generated! (.docx)" : "Export Report (.docx)"}</span>
                </button>
              </div>

              {/* Chat Message Window Mockup */}
              <div className="space-y-4 bg-[#0c0c0c] p-4 rounded-xl border border-[#262626] font-mono text-xs max-h-[360px] overflow-y-auto">
                {/* User Message */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#171717] border border-[#262626] p-3 rounded-2xl max-w-lg text-zinc-200">
                    <div className="text-[10px] text-zinc-500 mb-1">USER [Process Engineer]</div>
                    "Analyze high-pressure flare system telemetry on Loop #402 and draft a technical maintenance summary."
                  </div>
                </div>

                {/* AI Thought Trace */}
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/50 text-emerald-300 space-y-1 text-[11px]">
                  <div className="font-bold flex items-center gap-2 text-emerald-400">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ReAct Reasoning Loop #1: Executing Telemetry Parsing Tool...
                  </div>
                  <div className="text-emerald-500 font-mono pl-5">
                    → querying local vector store: 'Loop_402_telemetry.csv'<br />
                    → calculated mean pressure: 42.8 bar (Threshold: 40 bar EXCEEDED)<br />
                    → invoking deliverable builder: docx_exporter.py
                  </div>
                </div>

                {/* AI Assistant Message */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 flex items-center justify-center font-bold text-xs shrink-0">
                    AI
                  </div>
                  <div className="bg-[#171717] border border-[#262626] p-4 rounded-2xl max-w-2xl text-zinc-200 space-y-2">
                    <div className="text-[10px] text-[#10B981] font-semibold mb-1">SOVEREIGN AGENT ANSWER</div>
                    <p className="leading-relaxed">
                      Analysis complete for <span className="text-[#06B6D4]">Loop #402 High-Pressure Flare System</span>:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-zinc-300">
                      <li><strong>Peak Pressure:</strong> 42.8 bar detected at 14:22 UTC.</li>
                      <li><strong>Root Cause:</strong> Valve CV-402 trim seating degradation.</li>
                      <li><strong>Action Item:</strong> Re-calibrate actuator positioner; replace seals during Q3 turn-around.</li>
                    </ul>
                    <div className="pt-2 flex items-center gap-2 text-[10px] text-zinc-400 border-t border-[#262626]">
                      <FileText className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Deliverable ready: Flare_System_Audit_Loop402.docx</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Box */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="Query industrial telemetry or ask ReAct agent to build Excel datasheet..."
                  className="flex-1 bg-[#0c0c0c] border border-[#262626] rounded-xl px-4 py-3 text-xs font-mono text-zinc-400 focus:outline-none"
                />
                <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-mono font-bold text-xs flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Diagram & Image QA (P&ID Engineering OCR) */}
          {activeTab === "vision" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-4 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileImage className="w-5 h-5 text-[#06B6D4]" />
                    P&ID Diagram Inspection & Visual QA
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">ISA-5.1 Tag Recognition Engine • LLaVA-7B Vision Model</p>
                </div>

                <button
                  onClick={() => setShowJson(!showJson)}
                  className="px-3.5 py-2 rounded-lg bg-[#171717] border border-[#262626] font-mono text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  {showJson ? "Show Visual Boxes" : "View Extracted Tag JSON"}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upload & Diagram Canvas Box */}
                <div className="lg:col-span-2 bg-[#0c0c0c] rounded-xl border border-[#262626] p-5 relative min-h-[300px] flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-[#262626] pb-3 text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <FileImage className="w-4 h-4 text-[#06B6D4]" />
                      Blueprint_PID_Distillation_Col_4.png
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800">
                      OCR PREPROCESSED: BILATERAL + THRESHOLD
                    </span>
                  </div>

                  {!showJson ? (
                    <div className="my-4 relative bg-[#141414] rounded-lg border border-[#262626] p-6 flex flex-col items-center justify-center min-h-[220px]">
                      {/* P&ID Bounding Box Simulation */}
                      <div className="w-full max-w-md border border-dashed border-[#06B6D4]/60 p-4 rounded bg-[#06B6D4]/5 relative">
                        <div className="text-[10px] font-mono text-[#06B6D4] bg-[#06B6D4]/20 px-1.5 py-0.5 rounded absolute -top-2.5 left-2 border border-[#06B6D4]/40">
                          TAG: CV-101 (Control Valve) • 99.1% Confidence
                        </div>

                        <div className="flex items-center justify-between text-xs font-mono text-zinc-300 py-3">
                          <span className="p-2 border border-emerald-500/50 rounded bg-emerald-950/30 text-emerald-400">
                            PUMP P-101A
                          </span>
                          <span className="h-0.5 bg-cyan-500/50 flex-1 mx-3 relative">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-cyan-400">
                              3"-HC-100-CS
                            </span>
                          </span>
                          <span className="p-2 border border-amber-500/50 rounded bg-amber-950/30 text-amber-400">
                            TT-104 (Temp Trans)
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <pre className="my-4 p-4 bg-[#080808] rounded-lg border border-[#262626] font-mono text-[11px] text-emerald-400 overflow-x-auto">
{`{
  "pid_document": "Blueprint_PID_Distillation_Col_4.png",
  "isa_5_1_standards": true,
  "detected_components": [
    { "tag": "CV-101", "type": "Control Valve", "confidence": 0.991, "bbox": [120, 45, 180, 95] },
    { "tag": "P-101A", "type": "Centrifugal Pump", "confidence": 0.984, "bbox": [210, 80, 290, 140] },
    { "tag": "TT-104", "type": "Temperature Transmitter", "confidence": 0.976, "bbox": [340, 45, 410, 95] }
  ]
}`}
                    </pre>
                  )}

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-2 border-t border-[#262626]">
                    <span>ISA-5.1 Standard Code Validation</span>
                    <span className="text-[#10B981]">Status: Verified</span>
                  </div>
                </div>

                {/* Metrics Sidebar */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono space-y-3">
                    <div className="text-xs text-zinc-400 font-semibold border-b border-[#262626] pb-2">
                      CONFIDENCE METRICS
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 mb-1">
                        <span>Tag OCR Accuracy</span>
                        <span className="text-[#10B981] font-bold">98.4%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden">
                        <div className="w-[98.4%] h-full bg-[#10B981]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 mb-1">
                        <span>Symbol Resolution</span>
                        <span className="text-[#06B6D4] font-bold">99.1%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden">
                        <div className="w-[99.1%] h-full bg-[#06B6D4]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs space-y-2">
                    <div className="text-zinc-400 font-semibold">IDENTIFIED COMPONENTS</div>
                    <div className="flex justify-between text-zinc-300 text-[11px]">
                      <span>Control Valves:</span>
                      <span className="text-emerald-400 font-bold">4 Verified</span>
                    </div>
                    <div className="flex justify-between text-zinc-300 text-[11px]">
                      <span>Transmitters:</span>
                      <span className="text-cyan-400 font-bold">12 Verified</span>
                    </div>
                    <div className="flex justify-between text-zinc-300 text-[11px]">
                      <span>Line Numbers:</span>
                      <span className="text-teal-400 font-bold">8 Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Network Monitor */}
          {activeTab === "network" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-4 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-[#10B981]" />
                    Local Loopback & Air-Gap Audit Log
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">127.0.0.1 Socket Monitor • Egress Firewall Verification</p>
                </div>

                <button
                  onClick={triggerRefreshLogs}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#262626] font-mono text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#10B981] ${isRefreshingLogs ? "animate-spin" : ""}`} />
                  <span>Refresh Packets</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[10px] uppercase">Active Host</div>
                  <div className="text-white font-bold text-sm">127.0.0.1</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Localhost Only</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[10px] uppercase">Ollama Port</div>
                  <div className="text-[#06B6D4] font-bold text-sm">11434</div>
                  <div className="text-[10px] text-cyan-400 mt-1">Bound to Loopback</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[10px] uppercase">Total Egress</div>
                  <div className="text-[#10B981] font-bold text-sm">0.00 Bytes</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Zero Cloud Leak</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626]">
                  <div className="text-zinc-500 text-[10px] uppercase">Firewall Guard</div>
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" /> AIR-GAP
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1">Egress Blocked</div>
                </div>
              </div>

              {/* Terminal Packet Stream */}
              <div className="bg-[#080808] rounded-xl border border-[#262626] p-4 font-mono text-xs space-y-2">
                <div className="text-zinc-500 text-[11px] pb-2 border-b border-[#262626] flex justify-between">
                  <span>PACKET INSPECTOR STREAM</span>
                  <span className="text-emerald-500">FILTER: LOCALHOST ONLY</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="text-zinc-300">
                    <span className="text-zinc-500">[127.0.0.1:54312 -&gt; 127.0.0.1:11434]</span>{" "}
                    <span className="text-emerald-400">POST /api/chat</span> HTTP/1.1 200 OK (0.8ms)
                  </div>
                  <div className="text-zinc-300">
                    <span className="text-zinc-500">[127.0.0.1:54313 -&gt; 127.0.0.1:11434]</span>{" "}
                    <span className="text-cyan-400">POST /api/embeddings</span> HTTP/1.1 200 OK (0.4ms)
                  </div>
                  <div className="text-zinc-300">
                    <span className="text-zinc-500">[EGRESS CHECK 0.0.0.0:80]</span>{" "}
                    <span className="text-red-400 font-bold">[DENIED] Firewall Policy: Air-Gapped Lockdown</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RAG & Deliverables */}
          {activeTab === "rag" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#262626] pb-4 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#06B6D4]" />
                    Local RAG Vector Store & Deliverables Engine
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">ChromaDB Local Database • Nomic-Embed-Text (768 Dim)</p>
                </div>

                <div className="px-3 py-1 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-xs font-mono">
                  Vector Store: 1,420 Chunks
                </div>
              </div>

              {/* Vector RAG Search Preview */}
              <div className="bg-[#0c0c0c] rounded-xl border border-[#262626] p-4 font-mono text-xs space-y-3">
                <div className="flex items-center gap-2 bg-[#171717] border border-[#262626] rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    readOnly
                    value="Semantic Query: 'Compressor station lubrication oil change intervals'"
                    className="bg-transparent text-zinc-200 text-xs flex-1 focus:outline-none"
                  />
                  <span className="text-[10px] bg-[#06B6D4]/20 text-[#06B6D4] px-2 py-0.5 rounded border border-[#06B6D4]/40">
                    Cosine Match: 0.942
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#141414] border border-[#262626] text-zinc-300 text-[11px] space-y-1">
                  <div className="text-emerald-400 font-semibold">RETRIEVED VECTOR MATCH #1 (Manual_Compressor_v3.pdf - Chunk 42)</div>
                  <p className="text-zinc-400">
                    "Synthetic ISO VG 68 lubricant must be flushed every 4,000 operational hours or during annual overhaul..."
                  </p>
                </div>
              </div>

              {/* 1-Click Deliverable Export Generator Mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs hover:border-[#10B981]/50 transition-colors">
                  <FileText className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="font-bold text-white">Word Report (.docx)</div>
                  <p className="text-[10px] text-zinc-400 my-2">Auto-formatted headers, engineering tables, and signatures.</p>
                  <button className="w-full py-1.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[11px]">
                    Generate .docx
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs hover:border-[#10B981]/50 transition-colors">
                  <FileSpreadsheet className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="font-bold text-white">Excel Sheet (.xlsx)</div>
                  <p className="text-[10px] text-zinc-400 my-2">Telemetry logs, cost formulas, and component counts.</p>
                  <button className="w-full py-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px]">
                    Generate .xlsx
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs hover:border-[#10B981]/50 transition-colors">
                  <Presentation className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="font-bold text-white">PPT Deck (.pptx)</div>
                  <p className="text-[10px] text-zinc-400 my-2">Executive summary slides with P&ID schematic highlights.</p>
                  <button className="w-full py-1.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[11px]">
                    Generate .pptx
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#262626] font-mono text-xs hover:border-[#10B981]/50 transition-colors">
                  <Code className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="font-bold text-white">Python Script (.py)</div>
                  <p className="text-[10px] text-zinc-400 my-2">Executable automation scripts for local SCADA data.</p>
                  <button className="w-full py-1.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[11px]">
                    Generate .py
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
