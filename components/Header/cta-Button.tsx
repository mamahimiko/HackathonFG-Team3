type CTAButtonProps ={
  onClick?: () => void;
};

const CTAButton = ({onClick} : CTAButtonProps) => {
  return (
    <button
    onClick={onClick}
      type="button"
      className="inline-flex self-center items-center justify-center rounded-2xl border border-accent bg-accent/10
          px-3 py-1.5 text-sm font-medium text-text-primary font-exo
          transition-all duration-200 hover:bg-accent hover:shadow-[0_0_12px_#5b7cff40]"
    >
      Request access
    </button>
  );
};

export default CTAButton;
