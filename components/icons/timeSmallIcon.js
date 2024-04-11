import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 -1 12 12"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 10.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM6 6l1.5 1M6 3.5V6"
    />
  </Svg>
);
export default SvgComponent;
