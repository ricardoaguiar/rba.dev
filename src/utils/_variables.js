export const breakpoints = {
  xxxs: "300px",
  xxs: "400px",
  xs: "600px",
  sm: "800px",
  md: "900px",
  lg: "1200px",
  xl: "1600px",
  hd: "1920px",
}

// the styles go into effect when the vp reaches the size above.
// usage:

// ${
//   respondTo.sm`
//     ${CssComponent}:hover & {
//       background-color: tomato;
//     }
//   `}

//   ${respondTo.xs`
//   background-color: white;
//   margin: 0 auto;
//   max-width: 85vw;
//   padding: 5vh 5vw;
// `};
