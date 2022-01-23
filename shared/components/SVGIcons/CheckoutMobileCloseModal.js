import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" {...props}>
      <path
        d="M7.1 6l4.673-4.673a.778.778 0 00-1.1-1.1L6 4.901 1.327.228a.778.778 0 00-1.1 1.1L4.9 6 .228 10.673a.778.778 0 101.1 1.1L6 7.099l4.673 4.673a.778.778 0 001.1-1.1zm0 0"
        fill="#279989"
      />
    </svg>
  )
}

export default SvgComponent;
