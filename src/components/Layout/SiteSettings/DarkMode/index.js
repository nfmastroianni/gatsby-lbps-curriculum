import * as React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

const DarkMode = ({ siteWrapper, className, mode, setMode }) => {
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
    <button
      className={` ${className} w-full grid grid-cols-2 items-center`}
      id="darkMode"
      onClick={e => switchTheme(e)}
      role="menuitem"
    >
      {mode === 'light' && (
        <HiSun
          className={`justify-self-center inline w-6 h-6 transition duration-300 ease-in-out ${
            mode === 'dark' ? `` : `animate-fade-in`
          }`}
        />
      )}

      {mode === 'dark' && (
        <HiMoon
          className={`justify-self-center w-6 h-6 transition duration-300 ease-in-out ${
            mode === 'light' ? `` : `animate-fade-in`
          }`}
        />
      )}
      <span className="capitalize block">{mode} Mode</span>
    </button>
  )
}

export default DarkMode
