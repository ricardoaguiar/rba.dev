import React from "react"
import { FooterSection, FooterItems, FooterItem } from "./footer-styled"
import Netlify from "../icons/netlify"
import Github from "../icons/github"
import Gatsby from "../icons/gatsby"
import Contenful from "../icons/contenful"

const Footer = () => {
  return (
    <FooterSection>
      <FooterItems>
        <FooterItem>Built with</FooterItem>
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
    </FooterSection>
  )
}

export default Footer
