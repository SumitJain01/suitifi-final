// import makeClevertap from 'lib/makeClevertap';
// const clevertap = makeClevertap();

// function showNotification() {
//   if (process.browser && window) {
//     if (!("Notification" in window)) {
//       console.log("Browser doesn't support push notifications!");
//     } else if (Notification.permission !== "denied") {
//       Notification.requestPermission().then(function (permission) {
//         if (Notification.permission === "granted") {
//           clevertap.event.push("Permission Granted");
//         }
//         else if (Notification.permission === "denied") {
//           clevertap.event.push("Permission Denied");
//         }
//       });
//     }
//   }
// }

// export default function clevertapWebPush( data ){
// const popUpData = data?.items[0]?.fields;
//   let bT, okBtn, okButtonColor, rjctBtn, ti;
//   if(!ti || ti === ""){
//     ti = popUpData?.clevertapPopupText1;
//   }
//   if(!bT || bT === ""){
//     bT = popUpData?.clevertapPopupText2;
//   }
//   if(!okBtn || okBtn === ""){
//     okBtn = "ALLOW"
//   }
//   if(!rjctBtn || rjctBtn === ""){
//     rjctBtn = "LATER"
//   }
//   if(!okButtonColor || okButtonColor){
//     okButtonColor = "#F28046"
//   }
  
//   setTimeout(() => {
//     clevertap.notifications.push({
//       titleText: ti,
//       bodyText: bT,
//       okButtonText: okBtn,
//       rejectButtonText: rjctBtn,
//       okButtonColor: okButtonColor,
//       hidePoweredByCT: true,
//       serviceWorkerPath: './service-worker.js',
//       okCallback: showNotification,
//     });
//   }, 5000);
// }