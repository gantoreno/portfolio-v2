import { useEffect, useState } from "react"

type UsePageLoadReturnType = boolean

export const usePageLoad = (): UsePageLoadReturnType => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded
}
