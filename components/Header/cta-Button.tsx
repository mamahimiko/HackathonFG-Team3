type CTAButtonProps ={
  onClick?: () => void;
};

const CTAButton = ({onClick} : CTAButtonProps) => {
  return (
    <button
    onClick={onClick}
      type="button"
      className="inline-flex self-center items-center justify-center rounded-[5px] bg-primary 
          px-[22px] py-[13px] menu text-text-primary
          transition-all duration-200 hover:bg-accent hover:shadow-[0_0_12px_#5b7cff40]"
    >
      Request access
    </button>
  );
};

export default CTAButton;
