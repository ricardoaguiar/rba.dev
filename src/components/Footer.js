import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Contenful from "./icons/contenful"
import Gatsby from "./icons/gatsby"
import Github from "./icons/github"
import Netlify from "./icons/netlify"

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
  margin: 0 auto;
  padding: 6vh 0;
  width: 100%;
  box-sizing: inherit;

  ${respondTo.T900`
    flex-direction: row;
    justify-content:space-around;
    width: calc(100% - 70px);
    margin-left: 70px;
    padding: 0;
`}
`
export const FooterItems = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  & a {
    margin: 0 0.3rem;
  }
  ${respondTo.T900`
    padding: 0;
 `}
`
export const FooterItemsRight = styled.div`
  display: flex;
  flex-direction: row;
`
export const FooterItemLabel = styled.p`
  letter-spacing: 0.3mm;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: right;
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterItemLabel>
        &copy; Ricardo Aguiar {new Date().getFullYear()}
      </FooterItemLabel>
      <FooterItemsRight>
        <FooterItemLabel>Built with:</FooterItemLabel>
        <FooterItems>
          <Contenful />
          <Gatsby />
          <Github />
          <Netlify />
        </FooterItems>
      </FooterItemsRight>
    </FooterSection>
  )
}

export default Footer
