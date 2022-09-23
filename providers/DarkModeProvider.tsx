import React, { useState, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type DarkMode = [boolean, () => void]

export const DarkModeContext = React.createContext<DarkMode>([false, () => {}])

type DarkModeProviderProps = {
  children: React.ReactNode
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false)
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", () => {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    } catch {
      return false
    }
  })

  const toggleDarkMode = (value: boolean | null = null) => {
    setDarkMode(value !== null ? value : !darkMode)
  }

  useEffect(() => {
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
