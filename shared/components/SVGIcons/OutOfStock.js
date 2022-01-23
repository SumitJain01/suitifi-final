import * as React from "react"

function OutOfStock(props) {
    return (
        <svg
            width="100%"
            viewBox="0 0 84 30" {...props}
            preserveAspectRatio="xMidYMid meet"
        >
            <g fill="#fff" stroke="#dbdbdb">
                <path stroke="none" d="M0 0h84v30H0z" />
                <path fill="none" d="M.5.5h83v29H.5z" />
            </g>
            <text
                transform="translate(42 20)"
                fill="red"
                fontSize={12}
                fontFamily="Roboto-Medium,Roboto"
                fontWeight={500}
            >
                <tspan x={-34.318} y={0}>
                    {"Out Of Stock"}
                </tspan>
            </text>
        </svg>
    )
}

export default OutOfStock