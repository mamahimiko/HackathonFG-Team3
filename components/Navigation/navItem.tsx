'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
    name: string,
    href: string
}

const NavItem = ({name, href}: NavItemProps) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link className={`font-semibold px-5 py-2 text-lg sm:text-xl hover:text-[#8000FF] ${isActive ?
            "border-b-2 border-[#9A5BFF]" : ""}`}
            href={href}>
            {name}
        </Link>
    )
}

export default NavItem