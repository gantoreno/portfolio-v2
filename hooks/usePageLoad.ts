import { useEffect, useState } from "react"

type UsePageLoadReturnType = boolean

function usePageLoad(): UsePageLoadReturnType {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded
}

export default usePageLoad
