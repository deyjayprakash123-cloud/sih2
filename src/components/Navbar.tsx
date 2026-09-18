"use client";

import React, { useState, useEffect } from "react";
import { Shield, Lock, Menu, X, Terminal, Cpu, Network } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Workspaces", href: "#workspaces" },
    { name: "Architecture", href: "#architecture" },
    { name: "Installation", href: "#installation" },
    { name: "Hardware", href: "#hardware" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass-nav shadow-lg shadow-black/40" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-[#06B6D4]/20 border border-[#10B981]/40 group-hover:border-[#10B981] transition-colors">
              <Shield className="w-5 h-5 text-[#10B981] group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg tracking-wider text-white">
                  SOVEREIGN<span className="text-[#10B981]">.AI</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono uppercase bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full">
                  Air-Gapped
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-400">On-Premise Agentic Workbench</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#171717]/80 p-1.5 rounded-full border border-[#262626]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#262626] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* GitHub CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#171717] border border-[#262626] text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              127.0.0.1:11434
            </div>
            <a
              href="https://github.com/deyjayprakash123-cloud/sih"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-black bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg bg-[#171717] border border-[#262626]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#262626] px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-[#262626] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#262626] flex flex-col gap-2">
            <a
              href="https://github.com/deyjayprakash123-cloud/sih"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-mono font-bold text-black bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
