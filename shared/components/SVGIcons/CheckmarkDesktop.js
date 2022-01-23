import * as React from "react";

function CheckmarkDesktop(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 50 45.832" {...props}>
      <g fill="#92c935">
        <path
          data-name="Path 13496"
          d="M22.916 45.832A22.916 22.916 0 1135.278 3.623a1.563 1.563 0 01-1.689 2.631 19.788 19.788 0 109.118 16.662c0-.652-.031-1.3-.092-1.933a1.563 1.563 0 113.11-.3q.106 1.1.106 2.235a22.943 22.943 0 01-22.915 22.914zm0 0"
        />
        <path
          data-name="Path 13497"
          d="M25.52 28.124a1.551 1.551 0 01-1.1-.458l-9.376-9.375a1.563 1.563 0 012.21-2.211l8.271 8.271 21.809-21.81a1.563 1.563 0 112.211 2.21L26.626 27.668a1.565 1.565 0 01-1.106.456zm0 0"
        />
      </g>
    </svg>
  );
}

const MemoCheckmarkDesktop = React.memo(CheckmarkDesktop);
export default MemoCheckmarkDesktop;
