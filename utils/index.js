const getUniqueGradeSpans = arr => {
  let allSpans = []
  arr.forEach(span => allSpans.push(span.gradeSpan))
  let uniqueSpans = [...new Set(allSpans)]
  return uniqueSpans
}

export { getUniqueGradeSpans }
