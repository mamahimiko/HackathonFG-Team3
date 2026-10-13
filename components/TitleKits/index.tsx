import { MoveRight } from "lucide-react";

type TitleKitsProps = {
  label: string;
  title: string;
  text?: string;
  link?: string;
  ctaButton?: string;
  className?: string;
  fullWidth?: boolean;
};

const TitleKits = ({ label, title, text, link, ctaButton, className="",fullWidth=false}: TitleKitsProps) => {
  return (
    <div className={`flex flex-col gap-5.5 ${
        fullWidth ? "w-full" : "max-w-96 xl:h-150"} ${className}`}>
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
      {ctaButton?.length && <p>add button!</p>}
    </div>
  );
};

export default TitleKits;
