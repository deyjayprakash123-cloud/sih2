"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Play, Sparkles } from "lucide-react";

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<"all" | "env" | "ollama">("all");
  const [copied, setCopied] = useState(false);

  const commandSets = {
    all: `# 1. Clone the Sovereign Workbench Repository
git clone https://github.com/deyjayprakash123-cloud/sih
cd sih

# 2. Setup Isolated Virtual Environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\\Scripts\\activate

# 3. Install Air-Gapped Dependencies
pip install -r requirements.txt

# 4. Start Local Ollama Engine & Download Model
ollama serve
ollama pull qwen2.5:3b

# 5. Launch On-Premise Streamlit Workbench
streamlit run app.py`,

    env: `# Virtual Environment Setup
python -m venv venv

# Activate on Linux / macOS:
source venv/bin/activate

# Activate on Windows PowerShell:
.\\venv\\Scripts\\Activate.ps1

# Install core packages
pip install -r requirements.txt`,

    ollama: `# Local Ollama Air-Gapped Setup
# Ensure Ollama daemon is running locally
ollama serve

# Pull required local LLMs (No external API key needed)
ollama pull qwen2.5:3b
ollama pull llava:7b
ollama pull nomic-embed-text`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commandSets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-24 bg-[#0A0A0A] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#10B981] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEPLOYMENT GUIDE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Installation & Setup
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-sans">
            Get up and running locally in under 3 minutes with standard Python and Ollama tooling.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-[#262626] shadow-2xl overflow-hidden">
          
          {/* Terminal Window Bar */}
          <div className="bg-[#141414] px-4 py-3 border-b border-[#262626] flex items-center justify-between">
            
            {/* macOS Red/Yellow/Green Buttons */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                bash — sovereign-ai@localhost
              </span>
            </div>

            {/* Tab Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-[#0c0c0c] p-1 rounded-lg border border-[#262626]">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 text-[11px] font-mono rounded transition-colors ${
                  activeTab === "all" ? "bg-[#10B981]/20 text-[#10B981] font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                1-Click Quickstart
              </button>
              <button
                onClick={() => setActiveTab("env")}
                className={`px-3 py-1 text-[11px] font-mono rounded transition-colors ${
                  activeTab === "env" ? "bg-[#10B981]/20 text-[#10B981] font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                VirtualEnv Setup
              </button>
              <button
                onClick={() => setActiveTab("ollama")}
                className={`px-3 py-1 text-[11px] font-mono rounded transition-colors ${
                  activeTab === "ollama" ? "bg-[#10B981]/20 text-[#10B981] font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Ollama Models
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#262626] hover:bg-[#333333] text-zinc-200 font-mono text-xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-6 bg-[#080808] font-mono text-xs sm:text-sm overflow-x-auto text-zinc-300 leading-relaxed">
            <pre className="text-[#34D399]">
              <code>{commandSets[activeTab]}</code>
            </pre>
          </div>

          {/* Footer Bar */}
          <div className="bg-[#101010] px-4 py-2.5 border-t border-[#262626] font-mono text-[11px] text-zinc-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Play className="w-3 h-3 text-[#10B981]" />
              Ready to launch Streamlit UI at http://localhost:8501
            </span>
            <span>Target OS: Windows / Linux / macOS</span>
          </div>

        </div>
      </div>
    </section>
  );
}
