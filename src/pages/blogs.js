import React from "react"
import Layout from "../components/Layout"
import BlogPostList from "../components/BlogPostList"

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="inner">
          <h1>Blogs</h1>
          <BlogPostList />
        </div>
      </div>
    </Layout>
  )
}
