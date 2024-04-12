import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#FEFEFE"
      d="M.173 16.523c.196.297.524.477.877.477H16.8c.42 0 .8-.253.964-.644l3.15-7.437a1.072 1.072 0 0 0-.087-1.005 1.052 1.052 0 0 0-.878-.476H18.9V4.25c0-1.172-.942-2.125-2.1-2.125H9.812L7.128 0H2.1C.942 0 0 .953 0 2.125v13.813h.007c-.002.207.056.41.166.585ZM16.8 4.25v3.188H4.2c-.42 0-.8.252-.964.643L2.1 10.762V4.25h14.7Z"
    />
  </Svg>
)
export default SvgComponent