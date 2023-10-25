import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";
// import Sidebar from "@/components/sidebar";
const Sidebar = dynamic(() => import('@/components/sidebar'), { ssr: false });
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
        <>
            <Navbar setActive={setExpanded} />
            <main className='h-screen max-h-screen flex'>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={content} />
                </Head>
                <Sidebar active={active} expanded={expanded} setActive={setExpanded} />
                <div className={`flex flex-col overflow-auto w-full py-2 md:px-4 gap-3`}>
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainWrapper;