import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const data = props.data.markdownRemark

  return (
    <Layout>
      <article>
        <figure>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.name}
          />
        </figure>
        <div>
          <h1>{data.frontmatter.name}</h1>
        </div>
        <div>{data.frontmatter.description}</div>
        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getLocationData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        name
        description
        hero_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        image_carousel
      }
      html
    }
  }
`
