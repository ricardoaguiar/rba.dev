import React from "react"
import {
  FooterSection,
  FooterItems,
  FooterItem,
  FooterItemLabel,
} from "./footer-styled"
import Netlify from "../icons/netlify"
import Github from "../icons/github"
import Gatsby from "../icons/gatsby"
import Contenful from "../icons/contenful"

const Footer = () => {
  return (
    <FooterSection>
      <FooterItemLabel>Built with</FooterItemLabel>
      <nav>
        <FooterItems>
          <FooterItem>
            <Gatsby />
          </FooterItem>
          <FooterItem>
            <Contenful />
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
