import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={44}
    fill="none"
    {...props}
  >
    <Ellipse cx={15.121} cy={43.145} fill="#fff" rx={0.847} ry={0.856} />
    <Ellipse cx={29.516} cy={41.8} fill="#fff" rx={0.242} ry={0.244} />
    <Ellipse cx={2.419} cy={32.511} fill="#fff" rx={1.21} ry={1.222} />
    <Ellipse cx={23.105} cy={22.367} fill="#fff" rx={17.056} ry={17.233} />
    <Ellipse cx={40.04} cy={39.233} fill="#fff" rx={0.605} ry={0.611} />
    <Ellipse cx={41.25} cy={27.012} fill="#fff" rx={0.605} ry={0.611} />
    <Ellipse cx={0.242} cy={18.333} fill="#fff" rx={0.242} ry={0.244} />
    <Path
      fill="#FE6F32"
      d="M26.806 23.907a.677.677 0 0 0-.193.593l.537 3.006a.663.663 0 0 1-.272.66.66.66 0 0 1-.707.05l-2.68-1.412a.679.679 0 0 0-.302-.08h-.164a.49.49 0 0 0-.163.055l-2.68 1.418a.7.7 0 0 1-.429.067.679.679 0 0 1-.538-.777l.538-3.006a.688.688 0 0 0-.193-.599l-2.184-2.138a.681.681 0 0 1 .375-1.149l3.006-.44a.673.673 0 0 0 .532-.373l1.325-2.744a.637.637 0 0 1 .121-.165l.054-.043a.408.408 0 0 1 .098-.08l.066-.024.103-.042h.254a.676.676 0 0 1 .532.366l1.343 2.732c.096.2.285.338.502.372l3.006.44a.688.688 0 0 1 .55.459c.08.245.01.514-.175.69l-2.262 2.164Z"
    />
    <Ellipse cx={43.185} cy={6.722} fill="#fff" rx={1.815} ry={1.833} />
    <Ellipse cx={25.766} cy={1.1} fill="#fff" rx={0.605} ry={0.611} />
    <Ellipse cx={4.839} cy={2.444} fill="#fff" rx={2.419} ry={2.444} />
  </Svg>
)
export default SvgComponent