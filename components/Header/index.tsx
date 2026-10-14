import Navigation from "../Navigation"

const Header = () => {
    return(
        <header className="bg-black text-[#F0E6ff] p-4 text-4xl flex justify-between">
            <div className="text-left">
            GEMU
            </div>
            <Navigation />
        </header>

    )
}

export default Header