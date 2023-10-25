import MainWrapper from "@/layout/main-wrapper";
import { TableMetadata, getTableMetadata } from "@/util/query";
import { useEffect, useState } from "react";

export default function Tables() {
    const [tableMetadata, setTableMetadata] = useState<TableMetadata>();

    useEffect(() => {
        setTableMetadata(getTableMetadata());
    }, [])

    return (
        <MainWrapper title="Tables" content="Table Metadata" active="tables">
            <div className="mt-4 flex flex-col gap-4">
                {tableMetadata && Object.keys(tableMetadata).map((table, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="text-xl font-semibold">&nbsp;{table[0].toUpperCase() + table.slice(1)}</div>
                        <table className="w-3/5 table-fixed text-left dark:bg-gray-600">
                            <tbody>
                                {tableMetadata[table].map((column, index) => (
                                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-600'}`}>
                                        <th scope="row" className="px-6 py-4 text-lg text-orange-400">{column.name}</th>
                                        <td className="px-6 py-2 text-lg text-blue-400 dark:text-white">{column.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </MainWrapper>
    )
}