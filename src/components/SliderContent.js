// import React, { Component } from "react";

// class SliderContent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const styles = {
//       transform: `translateX(-${props => props.translate}px)`,
//       transition: `transform ease-out ${props => props.transition}s`,
//       height: "100%",
//       width: `${props => props.width}px`,
//       display: "flex"
//     };
//     return <div style={styles}></div>;
//   }
// }

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
