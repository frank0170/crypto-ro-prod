import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={10} fill="#FE6F32" fillOpacity={0.15} />
    <Path
      stroke="#FE6F32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 7s3 1.776 3 3-3 3-3 3"
    />
  </Svg>
)
export default SvgComponent