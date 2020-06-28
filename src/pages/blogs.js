import React from "react"
import Layout from "../components/Layout"
import BlogPostList from "../components/BlogPostList"

export default () => {
  return (
    <Layout>
      <h1>Blogs</h1>
      <BlogPostList />
    </Layout>
  )
}
