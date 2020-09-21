import React from "react"
import styled from "@emotion/styled"

const PageNotFound = styled.div`
  height: 80vh;
  width: 80vw;
  color: white;
  background-color: tomato;
  display: flex;
  align-items: center;
`
const Paragraph = styled.div`
  margin: 0 auto;
  width: 50vw;
  font-size: 3rem;
  padding: 6rem 4rem;
  line-height: 2;
  background-color: #ffffff44;
  border: 0.5px solid #ffffff33;
`

function NotFound() {
  return (
    <PageNotFound>
      <Paragraph>
        <h2>oops, I think we are missing something here.</h2>
      </Paragraph>
    </PageNotFound>
  )
}

export default NotFound
