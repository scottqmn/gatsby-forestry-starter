import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import ImageCarousel from "../components/ImageCarousel"

export default props => {
  const data = props.data.markdownRemark
  console.log(data.frontmatter)

  return (
    <Layout>
      <article>
        <figure>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.name}
          />
        </figure>

        <div className="container">
          <div className="inner">
            <h1>{data.frontmatter.name}</h1>
            <div>{data.frontmatter.description}</div>
          </div>
        </div>

        {data.frontmatter.image_carousel && (
          <ImageCarousel images={data.frontmatter.image_carousel} />
        )}

        {data.html && (
          <div className="container">
            <div className="inner">
              <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
            </div>
          </div>
        )}
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
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
        image_carousel {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
          name
          id
        }
      }
      html
    }
  }
`
