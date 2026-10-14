import NavItem from "./navItem"



const Navigation = () => {

    const menuItem = [
        {
            name:'Engin',
            href: '/'
        },
        {
            name:'Learn',
            href: '/learn'
        },
        {
            name:'Community',
            href: '/community'
        },
        {
            name:'Publish',
            href: '/publish'
        },
    ]

    return (
        <nav className="p-3">
            <div className="flex justify-evenly text-xl">
            {menuItem && menuItem.map(item => <NavItem name={item.name} href={item.href} key={item.name}/>)}
            </div>
        </nav>
    )
}

export default Navigation