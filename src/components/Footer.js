import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../utils/_respondTo"
import Contenful from "./icons/contenful"
import { FaGithubAlt } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"
import { GrGatsbyjs } from "react-icons/gr"

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  align-items: center;
  background: var(--white);
  margin: 0 auto;
  box-sizing: border-box;
  & > * {
    outline: 1px solid red;
  }

  ${respondTo.T900`
    width: calc(100% - 70px);
    margin-left: 70px
`}
`
export const FooterItems = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin: 0 auto;

  ${respondTo.T900`
    padding: 0.5rem;
    max-width: 50vw;
 `}
`
export const FooterItem = styled.div`
  margin: 1rem;

  ${respondTo.T900`
    
  `}
`
export const FooterItemLabel = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.5mm;
  margin: 1rem auto;
  font-weight: bolder;
  width: auto;
  font-size: 0.8rem;
  margin-bottom: -0.5rem;
  color: var(--rbadev-mono-5-hex);
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterItemLabel>Built with</FooterItemLabel>
      <nav>
        <FooterItems>
          <FooterItem>
            <Contenful />
          </FooterItem>
          <FooterItem>
            <GrGatsbyjs size={25.59} />
          </FooterItem>
          <FooterItem>
            <FaGithubAlt size={25.59} />
          </FooterItem>
          <FooterItem>
            <SiNetlify size={25.59} />
          </FooterItem>
        </FooterItems>
      </nav>
      <FooterItemLabel>
        &copy; Ricardo Aguiar {new Date().getFullYear()}
      </FooterItemLabel>
    </FooterSection>
  )
}

export default Footer
