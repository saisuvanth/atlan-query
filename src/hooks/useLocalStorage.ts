import { useEffect, useState } from "react"
import { toast } from "react-toastify";


const useLocalStorage = (key: string, initialValue: any) => {
    const [localStorageValue, setLocalStorageValue] = useState<string[]>();

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (!item) {
                toast.warn(`No ${key} found in local storage`)
                setLocalStorageValue(initialValue)
                return
            }
            setLocalStorageValue(JSON.parse(item))
            toast.success(`Loaded ${key} from local storage`)
        } catch (error) {
            toast.error(`Failed to load ${key} from local storage`)
            setLocalStorageValue(initialValue)
        }
    }, []);

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(localStorageValue) : value
            setLocalStorageValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }

    return { localStorageValue, setValue }
}

export default useLocalStorage;