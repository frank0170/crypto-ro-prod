import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={50}
    fill="none"
    {...props}
  >
    <Rect
      height={Math.min(props.size, 50)} // Ensure it doesn't exceed 50px
      width={30}
      rx={6}
      fill={`${props.isActive ? "#FF8036" : "#6B7280"}`}
      y={50 - Math.min(props.size, 50)}
    />
  </Svg>
);
export default SvgComponent;
