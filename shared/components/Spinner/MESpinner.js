import React from 'react';

const MESpinner = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <g id="Group_10601" data-name="Group 10601" transform="translate(-46 -69)">
      <linearGradient id="linear-gradient">
        <stop offset="0%" stopColor="#ffffff" fillOpacity="0" />
        <stop offset="100%" stopColor="rgb(0, 175, 239)" fillOpacity="1" />
      </linearGradient>
      
      <g id="circle" transform="translate(46 69)" fillRule="evenodd">
        <g id="path_favicon" fill="url(#linear-gradient)" stroke="url(#linear-gradient)" 
        strokeWidth="1.6">
          <g>
            <circle cx="12" cy="12" r="11.2" fill="none" />
            <animateTransform 
              attributeName="transform"
              type="rotate"
              from="0 12 12"
              to="360 12 12"
              begin="-0.2s"
              dur="0.85s"
              repeatCount="indefinite"
            />
          </g>
        </g>
      </g>
      <g>
        {/* <path id="Path_666" data-name="Path 666"
        d="M27.592,52.238c-1.169,0-1.436-.519-1.436-1.341V48.446c0-.858-.278-1.172-.915-1.172-.613,0-.822.471-.822,1.136v3.829h-.763c-.892,0-1.366-.3-1.366-1.341V48.385c0-.785-.29-1.111-.869-1.111-.613,0-.857.326-.857,1.148v3.817H19.8c-.984,0-1.436-.5-1.436-1.341V48.566A2.853,2.853,0,0,1,21.457,45.4a2.133,2.133,0,0,1,1.956,1.186A2.511,2.511,0,0,1,25.4,45.4c1.853,0,2.952,1.148,2.952,3.225v3.611Z"
        transform="translate(34.634 32.6)" fill="#00aeef" opacity="0.5" /> */}
      </g>
    </g>
  </svg>
);

export default MESpinner;