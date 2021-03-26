import React, { useRef, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Nav from "../components/Nav/Nav"
import Layout from "../components/Layout"

export const ContactForm = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: var(--rise-5);
  padding: 0;
`

const Contact = () => {
  const typeformRef = useRef(null)

  useEffect(() => {
    typeformEmbed.makeWidget(
      typeformRef.current,
      "https://form.typeform.com/to/S2uERHXc",
      {
        mode: "widget",
        hideHeader: false,
        hideFooter: false,
        opacity: 50,
      }
    )
  }, [typeformRef])

  return (
    <Layout>
      <Nav />
      <SEO title="Contact" />
      <ContactForm
        ref={typeformRef}
        style={{ height: "75vh", width: "100%" }}
      />
    </Layout>
  )
}

export default Contact
