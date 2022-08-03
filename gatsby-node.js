const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const slugify = text => {
    return text
      .toString() // Cast to string (optional)
      .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase() // Convert the string to lowercase letters
      .trim() // Remove whitespace from both sides of a string (optional)
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
  }
  const { createPage } = actions
  const contentAreasResult = await graphql(`
    {
      allGoogleCurriculaSheet(filter: { published: { eq: true } }) {
        nodes {
          contentArea
          gradeSpan
        }
      }
    }
  `)
  if (contentAreasResult.errors) {
    reporter.panicOnBuild(`ERROR WHILE RUNNING GRAPHQL QUERY`)
    return
  }
  const areas = contentAreasResult.data.allGoogleCurriculaSheet.nodes
  if (areas.length) {
    areas.forEach(({ gradeSpan, contentArea }) => {
      createPage({
        path: `/curricula/${slugify(gradeSpan)}/${slugify(contentArea)}/`,
        component: path.resolve('./src/templates/content-area-template.js'),
        context: {
          gradeSpan,
          contentArea,
        },
      })
    })
  }
}
