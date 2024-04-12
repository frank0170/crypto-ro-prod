import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.71 6.526a1.974 1.974 0 1 1 0 3.947 1.974 1.974 0 0 1 0-3.947Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.159 4.75v0a1.945 1.945 0 0 0-2.668-.72c-.812.472-1.827-.118-1.827-1.062A1.96 1.96 0 0 0 7.71 1v0a1.96 1.96 0 0 0-1.953 1.968c0 .944-1.015 1.534-1.826 1.062a1.946 1.946 0 0 0-2.67.72 1.975 1.975 0 0 0 .716 2.687 1.232 1.232 0 0 1 0 2.126 1.975 1.975 0 0 0-.715 2.687 1.946 1.946 0 0 0 2.668.72h0c.812-.472 1.827.118 1.827 1.063v0A1.96 1.96 0 0 0 7.71 16v0a1.96 1.96 0 0 0 1.954-1.967v0c0-.945 1.015-1.535 1.827-1.063.934.543 2.128.221 2.668-.72.54-.94.22-2.144-.715-2.687h0a1.232 1.232 0 0 1 0-2.126 1.975 1.975 0 0 0 .715-2.687Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
