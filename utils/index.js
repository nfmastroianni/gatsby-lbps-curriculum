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
  images.forEach(({ gatsbyImageData, parent: { name } }) => {
    departments.forEach(dep => {
      if (dep.image === name) {
        dep.gatsbyImageData = gatsbyImageData
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

const getUniqueContentAreas = arr => {
  let allContentAreas = []
  arr.forEach(area => allContentAreas.push(area.subject))
  let uniqueAreas = [...new Set(allContentAreas)]
  let returnData = uniqueAreas.map((area, i) => {
    return {
      title: area,
      count: allContentAreas.filter(subject => subject === area).length,
    }
  })
  return returnData
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

const slugify = text => {
  return text
    .toString() // Cast to string (optional)
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
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
  getUniqueContentAreas,
  getUniqueGradeSpans,
  handleToTop,
  slugify,
  toggleVisible,
}
