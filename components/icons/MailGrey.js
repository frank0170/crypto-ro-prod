import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.563 3.75H3.438c-.863 0-1.563.7-1.563 1.563v9.375c0 .862.7 1.562 1.563 1.562h13.124c.863 0 1.563-.7 1.563-1.563V5.313c0-.863-.7-1.563-1.563-1.563Z"
    />
    <Path
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.375 6.25 10 10.625l5.625-4.375"
    />
  </Svg>
)
export default SvgComponent