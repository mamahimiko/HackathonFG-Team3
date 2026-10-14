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
      className="inline-flex self-center items-center justify-center rounded-[5px] bg-primary 
          px-4 py-2 menu text-text-primary
          transition-all duration-200 hover:bg-accent hover:shadow-[0_0_12px_#5b7cff40] cursor-pointer"
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
