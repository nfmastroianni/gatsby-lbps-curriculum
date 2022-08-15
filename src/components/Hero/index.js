import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Heading from '../Heading'

const Hero = ({ assistantTitle, officeMission, pageTitle }) => {
  return (
    <>
      <div className="grid md:grid-rows-3 md:grid-cols-5 min-h-[250px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 max-w-screen-2xl justify-center">
        <div className="md:col-span-2 md:row-span-2 flex items-end justify-center motion-safe:animate-fade-down motion-safe:md:animate-fade-right">
          <StaticImage
            src="../../images/curriculum_logo.png"
            alt=""
            layout="constrained"
            placeholder="tracedSVG"
            width={300}
            height={300}
            className="mb-4"
          />
        </div>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl md:col-span-3 row-span-1 text-center self-center motion-safe:animate-fade-up motion-safe:md:animate-fade-left">
          <Heading level={2}>{pageTitle}</Heading>
        </div>
        <div className="md:col-span-3 row-span-1 motion-safe:animate-fade-up motion-safe:md:animate-fade-left">
          <p className="prose md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert px-2 md:px-3 lg:px-4">
            {officeMission}
          </p>
        </div>
        <div className="md:col-span-2 row-span-1 p-2 mb-2 md:mb-0 self-end motion-safe:animate-fade-up motion-safe:md:animate-fade-right">
          <Heading level={3} className="text-center">
            <span>
              Nicole Esposito <br />
              {assistantTitle}
            </span>
          </Heading>
        </div>
        <div className="md:col-span-3 row-span-1 p-2 mb-2 md:mb-0 self-end motion-safe:md:animate-fade-left">
          <Heading
            level={4}
            className="dark:text-emerald-200 text-center pb-2 border-b dark:border-b-gray-600"
          >
            Office Information
          </Heading>
          <p className="prose prose-sm dark:prose-invert text-center italic my-4 md:my-2 mx-auto">
            540 Broadway <br />
            Long Branch, NJ 07740
          </p>
          <Heading level={5} className="text-center">
            Maria Graziano
          </Heading>
          <ul className="text-center prose prose-sm dark:prose-invert mx-auto">
            <li>Confidential Secretary</li>
            <li>732-571-2868 ext. 40240</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero
