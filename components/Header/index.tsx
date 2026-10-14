'use client'
import Navigation from "../Navigation"
import CTAButton from "./cta-Button"
import { useState } from "react";
import RequestAccess from "../Request-access";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <header className=" w-full z-50 flex justify-between section-heading px-20 py-[31.5px] text-(--color-text-primary) sticky top-0 items-center">
                <div className="text-[27px] font-bold">GEMU</div>
                <Navigation />
                <CTAButton onClick={()=> setIsOpen((prev) => !prev)} />
            </header>
            <RequestAccess 
            isOpen={isOpen}
            />
        </>
    )
}

export default Header