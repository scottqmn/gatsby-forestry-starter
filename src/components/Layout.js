import React from "react"
import styled from "styled-components"
import Header from "./Header"

const Layout = styled.div`
  .container {
    padding: 0 15px;

    .inner {
      margin: 0 auto;
      max-width: 900px;
    }
  }
`

export default ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  )
}
