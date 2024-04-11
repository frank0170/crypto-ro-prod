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
    <Circle cx={10} cy={10} r={10} fill="#4B89AF" fillOpacity={0.15} />
    <Path
      fill="#4B89AF"
      d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-.8a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm-.4-2.883a1 1 0 1 1 .8 0V11.6h-.8v-1.283Z"
    />
  </Svg>
)
export default SvgComponent
