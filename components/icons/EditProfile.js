import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FE6F32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 12.36c-3.506 0-6.5.53-6.5 2.654 0 2.123 2.975 2.672 6.5 2.672 3.507 0 6.5-.531 6.5-2.653 0-2.123-2.974-2.673-6.5-2.673ZM7.5 9.333a4.166 4.166 0 1 0-4.166-4.167A4.153 4.153 0 0 0 7.47 9.333h.03Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
