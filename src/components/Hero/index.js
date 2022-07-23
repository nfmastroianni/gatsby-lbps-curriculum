import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Hero = () => {
  return (
    <>
      <div className="grid md:grid-rows-3 md:grid-cols-5 min-h-[250px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 max-w-screen-2xl justify-center">
        <div className="md:col-span-2 md:row-span-2 flex items-end justify-center">
          <StaticImage
            src="../../images/curriculum_logo.png"
            alt=""
            layout="constrained"
            placeholder="tracedSVG"
            width={300}
            height={300}
          />
        </div>
        <div className="md:col-span-3 row-span-1 text-center self-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl my-3 text-emerald-900 font-semibold">
            What We Teach &amp; How We Teach It
          </h2>
        </div>
        <div className="md:col-span-3 row-span-1">
          <p className="prose md:prose-xl lg:prose-2xl px-2 md:px-3 lg:px-4">
            We have an important mission here at Long Branch Public Schools. We
            strive to meet and exceed the standards set forth by the State of
            New Jersey. In order to accomplish this, we continuously develop and
            revise our curricula (<em>what we teach</em>). Our adminstration and
            teacher leaders ensure best practices are followed during
            instruction (<em>how we teach</em>).
          </p>
        </div>
        <div className="md:col-span-2 row-span-1 p-2 mb-2 md:mb-0 self-end">
          <h3 className="text-center font-semibold text-emerald-900 text-2xl">
            Nicole Esposito <br />
            Assistant Superintendent <br /> of Curriculum &amp; Instruction
          </h3>
        </div>
        <div className="md:col-span-3 row-span-1 p-2 mb-2 md:mb-0 self-end">
          <h4 className="text-xl font-semibold text-center pb-2 border-b">
            Office Information
          </h4>
          <p className="prose-sm text-center italic my-4 md:my-2">
            540 Broadway <br />
            Long Branch, NJ 07740
          </p>
          <p className="text-xl font-semibold text-center">Maria Graziano</p>
          <ul className="text-center">
            <li>Confidential Secretary</li>
            <li>732-571-2868 ext. 40240</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero
