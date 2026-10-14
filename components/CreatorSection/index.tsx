import BoxCard, { IconName } from "../BoxCard";
import CTAButton from "../Header/cta-Button";
import TitleKits from "../TitleKits";
import backgroundImage from "@/public/creator-bg.png";

export const cardSection = [
  {
    id: 1,
    title: "Flexible voxel system",
    text: "Build beautifully detailed worlds with a powerful, versatile voxel engine.",
    icon: "UsersRound",
  },
  {
    id: 2,
    title: "Modern toolset",
    text: "Go from concept to playable with intuitive editing tools and real-time feedback.",
    icon: "FlaskConical",
  },
  {
    id: 3,
    title: "High performance",
    text: "Bring ambitious worlds to life with smooth rendering and responsive gameplay.",
    icon: "Star",
  },
] satisfies {
  id: number;
  title: string;
  text: string;
  icon: IconName;
}[];

const CreatorSection = () => {
  return (
    <div className="bg-bg-dark py-22 px-20 flex flex-col gap-16">
      <div className="mx-auto max-w-[1440px]">
        <div
          className="bg-no-repeat bg-right rounded-3xl"
          style={{
            backgroundImage: `linear-gradient(to right, #0A0618 30%, transparent 100%), url(${backgroundImage.src})`,
            backgroundSize: "auto, auto 110%",
            backgroundPosition: "center, right top",
          }}
        >
          <div className="pb-[104px]">
            <TitleKits
              label={"CREATE WHAT'S NEXT"}
              title={"Your next world starts here."}
              text={
                "Be among the first to explore the GEMU Engine. Get access to the latest builds, join our growing community and help shape the future of voxel game development."
              }
              link={""}
              className="pb-5"
            />
            <CTAButton />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-5">
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
    </div>
  );
};

export default CreatorSection;
