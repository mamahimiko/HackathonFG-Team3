import { MoveRight } from "lucide-react";
import Link from "next/link";

type FaqBoxProps = {
  title: string;
  text: string;
  url: string;
  tag: string[];
};

const FaqBox = ({ title, text, url, tag }: FaqBoxProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-4 w-full md:w-100 h-55 bg-black rounded-2xl p-6 overflow-hidden"
    >
      <div className="flex gap-2">
        {tag.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-3 py-0.5 text-xs text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="subheading text-text-primary line-clamp-1">{title}</h3>
      <p className="body-text text-text-secondary line-clamp-2">{text}</p>
      <MoveRight className="mt-auto" />
    </Link>
  );
};

export default FaqBox;
