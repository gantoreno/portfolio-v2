import { useState } from "react"

type UseLocalStorageReturnType = [any, (value: any, persist: boolean) => void]

export const useLocalStorage = (
  key: string,
  initialValue: any
): UseLocalStorageReturnType => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)

      return item
        ? JSON.parse(item)
        : initialValue instanceof Function
        ? initialValue()
        : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: any, persist: boolean = true) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      if (persist) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      //
    }
  }

  return [storedValue, setValue]
}
