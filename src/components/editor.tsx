import { FC, useState } from "react";
import { Editor as MonacoEditor } from '@monaco-editor/react';

interface EditorProps {
    updateQueryData: (query: string) => void;
}

const Editor: FC<EditorProps> = ({ updateQueryData }) => {
    const [query, setQuery] = useState<string>('SELECT * FROM products;');

    return (
        <div className="px-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="font-bold text-2xl">
                    Query Editor
                </div>
            </div>
            <MonacoEditor
                height={200}
                theme="vs-dark"
                className="rounded-md shadow-md"
                defaultValue={query}
                language="sql"
                onChange={(value) => setQuery(value!)}
            />
            <div className="flex justify-end">
                <button
                    className="button gap-2 font-semibold text-lg bg-green-600 hover:bg-opacity-90"
                    onClick={() => updateQueryData(query)}
                >
                    Run
                </button>
            </div>
        </div>
    )
}

export default Editor;