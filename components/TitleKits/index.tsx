import { MoveRight } from "lucide-react";

type TitleKitsProps = {
  label: string;
  title: string;
  text: string;
  link: string;
  ctaButton: string;
};

const TitleKits = ({ label, title, text, link, ctaButton }: TitleKitsProps) => {
  return (
    <div className="flex flex-col gap-5.5 max-w-96 xl:h-150">
      <div className="body-state-label text-primary">{label}</div>
      <h2 className="section-heading text-text-primary uppercase">{title}</h2>
      {text.length && <p className="body-text text-text-secondary">{text}</p>}
      {link.length && (
        <div className="flex gap-4 items-center cursor-pointer text-primary hover:text-primary/60">
          <p className="menu">{link}</p>
          <MoveRight className="" />
        </div>
      )}
      {ctaButton.length && <p>add button!</p>}
    </div>
  );
};

export default TitleKits;
