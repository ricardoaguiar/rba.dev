import React, { useRef, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
import styled from "@emotion/styled"

export const ContactForm = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: var(--rise-5);
  border-bottom: 6px solid var(--rise-7);
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
        hideHeader: true,
        hideFooter: true,
        opacity: 0,
      }
    )
  }, [typeformRef])

  return (
    <ContactForm ref={typeformRef} style={{ height: "65vh", width: "100%", paddingTop: "5vh" }} /> 
  )
}

export default Contact
