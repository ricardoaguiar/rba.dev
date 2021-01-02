import React from 'react'
import styled from '@emotion/styled'


export const ContactForm = styled.div`
margin: 0 auto;
width: 100%;
background-color: var(--rise-5);
height: 40vh;
border-bottom: 6px solid var(--rise-7);
`

const Contact = () => {
    return (<ContactForm>Contact form</ContactForm>)
}

export default Contact