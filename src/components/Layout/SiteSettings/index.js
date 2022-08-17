import * as React from 'react'
import { Link as TransLink, useI18next } from 'gatsby-plugin-react-i18next'
import { HiAdjustments } from 'react-icons/hi'
import { FcCheckmark } from 'react-icons/fc'
import DarkMode from './DarkMode'

const SiteSettings = ({
  settingsOpen,
  setSettingsOpen,
  siteWrapper,
  className,
}) => {
  const [mode, setMode] = React.useState(null)

  const settingsBtn = React.useRef(null)

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

  const handleBlur = e => {
    const currentTarget = e.currentTarget

    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setSettingsOpen(false)
      }
    })
  }

  const { languages, originalPath, i18n } = useI18next()

  return (
    <div
      className="relative"
      role="button"
      tabIndex={0}
      onBlur={handleBlur}
      onFocus={() => {
        settingsBtn.current.focus()
      }}
    >
      <button
        ref={settingsBtn}
        onClick={() => {
          setSettingsOpen(true)
        }}
      >
        <HiAdjustments className="w-8 h-8" />
        <span className="sr-only">Activate Settings Menu</span>
      </button>
      {settingsOpen && (
        <div
          className={`z-10 bg-white dark:bg-gray-800 shadow dark:shadow-emerald-900 origin-top-left absolute right-0 border dark:border-emerald-700 rounded w-56 ${
            settingsOpen ? ` animate-fade-in` : ``
          } ${className}`}
        >
          <ul className="divide-y dark:divide-gray-500 ">
            <li className="p-4 relative hover:bg-gray-50 dark:hover:bg-gray-900 rounded-t">
              <DarkMode
                siteWrapper={siteWrapper}
                mode={mode}
                setMode={setMode}
              />
            </li>
            {languages.map(lng => {
              return (
                <li
                  className="p-4 relative hover:bg-gray-50 dark:hover:bg-gray-900 grid grid-cols-2 items-center"
                  key={lng}
                >
                  <FcCheckmark
                    className={`w-8 h-8 justify-self-center ${
                      i18n.resolvedLanguage !== lng ? `invisible` : ``
                    }`}
                  />
                  <TransLink to={originalPath} language={lng}>
                    {lng === 'en'
                      ? 'English'
                      : lng === 'es'
                      ? 'Español'
                      : 'Português'}
                  </TransLink>
                  {/* {i18n.resolvedLanguage === lng && (
                    <span className="text-center animate-pulse">
                      <GoTriangleUp className="inline" />
                    </span>
                  )} */}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SiteSettings
