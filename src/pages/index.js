import React from "react";
import Layout from "../components/Layout";
import BlogPostList from "../components/BlogPostList";

export default function App() {
  return (
    <Layout>
      <h1>Hello Gatsby!</h1>
      <BlogPostList />
    </Layout>
  );
}
