import Navbar from "@/components/navbar";
import { TableMetadata, getTableMetadata } from "@/util/query";
import { useEffect, useState } from "react";

export default function Tables() {
    const [tableMetadata, setTableMetadata] = useState<TableMetadata>();

    useEffect(() => {
        setTableMetadata(getTableMetadata());
    }, [])

    return (
        <main className="h-screen max-h-screen flex gap-3">
            <Navbar active="tables" />
            <div className="flex flex-col overflow-auto w-5/6 py-2 px-4">
                <div className="mt-4 flex text-2xl font-bold">Tables</div>
                <div className="mt-4 flex flex-col gap-4">
                    {tableMetadata && Object.keys(tableMetadata).map((table, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="text-xl font-semibold">&nbsp;{table[0].toUpperCase() + table.slice(1)}</div>
                            <table className="w-3/5 table-fixed text-left">
                                <tbody>
                                    {tableMetadata[table].map((column, index) => (
                                        <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                            <th scope="row" className="px-6 py-4 text-lg text-orange-400">{column.name}</th>
                                            <td className="px-6 py-2    text-lg text-blue-400">{column.type}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}