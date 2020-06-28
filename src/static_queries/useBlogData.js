import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(posts)/" } }) {
        edges {
          node {
            id
            frontmatter {
              publish_date
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges
}
