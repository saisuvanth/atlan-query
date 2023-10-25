import { FC, createRef, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface EditorProps {
    updateQueryData: (query: string) => void;
    defaultQuery: string;
}

const CustomEditor: FC<EditorProps> = ({ updateQueryData, defaultQuery }) => {
    const { theme } = useTheme();

    const customTheme = theme === 'dark' ? 'vs-dark' : 'light';

    const [query, setQuery] = useState<string>(defaultQuery);
    const containerRef = createRef<HTMLDivElement>();
    const editorRef = useRef();
    const monacoRef = useRef();

    useEffect(() => {
        setQuery(defaultQuery);
    }, [defaultQuery])


    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver(() => {
            if (editorRef.current) {
                (editorRef.current as any).layout();
            }
        });
        observer.observe(containerRef.current!);
        return () => {
            observer.disconnect();
        }
    }, []);

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
        <div className="rounded-md relative overflow-clip flex h-full flex-col bg-white gap-3" ref={containerRef}>
            <div className="z-40 absolute bottom-2 right-2 flex justify-end">
                <button
                    id="run-query" aria-label="Run Query"
                    className="button !rounded-md text-white gap-2 font-semibold text-lg bg-green-700 hover:bg-opacity-90"
                    onClick={handleQuery}
                >
                    Run
                </button>
            </div>
            <Editor
                height="100%"
                theme={customTheme}
                className="rounded-md"
                defaultValue={query}
                language="sql"
                onChange={(value) => setQuery(value!)}
                onMount={(editor, monaco) => {
                    editorRef.current = editor;
                    monacoRef.current = monaco;
                }}
                options={{
                    minimap: { enabled: false },
                    automaticLayout: true
                }}
            />
        </div>
    )
}

export default CustomEditor;