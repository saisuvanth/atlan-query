import { useTheme } from "next-themes";
import { Dispatch, FC, SetStateAction } from "react";

interface NavbarProps {
    setActive: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ setActive }) => {
    const { theme, setTheme } = useTheme();


    return (
        <nav className="md:hidden z-20 h-[60px]">
            <div className="flex py-2 px-3 items-center bg-white dark:bg-gray-800 dark:text-white">
                <button
                    id="toggle-sidebar" aria-label="Toggle Sidebar" className="text-2xl flex"
                    onClick={() => setActive(prev => !prev)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="mx-auto flex items-center gap-4">
                    <i className="fa-solid fa-database fa-2xl text-blue-600"></i>
                    <div className="text-3xl font-bold flex items-end gap-2">
                        Query
                    </div>
                </div>
                <div className="px-4 py-3 flex gap-2 font-semibold items-center text-lg">
                    <div className="toggle colour">
                        <input id="check" className="toggle-checkbox hidden" type="checkbox" checked={theme === 'dark' ? true : false} onChange={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }} />
                        <label htmlFor="check" className="cursor-pointer toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;