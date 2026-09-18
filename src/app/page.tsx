import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBento from "@/components/FeaturesBento";
import WorkspacesTabs from "@/components/WorkspacesTabs";
import SystemArchitecture from "@/components/SystemArchitecture";
import CodeTerminal from "@/components/CodeTerminal";
import HardwareMatrix from "@/components/HardwareMatrix";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#ededed] font-sans selection:bg-[#10B981]/30 selection:text-[#10B981]">
      <Navbar />
      <Hero />
      <FeaturesBento />
      <WorkspacesTabs />
      <SystemArchitecture />
      <CodeTerminal />
      <HardwareMatrix />
      <Footer />
    </main>
  );
}
