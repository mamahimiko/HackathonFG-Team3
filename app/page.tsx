import CreatorSection from "@/components/CreatorSection";
import IntroduceSection from "@/components/IntroduceSection";
import HeroSection from "@/components/Hero-section";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <IntroduceSection />
        <CreatorSection />
      </main>
    </div>
  );
}
