import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Disable browser's native scroll restoration so it doesn't fight us
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // requestAnimationFrame ensures this runs after the new page has painted,
    // so it overrides any residual browser scroll restoration
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }, [pathname])

  return null
}

export default ScrollToTop
