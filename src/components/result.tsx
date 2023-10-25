import { FC } from "react";
import CsvDownload from "react-csv-downloader";
import { Datas } from "react-csv-downloader/dist/esm/lib/csv";
interface ResultsProps {
    data: object[];
}

const Results: FC<ResultsProps> = ({ data }) => {

    return (
        <div className="flex flex-1 gap-3 flex-col h-full px-4 py-2 bg-white dark:bg-gray-800 dark:text-white rounded-md">
            <div style={{ width: 'inherit' }} className="flex-1 p-1 overflow-auto">
                {data.length === 0 ? <div className="text-center">No data to display</div> :
                    <table className="table">
                        <thead className="dark:bg-gray-700">
                            <tr className="">
                                {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                    <th key={index} className={`px-4 py-2 border-x dark:border-gray-500`}>
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, index) => (
                                        <td key={index} className="border px-4 py-2 dark:border-gray-500">
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
                <CsvDownload datas={data as Datas} filename="data.csv">
                    <button
                        id="export-data" aria-label="Export Data"
                        className="button text-white gap-2 font-bold text-lg bg-blue-500 hover:bg-opacity-90">
                        <i className="fa-solid fa-download"></i>
                        Export Data
                    </button>
                </CsvDownload>
            </div>
        </div>
    )
}

export default Results;