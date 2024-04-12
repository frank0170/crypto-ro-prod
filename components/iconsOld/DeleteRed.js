import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#E53935"
      d="M2.75 5h-.917v13c0 .53.193 1.04.537 1.414.344.375.81.586 1.297.586h9.166c.487 0 .953-.21 1.297-.586.343-.375.537-.884.537-1.414V5H2.75Zm9.733-3L11 0H5.5L4.017 2H0v2h16.5V2h-4.017Z"
    />
  </Svg>
)
export default SvgComponent