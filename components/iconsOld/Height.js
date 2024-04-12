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
    <Circle cx={10} cy={10} r={10} fill="#71D364" fillOpacity={0.15} />
    <Path
      fill="#71D364"
      d="M10.074 10.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm2.7 2.25V15h-.9v-2.25a4.95 4.95 0 0 1 2.9-4.507l.374.819a4.05 4.05 0 0 0-2.374 3.688Zm-4.5 0V15h-.9v-2.25A4.05 4.05 0 0 0 5 9.062l.373-.82a4.951 4.951 0 0 1 2.9 4.508Z"
    />
  </Svg>
)
export default SvgComponent