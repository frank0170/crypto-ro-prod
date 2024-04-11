import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="m14.868 3.2 5.76 4.03c.47.328.914.867 1.241 1.494.328.627.516 1.3.516 1.876v6.78a4.122 4.122 0 0 1-4.12 4.12H7.485a4.13 4.13 0 0 1-4.12-4.13v-6.9c0-.534.17-1.173.469-1.78.298-.604.702-1.133 1.129-1.466L9.97 3.315c1.338-1.035 3.507-1.09 4.897-.115Zm-1.993 16.05c.686 0 1.25-.564 1.25-1.25v-3c0-.686-.564-1.25-1.25-1.25s-1.25.564-1.25 1.25v3c0 .686.564 1.25 1.25 1.25Z"
      fill={`${props.isActive ? "#FF8036" : "#6B7280"}`}
    />
  </Svg>
);
export default SvgComponent;
