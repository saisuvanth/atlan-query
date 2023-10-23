import { FC } from "react";

const Results: FC = () => {


    return (
        <div className="flex flex-col px-5">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">Results</div>
                <button className="button gap-2 font-bold text-lg bg-green-500 hover:bg-opacity-90">
                    <i className="fa-regular fa-file-excel"></i>
                    Export Data
                </button>
            </div>

        </div>
    )
}

export default Results;