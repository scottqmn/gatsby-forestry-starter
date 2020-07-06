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
              description
              hero_image {
                childImageSharp {
                  fluid(maxWidth: 400) {
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
