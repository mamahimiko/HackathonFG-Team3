import HeroSection from "@/components/Hero-section";
import CreatorSection from "@/components/CreatorSection";
import IntroduceSection from "@/components/IntroduceSection";

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
