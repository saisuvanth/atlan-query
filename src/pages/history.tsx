import useLocalStorage from "@/hooks/useLocalStorage";
import MainWrapper from "@/layout/main-wrapper";
import { useRouter } from "next/router";

export default function History() {
    const router = useRouter();
    const { localStorageValue: history } = useLocalStorage('queries', []);

    const handleHistoryClick = (query: string) => {
        router.push(`/?query=${query}`);
    }


    return (
        <MainWrapper title="History" content="History of Queries" active="history">
            <div className="mt-4 flex text-2xl font-bold dark:text-white">History</div>
            <div className="mt-4 flex flex-col w-fit gap-4 dark:text-white">
                {!history || history?.length === 0 && <div className="text-center">No history to display</div>}
                {history?.map((query, index) => (
                    <div key={index}
                        onClick={() => handleHistoryClick(query)}
                        className="flex w-full cursor-pointer flex-col gap-2 border border-gray-300 rounded-lg"
                    >
                        <div className="w-full text-xl bg-gray-100 dark:bg-gray-800 rounded-lg font-semibold px-3 py-2">{query}</div>
                    </div>
                ))}
            </div>
        </MainWrapper>
    )
}