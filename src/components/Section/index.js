import * as React from 'react'
import SectionHeader from '../SectionHeader'

export default function Section({ children, headerText, id }) {
  return (
    <section id={id}>
      {headerText && <SectionHeader headerText={headerText} />}
      <div className="mx-auto py-2 px-4">{children}</div>
    </section>
  )
}
