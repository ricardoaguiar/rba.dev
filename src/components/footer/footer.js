import React from "react"
import styled from "@emotion/styled"

const FooterSection = styled.section`
  min-width: 100vw;
  min-height: 5vh;
  background: var(--rbadev-duotone-4-hex);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  bottom: 0;
  padding:.5em;
`

const Footer = () => {
  return <FooterSection>This is the footer</FooterSection>
}

export default Footer
