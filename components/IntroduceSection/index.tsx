import BoxCard, { IconName } from "../BoxCard";
import TitleKits from "../TitleKits";

export const cardSection = [
  {
    id: 1,
    title: "Flexible voxel system",
    text: "Build beautifully detailed worlds with a powerful, versatile voxel engine.",
    icon: "Box",
  },
  {
    id: 2,
    title: "Modern toolset",
    text: "Go from concept to playable with intuitive editing tools and real-time feedback.",
    icon: "SlidersHorizontal",
  },
  {
    id: 3,
    title: "High performance",
    text: "Bring ambitious worlds to life with smooth rendering and responsive gameplay.",
    icon: "Zap",
  },
  {
    id: 4,
    title: "Multiplayer ready",
    text: "Create connected worlds and let your players explore, build and play together.",
    icon: "Gamepad2",
  },
] satisfies {
  id: number;
  title: string;
  text: string;
  icon: IconName;
}[];

const IntroduceSection = () => {
  return (
    <div className="bg-bg-surface py-22 px-20 flex flex-col xl:flex-row gap-16">
      <TitleKits
        label={"WHY GEMU?"}
        title={"Everything you need to build your world."}
        text={
          "The GEMU Engine brings powerful tools, performance and flexibility together — without unnecessary complexity."
        }
        link={"Explore all features"}
        ctaButton={""}
      />
      <div className="grid lg:grid-cols-2 gap-4 h-[70%] ">
        {cardSection.map((card) => (
          <BoxCard
            key={card.id}
            title={card.title}
            text={card.text}
            icon={card.icon}
            link={""}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroduceSection;
