import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={25}
    fill="none"
    {...props}
  >
    <Circle cx={13} cy={12.5} r={12} fill="#FE6F32" stroke="#fff" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.765 17.183h4.047"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.493 7.886v0a1.93 1.93 0 0 0-2.702.386L8.506 13.98c-1.103 1.47-.06 3.293-.06 3.293s2.06.474 3.147-.976l4.285-5.709a1.93 1.93 0 0 0-.385-2.702Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.97 9.38 3.086 2.317"
    />
  </Svg>
)
export default SvgComponent
