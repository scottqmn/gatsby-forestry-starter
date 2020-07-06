import React from "react"
import Img from "gatsby-image"

export default ({ images = [] }) => {
  console.log(images)

  return images.length ? (
    <ul>
      {images.map((image, index) => (
        <li key={`carousel-${index}`}>
          <Img fluid={image.childImageSharp.fluid} />
        </li>
      ))}
    </ul>
  ) : null
}
