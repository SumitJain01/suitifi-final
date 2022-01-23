import * as React from 'react';

function MailSVG(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15.768 12.5" {...props}>
      <g
        data-name="Icon feather-mail"
        fill="none"
        stroke="#00afef"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          data-name="Path 13282"
          d="M2.134.5h11.5a1.442 1.442 0 011.438 1.438v8.625A1.442 1.442 0 0113.634 12h-11.5a1.442 1.442 0 01-1.438-1.437V1.938A1.442 1.442 0 012.134.5z"
        />
        <path data-name="Path 13283" d="M15.071 1.937L7.884 6.968.696 1.937" />
      </g>
    </svg>
  );
}

const MemoMailSVG = React.memo(MailSVG);
export default MemoMailSVG;
