import * as React from "react"

function UserProfileIcon(props) {
  return (
    <svg className="user-profile-svg" width={34} height={34} viewBox="0 0 34 34" {...props}>
      <path
        d="M17 0A17 17 0 110 17 17 17 0 0117 0zM4.605 25.537a14.345 14.345 0 0124.789 0 15.05 15.05 0 10-24.789 0z"
        fill="#5c5c5c"
      />
      <path
        d="M17 5.618a5.694 5.694 0 11-5.694 5.694A5.694 5.694 0 0117 5.618z"
        fillRule="evenodd"
        fill="#5c5c5c"
      />
    </svg>
  )
}

export default UserProfileIcon;
