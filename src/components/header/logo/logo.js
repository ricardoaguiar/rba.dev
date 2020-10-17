import React from "react"
import styled from "@emotion/styled"
import { respondTo } from "../../../utils/_respondTo"

const LOGO = styled.div`
  font-weight: 700;
  font-size: 0.9em;
  padding-left: 1em;
  min-width: 100%;
  display: table;

  ${respondTo.T900`
    display: block;
    min-width: 100%;
    padding: 1em 0;
    text-align: center;
  `}
`
const RBA = styled.h4`
  margin-bottom: -.2em;
  
  ${respondTo.T900`
    font-size: 1em;
    `}
  }
  `
const DEV = styled.h4`
  margin: 0;
  letter-spacing: .2mm;
  
  ${respondTo.T900`
    letter-spacing: .3mm
  `}
  }
`

function Logo() {
  return (
    <LOGO>
      <RBA>RBA</RBA>
      <DEV>DEV</DEV>
    </LOGO>
  )
}

export default Logo
