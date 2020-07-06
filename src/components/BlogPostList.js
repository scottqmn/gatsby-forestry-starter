import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"

export default () => {
  const blogData = useBlogData()

  return (
    <section>
      {blogData.length ? (
        <ul>
          {blogData.map(({ node }) => {
            const { id, frontmatter, fields } = node
            return (
              <li key={id}>
                <Link to={`/blog/${fields.slug}`}>{frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <div>no posts</div>
      )}
    </section>
  )
}
