import React from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type DarkMode = [boolean, () => void]

export const DarkModeContext = React.createContext<DarkMode>([false, () => {}])

type DarkModeProviderProps = {
  children: React.ReactNode
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={[darkMode, toggleDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
