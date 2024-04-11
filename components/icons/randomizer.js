import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="m12.362 11.703 9.306-5.869a4.074 4.074 0 0 0-1.393-1.328l-6.86-3.96a4.078 4.078 0 0 0-4.08 0l-6.86 3.96a4.074 4.074 0 0 0-1.26 1.136l9.627 6.061a1.431 1.431 0 0 0 1.52 0ZM9.776 5.367a1.599 1.599 0 1 1 1.6 1.598h-.001a1.599 1.599 0 0 1-1.599-1.598ZM11.284 12.502a2.02 2.02 0 0 1-.766-.285L.896 6.159a4.077 4.077 0 0 0-.46 1.881v7.921a4.08 4.08 0 0 0 2.04 3.533l6.86 3.96c.593.343 1.263.531 1.949.546V12.503Zm-8.367 5.602c-.64-.471-1.142-1.523-1.142-2.358 0-.834.504-1.175 1.144-.746.66.44 1.209 1.521 1.209 2.4s-.552 1.191-1.211.704Zm4.903-2.325c-.64-.473-1.144-1.524-1.144-2.358 0-.834.505-1.175 1.144-.746.66.44 1.209 1.521 1.209 2.402 0 .882-.55 1.19-1.209.702ZM21.954 6.368l-9.269 5.85a2.02 2.02 0 0 1-.793.29v11.46a4.07 4.07 0 0 0 1.522-.513l6.86-3.96a4.08 4.08 0 0 0 2.04-3.534v-7.92c0-.578-.122-1.148-.36-1.673Zm-7.428 15.268c-.64.427-1.144.088-1.144-.746 0-.835.505-1.885 1.144-2.358.66-.49 1.209-.18 1.209.701 0 .882-.55 1.963-1.209 2.403Zm0-5.811c-.64.427-1.144.088-1.144-.746 0-.835.505-1.885 1.144-2.358.66-.488 1.208-.18 1.208.7 0 .879-.549 1.964-1.208 2.404Zm5.364 2.34c-.64.427-1.144.088-1.144-.746 0-.835.504-1.885 1.144-2.358.66-.487 1.208-.18 1.208.702 0 .881-.549 1.962-1.208 2.402Zm0-5.81c-.64.429-1.144.086-1.144-.747 0-.832.504-1.884 1.144-2.357.66-.49 1.208-.18 1.208.701s-.549 1.962-1.208 2.402Z"
      fill={`${props.isActive ? "#FF8036" : "#6B7280"}`}
    />
  </Svg>
);
export default SvgComponent;