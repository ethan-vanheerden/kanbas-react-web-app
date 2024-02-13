import { useEffect } from 'react'

function useCollapseNav(handleResizeCallback: () => void) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        handleResizeCallback()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResizeCallback])
}

export default useCollapseNav
