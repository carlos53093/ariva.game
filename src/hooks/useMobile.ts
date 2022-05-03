import { useState, useEffect } from 'react'

const useMobile = () => {
  const [isMobile, setMobileMode] = useState(false);
  const [isMobileTopbar, setMobileTopbar] = useState(false);
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  const resize = () => {
    if (window.innerWidth <= 1600) setMobileTopbar(true)
    else setMobileTopbar(false)
    if (window.innerWidth <= 850) setMobileMode(true)
    else setMobileMode(false)
  }
  return { isMobile, isMobileTopbar };
}

export default useMobile;