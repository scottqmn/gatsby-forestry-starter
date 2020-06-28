import React from "react"

export default ({ images = [] }) => {
  console.log(images)

  return images.length ? (
    <ul>
      {images.map(src => (
        <li key={`carousel-${src}`}>
          {src}
          <img src={src} alt="placeholder" />
        </li>
      ))}
    </ul>
  ) : null
}
