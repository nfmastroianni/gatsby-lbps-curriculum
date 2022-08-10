import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const QuoteIcon = ({ children, className }) => {
  return (
    <div
      className={`font-serif text-emerald-900 absolute -left-10 -top-14 text-[8rem] hidden sm:block ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
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
      className={`max-w-screen-sm my-4 md:my-6 lg:my-8 p-4 md:p-6 shadow-md relative rounded border mx-auto ${className}`}
    >
      <QuoteIcon>&ldquo;</QuoteIcon>
      <p className="font-serif italic">{quote}</p>
      <cite className="text-emerald-900 text-sm not-italic flex justify-center items-center my-4 gap-4">
        {image && (
          <GatsbyImage
            image={getImage(image)}
            alt={imageAlt ? imageAlt : ''}
            className="rounded-full"
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
