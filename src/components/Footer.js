import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Contentful from "./icons/contentful"
import Gatsby from "./icons/gatsby"
import Github from "./icons/github"
import Netlify from "./icons/netlify"

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 25vh;
  margin: 0 auto;
  padding: 6vh 0;
  max-width: 100%;
  box-sizing: inherit;
  background: var(--rise-1);
  color: var(--rise-8);
  border-top: 6px solid var(--rise-5);

  ${respondTo.T900`
    flex-direction: row;
    justify-content:space-around;
    /* width: calc(100vw - 90px); */
    margin-left: 90px;
    padding: 0;
`}
`
export const FooterItems = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & a {
    margin: 0 0 0 0.4rem;
  }

  ${respondTo.T900`
    padding: 0;
 `}
`
export const FooterItemsRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  order: -1;

  ${respondTo.T900`
    order: 0;
 `}
`
export const FooterItemLabel = styled.p`
  letter-spacing: 0.1mm;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: right;
  padding-bottom: 2px;
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterItemLabel>
        &copy; Ricardo Aguiar • {new Date().getFullYear()}
      </FooterItemLabel>
      <FooterItemsRight>
        <FooterItemLabel>Built with:</FooterItemLabel>
        <FooterItems>
          <Contentful />
          <Gatsby />
          <Github />
          <Netlify />
        </FooterItems>
      </FooterItemsRight>
    </FooterSection>
  )
}

export default Footer
