import Link from "next/link";
import { FC } from "react";

interface NavbarProps {
    active: string;
}

const Navbar: FC<NavbarProps> = ({ active }) => {
    const routes = [{ name: 'Query Editor', path: '' }, { name: 'Tables', path: 'tables' }, { name: 'History', path: 'history' }]

    return (
        <div className="flex flex-col py-2 px-3 w-1/6 min-w-[200px] shadow-md">
            <div className="flex flex-row justify-center items-center gap-2 p-1">
                <i className="fa-solid fa-database fa-2xl text-blue-600"></i>
                <div className="text-3xl font-bold flex items-end gap-2">
                    SQL
                    <span className="text-blue-500 font-semibold">
                        Editor
                    </span>
                </div>
            </div>
            <div className="flex gap-3 flex-col flex-1 items-start mt-16">
                {routes.map((route, index) => (
                    <Link key={index} href={`/${route.path}`} className={`nav-item ${active === route.path ? 'nav-active' : ''}`}>
                        {route.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar;