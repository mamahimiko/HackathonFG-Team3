import CreatorSection from "@/components/CreatorSection";
import IntroduceSection from "@/components/IntroduceSection";
import HeroSection from "@/components/Hero-section";
import ToolsSection from "@/components/Tools";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <IntroduceSection />
        <ToolsSection />
        <CreatorSection />
      </main>
    </div>
  );
}
