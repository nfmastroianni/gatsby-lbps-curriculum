/**
 * It takes an array of objects, and returns an array of unique values from the property `gradeSpan` of
 * each object
 * @returns An array of unique gradeSpans
 */
const getUniqueGradeSpans = arr => {
  let allSpans = []
  arr.forEach(span => allSpans.push(span.gradeSpan))
  let uniqueSpans = [...new Set(allSpans)]
  return uniqueSpans
}

const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const toggleVisible = setState => {
  const scrolled = document.documentElement.scrollTop
  if (scrolled > 400) {
    setState(true)
  } else if (scrolled <= 400) {
    setState(false)
  }
}

export { getUniqueGradeSpans, handleToTop, toggleVisible }
