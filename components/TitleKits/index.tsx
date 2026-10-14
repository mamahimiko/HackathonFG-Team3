import { MoveRight } from "lucide-react";

type TitleKitsProps = {
  label: string;
  title: string;
  text?: string;
  link?: string;
  className?: string;
  fullWidth?: boolean;
};

const TitleKits = ({ label, title, text, link, className="",fullWidth=false}: TitleKitsProps) => {
  return (
    <div className={`flex flex-col gap-5.5 ${
        fullWidth ? "w-full" : "max-w-96 "} ${className}`}>
      <div className="body-state-label text-primary">{label}</div>
      <h2 className="section-heading text-text-primary uppercase">{title}</h2>
      {text?.length ? (
        <p className="body-text text-text-secondary">{text}</p>
      ) : (
        ""
      )}
      {link?.length ? (
        <div className="flex gap-4 items-center cursor-pointer text-primary hover:text-primary/60">
          <p className="menu">{link}</p>
          <MoveRight />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TitleKits;
