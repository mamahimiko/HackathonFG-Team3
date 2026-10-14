'use client'

import { useState } from "react";
import ConfirmationCard from "../ConfirmationCard";

type CTAButtonProps ={
  onClick?: () => void;
};

const CTAButton = ({onClick} : CTAButtonProps) => {
  
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>
    <button
    onClick={onClick}
      type="button"
      className="inline-flex self-center items-center justify-center rounded-2xl border border-accent bg-accent/10
          px-3 py-1.5 text-sm font-medium text-text-primary font-exo
          transition-all duration-200 hover:bg-accent hover:shadow-[0_0_12px_#5b7cff40]"
    >
      Request access
    </button>

    {isOpen && ( <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4">
       <ConfirmationCard onButtonClick={() => setIsOpen(false)} /> 
       </div>
       )}
       </>
  );
};

export default CTAButton;
