// import data from json files
import categories from '@/data/categories.json'
import products from '@/data/products.json'
import orders from '@/data/orders.json'
import regions from '@/data/regions.json'
import shippers from '@/data/shippers.json'
import suppliers from '@/data/suppliers.json'
import employees from '@/data/employees.json'
import customers from '@/data/customers.json'

type Table = {
    [key: string]: object[]
}

const tables: Table = {
    categories,
    products,
    orders,
    regions,
    shippers,
    suppliers,
    employees,
    customers,
}

export const getQueryData = (query: string) => {
    for (const table in tables) {
        if (query.includes(table)) {
            return tables[table]
        }
    }
    return [];
}