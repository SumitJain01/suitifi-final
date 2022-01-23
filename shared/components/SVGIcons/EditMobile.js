import * as React from "react";

function EditMobile(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15.373 15.373" {...props}>
      <g data-name="Group 9111">
        <g data-name="Group 9110">
          <path
            data-name="Path 13489"
            d="M12.628 7.686a.549.549 0 00-.549.549v5.49a.549.549 0 01-.549.549H1.647a.549.549 0 01-.549-.549V2.745a.549.549 0 01.549-.549h6.589a.55.55 0 100-1.1H1.647A1.647 1.647 0 000 2.745v10.981a1.647 1.647 0 001.647 1.647h9.883a1.647 1.647 0 001.647-1.647v-5.49a.549.549 0 00-.549-.55z"
            fill="#00afef"
          />
        </g>
      </g>
      <g data-name="Group 9113">
        <g data-name="Group 9112">
          <path
            data-name="Path 13490"
            d="M14.757.615a2.1 2.1 0 00-2.973 0L4.552 7.846a.555.555 0 00-.132.215l-1.1 3.294a.549.549 0 00.52.723.558.558 0 00.173-.028l3.294-1.1a.549.549 0 00.215-.133l7.232-7.232a2.1 2.1 0 00.003-2.97zm-.777 2.2L6.843 9.952l-2.132.712.71-2.13 7.14-7.137a1.003 1.003 0 111.42 1.418z"
            fill="#00afef"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoEditMobile = React.memo(EditMobile);
export default MemoEditMobile;
