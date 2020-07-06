import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
}

/* Force same slide height */
const Carousel = styled(Slider)`
  .slick-track {
    display: flex;
    max-height: 450px;
  }

  .slick-slide {
    height: inherit;

    & > * {
      height: 100%;
    }
  }
`

export default ({ images }) => {
  return images && images.length ? (
    <Carousel {...settings}>
      {images.map(image => (
        <Img
          key={`carousel-${image.id}`}
          fluid={image.childImageSharp.fluid}
          alt={image.name}
        />
      ))}
    </Carousel>
  ) : null
}
