import React from "react"
import styled from "@emotion/styled"

const FooterSection = styled.section`
  max-width: 100vw;
  min-height: 10vh;
  background: var(--rbadev-duotone-4-hex);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  bottom: 0;
  padding: 2em;
`

const Footer = () => {
  return <FooterSection>This is the footer</FooterSection>
}

export default Footer
