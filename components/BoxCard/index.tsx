import {
  Box,
  SlidersHorizontal,
  Zap,
  Gamepad2,
  UsersRound,
  FlaskConical,
  Star,
  BookOpen,
  FileText,
  MoveRight,
} from "lucide-react";

const icons = {
  Box,
  SlidersHorizontal,
  Zap,
  Gamepad2,
  UsersRound,
  FlaskConical,
  Star,
  BookOpen,
  FileText,
};

export type IconName = keyof typeof icons;

type BoxCardProps = {
  title: string;
  text: string;
  icon: IconName;
  link: string;
};

const BoxCard = ({ title, text, icon, link }: BoxCardProps) => {
  const Icon = icons[icon];
  return (
    <div className="flex flex-col gap-4 w-100 h-50 bg-black rounded-2xl p-6">
      <div className="flex justify-center items-center bg-bg-surface w-10.5 h-10.5 rounded-md">
        <Icon className="text-primary w-5.5 h-5.5" />
      </div>
      <h3 className="subheading text-text-primary">{title}</h3>
      <p className="body-text text-text-secondary">{text}</p>
      {link.length ? (
        <div className="flex gap-4 items-center cursor-pointer text-primary hover:text-primary/60">
          <p className="menu">{link}</p>
          <MoveRight className="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BoxCard;
