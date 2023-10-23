import { FC } from "react";
import { Editor as MonacoEditor } from '@monaco-editor/react';

const Editor: FC = () => {
    return (
        <div className="px-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="font-bold text-2xl">
                    Query Editor
                </div>
                <button className="button gap-2 font-semibold text-xl bg-blue-600 hover:bg-opacity-90">
                    <i className="fa-solid fa-circle-play"></i>
                    Execute
                </button>
            </div>
            <MonacoEditor
                height={500}
                theme="vs-dark"
                className="rounded-md shadow-md"
                defaultValue="SELECT * FROM users;"
                language="sql"
            />
        </div>
    )
}

export default Editor;