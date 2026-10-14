import Link from "next/link";

const CTAButton = () => {
  return (
    <Link
      href="#"
      className="inline-flex self-center items-center justify-center rounded-2xl border border-(--color-accent) bg-(--color-accent)/10
          px-3 py-1.5 text-sm font-medium text-(--color-text-primary) 
          transition-all duration-200 hover:bg-(--color-accent) hover:shadow-[0_0_12px_#5b7cff40]"
    >
      Request access
    </Link>
  );
};

export default CTAButton;
