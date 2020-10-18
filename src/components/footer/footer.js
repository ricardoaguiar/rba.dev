import React from "react"
import { FooterSection, FooterItem, FooterItemLabel } from "./footer-styled"
import Netlify from "./netlify"
import Github from "./github"
import Gatsby from "./gatsby"
import Contenful from "./contenful"

const Footer = () => {
  return (
    <FooterSection>
      <FooterItemLabel>Built with</FooterItemLabel>
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
    </FooterSection>
  )
}

export default Footer
