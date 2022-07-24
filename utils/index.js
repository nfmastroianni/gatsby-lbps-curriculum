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
 * It takes a path and returns an object with two properties, crumbs and pieces. The crumbs property is
 * an array of strings that represent the path broken up into its individual pieces. The pieces
 * property is an array of strings that represent the path broken up into its individual pieces, but
 * with the first piece being the first item in the array, the second piece being the first and second
 * items in the array, and so on
 * @returns An object with two properties: crumbs and pieces.
 */
const getBreadcrumbs = path => {
  if (path) {
    const splitPath = path.split('/')
    const pieces = []
    splitPath.forEach(item => {
      if (item !== '') {
        pieces.push(item)
      }
    })
    const crumbs = []
    pieces.forEach((piece, i) => {
      if (i === 0) {
        crumbs.push(piece)
      } else {
        let arr = pieces.slice(0, i + 1)
        crumbs.push(arr.join('/'))
      }
    })
    return { crumbs, pieces }
  } else {
    return { crumbs: ['PATH NOT SPECIFIED'], pieces: ['PATH NOT SPECIFIED'] }
  }
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

export {
  getDepartmentImages,
  getBreadcrumbs,
  getUniqueGradeSpans,
  handleToTop,
  toggleVisible,
}
