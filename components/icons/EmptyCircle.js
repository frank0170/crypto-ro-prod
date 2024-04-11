import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Circle cx={11} cy={11} r={10.5} stroke="#fff" />
  </Svg>
)
export default SvgComponent