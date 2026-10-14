'use client'
import Navigation from "../Navigation"
import CTAButton from "./cta-Button"
import { useState } from "react";
import RequestAccess from "../Request-access";
import Link from "next/link";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <header className=" w-full z-50 flex justify-between section-heading px-20 py-[31.5px] text-(--color-text-primary) sticky top-0 items-center">
                <Link href="/" className="text-2xl font-bold">GEMU</Link>
                <Navigation />
                <CTAButton onClick={()=> setIsOpen((prev) => !prev)} />
            </header>
            <RequestAccess 
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            />
        </>
    )
}

export default Header