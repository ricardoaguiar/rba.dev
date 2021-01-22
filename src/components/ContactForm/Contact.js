import React, { useRef, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
import styled from "@emotion/styled"

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
    <ContactForm ref={typeformRef} style={{ height: "75vh", width: "100%" }} /> 
  )
}

export default Contact
