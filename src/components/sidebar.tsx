import { useTheme } from "next-themes";
import Link from "next/link";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface NavbarProps {
    active: string;
    expanded: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<NavbarProps> = ({ active, expanded, setActive }) => {
    const { theme, setTheme } = useTheme();
    const routes = [
        { name: 'Editor', path: '', icon: 'fa-solid fa-code' },
        { name: 'Tables', path: 'tables', icon: 'fa-solid fa-table' },
        { name: 'History', path: 'history', icon: 'fa-solid fa-clock-rotate-left' }
    ]

    return (
        <>
            <div className={`flex flex-col py-2 px-3 w-[250px] fixed md:static h-screen left-0 top-0 bg-white dark:bg-gray-800 dark:text-white 
            ${expanded ? 'ml-0' : 'ml-[-250px] md:ml-0'} z-[99999] transition-[margin] ease-in-out duration-500 `}
            >
                <div className="flex flex-row min-h-[50px] justify-center items-center w-full gap-4 p-1">
                    <i className="fa-solid fa-database fa-2xl text-blue-600"></i>
                    {<div className="text-3xl font-bold flex items-end gap-2">
                        Query
                    </div>}
                </div>
                <div className="flex grow gap-3 flex-col flex-1 items-start mt-16">
                    {routes.map((route, index) => (
                        <Link key={index} href={`/${route.path}`} className={`w-full flex gap-3 ${expanded ? 'nav-item' : 'nav-item-compact'} ${active === route.path ? 'nav-active' : ''}`}>
                            <div className="icon">
                                <i className={route.icon + ' fa-fw'}></i>
                            </div>
                            {route.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex justify-between bg-blue-50 dark:bg-gray-700 px-5 rounded-lg py-3 gap-2 font-semibold items-center text-lg">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" checked={theme === 'dark'} className="sr-only peer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                        <div className={`w-11 h-6 bg-gray-300 rounded-full  
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-gray-300 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                        peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-gray-700 
                        dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-gray-300`}>
                        </div>
                    </label>
                    <div className="px-1 flex flex-1 items-center gap-2">
                        <div>{theme === 'dark' ? 'Dark' : 'Light'}</div>
                    </div>
                </div>

            </div>
            {expanded ? <div
                className={`flex md:hidden transition-all duration-500 ease-linear fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
                onClick={() => {
                    setActive(oldVal => !oldVal);
                }}
            /> : null}
        </>
    )
}

export default Sidebar;