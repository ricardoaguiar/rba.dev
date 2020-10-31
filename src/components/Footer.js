import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Contenful from "./icons/contenful"
import { FaGithub } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"
import { GrGatsbyjs } from "react-icons/gr"
import { Link } from "gatsby"

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  align-items: flex-end;
  background: var(--bluejay-2);
  margin: 0 auto;
  padding-bottom: 50px;
  box-sizing: border-box;
  & > * {
    outline: 1px solid red;
  }

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
export const FooterItem = styled.span`
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
            <GrGatsbyjs size={20} />
          </FooterItem>
          <FooterItem>
            <Link to="https://www.contentful.com" target="blank">
              <FaGithub size={22} />
            </Link>
          </FooterItem>
          <FooterItem>
            <Link to="https://www.contentful.com" target="blank">
              <SiNetlify size={20} />
            </Link>
          </FooterItem>
        </FooterItems>
      </nav>
    </FooterSection>
  )
}

export default Footer
