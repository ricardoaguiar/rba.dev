import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Contenful from "./icons/contenful"
import Gatsby from "./icons/gatsby"
import Github from "./icons/github"
import Netlify from "./icons/netlify"

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  align-items: flex-end;
  background: transparent;
  margin: 0 auto;
  padding-bottom: 50px;
  box-sizing: border-box;

  ${respondTo.T900`
    width: calc(100vw - 70px);
    margin-left: 70px;
`}
`
export const FooterItems = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  height: 24px;

  ${respondTo.T900`
    padding: 0;
 `}
`
export const FooterItem = styled.div`
  margin: 0;
  padding: 0;
`
export const FooterItemLabel = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.5mm;
  margin: 0 0 6px 0;
  font-weight: bolder;
  width: auto;
  font-size: 0.8rem;
  color: var(--rbadev-mono-5-hex);
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterItemLabel>
        &copy; Ricardo Aguiar {new Date().getFullYear()}
      </FooterItemLabel>
      <FooterItemLabel>Built with:</FooterItemLabel>
      <nav>
        <FooterItems>
          <FooterItem>
            <Contenful />
          </FooterItem>
          <FooterItem>
            <Gatsby />
          </FooterItem>
          <FooterItem>
            <Github />
          </FooterItem>
          <FooterItem>
            <Netlify />
          </FooterItem>
        </FooterItems>
      </nav>
    </FooterSection>
  )
}

export default Footer
