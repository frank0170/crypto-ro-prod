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
      fill="#6B7280"
      fillRule="evenodd"
      d="M13.161.833c.345 0 .625.28.625.625v.707c1.217.083 2.228.5 2.943 1.216.781.785 1.192 1.912 1.188 3.265v7.602c0 2.777-1.764 4.502-4.601 4.502H6.268c-2.838 0-4.601-1.75-4.601-4.565V6.644c0-2.62 1.572-4.3 4.137-4.48v-.706a.625.625 0 0 1 1.25 0v.69h5.482v-.69c0-.345.28-.625.625-.625Zm3.506 7.42H2.917v5.932c0 2.138 1.19 3.315 3.35 3.315h7.049c2.16 0 3.35-1.155 3.35-3.252V8.253ZM13.5 13.497a.625.625 0 0 1 0 1.25.628.628 0 0 1-.628-.625c0-.345.276-.625.62-.625h.008Zm-3.698 0a.625.625 0 0 1 0 1.25.628.628 0 0 1-.628-.625c0-.345.276-.625.62-.625h.008Zm-3.706 0a.625.625 0 0 1 0 1.25.629.629 0 0 1-.629-.625c0-.345.277-.625.622-.625h.007Zm7.404-3.24a.625.625 0 0 1 0 1.25.628.628 0 0 1-.628-.624c0-.345.276-.625.62-.625h.008Zm-3.698 0a.625.625 0 0 1 0 1.25.628.628 0 0 1-.628-.624c0-.345.276-.625.62-.625h.008Zm-3.706 0a.625.625 0 0 1 0 1.25.629.629 0 0 1-.629-.624c0-.345.277-.625.622-.625h.007ZM12.536 3.4H7.054V4.2a.625.625 0 0 1-1.25 0v-.783c-1.867.157-2.887 1.288-2.887 3.226v.359h13.75v-.36c.003-1.028-.274-1.828-.823-2.378-.482-.484-1.187-.772-2.057-.847v.783a.625.625 0 0 1-1.25 0l-.001-.802Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent