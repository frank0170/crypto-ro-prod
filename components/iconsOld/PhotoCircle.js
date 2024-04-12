import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={110}
    height={110}
    fill="none"
    {...props}
  >
    <Circle cx={55} cy={55} r={54.25} stroke="#FE6F32" strokeWidth={1.5} />
  </Svg>
)
export default SvgComponent