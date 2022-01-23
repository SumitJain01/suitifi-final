import * as React from "react";

function CheckmarkMobile(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40.984 37.568" {...props}>
      <g fill="#6da523">
        <path
          data-name="Path 13496"
          d="M18.784 37.568a18.784 18.784 0 1110.133-34.6 1.282 1.282 0 01-1.385 2.157 16.22 16.22 0 107.474 13.658c0-.535-.026-1.064-.075-1.585a1.281 1.281 0 112.55-.248q.087.9.087 1.832a18.806 18.806 0 01-18.784 18.786zm0 0"
        />
        <path
          data-name="Path 13497"
          d="M20.914 23.053a1.271 1.271 0 01-.9-.376l-7.684-7.684a1.281 1.281 0 111.812-1.812l6.779 6.779L38.798 2.083a1.283 1.283 0 111.816 1.812L21.825 22.679a1.283 1.283 0 01-.907.374zm0 0"
        />
      </g>
    </svg>
  );
}

const MemoCheckmarkMobile = React.memo(CheckmarkMobile);
export default MemoCheckmarkMobile;
