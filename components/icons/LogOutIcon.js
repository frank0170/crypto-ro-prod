import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#111214"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 13.188c-.061 1.543-1.347 2.853-3.07 2.811-.401-.01-.897-.15-1.887-.429-2.385-.673-4.455-1.803-4.952-4.335C1 10.769 1 10.245 1 9.198V7.802c0-1.047 0-1.571.091-2.037.497-2.532 2.567-3.662 4.952-4.335.99-.28 1.486-.42 1.887-.429C9.653.959 10.939 2.269 11 3.813"
    />
    <Path
      stroke="#111214"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 8.5H6.833M16 8.5c0-.583-1.662-1.673-2.083-2.083M16 8.5c0 .584-1.662 1.674-2.083 2.084"
    />
  </Svg>
)
export default SvgComponent