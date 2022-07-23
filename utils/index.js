/**
 * It takes an array of images and an array of departments, and adds the image data to the department
 * object
 * @param images - the array of images from the query
 * @param departments - an array of objects, each object representing a department
 * @returns An array of objects with the following properties:
 *   - name
 *   - image
 *   - gatsbyImageData
 */
const getDepartmentImages = (images, departments) => {
  images.forEach(({ childImageSharp, name }) => {
    departments.forEach(dep => {
      if (dep.image === name) {
        dep.gatsbyImageData = childImageSharp.gatsbyImageData
      }
    })
  })
  return departments
}

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

export { getDepartmentImages, getUniqueGradeSpans, handleToTop, toggleVisible }
