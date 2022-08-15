import * as React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const DarkMode = ({ siteWrapper }) => {
  const [mode, setMode] = React.useState(null)

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (
      storedTheme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      siteWrapper.current.classList.add('dark')
      setMode('dark')
      if (!storedTheme) {
        localStorage.setItem('theme', 'dark')
      }
    } else {
      localStorage.setItem('theme', 'light')
      setMode('light')
    }
  }, [mode, siteWrapper])

  const switchTheme = () => {
    if (mode === 'dark') {
      setMode('light')
      localStorage.setItem('theme', 'light')
      siteWrapper.current.classList.remove('dark')
    } else {
      setMode('dark')
      localStorage.setItem('theme', 'dark')
      siteWrapper.current.classList.add('dark')
    }
  }

  return (
    <button className="mr-4" id="darkMode" onClick={e => switchTheme(e)}>
      <HiSun
        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 transition duration-300 ease-in-out ${
          mode === 'dark' ? `opacity-0` : `opacity-100`
        }`}
      />

      <HiMoon
        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 transition duration-300 ease-in-out ${
          mode === 'light' ? `opacity-0` : `opacity-100`
        }`}
      />
    </button>
  )
}

export default DarkMode
