import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import {} from '@monaco-editor/react';
const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface EditorProps {
    updateQueryData: (query: string) => void;
    defaultQuery: string;
}

const CustomEditor: FC<EditorProps> = ({ updateQueryData, defaultQuery }) => {
    const [query, setQuery] = useState<string>(defaultQuery);

    useEffect(() => {
        setQuery(defaultQuery);
    }, [defaultQuery])

    const handleQuery = () => {
        if (localStorage.getItem('queries')) {
            const prevQueries = JSON.parse(localStorage.getItem('queries') as string);
            prevQueries.unshift(query);
            localStorage.setItem('queries', JSON.stringify(prevQueries));
        }
        else {
            localStorage.setItem('queries', JSON.stringify([query]));
        }
        updateQueryData(query)
    }

    return (
        <div className="px-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="font-bold text-2xl">
                    Query Editor
                </div>
            </div>
            <Editor
                height={200}
                theme="vs-dark"
                className="rounded-md shadow-md"
                defaultValue={query}
                language="sql"
                onChange={(value) => setQuery(value!)}
                options={{
                    minimap: { enabled: false },
                    automaticLayout: true
                }}
            />
            <div className="flex justify-end">
                <button
                    className="button gap-2 font-semibold text-lg bg-green-600 hover:bg-opacity-90"
                    onClick={handleQuery}
                >
                    Run
                </button>
            </div>
        </div>
    )
}

export default CustomEditor;