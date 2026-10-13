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
  icon: IconName
};

const BoxCard = ({ title, text, icon }: BoxCardProps) => {
  const Icon = icons[icon];
  return (
    <div className="flex flex-col gap-4 w-100 h-50 bg-black rounded-2xl p-6">
      <div className="flex justify-center items-center bg-bg-surface w-10.5 h-10.5 rounded-md">
        <Icon className="text-primary w-5.5 h-5.5" />
      </div>
      <h3 className="subheading text-text-primary">{title}</h3>
      <p className="body-text text-text-secondary">{text}</p>
    </div>
  );
};

export default BoxCard;
