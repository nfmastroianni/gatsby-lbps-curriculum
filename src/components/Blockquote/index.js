import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const QuoteIcon = ({ children, className }) => {
  return (
    <span
      className={`font-serif text-emerald-900 dark:text-emerald-200 absolute -left-10 -top-14 text-[8rem] hidden sm:block transition duration-500 ease-in-out  motion-safe:group-hover:scale-105 origin-bottom-left motion-safe:group-hover:-rotate-3 ${className}`}
      aria-hidden="true"
      style={{ textShadow: '2px 2px 4px darkgray' }}
    >
      {children}
    </span>
  )
}

const Blockquote = ({
  quote,
  author,
  url,
  image,
  imageAlt,
  className = '',
}) => {
  return (
    <blockquote
      className={`max-w-screen-sm my-4 md:my-6 lg:my-8 xl:my-10 p-4 md:p-6 shadow dark:shadow-emerald-600 relative rounded border dark:border-gray-500 mx-auto group ${className}`}
    >
      <QuoteIcon>&ldquo;</QuoteIcon>
      <p className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto dark:prose-invert font-serif italic">
        {quote}
      </p>
      <cite className="text-emerald-900 dark:text-emerald-200 text-sm not-italic flex justify-center items-center my-4 gap-4">
        {image && (
          <GatsbyImage
            image={getImage(image)}
            alt={imageAlt ? imageAlt : ''}
            imgClassName="rounded-full"
          />
        )}
        {url ? <a href={url}>{author}</a> : { author }}
      </cite>
    </blockquote>
  )
}

Blockquote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
}

export default Blockquote
