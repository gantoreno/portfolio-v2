import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return [darkMode, toggleDarkMode]
}

export default useDarkMode
