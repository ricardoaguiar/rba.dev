export const breakpoints = {
  M300: "300px",
  M375: "375px",
  M400: "400px",
  T600: "600px",  
  T700: "700px",
  T800: "800px",
  T900: "900px",
  T1000: "1000px",
  LP1200: "1200px",
  D1600: "1600px",
  HD: "1920px",
}

// the styles go into effect when the 
// vp reaches the size above.
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
