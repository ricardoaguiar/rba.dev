import * as React from "react"
import styled from "@emotion/styled"

export const RBA = styled.a`
  display: inline-flex;
  /* align-self: center;
  outline: 1px solid red; */
`

function RbaLogo(props) {
  return (
    <RBA href="/">
      <svg height="23px" viewBox="0 0 100 39.713" {...props}>
        <title id="title" lang="en">
          RBA.DEV
        </title>
        <path d="M98.13,43.53c0-24-17.38-43.53-50-43.53H0V113.75H20.36V86.89H46.17A62.42,62.42,0,0,0,56.35,86l19.83,27.74h23.7L74.78,80.4A40.37,40.37,0,0,0,98.13,43.53ZM49,69.34H20.36v-52H49.15C65.3,17.38,76.71,29,76.71,43.53,76.71,57.75,65.3,69.34,49,69.34Z"/><path class="b" d="M153,49.15C159.33,46,165,37.74,165,28.79,165,8.78,149.68,0,130.89,0h-53V113.75h64.77l25.25-56A28.24,28.24,0,0,0,153,49.15ZM98.24,17.55H129c9.83,0,14.75,5.27,14.75,13S138.62,43,129.84,43H98.24Zm32.83,78.64H98.24V60.38H133c13,0,21.41,6.32,21.41,18.26C154.41,90.4,145.29,96.19,131.07,96.19Z"/><path class="c" d="M213.22,0H193.91l-26,57.73a30.21,30.21,0,0,1,7.75,20.56c0,20-13,31.71-32.65,34.69l-.35.77h20.72l8.95-19.66h62.49l8.95,19.66h20.72ZM179.34,77.94l13-29.49c5.09-11.41,11.23-26.51,11.23-26.51s6.32,15.27,11.24,26.51l13,29.49Z"/>
      </svg>
    </RBA>
  )
}

const MemoRbaLogo = React.memo(RbaLogo)
export default MemoRbaLogo
