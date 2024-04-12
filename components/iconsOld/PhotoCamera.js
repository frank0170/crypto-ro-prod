import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#FEFEFE"
      d="M18.75 3h-2.694L13.236.293A1.075 1.075 0 0 0 12.5 0H8.333a1.075 1.075 0 0 0-.736.293L4.777 3H2.083C.934 3 0 3.897 0 5v11c0 1.103.934 2 2.083 2H18.75c1.149 0 2.083-.897 2.083-2V5c0-1.103-.934-2-2.083-2Zm-8.333 12c-2.823 0-5.209-2.29-5.209-5s2.386-5 5.209-5c2.823 0 5.208 2.29 5.208 5s-2.385 5-5.208 5Z"
    />
  </Svg>
)
export default SvgComponent
