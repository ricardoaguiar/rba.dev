import React from "react"
import styled from "styled-components"

const FooterSection = styled.section`
  width: 100%;
  background: var(--rbadev-duotone-2-hex);
  padding: 2rem;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  bottom: 0;
  outline: 4px dashed blueviolet;
`

const Footer = () => {
  return <FooterSection>This is the footer</FooterSection>
}

export default Footer
