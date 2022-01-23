import React from 'react';
import { preConnectLinks } from 'utils/constants';

export default function PreConnect() {
      const preConnectTags = [];
      preConnectLinks.map((item)=>{
        preConnectTags.push(<link rel="preconnect" href={item} />)
      })
      return (
        <>
        {preConnectTags}
        </>
      )
}
