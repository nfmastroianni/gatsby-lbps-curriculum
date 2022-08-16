import * as React from 'react'
import PropTypes from 'prop-types'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Navbar from './Navbar'
import { handleToTop, toggleVisible } from '../../../utils'
import { HiChevronUp } from 'react-icons/hi'
import { BsArrowReturnLeft } from 'react-icons/bs'
import Footer from './Footer'

const Layout = ({ children, siteTitle, path }) => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { i18n } = useI18next()
  React.useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', toggleToTop)
    return () => {
      window.removeEventListener('scroll', toggleToTop)
    }
  }, [isScrolled])
  const toggleToTop = () => {
    toggleVisible(setIsScrolled)
  }
  const siteWrapper = React.useRef(null)
  return (
    <div
      ref={siteWrapper}
      className="flex flex-col min-h-screen space-between dark:bg-gray-900"
    >
      <ul id="nav-access" className="relative">
        <li className="">
          <button
            onClick={e => {
              e.preventDefault()
              const mainContent = document.querySelector('#main-content')
              if (mainContent) {
                mainContent.tabIndex = -1
                mainContent.focus()
                setTimeout(() => mainContent.removeAttribute('tabindex'), 1000)
              }
            }}
            className="h-10 flex justify-center items-center absolute z-50 -top-20 sm:left-1/4 text-xl text-white w-full sm:w-1/2 text-center bg-emerald-700 bg-opacity-95 transform focus:translate-y-20 transition-all duration-500 ease-in-out"
          >
            Skip to main content
            <span className="text-white px-3 py-0 bg-emerald-900 rounded-sm ml-3">
              Return
              <BsArrowReturnLeft className="w-3 h-3 inline text-white ml-1" />
            </span>
          </button>
        </li>
      </ul>
      <Navbar siteTitle={siteTitle} path={path} siteWrapper={siteWrapper} />

      <main id="main-content" className="dark:bg-gray-900">
        {children}
      </main>
      <Footer />
      <button onClick={handleToTop}>
        <HiChevronUp
          className={`w-8 h-8 bg-emerald-900 bg-opacity-60 text-white rounded-full fixed bottom-6 right-6 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out ${
            isScrolled ? `visible` : ` translate-y-[100px]`
          }`}
        />
        <span className="sr-only">Scroll to the top of the page</span>
      </button>
    </div>
  )
}

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
