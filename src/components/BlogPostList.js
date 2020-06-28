import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"

export default () => {
  const blogData = useBlogData()

  return (
    <section className="container">
      <div className="inner">
        <h2>Blog Posts</h2>
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
      </div>
    </section>
  )
}
