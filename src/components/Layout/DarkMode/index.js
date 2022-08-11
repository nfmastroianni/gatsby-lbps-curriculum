import * as React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const DarkMode = () => {
  let theme
  if (localStorage) {
    theme = localStorage.getItem('theme')
  }
  const [mode, setMode] = React.useState(theme)
  const body = document.body

  if (
    theme === 'light' ||
    (theme === 'dark' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    body.classList.add(theme)
  } else {
    body.classList.add('light')
  }

  const switchTheme = e => {
    if (theme === 'dark') {
      setMode('light')
      localStorage.setItem('theme', 'light')
      body.classList.replace('dark', 'light')
    } else {
      setMode('dark')
      localStorage.setItem('theme', 'dark')
      body.classList.replace('light', 'dark')
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
