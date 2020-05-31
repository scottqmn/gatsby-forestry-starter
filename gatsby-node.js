const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    console.log("node", node, node.fileAbsolutePath)
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // dynamically create pages here

  const blogTemplate = path.resolve("./src/templates/BlogPost.js")

  // get slugs
  const blogPostResponse = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(posts)/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  blogPostResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const locationTemplate = path.resolve("./src/templates/Location.js")

  const locationsResponse = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(locations)/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  locationsResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: locationTemplate,
      path: `/location/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
