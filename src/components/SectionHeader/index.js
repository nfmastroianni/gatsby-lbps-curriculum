import * as React from 'react'

export default function SectionHeader({ bg, headerText }) {
  console.log(bg)
  return (
    <header
      className={`${
        bg
          ? `bg-[${bg}]`
          : ` bg-gradient-to-bl from-emerald-700 via-emerald-900 to-emerald-800`
      } py-2 md:py-1`}
    >
      <h2 className="text-center text-white text-xl md:text-2xl lg:text-3xl md:py-2 lg:py-3 tracking-wide font-semibold">
        {headerText}
      </h2>
    </header>
  )
}
