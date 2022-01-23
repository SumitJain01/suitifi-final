import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 45vh;
  text-align: center;
`;

class MEFaqprime extends React.Component {

  componentDidMount() {
    if (!document.body.contains(document.querySelector(".faq-bot-button"))) {
      const script1 = document.createElement('script');
      const script2 = document.createElement('script');
      const Div = document.createElement('div');
      const Link = document.createElement('link');
      const freshChat = document.createElement('script');
      const meta1 = document.createElement("meta");
      const meta2 = document.createElement("meta");

      meta1.content = "noindex";
      meta2.content = "nofollow";
      Div.id = 'faq-bot-codestart-id';
      Div.className = 'faq-bot-codestart';
      Link.href = 'https://myfaqprime.appspot.com/bot/bot.css';
      Link.rel = 'stylesheet';
      Link.type = 'text/css';
      script1.src = 'https://myfaqprime.appspot.com/bot/bot.js';
      script2.innerText = 'var faqbotKey = "mamaearth"';
      freshChat.innerHTML = `
        function initFreshChat() {
          window.fcWidget.init({
            token: "cebbf0ec-9e2a-4db0-a881-ab9eeec1c3bd",
            host: "https://wchat.in.freshchat.com",
            "config": {
              "disableNotifications": true
            }
          });
        }
        (function(d, id) {
          var fcJS;
          if (d.getElementById(id)) {
            initFreshChat();
            return;
          }
          fcJS = d.createElement('script');
          fcJS.id = id;
          fcJS.async = true;
          fcJS.src = 'https://wchat.freshchat.com/js/widget.js';
          fcJS.onload = initFreshChat;
          d.head.appendChild(fcJS);
        }(document, 'freshchat-js-sdk'));
      `
      document.head.appendChild(meta1);
      document.head.appendChild(meta2);
      document.body.append(Div);
      document.body.append(script2);
      document.body.append(script1);
      document.body.append(Link);
      document.body.append(freshChat);

      let faqExistCondition = setInterval(() => {
        if (document.querySelector(".faq-bot-button")) {
          clearInterval(faqExistCondition);
          document.querySelector(".faq-bot-button").click();

          const faqPrimeContainer = document.querySelector(".faq-bot-container");
          faqPrimeContainer.style.height = '100vh';
          faqPrimeContainer.style.width = '100vw';
          faqPrimeContainer.style.right = '0';
          faqPrimeContainer.style.bottom = '0';
          faqPrimeContainer.style.maxWidth = 'none';

          const faqPrimeTopBanner = document.querySelector(".faq-bot-top-banner");
          faqPrimeTopBanner.style.padding = '0';
          faqPrimeTopBanner.style.height = '15vh';
          faqPrimeTopBanner.style.display = 'flex';
          faqPrimeTopBanner.style.justifyContent = 'space-between';
          faqPrimeTopBanner.style.alignItems = 'flex-end';

          const faqPrimeIFrame = document.querySelector(".faq-bot-iframe");
          faqPrimeIFrame.style.maxWidth = 'none';
          faqPrimeIFrame.style.minHeight = 'none';
          faqPrimeIFrame.style.maxHeight = 'none';
          faqPrimeIFrame.style.height = '77vh';

          const faqPrimeBottomBanner = document.querySelector(".faq-bot-bottom-banner");
          faqPrimeBottomBanner.style.maxWidth = 'none';
          faqPrimeBottomBanner.style.height = '8vh';
          faqPrimeBottomBanner.style.background = 'none';
        }
      }, 500);
    } else {
      document.querySelector(".faq-bot-button").click();
    }
  }

  render() {
    return (
      <Wrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
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
              <path id="Path_666" data-name="Path 666"
                d="M27.592,52.238c-1.169,0-1.436-.519-1.436-1.341V48.446c0-.858-.278-1.172-.915-1.172-.613,0-.822.471-.822,1.136v3.829h-.763c-.892,0-1.366-.3-1.366-1.341V48.385c0-.785-.29-1.111-.869-1.111-.613,0-.857.326-.857,1.148v3.817H19.8c-.984,0-1.436-.5-1.436-1.341V48.566A2.853,2.853,0,0,1,21.457,45.4a2.133,2.133,0,0,1,1.956,1.186A2.511,2.511,0,0,1,25.4,45.4c1.853,0,2.952,1.148,2.952,3.225v3.611Z"
                transform="translate(34.634 32.6)" fill="#00aeef" opacity="0.5" 
              />
            </g>
          </g>
        </svg>
      </Wrapper>
    );
  }
}

export default MEFaqprime;