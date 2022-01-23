import * as React from "react"

function PinIcon(props) {
  return (
    <svg className={`pin-icon ${props.className}`} width={18.496} height={24.282} viewBox="0 0 18.496 24.282" {...props}>
      <defs>
        <style>{".prefix__a{fill:#989898}"}</style>
      </defs>
      <path
        className="prefix__a"
        d="M9.248 0A9.259 9.259 0 000 9.248c0 3.292 1 4.612 5.814 10.956.835 1.1 1.782 2.349 2.865 3.794a.711.711 0 001.138 0c1.077-1.437 2.02-2.68 2.851-3.777 4.824-6.363 5.832-7.687 5.832-10.973A9.259 9.259 0 009.248 0zm2.287 19.361c-.683.9-1.441 1.9-2.287 3.025-.852-1.132-1.614-2.137-2.3-3.042-4.681-6.171-5.524-7.283-5.524-10.1a7.825 7.825 0 0115.651 0c-.002 2.812-.847 3.927-5.54 10.117z"
      />
      <path
        className="prefix__a"
        d="M9.248 4.268a4.98 4.98 0 104.98 4.98 4.985 4.985 0 00-4.98-4.98zm0 8.537a3.557 3.557 0 113.557-3.557 3.561 3.561 0 01-3.557 3.557z"
      />
    </svg>
  )
}

export default PinIcon;