import React from "react"
import Layout from "../components/Layout"
import {
  graphql,
  // Link
} from "gatsby"
// import useBlogData from "../static_queries/useBlogData"
//this component handles the blur img & fade-ins
import Img from "gatsby-image"

export default props => {
  const data = props.data.markdownRemark
  // const allBlogData = useBlogData()
  // const nextSlug = getNextSlug(data.fields.slug)

  // function getNextSlug(slug) {
  //   const allSlugs = allBlogData.map(blog => {
  //     return blog.node.fields.slug
  //   })
  //   const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
  //   if (nextSlug !== undefined && nextSlug !== "") {
  //     return nextSlug
  //   } else {
  //     return allSlugs[0]
  //   }
  // }

  // console.log(data.frontmatter.hero_image.childImageSharp)
  return (
    <Layout>
      <article>
        {/* <figure>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.name}
          />
        </figure> */}
        <div>
          <h1>{data.frontmatter.name}</h1>
        </div>
        <div>{data.frontmatter.description}</div>
        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
        <div>
          {/* <h2>Written By: {data.frontmatter.author}</h2> */}
          {/* <Link to={`blog/${nextSlug}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 26 26"
              enableBackground="new 0 0 26 26"
            >
              <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
            </svg>
          </Link> */}
        </div>
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
      }
      html
    }
  }
`
