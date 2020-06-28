import React from "react"
import styled from "styled-components"
import { ROUTES } from "../constants/routes"

const Header = styled.header`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;

    li {
      padding-left: 10px;
    }
  }
`

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="inner">
          <ul>
            {ROUTES.map(({ url, name }, i) => (
              <li key={`header-${name.toLowerCase()}-${i}`}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Header>
  )
}
