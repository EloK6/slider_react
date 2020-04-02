// import React from "react";

// const SliderContent = () => (
//   <div
//     style={{
//       transform: `translateX(-${props => props.translate}px)`,
//       transition: `transform ease-out ${props => props.transition}s`,
//       height: "100%",
//       width: `${props => props.width}px`,
//       display: "flex"
//     }}
//   ></div>
// );

// export default SliderContent;

import styled from "@emotion/styled";

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`;
export default SliderContent;
