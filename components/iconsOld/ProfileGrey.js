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
      d="M13.438 5.625c-.154 2.065-1.72 3.75-3.438 3.75-1.719 0-3.287-1.684-3.438-3.75C6.406 3.477 7.93 1.875 10 1.875c2.07 0 3.594 1.64 3.438 3.75Z"
    />
    <Path
      stroke="#6B7280"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10 11.875c-3.398 0-6.848 1.875-7.486 5.414-.077.427.164.836.611.836h13.75c.447 0 .688-.41.611-.836-.638-3.539-4.088-5.414-7.486-5.414Z"
    />
  </Svg>
)
export default SvgComponent