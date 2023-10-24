import Navbar from "@/components/navbar";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/router";

export default function History() {
    const router = useRouter();
    const { localStorageValue: history } = useLocalStorage('queries', []);

    const handleHistoryClick = (query: string) => {
        router.push(`/?query=${query}`);
    }


    return (
        <main className='h-screen max-h-screen flex gap-3'>
            <Navbar active='history' />
            <div className="flex flex-col gap-3 overflow-auto w-5/6 py-2 px-4">
                <div className="mt-4 flex text-2xl font-bold">History</div>
                <div className="mt-4 flex flex-col w-fit gap-4">
                    {!history || history?.length === 0 && <div className="text-center">No history to display</div>}
                    {history?.map((query, index) => (
                        <div key={index}
                            onClick={() => handleHistoryClick(query)}
                            className="flex w-full cursor-pointer flex-col gap-2 border border-gray-300 rounded-lg"
                        >
                            <div className="w-full text-xl bg-gray-100 rounded-lg font-semibold px-3 py-2">{query}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}