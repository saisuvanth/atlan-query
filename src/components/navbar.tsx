import Image from "next/image";
import { FC } from "react";

const Navbar: FC = () => {
    return (
        <div className="flex flex-row py-3 px-4 shadow-md">
            <div className="flex grow items-center gap-10 p-3">
                <i className="fa-solid fa-database fa-2xl text-blue-600"></i>
                <div className="text-3xl font-bold flex items-end gap-2">
                    SQL
                    <span className="text-blue-500 font-semibold">
                        Editor
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <i className="fa-brands fa-github fa-xl"></i>
            </div>
        </div>
    )
}

export default Navbar;