import { window as ssrWindow } from 'ssr-window';

if (!ssrWindow.dataLayer) {
  ssrWindow.dataLayer = [];
  // window.dataLayer.push({
  //   originalLocation: document.location.protocol + '//' +
  //                     document.location.hostname +
  //                     document.location.pathname +
  //                     document.location.search,
  //   isServerless:true,
          
  // });
}

export default ssrWindow.dataLayer;
