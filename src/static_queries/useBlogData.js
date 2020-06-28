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
              hero_image {
                id
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
