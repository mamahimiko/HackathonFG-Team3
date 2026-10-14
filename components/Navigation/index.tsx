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
        <nav className="">
            <div className="flex justify-evenly menu text-text-purple">
            {menuItem && menuItem.map(item => <NavItem name={item.name} href={item.href} key={item.name}/>)}
            </div>
        </nav>
    )
}

export default Navigation