import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF8036"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 10c1.667-2.467 0-5.833-.833-6.667 0 2.532-1.478 3.951-2.5 5C5.645 9.383 5 11.033 5 12.5a5 5 0 1 0 10 0c0-1.277-.88-3.283-1.667-4.167-1.488 2.5-2.325 2.5-3.333 1.667Z"
    />
  </Svg>
);
export default SvgComponent;
