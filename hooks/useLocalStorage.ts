import { useState } from "react"

export const useLocalStorage = (key: string, initialValue: any) => {
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
