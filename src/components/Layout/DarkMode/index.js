import * as React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const DarkMode = ({ siteWrapper }) => {
  const [mode, setMode] = React.useState(null)

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (
      storedTheme === 'light' ||
      (storedTheme === 'dark' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      siteWrapper.current.classList.add(storedTheme)
      setMode(storedTheme)
      localStorage.setItem('theme', storedTheme)
    } else {
      setMode('light')
      siteWrapper.current.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [mode, siteWrapper])

  const switchTheme = e => {
    if (mode === 'dark') {
      console.log('MODE IS DARK ===> ', mode)
      setMode('light')
      localStorage.setItem('theme', 'light')
      siteWrapper.current.classList.remove('dark')
    } else {
      console.log('MODE IS NOT DARK ===> ', mode)
      setMode('dark')
      localStorage.setItem('theme', 'dark')
      siteWrapper.current.classList.add('dark')
    }
  }

  return (
    <button className="mr-4" id="darkMode" onClick={e => switchTheme(e)}>
      <HiSun
        className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 transition duration-300 ease-in-out ${
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
