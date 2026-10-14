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
            <header className="z-50 flex justify-between font-exo bg-(--color-bg-black) px-3 py-2 text-(--color-text-primary) sticky top-0 z-50">
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