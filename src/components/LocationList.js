import React from "react"
import { Link } from "gatsby"
import useLocationData from "../static_queries/useLocationData"

export default () => {
  const locationData = useLocationData()

  return (
    <section className="container">
      <div className="inner">
        <h2>Locations</h2>
        {locationData.length ? (
          <ul>
            {locationData.map(({ node }) => {
              const { id, frontmatter, fields } = node
              return (
                <li key={id}>
                  <Link to={`/location/${fields.slug}`}>
                    {frontmatter.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <div>no locations</div>
        )}
      </div>
    </section>
  )
}
