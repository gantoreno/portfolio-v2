import { useContext } from "react"

import { DarkModeContext } from "../providers/DarkModeProvider"

function useDarkMode() {
  const [darkMode, toggleDarkMode] = useContext(DarkModeContext)

  return [darkMode, toggleDarkMode]
}

export default useDarkMode
