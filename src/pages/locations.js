import React from "react"
import Layout from "../components/Layout"
import LocationList from "../components/LocationList"

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="inner">
          <h1>Locations</h1>
          <LocationList />
        </div>
      </div>
    </Layout>
  )
}
