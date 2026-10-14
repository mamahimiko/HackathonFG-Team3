import Navigation from "../Navigation"
import CTAButton from "./cta-Button"

const Header = () => {
    return(
        <header className="flex justify-between bg-(--color-bg-black) px-3 py-2 text-(--color-text-primary) sticky top-0 z-50">
            <div className="text-2xl font-bold">
            GEMU
            </div>
            <Navigation />
            <CTAButton />
        </header>

    )
}

export default Header