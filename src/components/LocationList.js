import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useLocationData from "../static_queries/useLocationData"

const LocationItem = styled.div`
  display: flex;
  align-items: center;

  .location-image {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
  }

  .location-info {
    margin-left: 15px;
  }
`

export default () => {
  const locationData = useLocationData()

  return (
    <section>
      {locationData.length ? (
        <ul>
          {locationData.map(({ node }) => {
            const { id, frontmatter, fields } = node
            return (
              <li key={id}>
                <Link to={`/location/${fields.slug}`}>
                  <LocationItem>
                    <div className="location-image">
                      <Img
                        fluid={frontmatter.hero_image.childImageSharp.fluid}
                      />
                    </div>
                    <div className="location-info">
                      <h3>{frontmatter.name}</h3>
                    </div>
                  </LocationItem>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <div>no locations</div>
      )}
    </section>
  )
}
