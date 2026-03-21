import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import GithubSection from "@/components/GithubSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SocialSection from "@/components/SocialSection";
import Spotlight from "@/components/Spotlight";
import TweetsSection from "@/components/TweetsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-900)] text-white">
      <Spotlight />
      <div className="relative overflow-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <GithubSection />
          <SocialSection />
          {/* <TweetsSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
