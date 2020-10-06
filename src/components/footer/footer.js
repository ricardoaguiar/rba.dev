import React from "react"
import styled from "@emotion/styled"

const FooterSection = styled.section`
  width: calc(100% - 7vw);
  min-height: 8vh;
  background: var(--rbadev-duotone-3-hex);
  border: 1px solid var(--rbadev-duotone-2-hex);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  bottom: 0;
  padding:.5em;
  text-align: center;
`

const Footer = () => {
  return <FooterSection>This is the footer</FooterSection>
}

export default Footer
