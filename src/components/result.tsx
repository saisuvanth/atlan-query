import { FC } from "react";

interface ResultsProps {
    data: object[];
}

const Results: FC<ResultsProps> = ({ data }) => {

    return (
        <div className="h-5 flex flex-1 gap-3 flex-col px-4">
            <div style={{ width: 'inherit' }} className="flex-1 p-1 h-4/5 overflow-auto">
                {data.length === 0 ? <div className="text-center">No data to display</div> :
                    <table className="table">
                        <thead>
                            <tr>
                                {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                    <th key={index} className="px-4 py-2">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, index) => (
                                        <td key={index} className="border px-4 py-2">
                                            {value.toString()}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
            <div className="flex justify-end items-center">
                <button className="button gap-2 font-bold text-lg bg-blue-500 hover:bg-opacity-90">
                    <i className="fa-solid fa-download"></i>
                    Export Data
                </button>
            </div>
        </div>
    )
}

export default Results;