import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FE6F32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.079 9.383H12.1a1.98 1.98 0 0 1 0-3.96h2.979M12.438 7.358h-.23"
    />
    <Path
      stroke="#FE6F32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.86 1h6.359a3.86 3.86 0 0 1 3.86 3.86v5.28a3.86 3.86 0 0 1-3.86 3.86H4.86A3.86 3.86 0 0 1 1 10.14V4.86A3.86 3.86 0 0 1 4.86 1Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#FE6F32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.336 4.338h3.972"
    />
  </Svg>
)
export default SvgComponent
