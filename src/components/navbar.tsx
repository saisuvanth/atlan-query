import Link from "next/link";
import { FC, useState } from "react";

interface NavbarProps {
    active: string;
    expanded: boolean;
}

const Navbar: FC<NavbarProps> = ({ active, expanded }) => {

    const routes = [
        { name: 'Editor', path: '', icon: 'fa-solid fa-code' },
        { name: 'Tables', path: 'tables', icon: 'fa-solid fa-table' },
        { name: 'History', path: 'history', icon: 'fa-solid fa-clock-rotate-left' }
    ]

    return (
        <div className={`flex flex-col py-2 px-3 w-1/6 ${expanded ? 'min-w-[200px]' : 'w-fit'} shadow-md transition-[width] ease-in-out duration-300`}>
            <div className="flex flex-row min-h-[50px] justify-center items-center w-full gap-4 p-1">
                <i className="fa-solid fa-database fa-2xl text-blue-600"></i>
                {expanded ? <div className="text-3xl font-bold flex items-end gap-2">
                    Query
                </div> : null}
            </div>
            <div className="flex gap-3 flex-col flex-1 items-start mt-16">
                {routes.map((route, index) => (
                    <Link key={index} href={`/${route.path}`} className={`flex gap-3 ${expanded ? 'nav-item' : 'nav-item-compact'} ${active === route.path ? 'nav-active' : ''}`}>
                        <div className="icon">
                            <i className={route.icon + ' fa-fw'}></i>
                        </div>
                        {expanded ? route.name : null}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar;