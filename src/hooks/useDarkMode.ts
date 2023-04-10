import { useContext } from "react"

import { DarkModeContext } from "../providers/DarkModeProvider"

type UseDarkModeReturnType = [boolean, () => void]

function useDarkMode(): UseDarkModeReturnType {
  const [darkMode, toggleDarkMode] = useContext(DarkModeContext)

  return [darkMode, toggleDarkMode]
}

export default useDarkMode
