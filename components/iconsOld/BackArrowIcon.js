import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill="none"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 11S1 8.04 1 6s5-5 5-5"
    />
  </Svg>
)
export default SvgComponent