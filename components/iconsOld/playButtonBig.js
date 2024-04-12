import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M2.313 23.5a2.21 2.21 0 0 1-1.094-.292c-.75-.425-1.216-1.25-1.216-2.145V2.936c0-.898.466-1.72 1.216-2.145A2.196 2.196 0 0 1 3.454.82l15.491 9.272a2.25 2.25 0 0 1 0 3.813L3.452 23.18a2.22 2.22 0 0 1-1.14.32Z"
    />
  </Svg>
);
export default SvgComponent;
