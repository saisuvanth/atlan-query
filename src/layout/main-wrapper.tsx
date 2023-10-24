import Navbar from "@/components/navbar";
import Head from "next/head";
import { FC, useState } from "react";

interface MainWrapperProps {
    title: string;
    content: string;
    active: string;
    children: React.ReactNode;
}


const MainWrapper: FC<MainWrapperProps> = ({ active, title, content, children }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <main className='h-screen max-h-screen flex gap-3'>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
            </Head>
            <Navbar active={active} expanded={expanded} />
            <div className={`flex flex-col overflow-auto ${expanded ? 'w-5/6' : 'w-full'} py-2 lg:px-4 gap-3`}>
                <div className="mt-2 flex gap-4 items-center text-2xl font-bold">
                    <button
                        onClick={() => setExpanded(prev => !prev)}
                        className="flex py-1.5 px-2 rounded-md bg-gray-50 border border-gray-200 hover:border-gray-300 hover:bg-gray-100">
                        {expanded ? <i className="fa-solid fa-angles-left"></i> : <i className="fa-solid fa-angles-right"></i>}
                    </button>
                    Tables
                </div>
                {children}
            </div>
        </main>
    )
}

export default MainWrapper;