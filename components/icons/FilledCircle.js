import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Circle cx={11} cy={11} r={11} fill="#FF8036" />
    <Path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.257 11 2.674 2.673 5.347-5.347"
    />
  </Svg>
)
export default SvgComponent
