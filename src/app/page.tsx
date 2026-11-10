import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SelectedWork from "@/components/SelectedWork";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5EEDC] text-[#20251F] selection:bg-[#F45B91]/25 selection:text-[#174D38]">
      <Navbar />
      <main id="content">
        <HeroSection />
        <AboutSection />
        <SelectedWork />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
