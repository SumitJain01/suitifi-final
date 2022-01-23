// Not Needed
// import detectMobile from 'utils/helpers/mobileDetect';


// export default function helpDeskHandler() {
//   const isMobile = detectMobile();
//   if (!document.body.contains(document.querySelector(".faq-bot-button"))) {

//     const script1 = document.createElement('script');
//     const script2 = document.createElement('script');
//     const Div = document.createElement('div');
//     const Link = document.createElement('link');
//     const freshChat = document.createElement('script');
//     const faqPrime = document.createElement('script');

//     Div.id = 'faq-bot-codestart-id';
//     Div.className = 'faq-bot-codestart';
//     Link.href = 'https://myfaqprime.appspot.com/bot/bot.css';
//     Link.rel = 'stylesheet';
//     Link.type = 'text/css';
//     script1.src = 'https://myfaqprime.appspot.com/bot/bot.js';
//     script2.innerText = 'var faqbotKey = "thedermaco"';
//     faqPrime.type = 'text/javascript'
//     faqPrime.innerHTML = `setInterval(function(){-1<window.location.href.indexOf("/checkout")?document.getElementById("faq-bot-codestart-id").style.display="none":document.getElementById("faq-bot-codestart-id").style.display="block"},500);`
//     freshChat.innerHTML = `
//       function initFreshChat() {
//         window.fcWidget.init({
//           token: "5f05fe29-0e1f-4e24-b7a4-8bf0dda76af9",
//           host: "https://wchat.in.freshchat.com"
//         });
//       }
//       function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.in.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
//     `
//     document.body.append(Div);
//     document.body.append(script2);
//     document.body.append(script1);
//     document.body.append(Link);
//     document.body.append(freshChat);
//     document.body.append(faqPrime);

//     let faqExistCondition = setInterval(() => {
//       if (document.querySelector(".faq-bot-button")) {
//         clearInterval(faqExistCondition);
//       }
//     }, 500);
//   }
//   // else if (isMobile) {
//   //   document.querySelector(".faq-bot-button").click();
//   // }
// }
