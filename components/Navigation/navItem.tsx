import Link from "next/link"

type NavItemProps = {
    name: string,
    href: string
}

const NavItem = ({name, href}: NavItemProps) => {

    return (
        <Link className="font-semibold px-5 py-2 text-lg sm:text-xl hover:text-[#8000FF]" 
              href={href}>
                {name}
                </Link>
    )
}

export default NavItem