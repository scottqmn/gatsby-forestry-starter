import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query getLocationData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(locations)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              hero_image {
                childImageSharp {
                  fluid(maxWidth: 50) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
