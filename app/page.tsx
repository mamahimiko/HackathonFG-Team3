import CreatorSection from "@/components/CreatorSection";
import IntroduceSection from "@/components/IntroduceSection";
import ToolsSection from "@/components/Tools";

export default function Home() {
  return (
    <div>
      <main className="">
        <IntroduceSection />
        <ToolsSection />
        <CreatorSection />
      </main>
    </div>
  );
}
