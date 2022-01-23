import { css } from 'styled-components';

export default css`

/* Version: 3.8.1 */
img {
  max-width: 100%;
}
.img-wrapper {
    display: inline-block
}

.svg-icon svg {
    width: inherit !important;
    height: inherit !important
}

svg:not(:root) {
    overflow: hidden
}

i.fa:before {
    margin-right: 1px;
    margin-left: 1px
}

.woodmart-custom-icon {
    min-width: 100%;
    max-width: 38px
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.text-left {
    text-align: left
}

.text-larger {
    font-size: 110%
}

.title-uppercase {
    text-transform: uppercase
}

.color-scheme-light {
    color: rgba(255,255,255,.8)
}

.color-scheme-light a {
    color: rgba(255,255,255,.9)
}

.color-scheme-light a:hover {
    color: #fff
}

.color-scheme-light h1,.color-scheme-light h2,.color-scheme-light h3,.color-scheme-light h4,.color-scheme-light h5,.color-scheme-light h6,.color-scheme-light .title,.color-scheme-light .widgettitle,.color-scheme-light .widget-title,.color-scheme-light label,.color-scheme-light legend {
    color: #fff
}

.color-scheme-light .inline-list-with-border li:not(:last-child) {
    border-color: rgba(255,255,255,.15)
}

.color-scheme-dark {
    color: #777
}

.color-scheme-dark a {
    color: #3f3f3f
}

.color-scheme-dark h1,.color-scheme-dark h2,.color-scheme-dark h3,.color-scheme-dark h4,.color-scheme-dark h5,.color-scheme-dark h6,.color-scheme-dark .title,.color-scheme-dark .widgettitle,.color-scheme-dark .widget-title,.color-scheme-dark label,.color-scheme-dark legend {
    color: #2d2a2a
}

.hover-color-scheme-dark:hover {
    color: #777
}

.hover-color-scheme-dark:hover h1,.hover-color-scheme-dark:hover h2,.hover-color-scheme-dark:hover h3,.hover-color-scheme-dark:hover h4,.hover-color-scheme-dark:hover h5,.hover-color-scheme-dark:hover h6 {
    color: #2d2a2a
}

.hover-color-scheme-light:hover {
    color: rgba(255,255,255,.8)
}

.hover-color-scheme-light:hover h1,.hover-color-scheme-light:hover h2,.hover-color-scheme-light:hover h3,.hover-color-scheme-light:hover h4,.hover-color-scheme-light:hover h5,.hover-color-scheme-light:hover h6 {
    color: #fff
}

.color-black {
    color: #000
}

.color-white {
    color: #fff
}

.main-nav-style {
    font-weight: 600;
    font-size: 13px
}

.add-border {
    border-bottom: 1px solid
}

.border-width-1 {
    border-width: 1px
}

.border-width-2 {
    border-width: 2px
}

.border-width-3 {
    border-width: 3px
}

.border-width-4 {
    border-width: 4px
}

.position-relative {
    position: relative
}

.z-index-10 {
    z-index: 10
}

.z-index-h {
    z-index: 35
}

.z-index-100 {
    z-index: 100
}

.z-index-1000 {
    z-index: 1000
}

.clear {
    clear: both;
    width: 100%
}

.cursor-pointer {
    cursor: pointer
}

.parallax-bg {
    background-attachment: fixed !important
}

.opacity-video-bg .vc_video-bg {
    opacity: .6
}

.box-shadow-style-1 {
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.box-shadow-style-2 {
    -webkit-box-shadow: 0 10px 20px -9px rgba(0,0,0,.5);
    box-shadow: 0 10px 20px -9px rgba(0,0,0,.5)
}

.box-shadow-style-3 {
    -webkit-box-shadow: 0 10px 15px 0 rgba(0,0,0,.1);
    box-shadow: 0 10px 15px 0 rgba(0,0,0,.1)
}

.woodmart-tltp {
    position: relative
}

.woodmart-tltp .woodmart-tooltip-label {
    position: absolute;
    z-index: 2;
    visibility: hidden;
    padding: 0 15px;
    height: 34px;
    border-radius: 0;
    background-color: #000;
    color: #fff;
    text-align: center;
    text-transform: capitalize;
    white-space: nowrap;
    letter-spacing: .3px;
    font-weight: normal;
    font-size: 12px;
    line-height: 34px;
    opacity: 0;
    pointer-events: none
}

.woodmart-tltp .woodmart-tooltip-label:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent
}

.woodmart-tltp:hover .woodmart-tooltip-label {
    visibility: visible;
    opacity: 1;
    -webkit-animation: wd-fadeInTooltip .3s ease;
    animation: wd-fadeInTooltip .3s ease
}

.woodmart-tltp .woodmart-tooltip-label {
    top: auto;
    right: auto;
    bottom: 100%;
    left: 50%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 8px;
    margin-left: 0
}

.woodmart-tltp .woodmart-tooltip-label:before {
    top: 100%;
    right: auto;
    bottom: auto;
    left: 50%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-color: transparent;
    border-top-color: #000
}

.visible-xs,.visible-sm,.visible-md,.visible-lg {
    display: none !important
}

.reset-mb-10 h1,.reset-mb-10 h2,.reset-mb-10 h3,.reset-mb-10 h4,.reset-mb-10 h5,.reset-mb-10 h6,.reset-mb-10 p,.reset-mb-10 ol,.reset-mb-10 ul {
    margin-bottom: 10px
}

.reset-mb-10 > *:last-child {
    margin-bottom: 0
}

.woodmart-font-weight-100 {
    font-weight: 100 !important
}

.woodmart-font-weight-200 {
    font-weight: 200 !important
}

.woodmart-font-weight-300 {
    font-weight: 300 !important
}

.woodmart-font-weight-400 {
    font-weight: 400 !important
}

.woodmart-font-weight-500 {
    font-weight: 500 !important
}

.woodmart-font-weight-600 {
    font-weight: 600 !important
}

.woodmart-font-weight-700 {
    font-weight: 700 !important
}

.woodmart-font-weight-800 {
    font-weight: 800 !important
}

.woodmart-font-weight-900 {
    font-weight: 900 !important
}

.woodmart-spacing-0 {
    margin-right: 0px;
    margin-left: 0px
}

.woodmart-spacing-0 > div,.woodmart-spacing-0 > article {
    margin-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px
}

.woodmart-spacing-2 {
    margin-right: -1px;
    margin-left: -1px
}

.woodmart-spacing-2 > div,.woodmart-spacing-2 > article {
    margin-bottom: 2px;
    padding-right: 1px;
    padding-left: 1px
}

.woodmart-spacing-6 {
    margin-right: -3px;
    margin-left: -3px
}

.woodmart-spacing-6 > div,.woodmart-spacing-6 > article {
    margin-bottom: 6px;
    padding-right: 3px;
    padding-left: 3px
}

.woodmart-spacing-10 {
    margin-right: -5px;
    margin-left: -5px
}

.woodmart-spacing-10 > div,.woodmart-spacing-10 > article {
    margin-bottom: 10px;
    padding-right: 5px;
    padding-left: 5px
}

.woodmart-spacing-20 {
    margin-right: -10px;
    margin-left: -10px
}

.woodmart-spacing-20 > div,.woodmart-spacing-20 > article {
    margin-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px
}

.woodmart-spacing-30 {
    margin-right: -15px;
    margin-left: -15px
}

.woodmart-spacing-30 > div,.woodmart-spacing-30 > article {
    margin-bottom: 30px;
    padding-right: 15px;
    padding-left: 15px
}

.woodmart-columns-1 > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%
}

.woodmart-columns-2 > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    width: 50%
}

.woodmart-columns-3 > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.3333333333%;
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
    width: 33.3333333333%
}

.woodmart-columns-4 > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    width: 25%
}

.woodmart-columns-5 > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
    width: 20%
}

.woodmart-columns-6 > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.6666666667%;
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
    width: 16.6666666667%
}

.alignleft {
    float: left;
    margin-top: 3px;
    margin-right: 25px;
    margin-bottom: 20px
}

.alignright {
    float: right;
    margin-top: 3px;
    margin-bottom: 20px;
    margin-left: 25px
}

.aligncenter {
    display: block;
    clear: both;
    margin: 0 auto;
    margin-bottom: 20px
}

.wp-caption {
    margin-bottom: 20px;
    padding: 0;
    max-width: 100%;
    border: none;
    background: transparent
}

.wp-caption.alignleft {
    margin-top: 3px;
    margin-right: 25px
}

.wp-caption.alignright {
    margin-top: 3px;
    margin-left: 25px
}

.wp-caption.aligncenter {
    margin: 0 auto;
    margin-top: 3px
}

.wp-caption .wp-caption-text,.wp-caption-dd {
    padding: 5px 10px 5px 0;
    font-style: italic;
    line-height: 1.6;
    opacity: .8
}

.gallery-caption,.bypostauthor {
    content: initial
}

body .wp-playlist {
    border: none;
    text-align: left
}

body .wp-playlist-item:not(:last-child) {
    margin-bottom: 10px;
    padding-bottom: 10px
}

@-webkit-keyframes wd-rotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes wd-rotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-webkit-keyframes wd-fadeIn {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes wd-fadeIn {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-webkit-keyframes wd-fadeOut {
    from {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes wd-fadeOut {
    from {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@-webkit-keyframes wd-SemiFadeOut {
    from {
        opacity: 1
    }

    to {
        opacity: .6
    }
}

@keyframes wd-SemiFadeOut {
    from {
        opacity: 1
    }

    to {
        opacity: .6
    }
}

@-webkit-keyframes wd-fadeInLeft {
    from {
        -webkit-transform: translate3d(-50px, 0, 0);
        transform: translate3d(-50px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInLeft {
    from {
        -webkit-transform: translate3d(-50px, 0, 0);
        transform: translate3d(-50px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeInLeftShort {
    from {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInLeftShort {
    from {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeOutLeft {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(-50px, 0, 0);
        transform: translate3d(-50px, 0, 0)
    }
}

@keyframes wd-fadeOutLeft {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(-50px, 0, 0);
        transform: translate3d(-50px, 0, 0)
    }
}

@-webkit-keyframes wd-fadeOutLeftShort {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }
}

@keyframes wd-fadeOutLeftShort {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0)
    }
}

@-webkit-keyframes wd-fadeInRight {
    from {
        -webkit-transform: translate3d(50px, 0, 0);
        transform: translate3d(50px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInRight {
    from {
        -webkit-transform: translate3d(50px, 0, 0);
        transform: translate3d(50px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeInRightShort {
    from {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInRightShort {
    from {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeOutRight {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(50px, 0, 0);
        transform: translate3d(50px, 0, 0)
    }
}

@keyframes wd-fadeOutRight {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(50px, 0, 0);
        transform: translate3d(50px, 0, 0)
    }
}

@-webkit-keyframes wd-fadeInBottomShort {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInBottomShort {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeInUpBig {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInUpBig {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeOutDownBig {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
}

@keyframes wd-fadeOutDownBig {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
}

@-webkit-keyframes wd-fadeInDownBig {
    from {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-fadeInDownBig {
    from {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-fadeOutUpBig {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

@keyframes wd-fadeOutUpBig {
    from {
        -webkit-transform: none;
        transform: none
    }

    to {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

@-webkit-keyframes wd-ShakePrev {
    25% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0)
    }

    50% {
        -webkit-transform: translate3d(3px, 0, 0);
        transform: translate3d(3px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(-3px, 0, 0);
        transform: translate3d(-3px, 0, 0)
    }
}

@keyframes wd-ShakePrev {
    25% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0)
    }

    50% {
        -webkit-transform: translate3d(3px, 0, 0);
        transform: translate3d(3px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(-3px, 0, 0);
        transform: translate3d(-3px, 0, 0)
    }
}

@-webkit-keyframes wd-ShakeNext {
    25% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0)
    }

    50% {
        -webkit-transform: translate3d(-3px, 0, 0);
        transform: translate3d(-3px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(3px, 0, 0);
        transform: translate3d(3px, 0, 0)
    }
}

@keyframes wd-ShakeNext {
    25% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0)
    }

    50% {
        -webkit-transform: translate3d(-3px, 0, 0);
        transform: translate3d(-3px, 0, 0)
    }

    75% {
        -webkit-transform: translate3d(3px, 0, 0);
        transform: translate3d(3px, 0, 0)
    }
}

@-webkit-keyframes wd-FadeInLoader {
    from {
        opacity: 0
    }

    to {
        opacity: .8
    }
}

@keyframes wd-FadeInLoader {
    from {
        opacity: 0
    }

    to {
        opacity: .8
    }
}

@-webkit-keyframes wd-fadeInTooltip {
    from {
        opacity: 0
    }

    to {
        opacity: .9
    }
}

@keyframes wd-fadeInTooltip {
    from {
        opacity: 0
    }

    to {
        opacity: .9
    }
}

@-webkit-keyframes wd-shopSlideFromBottom {
    from {
        -webkit-transform: translate3d(0, 30px, 0);
        transform: translate3d(0, 30px, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-shopSlideFromBottom {
    from {
        -webkit-transform: translate3d(0, 30px, 0);
        transform: translate3d(0, 30px, 0)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-SlideFromTop {
    from {
        -webkit-transform: translateY(-150px);
        transform: translateY(-150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-SlideFromTop {
    from {
        -webkit-transform: translateY(-150px);
        transform: translateY(-150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-SlideFromBottom {
    from {
        -webkit-transform: translateY(150px);
        transform: translateY(150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-SlideFromBottom {
    from {
        -webkit-transform: translateY(150px);
        transform: translateY(150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-SlideFromLeft {
    from {
        -webkit-transform: translateX(-150px);
        transform: translateX(-150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-SlideFromLeft {
    from {
        -webkit-transform: translateX(-150px);
        transform: translateX(-150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-SlideFromRight {
    from {
        -webkit-transform: translateX(150px);
        transform: translateX(150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-SlideFromRight {
    from {
        -webkit-transform: translateX(150px);
        transform: translateX(150px)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-RightFlipY {
    from {
        -webkit-transform: translateX(100px) rotate3d(0, 1, 0, 90deg) scale(0.6);
        transform: translateX(100px) rotate3d(0, 1, 0, 90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1)
    }
}

@keyframes wd-RightFlipY {
    from {
        -webkit-transform: translateX(100px) rotate3d(0, 1, 0, 90deg) scale(0.6);
        transform: translateX(100px) rotate3d(0, 1, 0, 90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1)
    }
}

@-webkit-keyframes wd-LeftFlipY {
    from {
        -webkit-transform: translateX(-100px) rotate3d(0, 1, 0, -90deg) scale(0.6);
        transform: translateX(-100px) rotate3d(0, 1, 0, -90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1)
    }
}

@keyframes wd-LeftFlipY {
    from {
        -webkit-transform: translateX(-100px) rotate3d(0, 1, 0, -90deg) scale(0.6);
        transform: translateX(-100px) rotate3d(0, 1, 0, -90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0px) rotate3d(0, 1, 0, 0deg) scale(1)
    }
}

@-webkit-keyframes wd-TopFlipX {
    from {
        -webkit-transform: translateY(-100px) rotate3d(1, 0, 0, 90deg) scale(0.6);
        transform: translateY(-100px) rotate3d(1, 0, 0, 90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1)
    }
}

@keyframes wd-TopFlipX {
    from {
        -webkit-transform: translateY(-100px) rotate3d(1, 0, 0, 90deg) scale(0.6);
        transform: translateY(-100px) rotate3d(1, 0, 0, 90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1)
    }
}

@-webkit-keyframes wd-BottomFlipX {
    from {
        -webkit-transform: translateY(100px) rotate3d(1, 0, 0, 90deg) scale(0.6);
        transform: translateY(100px) rotate3d(1, 0, 0, 90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1)
    }
}

@keyframes wd-BottomFlipX {
    from {
        -webkit-transform: translateY(100px) rotate3d(1, 0, 0, 90deg) scale(0.6);
        transform: translateY(100px) rotate3d(1, 0, 0, 90deg) scale(0.6)
    }

    to {
        -webkit-transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1);
        transform: perspective(1000px) translateY(0) rotate3d(1, 0, 0, 0deg) scale(1)
    }
}

@-webkit-keyframes wd-ZoomIn {
    from {
        -webkit-transform: scale(0.7);
        transform: scale(0.7)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-ZoomIn {
    from {
        -webkit-transform: scale(0.7);
        transform: scale(0.7)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@-webkit-keyframes wd-RotateZ {
    from {
        -webkit-transform: matrix3d(0.70592, 0.02465, 0.37557, -0.00062, -0.06052, 0.79532, 0.06156, -0.0001, -0.46435, -0.10342, 0.87958, -0.00146, -21.42566, 4.13698, 4.81749, 0.99197085);
        transform: matrix3d(0.70592, 0.02465, 0.37557, -0.00062, -0.06052, 0.79532, 0.06156, -0.0001, -0.46435, -0.10342, 0.87958, -0.00146, -21.42566, 4.13698, 4.81749, 0.99197085)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

@keyframes wd-RotateZ {
    from {
        -webkit-transform: matrix3d(0.70592, 0.02465, 0.37557, -0.00062, -0.06052, 0.79532, 0.06156, -0.0001, -0.46435, -0.10342, 0.87958, -0.00146, -21.42566, 4.13698, 4.81749, 0.99197085);
        transform: matrix3d(0.70592, 0.02465, 0.37557, -0.00062, -0.06052, 0.79532, 0.06156, -0.0001, -0.46435, -0.10342, 0.87958, -0.00146, -21.42566, 4.13698, 4.81749, 0.99197085)
    }

    to {
        -webkit-transform: none;
        transform: none
    }
}

.website-wrapper {
    position: relative;
    overflow: hidden;
    background-color: #fff
}

.main-page-wrapper {
    margin-top: -40px;
    padding-top: 40px;
    background-color: #fff
}

.site-content {
    margin-bottom: 40px
}

.sidebar-container {
    margin-bottom: 40px
}

.sidebar-container .widget-heading {
    display: none
}

.footer-sidebar {
    padding-top: 40px;
    padding-bottom: 10px
}

.woodmart-sticky-sidebar-opener {
    color: #333
}

.woodmart-sticky-sidebar-opener:not(.sticky-toolbar) {
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 350;
    display: none;
    width: 50px;
    height: 50px;
    background-color: rgba(255,255,255,.9);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.17);
    box-shadow: 0 0 5px rgba(0,0,0,.17);
    text-align: center;
    font-size: 0;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px
}

.woodmart-sticky-sidebar-opener:after {
    display: inline-block;
    font-size: 16px;
    line-height: 50px;
    content: "\f115";
    font-family: "woodmart-font"
}

.woodmart-sticky-sidebar-opener:not(.shop-sidebar-opener):after {
    font-size: 20px;
    content: "\f10c";
    font-family: "woodmart-font"
}

.woodmart-sticky-sidebar-opener:hover,.woodmart-sticky-sidebar-opener:focus {
    color: #777
}

.whb-header {
    margin-bottom: 40px
}

.whb-flex-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.whb-column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.whb-col-left,.whb-mobile-left {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-left: -10px
}

.whb-col-right,.whb-mobile-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-right: -10px
}

.whb-col-mobile {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: -10px;
    margin-left: -10px
}

.whb-flex-flex-middle .whb-col-center {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0
}

.whb-flex-equal-sides .whb-col-left,.whb-flex-equal-sides .whb-col-right {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0
}

.whb-general-header .whb-mobile-left,.whb-general-header .whb-mobile-right {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0
}

.whb-empty-column + .whb-mobile-right {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-header-overcontent .page-title {
    margin-top: 0
}

.whb-overcontent {
    min-height: 100%
}

.whb-overcontent .whb-main-header {
    position: absolute
}

body:not(.single-product) .whb-overcontent,.whb-overcontent.whb-custom-header {
    margin-bottom: 0;
    padding-top: 0 !important
}

.whb-with-shadow {
    -webkit-box-shadow: 0 1px 8px rgba(0,0,0,.1);
    box-shadow: 0 1px 8px rgba(0,0,0,.1)
}

.whb-main-header {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    z-index: 390;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.whb-clone {
    position: fixed;
    z-index: 391;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .1s ease,visibility .1s ease,-webkit-transform .3s ease;
    transition: opacity .1s ease,visibility .1s ease,-webkit-transform .3s ease;
    transition: opacity .1s ease,visibility .1s ease,transform .3s ease;
    transition: opacity .1s ease,visibility .1s ease,transform .3s ease,-webkit-transform .3s ease;
    -webkit-animation: wd-fadeOutUpBig .1s ease;
    animation: wd-fadeOutUpBig .1s ease;
    pointer-events: none
}

.whb-clone .whb-flex-row {
    border: none
}

.whb-clone.whb-sticked {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: wd-fadeInDownBig .3s ease;
    animation: wd-fadeInDownBig .3s ease;
    pointer-events: visible;
    pointer-events: unset
}

.whb-clone.whb-sticked .whb-not-sticky-row {
    display: block
}

.whb-clone .woodmart-navigation.main-nav {
    text-align: center
}

.admin-bar .whb-clone {
    top: 32px
}

.whb-clone.whb-hide-on-scroll {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-animation: none;
    animation: none
}

.whb-clone.whb-scroll-up {
    -webkit-transform: none;
    transform: none
}

.whb-sticky-prepared .whb-main-header {
    position: absolute
}

.whb-scroll-stick .whb-flex-row {
    -webkit-transition: height .2s ease;
    transition: height .2s ease
}

.whb-scroll-stick .search-button > a,.whb-scroll-stick .woodmart-shopping-cart > a,.whb-scroll-stick .woodmart-wishlist-info-widget > a,.whb-scroll-stick .main-nav .item-level-0 > a,.whb-scroll-stick .whb-secondary-menu .item-level-0 > a,.whb-scroll-stick .woodmart-header-links .item-level-0 > a,.whb-scroll-stick .menu-opener,.whb-scroll-stick .woodmart-burger-icon,.whb-scroll-stick .whb-divider-element:before,.whb-scroll-stick form.woocommerce-currency-switcher-form .dd-selected,.whb-scroll-stick .whb-text-element .wcml-dropdown a.wcml-cs-item-toggle {
    -webkit-transition: all .25s ease,height .2s ease;
    transition: all .25s ease,height .2s ease
}

.whb-scroll-stick .woodmart-logo img {
    -webkit-transition: max-height .3s ease;
    transition: max-height .3s ease
}

.whb-scroll-stick.whb-sticked .whb-flex-row {
    -webkit-transition: height .3s ease;
    transition: height .3s ease
}

.whb-scroll-stick.whb-sticked .search-button > a,.whb-scroll-stick.whb-sticked .woodmart-shopping-cart > a,.whb-scroll-stick.whb-sticked .woodmart-wishlist-info-widget > a,.whb-scroll-stick.whb-sticked .main-nav .item-level-0 > a,.whb-scroll-stick.whb-sticked .whb-secondary-menu .item-level-0 > a,.whb-scroll-stick.whb-sticked .woodmart-header-links .item-level-0 > a,.whb-scroll-stick.whb-sticked .menu-opener,.whb-scroll-stick.whb-sticked .woodmart-burger-icon,.whb-scroll-stick.whb-sticked .whb-divider-element:before,.whb-scroll-stick.whb-sticked form.woocommerce-currency-switcher-form .dd-selected,.whb-scroll-stick.whb-sticked .whb-text-element .wcml-dropdown a.wcml-cs-item-toggle {
    -webkit-transition: all .25s ease,height .3s ease;
    transition: all .25s ease,height .3s ease
}

.whb-scroll-stick.whb-scroll-down .whb-main-header,.whb-scroll-stick.whb-scroll-up .whb-main-header {
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.whb-scroll-stick.whb-scroll-down .whb-main-header {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%)
}

.whb-scroll-stick.whb-scroll-up .whb-main-header {
    -webkit-transform: none;
    transform: none
}

.whb-scroll-slide .search-button > a,.whb-scroll-slide .woodmart-shopping-cart > a,.whb-scroll-slide .woodmart-wishlist-info-widget > a,.whb-scroll-slide .main-nav .item-level-0 > a,.whb-scroll-slide .whb-secondary-menu .item-level-0 > a,.whb-scroll-slide .woodmart-header-links .item-level-0 > a,.whb-scroll-slide .menu-opener,.whb-scroll-slide .woodmart-burger-icon,.whb-scroll-slide .whb-divider-element:before,.whb-scroll-slide form.woocommerce-currency-switcher-form .dd-selected,.whb-scroll-slide .whb-text-element .wcml-dropdown a.wcml-cs-item-toggle {
    -webkit-transition: all .25s ease,height 0s ease;
    transition: all .25s ease,height 0s ease
}

.whb-scroll-slide.whb-sticked .whb-main-header {
    -webkit-animation: wd-fadeInDownBig .4s ease;
    animation: wd-fadeInDownBig .4s ease
}

.whb-scroll-slide.whb-scroll-down .whb-main-header,.whb-scroll-slide.whb-scroll-up .whb-main-header {
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.whb-scroll-slide.whb-hide-on-scroll.whb-sticked .whb-main-header {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-animation: none;
    animation: none
}

.whb-scroll-slide.whb-hide-on-scroll.whb-scroll-up .whb-main-header {
    -webkit-transform: none;
    transform: none
}

.whb-sticked .whb-main-header {
    position: fixed;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.whb-sticked .whb-row {
    -webkit-transition: background-color .3s ease;
    transition: background-color .3s ease
}

.whb-sticked .whb-not-sticky-row {
    display: none
}

.admin-bar .whb-sticked .whb-main-header {
    top: 32px
}

.whb-sticky-shadow.whb-sticked .whb-main-header {
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.1);
    box-shadow: 0 1px 3px rgba(0,0,0,.1)
}

.whb-sticky-shadow.whb-sticked .whb-row:last-child {
    border-bottom: none
}

.whb-sticky-shadow.whb-sticked .whb-row:last-child .whb-flex-row {
    border-bottom: none
}

.whb-sticky-shadow + .whb-clone {
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.1);
    box-shadow: 0 1px 3px rgba(0,0,0,.1)
}

.whb-sticky-shadow + .whb-clone .whb-row {
    border-bottom: none
}

.whb-row {
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease
}

.whb-color-dark:not(.whb-with-bg) {
    background-color: #fff
}

.whb-color-light:not(.whb-with-bg) {
    background-color: #212121
}

body:not(.single-product) .whb-overcontent:not(.whb-sticked) .whb-row:not(.whb-with-bg) {
    background-color: transparent
}

.woodmart-logo {
    display: inline-block
}

.woodmart-logo img {
    padding-top: 5px;
    padding-bottom: 5px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    perspective: 800px;
    -webkit-perspective: 800px
}

.woodmart-logo img[src$=".svg"] {
    height: 100%
}

.switch-logo-enable .woodmart-sticky-logo {
    display: none;
    -webkit-animation: wd-fadeIn .5s ease;
    animation: wd-fadeIn .5s ease
}

.whb-sticked .switch-logo-enable .woodmart-main-logo {
    display: none
}

.whb-sticked .switch-logo-enable .woodmart-sticky-logo {
    display: block
}

.whb-clone .switch-logo-enable .woodmart-main-logo {
    display: none
}

.whb-clone .switch-logo-enable .woodmart-sticky-logo {
    display: block
}

.menu-opener {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    min-width: 270px;
    max-width: 320px;
    height: 50px;
    color: #333;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.menu-opener .woodmart-custom-burger-icon,.menu-opener .woodmart-burger {
    margin-right: 10px
}

.menu-opener .woodmart-burger {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    position: relative;
    margin-top: 6px;
    margin-bottom: 6px
}

.menu-opener .woodmart-burger,.menu-opener .woodmart-burger::before,.menu-opener .woodmart-burger::after {
    display: inline-block;
    width: 18px;
    height: 2px;
    background-color: currentColor;
    -webkit-transition: none;
    transition: none
}

.menu-opener .woodmart-burger::before,.menu-opener .woodmart-burger::after {
    content: "";
    position: absolute;
    left: 0
}

.menu-opener .woodmart-burger::before {
    top: -6px
}

.menu-opener .woodmart-burger::after {
    top: 6px
}

.menu-opener .menu-open-label {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-right: 10px;
    text-transform: uppercase;
    letter-spacing: .4px
}

.menu-opener .arrow-opener {
    font-style: normal;
    font-size: 16px;
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.menu-opener .arrow-opener:after {
    font-family: "FontAwesome";
    content: "\f107"
}

.menu-opener.color-scheme-light {
    color: #fff
}

.header-categories-nav .header-categories-nav-wrap {
    position: relative
}

.header-categories-nav .categories-menu-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 299;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    -webkit-transform: translateY(15px) translateZ(0);
    transform: translateY(15px) translateZ(0);
    pointer-events: none
}

.header-categories-nav .categories-menu-dropdown .menu {
    border-top: none
}

.header-categories-nav .categories-menu-dropdown .item-level-0 > a {
    font-size: 14px
}

.header-categories-nav.show-on-hover:hover .categories-menu-dropdown,.whb-sticked .header-categories-nav.opened-menu:hover .categories-menu-dropdown {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible;
    pointer-events: unset
}

.header-categories-nav.show-on-hover:hover .arrow-opener,.whb-sticked .header-categories-nav.opened-menu:hover .arrow-opener {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg)
}

.whb-header:not(.whb-sticked) .header-categories-nav.opened-menu .categories-menu-dropdown {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible;
    pointer-events: unset
}

.whb-header:not(.whb-sticked) .header-categories-nav.opened-menu .menu-opener {
    cursor: default
}

.search-button {
    position: relative
}

.search-button > a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    color: #333
}

.search-button:hover > a {
    color: rgba(51,51,51,.6)
}

.search-button .search-button-icon {
    position: relative;
    font-weight: 400;
    font-size: 0;
    line-height: 1
}

.search-button .search-button-icon:before {
    font-size: 19px;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    content: "\f125";
    font-family: "woodmart-font"
}

.search-button .search-button-icon:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -7.5px;
    margin-left: -7.5px;
    width: 15px;
    height: 15px;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    opacity: 0;
    -webkit-transition: none;
    transition: none;
    content: "\f10f";
    font-family: "woodmart-font"
}

.woodmart-search-opened .search-button .search-button-icon:after {
    opacity: 1;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.woodmart-search-opened .search-button .search-button-icon:before {
    opacity: 0;
    -webkit-transition: none;
    transition: none
}

.whb-top-bar .search-button .search-button-icon:before {
    font-size: 13px
}

.whb-top-bar .search-button .search-button-icon:after {
    font-size: 10px
}

.whb-color-light .search-button > a {
    color: #fff
}

.whb-color-light .search-button:hover > a {
    color: rgba(255,255,255,.8)
}

.woodmart-search-custom-icon .search-button-icon {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-search-custom-icon .search-button-icon:after,.woodmart-search-custom-icon .search-button-icon:before {
    content: none
}

.woodmart-search-custom-icon:hover > a .search-button-icon {
    opacity: .6
}

.whb-column .woodmart-search-form {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.whb-column .woodmart-search-form input[type=text] {
    min-width: 290px
}

.whb-column .woodmart-mobile-search-form input[type=text] {
    min-width: 100%;
    height: 42px;
    font-size: 14px
}

.search-style-with-bg.searchform input[type=text] {
    background-color: #fff
}

.search-style-with-bg.searchform .searchsubmit {
    right: 0;
    width: 52px;
    color: #fff
}

.search-style-with-bg.searchform .searchsubmit:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.search-style-with-bg.searchform .searchsubmit:before {
    border-color: rgba(255,255,255,.4);
    border-left-color: #fff
}

.search-style-with-bg .search-by-category .input-dropdown-inner {
    border-right: none
}

.form-style-rounded .search-style-with-bg .searchsubmit {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px
}

.form-style-semi-rounded .search-style-with-bg .searchsubmit {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px
}

.woodmart-burger-icon {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    color: #333;
    line-height: 1;
    cursor: pointer;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none
}

.woodmart-burger-icon .woodmart-burger {
    position: relative;
    margin-top: 6px;
    margin-bottom: 6px
}

.woodmart-burger-icon .woodmart-burger,.woodmart-burger-icon .woodmart-burger::before,.woodmart-burger-icon .woodmart-burger::after {
    display: inline-block;
    width: 18px;
    height: 2px;
    background-color: currentColor;
    -webkit-transition: width .25s ease;
    transition: width .25s ease
}

.woodmart-burger-icon .woodmart-burger::before,.woodmart-burger-icon .woodmart-burger::after {
    content: "";
    position: absolute;
    left: 0
}

.woodmart-burger-icon .woodmart-burger::before {
    top: -6px
}

.woodmart-burger-icon .woodmart-burger::after {
    top: 6px
}

.woodmart-burger-icon .woodmart-burger-label {
    margin-left: 8px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px
}

.whb-top-bar .woodmart-burger-icon .woodmart-burger-label {
    font-weight: 400;
    font-size: 12px
}

.woodmart-burger-icon:hover {
    color: rgba(51,51,51,.6)
}

.woodmart-burger-icon:hover .woodmart-burger,.woodmart-burger-icon:hover .woodmart-burger:before,.woodmart-burger-icon:hover .woodmart-burger:after {
    background-color: currentColor
}

.woodmart-burger-icon:hover .woodmart-burger:before {
    width: 12px
}

.woodmart-burger-icon:hover .woodmart-burger:after {
    width: 10px
}

.whb-color-light .woodmart-burger-icon {
    color: #fff
}

.whb-color-light .woodmart-burger-icon:hover {
    color: rgba(255,255,255,.8)
}

.whb-mobile-nav-icon.mobile-style-icon .woodmart-burger-label {
    display: none
}

.woodmart-mobile-menu-custom-icon .woodmart-custom-burger-icon,.woodmart-full-screen-custom-icon .woodmart-custom-burger-icon {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-mobile-menu-custom-icon:hover .woodmart-custom-burger-icon,.woodmart-full-screen-custom-icon:hover .woodmart-custom-burger-icon {
    opacity: .6
}

.whb-divider-element:before {
    content: "";
    display: block;
    height: 18px;
    border-right-width: 1px;
    border-right-style: solid
}

.whb-color-dark .whb-divider-element:before {
    border-color: rgba(129,129,129,.2)
}

.whb-color-light .whb-divider-element:before {
    border-color: rgba(255,255,255,.25)
}

.whb-col-right .whb-divider-element:last-child,.whb-mobile-right .whb-divider-element:last-child,.whb-col-mobile .whb-divider-element:last-child {
    padding-right: 10px
}

.whb-col-left .whb-divider-element:first-child,.whb-mobile-left .whb-divider-element:first-child,.whb-col-mobile .whb-divider-element:first-child {
    padding-left: 10px
}

.whb-col-center .whb-divider-element:first-child {
    padding-left: 10px
}

.whb-col-center .whb-divider-element:last-child {
    padding-right: 10px
}

.whb-column > .woodmart-social-icons:not(.icons-design-default) .woodmart-social-icon {
    margin-right: 0;
    margin-left: 0
}

.whb-column > .woodmart-social-icons:not(.icons-design-default) .woodmart-social-icon:not(:last-child) {
    margin-right: 8px
}

.whb-column > .info-box-wrapper .woodmart-info-box {
    margin-bottom: 0
}

.whb-text-element {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.whb-text-element p:first-child:empty {
    display: none
}

.whb-text-element.text-element-inline {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.whb-top-bar .whb-text-element {
    font-size: 12px;
    line-height: 1.2
}

.whb-color-light .whb-text-element {
    color: rgba(255,255,255,.8)
}

.whb-color-light .whb-text-element a {
    color: rgba(255,255,255,.9)
}

.whb-color-light .whb-text-element a:hover {
    color: #fff
}

.whb-color-light .whb-text-element h1,.whb-color-light .whb-text-element h2,.whb-color-light .whb-text-element h3,.whb-color-light .whb-text-element h4,.whb-color-light .whb-text-element h5,.whb-color-light .whb-text-element h6,.whb-color-light .whb-text-element .title,.whb-color-light .whb-text-element .widgettitle,.whb-color-light .whb-text-element .widget-title,.whb-color-light .whb-text-element label,.whb-color-light .whb-text-element legend {
    color: #fff
}

.whb-color-light .whb-text-element .inline-list-with-border li:not(:last-child) {
    border-color: rgba(255,255,255,.15)
}

.header-banner-enabled .website-wrapper {
    margin-top: 0;
    -webkit-transition: margin-top .6s ease;
    transition: margin-top .6s ease
}

.header-banner-display .header-banner {
    opacity: 1;
    -webkit-transition: opacity 0s ease;
    transition: opacity 0s ease
}

.header-banner-display .website-wrapper {
    -webkit-transition: margin-top .6s ease .25s;
    transition: margin-top .6s ease .25s
}

.header-banner {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    -webkit-transition: opacity 0s ease .6s;
    transition: opacity 0s ease .6s
}

.header-banner-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.close-header-banner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 60px;
    color: #333
}

.close-header-banner:after {
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
    content: "\f10f";
    font-family: "woodmart-font"
}

.close-header-banner:hover {
    color: #333;
    opacity: .6
}

.close-header-banner + .header-banner-link {
    right: 60px
}

.color-scheme-dark .close-header-banner {
    color: #333
}

.color-scheme-dark .close-header-banner:hover {
    color: #333
}

.woodmart-shopping-cart {
    position: relative
}

.woodmart-shopping-cart > a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    color: #333
}

.woodmart-shopping-cart:hover > a {
    color: rgba(51,51,51,.6)
}

.woodmart-shopping-cart .woodmart-cart-wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 0;
    line-height: 1
}

.woodmart-shopping-cart .woodmart-cart-icon {
    font-weight: 400
}

.woodmart-shopping-cart .woodmart-cart-icon:before {
    font-size: 20px;
    content: "\f107";
    font-family: "woodmart-font"
}

.woodmart-shopping-cart .woodmart-cart-subtotal .amount {
    color: #333;
    font-weight: inherit;
    font-size: inherit
}

.woodmart-shopping-cart .woodmart-cart-totals {
    white-space: nowrap;
    font-weight: 600;
    font-size: 13px
}

.woodmart-shopping-cart .woodmart-cart-number > span {
    display: none
}

.woodmart-shopping-cart.woodmart-cart-alt .woodmart-cart-icon:before {
    content: "\f120";
    font-family: "woodmart-font"
}

.whb-top-bar .woodmart-shopping-cart .woodmart-cart-icon:before {
    font-size: 14px
}

.whb-top-bar .woodmart-shopping-cart .woodmart-cart-totals {
    font-weight: 400;
    font-size: 12px
}

.whb-color-light .woodmart-shopping-cart > a {
    color: #fff
}

.whb-color-light .woodmart-shopping-cart:hover > a {
    color: rgba(255,255,255,.8)
}

.whb-color-light .woodmart-shopping-cart .woodmart-cart-subtotal .amount {
    color: #fff
}

.woodmart-cart-design-1 .woodmart-cart-icon {
    margin-right: 10px
}

.woodmart-cart-design-2 .woodmart-cart-number,.woodmart-cart-design-5 .woodmart-cart-number {
    position: absolute;
    top: -5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px
}

.whb-top-bar .woodmart-cart-design-2 .woodmart-cart-number,.whb-top-bar .woodmart-cart-design-5 .woodmart-cart-number {
    width: 13px;
    height: 13px;
    line-height: 13px
}

.woodmart-cart-design-2 .woodmart-cart-icon {
    margin-right: 15px
}

.woodmart-cart-design-2 .woodmart-cart-wrapper {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

.woodmart-cart-design-2 .woodmart-cart-totals {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-cart-design-2 .woodmart-cart-number {
    right: calc(100% + 6px)
}

.woodmart-cart-design-2 .subtotal-divider {
    display: none
}

.whb-top-bar .woodmart-cart-design-2 .woodmart-cart-icon {
    margin-right: 10px
}

.whb-top-bar .woodmart-cart-design-2 .woodmart-cart-number {
    right: calc(100% + 2px)
}

.woodmart-cart-design-3 > a {
    height: auto
}

.woodmart-cart-design-3 .woodmart-cart-icon {
    margin-right: 12px;
    padding-right: 12px;
    border-right: 1px solid rgba(0,0,0,.1)
}

.woodmart-cart-design-3 .woodmart-cart-icon:before {
    color: rgba(0,0,0,.17);
    font-size: 32px
}

.woodmart-cart-design-3 .woodmart-cart-totals {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse
}

.woodmart-cart-design-3 .woodmart-cart-number {
    color: #777;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px
}

.woodmart-cart-design-3 .woodmart-cart-number > span {
    display: inline-block
}

.woodmart-cart-design-3 .woodmart-cart-subtotal {
    line-height: 20px
}

.woodmart-cart-design-3 .woodmart-cart-subtotal .amount {
    font-weight: 900;
    font-size: 14px
}

.woodmart-cart-design-3 .subtotal-divider {
    display: none
}

.whb-top-bar .woodmart-cart-design-3 .woodmart-cart-icon {
    margin-right: 8px;
    padding-right: 8px
}

.whb-top-bar .woodmart-cart-design-3 .woodmart-cart-icon:before {
    font-size: 20px
}

.whb-top-bar .woodmart-cart-design-3 .woodmart-cart-number {
    font-size: inherit;
    line-height: 14px
}

.whb-top-bar .woodmart-cart-design-3 .woodmart-cart-subtotal {
    line-height: 14px
}

.whb-top-bar .woodmart-cart-design-3 .woodmart-cart-subtotal .amount {
    font-weight: 600;
    font-size: 12px
}

.whb-color-light .woodmart-cart-design-3 .woodmart-cart-icon {
    border-color: rgba(255,255,255,.3)
}

.whb-color-light .woodmart-cart-design-3 .woodmart-cart-icon:before {
    color: #fff
}

.whb-color-light .woodmart-cart-design-3 .woodmart-cart-number {
    color: rgba(255,255,255,.8)
}

.woodmart-cart-design-4 .woodmart-cart-icon {
    margin-right: 6px
}

.woodmart-cart-design-4 .woodmart-cart-number {
    position: relative;
    display: inline-block;
    padding: 0 2px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 10px;
    line-height: 19px
}

.woodmart-cart-design-4 .subtotal-divider,.woodmart-cart-design-4 .woodmart-cart-subtotal {
    display: none
}

.whb-top-bar .woodmart-cart-design-4 .woodmart-cart-number {
    width: 16px;
    height: 16px;
    line-height: 16px
}

.woodmart-cart-design-5 {
    margin-right: 5px
}

.woodmart-cart-design-5 .woodmart-cart-number {
    right: -8px
}

.woodmart-cart-design-5 .woodmart-cart-subtotal,.woodmart-cart-design-5 .subtotal-divider {
    display: none
}

.woodmart-cart-custom-icon .woodmart-cart-icon {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-cart-custom-icon .woodmart-cart-icon:before {
    content: none
}

.woodmart-cart-custom-icon:hover > a .woodmart-cart-icon {
    opacity: .6
}

.dropdown-cart {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 350;
    padding: 20px;
    width: 330px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.dropdown-cart .return-to-shop {
    display: none
}

.dropdown-cart .widget_shopping_cart .empty {
    margin-bottom: 0;
    padding-top: 5px;
    padding-bottom: 5px
}

.whb-col-left .dropdown-cart {
    right: auto;
    left: 0
}

.dropdowns-color-light .dropdown-cart {
    background-color: #101010
}

.woocommerce-cart .cart-widget-side,.woocommerce-cart .dropdown-cart,.woocommerce-checkout .cart-widget-side,.woocommerce-checkout .dropdown-cart {
    display: none
}

.cart-widget-side {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.cart-widget-side .widget_shopping_cart {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.cart-widget-side .widget_shopping_cart .mini_cart_item {
    margin-bottom: 0;
    padding: 15px;
    -webkit-transition: background-color .3s ease;
    transition: background-color .3s ease
}

.cart-widget-side .widget_shopping_cart .mini_cart_item:hover {
    background-color: #f9f9f9
}

.cart-widget-side .widget_shopping_cart .woodmart-scroll-content {
    position: absolute;
    padding-right: 0;
    max-height: none
}

.cart-widget-side .widget_shopping_cart .remove {
    top: 13px;
    right: 10px
}

.cart-widget-side .widget_shopping_cart .empty {
    margin-top: 20px;
    margin-bottom: 5px
}

.cart-widget-side .widget_shopping_cart .empty:before {
    display: block;
    margin-bottom: 20px;
    color: rgba(135,135,135,.15);
    font-weight: normal;
    font-size: 86px;
    line-height: 86px;
    content: "\f101";
    font-family: "woodmart-font"
}

.cart-widget-side .widget_shopping_cart .empty:after {
    position: absolute;
    top: 22px;
    left: 50%;
    margin-left: -8px;
    color: #858585;
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    content: "\f10f";
    font-family: "woodmart-font"
}

.cart-widget-side .widget_shopping_cart .total {
    margin-top: 0
}

.cart-widget-side .widget_shopping_cart .shopping-cart-widget-footer {
    margin-top: 0
}

.cart-widget-side .widget_shopping_cart_content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.cart-widget-side .shopping-cart-widget-footer {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-bottom: 15px
}

.cart-widget-side .shopping-cart-widget-footer > p {
    padding-right: 15px;
    padding-left: 15px
}

.dropdowns-color-light .cart-widget-side {
    background-color: #101010
}

.dropdowns-color-light .cart-widget-side .widget_shopping_cart .mini_cart_item:hover {
    background-color: rgba(0,0,0,.3)
}

.dropdowns-color-light .cart-widget-side .empty:before {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .cart-widget-side .empty:after {
    color: #fff
}

.dropdowns-color-light .cart-widget-side .woodmart-scroll-pane {
    background: rgba(255,255,255,.15)
}

.dropdowns-color-light .cart-widget-side .woodmart-scroll-pane > .woodmart-scroll-slider {
    background: rgba(255,255,255,.35)
}

.woodmart-header-links .item-level-0 {
    position: relative
}

.woodmart-header-links .item-level-0 > a {
    height: 40px;
    color: #333;
    white-space: nowrap;
    font-weight: 600;
    font-size: 13px
}

.woodmart-header-links .item-level-0 > a strong {
    font-weight: inherit
}

.woodmart-header-links .item-level-0:hover > a {
    color: rgba(51,51,51,.6)
}

.woodmart-header-links .menu-simple-dropdown .sub-menu-dropdown {
    width: 165px
}

.woodmart-header-links .menu-simple-dropdown li a {
    padding-top: 8px;
    padding-right: 18px;
    padding-bottom: 8px;
    padding-left: 18px
}

.whb-top-bar .woodmart-header-links .item-level-0 > a {
    font-weight: 400;
    font-size: 12px
}

.whb-color-light .woodmart-header-links .item-level-0 > a {
    color: #fff
}

.whb-color-light .woodmart-header-links .item-level-0:hover > a {
    color: rgba(255,255,255,.8)
}

.my-account-with-icon > a:before {
    display: inline-block;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    font-size: 19px;
    line-height: 1;
    content: "\f11e";
    font-family: "woodmart-font"
}

.my-account-with-icon:not(.my-account-with-username) > a > span {
    display: none
}

.my-account-with-icon.my-account-with-username > a:before {
    margin-right: 10px
}

.whb-top-bar .my-account-with-icon > a:before {
    font-size: 12px
}

.woodmart-account-custom-icon .my-account-with-icon > a:before {
    content: none
}

.woodmart-account-custom-icon .woodmart-custom-icon {
    min-width: auto;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-account-custom-icon .my-account-with-username .woodmart-custom-icon {
    margin-right: 10px
}

.woodmart-account-custom-icon .item-level-0:hover > a .woodmart-custom-icon {
    opacity: .6
}

.menu-item-register.menu-simple-dropdown .sub-menu-dropdown {
    padding-top: 0;
    padding-bottom: 0;
    width: auto
}

.menu-item-register .sub-menu-dropdown {
    -webkit-transition-delay: .2s;
    transition-delay: .2s;
    pointer-events: visible;
    pointer-events: unset
}

.menu-item-register .login-dropdown-inner {
    padding: 25px;
    width: 350px
}

.menu-item-register .login-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-bottom: 2px;
    border-bottom: 1px solid;
    color: #2d2a2a;
    line-height: 1
}

.menu-item-register .login-title span,.menu-item-register .login-title a {
    margin-bottom: 10px
}

.menu-item-register .login-title span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px
}

.menu-item-register .create-account-link:hover {
    text-decoration: underline;
    opacity: .7
}

.menu-item-register a.create-account-link {
    font-weight: 400;
    font-size: 14px;
    line-height: inherit
}

.menu-item-register .login {
    line-height: 1.2
}

.menu-item-register .login p {
    margin-bottom: 15px
}

.browser-Safari .menu-item-register .sub-menu-dropdown {
    visibility: hidden
}

.menu-item-register:hover > .sub-menu-dropdown,.menu-item-register.opened > .sub-menu-dropdown {
    -webkit-transition-delay: 0s;
    transition-delay: 0s
}

.dropdowns-color-light .menu-item-register .login-title {
    border-color: rgba(255,255,255,.15);
    color: #fff
}

.dropdowns-color-light .menu-item-register .login-title a {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .menu-item-register .login-title a:hover {
    color: #fff;
    opacity: 1
}

.login-form-side .woocommerce-form-login {
    padding-top: 20px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    border-bottom: 1px solid
}

.login-form-side .social-login-title {
    margin-top: 10px;
    margin-bottom: 20px
}

.login-form-side .woodmart-social-login {
    margin-bottom: 10px
}

.login-form-side .create-account-question {
    padding-top: 20px;
    padding-right: 15px;
    padding-bottom: 20px;
    padding-left: 15px;
    border-bottom: 1px solid;
    text-align: center
}

.login-form-side .create-account-question:before {
    display: block;
    margin-bottom: 15px;
    color: rgba(135,135,135,.15);
    font-weight: normal;
    font-size: 54px;
    line-height: 54px;
    content: "\f11e";
    font-family: "woodmart-font"
}

.login-form-side .create-account-text {
    display: block;
    margin-bottom: 15px;
    color: #2d2a2a;
    font-weight: 600;
    font-size: 14px
}

.dropdowns-color-light .login-form-side label {
    color: #fff
}

.dropdowns-color-light .login-form-side input[type=email],.dropdowns-color-light .login-form-side input[type=text],.dropdowns-color-light .login-form-side input[type=password] {
    border-color: rgba(255,255,255,.25);
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
}

.dropdowns-color-light .login-form-side input[type=email]:focus,.dropdowns-color-light .login-form-side input[type=text]:focus,.dropdowns-color-light .login-form-side input[type=password]:focus {
    border-color: rgba(255,255,255,.5)
}

.dropdowns-color-light .login-form-side ::-webkit-input-placeholder {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .login-form-side ::-moz-placeholder {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .login-form-side :-moz-placeholder {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .login-form-side :-ms-input-placeholder {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .login-form-side .woocommerce-form-login {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .login-form-side .create-account-question {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .login-form-side .create-account-question:before {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .login-form-side .create-account-text {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .login-form-side .create-account-button {
    border-color: rgba(255,255,255,.3);
    color: #fff
}

.dropdowns-color-light .login-form-side .create-account-button:hover {
    border-color: #fff;
    color: #fff
}

.dropdowns-color-light .login-form-side .social-login-title,.dropdowns-color-light .menu-item-register .social-login-title {
    color: #fff
}

.dropdowns-color-light .login-form-side .social-login-title:after,.dropdowns-color-light .login-form-side .social-login-title:before,.dropdowns-color-light .menu-item-register .social-login-title:after,.dropdowns-color-light .menu-item-register .social-login-title:before {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .login-form-side .login-form-footer .lost_password,.dropdowns-color-light .menu-item-register .login-form-footer .lost_password {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .login-form-side .login-form-footer .lost_password:hover,.dropdowns-color-light .menu-item-register .login-form-footer .lost_password:hover {
    color: #fff;
    opacity: 1
}

table {
    margin-bottom: 35px;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 14px;
    line-height: 1.4
}

table th {
    padding: 15px 10px;
    border: none;
    border-bottom: 2px solid #efefef;
    color: #2d2a2a;
    vertical-align: middle;
    text-align: left;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2
}

table td {
    padding: 15px 12px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    text-align: left;
    font-weight: inherit
}

table tbody th,table tfoot th {
    border-bottom: 1px solid #e6e6e6;
    text-transform: none;
    font-size: 14px
}

.color-scheme-light table th {
    color: #fff
}

.color-scheme-light table th {
    border-color: rgba(255,255,255,.15)
}

.color-scheme-light table td {
    border-color: rgba(255,255,255,.15)
}

.color-scheme-light table tbody th,.color-scheme-light table tfoot th {
    border-color: rgba(255,255,255,.15)
}

.table-bordered-style th,.table-bordered-style td {
    border: 1px solid #efefef
}

.color-scheme-light .table-bordered-style th,.color-scheme-light .table-bordered-style td {
    border-color: rgba(255,255,255,.4)
}

.responsive-table {
    overflow-x: auto;
    margin-bottom: 35px
}

.responsive-table table {
    margin-bottom: 0
}

.responsive-table .responsive-table {
    overflow-x: visible;
    margin-bottom: 0
}

.woodmart-vc-ajax-search {
    margin-bottom: 35px
}

.searchform {
    position: relative
}

.searchform input[type=text] {
    padding-right: 50px;
    height: 46px;
    font-size: 15px
}

.searchform input[type=text]::-ms-clear {
    display: none
}

.searchform .searchsubmit {
    position: absolute;
    top: 0;
    right: 2px;
    bottom: 0;
    padding: 0;
    width: 50px;
    border: none;
    background-color: transparent;
    color: #777;
    font-weight: 400;
    font-size: 0
}

.searchform .searchsubmit:after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    margin-top: -10px;
    margin-left: -10px;
    width: 20px;
    font-size: 20px;
    line-height: 20px;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    content: "\f125";
    font-family: "woodmart-font"
}

.searchform .searchsubmit:before {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    margin-top: -9px;
    margin-left: -9px;
    opacity: 0;
    -webkit-transition: opacity .1s ease,visibility .1s ease;
    transition: opacity .1s ease,visibility .1s ease;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.searchform .searchsubmit:hover,.searchform .searchsubmit:focus {
    -webkit-box-shadow: none;
    box-shadow: none
}

.searchform.search-loading .searchsubmit:before {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .2s ease,visibility .2s ease;
    transition: opacity .2s ease,visibility .2s ease;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.searchform.search-loading .searchsubmit:after {
    opacity: 0;
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease
}

.woodmart-searchform-custom-icon .searchsubmit:after {
    content: none
}

.woodmart-searchform-custom-icon .woodmart-custom-icon {
    min-width: auto;
    max-width: 24px;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease
}

.woodmart-searchform-custom-icon .searchsubmit:hover {
    opacity: .6
}

.woodmart-searchform-custom-icon.search-loading .woodmart-custom-icon {
    opacity: 0;
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease
}

.search-results-wrapper {
    position: relative
}

.search-results-wrapper .woodmart-scroll {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 1000;
    width: auto;
    height: auto;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.search-results-wrapper .woodmart-scroll .woodmart-search-results {
    position: relative;
    max-height: 50vh
}

.search-results-wrapper .woodmart-scroll .woodmart-scroll-pane {
    z-index: 1002
}

.color-scheme-light .search-results-wrapper .woodmart-scroll {
    background-color: #101010
}

.autocomplete-suggestions {
    position: relative !important;
    z-index: 1001 !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: -1px;
    margin-right: -1px;
    max-width: none !important;
    max-height: none !important;
    width: auto !important;
    -webkit-animation: wd-fadeInBottomShort .2s ease both;
    animation: wd-fadeInBottomShort .2s ease both
}

.autocomplete-suggestion {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 285px;
    flex: 1 1 285px;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    border-bottom: 1px solid;
    border-right: 1px solid;
    cursor: pointer;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease
}

.autocomplete-suggestion .suggestion-title strong {
    text-decoration: underline
}

.autocomplete-suggestion .suggestion-thumb {
    float: left;
    margin-right: 15px;
    max-width: 65px
}

.autocomplete-suggestion .suggestion-title {
    margin-bottom: 0;
    font-size: 14px
}

.autocomplete-suggestion .suggestion-price {
    margin-top: 7px
}

.autocomplete-suggestion:hover,.autocomplete-suggestion.autocomplete-selected {
    background-color: #f9f9f9
}

.color-scheme-light .autocomplete-suggestion:hover,.color-scheme-light .autocomplete-suggestion.autocomplete-selected {
    background-color: rgba(0,0,0,.3)
}

.view-all-results {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    margin-top: -1px;
    height: 50px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background-color: #fff;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .2px;
    font-weight: 600;
    line-height: 50px;
    cursor: pointer;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
    -webkit-animation: wd-fadeIn .3s ease both;
    animation: wd-fadeIn .3s ease both
}

.view-all-results:hover {
    background-color: #f9f9f9
}

.color-scheme-light .view-all-results {
    background-color: rgba(0,0,0,.3);
    color: #fff
}

.color-scheme-light .view-all-results:hover {
    background-color: rgba(0,0,0,.9)
}

.woodmart-search-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 340;
    width: 300px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.woodmart-search-dropdown input[type=text] {
    padding-left: 25px;
    padding-right: 55px;
    height: 70px;
    border-style: none
}

.woodmart-search-dropdown .searchsubmit {
    width: 60px;
    color: #333
}

.woodmart-search-dropdown .view-all-results {
    border-bottom: none
}

.dropdowns-color-light .woodmart-search-dropdown {
    background-color: #101010
}

.whb-col-left .woodmart-search-dropdown {
    right: auto;
    left: 0
}

.dropdowns-color-light .woodmart-search-dropdown .searchsubmit,.dropdowns-color-light .mobile-nav .searchsubmit {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown .searchsubmit:before,.dropdowns-color-light .mobile-nav .searchsubmit:before {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown input[type=text],.dropdowns-color-light .mobile-nav input[type=text] {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown ::-webkit-input-placeholder,.dropdowns-color-light .mobile-nav ::-webkit-input-placeholder {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .woodmart-search-dropdown ::-moz-placeholder,.dropdowns-color-light .mobile-nav ::-moz-placeholder {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown :-moz-placeholder,.dropdowns-color-light .mobile-nav :-moz-placeholder {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown :-ms-input-placeholder,.dropdowns-color-light .mobile-nav :-ms-input-placeholder {
    color: rgba(255,255,255,.6)
}

.woodmart-search-full-screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 400;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    -webkit-box-shadow: 0 0 14px rgba(0,0,0,.08);
    box-shadow: 0 0 14px rgba(0,0,0,.08);
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
}

.woodmart-search-full-screen .searchform {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 100px;
    padding-left: 100px;
    border-bottom: 1px solid;
    opacity: 0;
    -webkit-transition: opacity .35s ease .2s;
    transition: opacity .35s ease .2s
}

.woodmart-search-full-screen .searchform ::-webkit-input-placeholder {
    color: #656565
}

.woodmart-search-full-screen .searchform ::-moz-placeholder {
    color: #656565
}

.woodmart-search-full-screen .searchform :-moz-placeholder {
    color: #656565
}

.woodmart-search-full-screen .searchform :-ms-input-placeholder {
    color: #656565
}

.woodmart-search-full-screen .searchform input[type=text] {
    position: relative;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    height: 110px;
    border: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #333;
    text-align: center;
    font-weight: 600;
    font-size: 48px
}

.woodmart-search-full-screen .searchform .searchsubmit {
    display: none
}

.woodmart-search-full-screen .search-info-text {
    display: block
}

.woodmart-search-full-screen .woodmart-close-search {
    display: block
}

.woodmart-search-full-screen .woodmart-search-loader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.woodmart-search-full-screen .view-all-results {
    margin-top: 10px;
    margin-right: -10px;
    margin-bottom: -10px;
    margin-left: -10px
}

.woodmart-search-full-screen .search-results-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-top: -40px
}

.woodmart-search-full-screen .search-results-wrapper .woodmart-scroll {
    position: static;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-search-full-screen .search-results-wrapper .woodmart-scroll .woodmart-search-results {
    position: absolute;
    max-height: none
}

.woodmart-search-full-screen .autocomplete-suggestions {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background-color: #fff
}

.woodmart-search-full-screen .autocomplete-suggestion {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-preferred-size: 200px;
    flex-basis: 200px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-bottom: none;
    border-right: none
}

.woodmart-search-full-screen .autocomplete-suggestion .suggestion-thumb {
    float: none;
    margin-bottom: 10px;
    margin-right: 0;
    max-width: 100%
}

.woodmart-search-full-screen .autocomplete-suggestion:hover,.woodmart-search-full-screen .autocomplete-suggestion.autocomplete-selected {
    background-color: transparent
}

.woodmart-search-full-screen .no-found-msg {
    text-align: center
}

.woodmart-search-full-screen .search-loading + .search-info-text + .search-results-wrapper .woodmart-search-loader {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility .3s ease;
    transition: opacity .3s ease,visibility .3s ease
}

.woodmart-search-full-screen .search-loading + .search-info-text + .search-results-wrapper .woodmart-search-loader:after {
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.woodmart-search-full-screen.search-overlap {
    -webkit-transform: none;
    transform: none
}

.woodmart-search-full-screen.search-overlap .searchform {
    opacity: 1
}

.woodmart-search-full-screen.search-overlap .search-info-text > span {
    -webkit-transform: none;
    transform: none
}

.dropdowns-color-light .woodmart-search-full-screen {
    background-color: #101010
}

.dropdowns-color-light .woodmart-search-full-screen .searchform {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .woodmart-search-full-screen .searchform input[type=text] {
    color: #fff
}

.dropdowns-color-light .woodmart-search-full-screen .searchform ::-webkit-input-placeholder {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .woodmart-search-full-screen .searchform ::-moz-placeholder {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .woodmart-search-full-screen .searchform :-moz-placeholder {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .woodmart-search-full-screen .searchform :-ms-input-placeholder {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .woodmart-search-full-screen .autocomplete-suggestions {
    background-color: #101010
}

.woodmart-close-search {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 200;
    display: none;
    width: 100px;
    height: 100px;
    font-size: 0;
    cursor: pointer
}

.woodmart-close-search:after,.woodmart-close-search:before {
    content: " ";
    position: absolute;
    top: 50%;
    right: 50%;
    display: inline-block;
    margin-top: -2px;
    margin-right: -20px;
    width: 40px;
    height: 3px;
    background-color: #2d2a2a;
    -webkit-transition: background-color .25s ease,-webkit-transform .25s ease;
    transition: background-color .25s ease,-webkit-transform .25s ease;
    transition: background-color .25s ease,transform .25s ease;
    transition: background-color .25s ease,transform .25s ease,-webkit-transform .25s ease
}

.woodmart-close-search:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.woodmart-close-search:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.woodmart-close-search:hover:after,.woodmart-close-search:hover:before {
    -webkit-transform: rotate(0);
    transform: rotate(0)
}

.dropdowns-color-light .woodmart-close-search:after,.dropdowns-color-light .woodmart-close-search:before {
    background-color: #fff
}

.woodmart-search-loader {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1002;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    visibility: hidden;
    background-color: rgba(255,255,255,.8);
    opacity: 0;
    -webkit-transition: opacity .1s ease,visibility .1s ease;
    transition: opacity .1s ease,visibility .1s ease
}

.woodmart-search-loader:after {
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.dropdowns-color-light .woodmart-search-loader {
    background-color: rgba(0,0,0,.9)
}

.dropdowns-color-light .woodmart-search-loader:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.search-info-text {
    display: none;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    margin-top: 10px;
    text-align: center;
    letter-spacing: .3px;
    font-size: 16px;
    line-height: 30px
}

.search-info-text > span {
    display: block;
    -webkit-transition: all .35s ease .15s;
    transition: all .35s ease .15s;
    -webkit-transform: translateY(-50px) translateZ(0);
    transform: translateY(-50px) translateZ(0)
}

.dropdowns-color-light .search-info-text {
    color: rgba(255,255,255,.8)
}

.no-found-msg {
    color: #333;
    font-weight: 600;
    font-size: 110%
}

.woodmart-search-opened {
    overflow: hidden
}

.woodmart-search-opened .scrollToTop {
    display: none
}

.dropdowns-color-light .woodmart-search-dropdown .suggestion-title,.dropdowns-color-light .woodmart-search-full-screen .suggestion-title,.dropdowns-color-light .mobile-nav .suggestion-title,.dropdowns-color-light .whb-column .suggestion-title {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown .suggestion-price,.dropdowns-color-light .woodmart-search-full-screen .suggestion-price,.dropdowns-color-light .mobile-nav .suggestion-price,.dropdowns-color-light .whb-column .suggestion-price {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown .suggestion-price .amount,.dropdowns-color-light .woodmart-search-full-screen .suggestion-price .amount,.dropdowns-color-light .mobile-nav .suggestion-price .amount,.dropdowns-color-light .whb-column .suggestion-price .amount {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown .suggestion-price del,.dropdowns-color-light .woodmart-search-full-screen .suggestion-price del,.dropdowns-color-light .mobile-nav .suggestion-price del,.dropdowns-color-light .whb-column .suggestion-price del {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .woodmart-search-dropdown .suggestion-price del .amount,.dropdowns-color-light .woodmart-search-full-screen .suggestion-price del .amount,.dropdowns-color-light .mobile-nav .suggestion-price del .amount,.dropdowns-color-light .whb-column .suggestion-price del .amount {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .woodmart-search-dropdown .search-results-wrapper .woodmart-scroll,.dropdowns-color-light .woodmart-search-full-screen .search-results-wrapper .woodmart-scroll,.dropdowns-color-light .mobile-nav .search-results-wrapper .woodmart-scroll,.dropdowns-color-light .whb-column .search-results-wrapper .woodmart-scroll {
    background-color: #101010
}

.dropdowns-color-light .woodmart-search-dropdown .view-all-results,.dropdowns-color-light .woodmart-search-full-screen .view-all-results,.dropdowns-color-light .mobile-nav .view-all-results,.dropdowns-color-light .whb-column .view-all-results {
    border-color: rgba(255,255,255,.15);
    background-color: rgba(0,0,0,.3);
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown .view-all-results:hover,.dropdowns-color-light .woodmart-search-full-screen .view-all-results:hover,.dropdowns-color-light .mobile-nav .view-all-results:hover,.dropdowns-color-light .whb-column .view-all-results:hover {
    background-color: rgba(0,0,0,.9)
}

.dropdowns-color-light .woodmart-search-dropdown .no-found-msg,.dropdowns-color-light .woodmart-search-full-screen .no-found-msg,.dropdowns-color-light .mobile-nav .no-found-msg,.dropdowns-color-light .whb-column .no-found-msg {
    color: #fff
}

.dropdowns-color-light .woodmart-search-dropdown .woodmart-scroll-pane,.dropdowns-color-light .woodmart-search-full-screen .woodmart-scroll-pane,.dropdowns-color-light .mobile-nav .woodmart-scroll-pane,.dropdowns-color-light .whb-column .woodmart-scroll-pane {
    background: rgba(255,255,255,.15)
}

.dropdowns-color-light .woodmart-search-dropdown .woodmart-scroll-pane > .woodmart-scroll-slider,.dropdowns-color-light .woodmart-search-full-screen .woodmart-scroll-pane > .woodmart-scroll-slider,.dropdowns-color-light .mobile-nav .woodmart-scroll-pane > .woodmart-scroll-slider,.dropdowns-color-light .whb-column .woodmart-scroll-pane > .woodmart-scroll-slider {
    background: rgba(255,255,255,.35)
}

.dropdowns-color-light .woodmart-search-dropdown .autocomplete-suggestion,.dropdowns-color-light .mobile-nav .autocomplete-suggestion,.dropdowns-color-light .whb-column .autocomplete-suggestion {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .woodmart-search-dropdown .autocomplete-suggestion:hover,.dropdowns-color-light .woodmart-search-dropdown .autocomplete-suggestion.autocomplete-selected,.dropdowns-color-light .mobile-nav .autocomplete-suggestion:hover,.dropdowns-color-light .mobile-nav .autocomplete-suggestion.autocomplete-selected,.dropdowns-color-light .whb-column .autocomplete-suggestion:hover,.dropdowns-color-light .whb-column .autocomplete-suggestion.autocomplete-selected {
    background-color: rgba(0,0,0,.3)
}

.footer-column {
    margin-bottom: 30px
}

.woodmart-prefooter {
    padding-bottom: 40px;
    background-color: #fff
}

.copyrights-wrapper {
    border-top: 1px solid
}

.color-scheme-light .copyrights-wrapper {
    border-color: rgba(255,255,255,.1)
}

.min-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-right: -15px;
    margin-left: -15px;
    padding-top: 20px;
    padding-bottom: 20px
}

.min-footer > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 50%;
    flex: 1 0 50%;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 50%;
    line-height: 1.2
}

.min-footer .col-right {
    text-align: right
}

.copyrights-centered .min-footer {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    text-align: center
}

.copyrights-centered .min-footer .col-right {
    text-align: center
}

.copyrights-centered .min-footer > div {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin-bottom: 15px;
    max-width: 100%
}

.copyrights-centered .min-footer > div:last-child {
    margin-bottom: 0
}

.btn,.button,button,.added_to_cart,[type=submit],[type=button] {
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px;
    background-color: #f3f3f3;
    color: #3e3e3e;
    position: relative;
    display: inline-block;
    outline: none;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: .3px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease
}

.btn:hover,.button:hover,button:hover,.added_to_cart:hover,[type=submit]:hover,[type=button]:hover {
    color: #3e3e3e;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.btn:hover,.button:hover,button:hover,.added_to_cart:hover,[type=submit]:hover,[type=button]:hover {
    text-decoration: none
}

.btn:focus,.button:focus,button:focus,.added_to_cart:focus,[type=submit]:focus,[type=button]:focus {
    outline: none
}

.btn i {
    margin-left: 3px
}

button[disabled],input[disabled] {
    opacity: .6 !important;
    cursor: default
}

.btn.btn-scheme-light {
    color: #fff
}

.btn.btn-scheme-dark {
    color: #3e3e3e
}

.btn.btn-scheme-hover-light:hover {
    color: #fff
}

.btn.btn-scheme-hover-dark:hover {
    color: #3e3e3e
}

.btn.btn-color-default {
    background-color: #f3f3f3;
    color: #3e3e3e
}

.btn.btn-color-default:hover {
    color: #3e3e3e;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.btn.btn-color-black {
    background-color: #212121;
    color: #fff
}

.btn.btn-color-black:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.btn.btn-color-white {
    background-color: #fff;
    color: #333
}

.btn.btn-color-white:hover {
    color: #333;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.btn.btn-color-alt {
    color: #fff
}

.btn.btn-color-alt:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.btn.btn-color-primary {
    color: #fff
}

.btn.btn-color-primary:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.btn-style-bordered.btn-color-default {
    border-color: #e9e9e9;
    color: #333
}

.btn-style-bordered.btn-color-default:hover {
    background-color: #e9e9e9;
    color: #333
}

.btn-style-bordered.btn-color-primary:hover {
    color: #fff
}

.btn-style-bordered.btn-color-alt:hover {
    color: #fff
}

.btn-style-bordered.btn-color-black {
    border-color: #212121;
    color: #333
}

.btn-style-bordered.btn-color-black:hover {
    background-color: #212121;
    color: #fff
}

.btn-style-bordered.btn-color-white {
    border-color: rgba(255,255,255,.5);
    color: #fff
}

.btn-style-bordered.btn-color-white:hover {
    border-color: #fff;
    background-color: transparent;
    color: #fff
}

.btn-style-link.btn-color-default {
    border-color: #dfdfdf;
    color: #333
}

.btn-style-link.btn-color-default:hover {
    border-color: #c5c5c5;
    color: #333
}

.btn-style-link.btn-color-primary {
    color: #333
}

.btn-style-link.btn-color-primary:hover {
    color: #333;
    opacity: .6
}

.btn-style-link.btn-color-alt {
    color: #333
}

.btn-style-link.btn-color-alt:hover {
    color: #333;
    opacity: .6
}

.btn-style-link.btn-color-black {
    border-color: #333;
    color: #333
}

.btn-style-link.btn-color-black:hover {
    border-color: #333;
    color: #333;
    opacity: .6
}

.btn-style-link.btn-color-white {
    border-color: rgba(255,255,255,.3);
    color: #fff
}

.btn-style-link.btn-color-white:hover {
    border-color: #fff;
    color: #fff
}

.btn-color-custom.btn-style-3d:hover {
    opacity: 1 !important
}

.btn-size-extra-small {
    padding: 6px 10px;
    font-size: 11px;
    line-height: 16px
}

.btn-size-small {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.btn-size-default {
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px
}

.btn-size-large {
    padding: 14px 28px;
    font-size: 14px;
    line-height: 20px
}

.btn-size-extra-large {
    padding: 17px 40px;
    font-size: 16px;
    line-height: 22px
}

.btn-style-bordered.btn-size-extra-small {
    padding: 4px 10px
}

.btn-style-bordered.btn-size-small {
    padding: 8px 14px
}

.btn-style-bordered.btn-size-default {
    padding: 10px 20px
}

.btn-style-bordered.btn-size-large {
    padding: 12px 28px
}

.btn-style-bordered.btn-size-extra-large {
    padding: 15px 40px
}

.btn.btn-style-round {
    border-radius: 35px
}

.btn.btn-style-semi-round {
    border-radius: 5px
}

.btn.btn-style-3d {
    border: none;
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease,-webkit-box-shadow 0s ease
}

.btn.btn-style-3d:hover {
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15)
}

.btn.btn-style-3d:active {
    top: 1px;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn.btn-style-3d:hover {
    opacity: .8
}

.btn.btn-full-width {
    width: 100%
}

.btn.btn-style-link {
    padding: 0;
    border-width: 2px;
    border-style: solid;
    border-top: none;
    border-right: none;
    border-left: none;
    background-color: transparent !important
}

.btn.btn-style-link:hover {
    background-color: transparent !important;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn.btn-style-bordered {
    border-width: 2px
}

.btn.btn-style-bordered:not(:hover) {
    background-color: transparent !important
}

.btn.btn-style-bordered:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.btn-shape-round {
    border-radius: 35px
}

.btn-shape-semi-round {
    border-radius: 5px
}

.scrollToTop {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 350;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.9);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.17);
    box-shadow: 0 0 5px rgba(0,0,0,.17);
    color: #333;
    text-align: center;
    font-size: 0;
    opacity: 0;
    pointer-events: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateX(100%);
    transform: translateX(100%)
}

.scrollToTop.button-show {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible
}

.scrollToTop .woodmart-tooltip-label {
    display: none
}

.scrollToTop:after {
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    line-height: 50px;
    content: "\f112";
    font-family: "woodmart-font"
}

.scrollToTop:hover {
    color: #777
}

.products-footer,.portfolio-footer,.blog-footer {
    clear: both;
    text-align: center
}

.products-footer {
    margin-top: 10px
}

.woodmart-load-more {
    padding-top: 12px;
    padding-right: 25px;
    padding-bottom: 12px;
    padding-left: 25px;
    border-color: #e9e9e9;
    color: #333;
    font-weight: 900;
    border-width: 2px
}

.woodmart-load-more:not(:hover) {
    background-color: transparent !important
}

.woodmart-load-more:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-load-more:hover {
    border-color: #dcdcdc;
    background-color: transparent;
    color: #333
}

.woodmart-load-more .load-more-loading,.woodmart-load-more .load-more-label {
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.woodmart-load-more .load-more-loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0
}

.woodmart-load-more .load-more-loading:before {
    margin-right: 8px;
    margin-left: -8px;
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.woodmart-load-more.loading .load-more-loading {
    opacity: 1
}

.woodmart-load-more.loading .load-more-loading:before {
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.woodmart-load-more.loading .load-more-label {
    opacity: 0
}

.color-scheme-light .woodmart-load-more {
    border-color: rgba(255,255,255,.25);
    color: #fff
}

.color-scheme-light .woodmart-load-more .load-more-loading:before {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.color-scheme-light .woodmart-load-more:hover {
    border-color: #fff;
    color: #fff
}

.woodmart-button-wrapper.inline-element {
    margin-bottom: 10px
}

.page-title {
    position: relative;
    margin-top: -40px;
    margin-bottom: 40px
}

.page-title .entry-title {
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1.2
}

.page-title .breadcrumbs,.page-title .yoast-breadcrumb {
    margin-top: 10px
}

.page-title.color-scheme-light .entry-title {
    color: #fff
}

.title-size-small {
    padding-top: 20px;
    padding-bottom: 20px
}

.title-size-small .entry-title {
    font-size: 44px
}

.title-size-small .woodmart-checkout-steps ul li {
    font-size: 18px
}

.title-size-default {
    padding-top: 60px;
    padding-bottom: 60px
}

.title-size-default .entry-title {
    font-size: 68px
}

.title-size-large {
    padding-top: 100px;
    padding-bottom: 100px
}

.title-size-large .entry-title {
    font-size: 78px
}

.title-size-large .woodmart-checkout-steps ul li {
    font-size: 26px
}

.title-design-centered {
    text-align: center
}

.title-design-disable {
    display: none
}

.breadcrumbs {
    font-size: 0
}

.breadcrumbs > span:after,.breadcrumbs > a:after {
    content: "/";
    display: inline-block;
    padding: 0 8px
}

.breadcrumbs > span:last-child:after {
    content: none
}

.breadcrumbs,.yoast-breadcrumb {
    line-height: 16px
}

.breadcrumbs > span,.breadcrumbs > a,.yoast-breadcrumb > span,.yoast-breadcrumb > a {
    display: inline-block
}

.breadcrumbs a,.breadcrumbs span,.yoast-breadcrumb a,.yoast-breadcrumb span {
    text-transform: uppercase;
    letter-spacing: .3px;
    font-weight: 600;
    font-size: 11px
}

.breadcrumbs span,.yoast-breadcrumb span {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.color-scheme-light .breadcrumbs,.color-scheme-light .yoast-breadcrumb {
    color: #fff
}

.color-scheme-light .breadcrumbs a,.color-scheme-light .breadcrumbs span,.color-scheme-light .yoast-breadcrumb a,.color-scheme-light .yoast-breadcrumb span {
    color: #fff
}

.color-scheme-light .breadcrumbs a:hover,.color-scheme-light .yoast-breadcrumb a:hover {
    color: rgba(255,255,255,.7)
}

.item-with-label > a {
    position: relative
}

span.menu-label {
    color: #fff;
    letter-spacing: .3px;
    font-weight: 600;
    font-size: 9px;
    line-height: 12px
}

.menu-label {
    position: absolute;
    bottom: 85%;
    z-index: 1;
    display: inline-block;
    margin-left: -20px;
    padding: 2px 4px;
    vertical-align: middle;
    text-transform: uppercase;
    white-space: nowrap
}

.menu-label:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-top-width: 4px;
    border-top-color: transparent;
    border-right-color: transparent !important;
    border-bottom-width: 0;
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-right-width: 7px;
    border-left-width: 0
}

.menu-label-black {
    background-color: #000;
    color: #fff
}

.menu-label-black:before {
    border-color: #000
}

.menu-label-grey {
    background-color: #ececec;
    color: #333
}

.menu-label-grey:before {
    border-color: #ececec
}

.menu-label-orange {
    background-color: #fbbc34
}

.menu-label-orange:before {
    border-color: #fbbc34
}

.menu-label-blue {
    background-color: #00a1be
}

.menu-label-blue:before {
    border-color: #00a1be
}

.menu-label-white {
    background-color: #fff;
    color: #333
}

.menu-label-white:before {
    border-color: #fff
}

.menu-label-red {
    background-color: #d41212
}

.menu-label-red:before {
    border-color: #d41212
}

.menu-label-green {
    background-color: #65b32e
}

.menu-label-green:before {
    border-color: #65b32e
}

.sub-menu-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 380;
    background-color: #fff;
    background-position: bottom right;
    background-clip: border-box;
    background-repeat: no-repeat;
    text-align: left;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.sub-menu-dropdown > .container > p {
    display: none
}

.sub-menu-dropdown.color-scheme-light {
    background-color: #101010
}

.whb-col-right .menu-simple-dropdown .sub-menu-dropdown {
    right: 0;
    left: auto
}

.dropdowns-loading .dropdown-load-ajax.menu-mega-dropdown:not(.dropdown-with-height) > .sub-menu-dropdown {
    min-height: 400px
}

.dropdowns-loaded .dropdown-load-ajax > .sub-menu-dropdown > .container {
    -webkit-animation: wd-fadeIn .3s ease;
    animation: wd-fadeIn .3s ease
}

.dropdown-html-placeholder {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: rgba(255,255,255,.6)
}

.dropdown-html-placeholder:after {
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.dropdowns-loading .dropdown-html-placeholder:after {
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.sub-menu-dropdown.color-scheme-light .dropdown-html-placeholder {
    background-color: rgba(0,0,0,.6)
}

.sub-menu-dropdown.color-scheme-light .dropdown-html-placeholder:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.menu-simple-dropdown .sub-menu-dropdown,.menu-simple-dropdown .sub-sub-menu {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 200px
}

.menu-simple-dropdown .sub-menu-dropdown > .container {
    padding: 0;
    width: auto
}

.menu-simple-dropdown .sub-sub-menu {
    position: absolute;
    top: 0;
    left: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.menu-simple-dropdown li {
    position: relative;
    display: block;
    margin-bottom: 0
}

.menu-simple-dropdown li a {
    position: relative;
    display: block;
    padding-top: 10px;
    padding-right: 22px;
    padding-bottom: 10px;
    padding-left: 22px;
    font-size: 14px;
    line-height: 20px
}

.menu-simple-dropdown li:last-child > a {
    border-bottom: none
}

.menu-simple-dropdown .menu-item-has-children > a {
    padding-right: 30px
}

.menu-simple-dropdown .menu-item-has-children > a:after {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -7px;
    color: rgba(82,82,82,.45);
    font-family: "FontAwesome";
    line-height: 14px;
    content: "\f105"
}

.menu-simple-dropdown .color-scheme-light .sub-sub-menu {
    background-color: #101010
}

.menu-simple-dropdown .color-scheme-light .menu-item-has-children > a:after {
    color: rgba(255,255,255,.6)
}

.menu-item-design-sized .sub-menu-dropdown {
    padding-top: 30px;
    padding-right: 35px;
    padding-left: 35px
}

.menu-item-design-sized .sub-menu-dropdown > .container {
    padding: 0;
    width: auto
}

.menu-item-design-full-width .sub-menu-dropdown {
    padding-top: 30px;
    width: 100vw
}

.platform-Windows .menu-item-design-full-width .sub-menu-dropdown {
    padding-left: 17px
}

.menu-mega-dropdown .sub-menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px
}

.menu-mega-dropdown .sub-menu > li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 220px;
    flex: 0 0 220px;
    margin-bottom: 25px;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 220px
}

.menu-mega-dropdown .vc_row .sub-menu > li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}

.woodmart-widget .menu-mega-dropdown .sub-menu > li {
    margin-bottom: 25px
}

.woodmart-widget .menu-mega-dropdown .sub-sub-menu li {
    margin-bottom: 0
}

.mega-menu-list > li > a {
    color: #2d2a2a
}

.mega-menu-list .sub-sub-menu li a {
    color: #777
}

.color-scheme-light .mega-menu-list > li > a {
    color: #fff
}

.color-scheme-light .mega-menu-list > li > a:hover {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .mega-menu-list .sub-sub-menu li a {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .mega-menu-list .sub-sub-menu li a:hover {
    color: #fff
}

.create-nav-msg {
    display: block;
    font-size: 16px
}

.create-nav-msg a {
    font-weight: 600
}

.woodmart-navigation .menu {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.woodmart-navigation .menu li a i {
    margin-right: 7px;
    font-size: 115%
}

.woodmart-navigation .category-icon {
    display: inline-block;
    margin-right: 7px;
    max-height: 18px
}

.woodmart-navigation .item-level-0 > a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-right: 10px;
    padding-left: 10px;
    text-transform: uppercase;
    letter-spacing: .2px;
    line-height: 1
}

.woodmart-navigation .item-level-0 > a .menu-label {
    left: calc(100% - 30px);
    margin-left: 0
}

.woodmart-navigation .item-level-0.menu-item-has-children {
    position: relative
}

.woodmart-navigation .item-level-0.menu-item-has-children > a {
    position: relative
}

.woodmart-navigation .item-level-0.menu-item-has-children > a:after {
    margin-left: 4px;
    color: rgba(82,82,82,.45);
    font-weight: normal;
    font-style: normal;
    font-size: 100%;
    font-family: "FontAwesome";
    content: "\f107"
}

.woodmart-navigation .item-level-0.menu-item-has-children > a .menu-label {
    left: calc(100% - 38px)
}

.woodmart-navigation.menu-center {
    text-align: center
}

.woodmart-navigation.menu-right {
    text-align: right
}

.woodmart-navigation.menu-left {
    text-align: left
}

.main-nav {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.main-nav .item-level-0 > a {
    height: 40px;
    font-weight: 600;
    font-size: 13px
}

.main-nav .item-level-0.callto-btn > a {
    margin-right: 10px;
    margin-left: 10px;
    height: auto !important;
    color: #fff !important;
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    position: relative;
    display: inline-block;
    outline: none;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: .3px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease
}

.main-nav .item-level-0.callto-btn > a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.main-nav .item-level-0.callto-btn > a:hover {
    text-decoration: none
}

.main-nav .item-level-0.callto-btn > a:focus {
    outline: none
}

.main-nav .item-level-0.callto-btn > a:after {
    content: none
}

.main-nav .item-level-0.callto-btn > a .nav-link-text:after {
    content: none
}

.whb-secondary-menu {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.whb-secondary-menu .item-level-0 > a {
    height: 40px;
    font-weight: 600;
    font-size: 13px
}

.whb-secondary-menu .menu-simple-dropdown .sub-menu-dropdown,.whb-secondary-menu .menu-simple-dropdown .sub-sub-menu {
    width: 165px
}

.whb-secondary-menu .menu-simple-dropdown li a {
    padding-top: 8px;
    padding-right: 18px;
    padding-bottom: 8px;
    padding-left: 18px
}

.whb-secondary-menu .menu-simple-dropdown li.menu-item-has-children > a {
    padding-right: 20px
}

.whb-secondary-menu .menu-simple-dropdown li.menu-item-has-children:after {
    right: 15px
}

.whb-top-bar .whb-secondary-menu .item-level-0 > a {
    font-weight: 400;
    font-size: 12px
}

.navigation-style-underline .nav-link-text {
    line-height: 1.2
}

.navigation-style-separated .item-level-0,.navigation-style-bordered .item-level-0 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.navigation-style-separated .item-level-0:not(:last-child):after,.navigation-style-bordered .item-level-0:not(:last-child):after {
    content: "";
    border-right: 1px solid
}

.navigation-style-separated .item-level-0 {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.navigation-style-separated .item-level-0:not(:last-child):after {
    height: 18px
}

.navigation-style-bordered .item-level-0 {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

.vertical-navigation {
    position: relative
}

.vertical-navigation .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 1px solid rgba(129,129,129,.2);
    background-color: #fff
}

.vertical-navigation .item-level-0 {
    display: block;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(129,129,129,.15)
}

.vertical-navigation .item-level-0 > a {
    padding: 12px 18px;
    color: #333;
    text-transform: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px
}

.vertical-navigation .item-level-0.menu-item-has-children:not(.menu-simple-dropdown) {
    position: static
}

.vertical-navigation .item-level-0.menu-item-has-children > a {
    padding-right: 25px
}

.vertical-navigation .item-level-0.menu-item-has-children > a:after {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -7px;
    margin-left: 0;
    font-size: 14px;
    line-height: 14px;
    content: ""
}

.vertical-navigation .item-level-0:last-child {
    border-bottom: none
}

.vertical-navigation .item-level-0:hover > a {
    background-color: #f9f9f9;
    color: #494949
}

.vertical-navigation .sub-menu-dropdown {
    top: 0;
    left: 100%
}

.vertical-navigation .menu-item-design-full-width .sub-menu-dropdown {
    padding-top: 30px;
    padding-right: 35px;
    padding-left: 35px;
    width: 800px
}

.vertical-navigation .menu-item-design-full-width .sub-menu-dropdown > .container {
    padding: 0;
    width: auto
}

.woodmart-dark .vertical-navigation .menu,.dropdowns-color-light .header-categories-nav .menu {
    border-color: rgba(255,255,255,.15);
    background-color: #101010
}

.woodmart-dark .vertical-navigation .item-level-0,.dropdowns-color-light .header-categories-nav .item-level-0 {
    border-color: rgba(255,255,255,.15)
}

.woodmart-dark .vertical-navigation .item-level-0 a,.dropdowns-color-light .header-categories-nav .item-level-0 a {
    color: #fff
}

.woodmart-dark .vertical-navigation .item-level-0.menu-item-has-children > a:after,.dropdowns-color-light .header-categories-nav .item-level-0.menu-item-has-children > a:after {
    color: rgba(255,255,255,.6)
}

.woodmart-dark .vertical-navigation .item-level-0:hover > a,.dropdowns-color-light .header-categories-nav .item-level-0:hover > a {
    background-color: rgba(255,255,255,.05);
    color: #fff
}

.full-screen-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 400;
    visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: rgba(0,0,0,.9);
    text-align: center;
    opacity: 0;
    -webkit-transition: visibility .2s ease,opacity .2s ease;
    transition: visibility .2s ease,opacity .2s ease
}

.full-screen-wrapper:before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle
}

.full-screen-wrapper .full-screen-inner {
    display: inline-block;
    max-width: 700px;
    width: 100%;
    vertical-align: middle;
    text-align: left
}

.full-screen-wrapper .create-nav-msg {
    color: rgba(255,255,255,.8);
    text-align: center
}

.full-screen-wrapper .create-nav-msg a {
    color: rgba(255,255,255,.9)
}

.full-screen-wrapper .create-nav-msg a:hover {
    color: #fff
}

.platform-Windows .full-screen-wrapper {
    margin-right: -18px
}

.platform-Windows.browser-Edge .full-screen-wrapper {
    margin-right: -13px
}

.icon-sub-fs {
    position: absolute;
    top: 9px;
    right: 0;
    z-index: 10;
    width: 55px;
    height: 55px;
    color: #fff;
    text-align: center;
    font-size: 0;
    line-height: 55px;
    cursor: pointer;
    -webkit-transition: color .3s ease,background-color .3s ease;
    transition: color .3s ease,background-color .3s ease
}

.icon-sub-fs:after {
    display: inline-block;
    font-weight: normal;
    font-size: 18px;
    font-family: "FontAwesome";
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    content: "\f107"
}

.icon-sub-fs:hover,.icon-sub-fs.up-icon {
    background-color: rgba(255,255,255,.04)
}

.icon-sub-fs.up-icon:after {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg)
}

.full-screen-nav .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.full-screen-nav .item-level-0 {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    width: 100%
}

.full-screen-nav .item-level-0 > a {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
    font-weight: 600;
    font-size: 22px !important
}

.full-screen-nav .item-level-0 > a > span,.full-screen-nav .item-level-0 > a .category-icon,.full-screen-nav .item-level-0 > a i {
    display: inline-block;
    -webkit-transition: -webkit-transform .4s cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
    transition: -webkit-transform .4s cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
    transition: transform .4s cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
    transition: transform .4s cubic-bezier(0.165, 0.84, 0.44, 1) .2s, -webkit-transform .4s cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
    -webkit-transform: translate3d(0, 80px, 0);
    transform: translate3d(0, 80px, 0)
}

.full-screen-nav .item-level-0 > a .menu-label {
    bottom: 70%;
    left: 50% !important
}

.full-screen-nav .item-level-0.menu-item-has-children > a:after {
    content: none
}

.full-screen-nav .item-level-0 > .icon-sub-fs:after {
    opacity: 0
}

.full-screen-nav .sub-menu-dropdown {
    position: static;
    display: none;
    visibility: visible;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible;
    pointer-events: unset
}

.full-screen-nav .sub-menu-open > .sub-menu-dropdown {
    display: block;
    -webkit-animation: wd-fadeIn .6s ease;
    animation: wd-fadeIn .6s ease
}

.full-screen-nav .menu-simple-dropdown li a {
    font-size: 16px
}

.full-screen-nav .menu-simple-dropdown .sub-menu-dropdown {
    text-align: center
}

.full-screen-nav .menu-simple-dropdown .sub-menu-dropdown .icon-sub-fs {
    top: 0;
    height: 40px;
    line-height: 40px
}

.full-screen-nav .menu-simple-dropdown .sub-menu-dropdown,.full-screen-nav .menu-simple-dropdown .sub-sub-menu {
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
    width: auto
}

.full-screen-nav .menu-simple-dropdown .sub-sub-menu {
    position: static;
    display: none;
    visibility: visible;
    background-color: transparent !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.full-screen-nav .menu-simple-dropdown .sub-menu-open > .sub-sub-menu {
    display: block;
    -webkit-animation: wd-fadeIn .6s ease;
    animation: wd-fadeIn .6s ease
}

.full-screen-nav .menu-simple-dropdown .menu-item-has-children > a {
    padding-right: 22px
}

.full-screen-nav .menu-simple-dropdown .menu-item-has-children > a:after {
    content: none
}

.full-screen-nav .menu-mega-dropdown .sub-menu {
    text-align: center
}

.full-screen-nav .menu-mega-dropdown .sub-menu > li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.3%;
    flex: 0 0 33.3%;
    max-width: 33.3%
}

.full-screen-nav .menu-mega-dropdown .sub-menu > li > a {
    font-size: 16px
}

.full-screen-nav .menu-mega-dropdown .vc_row .sub-menu > li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}

.full-screen-nav .menu-mega-dropdown .sub-sub-menu li a {
    font-size: 16px
}

.full-screen-nav .menu-mega-dropdown .sub-menu-dropdown {
    width: auto !important
}

.full-screen-nav .menu-item-design-full-width .sub-menu-dropdown {
    padding-top: 10px;
    padding-left: 0
}

.full-screen-nav .menu-item-design-sized .sub-menu-dropdown {
    margin: 0 auto;
    padding-top: 10px;
    padding-right: 0;
    padding-left: 0
}

.full-screen-nav .menu-simple-dropdown li a {
    color: rgba(255,255,255,.6)
}

.full-screen-nav .menu-simple-dropdown li a:hover {
    color: #fff
}

.full-screen-menu-open {
    overflow: hidden
}

.full-screen-menu-open .full-screen-wrapper {
    visibility: visible;
    opacity: 1;
    -webkit-transition: visibility .3s ease,opacity .3s ease;
    transition: visibility .3s ease,opacity .3s ease
}

.full-screen-menu-open .item-level-0 > a > span,.full-screen-menu-open .item-level-0 > a .category-icon,.full-screen-menu-open .item-level-0 > a i {
    -webkit-transform: none;
    transform: none
}

.full-screen-menu-open .item-level-0 > .icon-sub-fs:after {
    opacity: 1
}

.full-screen-menu-open .item-level-0:nth-child(1) > a > span,.full-screen-menu-open .item-level-0:nth-child(1) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(1) > a i {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s
}

.full-screen-menu-open .item-level-0:nth-child(1) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s
}

.full-screen-menu-open .item-level-0:nth-child(2) > a > span,.full-screen-menu-open .item-level-0:nth-child(2) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(2) > a i {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s
}

.full-screen-menu-open .item-level-0:nth-child(2) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s
}

.full-screen-menu-open .item-level-0:nth-child(3) > a > span,.full-screen-menu-open .item-level-0:nth-child(3) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(3) > a i {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s
}

.full-screen-menu-open .item-level-0:nth-child(3) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s
}

.full-screen-menu-open .item-level-0:nth-child(4) > a > span,.full-screen-menu-open .item-level-0:nth-child(4) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(4) > a i {
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s
}

.full-screen-menu-open .item-level-0:nth-child(4) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s
}

.full-screen-menu-open .item-level-0:nth-child(5) > a > span,.full-screen-menu-open .item-level-0:nth-child(5) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(5) > a i {
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s
}

.full-screen-menu-open .item-level-0:nth-child(5) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.7s;
    transition-delay: 0.7s
}

.full-screen-menu-open .item-level-0:nth-child(6) > a > span,.full-screen-menu-open .item-level-0:nth-child(6) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(6) > a i {
    -webkit-transition-delay: 0.7s;
    transition-delay: 0.7s
}

.full-screen-menu-open .item-level-0:nth-child(6) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.8s;
    transition-delay: 0.8s
}

.full-screen-menu-open .item-level-0:nth-child(7) > a > span,.full-screen-menu-open .item-level-0:nth-child(7) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(7) > a i {
    -webkit-transition-delay: 0.8s;
    transition-delay: 0.8s
}

.full-screen-menu-open .item-level-0:nth-child(7) > .icon-sub-fs:after {
    -webkit-transition-delay: 0.9s;
    transition-delay: 0.9s
}

.full-screen-menu-open .item-level-0:nth-child(8) > a > span,.full-screen-menu-open .item-level-0:nth-child(8) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(8) > a i {
    -webkit-transition-delay: 0.9s;
    transition-delay: 0.9s
}

.full-screen-menu-open .item-level-0:nth-child(8) > .icon-sub-fs:after {
    -webkit-transition-delay: 1s;
    transition-delay: 1s
}

.full-screen-menu-open .item-level-0:nth-child(9) > a > span,.full-screen-menu-open .item-level-0:nth-child(9) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(9) > a i {
    -webkit-transition-delay: 1s;
    transition-delay: 1s
}

.full-screen-menu-open .item-level-0:nth-child(9) > .icon-sub-fs:after {
    -webkit-transition-delay: 1.1s;
    transition-delay: 1.1s
}

.full-screen-menu-open .item-level-0:nth-child(10) > a > span,.full-screen-menu-open .item-level-0:nth-child(10) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(10) > a i {
    -webkit-transition-delay: 1.1s;
    transition-delay: 1.1s
}

.full-screen-menu-open .item-level-0:nth-child(10) > .icon-sub-fs:after {
    -webkit-transition-delay: 1.2s;
    transition-delay: 1.2s
}

.full-screen-menu-open .item-level-0:nth-child(11) > a > span,.full-screen-menu-open .item-level-0:nth-child(11) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(11) > a i {
    -webkit-transition-delay: 1.2s;
    transition-delay: 1.2s
}

.full-screen-menu-open .item-level-0:nth-child(11) > .icon-sub-fs:after {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s
}

.full-screen-menu-open .item-level-0:nth-child(12) > a > span,.full-screen-menu-open .item-level-0:nth-child(12) > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(12) > a i {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s
}

.full-screen-menu-open .item-level-0:nth-child(12) > .icon-sub-fs:after {
    -webkit-transition-delay: 1.4s;
    transition-delay: 1.4s
}

.full-screen-menu-open .item-level-0:nth-child(12) + li > a > span,.full-screen-menu-open .item-level-0:nth-child(12) + li > a .category-icon,.full-screen-menu-open .item-level-0:nth-child(12) + li > a i {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s
}

.full-screen-menu-open .item-level-0:nth-child(12) + li > .icon-sub-fs:after {
    -webkit-transition-delay: 1.4s;
    transition-delay: 1.4s
}

.mobile-nav .searchform {
    z-index: 2;
    -webkit-box-shadow: 0 -1px 9px rgba(0,0,0,.17);
    box-shadow: 0 -1px 9px rgba(0,0,0,.17)
}

.mobile-nav .searchform input[type=text] {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 50px;
    padding-left: 20px;
    height: 70px;
    border: none;
    font-weight: 600
}

.mobile-nav .search-results-wrapper .woodmart-scroll {
    position: static
}

.mobile-nav .search-results-wrapper .woodmart-scroll-content {
    max-height: 60vh
}

.mobile-nav .autocomplete-suggestion {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px
}

.mobile-nav .create-nav-msg {
    padding: 20px;
    border-bottom: 1px solid
}

.dropdowns-color-light .mobile-nav .create-nav-msg {
    border-color: rgba(255,255,255,.15);
    color: rgba(255,255,255,.8)
}

.site-mobile-menu li {
    position: relative;
    display: block
}

.site-mobile-menu li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 5px;
    padding-right: 20px;
    padding-bottom: 5px;
    padding-left: 20px;
    min-height: 50px;
    border-bottom: 1px solid rgba(129,129,129,.2);
    color: #2d2a2a;
    text-transform: uppercase;
    letter-spacing: .2px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1.3
}

.site-mobile-menu li a .category-icon {
    margin-right: 7px;
    max-height: 19px
}

.site-mobile-menu li a i {
    margin-right: 7px;
    font-size: 115%
}

.site-mobile-menu li:active > a,.site-mobile-menu li.opener-page > a {
    background-color: rgba(0,0,0,.04)
}

.site-mobile-menu li.menu-item-has-children > a {
    padding-right: 60px
}

.site-mobile-menu li.menu-item-has-block > a {
    padding-right: 20px
}

.site-mobile-menu li.menu-item-has-block > .icon-sub-menu {
    display: none
}

.site-mobile-menu .sub-menu-dropdown {
    position: static;
    visibility: visible;
    margin: 0;
    padding: 0;
    width: auto;
    background: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible;
    pointer-events: unset
}

.site-mobile-menu .sub-menu-dropdown:after {
    content: none
}

.site-mobile-menu .sub-menu-dropdown .container {
    padding-right: 0;
    padding-left: 0;
    width: auto
}

.site-mobile-menu .sub-menu,.site-mobile-menu .sub-sub-menu {
    display: none
}

.site-mobile-menu .sub-menu li a {
    color: #777;
    text-transform: none;
    font-size: 14px
}

.site-mobile-menu .menu-item-has-children:after {
    content: none
}

.site-mobile-menu .my-account-with-username > a strong {
    margin-left: 5px
}

.site-mobile-menu .my-account-with-text > a:before {
    display: inline-block;
    margin-right: 7px;
    letter-spacing: 0;
    font-size: 12px;
    line-height: 1;
    content: "\f11e";
    font-family: "woodmart-font"
}

.site-mobile-menu .menu-item-register > a {
    padding-right: 20px !important
}

.site-mobile-menu .menu-item-register > .icon-sub-menu {
    display: none
}

.dropdowns-color-light .site-mobile-menu li a {
    border-color: rgba(255,255,255,.15);
    color: #fff
}

.dropdowns-color-light .site-mobile-menu li:active > a,.dropdowns-color-light .site-mobile-menu li.opener-page > a {
    background-color: rgba(0,0,0,.9)
}

.dropdowns-color-light .site-mobile-menu .sub-menu li a {
    color: rgba(255,255,255,.8)
}

.mobile-nav-tabs {
    border-bottom: 1px solid rgba(129,129,129,.2);
    background-color: rgba(0,0,0,.04)
}

.mobile-nav-tabs > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.mobile-nav-tabs .mobile-tab-title {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 50%;
    flex: 1 0 50%;
    padding: 18px 15px;
    max-width: 50%;
    width: 50%;
    color: #909090;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .3px;
    font-weight: 900;
    font-size: 14px;
    line-height: 1.3;
    cursor: pointer;
    -webkit-transition: background-color .25s ease,color .25s ease;
    transition: background-color .25s ease,color .25s ease
}

.mobile-nav-tabs .mobile-tab-title:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: -1px;
    width: 0;
    height: 2px;
    -webkit-transition: width .25s ease;
    transition: width .25s ease
}

.mobile-nav-tabs .mobile-pages-title:after {
    right: 0;
    left: auto
}

.mobile-nav-tabs .active {
    background-color: rgba(0,0,0,.05);
    color: #333
}

.mobile-nav-tabs .active:after {
    width: 100%
}

.dropdowns-color-light .mobile-nav-tabs {
    border-color: rgba(255,255,255,.15);
    background-color: rgba(0,0,0,.9)
}

.dropdowns-color-light .mobile-nav-tabs .mobile-tab-title {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .mobile-nav-tabs .active {
    background-color: rgba(0,0,0,.3);
    color: #fff
}

.mobile-menu-tab {
    display: none;
    -webkit-animation: wd-fadeIn 1s ease;
    animation: wd-fadeIn 1s ease
}

.mobile-menu-tab.active {
    display: block
}

.icon-sub-menu {
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 0;
    width: 50px;
    height: 50px;
    border-left: 1px solid rgba(129,129,129,.2);
    color: #2d2a2a;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    -webkit-transition: background-color .25s ease,color .25s ease;
    transition: background-color .25s ease,color .25s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.icon-sub-menu:after {
    display: inline-block;
    font-weight: bold;
    font-size: 12px;
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    content: "\f110";
    font-family: "woodmart-font"
}

.icon-sub-menu.up-icon {
    color: #fff
}

.icon-sub-menu.up-icon:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.dropdowns-color-light .icon-sub-menu {
    border-color: rgba(255,255,255,.15);
    color: #fff
}

input[type=email],input[type=search],input[type=number],input[type=url],input[type=tel],input[type=text],input[type=password],textarea,select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

input[type=email],input[type=date],input[type=search],input[type=number],input[type=text],input[type=tel],input[type=url],input[type=password],textarea,select {
    padding: 0 15px;
    max-width: 100%;
    width: 100%;
    height: 42px;
    border: 2px solid rgba(129,129,129,.2);
    border-radius: 0;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    font-size: 14px;
    -webkit-transition: border-color .5s ease;
    transition: border-color .5s ease
}

input[type=email]:focus,input[type=date]:focus,input[type=search]:focus,input[type=number]:focus,input[type=text]:focus,input[type=tel]:focus,input[type=url]:focus,input[type=password]:focus,textarea:focus,select:focus {
    outline: none;
    border-color: rgba(129,129,129,.3);
    -webkit-transition: border-color .4s ease;
    transition: border-color .4s ease
}

button::-moz-focus-inner,input::-moz-focus-inner {
    padding: 0;
    border: 0
}

input[type=radio],input[type=checkbox] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 0;
    margin-right: 5px;
    padding: 0;
    vertical-align: middle
}

input[type=search] {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-appearance: textfield
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

input[type=number] {
    padding: 0;
    text-align: center
}

input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    height: auto
}

textarea {
    overflow: auto;
    padding: 10px 15px;
    min-height: 190px
}

select {
    padding-right: 30px;
    background-position: right 10px top 50%;
    background-size: auto 18px;
    background-repeat: no-repeat
}

select::-ms-expand {
    display: none
}

input:-webkit-autofill {
    border-color: #e6e6e6;
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: #777
}

input:focus:-webkit-autofill {
    border-color: #d9d9d9
}

.color-scheme-light textarea,.color-scheme-light select,.color-scheme-light input[type=email],.color-scheme-light input[type=date],.color-scheme-light input[type=search],.color-scheme-light input[type=number],.color-scheme-light input[type=text],.color-scheme-light input[type=tel],.color-scheme-light input[type=url],.color-scheme-light input[type=password] {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
}

.color-scheme-light select option {
    background-color: #101010;
    color: rgba(255,255,255,.8)
}

.color-scheme-light ::-webkit-input-placeholder {
    color: rgba(255,255,255,.6)
}

.color-scheme-light ::-moz-placeholder {
    color: rgba(255,255,255,.6)
}

.color-scheme-light :-moz-placeholder {
    color: rgba(255,255,255,.6)
}

.color-scheme-light :-ms-input-placeholder {
    color: rgba(255,255,255,.6)
}

.color-scheme-light textarea,.color-scheme-light select,.color-scheme-light input[type=email],.color-scheme-light input[type=date],.color-scheme-light input[type=search],.color-scheme-light input[type=number],.color-scheme-light input[type=text],.color-scheme-light input[type=tel],.color-scheme-light input[type=url],.color-scheme-light input[type=password] {
    border-color: rgba(255,255,255,.25)
}

.color-scheme-light textarea:focus,.color-scheme-light select:focus,.color-scheme-light input[type=email]:focus,.color-scheme-light input[type=date]:focus,.color-scheme-light input[type=search]:focus,.color-scheme-light input[type=number]:focus,.color-scheme-light input[type=text]:focus,.color-scheme-light input[type=tel]:focus,.color-scheme-light input[type=url]:focus,.color-scheme-light input[type=password]:focus {
    border-color: rgba(255,255,255,.5)
}

.form-border-width-1 input[type=email],.form-border-width-1 input[type=date],.form-border-width-1 input[type=search],.form-border-width-1 input[type=number],.form-border-width-1 input[type=text],.form-border-width-1 input[type=tel],.form-border-width-1 input[type=url],.form-border-width-1 input[type=password],.form-border-width-1 textarea,.form-border-width-1 select {
    border-width: 1px
}

.form-border-width-1 .quantity input[type=button] {
    border-width: 1px
}

.form-border-width-1 .select2-container .select2-dropdown {
    border-width: 1px
}

.form-border-width-1 .select2-container--default .select2-selection {
    border-width: 1px
}

.form-border-width-1 .select2-container--default .select2-search--dropdown {
    border-width: 1px
}

.form-border-width-1 .select2-container--default .select2-search--dropdown .select2-search__field {
    border-width: 1px
}

.form-border-width-1 .select2-container--default.select2-container--focus .select2-selection--multiple {
    border-width: 1px
}

.form-border-width-1 .search-by-category {
    top: 1px
}

.form-border-width-1 .search-by-category .input-dropdown-inner {
    height: 44px;
    line-height: 44px
}

.form-border-width-1 .woodmart-pf-title {
    border-width: 1px
}

.form-style-rounded input[type=email],.form-style-rounded input[type=date],.form-style-rounded input[type=search],.form-style-rounded input[type=number],.form-style-rounded input[type=text],.form-style-rounded input[type=tel],.form-style-rounded input[type=url],.form-style-rounded input[type=password],.form-style-rounded select {
    border-radius: 30px
}

.form-style-rounded textarea {
    border-radius: 20px
}

.form-style-rounded .quantity input[type=number] {
    border-radius: 0
}

.form-style-rounded .quantity .minus {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px
}

.form-style-rounded .quantity .plus {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px
}

.form-style-rounded .select2-container--default .select2-selection {
    border-radius: 20px
}

.form-style-rounded .select2-container--default input[type=text] {
    border-radius: 0
}

.form-style-rounded .search-results-wrapper .woodmart-scroll {
    right: 20px;
    left: 20px
}

.form-style-rounded .woodmart-search-dropdown .woodmart-scroll {
    right: 0;
    left: 0
}

.form-style-rounded .woocommerce-ordering select {
    border-radius: 0
}

.form-style-rounded .woodmart-pf-title {
    border-radius: 30px
}

.form-style-rounded .woodmart-pf-dropdown {
    right: 20px;
    left: 20px
}

.form-style-semi-rounded input[type=email],.form-style-semi-rounded input[type=date],.form-style-semi-rounded input[type=search],.form-style-semi-rounded input[type=number],.form-style-semi-rounded input[type=text],.form-style-semi-rounded input[type=tel],.form-style-semi-rounded input[type=url],.form-style-semi-rounded input[type=password],.form-style-semi-rounded select {
    border-radius: 5px
}

.form-style-semi-rounded textarea {
    border-radius: 5px
}

.form-style-semi-rounded .quantity input[type=number] {
    border-radius: 0
}

.form-style-semi-rounded .quantity .minus {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px
}

.form-style-semi-rounded .quantity .plus {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px
}

.form-style-semi-rounded .select2-container--default .select2-selection {
    border-radius: 5px
}

.form-style-semi-rounded .search-results-wrapper .woodmart-scroll {
    right: 5px;
    left: 5px
}

.form-style-semi-rounded .woodmart-search-dropdown .woodmart-scroll {
    right: 0;
    left: 0
}

.form-style-semi-rounded .woocommerce-ordering select {
    border-radius: 0
}

.form-style-semi-rounded .woodmart-pf-title {
    border-radius: 5px
}

.form-style-semi-rounded .woodmart-pf-dropdown {
    right: 8px;
    left: 8px
}

.form-style-underlined label {
    margin-bottom: -5px;
    font-weight: 600;
    line-height: 22px
}

.form-style-underlined input[type=email],.form-style-underlined input[type=date],.form-style-underlined input[type=search],.form-style-underlined input[type=number],.form-style-underlined input[type=text],.form-style-underlined input[type=tel],.form-style-underlined input[type=url],.form-style-underlined input[type=password],.form-style-underlined select,.form-style-underlined textarea {
    padding: 0 2px;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none
}

.form-style-underlined select {
    background-position: right 0 top 50%
}

.form-style-underlined textarea {
    padding-top: 12px;
    padding-bottom: 12px;
    min-height: 80px
}

.form-style-underlined .quantity input[type=number] {
    border-top-style: solid
}

.form-style-underlined .woocommerce-input-wrapper {
    width: 100%
}

.form-style-underlined .select2-container--default .select2-selection {
    padding-right: 0;
    padding-left: 0;
    border-top: none;
    border-right: none;
    border-left: none
}

.form-style-underlined .select2-container--default .select2-selection .select2-selection__arrow {
    right: 0 !important
}

.form-style-underlined .select2-container--default .select2-selection--multiple .select2-selection__rendered {
    padding-right: 0;
    padding-left: 0
}

.form-style-underlined .select2-container--default.select2-container--focus .select2-selection--multiple {
    border-top: none;
    border-right: none;
    border-left: none
}

.form-style-underlined .woocommerce-billing-fields .select2-container--default .select2-selection--single,.form-style-underlined .woocommerce-shipping-fields .select2-container--default .select2-selection--single {
    border-bottom: none
}

.form-style-underlined .select2-container--open .select2-dropdown--below {
    border-top: 2px solid rgba(129,129,129,.2)
}

.form-style-underlined .select2-container--open .select2-dropdown--above {
    border-bottom: 2px solid rgba(129,129,129,.2)
}

.form-style-underlined .searchform input[type=text] {
    padding-right: 50px
}

.form-style-underlined .has-categories-dropdown input[type=text] {
    padding: 0 15px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid
}

.form-style-underlined .woodmart-search-full-screen input[type=text] {
    padding-right: 0
}

.form-style-underlined .woodmart-search-dropdown input[type=text] {
    padding-left: 15px;
    border: none
}

.form-style-underlined .mobile-nav .searchform input[type=text] {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 50px;
    padding-left: 18px;
    border: none
}

.form-style-underlined .woodmart-pf-title {
    padding-left: 0;
    padding-right: 30px;
    border-top: none;
    border-right: none;
    border-left: none
}

.form-style-underlined .woodmart-pf-title:after {
    right: 7px
}

.form-style-underlined .comment-form > p {
    margin-right: 10px;
    margin-left: 10px;
    padding-right: 0;
    padding-left: 0
}

.form-style-underlined .comment-form-comment {
    margin-bottom: 30px
}

.form-style-underlined .menu-item-register .form-row-username,.form-style-underlined .menu-item-register .form-row-password {
    margin-bottom: 25px
}

.comment-form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px
}

.comment-form > p,.comment-form .comment-form-rating {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 220px;
    flex: 1 1 220px;
    margin-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px
}

.comment-form .comment-notes,.comment-form .comment-form-comment,.comment-form .form-submit,.comment-form .comment-form-rating,.comment-form .comment-form-cookies-consent {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
    width: 100%
}

.comment-form .comment-form-cookies-consent label {
    display: inline
}

.comment-form .comment-form-rating label {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 15px
}

.comment-form .comment-form-rating label:after {
    content: ":";
    margin-left: 2px
}

.comment-form .comment-notes,.comment-form .comment-form-rating {
    margin-bottom: 20px
}

.comment-form .form-submit {
    margin-top: 15px
}

.comment-form .submit {
    color: #fff
}

.comment-form .submit:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

#comments .avatar,.woodmart-user-panel .avatar {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    margin-left: 0
}

.comments-area .comment-reply-title small {
    vertical-align: middle
}

.comments-area .comment-list {
    margin-bottom: 50px;
    line-height: 1.6
}

.comments-area .comment {
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid
}

.comments-area .pingback {
    margin-bottom: 15px
}

.comments-area .pingback .comment-body {
    padding-left: 0
}

.comments-area .pingback a {
    font-weight: 600
}

.comments-area .children {
    margin-top: 30px;
    margin-bottom: 0;
    margin-left: 30px;
    border-top: 1px solid;
    line-height: 1.6
}

.comments-area .children .comment:last-child {
    padding-bottom: 0;
    border-bottom: none
}

.comments-area #cancel-comment-reply-link {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 0
}

.comments-area #cancel-comment-reply-link:after {
    font-size: 12px;
    content: "\f10f";
    font-family: "woodmart-font"
}

.comments-area .comment-body {
    position: relative;
    padding-left: 95px
}

.comments-area .comment-awaiting-moderation {
    position: absolute;
    top: -24px;
    left: 95px
}

.comments-area .comment-awaiting-moderation + br {
    display: none
}

.comments-area .comment-edit-link {
    display: inline-block;
    margin-left: 5px;
    font-size: 0
}

.comments-area .comment-edit-link:after {
    vertical-align: middle;
    font-size: 12px;
    content: "\f113";
    font-family: "woodmart-font"
}

.comments-area .comment-author {
    float: left;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 20px
}

.comments-area .comment-author:first-letter {
    text-transform: uppercase
}

.comments-area .comment-author .fn {
    color: #2d2a2a;
    vertical-align: top;
    font-weight: 600;
    font-style: normal
}

.comments-area .comment-author .says {
    margin-left: 3px;
    vertical-align: top
}

.comments-area .comment-author img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 74px;
    width: 100%;
    border-radius: 50%
}

.comments-area .comment-meta {
    margin-bottom: 15px;
    text-align: right;
    font-size: 14px;
    line-height: 20px
}

.comments-area .comment-meta a {
    color: #bbb;
    vertical-align: middle
}

.comments-area .reply {
    margin-top: 15px
}

.comments-area .reply a {
    text-transform: uppercase;
    font-weight: 900
}

.comments-area .reply a:hover {
    opacity: .7
}

.comments-area .comment-respond {
    margin-top: 30px
}

.comments-area .logged-in-as {
    margin-bottom: 20px;
    font-size: 0
}

.comments-area .logged-in-as > a {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 14px
}

.comments-area .logged-in-as > a:not(:last-child) {
    margin-right: 12px;
    padding-right: 10px;
    border-right: 1px solid
}

.comments-area .no-comments {
    color: #333;
    font-weight: 600
}

.admin-bar .cart-widget-side,.admin-bar .mobile-nav,.admin-bar #cboxClose,.admin-bar button.mfp-close,.admin-bar .full-screen-close-icon,.admin-bar .header-banner {
    top: 32px
}

.woodmart-close-side {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 400;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(0,0,0,.7);
    -webkit-transition: opacity .25s ease,visibility 0s ease .25s;
    transition: opacity .25s ease,visibility 0s ease .25s
}

.woodmart-close-side-opened {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity .25s ease,visibility 0s ease;
    transition: opacity .25s ease,visibility 0s ease
}

.woodmart-lazy-load {
    width: 100%;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.owl-carousel .woodmart-lazy-load {
    -webkit-transform: none;
    transform: none
}

.woodmart-lazy-blur {
    -webkit-filter: blur(2vw);
    filter: blur(2vw)
}

.woodmart-lazy-blur.woodmart-loaded {
    -webkit-filter: blur(0);
    filter: blur(0)
}

.woodmart-lazy-fade {
    opacity: 0
}

.woodmart-lazy-fade.woodmart-loaded {
    opacity: 1
}

.widget,.woodmart-widget,div[class^=vc_wp] {
    line-height: 1.4
}

.widget a,.woodmart-widget a,div[class^=vc_wp] a {
    color: #727272
}

.widget a:hover,.woodmart-widget a:hover,div[class^=vc_wp] a:hover {
    color: #333
}

.widget li,.woodmart-widget li,div[class^=vc_wp] li {
    margin-bottom: 15px
}

.widget li:last-child,.woodmart-widget li:last-child,div[class^=vc_wp] li:last-child {
    margin-bottom: 0
}

.color-scheme-light .widget a,.color-scheme-light .woodmart-widget a,.color-scheme-light div[class^=vc_wp] a {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .widget a:hover,.color-scheme-light .woodmart-widget a:hover,.color-scheme-light div[class^=vc_wp] a:hover {
    color: #fff
}

.color-scheme-dark .widget a,.color-scheme-dark .woodmart-widget a,.color-scheme-dark div[class^=vc_wp] a {
    color: #727272
}

.color-scheme-dark .widget a:hover,.color-scheme-dark .woodmart-widget a:hover,.color-scheme-dark div[class^=vc_wp] a:hover {
    color: #333
}

.widget {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid
}

.widget:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none
}

.color-scheme-light .widget {
    border-color: rgba(255,255,255,.25)
}

.filter-widget {
    padding-bottom: 0;
    border-bottom: none
}

.filter-widget:last-child {
    margin-bottom: 30px
}

.widgetarea-mobile {
    padding: 20px
}

.dropdowns-color-light .widgetarea-mobile {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .widgetarea-mobile a {
    color: rgba(255,255,255,.9)
}

.dropdowns-color-light .widgetarea-mobile a:hover {
    color: #fff
}

.dropdowns-color-light .widgetarea-mobile h1,.dropdowns-color-light .widgetarea-mobile h2,.dropdowns-color-light .widgetarea-mobile h3,.dropdowns-color-light .widgetarea-mobile h4,.dropdowns-color-light .widgetarea-mobile h5,.dropdowns-color-light .widgetarea-mobile h6,.dropdowns-color-light .widgetarea-mobile .title,.dropdowns-color-light .widgetarea-mobile .widgettitle,.dropdowns-color-light .widgetarea-mobile .widget-title,.dropdowns-color-light .widgetarea-mobile label,.dropdowns-color-light .widgetarea-mobile legend {
    color: #fff
}

.dropdowns-color-light .widgetarea-mobile .inline-list-with-border li:not(:last-child) {
    border-color: rgba(255,255,255,.15)
}

.mobile-menu-widget {
    margin-right: -20px;
    margin-bottom: 20px;
    margin-left: -20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-bottom: 1px solid
}

.mobile-menu-widget:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none
}

.widget-area-fs-menu {
    margin-top: 30px
}

.color-scheme-light .footer-widget a {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .footer-widget a:hover {
    color: #fff
}

.widget-heading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 15px;
    padding-bottom: 20px;
    padding-left: 15px;
    border-bottom: 1px solid
}

.widget-heading .close-side-widget {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    color: #2d2a2a;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .3px;
    font-weight: 600;
    font-size: 13px;
    line-height: 30px;
    padding-right: 21px;
    cursor: pointer
}

.widget-heading .close-side-widget:after {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.widget-heading .close-side-widget:before {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.widget-heading .close-side-widget:hover:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.widget-heading .close-side-widget:hover:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.widget-heading .close-side-widget:after,.widget-heading .close-side-widget:before {
    content: " ";
    position: absolute;
    top: 50%;
    display: inline-block;
    margin-top: -1px;
    width: 15px;
    height: 2px;
    background-color: currentColor;
    -webkit-transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    right: 0
}

.widget-heading .widget-title {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-bottom: 0;
    font-size: 20px
}

.widgettitle,.widget-title {
    margin-bottom: 20px;
    color: #2d2a2a;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px
}

.widget_recent_entries ul li a {
    display: block
}

.widget_recent_entries .post-date {
    display: block;
    margin-top: 5px;
    color: #bbb;
    font-size: 12px
}

.color-scheme-light .widget_recent_entries .post-date {
    color: rgba(255,255,255,.8)
}

.widget_recent_comments ul li .url {
    color: #2d2a2a;
    font-weight: 600
}

.widget_recent_comments ul li:before {
    display: inline-block;
    margin-right: 7px;
    color: #2d2a2a;
    font-weight: normal;
    font-size: 12px;
    content: "\f104";
    font-family: "woodmart-font"
}

.color-scheme-light .widget_recent_comments ul li .url {
    color: #fff
}

.color-scheme-light .widget_recent_comments ul li:before {
    color: #fff
}

.woodmart-recent-posts li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid
}

.woodmart-recent-posts li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none
}

.woodmart-recent-posts .recent-posts-thumbnail {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    margin-right: 15px
}

.woodmart-recent-posts .recent-posts-thumbnail img {
    min-width: 60px
}

.woodmart-recent-posts .recent-posts-info {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-recent-posts .entry-title {
    margin-bottom: 8px;
    font-size: 14px
}

.woodmart-recent-posts .recent-posts-time,.woodmart-recent-posts .recent-posts-comment {
    color: #bbb;
    font-size: 12px
}

.woodmart-recent-posts .recent-posts-time {
    margin-right: 5px
}

.color-scheme-light .woodmart-recent-posts li {
    border-color: rgba(255,255,255,.2)
}

.color-scheme-light .woodmart-recent-posts .recent-posts-time,.color-scheme-light .woodmart-recent-posts .recent-posts-comment {
    color: rgba(255,255,255,.8)
}

.widget_categories ul li,.widget_pages ul li,.widget_archive ul li,.widget_nav_menu ul li {
    display: block;
    color: #bbb;
    font-size: 14px
}

.widget_categories ul li a,.widget_pages ul li a,.widget_archive ul li a,.widget_nav_menu ul li a {
    display: inline-block;
    padding-right: 2px
}

.widget_categories ul li.current_page_item > a,.widget_pages ul li.current_page_item > a,.widget_archive ul li.current_page_item > a,.widget_nav_menu ul li.current_page_item > a {
    color: #333;
    font-weight: 600
}

.widget_categories li ul,.widget_pages li ul,.widget_archive li ul,.widget_nav_menu li ul {
    margin-top: 15px;
    padding-left: 15px
}

.color-scheme-light .widget_categories ul li,.color-scheme-light .widget_pages ul li,.color-scheme-light .widget_archive ul li,.color-scheme-light .widget_nav_menu ul li {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .widget_categories ul li.current_page_item > a,.color-scheme-light .widget_pages ul li.current_page_item > a,.color-scheme-light .widget_archive ul li.current_page_item > a,.color-scheme-light .widget_nav_menu ul li.current_page_item > a {
    color: #fff
}

.widget_text .textwidget > *:last-child {
    margin-bottom: 0
}

.widget_recent_reviews .product-title {
    font-size: 14px
}

.widget_rss .widget-title a {
    color: #2d2a2a;
    vertical-align: middle
}

.widget_rss .widget-title a img {
    vertical-align: initial
}

.widget_rss ul li {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid;
    line-height: 1.5
}

.widget_rss ul li > a {
    display: block;
    margin-bottom: 8px;
    color: #2d2a2a;
    font-weight: 600;
    font-size: 14px
}

.widget_rss ul li cite {
    display: inline-block;
    margin-top: 5px
}

.widget_rss ul li:last-child {
    margin-bottom: 0;
    border-bottom: none
}

.widget_rss .rss-date {
    display: block;
    margin-bottom: 8px;
    color: #bbb;
    font-size: 12px
}

.widget_rss .rss-date:before {
    display: inline-block;
    margin-right: 5px;
    font-family: "FontAwesome";
    content: "\f073"
}

.color-scheme-light .widget_rss .widget-title a {
    color: #fff
}

.color-scheme-light .widget_rss ul li {
    border-color: rgba(255,255,255,.2)
}

.color-scheme-light .widget_rss ul li a {
    color: #fff
}

.color-scheme-light .widget_rss .rss-date {
    color: rgba(255,255,255,.8)
}

.widget_tag_cloud .tagcloud,.widget_product_tag_cloud .tagcloud {
    margin: -1px -1px;
    font-size: 0
}

.widget_tag_cloud .tagcloud a,.widget_product_tag_cloud .tagcloud a {
    display: inline-block;
    margin: 1px 1px;
    padding: 5px 12px;
    border: 1px solid;
    text-transform: capitalize;
    font-size: 12px !important
}

.widget_tag_cloud .tagcloud a:hover,.widget_tag_cloud .tagcloud a:focus,.widget_product_tag_cloud .tagcloud a:hover,.widget_product_tag_cloud .tagcloud a:focus {
    color: #fff
}

.color-scheme-light .widget_tag_cloud .tagcloud a,.color-scheme-light .widget_product_tag_cloud .tagcloud a {
    border-color: rgba(255,255,255,.3)
}

.widget_calendar #wp-calendar {
    margin-bottom: 0
}

.widget_calendar #wp-calendar > caption {
    margin-bottom: 10px;
    color: #2d2a2a;
    text-align: center;
    font-weight: 600;
    font-size: 18px
}

.widget_calendar #wp-calendar th {
    padding: 5px;
    border-bottom: none;
    text-align: center;
    font-size: 16px
}

.widget_calendar #wp-calendar td {
    padding: 10px;
    border-bottom: none;
    text-align: center
}

.widget_calendar #wp-calendar #today {
    color: #fff;
    font-weight: 600
}

.widget_calendar #wp-calendar #prev {
    text-align: left
}

.widget_calendar #wp-calendar #next {
    text-align: right
}

.widget_calendar #wp-calendar thead th {
    border-bottom: 2px solid rgba(129,129,129,.1)
}

.widget_calendar #wp-calendar tfoot td {
    border-top: 2px solid rgba(129,129,129,.1)
}

.color-scheme-light .widget_calendar #wp-calendar > caption {
    color: #fff
}

.color-scheme-light .widget_calendar #wp-calendar thead th {
    border-color: rgba(255,255,255,.2)
}

.color-scheme-light .widget_calendar #wp-calendar tfoot td {
    border-color: rgba(255,255,255,.2)
}

.widget_nav_mega_menu > .widget-title {
    display: block;
    margin-bottom: 0;
    padding: 19px;
    background-color: #f1f1f1;
    color: #000;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: .4px;
    font-size: 16px;
    line-height: 24px
}

.widget_nav_mega_menu > .widget-title:before {
    content: none
}

.widget_nav_mega_menu > .widget-title.color-scheme-light {
    color: #fff
}

.widget_nav_mega_menu > .widget-title + .vertical-navigation .menu {
    border-top: none
}

.widget_nav_mega_menu .vertical-navigation {
    display: block
}

.error404 .page-header {
    position: relative;
    margin: 0;
    margin-bottom: 20px;
    padding-bottom: 0;
    border-bottom: 0
}

.error404 .page-header:before {
    content: "404";
    position: absolute;
    top: -20px;
    left: 50%;
    color: #f4f4f4;
    font-weight: bold;
    font-size: 400px;
    line-height: 320px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.error404 .page-title {
    margin-top: 0;
    margin-bottom: 0;
    padding: 115px 0;
    border-bottom: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 82px;
    line-height: 82px
}

.error404 .page-content {
    text-align: center
}

.error404 .page-content h2 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 28px;
    line-height: 1.2
}

.error404 .page-content p {
    font-size: 110%
}

.error404 .page-content > .woodmart-search-form {
    margin: 0 auto;
    max-width: 400px
}

.search-no-results .page-title .breadcrumbs,.search-no-results .page-title .yoast-breadcrumb {
    display: none
}

.not-found .entry-header {
    text-align: center
}

.not-found .entry-header:before {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 100px;
    line-height: 100px;
    content: "\f125";
    font-family: "woodmart-font"
}

.not-found .entry-header .entry-title {
    margin-bottom: 15px;
    text-transform: capitalize;
    font-weight: 900;
    font-size: 48px
}

.not-found .entry-content {
    text-align: center
}

.not-found .entry-content > p {
    margin-bottom: 30px;
    font-size: 16px
}

.not-found .searchform {
    position: relative;
    margin: 0 auto;
    margin-bottom: 30px;
    max-width: 350px;
    width: 100%
}

.not-found .searchform input[type=text] {
    padding-right: 105px
}

.not-found .searchform .searchsubmit {
    position: absolute;
    top: 0;
    right: 0
}

.woodmart-scroll {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    width: 100%;
    height: 100%
}

.woodmart-scroll .woodmart-scroll-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch
}

.woodmart-scroll .woodmart-scroll-content:focus {
    outline: none
}

.woodmart-scroll .woodmart-scroll-content::-webkit-scrollbar {
    display: none
}

.has-scrollbar > .woodmart-scroll-content::-webkit-scrollbar {
    display: block
}

.platform-Mac .woodmart-scroll .woodmart-scroll-content::-webkit-scrollbar {
    display: none
}

.woodmart-scroll-pane {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    visibility: hidden\9 ;
    width: 3px;
    background: rgba(0,0,0,.15);
    opacity: 0;
    -webkit-transition: .2s;
    transition: .2s
}

.woodmart-scroll-pane > .woodmart-scroll-slider {
    position: relative;
    margin: 0 0;
    background: rgba(0,0,0,.25)
}

.woodmart-scroll:hover > .woodmart-scroll-pane,.woodmart-sidebar-scroll:hover > .woodmart-scroll-pane,.woodmart-scroll-pane.active,.woodmart-scroll-pane.flashed {
    visibility: visible\9 ;
    opacity: .99
}

.color-scheme-light .woodmart-scroll-pane {
    background: rgba(255,255,255,.15)
}

.color-scheme-light .woodmart-scroll-pane > .woodmart-scroll-slider {
    background: rgba(255,255,255,.35)
}

.mfp-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1042;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #0b0b0b;
    opacity: .8
}

.mfp-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1043;
    width: 100%;
    height: 100%;
    outline: none !important;
    -webkit-backface-visibility: hidden
}

.mfp-container {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 8px;
    width: 100%;
    height: 100%;
    text-align: center
}

.mfp-container:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle
}

.mfp-align-top .mfp-container:before {
    display: none
}

.mfp-content {
    position: relative;
    z-index: 1045;
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    text-align: left
}

.mfp-inline-holder .mfp-content,.mfp-ajax-holder .mfp-content {
    width: 100%;
    cursor: auto
}

.mfp-ajax-cur {
    cursor: progress
}

.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
    cursor: -webkit-zoom-out;
    cursor: zoom-out
}

.mfp-zoom {
    cursor: pointer;
    cursor: -webkit-zoom-in;
    cursor: zoom-in
}

.mfp-auto-cursor .mfp-content {
    cursor: auto
}

.mfp-close,.mfp-arrow,.mfp-preloader,.mfp-counter {
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none
}

.mfp-loading.mfp-figure {
    display: none
}

.mfp-hide {
    display: none !important
}

.mfp-preloader {
    position: absolute;
    top: 50%;
    right: 8px;
    left: 8px;
    z-index: 1044;
    margin-top: -0.8em;
    width: auto;
    color: #ccc;
    text-align: center
}

.mfp-preloader a {
    color: #ccc
}

.mfp-preloader a:hover {
    color: #fff
}

.mfp-s-ready .mfp-preloader {
    display: none
}

.mfp-s-error .mfp-content {
    display: none
}

button.mfp-close,button.mfp-arrow {
    z-index: 1046;
    display: block;
    overflow: visible;
    padding: 0;
    outline: none;
    border: 0;
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: pointer;
    -webkit-appearance: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.mfp-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 0 18px 10px;
    width: 44px;
    height: 44px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-size: 28px;
    line-height: 44px;
    opacity: .65
}

.mfp-close:hover,.mfp-close:focus {
    opacity: 1
}

.mfp-close:active {
    top: 1px
}

.mfp-counter {
    position: absolute;
    top: 0;
    right: 0;
    color: #ccc;
    white-space: nowrap;
    font-size: 12px;
    line-height: 18px
}

.mfp-arrow {
    position: absolute;
    top: 50%;
    margin: 0;
    margin-top: -55px;
    padding: 0;
    width: 90px;
    height: 110px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    opacity: .65
}

.mfp-arrow:active {
    margin-top: -54px
}

.mfp-arrow:hover,.mfp-arrow:focus {
    opacity: 1
}

.mfp-arrow:before,.mfp-arrow:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    margin-top: 35px;
    margin-left: 35px;
    width: 0;
    height: 0;
    border: medium inset transparent
}

.mfp-arrow:after {
    top: 8px;
    border-top-width: 13px;
    border-bottom-width: 13px
}

.mfp-arrow:before {
    border-top-width: 21px;
    border-bottom-width: 21px;
    opacity: .7
}

.mfp-arrow-left {
    left: 0
}

.mfp-arrow-left:after {
    margin-left: 31px;
    border-right: 17px solid #fff
}

.mfp-arrow-left:before {
    margin-left: 25px;
    border-right: 27px solid #3f3f3f
}

.mfp-arrow-right {
    right: 0
}

.mfp-arrow-right:after {
    margin-left: 39px;
    border-left: 17px solid #fff
}

.mfp-arrow-right:before {
    border-left: 27px solid #3f3f3f
}

.mfp-iframe-holder {
    padding-top: 40px;
    padding-bottom: 40px
}

.mfp-iframe-holder .mfp-content {
    max-width: 900px;
    width: 100%;
    line-height: 0
}

.mfp-iframe-holder .mfp-close {
    top: -40px
}

.mfp-iframe-scaler {
    overflow: hidden;
    padding-top: 56.25%;
    width: 100%;
    height: 0
}

.mfp-iframe-scaler iframe {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    -webkit-box-shadow: 0 0 8px rgba(0,0,0,.6);
    box-shadow: 0 0 8px rgba(0,0,0,.6)
}

img.mfp-img {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 40px 0 40px;
    max-width: 100%;
    width: auto;
    height: auto;
    line-height: 0
}

.mfp-figure {
    line-height: 0
}

.mfp-figure:after {
    content: "";
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 40px;
    left: 0;
    z-index: -1;
    display: block;
    width: auto;
    height: auto;
    background: #444;
    -webkit-box-shadow: 0 0 8px rgba(0,0,0,.6);
    box-shadow: 0 0 8px rgba(0,0,0,.6)
}

.mfp-figure small {
    display: block;
    color: #bdbdbd;
    font-size: 12px;
    line-height: 14px
}

.mfp-figure figure {
    margin: 0
}

.mfp-bottom-bar {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: -36px;
    width: 100%;
    cursor: auto
}

.mfp-title {
    padding-right: 36px;
    color: #f3f3f3;
    text-align: left;
    word-wrap: break-word;
    line-height: 18px
}

.mfp-image-holder .mfp-content {
    max-width: 100%
}

.mfp-gallery .mfp-image-holder .mfp-figure {
    cursor: pointer
}

@media screen and (max-width: 800px)and (orientation: landscape),screen and (max-height: 300px) {
    .mfp-img-mobile .mfp-image-holder {
        padding-right:0;
        padding-left: 0
    }

    .mfp-img-mobile img.mfp-img {
        padding: 0
    }

    .mfp-img-mobile .mfp-figure:after {
        top: 0;
        bottom: 0
    }

    .mfp-img-mobile .mfp-figure small {
        display: inline;
        margin-left: 5px
    }

    .mfp-img-mobile .mfp-bottom-bar {
        position: fixed;
        top: auto;
        bottom: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 3px 5px;
        background: rgba(0,0,0,.6)
    }

    .mfp-img-mobile .mfp-bottom-bar:empty {
        padding: 0
    }

    .mfp-img-mobile .mfp-counter {
        top: 3px;
        right: 5px
    }

    .mfp-img-mobile .mfp-close {
        position: fixed;
        top: 0;
        right: 0;
        padding: 0;
        width: 35px;
        height: 35px;
        background: rgba(0,0,0,.6);
        text-align: center;
        line-height: 35px
    }
}

.mfp-move-horizontal .mfp-with-anim {
    opacity: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px)
}

.mfp-move-horizontal .mfp-with-anim .summary-inner {
    opacity: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(30px);
    transform: translateY(30px)
}

.mfp-move-horizontal.mfp-bg {
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.mfp-move-horizontal.mfp-ready .mfp-with-anim {
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.mfp-move-horizontal.mfp-ready .mfp-with-anim .summary-inner {
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.mfp-move-horizontal.mfp-ready.mfp-bg {
    opacity: .8
}

.mfp-move-horizontal.mfp-removing .mfp-with-anim {
    opacity: 0;
    -webkit-transform: translateX(100px);
    transform: translateX(100px)
}

.mfp-move-horizontal.mfp-removing.mfp-bg {
    opacity: 0
}

.mfp-move-horizontal.mfp-removing .mfp-close {
    display: none
}

body #colorbox,body #cboxWrapper {
    overflow: visible;
    -webkit-transform: none;
    transform: none
}

#cboxContent {
    background-color: transparent
}

#colorbox {
    margin-top: 15px
}

#cboxLoadingGraphic {
    z-index: 340 !important;
    background: none;
    -webkit-animation: wd-FadeInLoader .6s ease forwards;
    animation: wd-FadeInLoader .6s ease forwards
}

#cboxLoadingGraphic:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

#cboxMiddleLeft,#cboxMiddleRight,#cboxTopLeft,#cboxTopCenter,#cboxTopRight,#cboxBottomLeft,#cboxBottomCenter,#cboxBottomRight {
    display: none
}

@-webkit-keyframes justified-gallery-show-caption-animation {
    from {
        opacity: 0
    }

    to {
        opacity: .7
    }
}

@keyframes justified-gallery-show-caption-animation {
    from {
        opacity: 0
    }

    to {
        opacity: .7
    }
}

@-webkit-keyframes justified-gallery-show-entry-animation {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes justified-gallery-show-entry-animation {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.justified-gallery {
    width: 100%;
    position: relative;
    overflow: hidden
}

.justified-gallery > a,.justified-gallery > div {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    opacity: 0;
    filter: alpha(opacity=0)
}

.justified-gallery > a > img,.justified-gallery > div > img,.justified-gallery > a > a > img,.justified-gallery > div > a > img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 0;
    border: 0
}

.justified-gallery > a > .caption,.justified-gallery > div > .caption {
    display: none;
    position: absolute;
    bottom: 0;
    padding: 5px;
    background-color: #000;
    left: 0;
    right: 0;
    margin: 0;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    font-family: sans-serif
}

.justified-gallery > a > .caption.caption-visible,.justified-gallery > div > .caption.caption-visible {
    display: initial;
    opacity: .7;
    filter: "alpha(opacity=70)";
    -webkit-animation: justified-gallery-show-caption-animation 500ms 0 ease;
    -moz-animation: justified-gallery-show-caption-animation 500ms 0 ease;
    -ms-animation: justified-gallery-show-caption-animation 500ms 0 ease
}

.justified-gallery > .entry-visible {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-animation: justified-gallery-show-entry-animation 500ms 0 ease;
    -moz-animation: justified-gallery-show-entry-animation 500ms 0 ease;
    -ms-animation: justified-gallery-show-entry-animation 500ms 0 ease
}

.justified-gallery > .spinner {
    position: absolute;
    bottom: 0;
    margin-left: -24px;
    padding: 10px 0;
    left: 50%;
    opacity: initial;
    -webkit-filter: initial;
    filter: initial;
    overflow: initial
}

.justified-gallery > .spinner > span {
    display: inline-block;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background-color: #000;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px
}

.wpb_single_image .vc_single_image-wrapper.vc_box_shadow,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow img,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border img,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border_circle img,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle,.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_circle img {
    -webkit-box-shadow: 0 0 9px rgba(0,0,0,.12);
    box-shadow: 0 0 9px rgba(0,0,0,.12)
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion .vc_tta-panel-heading {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    border: none !important
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion .vc_tta-panel-heading .vc_tta-panel-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion .vc_tta-panel-title > a {
    padding-top: 18px;
    padding-bottom: 18px
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panels {
    border-top: 2px solid rgba(119,119,119,.17)
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel {
    border-bottom: 1px solid
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel.vc_active .vc_tta-panel-title > a {
    color: #333
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-heading:hover {
    background-color: transparent
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-title > a {
    padding-right: 0;
    padding-left: 0
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-title.vc_tta-controls-icon-position-right .vc_tta-controls-icon {
    right: 5px
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-title.vc_tta-controls-icon-position-right > a {
    padding-right: 25px;
    padding-left: 5px
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-title.vc_tta-controls-icon-position-left .vc_tta-controls-icon {
    left: 5px
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-title.vc_tta-controls-icon-position-left > a {
    padding-right: 5px;
    padding-left: 25px
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-title:hover > a {
    color: #333
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel-body {
    padding-top: 0;
    padding-right: 5px;
    padding-left: 5px;
    border: none
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tabs-container {
    position: relative
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab {
    color: #333
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab > a {
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    border: none;
    background-color: transparent;
    color: inherit;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;
    opacity: .7;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab > a:hover {
    border: none;
    background-color: transparent;
    opacity: 1
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab .vc_tta-title-text {
    position: relative
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab.vc_active > a {
    border: none;
    background-color: transparent;
    opacity: 1
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-panel {
    overflow: hidden;
    margin: 0
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-panel.vc_active .vc_tta-panel-body {
    position: relative;
    z-index: 2;
    visibility: visible;
    opacity: 1;
    -webkit-transition: transform .25s ease .25s,opacity .25s ease .25s,visibility .25s ease .25s;
    -webkit-transition: opacity .25s ease .25s,visibility .25s ease .25s,-webkit-transform .25s ease .25s;
    transition: opacity .25s ease .25s,visibility .25s ease .25s,-webkit-transform .25s ease .25s;
    transition: transform .25s ease .25s,opacity .25s ease .25s,visibility .25s ease .25s;
    transition: transform .25s ease .25s,opacity .25s ease .25s,visibility .25s ease .25s,-webkit-transform .25s ease .25s;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-panel-body {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: block !important;
    visibility: hidden;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    height: auto !important;
    opacity: 0;
    -webkit-transition: transform .25s ease,opacity .25s ease,visibility .25s ease;
    -webkit-transition: opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    transition: transform .25s ease,opacity .25s ease,visibility .25s ease;
    transition: transform .25s ease,opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px)
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-left .vc_tta-panel .vc_tta-panel-body,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-right .vc_tta-panel .vc_tta-panel-body,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-bottom .vc_tta-panel .vc_tta-panel-body {
    -webkit-transform: translateY(10px);
    transform: translateY(10px)
}

.wpb-js-composer .color-scheme-light .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab {
    color: #fff
}

.wpb_video_wrapper {
    position: relative;
    overflow: hidden
}

.wpb_video_wrapper .woodmart-video-poster-wrapper,.wpb_video_wrapper .woodmart-video-poster-wrapper:after,.wpb_video_wrapper .woodmart-video-poster {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px
}

.wpb_video_wrapper .woodmart-video-poster-wrapper {
    position: absolute !important;
    z-index: 2;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: opacity .5s cubic-bezier(0, 0, 0.44, 1.18),visibility .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .5s cubic-bezier(0, 0, 0.44, 1.18),visibility .5s cubic-bezier(0, 0, 0.44, 1.18);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.wpb_video_wrapper .woodmart-video-poster-wrapper:after {
    content: "";
    z-index: 2;
    background-color: rgba(0,0,0,.15);
    -webkit-transition: background-color .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: background-color .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.wpb_video_wrapper .woodmart-video-poster-wrapper.hidden-poster {
    visibility: hidden;
    opacity: 0
}

.wpb_video_wrapper .woodmart-video-poster {
    margin: -1px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.wpb_video_wrapper .button-play {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    margin-top: -50px;
    margin-left: -50px;
    padding-left: 5px;
    width: 100px;
    height: 100px;
    border: 4px solid rgba(255,255,255,.4);
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 95px;
    -webkit-transition: border-color .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: border-color .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.wpb_video_wrapper .button-play:after {
    display: inline-block;
    font-size: 32px;
    -webkit-transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    content: "\f100";
    font-family: "woodmart-font"
}

.wpb_video_wrapper:hover .woodmart-video-poster-wrapper:after {
    background-color: rgba(0,0,0,.3)
}

.wpb_video_wrapper:hover .button-play {
    border-color: rgba(255,255,255,.6)
}

.wpb_video_wrapper:hover .button-play:after {
    -webkit-transform: scale(0.8);
    transform: scale(0.8)
}

.wpb_video_wrapper:hover .woodmart-video-poster {
    -webkit-transform: scale(1.09);
    transform: scale(1.09)
}

.vc_progress_bar .vc_single_bar {
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none
}

.vc_progress_bar .vc_single_bar .vc_label {
    padding: .6em 1.2em;
    text-transform: uppercase;
    text-shadow: none !important;
    letter-spacing: .2px;
    font-weight: 600;
    font-size: 12px
}

.vc_progress_bar .vc_single_bar .vc_bar {
    border-radius: 0;
    -webkit-transition: width .8s ease;
    transition: width .8s ease
}

.woodmart-parallax {
    background-attachment: fixed !important;
    background-size: cover !important
}

.parallax-yes {
    background-size: cover
}

.attachment_fixed-yes {
    background-attachment: fixed
}

.vc_row.woodmart-disable-overflow,.vc_section.woodmart-disable-overflow {
    overflow: visible
}

.vc_row-full-width {
    float: left;
    width: 100%
}

.vc_row[data-vc-full-width].wpb_animate_when_almost_visible {
    -webkit-transition: none !important;
    transition: none !important
}

.vc_row.vc_row-flex > .vc_column_container > .vc_column-inner {
    z-index: auto
}

.vc_row-no-padding .vc_row-fluid {
    margin-right: 0;
    margin-left: 0
}

.wpb_widgetised_column > .wpb_wrapper > *:last-child {
    margin-bottom: 0
}

.widgetarea-head .wpb_widgetised_column {
    margin-bottom: 0
}

.wd-slide-from-bottom,.wd-slide-from-top,.wd-slide-from-left,.wd-slide-from-right,.wd-left-flip-y,.wd-right-flip-y,.wd-top-flip-x,.wd-bottom-flip-x,.wd-zoom-in,.wd-rotate-z {
    -webkit-transition: opacity .7s cubic-bezier(0, 0.87, 0.58, 1);
    transition: opacity .7s cubic-bezier(0, 0.87, 0.58, 1);
    -webkit-animation-fill-mode: none !important;
    animation-fill-mode: none !important
}

.wd-slide-from-bottom.animated,.wd-slide-from-top.animated,.wd-slide-from-left.animated,.wd-slide-from-right.animated,.wd-left-flip-y.animated,.wd-right-flip-y.animated,.wd-top-flip-x.animated,.wd-bottom-flip-x.animated,.wd-zoom-in.animated,.wd-rotate-z.animated {
    -webkit-animation-duration: .7s;
    animation-duration: .7s;
    -webkit-animation-timing-function: cubic-bezier(0, 0.87, 0.58, 1);
    animation-timing-function: cubic-bezier(0, 0.87, 0.58, 1)
}

.wd-slide-from-top {
    -webkit-animation-name: wd-SlideFromTop;
    animation-name: wd-SlideFromTop
}

.wd-slide-from-bottom {
    -webkit-animation-name: wd-SlideFromBottom;
    animation-name: wd-SlideFromBottom
}

.wd-slide-from-left {
    -webkit-animation-name: wd-SlideFromLeft;
    animation-name: wd-SlideFromLeft
}

.wd-slide-from-right {
    -webkit-animation-name: wd-SlideFromRight;
    animation-name: wd-SlideFromRight
}

.wd-right-flip-y {
    -webkit-animation-name: wd-RightFlipY;
    animation-name: wd-RightFlipY
}

.wd-left-flip-y {
    -webkit-animation-name: wd-LeftFlipY;
    animation-name: wd-LeftFlipY
}

.wd-top-flip-x {
    -webkit-animation-name: wd-TopFlipX;
    animation-name: wd-TopFlipX
}

.wd-bottom-flip-x {
    -webkit-animation-name: wd-BottomFlipX;
    animation-name: wd-BottomFlipX
}

.wd-zoom-in {
    -webkit-animation-name: wd-ZoomIn;
    animation-name: wd-ZoomIn
}

.wd-rotate-z {
    -webkit-animation-name: wd-RotateZ;
    animation-name: wd-RotateZ;
    will-change: animation
}

.wpb_wrapper > .wpb_animate_when_almost_visible:nth-child(2) {
    -webkit-transition-delay: .1s;
    transition-delay: .1s;
    -webkit-animation-delay: .1s;
    animation-delay: .1s
}

.wpb_wrapper > .wpb_animate_when_almost_visible:nth-child(3) {
    -webkit-transition-delay: .2s;
    transition-delay: .2s;
    -webkit-animation-delay: .2s;
    animation-delay: .2s
}

.wpb_wrapper > .wpb_animate_when_almost_visible:nth-child(4) {
    -webkit-transition-delay: .3s;
    transition-delay: .3s;
    -webkit-animation-delay: .3s;
    animation-delay: .3s
}

.wpb_wrapper > .wpb_animate_when_almost_visible:nth-child(5) {
    -webkit-transition-delay: .4s;
    transition-delay: .4s;
    -webkit-animation-delay: .4s;
    animation-delay: .4s
}

.wpb_wrapper > .wpb_animate_when_almost_visible:nth-child(6) {
    -webkit-transition-delay: .5s;
    transition-delay: .5s;
    -webkit-animation-delay: .5s;
    animation-delay: .5s
}

.wpb_wrapper > .wpb_animate_when_almost_visible:nth-child(7) {
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
    -webkit-animation-delay: .6s;
    animation-delay: .6s
}

body .woodmart-bg-left-top,body .woodmart-bg-left-top > .vc_column-inner {
    background-position: left top !important
}

body .woodmart-bg-left-center,body .woodmart-bg-left-center > .vc_column-inner {
    background-position: left center !important
}

body .woodmart-bg-left-bottom,body .woodmart-bg-left-bottom > .vc_column-inner {
    background-position: left bottom !important
}

body .woodmart-bg-right-top,body .woodmart-bg-right-top > .vc_column-inner {
    background-position: right top !important
}

body .woodmart-bg-right-center,body .woodmart-bg-right-center > .vc_column-inner {
    background-position: right center !important
}

body .woodmart-bg-right-bottom,body .woodmart-bg-right-bottom > .vc_column-inner {
    background-position: right bottom !important
}

body .woodmart-bg-center-top,body .woodmart-bg-center-top > .vc_column-inner {
    background-position: center top !important
}

body .woodmart-bg-center-center,body .woodmart-bg-center-center > .vc_column-inner {
    background-position: center center !important
}

body .woodmart-bg-center-bottom,body .woodmart-bg-center-bottom > .vc_column-inner {
    background-position: center bottom !important
}

.slider-title {
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: left
}

.slider-title:before {
    content: " ";
    position: absolute;
    top: 100%;
    left: 0;
    width: 40px;
    height: 2px
}

.owl-carousel {
    position: relative;
    z-index: 1;
    width: 100%;
    -webkit-tap-highlight-color: transparent
}

.owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y
}

.owl-carousel .owl-stage:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    line-height: 0
}

.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0px, 0px, 0px)
}

.owl-carousel .owl-wrapper,.owl-carousel .owl-item {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden
}

.owl-carousel .owl-item {
    position: relative;
    float: left;
    min-height: 1px;
    -webkit-tap-highlight-color: transparent;
    -webkit-backface-visibility: hidden;
    -webkit-touch-callout: none
}

.owl-carousel .owl-nav.disabled,.owl-carousel .owl-dots.disabled {
    display: none
}

.owl-carousel .owl-nav .owl-prev,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-dot {
    cursor: pointer;
    cursor: hand;
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.owl-carousel.owl-loaded {
    display: block
}

.owl-carousel.owl-loading {
    display: block;
    opacity: 0
}

.owl-carousel.owl-hidden {
    opacity: 0
}

.owl-carousel.owl-refresh .owl-item {
    visibility: hidden
}

.owl-carousel.owl-drag .owl-item {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.owl-carousel.owl-grab {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab
}

.owl-carousel.owl-rtl {
    direction: rtl
}

.owl-carousel.owl-rtl .owl-item {
    float: right
}

.no-js .owl-carousel {
    display: block
}

.owl-carousel .owl-item.animated {
    -webkit-animation-duration: 600ms;
    animation-duration: 600ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.owl-carousel .owl-item.fadeOut {
    -webkit-animation-name: wd-fadeOut;
    animation-name: wd-fadeOut
}

.owl-carousel .owl-animated-in {
    z-index: 0
}

.owl-carousel .owl-animated-out {
    z-index: 1
}

.owl-height {
    -webkit-transition: height 500ms ease-in-out;
    transition: height 500ms ease-in-out
}

.owl-carousel .owl-item .owl-lazy {
    opacity: 0;
    -webkit-transition: opacity 400ms ease;
    transition: opacity 400ms ease
}

.owl-carousel .owl-item img.owl-lazy {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
}

.owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000
}

.owl-carousel .owl-video-play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    margin-top: -40px;
    margin-left: -40px;
    width: 80px;
    height: 80px;
    background: url(../../../../../../../uploads/2019/07/owl.video.play.png) no-repeat;
    cursor: pointer;
    -webkit-transition: -webkit-transform 100ms ease;
    transition: -webkit-transform 100ms ease;
    transition: transform 100ms ease;
    transition: transform 100ms ease, -webkit-transform 100ms ease;
    -webkit-backface-visibility: hidden
}

.owl-carousel .owl-video-play-icon:hover {
    -webkit-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3)
}

.owl-carousel .owl-video-playing .owl-video-tn,.owl-carousel .owl-video-playing .owl-video-play-icon {
    display: none
}

.owl-carousel .owl-video-tn {
    height: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0;
    -webkit-transition: opacity 400ms ease;
    transition: opacity 400ms ease
}

.owl-carousel .owl-video-frame {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%
}

.owl-dots {
    margin-top: 5px;
    text-align: center
}

.owl-dots .owl-dot {
    display: inline-block;
    margin-top: 10px
}

.owl-dots .owl-dot span {
    display: block;
    margin: 5px 5px;
    width: 10px;
    height: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 50%;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.owl-dots .owl-dot:not(.active):hover span {
    border-color: #3e3e3e
}

.owl-dots .owl-dot.active span {
    border-color: #3e3e3e;
    background-color: #3e3e3e
}

.color-scheme-light .owl-dots .owl-dot span,.pagin-color-light .owl-dots .owl-dot span {
    border-color: rgba(255,255,255,.4)
}

.color-scheme-light .owl-dots .owl-dot:not(.active):hover span,.pagin-color-light .owl-dots .owl-dot:not(.active):hover span {
    border-color: rgba(255,255,255,.8)
}

.color-scheme-light .owl-dots .owl-dot.active span,.pagin-color-light .owl-dots .owl-dot.active span {
    border-color: #fff;
    background-color: #fff
}

.owl-nav,.wrap-loading-arrow {
    font-size: 0
}

.owl-nav > div,.wrap-loading-arrow > div {
    position: absolute;
    top: 50%;
    z-index: 250;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    visibility: hidden;
    margin-top: -25px;
    padding: 0;
    width: 50px;
    height: 50px;
    color: rgba(0,0,0,.8);
    text-align: center;
    opacity: 0;
    cursor: pointer;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
    pointer-events: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.owl-nav > div:after,.wrap-loading-arrow > div:after {
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    -webkit-transition: transform .25s ease;
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.owl-nav > div[class*=prev],.wrap-loading-arrow > div[class*=prev] {
    padding-right: 2px;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px)
}

.owl-nav > div[class*=prev]:after,.wrap-loading-arrow > div[class*=prev]:after {
    content: "\f111";
    font-family: "woodmart-font"
}

.owl-nav > div[class*=next],.wrap-loading-arrow > div[class*=next] {
    padding-left: 2px;
    -webkit-transform: translateX(30px);
    transform: translateX(30px)
}

.owl-nav > div[class*=next]:after,.wrap-loading-arrow > div[class*=next]:after {
    content: "\f110";
    font-family: "woodmart-font"
}

.browser-Safari .owl-nav > div,.browser-Safari .wrap-loading-arrow > div {
    visibility: visible
}

.color-scheme-light .owl-nav > div,.pagin-color-light .owl-nav > div,.color-scheme-light .wrap-loading-arrow > div,.pagin-color-light .wrap-loading-arrow > div {
    color: #fff
}

.owl-nav > div[class*=prev] {
    left: 0
}

.owl-nav > div[class*=next] {
    right: 0
}

.owl-nav > div:hover {
    color: rgba(0,0,0,.5)
}

.color-scheme-light .owl-nav > div:hover,.pagin-color-light .owl-nav > div:hover {
    color: rgba(255,255,255,.8)
}

.wrap-loading-arrow > div {
    position: fixed
}

.owl-carousel:hover .owl-nav > div,.show-arrow .wrap-loading-arrow > div {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    pointer-events: visible
}

.woodmart-carousel-spacing-0 .owl-nav > div[class*=prev] {
    left: -50px
}

.woodmart-carousel-spacing-0 .owl-nav > div[class*=next] {
    right: -50px
}

.woodmart-carousel-spacing-2 .owl-nav > div[class*=prev] {
    left: -49px
}

.woodmart-carousel-spacing-2 .owl-nav > div[class*=next] {
    right: -49px
}

.woodmart-carousel-spacing-6 .owl-nav > div[class*=prev] {
    left: -47px
}

.woodmart-carousel-spacing-6 .owl-nav > div[class*=next] {
    right: -47px
}

.woodmart-carousel-spacing-10 .owl-nav > div[class*=prev] {
    left: -45px
}

.woodmart-carousel-spacing-10 .owl-nav > div[class*=next] {
    right: -45px
}

.woodmart-carousel-spacing-20 .owl-nav > div[class*=prev] {
    left: -40px
}

.woodmart-carousel-spacing-20 .owl-nav > div[class*=next] {
    right: -40px
}

.woodmart-carousel-spacing-30 .owl-nav > div[class*=prev] {
    left: -35px
}

.woodmart-carousel-spacing-30 .owl-nav > div[class*=next] {
    right: -35px
}

.woodmart-carousel-spacing-0 {
    margin-right: 0px;
    margin-left: 0px
}

.woodmart-carousel-spacing-0 .slider-title {
    margin-right: 0px;
    margin-left: 0px
}

.woodmart-carousel-spacing-0 .owl-item,.woodmart-carousel-spacing-0 .owl-carousel:not(.owl-loaded) > div {
    padding-right: 0px;
    padding-left: 0px
}

.woodmart-carousel-spacing-2 {
    margin-right: -1px;
    margin-left: -1px
}

.woodmart-carousel-spacing-2 .slider-title {
    margin-right: 1px;
    margin-left: 1px
}

.woodmart-carousel-spacing-2 .owl-item,.woodmart-carousel-spacing-2 .owl-carousel:not(.owl-loaded) > div {
    padding-right: 1px;
    padding-left: 1px
}

.woodmart-carousel-spacing-6 {
    margin-right: -3px;
    margin-left: -3px
}

.woodmart-carousel-spacing-6 .slider-title {
    margin-right: 3px;
    margin-left: 3px
}

.woodmart-carousel-spacing-6 .owl-item,.woodmart-carousel-spacing-6 .owl-carousel:not(.owl-loaded) > div {
    padding-right: 3px;
    padding-left: 3px
}

.woodmart-carousel-spacing-10 {
    margin-right: -5px;
    margin-left: -5px
}

.woodmart-carousel-spacing-10 .slider-title {
    margin-right: 5px;
    margin-left: 5px
}

.woodmart-carousel-spacing-10 .owl-item,.woodmart-carousel-spacing-10 .owl-carousel:not(.owl-loaded) > div {
    padding-right: 5px;
    padding-left: 5px
}

.woodmart-carousel-spacing-20 {
    margin-right: -10px;
    margin-left: -10px
}

.woodmart-carousel-spacing-20 .slider-title {
    margin-right: 10px;
    margin-left: 10px
}

.woodmart-carousel-spacing-20 .owl-item,.woodmart-carousel-spacing-20 .owl-carousel:not(.owl-loaded) > div {
    padding-right: 10px;
    padding-left: 10px
}

.woodmart-carousel-spacing-30 {
    margin-right: -15px;
    margin-left: -15px
}

.woodmart-carousel-spacing-30 .slider-title {
    margin-right: 15px;
    margin-left: 15px
}

.woodmart-carousel-spacing-30 .owl-item,.woodmart-carousel-spacing-30 .owl-carousel:not(.owl-loaded) > div {
    padding-right: 15px;
    padding-left: 15px
}

.owl-carousel:not(.owl-loaded) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

[data-hide_pagination_control=no] .owl-carousel:not(.owl-loaded) {
    padding-bottom: 41px !important
}

[data-hide_pagination_control=no] .owl-carousel.woodmart-slider {
    padding-bottom: 0 !important
}

.owl-loaded:after,.owl-loaded:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px
}

.owl-loaded:before {
    right: -50px
}

.owl-loaded:after {
    left: -50px
}

.slider-type-product,.slider-type-post,.categories-style-carousel {
    margin-bottom: 35px
}

.categories-style-carousel .owl-stage-outer,.categories-style-carousel .owl-carousel:not(.owl-loaded) {
    padding-top: 2px;
    padding-bottom: 2px
}

.categories-style-carousel .category-grid-item {
    margin-bottom: 0
}

.slider-type-product .owl-stage-outer,.slider-type-product .owl-carousel:not(.owl-loaded) {
    padding-top: 3px;
    padding-bottom: 3px
}

.slider-type-product .product-grid-item {
    margin-bottom: 0
}

.info-box-carousel-wrapper {
    margin-bottom: 30px
}

.info-box-carousel-wrapper .owl-stage-outer,.info-box-carousel-wrapper .owl-carousel:not(.owl-loaded) {
    padding-top: 5px;
    padding-bottom: 5px
}

.info-box-carousel-wrapper .woodmart-info-box {
    margin-bottom: 0
}

.banners-carousel-wrapper {
    margin-bottom: 0
}

.banners-carousel-wrapper .promo-banner {
    margin-bottom: 0
}

.banners-carousel-wrapper .content-banner {
    -webkit-animation: wd-fadeOut 0s ease both;
    animation: wd-fadeOut 0s ease both
}

.banners-carousel-wrapper .owl-loaded .content-banner {
    -webkit-animation: wd-fadeOut .5s ease both;
    animation: wd-fadeOut .5s ease both
}

.banners-carousel-wrapper .owl-loaded .active .content-banner {
    -webkit-animation: wd-fadeIn .5s ease both .4s;
    animation: wd-fadeIn .5s ease both .4s
}

.banners-carousel-wrapper .owl-dots {
    margin-top: 10px
}

.wpb_revslider_element {
    margin-bottom: 0
}

.hermes .tp-arr-imgholder {
    background-size: cover
}

.pswp {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1500;
    display: none;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    -webkit-text-size-adjust: 100%;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-backface-visibility: hidden
}

.pswp * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.pswp img {
    max-width: none
}

.pswp--animate_opacity {
    opacity: .001;
    -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    will-change: opacity
}

.pswp--open {
    display: block
}

.pswp--zoom-allowed .pswp__img {
    cursor: -webkit-zoom-in;
    cursor: zoom-in
}

.pswp--zoomed-in .pswp__img {
    cursor: -webkit-grab;
    cursor: grab
}

.pswp--dragging .pswp__img {
    cursor: -webkit-grabbing;
    cursor: grabbing
}

.pswp__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    will-change: opacity
}

.pswp__scroll-wrap {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%
}

.pswp__container,.pswp__zoom-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -ms-touch-action: none;
    touch-action: none
}

.pswp__container,.pswp__img {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-touch-callout: none
}

.pswp__zoom-wrap {
    position: absolute;
    width: 100%;
    -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1), -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
    -webkit-transform-origin: left top;
    transform-origin: left top
}

.pswp__bg {
    -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    will-change: opacity
}

.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap {
    -webkit-transition: none;
    transition: none
}

.pswp__container,.pswp__zoom-wrap {
    -webkit-backface-visibility: hidden;
    will-change: transform
}

.pswp__item {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden
}

.pswp__img {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto
}

.pswp__img--placeholder {
    -webkit-backface-visibility: hidden
}

.pswp__img--placeholder--blank {
    background: #222
}

.pswp--ie .pswp__img {
    top: 0;
    left: 0;
    width: 100% !important;
    height: auto !important
}

.pswp__error-msg {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -8px;
    width: 100%;
    color: #ccc;
    text-align: center;
    font-size: 14px;
    line-height: 16px
}

.pswp__error-msg a {
    color: #ccc;
    text-decoration: underline
}

.pswp__button {
    width: 44px;
    height: 44px;
    position: relative;
    background: none;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: none;
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    float: right;
    opacity: .75;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    -webkit-box-shadow: none;
    box-shadow: none
}

.pswp__button:focus,.pswp__button:hover {
    opacity: 1
}

.pswp__button:active {
    outline: none;
    opacity: .9
}

.pswp__button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.pswp__ui--over-close .pswp__button--close {
    opacity: 1
}

.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
    background: url(http://13.127.231.217/wp-content/themes/woodmart2/images/default-skin.png) 0 0 no-repeat;
    background-size: 264px 88px;
    width: 44px;
    height: 44px
}

@media(-webkit-min-device-pixel-ratio: 1.1),(-webkit-min-device-pixel-ratio: 1.09375),(min-resolution: 105dpi),(min-resolution: 1.1dppx) {
    .pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before {
        background-image:url(http://13.127.231.217/wp-content/themes/woodmart2/images/default-skin.svg)
    }

    .pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right {
        background: none
    }
}

.pswp__button--close {
    background-position: 0 -44px
}

.pswp__button--share {
    background-position: -44px -44px
}

.pswp__button--fs {
    display: none
}

.pswp--supports-fs .pswp__button--fs {
    display: block
}

.pswp--fs .pswp__button--fs {
    background-position: -44px 0
}

.pswp__button--zoom {
    display: none;
    background-position: -88px 0
}

.pswp--zoom-allowed .pswp__button--zoom {
    display: block
}

.pswp--zoomed-in .pswp__button--zoom {
    background-position: -132px 0
}

.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right {
    visibility: hidden
}

.pswp__button--arrow--left,.pswp__button--arrow--right {
    background: none;
    top: 50%;
    margin-top: -50px;
    width: 70px;
    height: 100px;
    position: absolute
}

.pswp__button--arrow--left {
    left: 0
}

.pswp__button--arrow--right {
    right: 0
}

.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
    content: "";
    top: 35px;
    background-color: rgba(0,0,0,.3);
    height: 30px;
    width: 32px;
    position: absolute
}

.pswp__button--arrow--left:before {
    left: 6px;
    background-position: -138px -44px
}

.pswp__button--arrow--right:before {
    right: 6px;
    background-position: -94px -44px
}

.pswp__counter,.pswp__share-modal {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.pswp__share-modal {
    display: block;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 10px;
    position: absolute;
    z-index: 1600;
    opacity: 0;
    -webkit-transition: opacity .25s ease-out;
    transition: opacity .25s ease-out;
    -webkit-backface-visibility: hidden;
    will-change: opacity
}

.pswp__share-modal--hidden {
    display: none
}

.pswp__share-tooltip {
    z-index: 1620;
    position: absolute;
    background: #fff;
    top: 56px;
    border-radius: 2px;
    display: block;
    width: auto;
    right: 44px;
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.25);
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
    -webkit-transition: -webkit-transform .25s;
    transition: -webkit-transform .25s;
    transition: transform .25s;
    transition: transform .25s, -webkit-transform .25s;
    -webkit-backface-visibility: hidden;
    will-change: transform
}

.pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px
}

.pswp__share-tooltip a:hover {
    text-decoration: none;
    color: #000
}

.pswp__share-tooltip a:first-child {
    border-radius: 2px 2px 0 0
}

.pswp__share-tooltip a:last-child {
    border-radius: 0 0 2px 2px
}

.pswp__share-modal--fade-in {
    opacity: 1
}

.pswp__share-modal--fade-in .pswp__share-tooltip {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.pswp--touch .pswp__share-tooltip a {
    padding: 16px 12px
}

a.pswp__share--facebook:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -12px;
    right: 15px;
    border: 6px solid rgba(0,0,0,0);
    border-bottom-color: #fff;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    pointer-events: none
}

a.pswp__share--facebook:hover {
    background: #3e5c9a;
    color: #fff
}

a.pswp__share--facebook:hover:before {
    border-bottom-color: #3e5c9a
}

a.pswp__share--twitter:hover {
    background: #55acee;
    color: #fff
}

a.pswp__share--pinterest:hover {
    background: #ccc;
    color: #ce272d
}

a.pswp__share--download:hover {
    background: #ddd
}

.pswp__counter {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    font-size: 13px;
    line-height: 44px;
    color: #fff;
    opacity: .75;
    padding: 0 10px
}

.pswp__caption {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 44px
}

.pswp__caption small {
    font-size: 11px;
    color: #bbb
}

.pswp__caption__center {
    text-align: left;
    max-width: 420px;
    margin: 0 auto;
    font-size: 13px;
    padding: 10px;
    line-height: 20px;
    color: #ccc
}

.pswp__caption--empty {
    display: none
}

.pswp__caption--fake {
    visibility: hidden
}

.pswp__preloader {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -22px;
    opacity: 0;
    -webkit-transition: opacity .25s ease-out;
    transition: opacity .25s ease-out;
    will-change: opacity;
    direction: ltr
}

.pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px
}

.pswp__preloader--active {
    opacity: 1
}

.pswp__preloader--active .pswp__preloader__icn {
    background: url(http://13.127.231.217/wp-content/themes/woodmart2/images/preloader.gif) 0 0 no-repeat
}

.pswp--css_animation .pswp__preloader--active {
    opacity: 1
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    -webkit-animation: clockwise 500ms linear infinite;
    animation: clockwise 500ms linear infinite
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
    animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite
}

.pswp--css_animation .pswp__preloader__icn {
    background: none;
    opacity: .75;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 15px;
    top: 15px;
    margin: 0
}

.pswp--css_animation .pswp__preloader__cut {
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden
}

.pswp--css_animation .pswp__preloader__donut {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    margin: 0
}

@media screen and (max-width: 1024px) {
    .pswp__preloader {
        position:relative;
        left: auto;
        top: auto;
        margin: 0;
        float: right
    }
}

@-webkit-keyframes clockwise {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes clockwise {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-webkit-keyframes donut-rotate {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    50% {
        -webkit-transform: rotate(-140deg);
        transform: rotate(-140deg)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@keyframes donut-rotate {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    50% {
        -webkit-transform: rotate(-140deg);
        transform: rotate(-140deg)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

.pswp__ui {
    -webkit-font-smoothing: auto;
    visibility: visible;
    opacity: 1;
    z-index: 1550
}

.pswp__top-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%
}

.pswp__caption,.pswp__top-bar,.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right {
    -webkit-backface-visibility: hidden;
    will-change: opacity;
    -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1)
}

.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible
}

.pswp__top-bar,.pswp__caption {
    background-color: rgba(0,0,0,.5)
}

.pswp__ui--fit .pswp__top-bar,.pswp__ui--fit .pswp__caption {
    background-color: rgba(0,0,0,.3)
}

.pswp__ui--idle .pswp__top-bar {
    opacity: 0
}

.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right {
    opacity: 0
}

.pswp__ui--hidden .pswp__top-bar,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right {
    opacity: .001
}

.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter {
    display: none
}

.pswp__element--disabled {
    display: none !important
}

.pswp--minimal--dark .pswp__top-bar {
    background: none
}

.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    letter-spacing: .3px;
    font-size: 12px;
    pointer-events: none;
    -webkit-animation: wd-fadeInTooltip .3s ease;
    animation: wd-fadeInTooltip .3s ease;
    opacity: 0;
    filter: alpha(opacity=0)
}

.tooltip.in {
    opacity: .9;
    filter: alpha(opacity=90)
}

.tooltip.top {
    margin-top: -3px;
    padding: 5px 0
}

.tooltip.right {
    margin-left: 3px;
    padding: 0 5px
}

.tooltip.bottom {
    margin-top: 3px;
    padding: 5px 0
}

.tooltip.left {
    margin-left: -3px;
    padding: 0 5px
}

.tooltip-inner {
    max-width: 200px;
    padding: 0 15px !important;
    line-height: 34px;
    height: 34px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0;
    white-space: nowrap
}

.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
}

.tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.top-left .tooltip-arrow {
    bottom: 0;
    right: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.top-right .tooltip-arrow {
    bottom: 0;
    left: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000
}

.tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000
}

.tooltip.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #000
}

.tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

.tooltip.bottom-left .tooltip-arrow {
    top: 0;
    right: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

.tooltip.bottom-right .tooltip-arrow {
    top: 0;
    left: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000
}

div.wpcf7-response-output {
    margin: 0 0 20px
}

div.wpcf7-response-output.wpcf7-display-none {
    display: none
}

div.wpcf7-response-output[style*="display: block;"] {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important
}

.entry-content .wp-block-categories,.entry-content .wp-block-archives,.entry-content .wp-block-latest-posts.is-grid,.entry-content .wp-block-gallery {
    padding-left: 0
}

.entry-content .wp-block-categories li:before,.entry-content .wp-block-archives li:before,.entry-content .wp-block-latest-posts.is-grid li:before,.entry-content .wp-block-gallery li:before {
    display: none
}

.wp-block-gallery .blocks-gallery-item:last-child {
    margin-bottom: 16px
}

.wp-block-pullquote {
    margin-bottom: 30px
}

.wp-block-pullquote blockquote {
    border: none;
    padding-left: 0;
    margin-bottom: 0;
    text-align: center
}

.wp-block-pullquote:not(.is-style-solid-color) {
    border-width: 2px 0 2px 0;
    border-style: solid
}

.wp-block-archives.aligncenter,.wp-block-categories.aligncenter {
    text-align: center
}

.wp-block-image.alignleft,.wp-block-image .alignleft {
    margin-right: 25px
}

.wp-block-image.alignright,.wp-block-image .alignright {
    margin-left: 25px
}

.wp-block-separator.is-style-dots {
    width: auto
}

.wp-block-separator.is-style-dots:before {
    color: rgba(27,27,27,.6);
    font-size: 36px;
    letter-spacing: 1em;
    padding-left: 1em
}

.wp-block-separator.is-style-wide {
    width: 100%
}

.wp-block-quote.is-large {
    border-left: none
}

.wp-block-quote.is-large cite {
    text-align: left
}

.subtitle-style-background.info-box-subtitle,.subtitle-style-background.banner-subtitle,.subtitle-style-background.title-subtitle {
    display: inline-block;
    padding: 6px 10px;
    font-weight: 600;
    line-height: 1.2
}

.subtitle-color-default.subtitle-style-background {
    background-color: #f4f4f4;
    color: #333
}

.subtitle-color-primary.subtitle-style-background {
    color: #fff
}

.subtitle-color-alt.subtitle-style-background {
    color: #fff
}

.inline-element {
    display: inline-block;
    vertical-align: middle
}

.inline-element:not(:last-child) {
    margin-right: 15px
}

.text-left .inline-element {
    margin-left: 0
}

.text-left .inline-element:not(:last-child) {
    margin-right: 15px
}

.text-right .inline-element {
    margin-right: 0
}

.text-right .inline-element:not(:first-child) {
    margin-left: 15px
}

.text-center .inline-element {
    margin-right: 7px;
    margin-left: 7px
}

.title-wrapper {
    margin-bottom: 30px
}

.title-wrapper .title {
    display: block;
    margin-bottom: 0
}

.title-wrapper .title-subtitle {
    margin-bottom: 10px;
    letter-spacing: .3px
}

.title-wrapper .title-after_title p {
    margin-bottom: 0
}

.title-wrapper .liner-continer {
    position: relative;
    margin-bottom: 10px
}

.title-wrapper .left-line,.title-wrapper .right-line {
    display: none
}

.title-wrapper .img-wrapper {
    margin-top: 10px
}

.title-wrapper > div:last-child {
    margin-bottom: 0
}

.title-wrapper.text-center .title,.title-wrapper.text-center .title-after_title,.title-wrapper.text-center .title-subtitle {
    margin-right: auto;
    margin-left: auto
}

.title-wrapper.text-right .title,.title-wrapper.text-right .title-after_title,.title-wrapper.text-right .title-subtitle {
    margin-left: auto
}

.color-scheme-light .title-wrapper .title {
    color: #fff
}

.color-scheme-light .title-wrapper .title-after_title {
    color: rgba(255,255,255,.8)
}

.woodmart-title-size-small .title-subtitle {
    font-size: 12px
}

.woodmart-title-size-small .woodmart-title-container {
    font-size: 18px
}

.woodmart-title-size-small .title-after_title {
    font-size: 14px
}

.woodmart-title-size-default .title-subtitle {
    font-size: 14px
}

.woodmart-title-size-default .woodmart-title-container {
    font-size: 22px
}

.woodmart-title-size-default .title-after_title {
    font-size: 14px
}

.woodmart-title-size-medium .title-subtitle {
    font-size: 14px
}

.woodmart-title-size-medium .woodmart-title-container {
    font-size: 26px
}

.woodmart-title-size-medium .title-after_title {
    font-size: 110%
}

.woodmart-title-size-large .title-subtitle {
    font-size: 14px
}

.woodmart-title-size-large .woodmart-title-container {
    font-size: 36px;
    line-height: 1.3
}

.woodmart-title-size-large .title-after_title {
    font-size: 110%
}

.woodmart-title-size-extra-large .title-subtitle {
    font-size: 18px
}

.woodmart-title-size-extra-large .subtitle-style-background {
    font-size: 14px
}

.woodmart-title-size-extra-large .woodmart-title-container {
    font-size: 48px;
    line-height: 1.2
}

.woodmart-title-size-extra-large .title-after_title {
    font-size: 110%
}

.woodmart-title-color-default .subtitle-style-default {
    color: #989898
}

.woodmart-title-color-default .subtitle-style-background {
    background-color: #f4f4f4;
    color: #333
}

.color-scheme-light .woodmart-title-color-default .subtitle-style-default {
    color: rgba(255,255,255,.8)
}

.woodmart-title-color-primary .subtitle-style-background {
    color: #fff
}

.woodmart-title-color-alt .subtitle-style-background {
    color: #fff
}

.woodmart-title-color-black .subtitle-style-default {
    color: #000
}

.woodmart-title-color-black .subtitle-style-background {
    background-color: #333;
    color: #fff
}

.woodmart-title-color-white .subtitle-style-default {
    color: rgba(255,255,255,.8)
}

.woodmart-title-color-white .subtitle-style-background {
    background-color: rgba(255,255,255,.8);
    color: #212121
}

.woodmart-title-color-white .title {
    color: #fff
}

.woodmart-title-color-white .title-after_title {
    color: rgba(255,255,255,.8)
}

.woodmart-title-color-gradient .subtitle-style-default {
    color: #989898
}

.woodmart-title-color-gradient .subtitle-style-background {
    background-color: #f4f4f4;
    color: #333
}

.woodmart-title-color-gradient .title {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent
}

.color-scheme-light .woodmart-title-color-gradient .subtitle-style-default {
    color: rgba(255,255,255,.8)
}

.woodmart-title-style-simple .liner-continer {
    padding-bottom: 10px
}

.woodmart-title-style-simple .liner-continer:after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -20px;
    width: 40px;
    height: 2px
}

.woodmart-title-style-simple.text-left .liner-continer:after {
    left: 0;
    margin-left: 0
}

.woodmart-title-style-simple.text-right .liner-continer:after {
    right: 0;
    left: auto;
    margin-left: 0
}

.woodmart-title-style-simple.woodmart-title-color-default .liner-continer:after {
    background-color: rgba(119,119,119,.17)
}

.woodmart-title-style-simple.woodmart-title-color-black .liner-continer:after {
    background-color: #000
}

.woodmart-title-style-simple.woodmart-title-color-white .liner-continer:after {
    background-color: #fff
}

.woodmart-title-style-bordered .liner-continer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-title-style-bordered .title {
    padding-right: 20px;
    padding-left: 20px
}

.woodmart-title-style-bordered .left-line,.woodmart-title-style-bordered .right-line {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border-bottom: 1px solid
}

.woodmart-title-style-bordered.text-left .left-line {
    display: none
}

.woodmart-title-style-bordered.text-left .title {
    padding-left: 0
}

.woodmart-title-style-bordered.text-right .right-line {
    display: none
}

.woodmart-title-style-bordered.text-right .title {
    padding-right: 0
}

.woodmart-title-style-bordered.woodmart-title-color-white .left-line,.woodmart-title-style-bordered.woodmart-title-color-white .right-line {
    border-color: rgba(255,255,255,.3)
}

.color-scheme-light .woodmart-title-style-bordered .left-line,.color-scheme-light .woodmart-title-style-bordered .right-line {
    border-color: rgba(255,255,255,.3)
}

.woodmart-title-style-underlined .liner-continer {
    border-bottom: 2px solid rgba(119,119,119,.17)
}

.woodmart-title-style-underlined .title {
    display: inline-block;
    margin-bottom: -2px;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent
}

.woodmart-title-style-underlined.woodmart-title-color-default .title {
    border-color: #ccc
}

.woodmart-title-style-underlined.woodmart-title-color-black .title {
    border-color: #000
}

.woodmart-title-style-underlined.woodmart-title-color-white .liner-continer {
    border-color: rgba(255,255,255,.5)
}

.woodmart-title-style-underlined.woodmart-title-color-white .title {
    border-color: #fff
}

.color-scheme-light .woodmart-title-style-underlined .liner-continer {
    border-color: rgba(255,255,255,.5)
}

.woodmart-title-style-underlined-2 .title-subtitle {
    margin-bottom: 15px
}

.woodmart-title-style-underlined-2 .liner-continer {
    margin-bottom: 15px
}

.woodmart-title-style-underlined-2 .title {
    display: inline-block;
    border-bottom: 2px solid;
    line-height: .85
}

.woodmart-title-style-underlined-2.woodmart-title-size-large .title {
    border-width: 3px
}

.woodmart-title-style-underlined-2.woodmart-title-size-extra-large .title {
    border-width: 4px
}

.woodmart-title-style-underlined-2:not(.woodmart-title-color-gradient) .title {
    text-shadow: 1px 1px #fff,1px -1px #fff,-1px 1px #fff,-1px -1px #fff
}

.woodmart-title-style-underlined-2:not(.woodmart-title-color-gradient).woodmart-title-size-extra-large .title {
    text-shadow: 2px 2px #fff,2px -2px #fff,-2px 2px #fff,-2px -2px #fff
}

.woodmart-title-style-underlined-2.woodmart-title-color-default .title {
    border-color: #ccc
}

.woodmart-title-style-underlined-2.woodmart-title-color-black .title {
    border-color: #000
}

.woodmart-title-style-underlined-2.woodmart-title-color-white .title {
    border-color: #fff
}

.woodmart-title-style-underlined-2.woodmart-title-color-white .title,.color-scheme-light .woodmart-title-style-underlined-2 .title {
    text-shadow: none !important
}

.woodmart-title-style-shadow {
    padding: 25px;
    -webkit-box-shadow: 0 0 8px rgba(0,0,0,.12);
    box-shadow: 0 0 8px rgba(0,0,0,.12)
}

.woodmart-title-width-10 .woodmart-title-container,.woodmart-title-width-10 .title-after_title,.woodmart-title-width-10 .title-subtitle {
    max-width: 10%
}

.woodmart-title-width-20 .woodmart-title-container,.woodmart-title-width-20 .title-after_title,.woodmart-title-width-20 .title-subtitle {
    max-width: 20%
}

.woodmart-title-width-30 .woodmart-title-container,.woodmart-title-width-30 .title-after_title,.woodmart-title-width-30 .title-subtitle {
    max-width: 30%
}

.woodmart-title-width-40 .woodmart-title-container,.woodmart-title-width-40 .title-after_title,.woodmart-title-width-40 .title-subtitle {
    max-width: 40%
}

.woodmart-title-width-50 .woodmart-title-container,.woodmart-title-width-50 .title-after_title,.woodmart-title-width-50 .title-subtitle {
    max-width: 50%
}

.woodmart-title-width-60 .woodmart-title-container,.woodmart-title-width-60 .title-after_title,.woodmart-title-width-60 .title-subtitle {
    max-width: 60%
}

.woodmart-title-width-70 .woodmart-title-container,.woodmart-title-width-70 .title-after_title,.woodmart-title-width-70 .title-subtitle {
    max-width: 70%
}

.woodmart-title-width-80 .woodmart-title-container,.woodmart-title-width-80 .title-after_title,.woodmart-title-width-80 .title-subtitle {
    max-width: 80%
}

.woodmart-title-width-90 .woodmart-title-container,.woodmart-title-width-90 .title-after_title,.woodmart-title-width-90 .title-subtitle {
    max-width: 90%
}

.woodmart-text-block-wrapper {
    margin-bottom: 35px
}

.woodmart-text-block-wrapper .woodmart-text-block p:first-child:empty,.woodmart-text-block-wrapper .woodmart-text-block p:first-child:empty ~ p:last-child {
    display: none
}

.woodmart-text-block-wrapper .woodmart-text-block h1,.woodmart-text-block-wrapper .woodmart-text-block h2,.woodmart-text-block-wrapper .woodmart-text-block h3,.woodmart-text-block-wrapper .woodmart-text-block h4,.woodmart-text-block-wrapper .woodmart-text-block h5,.woodmart-text-block-wrapper .woodmart-text-block h6,.woodmart-text-block-wrapper .woodmart-text-block p,.woodmart-text-block-wrapper .woodmart-text-block a {
    color: inherit;
    font-size: inherit;
    line-height: inherit
}

.woodmart-text-block-wrapper.text-center .woodmart-title-container {
    margin-right: auto;
    margin-left: auto
}

.woodmart-text-block-wrapper.text-left .woodmart-title-container {
    margin-right: auto
}

.woodmart-text-block-wrapper.text-right .woodmart-title-container {
    margin-left: auto
}

.woodmart-text-block-wrapper.color-scheme-dark .woodmart-title-container {
    color: #2d2a2a
}

.woodmart-text-block-wrapper.color-scheme-light .woodmart-title-container {
    color: #fff
}

.woodmart-social-icons {
    vertical-align: middle;
    font-size: 0
}

.woodmart-social-icons .woodmart-social-icon {
    display: inline-block;
    margin: 4px;
    text-align: center;
    font-size: 0
}

.woodmart-social-icons i {
    vertical-align: middle
}

.woodmart-social-icons p {
    display: inline-block;
    margin: 0
}

.icons-design-default .woodmart-social-icon {
    margin: 0 !important;
    padding: 6px;
    width: auto !important;
    height: auto !important;
    color: rgba(0,0,0,.6) !important
}

.icons-design-default .woodmart-social-icon i {
    line-height: 1 !important
}

.icons-design-default .woodmart-social-icon:hover {
    color: rgba(0,0,0,.8) !important
}

.icons-design-default.color-scheme-light .woodmart-social-icon,.color-scheme-light .icons-design-default .woodmart-social-icon {
    color: #fff !important
}

.icons-design-default.color-scheme-light .woodmart-social-icon:hover,.color-scheme-light .icons-design-default .woodmart-social-icon:hover {
    color: rgba(255,255,255,.6) !important
}

.icons-design-simple .woodmart-social-icon {
    background-color: #f2f2f2;
    color: rgba(0,0,0,.4) !important
}

.icons-design-simple .woodmart-social-icon:hover {
    color: #fff !important
}

.icons-design-simple.color-scheme-light .woodmart-social-icon,.color-scheme-light .icons-design-simple .woodmart-social-icon {
    background-color: rgba(255,255,255,.3);
    color: #fff !important
}

.icons-design-colored-alt .woodmart-social-icon {
    background-color: #efefef;
    color: rgba(0,0,0,.4) !important
}

.icons-design-colored-alt.color-scheme-light .woodmart-social-icon,.color-scheme-light .icons-design-colored-alt .woodmart-social-icon {
    background-color: rgba(255,255,255,.3);
    color: #fff !important
}

.icons-design-bordered .woodmart-social-icon {
    border: 2px solid #ccc;
    background-color: transparent;
    color: rgba(0,0,0,.4) !important
}

.icons-design-bordered .woodmart-social-icon i {
    margin-top: -2px
}

.icons-design-bordered.color-scheme-light .woodmart-social-icon,.color-scheme-light .icons-design-bordered .woodmart-social-icon {
    border: 2px solid rgba(255,255,255,.4);
    color: #fff !important
}

.icons-design-colored .woodmart-social-icon {
    color: #fff !important
}

.icons-design-colored .woodmart-social-icon:hover {
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.15);
    box-shadow: inset 0 0 200px rgba(0,0,0,.15);
    color: #fff !important
}

.icons-design-colored .social-facebook {
    background-color: #365493
}

.icons-design-colored .social-twitter {
    background-color: #3cf
}

.icons-design-colored .social-instagram {
    background-color: #774430
}

.icons-design-colored .social-email {
    background-color: #f89a1e
}

.icons-design-colored .social-pinterest {
    background-color: #cb2027
}

.icons-design-colored .social-youtube {
    background-color: #cb2027
}

.icons-design-colored .social-tumblr {
    background-color: #36465d
}

.icons-design-colored .social-linkedin {
    background-color: #0274b3
}

.icons-design-colored .social-vimeo {
    background-color: #1ab7ea
}

.icons-design-colored .social-flickr {
    background-color: #fe0072
}

.icons-design-colored .social-github {
    background-color: #171515
}

.icons-design-colored .social-dribbble {
    background-color: #ec5e95
}

.icons-design-colored .social-behance {
    background-color: #1f6ffc
}

.icons-design-colored .social-soundcloud {
    background-color: #f9490d
}

.icons-design-colored .social-spotify {
    background-color: #2ebd59
}

.icons-design-colored .social-skype {
    background-color: #00aff0
}

.icons-design-colored .social-ok {
    background-color: #ee8208
}

.icons-design-colored .social-whatsapp {
    background-color: #1ebea5
}

.icons-design-colored .social-vk {
    background-color: #4c75a3
}

.icons-design-colored .social-snapchat {
    background-color: #fffc00
}

.icons-design-colored .social-tg {
    background-color: #37aee2
}

.icons-design-colored-alt .woodmart-social-icon:hover,.icons-design-bordered .woodmart-social-icon:hover {
    color: #fff !important
}

.icons-design-colored-alt .social-facebook:hover,.icons-design-bordered .social-facebook:hover {
    border-color: #365493;
    background-color: #365493
}

.icons-design-colored-alt .social-twitter:hover,.icons-design-bordered .social-twitter:hover {
    border-color: #3cf;
    background-color: #3cf
}

.icons-design-colored-alt .social-instagram:hover,.icons-design-bordered .social-instagram:hover {
    border-color: #774430;
    background-color: #774430
}

.icons-design-colored-alt .social-email:hover,.icons-design-bordered .social-email:hover {
    border-color: #f89a1e;
    background-color: #f89a1e
}

.icons-design-colored-alt .social-youtube:hover,.icons-design-bordered .social-youtube:hover {
    border-color: #cb2027;
    background-color: #cb2027
}

.icons-design-colored-alt .social-pinterest:hover,.icons-design-bordered .social-pinterest:hover {
    border-color: #cb2027;
    background-color: #cb2027
}

.icons-design-colored-alt .social-tumblr:hover,.icons-design-bordered .social-tumblr:hover {
    border-color: #36465d;
    background-color: #36465d
}

.icons-design-colored-alt .social-linkedin:hover,.icons-design-bordered .social-linkedin:hover {
    border-color: #0274b3;
    background-color: #0274b3
}

.icons-design-colored-alt .social-vimeo:hover,.icons-design-bordered .social-vimeo:hover {
    border-color: #1ab7ea;
    background-color: #1ab7ea
}

.icons-design-colored-alt .social-flickr:hover,.icons-design-bordered .social-flickr:hover {
    border-color: #fe0072;
    background-color: #fe0072
}

.icons-design-colored-alt .social-github:hover,.icons-design-bordered .social-github:hover {
    border-color: #171515;
    background-color: #171515
}

.icons-design-colored-alt .social-dribbble:hover,.icons-design-bordered .social-dribbble:hover {
    border-color: #ec5e95;
    background-color: #ec5e95
}

.icons-design-colored-alt .social-behance:hover,.icons-design-bordered .social-behance:hover {
    border-color: #1f6ffc;
    background-color: #1f6ffc
}

.icons-design-colored-alt .social-soundcloud:hover,.icons-design-bordered .social-soundcloud:hover {
    border-color: #f9490d;
    background-color: #f9490d
}

.icons-design-colored-alt .social-spotify:hover,.icons-design-bordered .social-spotify:hover {
    border-color: #2ebd59;
    background-color: #2ebd59
}

.icons-design-colored-alt .social-skype:hover,.icons-design-bordered .social-skype:hover {
    border-color: #00aff0;
    background-color: #00aff0
}

.icons-design-colored-alt .social-ok:hover,.icons-design-bordered .social-ok:hover {
    border-color: #ee8208;
    background-color: #ee8208
}

.icons-design-colored-alt .social-whatsapp:hover,.icons-design-bordered .social-whatsapp:hover {
    border-color: #1ebea5;
    background-color: #1ebea5
}

.icons-design-colored-alt .social-vk:hover,.icons-design-bordered .social-vk:hover {
    border-color: #4c75a3;
    background-color: #4c75a3
}

.icons-design-colored-alt .social-snapchat:hover,.icons-design-bordered .social-snapchat:hover {
    border-color: #fffc00;
    background-color: #fffc00
}

.icons-design-colored-alt .social-tg:hover,.icons-design-bordered .social-tg:hover {
    border-color: #37aee2;
    background-color: #37aee2
}

.icons-size-small .woodmart-social-icon,.icons-size- .woodmart-social-icon {
    width: 30px;
    height: 30px
}

.icons-size-small i,.icons-size- i {
    font-size: 14px;
    line-height: 30px
}

.icons-size-default .woodmart-social-icon {
    width: 40px;
    height: 40px
}

.icons-size-default i {
    font-size: 18px;
    line-height: 40px
}

.icons-size-large .woodmart-social-icon {
    width: 60px;
    height: 60px
}

.icons-size-large i {
    font-size: 22px;
    line-height: 60px
}

.social-form-circle .woodmart-social-icon {
    border-radius: 50%
}

.woodmart-sticky-social {
    position: fixed;
    top: 50%;
    z-index: 399;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: -webkit-transform .3s ease 1s;
    transition: -webkit-transform .3s ease 1s;
    transition: transform .3s ease 1s;
    transition: transform .3s ease 1s, -webkit-transform .3s ease 1s
}

.woodmart-sticky-social .woodmart-social-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    overflow: hidden;
    margin: 0;
    min-width: 40px;
    width: auto;
    height: 40px
}

.woodmart-sticky-social .woodmart-social-icon:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-sticky-social .woodmart-social-icon:hover .woodmart-social-icon-name {
    max-width: 220px
}

.woodmart-sticky-social i {
    width: 40px;
    font-size: 14px;
    line-height: 40px
}

.woodmart-sticky-social .woodmart-social-icon-name {
    overflow: hidden;
    padding: 0;
    max-width: 0;
    white-space: nowrap;
    font-weight: 600;
    font-size: 14px;
    -webkit-transition: padding .4s cubic-bezier(0.175, 0.885, 0.32, 1.15),max-width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    transition: padding .4s cubic-bezier(0.175, 0.885, 0.32, 1.15),max-width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15)
}

.woodmart-sticky-social.buttons-loaded {
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
}

.woodmart-sticky-social-right {
    right: 0;
    -webkit-transform: translate3d(100%, -50%, 0);
    transform: translate3d(100%, -50%, 0);
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.woodmart-sticky-social-right .woodmart-social-icon {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
}

.woodmart-sticky-social-right .woodmart-social-icon:hover .woodmart-social-icon-name {
    padding-left: 15px
}

.woodmart-sticky-social-left {
    left: 0;
    -webkit-transform: translate3d(-100%, -50%, 0);
    transform: translate3d(-100%, -50%, 0);
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.woodmart-sticky-social-left .woodmart-social-icon {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-sticky-social-left .woodmart-social-icon:hover .woodmart-social-icon-name {
    padding-right: 15px
}

.google-map-container {
    position: relative
}

.google-map-container .woodmart-google-map-wrapper {
    z-index: 4
}

.google-map-container .woodmart-google-map-wrapper,.google-map-container .woodmart-google-map {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.google-map-container img {
    max-width: none
}

.map-container-with-content.content-vertical-top .woodmart-google-map-content-wrap {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.map-container-with-content.content-vertical-middle .woodmart-google-map-content-wrap {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.map-container-with-content.content-vertical-bottom .woodmart-google-map-content-wrap {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.map-container-with-content.content-horizontal-left .woodmart-google-map-content-wrap {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.map-container-with-content.content-horizontal-center .woodmart-google-map-content-wrap {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.map-container-with-content.content-horizontal-right .woodmart-google-map-content-wrap {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.woodmart-google-map-content-wrap {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 15px;
    width: 90%;
    height: 100%
}

.woodmart-google-map-content-wrap > .woodmart-google-map-content {
    z-index: 6;
    margin-bottom: 0;
    padding: 30px;
    max-width: 300px;
    width: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 0 12px rgba(0,0,0,.22);
    box-shadow: 0 0 12px rgba(0,0,0,.22)
}

.map-mask-dark {
    background-color: #000
}

.map-mask-dark .woodmart-google-map-wrapper {
    opacity: .6
}

.map-mask-light {
    background-color: #fff
}

.map-mask-light .woodmart-google-map-wrapper {
    opacity: .7
}

.woodmart-counter {
    margin-bottom: 35px
}

.woodmart-counter > span {
    display: block
}

.woodmart-counter .counter-value {
    color: #333;
    font-size: 36px;
    line-height: 1
}

.woodmart-counter .counter-label {
    margin-top: 10px;
    color: #777;
    font-size: 16px;
    line-height: 1.4
}

.woodmart-counter.counter-small .counter-value {
    font-size: 28px
}

.woodmart-counter.counter-small .counter-label {
    font-size: 14px
}

.woodmart-counter.counter-large .counter-value {
    font-size: 44px
}

.woodmart-counter.counter-large .counter-label {
    font-size: 18px
}

.woodmart-counter.counter-extra-large .counter-value {
    font-size: 54px
}

.woodmart-counter.counter-extra-large .counter-label {
    font-size: 20px
}

.woodmart-counter.color-scheme-light .counter-value,.color-scheme-light .woodmart-counter .counter-value {
    color: #fff
}

.woodmart-counter.color-scheme-light .counter-label,.color-scheme-light .woodmart-counter .counter-label {
    color: rgba(255,255,255,.8)
}

.woodmart-counter.color-scheme-dark .counter-value {
    color: #333
}

.woodmart-counter.color-scheme-dark .counter-label {
    color: #777
}

.woodmart-counter.color-scheme-custom .counter-value,.woodmart-counter.color-scheme-custom .counter-label {
    color: inherit
}

.promo-banner {
    position: relative;
    overflow: hidden
}

.promo-banner .promo-banner-image {
    width: 100%
}

.promo-banner .wrapper-content-banner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    padding: 30px
}

.promo-banner .content-banner {
    position: relative;
    width: 100%
}

.promo-banner .content-banner > div:first-child {
    margin-top: 0
}

.promo-banner .banner-title-wrap .banner-subtitle:first-child,.promo-banner .banner-title-wrap .banner-title:first-child {
    margin-top: 0
}

.promo-banner .banner-title-wrap:empty {
    display: none
}

.promo-banner .banner-subtitle,.promo-banner .banner-title,.promo-banner .banner-inner {
    margin-top: 7px
}

.promo-banner .banner-subtitle {
    display: block
}

.promo-banner .subtitle-style-background {
    display: inline-block
}

.promo-banner .banner-title {
    display: block;
    margin-bottom: 0;
    line-height: 1.4
}

.promo-banner .banner-btn-wrapper {
    margin-top: 15px
}

.promo-banner .banner-inner p:first-child:empty {
    display: none
}

.content-width-10 {
    max-width: 10%
}

.content-width-20 {
    max-width: 20%
}

.content-width-30 {
    max-width: 30%
}

.content-width-40 {
    max-width: 40%
}

.content-width-50 {
    max-width: 50%
}

.content-width-60 {
    max-width: 60%
}

.content-width-70 {
    max-width: 70%
}

.content-width-80 {
    max-width: 80%
}

.content-width-90 {
    max-width: 90%
}

.banner-title-small .banner-subtitle {
    font-size: 14px
}

.banner-title-small .banner-title {
    font-size: 16px
}

.banner-title-default .banner-subtitle {
    font-size: 14px
}

.banner-title-default .banner-title {
    font-size: 22px
}

.banner-title-large .banner-subtitle {
    font-size: 16px
}

.banner-title-large .subtitle-style-background {
    font-size: 14px
}

.banner-title-large .banner-title {
    font-size: 28px;
    line-height: 1.2
}

.banner-title-extra-large .banner-subtitle {
    font-size: 18px
}

.banner-title-extra-large .subtitle-style-background {
    font-size: 14px
}

.banner-title-extra-large .banner-title {
    font-size: 32px;
    line-height: 1.2
}

.content-banner .content-size-default {
    font-size: 14px
}

.content-banner .content-size-medium {
    font-size: 16px
}

.content-banner .content-size-large {
    font-size: 18px
}

.banner-increased-padding .wrapper-content-banner {
    padding: 7%
}

.banner-vr-align-middle .wrapper-content-banner {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.banner-vr-align-bottom .wrapper-content-banner {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.banner-hr-align-left .wrapper-content-banner {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.banner-hr-align-right .wrapper-content-banner {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.banner-hr-align-center .wrapper-content-banner {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.banner-hover-zoom {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.banner-hover-zoom .banner-image {
    -webkit-transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.banner-hover-zoom:hover .banner-image {
    -webkit-transform: scale(1.09);
    transform: scale(1.09)
}

.banner-hover-zoom-reverse {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.banner-hover-zoom-reverse .banner-image {
    -webkit-transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    -webkit-transform: scale(1.09);
    transform: scale(1.09)
}

.banner-hover-zoom-reverse:hover .banner-image {
    -webkit-transform: none;
    transform: none
}

.banner-hover-background,.banner-hover-border {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.banner-hover-background .banner-image,.banner-hover-border .banner-image {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0, 0, 0.44, 1.18);
    transition: -webkit-transform 1s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform 1s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform 1s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform 1s cubic-bezier(0, 0, 0.44, 1.18)
}

.banner-hover-background:hover .banner-image,.banner-hover-border:hover .banner-image {
    -webkit-transform: scale(1.09);
    transform: scale(1.09)
}

.banner-hover-background:not(.banner-background) .wrapper-content-banner,.banner-hover-border:not(.banner-border) .wrapper-content-banner {
    overflow: hidden;
    padding: 40px
}

.banner-hover-background:not(.banner-background) .wrapper-content-banner:after,.banner-hover-border:not(.banner-border) .wrapper-content-banner:after {
    content: "";
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    z-index: 2;
    opacity: 0;
    -webkit-transition: opacity .35s cubic-bezier(0.05, 0.2, 0.1, 1),-webkit-transform .35s cubic-bezier(0.05, 0.2, 0.1, 1);
    transition: opacity .35s cubic-bezier(0.05, 0.2, 0.1, 1),-webkit-transform .35s cubic-bezier(0.05, 0.2, 0.1, 1);
    transition: transform .35s cubic-bezier(0.05, 0.2, 0.1, 1),opacity .35s cubic-bezier(0.05, 0.2, 0.1, 1);
    transition: transform .35s cubic-bezier(0.05, 0.2, 0.1, 1),opacity .35s cubic-bezier(0.05, 0.2, 0.1, 1),-webkit-transform .35s cubic-bezier(0.05, 0.2, 0.1, 1);
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.banner-hover-background:not(.banner-background) .content-banner,.banner-hover-border:not(.banner-border) .content-banner {
    z-index: 4
}

.banner-hover-background:not(.banner-background):hover .wrapper-content-banner:after,.banner-hover-border:not(.banner-border):hover .wrapper-content-banner:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1)
}

.banner-hover-background.banner-border .wrapper-content-banner,.banner-hover-border.banner-background .wrapper-content-banner {
    padding: 30px
}

.banner-hover-background.banner-border .wrapper-content-banner:after,.banner-hover-border.banner-background .wrapper-content-banner:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.banner-hover-background:not(.banner-background) .wrapper-content-banner:after {
    background-color: rgba(0,0,0,.9)
}

.banner-hover-background.color-scheme-dark:not(.banner-border) .wrapper-content-banner:after {
    background-color: rgba(255,255,255,.9)
}

.banner-hover-border:not(.banner-border) .wrapper-content-banner:after {
    border: 5px solid rgba(255,255,255,.3)
}

.banner-hover-border.color-scheme-dark:not(.banner-border) .wrapper-content-banner:after {
    border-color: rgba(0,0,0,.1)
}

.banner-mask .wrapper-content-banner {
    background-color: rgba(0,0,0,.3);
    -webkit-transition: background-color .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: background-color .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.banner-mask.color-scheme-dark .wrapper-content-banner {
    background-color: rgba(255,255,255,.3)
}

.banner-mask.banner-hover-zoom:hover .wrapper-content-banner,.banner-mask.banner-hover-zoom-reverse:hover .wrapper-content-banner {
    background-color: rgba(0,0,0,.6)
}

.banner-mask.banner-hover-zoom.color-scheme-dark:hover .wrapper-content-banner,.banner-mask.banner-hover-zoom-reverse.color-scheme-dark:hover .wrapper-content-banner {
    background-color: rgba(255,255,255,.6)
}

.banner-shadow {
    -webkit-box-shadow: 0 10px 20px -9px rgba(0,0,0,.5);
    box-shadow: 0 10px 20px -9px rgba(0,0,0,.5)
}

.banner-background .wrapper-content-banner,.banner-border .wrapper-content-banner {
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    overflow: hidden
}

.banner-background .wrapper-content-banner {
    background-color: rgba(0,0,0,.8)
}

.banner-background.color-scheme-dark .wrapper-content-banner {
    background-color: rgba(255,255,255,.8)
}

.banner-content-background .wrapper-content-banner {
    width: 100%;
    background-color: rgba(0,0,0,.8);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 800px;
    perspective: 800px
}

.banner-content-background.banner-vr-align-top .wrapper-content-banner {
    bottom: auto
}

.banner-content-background.banner-vr-align-middle .wrapper-content-banner {
    top: 50%;
    bottom: auto;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
}

.banner-content-background.banner-vr-align-bottom .wrapper-content-banner {
    top: auto
}

.banner-content-background.banner-hr-align-left .wrapper-content-banner {
    right: auto
}

.banner-content-background.banner-hr-align-center .wrapper-content-banner {
    right: auto;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0)
}

.banner-content-background.banner-hr-align-center.banner-vr-align-middle .wrapper-content-banner {
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0)
}

.banner-content-background.banner-hr-align-right .wrapper-content-banner {
    left: auto
}

.banner-content-background.color-scheme-dark .wrapper-content-banner {
    background-color: rgba(255,255,255,.8)
}

.banner-border .wrapper-content-banner {
    border: 5px solid rgba(255,255,255,.3)
}

.banner-border.color-scheme-dark .wrapper-content-banner {
    border-color: rgba(0,0,0,.1)
}

.testimonial .testimonial-avatar {
    display: inline-block;
    overflow: hidden;
    border-radius: 50%
}

.testimonial .testimonial-avatar img {
    min-width: 60px;
    max-width: 100px
}

.testimonial .testimonial-rating {
    display: none;
    margin-bottom: 10px;
    font-size: 0
}

.testimonial .testimonial-content footer {
    margin-top: 15px;
    color: #2d2a2a;
    font-weight: 600
}

.testimonial .testimonial-content footer > span {
    color: #777;
    font-weight: normal
}

.testimonial .testimonial-content footer > span:before {
    content: " - "
}

.color-scheme-light .testimonial .testimonial-content {
    color: #fff
}

.color-scheme-light .testimonial .testimonial-content footer {
    color: rgba(255,255,255,.9)
}

.color-scheme-light .testimonial .testimonial-content footer > span {
    color: rgba(255,255,255,.8)
}

.testimon-with-rating .testimonial-rating {
    display: block
}

.testimon-text-size-small .testimonial-content {
    font-size: 14px
}

.testimon-text-size-medium .testimonial-content {
    font-size: 16px
}

.testimon-text-size-large .testimonial-content {
    font-size: 18px
}

.testimon-align-center .testimonial {
    text-align: center
}

.testimon-align-center .testimonial-avatar {
    margin-bottom: 15px
}

.testimon-align-left .testimonial-inner,.testimon-align-right .testimonial-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.testimon-align-left .testimonial-avatar,.testimon-align-right .testimonial-avatar {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.testimon-align-left .testimonial-content,.testimon-align-right .testimonial-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.testimon-align-left .testimonial {
    text-align: left
}

.testimon-align-left .testimonial-inner {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.testimon-align-left .testimonial-avatar {
    margin-right: 20px
}

.testimon-align-right .testimonial {
    text-align: right
}

.testimon-align-right .testimonial-inner {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
}

.testimon-align-right .testimonial-avatar {
    margin-left: 20px
}

.testimonials-slider .owl-stage-outer,.testimonials-slider .owl-carousel:not(.owl-loaded) {
    padding-top: 10px;
    padding-bottom: 10px
}

.testimon-style-boxed .testimonial-inner {
    padding: 30px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.1);
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    -webkit-transition: -webkit-box-shadow .5s ease;
    transition: -webkit-box-shadow .5s ease;
    transition: box-shadow .5s ease;
    transition: box-shadow .5s ease, -webkit-box-shadow .5s ease
}

.testimon-style-boxed .testimonial:hover .testimonial-inner {
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,.15);
    box-shadow: 0 0 10px rgba(0,0,0,.15)
}

.color-scheme-light .testimon-style-boxed .testimonial-inner {
    background-color: rgba(0,0,0,.7)
}

.instagram-widget {
    position: relative
}

.instagram-widget.instagram-with-error img {
    width: 100%
}

.instagram-widget.instagram-with-error.loading {
    -webkit-animation: wd-SemiFadeOut .4s infinite alternate linear;
    animation: wd-SemiFadeOut .4s infinite alternate linear
}

.instagram-widget .instagram-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.instagram-widget .instagram-content-inner {
    z-index: 5;
    padding: 30px;
    max-width: 300px;
    width: 100%;
    background: #fff;
    -webkit-box-shadow: 0 0 12px rgba(0,0,0,.22);
    box-shadow: 0 0 12px rgba(0,0,0,.22)
}

.instagram-widget .clear {
    margin-top: 10px;
    margin-bottom: 0
}

.instagram-widget .clear a {
    color: #333;
    font-weight: 600;
    font-size: 14px
}

.instagram-widget .clear a:before {
    margin-right: 5px;
    vertical-align: middle;
    font-family: "FontAwesome";
    content: "\f16d"
}

.instagram-picture {
    padding-right: 0;
    padding-left: 0
}

.instagram-picture img {
    width: 100%
}

.instagram-picture .wrapp-picture {
    position: relative;
    overflow: hidden;
    text-align: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 800px;
    perspective: 800px
}

.instagram-picture .wrapp-picture a,.instagram-picture .wrapp-picture:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.instagram-picture .wrapp-picture a {
    z-index: 4
}

.instagram-picture .wrapp-picture:after {
    content: "";
    z-index: 1;
    background-color: rgba(0,0,0,.4);
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.instagram-picture .hover-mask {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 15px;
    padding-bottom: 20px;
    padding-left: 15px;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.65)));
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    opacity: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(100%);
    transform: translateY(100%)
}

.instagram-picture .instagram-likes,.instagram-picture .instagram-comments {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    overflow: hidden;
    padding-right: 5px;
    padding-left: 5px;
    max-width: 50%;
    width: 50%;
    color: #fff;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 18px;
    line-height: 1
}

.instagram-picture .instagram-likes:before,.instagram-picture .instagram-likes span,.instagram-picture .instagram-comments:before,.instagram-picture .instagram-comments span {
    vertical-align: middle
}

.instagram-picture .instagram-likes:before,.instagram-picture .instagram-comments:before {
    display: inline-block;
    margin-right: 5px;
    font-weight: 400;
    font-size: 20px
}

.instagram-picture .instagram-likes {
    text-align: left
}

.instagram-picture .instagram-likes:before {
    content: "\f108";
    font-family: "woodmart-font"
}

.instagram-picture .instagram-comments {
    text-align: right
}

.instagram-picture .instagram-comments:before {
    font-size: 18px;
    content: "\f104";
    font-family: "woodmart-font"
}

.instagram-picture:hover .hover-mask {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.instagram-picture:hover .wrapp-picture:after {
    opacity: 1
}

.instagram-rounded .wrapp-picture {
    border-radius: 50%
}

.instagram-rounded .hover-mask {
    top: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: transparent;
    -webkit-transform: translateY(20px);
    transform: translateY(20px)
}

.instagram-rounded .instagram-likes,.instagram-rounded .instagram-comments {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    padding-right: 15px;
    padding-left: 15px;
    max-width: none;
    width: auto;
    text-align: center
}

.woodmart-instagram .hover-mask {
    display: none
}

.woodmart-info-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 35px
}

.woodmart-info-box .box-icon-wrapper {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    line-height: 0
}

.woodmart-info-box .info-box-icon {
    display: inline-block
}

.woodmart-info-box .info-svg-wrapper {
    display: inline-block
}

.woodmart-info-box .info-svg-wrapper svg {
    width: inherit !important;
    height: inherit !important
}

.woodmart-info-box .info-box-subtitle {
    margin-bottom: 9px;
    line-height: 1.4
}

.woodmart-info-box .subtitle-style-background {
    line-height: 1.2
}

.woodmart-info-box .info-box-title {
    display: block;
    margin-bottom: 10px;
    line-height: 1.4
}

.woodmart-info-box .info-box-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-info-box .info-box-inner p:first-child:empty,.woodmart-info-box .info-box-inner p:first-child:empty ~ p:last-child {
    display: none
}

.woodmart-info-box .info-btn-wrapper {
    margin-top: 15px
}

.woodmart-info-box.hover-color-scheme-light:hover .info-svg-wrapper svg {
    fill: #fff !important
}

.woodmart-info-box.hover-color-scheme-light:hover .info-box-icon {
    color: #fff
}

.box-icon-align-top .box-icon-wrapper {
    margin-bottom: 15px
}

.box-icon-align-left {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.box-icon-align-left .box-icon-wrapper {
    margin-right: 20px;
    max-width: 50%
}

.box-icon-align-right {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
}

.box-icon-align-right .box-icon-wrapper {
    margin-left: 20px;
    max-width: 50%
}

.box-title-style-underlined {
    padding-bottom: 10px;
    border-bottom: 1px solid;
    border-color: rgba(129,129,129,.2)
}

.woodmart-info-box.color-scheme-light .box-title-style-underlined,.woodmart-info-box.hover-color-scheme-light:hover .box-title-style-underlined {
    border-color: rgba(255,255,255,.15)
}

.box-title-small .info-box-subtitle {
    font-size: 14px
}

.box-title-small .info-box-title {
    font-size: 16px
}

.box-title-default .info-box-subtitle {
    font-size: 14px
}

.box-title-default .info-box-title {
    font-size: 20px
}

.box-title-large .info-box-subtitle {
    font-size: 16px
}

.box-title-large .subtitle-style-background {
    font-size: 14px
}

.box-title-large .info-box-title {
    font-size: 28px;
    line-height: 1.3
}

.box-title-extra-large .info-box-subtitle {
    font-size: 18px
}

.box-title-extra-large .subtitle-style-background {
    font-size: 14px
}

.box-title-extra-large .info-box-title {
    font-weight: bold;
    font-size: 34px;
    line-height: 1.2
}

.box-with-icon .info-box-icon {
    overflow: hidden
}

.box-icon-wrapper.box-with-text {
    font-weight: bold;
    line-height: 1
}

.box-with-text.text-size-small {
    font-size: 38px
}

.box-with-text.text-size-default {
    font-size: 52px
}

.box-with-text.text-size-large {
    font-size: 74px
}

.box-icon-with-bg .info-box-icon {
    padding: 20px;
    background-color: #f4f4f4;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.box-icon-with-border .info-box-icon {
    padding: 18px;
    border: 2px solid #f4f4f4;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.box-icon-with-bg .info-box-icon,.box-icon-with-border .info-box-icon {
    border-radius: 50%;
    text-align: center
}

.box-icon-with-bg.box-with-text .info-box-icon,.box-icon-with-border.box-with-text .info-box-icon {
    padding: 0 10px;
    border-radius: 100px
}

.box-icon-with-bg.text-size-small .info-box-icon,.box-icon-with-border.text-size-small .info-box-icon {
    min-width: 85px;
    height: 85px;
    line-height: 85px
}

.box-icon-with-bg.text-size-default .info-box-icon,.box-icon-with-border.text-size-default .info-box-icon {
    min-width: 100px;
    height: 100px;
    line-height: 100px
}

.box-icon-with-bg.text-size-large .info-box-icon,.box-icon-with-border.text-size-large .info-box-icon {
    min-width: 130px;
    height: 130px;
    line-height: 130px
}

.box-btn-hover .info-btn-wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    margin-top: 0;
    padding-top: 15px;
    opacity: 0;
    -webkit-transition: opacity .25s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,-webkit-transform .25s ease;
    transition: transform .25s ease,opacity .25s ease;
    transition: transform .25s ease,opacity .25s ease,-webkit-transform .25s ease;
    -webkit-transform: translateY(15px);
    transform: translateY(15px)
}

.box-btn-hover:hover .info-btn-wrapper {
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.info-box-wrapper.inline-element {
    max-width: 100%
}

.info-box-carousel .inline-element {
    display: block;
    margin-right: 0 !important;
    margin-left: 0 !important
}

.info-box-carousel .inline-element .woodmart-info-box {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex
}

.box-style-shadow {
    padding: 30px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.12);
    box-shadow: 0 0 4px rgba(0,0,0,.12);
    -webkit-transition: -webkit-box-shadow .7s ease;
    transition: -webkit-box-shadow .7s ease;
    transition: box-shadow .7s ease;
    transition: box-shadow .7s ease, -webkit-box-shadow .7s ease
}

.box-style-shadow:hover {
    -webkit-box-shadow: 0 0 9px rgba(0,0,0,.2);
    box-shadow: 0 0 9px rgba(0,0,0,.2)
}

.box-style-bg-hover {
    padding: 30px;
    -webkit-box-shadow: 2px 3px 14px transparent;
    box-shadow: 2px 3px 14px transparent
}

.box-style-bg-hover .info-svg-wrapper svg {
    -webkit-transition: fill .25s ease;
    transition: fill .25s ease
}

.box-style-bg-hover:hover {
    -webkit-box-shadow: 2px 3px 14px rgba(0,0,0,.16);
    box-shadow: 2px 3px 14px rgba(0,0,0,.16)
}

.box-style-bg-gradient {
    position: relative
}

.box-style-bg-gradient:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    opacity: 0;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.box-style-bg-gradient .box-icon-wrapper,.box-style-bg-gradient .info-box-content {
    z-index: 1
}

.box-style-bg-gradient:hover:after {
    opacity: 1
}

.box-style-border .info-box-content {
    padding: 30px;
    border: 3px solid rgba(119,119,119,.17)
}

.box-style-border .box-icon-wrapper {
    position: relative;
    z-index: 2
}

.box-style-border.box-icon-align-left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.box-style-border.box-icon-align-left .info-box-content {
    padding-left: 50px
}

.box-style-border.box-icon-align-left .info-box-icon {
    margin-right: -50px
}

.box-style-border.box-icon-align-right {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.box-style-border.box-icon-align-right .info-box-content {
    padding-right: 50px
}

.box-style-border.box-icon-align-right .info-box-icon {
    margin-left: -50px
}

.box-style-border.box-icon-align-top .box-icon-wrapper {
    margin-bottom: -25px;
    padding-right: 30px;
    padding-left: 30px
}

.box-style-border.box-icon-align-top .info-box-content {
    padding-top: 35px
}

.box-style-border.box-btn-static .info-btn-wrapper {
    margin-top: 0;
    margin-bottom: -30px;
    -webkit-transform: translateY(50%);
    transform: translateY(50%)
}

.box-style-border.box-btn-hover .info-btn-wrapper {
    margin-top: -15px;
    margin-right: 30px;
    margin-left: 30px;
    padding-top: 0
}

.box-style-border.box-btn-hover.box-icon-align-left .info-btn-wrapper {
    margin-left: 50px
}

.box-style-border.box-btn-hover.box-icon-align-right .info-btn-wrapper {
    margin-right: 50px
}

.box-style-border.color-scheme-light .info-box-content {
    border-color: rgba(255,255,255,.15)
}

.woodmart-images-gallery[class*=align] .woodmart-gallery-item,.woodmart-images-gallery[class*=align] .owl-stage,.woodmart-images-gallery[class*=align] .owl-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-images-gallery.view-carousel,.woodmart-images-gallery.view-justified {
    margin-bottom: 30px
}

.woodmart-images-gallery.view-justified .caption {
    display: none !important
}

.woodmart-images-gallery.view-carousel {
    text-align: center
}

.woodmart-gallery-item {
    overflow: hidden
}

.woodmart-gallery-item > a {
    display: block
}

.gallery-valign-top .woodmart-gallery-item {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.gallery-valign-middle .woodmart-gallery-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.gallery-valign-bottom .woodmart-gallery-item {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.gallery-halign-left .owl-item,.gallery-halign-left .woodmart-gallery-item {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.gallery-halign-center .owl-item,.gallery-halign-center .woodmart-gallery-item {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.gallery-halign-right .owl-item,.gallery-halign-right .woodmart-gallery-item {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.woodmart-promo-popup,.woodmart-content-popup {
    margin: 30px auto;
    padding: 30px;
    width: 100%;
    background-color: #fff
}

.woodmart-promo-popup {
    display: none;
    max-width: 800px
}

.mfp-wrap .woodmart-promo-popup {
    display: block
}

.woodmart-sizeguide {
    max-width: 800px
}

.woodmart-timer {
    display: block;
    font-size: 0;
    line-height: 1
}

.woodmart-timer > span {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 2px 5px 2px;
    padding: 5px;
    min-width: 55px;
    min-height: 55px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.1);
    box-shadow: 0 0 3px rgba(0,0,0,.1);
    color: #333;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px
}

.woodmart-timer > span span {
    display: block;
    margin-top: 5px;
    color: #777;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px
}

.woodmart-countdown-timer.color-scheme-light .woodmart-timer > span {
    color: #fff
}

.woodmart-countdown-timer.color-scheme-light .woodmart-timer > span span {
    color: rgba(255,255,255,.8)
}

.timer-size-medium .woodmart-timer > span {
    min-width: 65px;
    min-height: 65px;
    font-size: 24px;
    line-height: 24px
}

.timer-size-medium .woodmart-timer > span span {
    font-size: 12px;
    line-height: 12px
}

.timer-size-large .woodmart-timer > span {
    min-width: 80px;
    min-height: 80px;
    font-size: 28px;
    line-height: 28px
}

.timer-size-large .woodmart-timer > span span {
    font-size: 14px;
    line-height: 14px
}

.timer-size-xlarge .woodmart-timer > span {
    min-width: 100px;
    min-height: 100px;
    font-size: 42px;
    line-height: 42px
}

.timer-size-xlarge .woodmart-timer > span span {
    font-size: 16px;
    line-height: 16px
}

.timer-style-standard.color-scheme-light .woodmart-timer > span {
    background-color: #101010
}

.timer-style-transparent .woodmart-timer > span {
    background-color: rgba(255,255,255,.2);
    -webkit-box-shadow: none;
    box-shadow: none
}

.timer-style-transparent.color-scheme-light .woodmart-timer > span {
    background-color: rgba(0,0,0,.2)
}

.color-scheme-light .woodmart-product-countdown > span {
    background-color: #101010;
    color: #fff
}

.color-scheme-light .woodmart-product-countdown > span span {
    color: rgba(255,255,255,.8)
}

.woodmart-row-divider {
    margin-right: -15px;
    margin-left: -15px
}

.woodmart-row-divider svg {
    display: block
}

.dvr-style-waves-small svg,.dvr-style-waves-wide svg,.dvr-style-triangle svg {
    height: 3vw
}

.dvr-style-clouds svg {
    height: 6vw
}

.dvr-style-curved-line svg,.dvr-style-diagonal-left svg,.dvr-style-diagonal-right svg,.dvr-style-half-circle svg,.dvr-style-paint-stroke svg {
    height: 50px
}

.dvr-overlap-enable {
    position: relative
}

.dvr-overlap-enable svg {
    position: absolute;
    right: 0;
    left: 0
}

.dvr-overlap-enable.dvr-position-top svg {
    top: 0
}

.dvr-overlap-enable.dvr-position-bottom svg {
    bottom: 0
}

.browser-Firefox .dvr-position-top svg {
    margin-top: -1px
}

.browser-Firefox .dvr-position-bottom svg {
    margin-bottom: -1px
}

.woodmart-row-gradient-enable {
    position: relative
}

.woodmart-row-gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.woodmart-list {
    margin-bottom: 35px
}

.woodmart-list ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
}

.woodmart-list ul li:not(:last-child) {
    margin-bottom: 15px
}

.woodmart-list .list-icon {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 10px;
    vertical-align: middle;
    text-align: center
}

.woodmart-list .list-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-list-type-ordered ul {
    counter-reset: item
}

.woodmart-list-type-ordered ul li {
    list-style: none
}

.woodmart-list-type-ordered ul li .list-icon {
    font-weight: 600
}

.woodmart-list-type-ordered ul li .list-icon:before {
    content: counter(item) ".";
    counter-increment: item
}

.woodmart-list-type-unordered ul li {
    list-style: none
}

.woodmart-list-type-unordered ul li .list-icon {
    font-weight: 600;
    font-size: 60%
}

.woodmart-list-type-unordered ul li .list-icon:before {
    content: "\f110";
    font-family: "woodmart-font"
}

.woodmart-list-style-rounded .list-icon {
    border-radius: 100px
}

.woodmart-text-size-small ul {
    font-size: 12px
}

.woodmart-text-size-small.woodmart-list-shape-icon .list-icon {
    min-width: 22px;
    height: 22px;
    font-size: 12px;
    line-height: 22px
}

.woodmart-text-size-small.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
    font-size: 8px
}

.woodmart-text-size-default.woodmart-list-shape-icon .list-icon {
    min-width: 25px;
    height: 25px;
    font-size: 14px;
    line-height: 25px
}

.woodmart-text-size-default.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
    font-size: 10px
}

.woodmart-text-size-medium ul {
    font-size: 16px
}

.woodmart-text-size-medium.woodmart-list-shape-icon .list-icon {
    min-width: 30px;
    height: 30px;
    font-size: 16px;
    line-height: 30px
}

.woodmart-text-size-medium.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
    font-size: 12px
}

.woodmart-text-size-large ul {
    font-size: 18px
}

.woodmart-text-size-large.woodmart-list-shape-icon .list-icon {
    min-width: 35px;
    height: 35px;
    font-size: 18px;
    line-height: 35px
}

.woodmart-text-size-large.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
    font-size: 14px
}

.woodmart-text-size-extra-large ul {
    font-size: 24px
}

.woodmart-text-size-extra-large.woodmart-list-shape-icon .list-icon {
    min-width: 45px;
    height: 45px;
    font-size: 24px;
    line-height: 45px
}

.woodmart-text-size-extra-large.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
    font-size: 20px
}

.product-design-alt .product-image-summary .woodmart-product-brands,.product-design-default .entry-summary.col-lg-4 .woodmart-product-brands,.popup-quick-view .entry-summary .woodmart-product-brands {
    float: none;
    margin-left: 0
}

.product-design-alt .product-image-summary .woodmart-product-brands a,.product-design-default .entry-summary.col-lg-4 .woodmart-product-brands a,.popup-quick-view .entry-summary .woodmart-product-brands a {
    display: inline-block;
    padding: 0;
    min-height: 0;
    background-color: transparent !important;
    -webkit-box-shadow: none;
    box-shadow: none
}

.product-design-alt .product-image-summary .woodmart-product-brands a:hover,.product-design-default .entry-summary.col-lg-4 .woodmart-product-brands a:hover,.popup-quick-view .entry-summary .woodmart-product-brands a:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .5
}

.product-design-alt table.variations label,.quick-shop-wrapper table.variations label {
    margin-right: 0
}

.product-design-alt table.variations tr,.quick-shop-wrapper table.variations tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 10px
}

.product-design-alt table.variations tr:last-child,.quick-shop-wrapper table.variations tr:last-child {
    margin-bottom: 0
}

.product-design-alt table.variations td,.quick-shop-wrapper table.variations td {
    padding-bottom: 0;
    text-align: center
}

.product-design-alt table.variations .label,.quick-shop-wrapper table.variations .label {
    margin-bottom: 5px
}

.product-design-alt table.variations .reset_variations,.quick-shop-wrapper table.variations .reset_variations {
    position: absolute;
    left: 50%;
    margin-left: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.product-design-alt .swatches-select,.quick-shop-wrapper .swatches-select {
    padding-bottom: 0;
    -webkit-transition: padding .25s ease;
    transition: padding .25s ease
}

.variations_form .stock,.product-image-summary .stock,.woodmart-sticky-btn .stock {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2
}

.variations_form .stock:before,.product-image-summary .stock:before,.woodmart-sticky-btn .stock:before {
    display: inline-block;
    margin-right: 5px;
    vertical-align: text-top
}

.variations_form .out-of-stock,.product-image-summary .out-of-stock {
    color: #b50808
}

.variations_form .in-stock,.product-image-summary .in-stock,.woodmart-sticky-btn .in-stock {
    color: #333
}

.variations_form .in-stock:before,.product-image-summary .in-stock:before,.woodmart-sticky-btn .in-stock:before {
    content: "\f109";
    font-family: "woodmart-font"
}

.color-scheme-light .variations_form .in-stock,.color-scheme-light .product-image-summary .in-stock,.color-scheme-light .woodmart-sticky-btn .in-stock {
    color: #fff
}

.meta-location-add_to_cart .product_meta,.popup-quick-view .entry-summary .product_meta {
    padding-top: 20px;
    border-top: 1px solid
}

.meta-location-add_to_cart .product_meta > span,.popup-quick-view .entry-summary .product_meta > span {
    display: block;
    margin-bottom: 15px
}

.single_add_to_cart_button:after,.popup-quick-view .woodmart-scroll-content > a:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -9px;
    opacity: 0;
    -webkit-transition: opacity 0s ease;
    transition: opacity 0s ease;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(255,255,255,.3);
    border-left-color: #fff;
    border-radius: 50%;
    vertical-align: middle
}

.loading.single_add_to_cart_button,.popup-quick-view .woodmart-scroll-content > a.loading {
    color: transparent !important
}

.loading.single_add_to_cart_button:after,.popup-quick-view .woodmart-scroll-content > a.loading:after {
    opacity: 1;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.woodmart-woocommerce-layered-nav .count,.widget_product_categories .count {
    padding-right: 5px;
    padding-left: 5px;
    min-width: 30px;
    height: 20px;
    border: 1px solid;
    border-radius: 35px;
    color: #777;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease
}

.woodmart-woocommerce-layered-nav .chosen .count,.woodmart-woocommerce-layered-nav .layered-nav-link:hover + .count,.woodmart-woocommerce-layered-nav .layered-nav-link:focus + .count,.widget_product_categories .product-categories li.current-cat > .count,.widget_product_categories .product-categories li a:hover + .count,.widget_product_categories .product-categories li a:focus + .count {
    color: #fff
}

.color-scheme-light .woodmart-woocommerce-layered-nav .count,.color-scheme-light .widget_product_categories .count {
    border-color: rgba(255,255,255,.3);
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .dropdown-cart .cart-item-image:after,.dropdowns-color-light .cart-widget-side .cart-item-image:after,.color-scheme-light .widget_shopping_cart .cart-item-image:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.dropdowns-color-light .dropdown-cart .remove,.dropdowns-color-light .cart-widget-side .remove,.color-scheme-light .widget_shopping_cart .remove {
    color: #fff
}

.dropdowns-color-light .dropdown-cart .remove:hover,.dropdowns-color-light .cart-widget-side .remove:hover,.color-scheme-light .widget_shopping_cart .remove:hover {
    background-color: rgba(0,0,0,.3)
}

.dropdowns-color-light .dropdown-cart .empty,.dropdowns-color-light .cart-widget-side .empty,.color-scheme-light .widget_shopping_cart .empty {
    color: #fff
}

.dropdowns-color-light .dropdown-cart .product-title p,.dropdowns-color-light .cart-widget-side .product-title p,.color-scheme-light .widget_shopping_cart .product-title p {
    color: rgba(255,255,255,.6)
}

.dropdowns-color-light .dropdown-cart .quantity,.dropdowns-color-light .cart-widget-side .quantity,.color-scheme-light .widget_shopping_cart .quantity {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .dropdown-cart .amount,.dropdowns-color-light .cart-widget-side .amount,.color-scheme-light .widget_shopping_cart .amount {
    color: #fff
}

.dropdowns-color-light .dropdown-cart .total,.dropdowns-color-light .cart-widget-side .total,.color-scheme-light .widget_shopping_cart .total {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .dropdown-cart .total strong,.dropdowns-color-light .cart-widget-side .total strong,.color-scheme-light .widget_shopping_cart .total strong {
    color: #fff
}

.woodmart-hover-info-alt .woodmart-buttons > div a,.woodmart-hover-button .woodmart-buttons > div a,.color-scheme-light .woodmart-buttons > div a {
    color: #fff
}

.woodmart-hover-info-alt .woodmart-buttons > div a:after,.woodmart-hover-button .woodmart-buttons > div a:after,.color-scheme-light .woodmart-buttons > div a:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.woodmart-hover-info-alt .woodmart-buttons > div a:hover,.woodmart-hover-button .woodmart-buttons > div a:hover,.color-scheme-light .woodmart-buttons > div a:hover {
    color: rgba(255,255,255,.8)
}

.woodmart-hover-info-alt .woodmart-buttons .woodmart-add-btn .added_to_cart,.woodmart-hover-button .woodmart-buttons .woodmart-add-btn .added_to_cart,.color-scheme-light .woodmart-buttons .woodmart-add-btn .added_to_cart {
    color: #fff
}

.product-full-width.product-design-alt .summary-inner,.product-full-width.product-summary-shadow .summary-inner,.product-full-width.image-full-width .summary-inner,.image-full-width.product-design-alt .summary-inner {
    max-width: 620px
}

.woodmart-hover-standard .btn-add > a,.product-list-item .woodmart-add-btn > a,.woodmart-hover-quick .woodmart-add-btn > a,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a,.woodmart-hover-info-alt .product-actions > a,.woodmart-hover-button .hover-mask > a {
    overflow: hidden;
    padding: 0;
    position: relative;
    display: inline-block;
    outline: none;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: .3px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease
}

.woodmart-hover-standard .btn-add > a:hover,.product-list-item .woodmart-add-btn > a:hover,.woodmart-hover-quick .woodmart-add-btn > a:hover,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover,.woodmart-hover-info-alt .product-actions > a:hover,.woodmart-hover-button .hover-mask > a:hover {
    text-decoration: none
}

.woodmart-hover-standard .btn-add > a:focus,.product-list-item .woodmart-add-btn > a:focus,.woodmart-hover-quick .woodmart-add-btn > a:focus,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:focus,.woodmart-hover-info-alt .product-actions > a:focus,.woodmart-hover-button .hover-mask > a:focus {
    outline: none
}

.woodmart-hover-standard .btn-add > a .woodmart-tooltip-label,.product-list-item .woodmart-add-btn > a .woodmart-tooltip-label,.woodmart-hover-quick .woodmart-add-btn > a .woodmart-tooltip-label,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a .woodmart-tooltip-label,.woodmart-hover-info-alt .product-actions > a .woodmart-tooltip-label,.woodmart-hover-button .hover-mask > a .woodmart-tooltip-label {
    display: none
}

.woodmart-hover-standard .btn-add > a span:not(.woodmart-tooltip-label),.product-list-item .woodmart-add-btn > a span:not(.woodmart-tooltip-label),.woodmart-hover-quick .woodmart-add-btn > a span:not(.woodmart-tooltip-label),.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a span:not(.woodmart-tooltip-label),.woodmart-hover-info-alt .product-actions > a span:not(.woodmart-tooltip-label),.woodmart-hover-button .hover-mask > a span:not(.woodmart-tooltip-label) {
    display: block;
    -webkit-transition: opacity .15s ease,-webkit-transform .25s ease;
    transition: opacity .15s ease,-webkit-transform .25s ease;
    transition: transform .25s ease,opacity .15s ease;
    transition: transform .25s ease,opacity .15s ease,-webkit-transform .25s ease
}

.woodmart-hover-standard .btn-add > a:before,.product-list-item .woodmart-add-btn > a:before,.woodmart-hover-quick .woodmart-add-btn > a:before,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:before,.woodmart-hover-info-alt .product-actions > a:before,.woodmart-hover-button .hover-mask > a:before {
    position: absolute;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    -webkit-transition: opacity .15s ease,-webkit-transform .25s ease;
    transition: opacity .15s ease,-webkit-transform .25s ease;
    transition: opacity .15s ease,transform .25s ease;
    transition: opacity .15s ease,transform .25s ease,-webkit-transform .25s ease;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    content: "\f11d";
    font-family: "woodmart-font"
}

.woodmart-hover-standard .btn-add > a:after,.product-list-item .woodmart-add-btn > a:after,.woodmart-hover-quick .woodmart-add-btn > a:after,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:after,.woodmart-hover-info-alt .product-actions > a:after,.woodmart-hover-button .hover-mask > a:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -9px;
    opacity: 0;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(255,255,255,.4);
    border-left-color: #fff;
    border-radius: 50%;
    vertical-align: middle
}

.woodmart-hover-standard .btn-add > a:hover:before,.product-list-item .woodmart-add-btn > a:hover:before,.woodmart-hover-quick .woodmart-add-btn > a:hover:before,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover:before,.woodmart-hover-info-alt .product-actions > a:hover:before,.woodmart-hover-button .hover-mask > a:hover:before,.woodmart-hover-standard .btn-add > a:focus:before,.product-list-item .woodmart-add-btn > a:focus:before,.woodmart-hover-quick .woodmart-add-btn > a:focus:before,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:focus:before,.woodmart-hover-info-alt .product-actions > a:focus:before,.woodmart-hover-button .hover-mask > a:focus:before {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-standard .btn-add > a:hover span:not(.woodmart-tooltip-label),.product-list-item .woodmart-add-btn > a:hover span:not(.woodmart-tooltip-label),.woodmart-hover-quick .woodmart-add-btn > a:hover span:not(.woodmart-tooltip-label),.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover span:not(.woodmart-tooltip-label),.woodmart-hover-info-alt .product-actions > a:hover span:not(.woodmart-tooltip-label),.woodmart-hover-button .hover-mask > a:hover span:not(.woodmart-tooltip-label),.woodmart-hover-standard .btn-add > a:focus span:not(.woodmart-tooltip-label),.product-list-item .woodmart-add-btn > a:focus span:not(.woodmart-tooltip-label),.woodmart-hover-quick .woodmart-add-btn > a:focus span:not(.woodmart-tooltip-label),.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:focus span:not(.woodmart-tooltip-label),.woodmart-hover-info-alt .product-actions > a:focus span:not(.woodmart-tooltip-label),.woodmart-hover-button .hover-mask > a:focus span:not(.woodmart-tooltip-label) {
    -webkit-transform: translateY(-100%) translateZ(0);
    transform: translateY(-100%) translateZ(0)
}

.woodmart-hover-standard .btn-add > a.loading:before,.product-list-item .woodmart-add-btn > a.loading:before,.woodmart-hover-quick .woodmart-add-btn > a.loading:before,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a.loading:before,.woodmart-hover-info-alt .product-actions > a.loading:before,.woodmart-hover-button .hover-mask > a.loading:before {
    opacity: 0
}

.woodmart-hover-standard .btn-add > a.loading:after,.product-list-item .woodmart-add-btn > a.loading:after,.woodmart-hover-quick .woodmart-add-btn > a.loading:after,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a.loading:after,.woodmart-hover-info-alt .product-actions > a.loading:after,.woodmart-hover-button .hover-mask > a.loading:after {
    opacity: 1;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.woodmart-hover-standard .btn-add > a.loading span:not(.woodmart-tooltip-label),.product-list-item .woodmart-add-btn > a.loading span:not(.woodmart-tooltip-label),.woodmart-hover-quick .woodmart-add-btn > a.loading span:not(.woodmart-tooltip-label),.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a.loading span:not(.woodmart-tooltip-label),.woodmart-hover-info-alt .product-actions > a.loading span:not(.woodmart-tooltip-label),.woodmart-hover-button .hover-mask > a.loading span:not(.woodmart-tooltip-label) {
    opacity: 0
}

.woodmart-hover-info-alt .product-actions > a,.woodmart-hover-button .hover-mask > a {
    border-color: #fff;
    color: #fff;
    border-width: 2px
}

.woodmart-hover-info-alt .product-actions > a:not(:hover),.woodmart-hover-button .hover-mask > a:not(:hover) {
    background-color: transparent !important
}

.woodmart-hover-info-alt .product-actions > a:hover,.woodmart-hover-button .hover-mask > a:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-info-alt .product-actions > a span:not(.woodmart-tooltip-label),.woodmart-hover-button .hover-mask > a span:not(.woodmart-tooltip-label) {
    padding: 8px 14px
}

.woodmart-hover-info-alt .product-actions > a:hover,.woodmart-hover-button .hover-mask > a:hover {
    border-color: rgba(255,255,255,.6);
    background-color: transparent
}

.woodmart-hover-tiled .woodmart-buttons,.woodmart-hover-standard .woodmart-buttons,.product-list-item .woodmart-buttons,.woodmart-hover-quick .woodmart-buttons,.woodmart-hover-base.product-in-carousel .woodmart-buttons,.woodmart-hover-alt .woodmart-buttons {
    position: absolute;
    top: 10px;
    right: 10px
}

.woodmart-hover-info-alt .woodmart-buttons,.woodmart-hover-button .woodmart-buttons {
    position: absolute;
    top: 0;
    right: 0
}

.woodmart-hover-info .woodmart-buttons {
    position: absolute;
    right: 10px;
    bottom: 10px
}

.woodmart-hover-icons .wrapp-buttons {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0
}

.woodmart-hover-tiled .woodmart-buttons,.woodmart-hover-standard .woodmart-buttons,.product-list-item .woodmart-buttons,.woodmart-hover-quick .woodmart-buttons,.woodmart-hover-info-alt .woodmart-buttons,.woodmart-hover-base.product-in-carousel .woodmart-buttons,.woodmart-hover-info .woodmart-buttons,.woodmart-hover-button .woodmart-buttons,.woodmart-hover-alt .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-tiled:hover .woodmart-buttons,.woodmart-hover-standard:hover .woodmart-buttons,.product-list-item:hover .woodmart-buttons,.woodmart-hover-quick:hover .woodmart-buttons,.woodmart-hover-info-alt:hover .woodmart-buttons,.woodmart-hover-base.product-in-carousel:hover .woodmart-buttons,.woodmart-hover-info:hover .woodmart-buttons,.woodmart-hover-button:hover .woodmart-buttons,.woodmart-hover-alt:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-icons .wrapp-buttons {
    opacity: 0;
    -webkit-transform: translateY(25px) translateZ(0);
    transform: translateY(25px) translateZ(0)
}

.woodmart-hover-icons:hover .wrapp-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-pf-dropdown .filter-swatch,.woodmart-woocommerce-layered-nav .filter-swatch {
    position: relative;
    margin-right: 10px;
    font-size: 0;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.woodmart-pf-dropdown .filter-swatch > span,.woodmart-woocommerce-layered-nav .filter-swatch > span {
    position: relative;
    display: block;
    border-radius: 50%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle
}

.woodmart-pf-dropdown .filter-swatch > span[style^=background-image],.woodmart-woocommerce-layered-nav .filter-swatch > span[style^=background-image],.woodmart-pf-dropdown .filter-swatch > span[style$="#ffffff;"],.woodmart-woocommerce-layered-nav .filter-swatch > span[style$="#ffffff;"] {
    border: 1px solid rgba(0,0,0,.15)
}

.woodmart-pf-dropdown .filter-swatch > span:after,.woodmart-woocommerce-layered-nav .filter-swatch > span:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0,0,0,.1);
    color: #fff;
    font-weight: bold;
    line-height: 1;
    opacity: 0;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    content: "\f109";
    font-family: "woodmart-font"
}

.woodmart-pf-dropdown .pf-active > .pf-value .filter-swatch span:after,.woodmart-pf-dropdown .pf-value:hover .filter-swatch span:after,.woodmart-woocommerce-layered-nav .chosen .filter-swatch span:after {
    opacity: 1
}

.woodmart-pf-dropdown .swatches-small .filter-swatch > span,.woodmart-woocommerce-layered-nav .swatches-small .filter-swatch > span {
    width: 15px;
    height: 15px
}

.woodmart-pf-dropdown .swatches-small .filter-swatch > span:after,.woodmart-woocommerce-layered-nav .swatches-small .filter-swatch > span:after {
    font-size: 8px
}

.woodmart-pf-dropdown .swatches-small.swatches-brands .filter-swatch > span,.woodmart-woocommerce-layered-nav .swatches-small.swatches-brands .filter-swatch > span {
    width: 45px;
    height: 30px
}

.woodmart-pf-dropdown .swatches-normal .filter-swatch > span,.woodmart-woocommerce-layered-nav .swatches-normal .filter-swatch > span {
    width: 25px;
    height: 25px
}

.woodmart-pf-dropdown .swatches-normal .filter-swatch > span:after,.woodmart-woocommerce-layered-nav .swatches-normal .filter-swatch > span:after {
    font-size: 12px
}

.woodmart-pf-dropdown .swatches-normal.swatches-brands .filter-swatch > span,.woodmart-woocommerce-layered-nav .swatches-normal.swatches-brands .filter-swatch > span {
    width: 60px;
    height: 30px
}

.woodmart-pf-dropdown .swatches-large .filter-swatch > span,.woodmart-woocommerce-layered-nav .swatches-large .filter-swatch > span {
    width: 35px;
    height: 35px
}

.woodmart-pf-dropdown .swatches-large .filter-swatch > span:after,.woodmart-woocommerce-layered-nav .swatches-large .filter-swatch > span:after {
    font-size: 14px
}

.woodmart-pf-dropdown .swatches-large.swatches-brands .filter-swatch > span,.woodmart-woocommerce-layered-nav .swatches-large.swatches-brands .filter-swatch > span {
    width: 90px;
    height: 40px
}

.cart-empty {
    position: relative;
    margin-top: 5vw;
    margin-bottom: 15px;
    color: #2d2a2a;
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.2
}

.cart-empty:before {
    display: block;
    margin-bottom: 20px;
    color: rgba(135,135,135,.15);
    font-weight: normal;
    font-size: 180px;
    line-height: 180px
}

.col2-set {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px
}

.col2-set .col-1,.col2-set .col-2 {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 50%;
    flex: 1 0 50%;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 50%
}

p.form-row-first,p.form-row-last {
    overflow: visible;
    width: 48%
}

p.form-row-first {
    float: left
}

p.form-row-last {
    float: right
}

p.form-row-wide {
    clear: both
}

.shop-sidebar-opener:not(.sticky-toolbar) {
    opacity: 0;
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
}

.woodmart-sidebar-btn-shown:not(.sticky-toolbar) {
    pointer-events: visible;
    pointer-events: unset;
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.shop_table tr td:last-child,.shop_table tr th:last-child {
    text-align: right
}

.shop_table .variation {
    margin-top: 10px
}

tr.order-total th {
    font-size: 18px
}

tr.order-total strong .amount {
    font-size: 22px
}

tr.order-total td strong {
    display: block
}

th.product-remove,th.product-thumbnail {
    font-size: 0
}

th.product-name {
    text-align: left
}

th.product-thumbnail {
    width: 10px
}

th.product-remove {
    width: 40px
}

td.product-name {
    text-align: left
}

td.product-name a {
    font-weight: 500;
    font-size: 14px
}

td.product-name p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #777;
    font-weight: 400;
    font-size: 12px
}

td.product-price .amount {
    color: #777;
    font-weight: normal;
    font-size: 14px
}

td.product-price del {
    color: #bdbdbd
}

td.product-price del .amount {
    color: #bdbdbd;
    font-size: 90%
}

td.product-price ins {
    padding: 0;
    background-color: transparent;
    text-decoration: none;
    opacity: 1
}

td.product-subtotal span {
    font-size: 16px
}

td.product-thumbnail > a {
    display: block;
    overflow: hidden
}

td.product-thumbnail img {
    min-width: 80px;
    max-width: 80px
}

td.woocommerce-orders-table__cell-order-number a {
    color: #3f3f3f;
    font-weight: 600
}

td.woocommerce-orders-table__cell-order-actions a {
    margin-right: 5px;
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px;
    color: #fff
}

td.woocommerce-orders-table__cell-order-actions a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

td.woocommerce-orders-table__cell-order-actions a:last-child {
    margin-right: 0
}

td.product-remove {
    padding: 0;
    text-align: center
}

td.product-total .amount {
    color: #777;
    font-weight: normal
}

.color-scheme-light td.product-total .amount {
    color: #fff
}

#shipping_method li:not(:last-child) {
    margin-bottom: 10px
}

#shipping_method input.shipping_method {
    position: relative;
    top: 4px;
    float: right;
    margin-right: 0;
    margin-left: 7px
}

#shipping_method label {
    margin-bottom: 0
}

.woocommerce-checkout-review-order-table th,.woocommerce-checkout-review-order-table td {
    max-width: 50%;
    width: 50%
}

.woocommerce-checkout-review-order-table tfoot tr:last-child th,.woocommerce-checkout-review-order-table tfoot tr:last-child td {
    border-bottom: none
}

.woocommerce-table--order-details th,.woocommerce-table--order-details td {
    max-width: 50%;
    width: 50%
}

.woocommerce-table--order-details tfoot tr:last-child th {
    text-transform: uppercase;
    font-size: 20px
}

.woocommerce-table--order-details tfoot tr:last-child td > .amount {
    display: block;
    font-size: 20px
}

.order-again {
    margin-bottom: 30px
}

.group_table {
    margin-bottom: 25px;
    border-top: 2px solid #efefef
}

.group_table td.price {
    text-align: right
}

.group_table td.label a {
    font-size: 14px
}

.group_table td .quantity {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 0
}

.group_table td.product-quantity > a {
    white-space: nowrap;
    padding: 8px 14px;
    border-width: 2px;
    border-color: #e9e9e9;
    color: #333
}

.group_table td.product-quantity > a:not(:hover) {
    background-color: transparent !important
}

.group_table td.product-quantity > a:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.group_table td.product-quantity > a:hover {
    background-color: #e9e9e9;
    color: #333
}

.group_table td.product-quantity > .added_to_cart {
    display: none
}

.group_table tr td:first-child {
    padding-left: 0
}

.group_table tr td:last-child {
    padding-right: 0
}

.woocommerce-order-pay .shop_table tfoot tr:last-child th {
    font-size: 24px
}

.woocommerce-order-pay .shop_table tfoot tr:last-child td .amount:first-child {
    display: block;
    font-size: 24px
}

.woocommerce-order-pay td.product-total .amount {
    font-weight: bold;
    font-size: 16px
}

.woocommerce-orders-table td.woocommerce-orders-table__cell-order-actions {
    padding-bottom: 5px
}

.woocommerce-orders-table td.woocommerce-orders-table__cell-order-actions > a {
    margin-bottom: 10px
}

.account-payment-methods-table .button {
    color: #fff
}

.account-payment-methods-table .button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.product-grid-item {
    margin-bottom: 30px;
    text-align: center
}

.product-grid-item .product-element-top {
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.product-grid-item .product-element-top:after {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    margin-top: -16px;
    margin-left: -16px;
    opacity: 0;
    -webkit-transition: opacity .1s ease,visibility .1s ease;
    transition: opacity .1s ease,visibility .1s ease;
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.product-grid-item .product-element-top:hover .hover-img {
    opacity: 1;
    -webkit-transform: scale(1.09);
    transform: scale(1.09)
}

.product-grid-item .swatches-on-grid {
    margin-bottom: 5px
}

.product-grid-item .product-image-link img,.product-grid-item .hover-img img {
    width: 100%
}

.product-grid-item .product-image-link {
    display: block
}

.product-grid-item .hover-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #fff;
    opacity: 0;
    -webkit-transition: opacity .5s ease,-webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .5s ease,-webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .5s ease,transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .5s ease,transform 2s cubic-bezier(0, 0, 0.44, 1.18),-webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18)
}

.product-grid-item .hover-img > a {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    width: 100%
}

.product-grid-item .product-title {
    margin-bottom: 5px;
    font-size: 14px
}

.product-grid-item .product-title a {
    color: inherit
}

.product-grid-item .woodmart-product-cats,.product-grid-item .woodmart-product-brands-links {
    margin-bottom: 5px;
    color: #9e9e9e;
    font-size: 14px;
    line-height: 1.3
}

.product-grid-item .woodmart-product-cats a,.product-grid-item .woodmart-product-brands-links a {
    display: inline-block;
    color: #9e9e9e
}

.product-grid-item .woodmart-product-cats a:hover,.product-grid-item .woodmart-product-cats a:focus,.product-grid-item .woodmart-product-brands-links a:hover,.product-grid-item .woodmart-product-brands-links a:focus {
    color: #5c5c5c
}

.product-grid-item .woodmart-product-countdown,.product-grid-item .woodmart-stock-progress-bar {
    margin-top: 10px
}

.product-grid-item .star-rating {
    margin-bottom: 5px
}

.product-grid-item .price {
    display: block;
    margin-bottom: 0;
    font-size: 15px;
    line-height: 1.3
}

.product-grid-item .more-details-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    height: 20px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255, 255, 255, 0.8)), to(#FFF));
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0, #FFF 100%);
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 0;
    line-height: 20px;
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px)
}

.product-grid-item .more-details-btn span:after {
    font-weight: 700;
    font-size: 20px;
    content: "\f10c";
    font-family: "woodmart-font"
}

.product-grid-item .added_to_cart {
    display: none !important
}

.product-grid-item.product-swatched .hover-img {
    display: none
}

.product-grid-item.loading-image .hover-img {
    display: none
}

.product-grid-item.loading-image .product-image-link {
    opacity: .4
}

.product-grid-item.loading-image .product-element-top:after {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .25s ease,visibility .25s ease;
    transition: opacity .25s ease,visibility .25s ease;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.product-grid-item.quick-shop-shown .product-element-top .hover-img,.product-grid-item.loading-quick-shop .product-element-top .hover-img {
    opacity: 0;
    -webkit-transition: opacity .25s ease,-webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .25s ease,-webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .25s ease,transform 2s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .25s ease,transform 2s cubic-bezier(0, 0, 0.44, 1.18),-webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18)
}

.color-scheme-light .product-grid-item .product-element-top:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.color-scheme-light .product-grid-item .woodmart-product-cats,.color-scheme-light .product-grid-item .woodmart-product-brands-links {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .product-grid-item .woodmart-product-cats a,.color-scheme-light .product-grid-item .woodmart-product-brands-links a {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .product-grid-item .woodmart-product-cats a:hover,.color-scheme-light .product-grid-item .woodmart-product-brands-links a:hover {
    color: #fff
}

.color-scheme-light .product-grid-item .more-details-btn {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(16, 16, 16, 0.8)), to(#101010));
    background: linear-gradient(to bottom, rgba(16, 16, 16, 0.8) 0, #101010 100%);
    color: #fff
}

.quick-shop-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.95);
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.quick-shop-wrapper .quick-shop-form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-top: 45px;
    padding-right: 10px;
    padding-left: 10px;
    width: 100%;
    height: 100%;
    text-align: center
}

.quick-shop-wrapper .variations_form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.quick-shop-wrapper .variations_form:before {
    content: ""
}

.quick-shop-wrapper .variations_form .woocommerce-variation {
    -webkit-animation: none;
    animation: none
}

.quick-shop-wrapper .variations_form .woocommerce-variation-description p {
    margin-bottom: 10px
}

.quick-shop-wrapper .variations_form .woocommerce-variation-price .price {
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px
}

.quick-shop-wrapper .variations_form .woocommerce-variation-availability .stock {
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px
}

.quick-shop-wrapper .quantity {
    display: none !important;
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
}

.quick-shop-wrapper .woocommerce-variation-add-to-cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -10px;
    margin-left: -10px
}

.quick-shop-wrapper .single_add_to_cart_button {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border-radius: 0 !important
}

.quick-shop-wrapper .single_add_to_cart_button:before {
    display: inline-block;
    margin-right: 10px;
    margin-left: -9px;
    vertical-align: bottom;
    font-weight: 400;
    font-size: 19px;
    content: "\f11d";
    font-family: "woodmart-font"
}

.quick-shop-wrapper table.variations {
    margin-bottom: 10px
}

.quick-shop-wrapper table.variations .reset_variations {
    bottom: -30px
}

.quick-shop-wrapper .variation-swatch-selected .variations {
    margin-bottom: 40px
}

.quick-shop-wrapper .quick-shop-close {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 5;
    height: 30px;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .6px;
    font-weight: 600;
    font-size: 12px;
    line-height: 30px;
    opacity: 0;
    -webkit-transition: opacity .2s ease 0s;
    transition: opacity .2s ease 0s;
    padding-right: 18px;
    cursor: pointer
}

.quick-shop-wrapper .quick-shop-close:after {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.quick-shop-wrapper .quick-shop-close:before {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.quick-shop-wrapper .quick-shop-close:hover:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.quick-shop-wrapper .quick-shop-close:hover:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.quick-shop-wrapper .quick-shop-close:after,.quick-shop-wrapper .quick-shop-close:before {
    content: " ";
    position: absolute;
    top: 50%;
    display: inline-block;
    margin-top: -1px;
    width: 12px;
    height: 2px;
    background-color: currentColor;
    -webkit-transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    right: 0
}

.btns-shop-3d .quick-shop-wrapper .single_add_to_cart_button {
    top: -1px
}

.btns-shop-3d .quick-shop-wrapper .single_add_to_cart_button:active {
    top: 0
}

.color-scheme-light .quick-shop-wrapper {
    background-color: rgba(0,0,0,.9)
}

.color-scheme-light .quick-shop-wrapper .quick-shop-close {
    color: #fff
}

.quick-shop-shown .woodmart-buttons,.loading-quick-shop .woodmart-buttons {
    opacity: 0
}

.quick-shop-shown .product-labels,.loading-quick-shop .product-labels {
    opacity: 0
}

.loading-quick-shop .product-element-top:after {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .25s ease,visibility .25s ease;
    transition: opacity .25s ease,visibility .25s ease;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.loading-quick-shop .product-image-link {
    opacity: .2
}

.quick-shop-shown .quick-shop-wrapper {
    overflow: hidden;
    overflow-y: scroll;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transition: -webkit-transform .4s ease;
    transition: -webkit-transform .4s ease;
    transition: transform .4s ease;
    transition: transform .4s ease, -webkit-transform .4s ease;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0)
}

.quick-shop-shown .quick-shop-close {
    opacity: 1;
    -webkit-transition: all .25s ease .35s;
    transition: all .25s ease .35s
}

.swatches-on-grid .swatch-on-grid {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-size: cover;
    color: #2d2a2a;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
    font-size: 0;
    line-height: 15px
}

.swatches-on-grid .swatch-on-grid:last-child {
    margin-right: 0
}

.swatches-on-grid .swatch-on-grid[style$="#ffffff;"] {
    border: 1px solid rgba(0,0,0,.15)
}

.swatches-on-grid .current-swatch {
    position: relative
}

.swatches-on-grid .current-swatch:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -5px;
    left: 0;
    height: 2px;
    background-color: #000
}

.swatches-on-grid .swatch-has-image {
    cursor: pointer
}

.swatches-on-grid .swatch-size-large {
    width: 25px;
    height: 25px
}

.swatches-on-grid .swatch-size-large.text-only {
    height: 17px;
    font-size: 16px;
    line-height: 17px
}

.swatches-on-grid .swatch-size-xlarge {
    width: 35px;
    height: 35px
}

.swatches-on-grid .swatch-size-xlarge.text-only {
    height: 19px;
    font-size: 18px;
    line-height: 19px
}

.swatches-on-grid .text-only {
    width: auto;
    background-color: transparent !important;
    background-image: none !important;
    font-size: 14px
}

.swatches-on-grid .text-only .woodmart-tooltip-label {
    display: none
}

.color-scheme-light .swatches-on-grid .swatch-on-grid {
    color: #fff
}

.color-scheme-light .swatches-on-grid .current-swatch:after {
    background-color: #fff
}

.woodmart-buttons {
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #fff;
    -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1);
    box-shadow: 1px 1px 1px rgba(0,0,0,.1);
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.woodmart-buttons > div {
    margin-bottom: 0
}

.woodmart-buttons > div > p {
    display: none
}

.woodmart-buttons > div a {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    width: 50px;
    height: 45px;
    border: none;
    background-color: transparent;
    color: #333;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 0;
    line-height: 0
}

.woodmart-buttons > div a .woodmart-tooltip-label {
    top: 50%;
    right: 100%;
    bottom: auto;
    left: auto;
    margin-top: -17px;
    margin-right: 8px;
    margin-bottom: 0;
    margin-left: 0
}

.woodmart-buttons > div a .woodmart-tooltip-label:before {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 100%;
    margin-top: -5px;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    border-width: 5px 0 5px 5px;
    border-color: transparent;
    border-left-color: #000
}

.woodmart-buttons > div a:hover {
    outline: none;
    border: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none
}

.woodmart-buttons > div a:before {
    font-size: 20px;
    -webkit-transition: opacity .15s ease;
    transition: opacity .15s ease
}

.woodmart-buttons > div a:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -9px;
    opacity: 0;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.woodmart-buttons > div a.loading:before {
    opacity: 0
}

.woodmart-buttons > div a.loading:after {
    opacity: 1;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.woodmart-buttons .quick-view > a:before {
    content: "\f125";
    font-family: "woodmart-font"
}

.woodmart-buttons .woodmart-add-btn > a {
    overflow: visible
}

.woodmart-buttons .woodmart-add-btn > a:before {
    font-size: 21px;
    content: "\f11d";
    font-family: "woodmart-font"
}

.woodmart-buttons .woodmart-add-btn > a span:not(.woodmart-tooltip-label) {
    display: none
}

.woodmart-buttons .woodmart-add-btn .button:not(.add_to_cart_button):before {
    font-size: 20px
}

.woodmart-buttons .woodmart-add-btn .added_to_cart:before {
    content: "\f11c";
    font-family: "woodmart-font"
}

.woodmart-buttons .woodmart-add-btn:empty {
    display: none
}

.woodmart-buttons .clear {
    display: none
}

.color-scheme-light .woodmart-buttons {
    background-color: #101010
}

.product-labels {
    position: absolute;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    max-width: 50%;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.product-label {
    min-width: 50px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    word-break: break-all;
    letter-spacing: .4px;
    font-weight: 600;
    line-height: 1.2
}

.product-label img {
    width: 100%
}

.product-label:not(:last-child) {
    margin-bottom: 10px
}

.product-label.featured {
    background-color: #e22d2d
}

.product-label.new {
    background-color: #438e44
}

.product-label.out-of-stock {
    background-color: rgba(255,255,255,.9);
    color: #2d2a2a;
    font-weight: 900
}

.product-label.attribute-label:not(.label-with-img) {
    background-color: rgba(255,255,255,.9);
    color: #2d2a2a
}

.labels-rectangular {
    top: 15px;
    left: 0
}

.labels-rectangular .product-label {
    padding: 5px 10px;
    font-size: 12px
}

.labels-rectangular .label-with-img {
    padding: 0;
    max-width: 50px
}

.labels-rounded {
    top: 7px;
    left: 7px
}

.labels-rounded .product-label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5px 7px;
    min-height: 50px;
    border-radius: 35px;
    font-size: 14px
}

.browser-Internet .labels-rounded .product-label {
    height: 50px
}

.labels-rounded .label-with-img {
    padding: 0;
    min-height: auto;
    max-width: 55px
}

.labels-rounded .out-of-stock {
    max-width: 50px;
    font-size: 12px
}

.title-line-one .product-grid-item .product-title,.title-line-two .product-grid-item .product-title {
    overflow: hidden;
    line-height: 18px
}

.title-line-one .product-grid-item .product-title {
    max-height: 18px
}

.title-line-two .product-grid-item .product-title {
    max-height: 36px
}

.woodmart-hover-alt {
    text-align: left
}

.woodmart-hover-alt .wrap-price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.woodmart-hover-alt .swap-wrapp {
    overflow: hidden;
    padding-right: 5px;
    height: 30px;
    line-height: 30px
}

.woodmart-hover-alt .swap-elements {
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.woodmart-hover-alt .swap-elements .price,.woodmart-hover-alt .swap-elements .btn-add-swap {
    overflow: hidden;
    height: 30px;
    line-height: 30px
}

.woodmart-hover-alt .woodmart-product-countdown,.woodmart-hover-alt .woodmart-stock-progress-bar {
    margin-top: 5px
}

.woodmart-hover-alt .swatches-on-grid {
    margin-bottom: 0
}

.woodmart-hover-alt .woodmart-product-cats,.woodmart-hover-alt .woodmart-product-brands-links {
    margin-bottom: 0
}

.woodmart-hover-alt .woodmart-product-cats + .woodmart-product-brands-links {
    margin-top: 5px
}

.woodmart-hover-alt .star-rating {
    display: none
}

.woodmart-hover-alt .btn-add-swap > a {
    padding: 0;
    border: none;
    background-color: transparent;
    color: #2d2a2a;
    text-transform: capitalize;
    white-space: nowrap;
    font-weight: 600;
    font-size: 14px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.woodmart-hover-alt .btn-add-swap > a .woodmart-tooltip-label {
    display: none
}

.woodmart-hover-alt .btn-add-swap > a span:not(.woodmart-tooltip-label) {
    position: relative;
    display: inline-block;
    border-bottom: 1px solid rgba(101,101,101,.15);
    vertical-align: middle
}

.woodmart-hover-alt .btn-add-swap > a span:not(.woodmart-tooltip-label):before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 1px;
    -webkit-transition: width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    transition: width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15)
}

.woodmart-hover-alt .btn-add-swap > a:after {
    position: absolute;
    top: 3px;
    left: 0;
    opacity: 0;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease;
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.woodmart-hover-alt .btn-add-swap > a:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-alt .btn-add-swap > a:hover span:not(.woodmart-tooltip-label):before {
    width: 100%
}

.woodmart-hover-alt .btn-add-swap > a.loading {
    padding-left: 20px
}

.woodmart-hover-alt .btn-add-swap > a.loading:after {
    opacity: 1;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.woodmart-hover-alt.purchasable:hover .swap-elements,.woodmart-hover-alt.product-type-grouped:hover .swap-elements {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px)
}

.woodmart-hover-alt.loading-quick-shop .woodmart-buttons,.woodmart-hover-alt.quick-shop-shown .woodmart-buttons,.woodmart-hover-alt.product-swatched .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-alt.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.catalog-mode-on .woodmart-hover-alt:hover .swap-elements,.login-see-prices .woodmart-hover-alt:hover .swap-elements {
    -webkit-transform: none;
    transform: none
}

.woodmart-spacing-0 .woodmart-hover-alt,.woodmart-spacing-2 .woodmart-hover-alt {
    margin-bottom: 10px
}

.color-scheme-light .woodmart-hover-alt .btn-add-swap > a {
    color: #fff
}

.color-scheme-light .woodmart-hover-alt .btn-add-swap > a span:not(.woodmart-tooltip-label) {
    border-color: rgba(255,255,255,.25)
}

.color-scheme-light .woodmart-hover-alt .btn-add-swap > a:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.woodmart-hover-icons .wrapp-buttons {
    visibility: hidden;
    text-align: center;
    -webkit-transition: opacity .3s ease,visibility .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility .3s ease,transform .3s ease;
    transition: opacity .3s ease,visibility .3s ease,transform .3s ease,-webkit-transform .3s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.woodmart-hover-icons .woodmart-buttons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding: 0 7px
}

.woodmart-hover-icons .woodmart-buttons > div a {
    width: 43px;
    height: 50px
}

.woodmart-hover-icons .woodmart-buttons > div a .woodmart-tooltip-label {
    top: auto;
    right: auto;
    bottom: 100%;
    left: 50%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 8px;
    margin-left: 0
}

.woodmart-hover-icons .woodmart-buttons > div a .woodmart-tooltip-label:before {
    top: 100%;
    right: auto;
    bottom: auto;
    left: 50%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-color: transparent;
    border-top-color: #000
}

.woodmart-hover-icons:hover .wrapp-buttons {
    visibility: visible
}

.woodmart-hover-icons.loading-quick-shop .wrapp-buttons,.woodmart-hover-icons.quick-shop-shown .wrapp-buttons,.woodmart-hover-icons.product-swatched .wrapp-buttons {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(25px) translateZ(0);
    transform: translateY(25px) translateZ(0)
}

.woodmart-hover-icons.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .wrapp-buttons {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-icons.hover-width-small:not(.product-in-carousel) .wrapp-buttons {
    bottom: 5px
}

.woodmart-hover-icons.hover-width-small:not(.product-in-carousel) .woodmart-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 5px;
    margin-left: 5px
}

.woodmart-hover-icons.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0
}

.woodmart-hover-icons.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div a {
    width: 100%
}

.woodmart-spacing-0 .woodmart-hover-icons,.woodmart-spacing-2 .woodmart-hover-icons {
    margin-bottom: 10px
}

.woodmart-hover-button .product-element-top:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0,0,0,.5);
    opacity: 0;
    -webkit-transition: visibility .3s ease,opacity .3s ease;
    transition: visibility .3s ease,opacity .3s ease
}

.woodmart-hover-button .woodmart-buttons {
    z-index: 3;
    visibility: hidden;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-button .woodmart-buttons > div a {
    height: 40px
}

.woodmart-hover-button .woodmart-buttons > div a:before {
    font-size: 18px
}

.woodmart-hover-button .product-image-link {
    position: relative
}

.woodmart-hover-button .hover-mask {
    position: absolute;
    top: 57%;
    left: 0;
    z-index: 3;
    width: 100%;
    text-align: center;
    opacity: 0;
    -webkit-transition: top .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    transition: top .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,top .3s ease,opacity .3s ease;
    transition: transform .3s ease,top .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.woodmart-hover-button:hover .product-element-top:before {
    opacity: 1
}

.woodmart-hover-button:hover .woodmart-buttons {
    visibility: visible
}

.woodmart-hover-button:hover .hover-mask {
    top: 50%;
    opacity: 1
}

.woodmart-hover-button.product-swatched .hover-mask,.woodmart-hover-button.loading-quick-shop .hover-mask,.woodmart-hover-button.quick-shop-shown .hover-mask,.woodmart-hover-button.loading-image .hover-mask {
    top: 55%;
    opacity: 0
}

.woodmart-hover-button.product-swatched .woodmart-buttons,.woodmart-hover-button.loading-quick-shop .woodmart-buttons,.woodmart-hover-button.quick-shop-shown .woodmart-buttons,.woodmart-hover-button.loading-image .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-button.product-swatched .product-element-top:before,.woodmart-hover-button.loading-quick-shop .product-element-top:before,.woodmart-hover-button.quick-shop-shown .product-element-top:before,.woodmart-hover-button.loading-image .product-element-top:before {
    opacity: 0
}

.woodmart-hover-button.product-swatched:not(.loading-quick-shop):not(.quick-shop-shown):not(.loading-image) .product-element-top:hover:before {
    opacity: 1
}

.woodmart-hover-button.product-swatched:not(.loading-quick-shop):not(.quick-shop-shown):not(.loading-image) .product-element-top:hover .hover-mask {
    top: 50%;
    opacity: 1
}

.woodmart-hover-button.product-swatched:not(.loading-quick-shop):not(.quick-shop-shown):not(.loading-image) .product-element-top:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-spacing-0 .woodmart-hover-button,.woodmart-spacing-2 .woodmart-hover-button {
    margin-bottom: 10px
}

.color-scheme-light .woodmart-hover-button .woodmart-buttons {
    background-color: transparent
}

.woodmart-hover-info {
    text-align: left
}

.woodmart-hover-info .product-element-top {
    margin-bottom: 0
}

.woodmart-hover-info .top-information {
    position: absolute;
    top: 20px;
    right: 25px;
    left: 25px;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.woodmart-hover-info .bottom-information {
    position: absolute;
    right: 60px;
    bottom: 20px;
    left: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(100%) translateZ(0);
    transform: translateY(100%) translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.woodmart-hover-info .bottom-information .login-to-prices-msg,.woodmart-hover-info .bottom-information .price {
    position: absolute;
    bottom: 100%;
    left: 0
}

.woodmart-hover-info .bottom-information .price {
    font-size: 16px
}

.woodmart-hover-info .bottom-information .price ins,.woodmart-hover-info .bottom-information .price del {
    display: block
}

.woodmart-hover-info .bottom-information .price ins {
    margin-top: 5px
}

.woodmart-hover-info .product-labels {
    left: auto;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    max-width: 60px
}

.woodmart-hover-info .labels-rectangular {
    right: 0
}

.woodmart-hover-info .labels-rounded {
    right: 7px
}

.woodmart-hover-info .swatches-on-grid {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.woodmart-hover-info .star-rating {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    margin-top: 10px;
    margin-bottom: 0;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.woodmart-hover-info .amount,.woodmart-hover-info .price,.woodmart-hover-info .price ins {
    color: #333
}

.woodmart-hover-info .price del {
    color: #bdbdbd
}

.woodmart-hover-info del .amount {
    color: #bdbdbd
}

.woodmart-hover-info.outofstock .top-information,.woodmart-hover-info.sale .top-information,.woodmart-hover-info.featured .top-information,.woodmart-hover-info.new-label .top-information,.woodmart-hover-info.attributes-label .top-information {
    right: 60px
}

.woodmart-hover-info:hover .bottom-information {
    -webkit-transform: none;
    transform: none
}

.woodmart-hover-info:hover .swatches-on-grid,.woodmart-hover-info:hover .star-rating {
    opacity: 1
}

.woodmart-hover-info.quick-shop-shown .bottom-information,.woodmart-hover-info.quick-shop-shown .top-information,.woodmart-hover-info.loading-quick-shop .bottom-information,.woodmart-hover-info.loading-quick-shop .top-information {
    opacity: 0
}

.woodmart-hover-info.quick-shop-shown .woodmart-buttons,.woodmart-hover-info.loading-quick-shop .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-base {
    margin-bottom: 20px
}

.woodmart-hover-base .product-wrapper {
    position: relative;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.woodmart-hover-base .content-product-imagin {
    position: absolute;
    top: -15px;
    right: -15px;
    bottom: 0;
    left: -15px;
    visibility: hidden;
    background-color: #fff;
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,.15);
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    opacity: 0;
    -webkit-transform: scale(0.98);
    transform: scale(0.98)
}

.woodmart-hover-base .product-element-top {
    margin-bottom: 0
}

.woodmart-hover-base .product-information {
    position: relative;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px
}

.woodmart-hover-base .product-information:hover .more-details-btn {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-base:not(.product-in-carousel) .woodmart-buttons {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-base:not(.product-in-carousel) .woodmart-buttons .woodmart-tooltip-label {
    top: auto;
    right: auto;
    bottom: 100%;
    left: 50%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 8px;
    margin-left: 0
}

.woodmart-hover-base:not(.product-in-carousel) .woodmart-buttons .woodmart-tooltip-label:before {
    top: 100%;
    right: auto;
    bottom: auto;
    left: 50%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-color: transparent;
    border-top-color: #000
}

.woodmart-hover-base:not(.product-in-carousel) .woodmart-buttons > div a {
    width: 40px;
    height: 40px
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div:not(.woodmart-add-btn) {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0px;
    flex: 1 0 0
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons .wrap-wishlist-button {
    text-align: left
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons .wrap-quickview-button {
    text-align: right
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a {
    display: block;
    width: auto;
    height: auto;
    color: #fff
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a span:not(.woodmart-tooltip-label) {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn .added_to_cart {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn .added_to_cart:before {
    content: none
}

.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button).quick-shop-shown .woodmart-add-btn > a {
    opacity: .3 !important;
    pointer-events: none
}

.catalog-mode-on .woodmart-hover-base .woodmart-buttons .woodmart-add-btn,.login-see-prices .woodmart-hover-base .woodmart-buttons .woodmart-add-btn {
    display: none
}

.catalog-mode-on .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons,.login-see-prices .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons {
    padding-top: 10px;
    padding-bottom: 5px;
    border-top: 1px solid rgba(129,129,129,.2)
}

.catalog-mode-on .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div,.login-see-prices .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-left: 5px
}

.catalog-mode-on .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div a,.login-see-prices .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div a {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: auto;
    height: auto;
    text-align: left;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2
}

.catalog-mode-on .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div a:before,.login-see-prices .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div a:before {
    margin-right: 5px;
    vertical-align: middle;
    font-size: 14px
}

.catalog-mode-on .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div a:after,.login-see-prices .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons > div a:after {
    left: 0;
    margin-top: -8px;
    margin-left: 0;
    width: 14px;
    height: 14px
}

.catalog-mode-on.woodmart-dark .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons,.catalog-mode-on .color-scheme-light .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons,.login-see-prices.woodmart-dark .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons,.login-see-prices .color-scheme-light .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-buttons {
    border-color: rgba(255,255,255,.15)
}

.woodmart-hover-base .woodmart-product-countdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-top: 5px;
    border-top: 1px solid rgba(129,129,129,.2)
}

.woodmart-hover-base .woodmart-product-countdown > span {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 0;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-base:not(.hover-width-small) .woodmart-product-countdown > span,.woodmart-hover-base:not(.add-small-button) .woodmart-product-countdown > span {
    border-right: 1px solid rgba(129,129,129,.2)
}

.woodmart-hover-base:not(.hover-width-small) .woodmart-product-countdown > span:last-child,.woodmart-hover-base:not(.add-small-button) .woodmart-product-countdown > span:last-child {
    border: none
}

.color-scheme-light .woodmart-hover-base:not(.hover-width-small) .woodmart-product-countdown > span,.color-scheme-light .woodmart-hover-base:not(.add-small-button) .woodmart-product-countdown > span {
    border-color: rgba(255,255,255,.15)
}

.woodmart-hover-base .wrapp-swatches {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-top: 1px solid rgba(0,0,0,.07);
    border-bottom: 1px solid rgba(0,0,0,.07);
    background-color: #fff;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(102%) translateZ(0);
    transform: translateY(102%) translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.woodmart-hover-base .wrapp-swatches:empty {
    display: none
}

.woodmart-hover-base .swatches-on-grid {
    margin-bottom: 0
}

.woodmart-hover-base .hover-content {
    position: relative;
    overflow: hidden;
    margin-bottom: 12px;
    max-height: 88px
}

.woodmart-hover-base .hover-content table {
    margin-bottom: 0
}

.woodmart-hover-base .hover-content-inner {
    line-height: 22px
}

.woodmart-hover-base .hover-content-inner p {
    margin-bottom: 0;
    line-height: 22px
}

.woodmart-hover-base .show-full-description {
    max-height: none
}

.woodmart-hover-base .show-full-description .more-details-btn {
    display: none
}

.woodmart-hover-base .wrapp-product-price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.woodmart-hover-base .fade-in-block {
    position: absolute;
    top: 100%;
    left: 0;
    visibility: hidden;
    margin-top: 0;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    width: 100%;
    opacity: 0
}

.browser-Safari .woodmart-hover-base .fade-in-block {
    visibility: visible;
    pointer-events: none
}

.woodmart-hover-base:hover .wrapp-swatches,.woodmart-hover-base.state-hover .wrapp-swatches {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-base.state-hover .more-details-btn {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-base.has-stars.purchasable .fade-in-block,.woodmart-hover-base.has-stars.product-type-external .fade-in-block {
    padding-bottom: 5px
}

.woodmart-hover-base.has-stars.purchasable .product-rating-price,.woodmart-hover-base.has-stars.product-type-external .product-rating-price {
    overflow: hidden;
    height: 30px;
    line-height: 30px
}

.woodmart-hover-base.has-stars.purchasable .wrapp-product-price,.woodmart-hover-base.has-stars.product-type-external .wrapp-product-price {
    height: 60px;
    -webkit-transform: translateY(0px) translateZ(0);
    transform: translateY(0px) translateZ(0)
}

.woodmart-hover-base.has-stars.purchasable .star-rating,.woodmart-hover-base.has-stars.purchasable .wrapp-product-price .price,.woodmart-hover-base.has-stars.product-type-external .star-rating,.woodmart-hover-base.has-stars.product-type-external .wrapp-product-price .price {
    overflow: hidden;
    margin-bottom: 0;
    height: 30px;
    line-height: 30px
}

.woodmart-hover-base.has-stars.purchasable .woodmart-product-cats,.woodmart-hover-base.has-stars.purchasable .woodmart-product-brands-links,.woodmart-hover-base.has-stars.product-type-external .woodmart-product-cats,.woodmart-hover-base.has-stars.product-type-external .woodmart-product-brands-links {
    margin-bottom: 0
}

.woodmart-hover-base.has-stars.purchasable .woodmart-product-cats + .woodmart-product-brands-links,.woodmart-hover-base.has-stars.product-type-external .woodmart-product-cats + .woodmart-product-brands-links {
    margin-top: 5px
}

.woodmart-hover-base.has-stars.purchasable:hover .wrapp-product-price,.woodmart-hover-base.has-stars.purchasable.state-hover .wrapp-product-price,.woodmart-hover-base.has-stars.product-type-external:hover .wrapp-product-price,.woodmart-hover-base.has-stars.product-type-external.state-hover .wrapp-product-price {
    -webkit-transform: translateY(-30px) translateZ(0);
    transform: translateY(-30px) translateZ(0)
}

.woodmart-hover-base.hover-ready:hover .product-wrapper,.woodmart-hover-base.hover-ready.state-hover .product-wrapper {
    z-index: 20;
    -webkit-transform: translateY(-5px) translateZ(0);
    transform: translateY(-5px) translateZ(0)
}

.woodmart-hover-base.hover-ready:hover .content-product-imagin,.woodmart-hover-base.hover-ready.state-hover .content-product-imagin {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility 0s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility 0s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility 0s ease,transform .3s ease;
    transition: opacity .3s ease,visibility 0s ease,transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: scale(1);
    transform: scale(1)
}

.woodmart-hover-base.hover-ready:hover .fade-in-block,.woodmart-hover-base.hover-ready.state-hover .fade-in-block {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility 0s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility 0s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility 0s ease,transform .3s ease;
    transition: opacity .3s ease,visibility 0s ease,transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(-5px) translateZ(0);
    transform: translateY(-5px) translateZ(0)
}

.woodmart-hover-base.hover-ready.has-stars.purchasable .fade-in-block {
    -webkit-transform: translateY(-10px) translateZ(0);
    transform: translateY(-10px) translateZ(0)
}

.browser-Safari .woodmart-hover-base.hover-ready:hover .fade-in-block,.browser-Safari .woodmart-hover-base.hover-ready.state-hover .fade-in-block {
    pointer-events: visible;
    pointer-events: unset
}

.woodmart-hover-base .quick-shop-close {
    top: -5px
}

.woodmart-hover-base.loading-quick-shop .wrapp-swatches,.woodmart-hover-base.quick-shop-shown .wrapp-swatches {
    -webkit-transform: translateY(103%) translateZ(0);
    transform: translateY(103%) translateZ(0)
}

.woodmart-hover-base.quick-shop-shown .woodmart-buttons,.woodmart-hover-base.loading-quick-shop .woodmart-buttons {
    opacity: 1
}

.color-scheme-light .woodmart-hover-base .content-product-imagin {
    background-color: #101010
}

.color-scheme-light .woodmart-hover-base .wrapp-swatches {
    border-color: rgba(255,255,255,.15);
    background-color: #101010
}

.color-scheme-light .woodmart-hover-base .product-compare-button a {
    color: #fff
}

.color-scheme-light .woodmart-hover-base .product-compare-button a:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.color-scheme-light .woodmart-hover-base .product-compare-button a:hover {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .woodmart-hover-base .woodmart-product-countdown {
    border-color: rgba(255,255,255,.15)
}

.woodmart-hover-base.product-in-carousel {
    overflow: hidden;
    margin-bottom: 10px
}

.woodmart-hover-base.product-in-carousel .woodmart-buttons {
    visibility: hidden
}

.woodmart-hover-base.product-in-carousel .product-information {
    position: static
}

.woodmart-hover-base.product-in-carousel .fade-in-block {
    position: static;
    visibility: visible;
    padding: 0;
    opacity: 1;
    pointer-events: visible;
    pointer-events: unset
}

.woodmart-hover-base.product-in-carousel .hover-content {
    display: none
}

.woodmart-hover-base.product-in-carousel:hover .woodmart-buttons {
    visibility: visible
}

.woodmart-hover-base.product-in-carousel.quick-shop-shown .woodmart-buttons,.woodmart-hover-base.product-in-carousel.loading-quick-shop .woodmart-buttons {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-base.hover-width-small:not(.product-in-carousel) .woodmart-buttons,.woodmart-hover-base.add-small-button:not(.product-in-carousel) .woodmart-buttons {
    overflow: hidden
}

.woodmart-hover-base.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div,.woodmart-hover-base.add-small-button:not(.product-in-carousel) .woodmart-buttons > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0;
    margin-right: -1px;
    margin-left: -1px;
    border-right: 1px solid rgba(0,0,0,.1)
}

.woodmart-hover-base.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div:last-child,.woodmart-hover-base.add-small-button:not(.product-in-carousel) .woodmart-buttons > div:last-child {
    border-right: none
}

.woodmart-hover-base.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div:empty,.woodmart-hover-base.add-small-button:not(.product-in-carousel) .woodmart-buttons > div:empty {
    display: none
}

.woodmart-hover-base.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div a,.woodmart-hover-base.add-small-button:not(.product-in-carousel) .woodmart-buttons > div a {
    width: 100%
}

.color-scheme-light .woodmart-hover-base.hover-width-small:not(.product-in-carousel) .woodmart-buttons > div,.color-scheme-light .woodmart-hover-base.add-small-button:not(.product-in-carousel) .woodmart-buttons > div {
    border-color: rgba(255,255,255,.15)
}

.woodmart-hover-info-alt {
    margin-bottom: 30px
}

.woodmart-hover-info-alt .product-element-top {
    margin-bottom: 0
}

.woodmart-hover-info-alt .product-element-top:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0,0,0,.7);
    opacity: 0;
    -webkit-transition: opacity .5s ease;
    transition: opacity .5s ease
}

.woodmart-hover-info-alt .woodmart-buttons {
    z-index: 3;
    visibility: hidden;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-info-alt .woodmart-buttons > div a {
    height: 40px
}

.woodmart-hover-info-alt .woodmart-buttons > div a:before {
    font-size: 18px
}

.woodmart-hover-info-alt .top-information {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 10px 38px;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.woodmart-hover-info-alt .top-information .amount,.woodmart-hover-info-alt .top-information .price,.woodmart-hover-info-alt .top-information .price ins {
    color: #fff
}

.woodmart-hover-info-alt .top-information del .amount {
    color: rgba(255,255,255,.6)
}

.woodmart-hover-info-alt .woocommerce-price-suffix {
    color: rgba(255,255,255,.6)
}

.woodmart-hover-info-alt h3.product-title {
    margin-bottom: 7px
}

.woodmart-hover-info-alt .swatches-on-grid {
    margin-top: -2px;
    margin-bottom: 4px
}

.woodmart-hover-info-alt .swatches-on-grid .swatch-on-grid {
    color: #fff
}

.woodmart-hover-info-alt .swatches-on-grid .current-swatch:after {
    background-color: #fff
}

.woodmart-hover-info-alt .woodmart-product-cats,.woodmart-hover-info-alt .woodmart-product-brands-links {
    margin-bottom: 7px
}

.woodmart-hover-info-alt .woodmart-product-cats a,.woodmart-hover-info-alt .woodmart-product-brands-links a {
    color: rgba(255,255,255,.7)
}

.woodmart-hover-info-alt .woodmart-product-cats a:hover,.woodmart-hover-info-alt .woodmart-product-brands-links a:hover {
    color: #fff
}

.woodmart-hover-info-alt .star-rating {
    margin-bottom: 7px
}

.woodmart-hover-info-alt .star-rating:before {
    color: rgba(255,255,255,.7)
}

.woodmart-hover-info-alt .product-actions {
    margin-top: 10px
}

.woodmart-hover-info-alt .product-actions .woodmart-tooltip-label {
    display: none
}

.woodmart-hover-info-alt:hover .woodmart-buttons {
    visibility: visible
}

.woodmart-hover-info-alt:hover .top-information {
    opacity: 1
}

.woodmart-hover-info-alt:hover .product-element-top:before {
    opacity: 1
}

.woodmart-hover-info-alt.quick-shop-shown .top-information,.woodmart-hover-info-alt.loading-quick-shop .top-information {
    opacity: 0
}

.woodmart-hover-info-alt.quick-shop-shown .product-element-top:before,.woodmart-hover-info-alt.loading-quick-shop .product-element-top:before {
    opacity: 0
}

.color-scheme-light .woodmart-hover-info-alt .woodmart-buttons {
    background-color: transparent
}

.woodmart-hover-quick .single_add_to_cart_button {
    border-radius: 0
}

.woodmart-hover-quick .woodmart-add-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(103%) translateZ(0);
    transform: translateY(103%) translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.woodmart-hover-quick .woodmart-add-btn > p {
    display: none
}

.woodmart-hover-quick .woodmart-add-btn > a {
    display: block;
    font-size: 13px;
    opacity: .8;
    color: #fff
}

.woodmart-hover-quick .woodmart-add-btn > a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woodmart-hover-quick .woodmart-add-btn > a span {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px
}

.woodmart-hover-quick .woodmart-add-btn > a:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: 1
}

.woodmart-hover-quick:hover .woodmart-add-btn {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-quick.loading-quick-shop .woodmart-add-btn,.woodmart-hover-quick.quick-shop-shown .woodmart-add-btn,.woodmart-hover-quick.product-swatched .woodmart-add-btn {
    -webkit-transform: translateY(103%) translateZ(0);
    transform: translateY(103%) translateZ(0)
}

.woodmart-hover-quick.loading-quick-shop .woodmart-buttons,.woodmart-hover-quick.quick-shop-shown .woodmart-buttons,.woodmart-hover-quick.product-swatched .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-quick.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-quick.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .woodmart-add-btn {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-spacing-0 .woodmart-hover-quick,.woodmart-spacing-2 .woodmart-hover-quick {
    margin-bottom: 10px
}

.product-list-item {
    text-align: left
}

.product-list-item .product-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
}

.product-list-item:not(:last-child) .product-wrapper {
    padding-bottom: 30px;
    border-bottom: 1px solid;
    border-bottom-color: rgba(129,129,129,.2)
}

.product-list-item .product-element-top {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 300px;
    flex: 0 0 300px;
    margin-bottom: 0;
    margin-right: 15px
}

.product-list-item .product-list-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.product-list-item .product-title {
    margin-bottom: 10px;
    font-size: 18px
}

.product-list-item .woodmart-product-cats,.product-list-item .woodmart-product-brands-links,.product-list-item .woocommerce-product-rating,.product-list-item .price {
    margin-bottom: 10px
}

.product-list-item .price {
    font-size: 20px
}

.product-list-item .woodmart-product-countdown {
    margin-bottom: 15px
}

.product-list-item .woodmart-stock-progress-bar {
    margin-bottom: 20px
}

.product-list-item .woocommerce-review-link {
    display: none
}

.product-list-item .woocommerce-product-details__short-description {
    margin-bottom: 20px
}

.product-list-item .woocommerce-product-details__short-description p,.product-list-item .woocommerce-product-details__short-description h1,.product-list-item .woocommerce-product-details__short-description h2,.product-list-item .woocommerce-product-details__short-description h3,.product-list-item .woocommerce-product-details__short-description h4,.product-list-item .woocommerce-product-details__short-description h5,.product-list-item .woocommerce-product-details__short-description h6 {
    margin-bottom: 10px
}

.product-list-item .swatch-on-grid:not(.swatch-size-large):not(.swatch-size-xlarge):not(.text-only) {
    width: 20px;
    height: 20px
}

.product-list-item .woodmart-add-btn > a {
    color: #fff
}

.product-list-item .woodmart-add-btn > a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.product-list-item .woodmart-add-btn > a span:not(.woodmart-tooltip-label) {
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px
}

.product-list-item .woodmart-add-btn .added_to_cart {
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px
}

.product-list-item .woodmart-add-btn .added_to_cart:before {
    content: none
}

.product-list-item.loading-quick-shop .woodmart-buttons,.product-list-item.quick-shop-shown .woodmart-buttons,.product-list-item.product-swatched .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.product-list-item.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.color-scheme-light .product-list-item:not(:last-child) .product-wrapper {
    border-bottom-color: rgba(255,255,255,.15)
}

.woodmart-hover-standard .btn-add {
    margin-top: 10px
}

.woodmart-hover-standard .btn-add > p {
    display: none
}

.woodmart-hover-standard .btn-add > a {
    color: #fff
}

.woodmart-hover-standard .btn-add > a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woodmart-hover-standard .btn-add > a span:not(.woodmart-tooltip-label) {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.woodmart-hover-standard .btn-add .added_to_cart {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.woodmart-hover-standard .btn-add .added_to_cart:before {
    content: none
}

.woodmart-hover-standard.loading-quick-shop .woodmart-buttons,.woodmart-hover-standard.quick-shop-shown .woodmart-buttons,.woodmart-hover-standard.product-swatched .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-standard.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-spacing-0 .woodmart-hover-standard,.woodmart-spacing-2 .woodmart-hover-standard {
    margin-bottom: 10px
}

.woodmart-hover-tiled {
    text-align: left
}

.woodmart-hover-tiled .product-wrapper {
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.12);
    box-shadow: 0 0 4px rgba(0,0,0,.12)
}

.woodmart-hover-tiled .product-element-top {
    margin-bottom: 0
}

.woodmart-hover-tiled .product-element-bottom {
    padding-top: 15px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 20px;
    background-color: #fff
}

.woodmart-hover-tiled .woodmart-product-countdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-top: 5px;
    border-top: 1px solid rgba(129,129,129,.2)
}

.woodmart-hover-tiled .woodmart-product-countdown > span {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin: 0;
    min-width: 0;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-hover-tiled.loading-quick-shop .woodmart-buttons,.woodmart-hover-tiled.quick-shop-shown .woodmart-buttons,.woodmart-hover-tiled.product-swatched .woodmart-buttons {
    opacity: 0;
    -webkit-transform: translateX(20px) translateZ(0);
    transform: translateX(20px) translateZ(0)
}

.woodmart-hover-tiled.product-swatched:not(.quick-shop-shown):not(.loading-quick-shop) .product-element-top:hover .woodmart-buttons {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.woodmart-hover-tiled:not(.hover-width-small) .woodmart-product-countdown > span:not(:last-child) {
    border-right: 1px solid rgba(129,129,129,.2)
}

.color-scheme-light .woodmart-hover-tiled .product-element-bottom {
    background-color: #101010
}

.category-grid-item {
    margin-bottom: 30px
}

.category-grid-item .category-image {
    display: block;
    margin: -1px;
    -webkit-transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: transform .5s cubic-bezier(0, 0, 0.44, 1.18), -webkit-transform .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.category-grid-item img {
    width: 100%
}

.category-grid-item .category-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5
}

.category-grid-item .category-title {
    margin-bottom: 0;
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5
}

.category-grid-item .count {
    display: none;
    padding: 0;
    background-color: transparent;
    color: rgba(88,88,88,.35)
}

.category-grid-item .more-products {
    color: #8e8e8e;
    font-size: 110%
}

.category-grid-item .more-products > a {
    color: inherit
}

.category-grid-item:hover .category-image {
    -webkit-transform: scale3d(1.1, 1.1, 1);
    transform: scale3d(1.1, 1.1, 1)
}

.categories-style-masonry-first:not([style]) {
    display: block
}

.categories-style-masonry-first:not([style]):after {
    content: "";
    display: block;
    clear: both
}

.categories-style-masonry-first:not([style]) .category-grid-item {
    float: left
}

.categories-style-masonry-first .category-grid-item:first-child .category-title {
    font-size: 28px
}

.cat-design-default .wrapp-category {
    position: relative;
    overflow: hidden
}

.cat-design-default .hover-mask {
    position: absolute;
    right: 20px;
    bottom: 15px;
    left: 20px;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
    -webkit-transform: translateY(100%) translateZ(0);
    transform: translateY(100%) translateZ(0)
}

.cat-design-default .category-title {
    position: absolute;
    bottom: 100%;
    left: 0
}

.cat-design-default .more-products {
    margin-top: 5px;
    opacity: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(15px) translateZ(0);
    transform: translateY(15px) translateZ(0)
}

.cat-design-default.categories-with-shadow .wrapp-category {
    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.12);
    box-shadow: 1px 1px 2px rgba(0,0,0,.12)
}

.cat-design-default:hover .hover-mask {
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.cat-design-default:hover .more-products {
    opacity: 1;
    -webkit-transform: translateY(0) translateZ(0);
    transform: translateY(0) translateZ(0)
}

.cat-design-alt {
    margin-bottom: 20px;
    text-align: center
}

.cat-design-alt .category-image-wrapp {
    position: relative;
    overflow: hidden
}

.cat-design-alt img {
    width: auto
}

.cat-design-alt .category-link {
    display: none
}

.cat-design-alt .hover-mask {
    padding: 10px
}

.cat-design-alt.categories-with-shadow .category-image-wrapp {
    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.12);
    box-shadow: 1px 1px 2px rgba(0,0,0,.12)
}

.cat-design-center .wrapp-category,.cat-design-replace-title .wrapp-category {
    position: relative;
    overflow: hidden
}

.cat-design-center .wrapp-category:before,.cat-design-replace-title .wrapp-category:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: #000;
    opacity: .1
}

.cat-design-center:hover .wrapp-category:before,.cat-design-replace-title:hover .wrapp-category:before {
    opacity: .4
}

.cat-design-center {
    text-align: center
}

.cat-design-center .wrapp-category:before {
    -webkit-transition: opacity .5s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .5s cubic-bezier(0, 0, 0.44, 1.18)
}

.cat-design-center .hover-mask {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 3;
    padding: 15px;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.cat-design-center .category-title {
    color: #fff
}

.cat-design-center .more-products {
    margin-top: 5px;
    color: rgba(255,255,255,.9);
    line-height: 20px;
    opacity: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(15px) translateZ(0);
    transform: translateY(15px) translateZ(0)
}

.cat-design-center .more-products a {
    color: inherit
}

.cat-design-center:not(.without-product-count) .hover-mask {
    -webkit-transform: translateY(calc(-50% + 20px)) translateZ(0);
    transform: translateY(calc(-50% + 20px)) translateZ(0)
}

.cat-design-center:not(.without-product-count):hover .hover-mask {
    -webkit-transform: translateY(-50%) translateZ(0);
    transform: translateY(-50%) translateZ(0)
}

.cat-design-center:not(.without-product-count):hover .more-products {
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.cat-design-center.without-product-count .hover-mask {
    -webkit-transform: translateY(-50%) translateZ(0);
    transform: translateY(-50%) translateZ(0)
}

.cat-design-replace-title {
    text-align: center
}

.cat-design-replace-title .wrapp-category:before {
    -webkit-transition: opacity .6s cubic-bezier(0, 0, 0.44, 1.18);
    transition: opacity .6s cubic-bezier(0, 0, 0.44, 1.18)
}

.cat-design-replace-title .hover-mask,.cat-design-replace-title .more-products {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 15px
}

.cat-design-replace-title .category-title {
    padding: 12px 25px;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.1);
    box-shadow: 0 0 3px rgba(0,0,0,.1);
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
    -webkit-transition: opacity .25s ease .25s;
    transition: opacity .25s ease .25s
}

.cat-design-replace-title .more-products {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    opacity: 0;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.cat-design-replace-title:not(.without-product-count):hover .category-title {
    opacity: 0;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.cat-design-replace-title:not(.without-product-count):hover .more-products {
    opacity: 1;
    -webkit-transition: opacity .25s ease .25s;
    transition: opacity .25s ease .25s
}

.product-quick-view {
    overflow: hidden
}

.popup-quick-view {
    position: relative;
    margin: 25px auto;
    max-width: 920px;
    background-color: #fff;
    -webkit-box-shadow: 4px 4px 17px rgba(0,0,0,.3);
    box-shadow: 4px 4px 17px rgba(0,0,0,.3)
}

.popup-quick-view .product-images {
    overflow: hidden
}

.popup-quick-view .product-images:hover .view-details-btn {
    -webkit-transform: none;
    transform: none
}

.popup-quick-view .product-image-summary {
    min-height: 450px
}

.popup-quick-view .has-scrollbar .woodmart-scroll-content {
    overflow: scroll;
    overflow-x: hidden
}

.popup-quick-view .entry-summary .entry-title {
    margin-bottom: 10px;
    font-size: 26px;
    line-height: 1.4
}

.popup-quick-view .entry-summary div[itemprop=offers] {
    clear: both
}

.popup-quick-view .entry-summary div[itemprop=offers] .price {
    margin-bottom: 15px
}

.popup-quick-view .entry-summary .woodmart-product-brands {
    display: inline-block;
    margin-bottom: 15px;
    margin-right: 15px;
    margin-left: 1px;
    vertical-align: middle
}

.popup-quick-view .entry-summary .woodmart-product-brands img {
    max-width: 65px
}

.popup-quick-view .entry-summary .woocommerce-product-rating {
    display: inline-block;
    margin-bottom: 15px;
    vertical-align: middle
}

.popup-quick-view .entry-summary .product-share {
    margin-bottom: 0
}

.popup-quick-view .woodmart-scroll-content > a {
    margin-bottom: 20px;
    color: #fff
}

.popup-quick-view .woodmart-scroll-content > a:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.popup-quick-view .woodmart-scroll-content > a.added {
    display: none
}

.popup-quick-view .view-details-btn {
    position: absolute !important;
    right: 15px;
    bottom: 0;
    left: 15px;
    z-index: 15;
    -webkit-transition: all .25s ease !important;
    transition: all .25s ease !important;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    position: relative;
    display: inline-block;
    outline: none;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: .3px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px;
    color: #fff
}

.popup-quick-view .view-details-btn:hover {
    text-decoration: none
}

.popup-quick-view .view-details-btn:focus {
    outline: none
}

.popup-quick-view .view-details-btn:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.popup-quick-view button.mfp-close {
    position: absolute;
    top: 0 !important;
    background-color: transparent;
    color: #000;
    opacity: 1;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.popup-quick-view button.mfp-close:hover {
    background-color: transparent;
    color: #777
}

.quick-view-horizontal .summary-inner {
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    left: 15px;
    width: auto
}

.quick-view-horizontal .woodmart-scroll-content {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 45px
}

.quick-view-horizontal .product-images {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.quick-view-horizontal .product-images > .images {
    width: 100%
}

.quick-view-vertical .woodmart-scroll-content {
    position: relative;
    padding-top: 25px;
    padding-right: 30px;
    padding-bottom: 25px;
    padding-left: 30px;
    max-height: 400px
}

.woodmart-sticky-btn {
    position: fixed;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 340;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 9px rgba(0,0,0,.12);
    box-shadow: 0 0 9px rgba(0,0,0,.12);
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
}

.woodmart-sticky-btn .woodmart-sticky-btn-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.woodmart-sticky-btn .woodmart-sticky-btn-container:after,.woodmart-sticky-btn .woodmart-sticky-btn-container:before {
    content: none
}

.woodmart-sticky-btn .woodmart-sticky-btn-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-right: 15px
}

.woodmart-sticky-btn .woodmart-sticky-btn-thumbnail {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    margin-right: 10px
}

.woodmart-sticky-btn .woodmart-sticky-btn-thumbnail img {
    min-width: 65px;
    max-width: 65px
}

.woodmart-sticky-btn .woodmart-sticky-btn-info {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-sticky-btn .woocommerce-price-suffix {
    display: block
}

.woodmart-sticky-btn .product-title {
    margin-bottom: 0;
    font-size: 14px
}

.woodmart-sticky-btn .star-rating {
    margin-top: 5px
}

.woodmart-sticky-btn .price {
    margin-right: 15px;
    text-align: right;
    font-size: 16px
}

.woodmart-sticky-btn .woodmart-sticky-btn-cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-sticky-btn .cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.woodmart-sticky-btn .quantity {
    margin-right: 10px
}

.woodmart-sticky-btn .stock {
    margin-bottom: 0;
    margin-right: 15px
}

.woodmart-sticky-btn-shown.woodmart-sticky-btn {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.woodmart-sticky-btn-shown.scrollToTop {
    bottom: 115px
}

.popup-added_to_cart {
    margin: 0 auto;
    max-width: 450px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 12px rgba(0,0,0,.31);
    box-shadow: 0 0 12px rgba(0,0,0,.31);
    text-align: center
}

.popup-added_to_cart .added-to-cart {
    padding: 30px 30px 25px
}

.popup-added_to_cart h4 {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 22px
}

.popup-added_to_cart .close-popup,.popup-added_to_cart .view-cart {
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 10px
}

.popup-added_to_cart .view-cart {
    min-width: 150px
}

.widget_product_categories .widget-title {
    margin-bottom: 10px
}

.widget_product_categories .product-categories {
    margin-bottom: -5px
}

.widget_product_categories .product-categories li {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 0
}

.widget_product_categories .product-categories li a {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 calc(100% - 40px);
    flex: 1 1 calc(100% - 40px);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 5px;
    width: calc(100% - 40px);
    text-decoration: none;
    font-size: 14px;
    line-height: 1.4
}

.widget_product_categories .product-categories li.current-cat > a {
    color: #333;
    font-weight: 600
}

.widget_product_categories .children {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-left: 15px;
    width: 100%
}

.widget_product_categories .count {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.widget_product_categories .woodmart-cats-toggle {
    position: absolute;
    top: 7px;
    right: -25px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #bbb;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.widget_product_categories .woodmart-cats-toggle:after {
    font-size: 16px;
    font-family: "FontAwesome";
    content: "\f107"
}

.widget_product_categories .woodmart-cats-toggle.toggle-active {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.widget_product_categories .woodmart-cats-toggle:hover,.widget_product_categories .woodmart-cats-toggle.toggle-active {
    background-color: #f9f9f9;
    color: #333
}

.categories-accordion-on .widget_product_categories .product-categories {
    padding-right: 25px
}

.categories-accordion-on .widget_product_categories .product-categories li {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.categories-accordion-on .widget_product_categories .count {
    margin-top: 8px
}

.categories-accordion-on .widget_product_categories .children {
    display: none
}

.color-scheme-light .widget_product_categories .product-categories li.current-cat > a {
    color: #fff
}

.color-scheme-light .widget_product_categories .woodmart-cats-toggle {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .widget_product_categories .woodmart-cats-toggle:hover,.color-scheme-light .widget_product_categories .woodmart-cats-toggle.toggle-active {
    background-color: #fff;
    color: #333
}

.product_list_widget > li {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid
}

.product_list_widget > li:after {
    content: "";
    display: block;
    clear: both
}

.product_list_widget > li > a {
    display: block;
    margin-bottom: 8px
}

.product_list_widget > li img {
    float: left;
    margin-right: 15px;
    min-width: 65px;
    max-width: 65px
}

.product_list_widget > li .widget-product-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.product_list_widget > li .widget-product-img {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    margin-right: 15px
}

.product_list_widget > li .widget-product-img > img {
    float: none;
    margin-right: 0
}

.product_list_widget > li .widget-product-info {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.product_list_widget > li .widget-product-info .star-rating {
    margin-left: 0
}

.product_list_widget > li .product-title {
    margin-bottom: 8px;
    font-size: 14px
}

.product_list_widget > li .star-rating {
    display: block;
    margin-top: -3px;
    margin-bottom: 4px;
    margin-left: 80px;
    width: 70px;
    font-size: 12px
}

.product_list_widget > li .star-rating span:before {
    font-size: 12px
}

.product_list_widget > li .reviewer {
    color: #bbb;
    font-size: 14px
}

.product_list_widget > li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none
}

.color-scheme-light .product_list_widget > li {
    border-color: rgba(255,255,255,.2)
}

.color-scheme-light .product_list_widget > li .reviewer {
    color: rgba(255,255,255,.8)
}

.widget_shopping_cart .has-scrollbar .woodmart-scroll-content {
    overflow: scroll;
    overflow-x: hidden
}

.widget_shopping_cart .woodmart-scroll-content {
    position: relative;
    padding-right: 5px;
    max-height: 250px
}

.widget_shopping_cart .product_list_widget {
    margin-bottom: 0;
    text-align: left
}

.widget_shopping_cart .mini_cart_item {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.widget_shopping_cart .mini_cart_item a {
    margin-bottom: 0
}

.widget_shopping_cart .cart-item-image {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    margin-right: 15px
}

.widget_shopping_cart .cart-item-image:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
    opacity: 0;
    -webkit-transition: opacity .6s ease;
    transition: opacity .6s ease;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0,0,0,.1);
    border-left-color: rgba(0,0,0,.8);
    border-radius: 50%;
    vertical-align: middle
}

.widget_shopping_cart .cart-item-image img {
    float: none;
    margin-right: 0;
    -webkit-transition: opacity .6s ease;
    transition: opacity .6s ease
}

.widget_shopping_cart .blockOverlay {
    display: none !important
}

.widget_shopping_cart .removing-process .cart-item-image:after {
    opacity: 1;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.widget_shopping_cart .removing-process .cart-item-image img {
    opacity: .2
}

.widget_shopping_cart .cart-item-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    font-size: 0
}

.widget_shopping_cart .cart-info {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-right: 20px
}

.widget_shopping_cart .product-title {
    display: block;
    margin-bottom: 6px
}

.widget_shopping_cart .product-title p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #777;
    font-weight: 400;
    font-size: 12px
}

.widget_shopping_cart .variation {
    margin-bottom: 6px
}

.widget_shopping_cart .quantity {
    display: block;
    color: #bbb;
    font-size: 13px
}

.widget_shopping_cart .remove {
    position: absolute;
    top: 1px;
    right: 0;
    z-index: 2;
    margin-bottom: 0;
    padding-right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: rgba(0,0,0,.8);
    text-align: center;
    font-size: 0;
    line-height: 20px
}

.widget_shopping_cart .remove:after {
    font-weight: bold;
    font-size: 8px;
    content: "\f10f";
    font-family: "woodmart-font"
}

.widget_shopping_cart .remove:hover {
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.1);
    box-shadow: 0 0 3px rgba(0,0,0,.1)
}

.widget_shopping_cart .shopping-cart-widget-footer > p {
    margin-bottom: 5px
}

.widget_shopping_cart .shopping-cart-widget-footer > p:last-child {
    margin-bottom: 0
}

.widget_shopping_cart .total {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 2px solid
}

.widget_shopping_cart .total strong {
    color: #2d2a2a;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px
}

.widget_shopping_cart .total .amount {
    font-weight: 600;
    font-size: 20px
}

.widget_shopping_cart .buttons {
    display: block;
    margin-bottom: 0;
    text-align: center
}

.widget_shopping_cart .buttons a {
    margin-bottom: 10px;
    width: 100%
}

.widget_shopping_cart .buttons a:last-child {
    margin-bottom: 0
}

.widget_shopping_cart .buttons .checkout {
    color: #fff
}

.widget_shopping_cart .buttons .checkout:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.widget_shopping_cart .return-to-shop {
    margin-bottom: 0
}

.widget_shopping_cart .return-to-shop a {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.widget_shopping_cart .empty {
    position: relative;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: none;
    color: #2d2a2a;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px
}

.dropdowns-color-light .dropdown-cart ul.variation,.dropdowns-color-light .cart-widget-side ul.variation {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .dropdown-cart .product-title,.dropdowns-color-light .cart-widget-side .product-title {
    color: #fff
}

.widget_price_filter .price_slider {
    margin-bottom: 20px
}

.widget_price_filter #min_price,.widget_price_filter #max_price {
    display: none
}

.widget_price_filter .price_slider_amount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: -10px
}

.widget_price_filter .price_slider_amount .button {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    margin-bottom: 10px;
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.widget_price_filter .price_slider_amount .price_label {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    margin-bottom: 10px;
    color: #717171;
    font-size: 14px
}

.widget_price_filter .price_slider_amount .price_label > span {
    color: #2d2a2a;
    font-weight: 600
}

.widget_price_filter .price_slider_amount .clear {
    display: none
}

.widget_price_filter .ui-slider {
    position: relative
}

.widget_price_filter .ui-slider-horizontal {
    height: 20px;
    border: none;
    background: none;
    cursor: pointer
}

.widget_price_filter .ui-slider-horizontal:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin-top: -1px;
    height: 2px;
    background-color: #e7e7e7
}

.widget_price_filter .ui-slider .ui-slider-range {
    position: absolute;
    top: 50%;
    z-index: 1;
    display: block;
    margin-top: -1px;
    height: 2px;
    border: 0;
    border-radius: 0;
    background-image: none
}

.widget_price_filter .ui-slider .ui-slider-handle {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: -15px;
    margin-left: -15px;
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 0;
    background: none;
    background-color: transparent !important;
    cursor: ew-resize
}

.widget_price_filter .ui-slider .ui-slider-handle:after {
    content: "";
    display: inline-block;
    width: 4px;
    height: 15px
}

.widget_price_filter .ui-slider-range-min {
    left: -1px
}

.widget_price_filter .ui-slider-range-max {
    right: -1px
}

.login-see-prices .widget_price_filter {
    display: none
}

.color-scheme-light .widget_price_filter .price_slider_amount .price_label {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .widget_price_filter .price_slider_amount .price_label > span {
    color: #fff
}

.color-scheme-light .widget_price_filter .ui-slider-horizontal:before {
    background-color: rgba(255,255,255,.4)
}

.widget_rating_filter .wc-layered-nav-rating a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #bbb
}

.widget_layered_nav ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.widget_layered_nav ul li a {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-right: 10px
}

.widget_layered_nav ul li a:before {
    content: "";
    display: inline-block;
    margin-top: -2px;
    margin-right: 8px;
    width: 14px;
    height: 14px;
    border: 2px solid #d8d8d8;
    vertical-align: middle;
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease
}

.widget_layered_nav ul li a:after {
    position: absolute;
    top: 2px;
    left: 2px;
    color: #fff;
    font-weight: 600;
    font-size: 10px;
    opacity: 0;
    content: "\f109";
    font-family: "woodmart-font"
}

.widget_layered_nav ul .chosen a {
    color: #333;
    font-weight: 600
}

.widget_layered_nav ul .chosen a:after {
    opacity: 1
}

.widget_layered_nav ul .count {
    color: #bbb
}

.color-scheme-light .widget_layered_nav .chosen a {
    color: #fff
}

.color-scheme-light .widget_layered_nav ul li a:before {
    border-color: rgba(255,255,255,.2)
}

.color-scheme-light .widget_layered_nav .count {
    color: rgba(255,255,255,.8)
}

.widget_layered_nav_filters ul li {
    margin-bottom: 15px
}

.widget_layered_nav_filters ul li a {
    position: relative;
    display: block;
    color: #333;
    font-weight: 600;
    padding-left: 16px;
    cursor: pointer
}

.widget_layered_nav_filters ul li a:after {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.widget_layered_nav_filters ul li a:before {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

.widget_layered_nav_filters ul li a:hover:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.widget_layered_nav_filters ul li a:hover:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.widget_layered_nav_filters ul li a:after,.widget_layered_nav_filters ul li a:before {
    content: " ";
    position: absolute;
    top: 50%;
    display: inline-block;
    margin-top: -1px;
    width: 10px;
    height: 2px;
    background-color: currentColor;
    -webkit-transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    left: 0
}

.color-scheme-light .widget_layered_nav_filters ul li a {
    color: #fff
}

.woodmart-user-panel > .woodmart-user-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 110%
}

.woodmart-user-panel > a {
    margin-left: 5px;
    font-weight: 600
}

.woodmart-user-panel .user-avatar {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 15px
}

.woodmart-user-panel .user-avatar img {
    max-width: 60px;
    border-radius: 50%
}

.woodmart-user-panel .user-info {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-user-panel .user-info > span {
    display: block;
    margin-bottom: 10px
}

.woodmart-user-panel .user-info strong {
    color: #333
}

.woodmart-user-panel .logout-link {
    position: relative;
    display: inline-block;
    outline: none;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: .3px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px;
    padding: 0;
    border-width: 2px;
    border-style: solid;
    border-top: none;
    border-right: none;
    border-left: none;
    background-color: transparent !important;
    border-color: #dfdfdf;
    color: #333
}

.woodmart-user-panel .logout-link:hover {
    text-decoration: none
}

.woodmart-user-panel .logout-link:focus {
    outline: none
}

.woodmart-user-panel .logout-link:hover {
    background-color: transparent !important;
    -webkit-box-shadow: none;
    box-shadow: none
}

.woodmart-user-panel .logout-link:hover {
    border-color: #c5c5c5;
    color: #333
}

.color-scheme-light .woodmart-user-panel .user-info strong {
    color: #fff
}

.woodmart-price-filter .amount {
    color: inherit;
    font-weight: inherit
}

.woodmart-price-filter .current-state {
    color: #333;
    font-weight: 600
}

.woodmart-price-filter .current-state .amount {
    font-weight: 600
}

.login-see-prices .woodmart-price-filter {
    display: none
}

.color-scheme-light .woodmart-price-filter .current-state {
    color: #fff
}

.woocommerce-ordering-list .selected-order {
    color: #333;
    font-weight: 600
}

.color-scheme-light .woocommerce-ordering-list .selected-order {
    color: #fff
}

.upsells-widget .product_list_widget {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px
}

.upsells-widget .small-product-content {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 50%;
    flex: 0 1 50%;
    margin-bottom: 10px;
    padding-right: 5px;
    padding-bottom: 0;
    padding-left: 5px;
    max-width: 50%;
    border: none
}

.upsells-widget .small-product-content a {
    margin-bottom: 0
}

.upsells-widget .small-product-content .attachment-woocommerce_thumbnail {
    float: none;
    margin-right: 0;
    max-width: 100%
}

.upsells-widget .small-product-content:hover .small-product-info {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,transform .3s ease;
    transition: opacity .3s ease,transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px)
}

.upsells-widget .product-small-inner {
    position: relative;
    text-align: center
}

.upsells-widget .small-product-info {
    position: absolute;
    right: -5px;
    bottom: 100%;
    left: -5px;
    z-index: 4;
    z-index: 400;
    visibility: hidden;
    padding: 10px;
    background: #fff;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.15);
    box-shadow: 0 0 4px rgba(0,0,0,.15);
    line-height: 1;
    opacity: 0;
    -webkit-transition: visibility .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    transition: visibility .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    transition: visibility .3s ease,opacity .3s ease,transform .3s ease;
    transition: visibility .3s ease,opacity .3s ease,transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    pointer-events: none
}

.upsells-widget .small-product-info .price,.upsells-widget .small-product-info .product-title {
    display: block;
    font-size: 12px
}

.upsells-widget .small-product-info .product-title {
    margin-bottom: 5px
}

.upsells-widget .small-product-info:after {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -2px;
    margin-left: -5px;
    width: 10px;
    height: 9px;
    color: #fff;
    text-shadow: 0 2px 3px rgba(0,0,0,.1);
    font-size: 20px;
    font-family: "FontAwesome";
    line-height: 10px;
    content: "\f0d7"
}

.search-by-category {
    position: absolute;
    top: 2px;
    right: 52px
}

.search-by-category .input-dropdown-inner {
    height: 42px;
    border-right: 1px solid rgba(129,129,129,.2);
    border-left: 1px solid rgba(129,129,129,.2);
    line-height: 42px
}

.search-by-category .input-dropdown-inner > a {
    display: block;
    padding-right: 15px;
    padding-left: 15px;
    color: #777;
    text-align: center;
    text-transform: uppercase;
    font-size: 13px
}

.search-by-category .input-dropdown-inner > a:hover {
    text-decoration: none
}

.search-by-category .input-dropdown-inner > a:after {
    display: inline-block;
    margin-left: 8px;
    font-weight: normal;
    font-size: 14px;
    font-family: "FontAwesome";
    content: "\f107"
}

.search-by-category .list-wrapper {
    position: absolute;
    top: 100%;
    right: 1px;
    z-index: 300;
    display: none;
    margin-top: 2px;
    width: 170px;
    height: auto;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.search-by-category .list-wrapper .woodmart-scroll-content {
    position: relative;
    max-height: 250px
}

.search-by-category .list-wrapper.has-scrollbar .woodmart-scroll-content {
    overflow: scroll;
    overflow-x: hidden
}

.search-by-category ul li {
    margin-bottom: 0
}

.search-by-category ul li a {
    display: block;
    padding-top: 8px;
    padding-right: 18px;
    padding-bottom: 8px;
    padding-left: 18px;
    color: #777;
    font-size: 14px;
    line-height: 20px
}

.search-by-category ul li a:hover,.search-by-category ul li a:focus {
    background-color: #f9f9f9;
    color: #777
}

.search-by-category ul li.current-item > a {
    background-color: #f4f4f4;
    color: #777
}

.search-by-category ul .children > li > a {
    padding-left: 30px
}

.color-scheme-light .search-by-category .list-wrapper,.dropdowns-color-light .whb-column .search-by-category .list-wrapper {
    background-color: #101010
}

.color-scheme-light .search-by-category ul li a,.dropdowns-color-light .whb-column .search-by-category ul li a {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .search-by-category ul li a:hover,.color-scheme-light .search-by-category ul li a:focus,.dropdowns-color-light .whb-column .search-by-category ul li a:hover,.dropdowns-color-light .whb-column .search-by-category ul li a:focus {
    background-color: rgba(255,255,255,.08);
    color: rgba(255,255,255,.8)
}

.color-scheme-light .search-by-category ul li.current-item > a,.dropdowns-color-light .whb-column .search-by-category ul li.current-item > a {
    background-color: rgba(0,0,0,.9);
    color: rgba(255,255,255,.8)
}

.color-scheme-light .search-by-category .woodmart-scroll-pane,.dropdowns-color-light .whb-column .search-by-category .woodmart-scroll-pane {
    background: rgba(255,255,255,.15)
}

.color-scheme-light .search-by-category .woodmart-scroll-pane > .woodmart-scroll-slider,.dropdowns-color-light .whb-column .search-by-category .woodmart-scroll-pane > .woodmart-scroll-slider {
    background: rgba(255,255,255,.35)
}

.has-categories-dropdown input[type=text] {
    padding-right: 230px
}

.woodmart-woocommerce-layered-nav > .filter-pseudo-link {
    display: none
}

.woodmart-woocommerce-layered-nav .woodmart-scroll {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-woocommerce-layered-nav .woodmart-scroll .swatches-display-list li {
    margin-right: 5px
}

.woodmart-woocommerce-layered-nav .woodmart-scroll-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.woodmart-woocommerce-layered-nav .has-scrollbar .woodmart-scroll-content {
    overflow: scroll;
    overflow-x: hidden
}

.woodmart-woocommerce-layered-nav .woodmart-scroll-pane {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.disabled-nanoscroller .woodmart-woocommerce-layered-nav .swatches-display-list li {
    margin-right: 5px
}

.woodmart-woocommerce-layered-nav li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 5px
}

.woodmart-woocommerce-layered-nav .layered-nav-link {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 5px
}

.woodmart-woocommerce-layered-nav .layered-nav-link:after {
    display: none;
    margin-left: 5px;
    font-weight: 400;
    font-size: 12px;
    font-family: "FontAwesome";
    line-height: 1;
    content: "\f00d"
}

.woodmart-woocommerce-layered-nav .layered-nav-link:hover .filter-swatch span:after,.woodmart-woocommerce-layered-nav .layered-nav-link:focus .filter-swatch span:after {
    opacity: 1
}

.woodmart-woocommerce-layered-nav .swatch-inner {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.woodmart-woocommerce-layered-nav .layer-term-name {
    position: relative;
    font-size: 14px;
    line-height: 1.2
}

.woodmart-woocommerce-layered-nav .chosen .layered-nav-link {
    color: #333;
    font-weight: 600
}

.woodmart-woocommerce-layered-nav .chosen .layered-nav-link:after {
    display: block
}

.woodmart-woocommerce-layered-nav .with-swatch-text .layered-nav-link {
    color: #333;
    font-weight: 600
}

.woodmart-woocommerce-layered-nav .with-swatch-text .layer-term-name {
    min-width: 20px;
    text-align: center
}

.woodmart-woocommerce-layered-nav .with-swatch-text .layer-term-name:after {
    content: "";
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    margin-top: 1px;
    height: 2px;
    background-color: #000;
    opacity: 0;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-woocommerce-layered-nav .with-swatch-text .layered-nav-link:hover,.woodmart-woocommerce-layered-nav .with-swatch-text .layered-nav-link:focus {
    color: #777
}

.woodmart-woocommerce-layered-nav .with-swatch-text.chosen .layer-term-name:after {
    opacity: 1
}

.woodmart-woocommerce-layered-nav .swatches-brands .filter-swatch span {
    border: none;
    border-radius: 0
}

.woodmart-woocommerce-layered-nav .swatches-brands .filter-swatch span:after {
    content: none
}

.woodmart-woocommerce-layered-nav .swatches-brands .layered-nav-link:hover .filter-swatch,.woodmart-woocommerce-layered-nav .swatches-brands .layered-nav-link:focus .filter-swatch {
    opacity: .5
}

.woodmart-woocommerce-layered-nav .swatches-brands .chosen .layered-nav-link .filter-swatch {
    opacity: .5
}

.woodmart-woocommerce-layered-nav .swatches-display-inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.woodmart-woocommerce-layered-nav .swatches-display-inline li {
    margin-right: 10px
}

.woodmart-woocommerce-layered-nav .swatches-display-inline li:last-child {
    margin-bottom: 5px
}

.woodmart-woocommerce-layered-nav .swatches-display-inline .with-swatch-text .layer-term-name {
    padding-right: 4px;
    padding-left: 4px;
    min-width: 0
}

.woodmart-woocommerce-layered-nav .swatches-display-inline .count {
    min-width: 25px;
    font-size: 10px
}

.woodmart-woocommerce-layered-nav .swatches-display-inline.swatches-brands li {
    margin-right: 20px
}

.woodmart-woocommerce-layered-nav .swatches-display-inline.show-labels-off .with-swatch-text .layer-term-name {
    min-width: 25px
}

.woodmart-woocommerce-layered-nav .swatches-display-double {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -5px
}

.woodmart-woocommerce-layered-nav .swatches-display-double li {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    padding-right: 5px;
    padding-left: 5px;
    max-width: 50%
}

.woodmart-woocommerce-layered-nav .swatches-display-double li:last-child {
    margin-bottom: 5px
}

.woodmart-woocommerce-layered-nav .swatches-small .with-swatch-text .layer-term-name {
    font-size: 14px
}

.woodmart-woocommerce-layered-nav .swatches-normal .with-swatch-text .layer-term-name {
    font-size: 16px
}

.woodmart-woocommerce-layered-nav .swatches-large .with-swatch-text .layer-term-name {
    font-size: 18px
}

.woodmart-woocommerce-layered-nav .show-labels-off .wc-layered-nav-term:not(.with-swatch-text) .layer-term-name {
    display: none
}

.woodmart-woocommerce-layered-nav .show-labels-off .count {
    display: none
}

.woodmart-woocommerce-layered-nav .show-labels-off .filter-swatch {
    margin-right: 0
}

.woodmart-woocommerce-layered-nav .show-labels-off .layered-nav-link {
    padding-right: 0
}

.woodmart-woocommerce-layered-nav .show-labels-off .layered-nav-link:after {
    content: none
}

.color-scheme-light .woodmart-woocommerce-layered-nav .chosen .layered-nav-link {
    color: #fff
}

.color-scheme-light .woodmart-woocommerce-layered-nav .with-swatch-text .layered-nav-link {
    color: #fff
}

.color-scheme-light .woodmart-woocommerce-layered-nav .with-swatch-text .layer-term-name:after {
    background-color: #fff
}

.woodmart-widget-layered-nav-dropdown-form,.woocommerce-widget-layered-nav-dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.woodmart-widget-layered-nav-dropdown-form select[multiple=multiple],.woocommerce-widget-layered-nav-dropdown select[multiple=multiple] {
    overflow: hidden;
    background-image: none
}

.woodmart-widget-layered-nav-dropdown-form select[multiple=multiple] option,.woocommerce-widget-layered-nav-dropdown select[multiple=multiple] option {
    margin-top: 9px;
    padding: 0;
    background-color: transparent
}

.woodmart-widget-layered-nav-dropdown-form select[multiple=multiple] option:not(:first-child),.woocommerce-widget-layered-nav-dropdown select[multiple=multiple] option:not(:first-child) {
    display: none
}

.woodmart-widget-layered-nav-dropdown__submit,.woocommerce-widget-layered-nav-dropdown__submit {
    margin-top: 20px;
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.woocommerce-form__label {
    cursor: pointer
}

header.title {
    margin-bottom: 10px
}

.woocommerce-Address-title .edit,.woocommerce-Address-title > h3 {
    display: inline-block;
    margin-bottom: 5px;
    vertical-align: middle
}

.woocommerce-Address-title .edit {
    padding-right: 5px;
    padding-left: 5px;
    color: #3f3f3f;
    font-weight: 600;
    font-size: 12px
}

button[name=save_account_details],button[name=save_address],button[name=track] {
    color: #fff
}

button[name=save_account_details]:hover,button[name=save_address]:hover,button[name=track]:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

ul.variation {
    color: #b2b2b2;
    font-size: 12px;
    line-height: 1.2
}

ul.variation li {
    margin-bottom: 5px
}

ul.variation li p {
    margin-top: 0;
    margin-bottom: 0;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit
}

ul.variation li:last-child {
    margin-bottom: 0
}

ul.variation .item-variation-value,ul.variation .item-variation-name {
    display: inline-block;
    vertical-align: middle
}

.color-scheme-light ul.variation {
    color: rgba(255,255,255,.6)
}

.wc-item-meta {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.2
}

.wc-item-meta li p,.wc-item-meta li strong {
    display: inline-block;
    margin-bottom: 5px
}

.wc-item-meta li strong {
    color: #333
}

.blockOverlay {
    z-index: 340 !important;
    background-image: none !important;
    -webkit-animation: wd-FadeInLoader .6s ease forwards;
    animation: wd-FadeInLoader .6s ease forwards
}

.blockOverlay:before {
    content: none !important
}

.blockOverlay:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -13px;
    margin-left: -13px;
    content: "";
    display: inline-block;
    width: 26px;
    height: 26px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle;
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.screen-reader-text {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px)
}

a.login-to-prices-msg {
    font-weight: 600
}

a.login-to-prices-msg:hover {
    opacity: .6
}

.woocommerce-invalid input:not(:focus),.woocommerce-invalid .select2-container--default .select2-selection--single {
    border-color: #ca1919
}

.quantity {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: top;
    white-space: nowrap;
    font-size: 0
}

.quantity input[type=number]::-webkit-inner-spin-button,.quantity input[type=number]::-webkit-outer-spin-button,.quantity input[type=number] {
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.quantity input[type=number],.quantity input[type=button] {
    display: inline-block;
    color: #777
}

.quantity input[type=number] {
    width: 30px;
    height: 42px;
    border-right: none;
    border-left: none
}

.browser-Firefox .quantity input[type=number] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield
}

.quantity input[type=button] {
    padding: 0 5px;
    min-width: 25px;
    height: 42px;
    border: 2px solid rgba(129,129,129,.2);
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
}

.quantity input[type=button]:hover {
    color: #fff
}

.woodmart-stock-progress-bar .stock-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 5px;
    color: #777
}

.woodmart-stock-progress-bar .stock-info span {
    margin-left: 3px;
    color: #333;
    font-weight: 600
}

.woodmart-stock-progress-bar .progress-area,.woodmart-stock-progress-bar .progress-bar {
    height: 7px
}

.woodmart-stock-progress-bar .progress-area {
    width: 100%;
    background-color: #f4f4f4
}

.color-scheme-light .woodmart-stock-progress-bar .stock-info {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .woodmart-stock-progress-bar .stock-info span {
    color: #fff
}

.color-scheme-light .woodmart-stock-progress-bar .progress-area {
    background-color: #101010
}

.woocommerce-notices-wrapper:empty {
    display: none
}

ul.woocommerce-error,ul.woocommerce-message,ul.woocommerce-info {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

ul.woocommerce-error li:not(:last-child),ul.woocommerce-message li:not(:last-child),ul.woocommerce-info li:not(:last-child) {
    margin-bottom: 15px
}

ul.woocommerce-error li .button,ul.woocommerce-message li .button,ul.woocommerce-info li .button {
    float: right;
    margin-top: 0;
    margin-right: 5px;
    margin-bottom: 0;
    margin-left: 5px
}

.woodmart-product-categories {
    margin-top: 15px;
    margin-right: -15px;
    margin-left: -15px;
    vertical-align: middle
}

.woodmart-product-categories > li {
    display: inline-block;
    vertical-align: middle
}

.woodmart-product-categories li {
    position: relative
}

.woodmart-product-categories .category-nav-link > a {
    color: #4e4e4e
}

.woodmart-product-categories .category-nav-link > a:hover,.woodmart-product-categories .category-nav-link > a:focus {
    color: #2d2a2a
}

.woodmart-product-categories .children {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 15;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 210px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.woodmart-product-categories .children .category-nav-link a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 10px;
    padding-right: 25px;
    padding-bottom: 10px;
    padding-left: 25px;
    width: 100%
}

.woodmart-product-categories .children .category-name {
    text-transform: none
}

.woodmart-product-categories .children .category-icon {
    max-height: 35px
}

.woodmart-product-categories .children .children {
    top: 0;
    left: 100%;
    margin-top: 0
}

.woodmart-product-categories .children .children:after {
    content: none
}

.woodmart-product-categories .wc-default-cat,.woodmart-product-categories .shop-all-link {
    display: none
}

.woodmart-product-categories .shop-all-link a:before {
    margin-right: 10px;
    font-weight: 400;
    font-size: 40px;
    line-height: 1;
    content: "\f11a";
    font-family: "woodmart-font"
}

.color-scheme-light .woodmart-product-categories .children {
    background-color: #101010;
    -webkit-box-shadow: none;
    box-shadow: none
}

.category-nav-link {
    position: relative
}

.category-nav-link a {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    text-decoration: none;
    text-transform: uppercase
}

.category-nav-link .category-summary {
    display: inline-block;
    vertical-align: middle;
    text-align: left
}

.category-nav-link .category-icon {
    display: inline-block;
    margin-right: 10px;
    max-height: 40px
}

.category-nav-link .category-name {
    position: relative;
    display: inline-block;
    letter-spacing: .2px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3
}

.category-nav-link .category-products-count {
    display: block;
    margin-top: 5px;
    color: #9a9a9a;
    text-transform: capitalize;
    font-size: 12px
}

.color-scheme-light .category-nav-link > a {
    color: #fff
}

.color-scheme-light .category-nav-link > a:hover,.color-scheme-light .category-nav-link > a:focus {
    color: rgba(255,255,255,.9)
}

.color-scheme-light .category-nav-link .category-products-count {
    color: rgba(255,255,255,.6)
}

.shop-title-wrapper {
    position: relative;
    display: inline-block
}

.shop-title-wrapper .entry-title {
    display: inline-block;
    vertical-align: middle
}

.shop-title-wrapper .woodmart-back-btn {
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
    height: 34px;
    vertical-align: middle;
    line-height: 34px
}

.shop-title-wrapper .woodmart-back-btn span {
    display: none
}

.shop-title-wrapper .woodmart-back-btn:after {
    display: inline-block;
    font-size: 26px;
    content: "\f119";
    font-family: "woodmart-font"
}

.shop-title-wrapper .woodmart-back-btn:hover:after {
    -webkit-animation: wd-ShakePrev 1s ease infinite;
    animation: wd-ShakePrev 1s ease infinite
}

.color-scheme-light .shop-title-wrapper .woodmart-back-btn:after {
    color: #fff
}

.page-title.with-back-btn .shop-title-wrapper {
    -webkit-animation: wd-fadeIn .3s ease;
    animation: wd-fadeIn .3s ease
}

.page-title.with-back-btn .woodmart-back-btn {
    -webkit-animation: wd-ShakePrev 1s ease;
    animation: wd-ShakePrev 1s ease
}

.hasno-product-count.woodmart-product-categories {
    margin-right: -12px;
    margin-left: -12px
}

.hasno-product-count .category-nav-link a {
    padding-right: 12px;
    padding-left: 12px
}

.hasno-product-count .category-nav-link .category-icon {
    margin-right: 7px;
    max-height: 18px
}

.hasno-product-count .shop-all-link a:before {
    font-size: 16px
}

.hasno-product-count .shop-all-link .category-products-count {
    display: none
}

.title-size-small .category-icon {
    max-height: 30px
}

.title-size-small .woodmart-product-categories {
    margin-top: 10px
}

.title-size-small .woodmart-product-categories .children .category-icon {
    max-height: 30px
}

.title-size-small .hasno-product-count .children .category-icon {
    max-height: 20px
}

.title-size-large .category-nav-link .category-name {
    font-size: 15px
}

.title-size-large .woodmart-product-categories .children .category-name {
    font-size: 14px
}

.title-design-centered:not(.without-title) .woodmart-back-btn {
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -17px
}

.without-title .nav-shop {
    position: relative
}

.without-title .woodmart-product-categories {
    display: inline-block;
    margin-top: 0
}

.without-title .shop-title-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -17px
}

.without-title .woodmart-show-categories {
    margin-top: 0;
    margin-bottom: 0
}

.without-title .category-nav-link a {
    padding-top: 17px;
    padding-bottom: 17px
}

.without-title.with-back-btn .nav-shop {
    padding-right: 50px;
    padding-left: 50px
}

.without-title.title-size-small {
    padding-top: 0;
    padding-bottom: 0
}

.without-title.title-size-small .woodmart-product-categories .children {
    margin-top: 0
}

.without-title.title-size-small .woodmart-product-categories:after {
    content: none
}

.without-title.title-size-default {
    padding-top: 35px;
    padding-bottom: 35px
}

.without-title.title-size-large {
    padding-top: 60px;
    padding-bottom: 60px
}

.icon-drop-category {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    margin-top: -20px;
    width: 60px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer
}

.icon-drop-category:after {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: #2d2a2a;
    text-align: center;
    font-size: 16px;
    line-height: 25px;
    -webkit-transition: -webkit-transform .2s ease-in-out;
    transition: -webkit-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    content: "\f110";
    font-family: "woodmart-font";
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.icon-drop-category.woodmart-act-icon:after {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
}

.color-scheme-light .icon-drop-category:after {
    color: #fff
}

.woodmart-show-categories {
    display: none;
    margin-top: 5px;
    margin-bottom: -10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.woodmart-show-categories a {
    display: inline-block;
    padding-top: 15px;
    padding-bottom: 15px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .3px;
    font-weight: 900
}

.woodmart-show-categories a:after {
    display: inline-block;
    margin-top: -2px;
    margin-left: 7px;
    vertical-align: middle;
    font-size: 14px;
    line-height: 14px;
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease;
    content: "\f124";
    font-family: "woodmart-font";
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.woodmart-show-categories a:not(.inline):hover,.woodmart-show-categories a:not(.inline):focus {
    color: #3f3f3f
}

.woodmart-show-categories.button-open a:after {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg)
}

.color-scheme-light .woodmart-show-categories a {
    color: #fff
}

.color-scheme-light .woodmart-show-categories a:hover,.color-scheme-light .woodmart-show-categories a:focus {
    color: #fff
}

.term-description,.page-description {
    margin-bottom: 25px
}

.description-area-after .term-description,.description-area-after .page-description {
    margin-top: 25px
}

.shop-content-area > .woocommerce-notices-wrapper {
    margin-bottom: 30px
}

.woodmart-highlighted-products {
    margin-bottom: 35px
}

.woodmart-highlighted-products .element-title {
    padding-left: 10px;
    padding-right: 60px
}

.woodmart-highlighted-products .elements-grid,.woodmart-highlighted-products.woodmart-carousel-container {
    margin-right: 0;
    margin-left: 0;
    padding-top: 25px;
    padding-right: 20px;
    padding-bottom: 0;
    padding-left: 20px;
    border: 2px solid
}

.woodmart-highlighted-products .woodmart-products-loader {
    position: absolute;
    left: 50% !important
}

.woodmart-highlighted-products.element-loading .woodmart-products-loader {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility .3s ease;
    transition: opacity .3s ease,visibility .3s ease
}

.woodmart-highlighted-products .elements-grid .product-grid-item {
    padding-right: 10px;
    padding-left: 10px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.woodmart-highlighted-products .pagination-arrows.loading {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.woodmart-highlighted-products .pagination-arrows.loading .product-grid-item {
    opacity: 0
}

.woodmart-highlighted-products .pagination-more-btn + .products-footer,.woodmart-highlighted-products .pagination-infinit + .products-footer {
    margin-top: 15px
}

.woodmart-highlighted-products .owl-carousel {
    margin-bottom: 25px
}

.woodmart-highlighted-products .owl-carousel .owl-item,.woodmart-highlighted-products .owl-carousel:not(.owl-loaded) > div {
    padding-right: 10px;
    padding-left: 10px
}

.woodmart-highlighted-products .owl-carousel .product-grid-item {
    margin-bottom: 0
}

.woodmart-highlighted-products .owl-loaded:after,.woodmart-highlighted-products .owl-loaded:before {
    content: none
}

.woodmart-highlighted-products .owl-dots {
    margin-bottom: -10px
}

.woodmart-highlighted-products .owl-nav > div,.woodmart-highlighted-products .wrap-loading-arrow > div {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible
}

.woodmart-highlighted-products .owl-nav > div:after,.woodmart-highlighted-products .wrap-loading-arrow > div:after {
    font-weight: 700;
    font-size: 14px
}

.woodmart-highlighted-products.with-title .owl-nav,.woodmart-highlighted-products.with-title .wrap-loading-arrow {
    position: absolute;
    -webkit-animation: wd-fadeIn .5s ease both .3s;
    animation: wd-fadeIn .5s ease both .3s
}

.woodmart-highlighted-products.with-title .owl-nav > div,.woodmart-highlighted-products.with-title .wrap-loading-arrow > div {
    position: static;
    margin-top: 0;
    width: 30px;
    height: 40px
}

.woodmart-highlighted-products.with-title .owl-nav > div[class*=prev],.woodmart-highlighted-products.with-title .owl-nav > div[class*=next],.woodmart-highlighted-products.with-title .wrap-loading-arrow > div[class*=prev],.woodmart-highlighted-products.with-title .wrap-loading-arrow > div[class*=next] {
    margin: 0;
    padding: 0
}

.woodmart-highlighted-products.with-title .wrap-loading-arrow {
    top: 22px;
    right: 25px
}

.woodmart-highlighted-products.with-title .owl-nav {
    top: -55px;
    right: 0
}

.woodmart-highlighted-products:not(.with-title) .owl-nav > div,.woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div {
    border-radius: 50%;
    background-color: #fff;
    -webkit-box-shadow: 1px 1px 9px rgba(0,0,0,.15);
    box-shadow: 1px 1px 9px rgba(0,0,0,.15)
}

.woodmart-highlighted-products:not(.with-title) .owl-nav > div[class*=prev] {
    left: -46px
}

.woodmart-highlighted-products:not(.with-title) .owl-nav > div[class*=next] {
    right: -46px
}

.woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div {
    position: absolute;
    margin-right: 0 !important;
    margin-left: 0 !important
}

.woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div[class*=prev] {
    left: -24px !important
}

.woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div[class*=next] {
    right: -24px !important;
    left: auto !important
}

.woodmart-highlighted-products .woodmart-hover-base.product-in-carousel {
    margin-bottom: 0
}

.color-scheme-light .woodmart-highlighted-products:not(.with-title) .owl-nav > div,.color-scheme-light .woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div {
    background-color: #101010
}

.products-bordered-grid {
    margin-right: 0 !important;
    margin-left: 0 !important
}

.products-bordered-grid.elements-grid {
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
    border-style: solid;
    border-left-width: 1px
}

.products-bordered-grid:not(.elements-list) .product {
    margin-bottom: 0 !important;
    border-style: solid;
    border-color: inherit;
    border-bottom-width: 1px;
    border-right-width: 1px
}

.products-bordered-grid.woodmart-spacing-2 .product {
    padding-top: 1px;
    padding-bottom: 1px
}

.products-bordered-grid.woodmart-spacing-6 .product {
    padding-top: 3px;
    padding-bottom: 3px
}

.products-bordered-grid.woodmart-spacing-10 .product {
    padding-top: 5px;
    padding-bottom: 5px
}

.products-bordered-grid.woodmart-spacing-20 .product {
    padding-top: 10px;
    padding-bottom: 10px
}

.products-bordered-grid.woodmart-spacing-30 .product {
    padding-top: 15px;
    padding-bottom: 15px
}

.products-bordered-grid + .products-footer {
    margin-top: 25px
}

.products-bordered-grid.elements-list {
    padding-top: 30px;
    border-width: 1px
}

.products-bordered-grid div.owl-item {
    padding-right: 0;
    padding-left: 0
}

.products-bordered-grid .owl-item,.products-bordered-grid .owl-stage {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    border-color: inherit
}

.products-bordered-grid .owl-carousel-item {
    width: 100%;
    border-width: 1px;
    border-color: inherit;
    border-right-style: solid
}

.products-bordered-grid .owl-carousel-item .product-grid-item {
    margin-bottom: 0;
    border-style: none
}

.products-bordered-grid .owl-stage-outer,.products-bordered-grid div.owl-carousel:not(.owl-loaded) {
    padding: 0 !important;
    border-style: solid
}

.products-bordered-grid .owl-stage-outer {
    margin-right: 1px;
    margin-left: 1px;
    border-width: 1px
}

.products-bordered-grid .owl-carousel:not(.owl-loaded) {
    border-top-width: 1px;
    border-bottom-width: 1px
}

.products-bordered-grid .owl-carousel:not(.owl-loaded) .owl-carousel-item:first-child {
    border-left-style: solid
}

.products-bordered-grid .owl-item:last-child .owl-carousel-item {
    border-right-style: none
}

.products-bordered-grid.woodmart-carousel-spacing-2 .owl-carousel-item {
    padding: 1px
}

.products-bordered-grid.woodmart-carousel-spacing-6 .owl-carousel-item {
    padding: 3px
}

.products-bordered-grid.woodmart-carousel-spacing-10 .owl-carousel-item {
    padding: 5px
}

.products-bordered-grid.woodmart-carousel-spacing-20 .owl-carousel-item {
    padding: 10px
}

.products-bordered-grid.woodmart-carousel-spacing-30 .owl-carousel-item {
    padding: 15px
}

.products-bordered-grid .owl-nav > div[class*=prev] {
    left: -50px !important
}

.products-bordered-grid .owl-nav > div[class*=next] {
    right: -50px !important
}

.products {
    -webkit-transition: opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,transform .25s ease,-webkit-transform .25s ease
}

.woodmart-shop-loader:after,.woodmart-products-loader:after,.woodmart-tabs-loader:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #bbb;
    border-left-color: #000;
    border-radius: 50%;
    vertical-align: middle
}

.color-scheme-light .woodmart-shop-loader:after,.color-scheme-light .woodmart-products-loader:after,.color-scheme-light .woodmart-tabs-loader:after {
    border-color: rgba(255,255,255,.15);
    border-left-color: #fff
}

.woodmart-shop-loader {
    display: none
}

.woodmart-shop-loader:not(.hidden-loader) {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -15px
}

.woodmart-shop-loader.hidden-from-top {
    position: relative
}

.woodmart-shop-loader.hidden-from-top:after {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -15px
}

.woodmart-shop-loader.hidden-from-top.hidden-loader {
    margin-left: 0 !important
}

.woodmart-shop-loader.hidden-from-bottom {
    position: absolute;
    bottom: 115px;
    left: 50%;
    margin-left: -15px
}

.woodmart-shop-loader.hidden-from-bottom.hidden-loader {
    margin-left: -15px !important
}

.content-without-products .woodmart-shop-loader {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: 25px;
    margin-left: -15px
}

.site-content.col-lg-12 .woodmart-shop-loader {
    margin-left: -15px
}

.ajax-loading .woodmart-shop-loader {
    display: block;
    -webkit-animation: wd-fadeIn 1s ease;
    animation: wd-fadeIn 1s ease
}

.ajax-loading .woodmart-shop-loader:after {
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.ajax-loading .products {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
    pointer-events: none
}

.ajax-loaded .products {
    -webkit-animation: wd-fadeIn .3s ease;
    animation: wd-fadeIn .3s ease
}

.woodmart-active-filters {
    margin-top: -15px;
    margin-bottom: 15px;
    min-height: 1px
}

.woodmart-active-filters .widget_layered_nav_filters {
    display: inline
}

.woodmart-active-filters .widget_layered_nav_filters ul {
    display: inline
}

.woodmart-active-filters .widget_layered_nav_filters ul li {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 15px
}

.woodmart-active-filters .widget_layered_nav_filters ul li a:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.woodmart-active-filters .widget_layered_nav_filters ul li a:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.woodmart-active-filters .widget_layered_nav_filters ul li a:hover:after {
    -webkit-transform: rotate(0);
    transform: rotate(0)
}

.woodmart-active-filters .widget_layered_nav_filters ul li a:hover:before {
    -webkit-transform: rotate(0);
    transform: rotate(0)
}

.woodmart-clear-filters-wrapp {
    display: inline;
    margin-bottom: 5px;
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid
}

.woodmart-clear-filters-wrapp .woodmart-clear-filters {
    position: relative;
    display: inline-block;
    color: #333;
    font-weight: 600;
    padding-left: 16px;
    cursor: pointer
}

.woodmart-clear-filters-wrapp .woodmart-clear-filters:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.woodmart-clear-filters-wrapp .woodmart-clear-filters:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.woodmart-clear-filters-wrapp .woodmart-clear-filters:hover:after {
    -webkit-transform: rotate(0);
    transform: rotate(0)
}

.woodmart-clear-filters-wrapp .woodmart-clear-filters:hover:before {
    -webkit-transform: rotate(0);
    transform: rotate(0)
}

.woodmart-clear-filters-wrapp .woodmart-clear-filters:after,.woodmart-clear-filters-wrapp .woodmart-clear-filters:before {
    content: " ";
    position: absolute;
    top: 50%;
    display: inline-block;
    margin-top: -1px;
    width: 10px;
    height: 2px;
    background-color: currentColor;
    -webkit-transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    left: 0
}

.shop-loop-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 100%;
    width: 100%
}

.woodmart-shop-tools div:last-child,.woodmart-shop-tools form:last-child {
    margin-right: 0
}

.woocommerce-result-count {
    display: none;
    font-size: 14px;
    line-height: 20px
}

.woocommerce-ordering {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-right: 30px;
    vertical-align: middle
}

.woocommerce-ordering select {
    padding-bottom: 5px;
    padding-left: 2px;
    padding-right: 20px;
    max-width: 200px;
    height: auto;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    background-position: right 0 top 50%;
    color: #2d2a2a;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer
}

.woodmart-products-per-page {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 15px;
    margin-right: 23px;
    color: #8e8e8e;
    vertical-align: middle;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px
}

.woodmart-products-per-page .per-page-title {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 0;
    color: #2d2a2a;
    vertical-align: middle;
    font-weight: 600
}

.woodmart-products-per-page .per-page-title:after {
    content: " :"
}

.woodmart-products-per-page .per-page-variation {
    display: inline-block;
    padding: 0 7px;
    color: #8e8e8e;
    vertical-align: middle
}

.woodmart-products-per-page .per-page-variation:hover,.woodmart-products-per-page .per-page-variation:focus {
    color: #2d2a2a
}

.woodmart-products-per-page .per-page-variation.current-variation {
    color: #2d2a2a;
    font-weight: 600
}

.woodmart-products-per-page .per-page-border {
    display: inline-block;
    vertical-align: middle
}

.woodmart-products-per-page .per-page-border:after {
    content: "/"
}

.woodmart-products-per-page .per-page-border:last-child {
    display: none
}

.woodmart-products-shop-view {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 15px;
    margin-right: 30px;
    vertical-align: middle
}

.woodmart-products-shop-view .shop-view {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-right: 12px;
    vertical-align: middle;
    opacity: .3
}

.woodmart-products-shop-view .shop-view svg {
    width: 19px !important;
    height: 19px !important
}

.woodmart-products-shop-view .shop-view:hover {
    opacity: .7
}

.woodmart-products-shop-view .shop-view:focus {
    opacity: .9
}

.woodmart-products-shop-view .shop-view.current-variation {
    opacity: .9;
    cursor: default
}

.woodmart-products-shop-view .shop-view:last-child {
    margin-right: 0
}

.woodmart-products-shop-view .per-row-5 svg {
    width: 24px !important
}

.woodmart-products-shop-view .per-row-6 svg {
    width: 23px !important
}

.woodmart-products-shop-view .per-row-list svg {
    width: 18px !important;
    height: 18px !important
}

.woodmart-show-sidebar-btn {
    display: none;
    float: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 15px;
    margin-right: 30px;
    color: #2d2a2a;
    vertical-align: middle;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 13px;
    line-height: 20px;
    cursor: pointer
}

.woodmart-show-sidebar-btn span:not(.woodmart-side-bar-icon) {
    vertical-align: middle
}

.woodmart-show-sidebar-btn .woodmart-side-bar-icon {
    margin-right: 7px;
    vertical-align: middle;
    position: relative;
    margin-top: 6px;
    margin-bottom: 6px
}

.woodmart-show-sidebar-btn .woodmart-side-bar-icon,.woodmart-show-sidebar-btn .woodmart-side-bar-icon::before,.woodmart-show-sidebar-btn .woodmart-side-bar-icon::after {
    display: inline-block;
    width: 17px;
    height: 2px;
    background-color: rgba(0,0,0,.3);
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-show-sidebar-btn .woodmart-side-bar-icon::before,.woodmart-show-sidebar-btn .woodmart-side-bar-icon::after {
    content: "";
    position: absolute;
    left: 0
}

.woodmart-show-sidebar-btn .woodmart-side-bar-icon::before {
    top: -6px
}

.woodmart-show-sidebar-btn .woodmart-side-bar-icon::after {
    top: 6px
}

.woodmart-show-sidebar-btn:hover .woodmart-side-bar-icon,.woodmart-show-sidebar-btn:hover .woodmart-side-bar-icon:before,.woodmart-show-sidebar-btn:hover .woodmart-side-bar-icon:after {
    background-color: #000
}

.woodmart-show-sidebar-btn:hover .woodmart-side-bar-icon:before {
    width: 12px
}

.woodmart-show-sidebar-btn:hover .woodmart-side-bar-icon:after {
    width: 10px
}

.woodmart-show-sidebar-btn.btn-clicked .woodmart-side-bar-icon {
    background-color: transparent
}

.woodmart-show-sidebar-btn.btn-clicked .woodmart-side-bar-icon:before,.woodmart-show-sidebar-btn.btn-clicked .woodmart-side-bar-icon:after {
    width: 15px;
    background-color: #000
}

.woodmart-show-sidebar-btn.btn-clicked .woodmart-side-bar-icon:before {
    -webkit-transform: translate3d(0px, 6px, 0) rotate(45deg);
    transform: translate3d(0px, 6px, 0) rotate(45deg)
}

.woodmart-show-sidebar-btn.btn-clicked .woodmart-side-bar-icon:after {
    -webkit-transform: translate3d(0px, -6px, 0) rotate(-45deg);
    transform: translate3d(0px, -6px, 0) rotate(-45deg)
}

.filters-area {
    position: relative;
    top: -10px;
    display: none;
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 1px solid;
    border-bottom: 1px solid
}

.filters-area.custom-content {
    padding-bottom: 30px
}

.filters-area + .woodmart-active-filters {
    margin-top: -20px
}

.filters-area .filters-inner-area {
    opacity: 0;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.filters-area.filters-opened .filters-inner-area {
    opacity: 1;
    -webkit-transition: opacity .25s ease-in-out;
    transition: opacity .25s ease-in-out
}

.body-filters-opened .filters-area,.filters-area.always-open {
    display: block
}

.body-filters-opened .filters-area .filters-inner-area,.filters-area.always-open .filters-inner-area {
    opacity: 1
}

.filters-inner-area > .col-12 > p {
    display: none
}

.woodmart-filter-buttons {
    display: inline-block;
    margin-bottom: 15px;
    margin-right: 30px;
    vertical-align: middle
}

.woodmart-filter-buttons .open-filters {
    position: relative;
    padding-right: 18px;
    color: #2d2a2a;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .6px;
    font-weight: 800;
    font-size: 13px;
    line-height: 20px
}

.woodmart-filter-buttons .open-filters:after,.woodmart-filter-buttons .open-filters:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    display: inline-block;
    margin-top: -1px;
    width: 10px;
    height: 2px;
    background-color: #1b1919;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-filter-buttons .open-filters:before {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.woodmart-filter-buttons .open-filters:hover:after {
    -webkit-transform: translateX(-6px) rotate(50deg);
    transform: translateX(-6px) rotate(50deg)
}

.woodmart-filter-buttons .open-filters:hover:before {
    -webkit-transform: rotate(-50deg);
    transform: rotate(-50deg)
}

.woodmart-filter-buttons .open-filters.btn-opened:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.woodmart-filter-buttons .open-filters.btn-opened:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.woocommerce-breadcrumb {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.woocommerce-breadcrumb a {
    margin-right: 6px
}

.woocommerce-breadcrumb a:after {
    content: "/";
    margin-left: 5px
}

.woocommerce-breadcrumb,.yoast-breadcrumb {
    vertical-align: middle;
    font-size: 14px;
    line-height: 20px
}

.woocommerce-breadcrumb a,.yoast-breadcrumb a {
    color: #8e8e8e;
    font-weight: normal;
    font-style: normal
}

.woocommerce-breadcrumb a:hover,.woocommerce-breadcrumb a:focus,.yoast-breadcrumb a:hover,.yoast-breadcrumb a:focus {
    color: #585858
}

.woocommerce-breadcrumb .breadcrumb-last,.woocommerce-breadcrumb .breadcrumb_last,.yoast-breadcrumb .breadcrumb-last,.yoast-breadcrumb .breadcrumb_last {
    margin-right: 8px;
    color: #333;
    font-weight: 600
}

.woocommerce-breadcrumb .breadcrumb-last:last-child,.woocommerce-breadcrumb .breadcrumb_last:last-child,.yoast-breadcrumb .breadcrumb-last:last-child,.yoast-breadcrumb .breadcrumb_last:last-child {
    margin-right: 0
}

.woodmart-woo-breadcrumbs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.woodmart-woo-breadcrumbs .woocommerce-breadcrumb,.woodmart-woo-breadcrumbs .yoast-breadcrumb {
    margin-bottom: 15px
}

.woocommerce-pagination .page-numbers {
    display: inline-block;
    font-size: 0
}

.woocommerce-pagination .page-numbers li {
    display: inline-block;
    margin-right: 2px;
    vertical-align: middle;
    text-align: center
}

.woocommerce-pagination .page-numbers li:last-child {
    margin-right: 0
}

.woocommerce-pagination .page-numbers a {
    text-decoration: none
}

.woocommerce-pagination .page-numbers a:hover,.woocommerce-pagination .page-numbers a:focus {
    background-color: #eee
}

.woocommerce-pagination .page-numbers .page-numbers {
    display: inline-block;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    min-width: 32px;
    height: 34px;
    color: #2d2a2a;
    font-weight: 600;
    font-size: 14px;
    line-height: 34px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.woocommerce-pagination .page-numbers .current {
    color: #fff;
    font-weight: 600
}

.woocommerce-pagination .page-numbers .next,.woocommerce-pagination .page-numbers .prev {
    font-size: 0
}

.woocommerce-pagination .page-numbers .next:before,.woocommerce-pagination .page-numbers .prev:before {
    font-size: 12px;
    content: "\f110";
    font-family: "woodmart-font"
}

.woocommerce-pagination .page-numbers .prev:before {
    content: "\f111";
    font-family: "woodmart-font"
}

.search-no-results.woocommerce .woocommerce-info {
    margin-bottom: 30px
}

.star-rating {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 18px;
    vertical-align: middle;
    white-space: nowrap;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 14px;
    font-family: "FontAwesome";
    line-height: 18px
}

.star-rating:before {
    content: "\f006\f006\f006\f006\f006";
    position: absolute;
    top: 0;
    left: 0;
    color: #c9c9c9
}

.star-rating span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    font-size: 0
}

.star-rating span strong,.star-rating span span {
    display: none
}

.star-rating span:before {
    content: "\f005\f005\f005\f005\f005";
    position: absolute;
    top: 0;
    left: 0;
    color: #eabe12;
    font-size: 14px
}

.color-scheme-light .star-rating:before {
    color: rgba(255,255,255,.6)
}

.amount {
    font-weight: 600;
    font-size: 14px
}

.color-scheme-light .amount {
    color: #fff
}

del .amount {
    color: #bdbdbd;
    font-weight: normal
}

.color-scheme-light del .amount {
    color: rgba(255,255,255,.6)
}

.price {
    font-size: 14px
}

.price .amount {
    font-size: inherit
}

.price del {
    color: #bdbdbd;
    font-size: 90%
}

.price ins {
    padding: 0;
    background-color: transparent;
    text-decoration: none;
    opacity: 1
}

.color-scheme-light .price {
    color: #fff
}

.color-scheme-light .price del {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .price ins {
    color: #fff
}

.woocommerce-price-suffix {
    color: #777
}

.product-title {
    display: block
}

.product-title a {
    display: block;
    color: inherit
}

.woocommerce-store-notice {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 341;
    margin: 0;
    padding: 12px 60px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.woocommerce-store-notice .woocommerce-store-notice__dismiss-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 60px;
    background-color: rgba(0,0,0,.1);
    color: #fff;
    font-size: 0;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease
}

.woocommerce-store-notice .woocommerce-store-notice__dismiss-link:after {
    font-weight: 600;
    font-size: 14px;
    content: "\f10f";
    font-family: "woodmart-font"
}

.woocommerce-store-notice .woocommerce-store-notice__dismiss-link:hover {
    background-color: rgba(0,0,0,.2)
}

.single-product .site-content {
    padding-right: 0;
    padding-left: 0
}

.breadcrumbs-location-below_header .single-breadcrumbs-wrapper {
    margin-top: -15px;
    margin-bottom: 15px
}

.breadcrumbs-location-summary .single-breadcrumbs-wrapper {
    margin-bottom: 10px
}

.single-breadcrumbs-wrapper .container:after,.single-breadcrumbs-wrapper .container:before {
    content: none
}

.single-breadcrumbs-wrapper .single-breadcrumbs,.single-breadcrumbs-wrapper .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.single-breadcrumbs-wrapper .woocommerce-breadcrumb,.single-breadcrumbs-wrapper .yoast-breadcrumb {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-bottom: 10px;
    font-size: 13px
}

.single-breadcrumbs-wrapper .woodmart-products-nav {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.single-product-sidebar {
    margin-bottom: 0
}

.single-product-sidebar.sidebar-right {
    border-left: 1px solid
}

.single-product-sidebar.sidebar-left {
    border-right: 1px solid
}

.single-product-page > div:not(:last-child) {
    margin-bottom: 40px
}

.single-product-page .woocommerce-product-rating {
    margin-bottom: 20px
}

.single-product-page .star-rating {
    margin-right: 5px;
    width: 75px;
    letter-spacing: 2px
}

.product-image-summary .product-images .product-labels {
    left: auto;
    z-index: 10;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    max-width: 30%
}

.product-image-summary .product-images .labels-rectangular {
    top: 15px;
    right: 0;
    left: auto
}

.product-image-summary .product-images .labels-rounded {
    top: 15px;
    right: 15px
}

.product-image-summary .product-images .labels-rounded .product-label {
    min-width: 55px;
    min-height: 55px
}

.browser-Internet .product-image-summary .product-images .labels-rounded .product-label {
    height: 55px
}

.product-image-summary .product-images .labels-rounded .label-with-img {
    min-height: auto
}

.product-image-summary .entry-title {
    font-weight: 600;
    font-size: 34px;
    line-height: 1.2
}

.product-image-summary .summary-inner > .price,.product-image-summary .woodmart-scroll-content > .price {
    font-size: 22px;
    line-height: 1.2
}

.product-image-summary .summary-inner > .price .login-to-prices-msg,.product-image-summary .woodmart-scroll-content > .price .login-to-prices-msg {
    font-size: 80%
}

.product-image-summary .summary-inner > .price:empty,.product-image-summary .woodmart-scroll-content > .price:empty {
    display: none
}

.product-image-summary .woocommerce-product-details__short-description {
    margin-bottom: 25px
}

.product-image-summary .shop_attributes {
    margin-bottom: 25px
}

.product-image-summary .woodmart-before-add-to-cart,.product-image-summary .woodmart-after-add-to-cart {
    margin-bottom: 25px
}

.product-image-summary .woodmart-product-brands {
    float: right;
    margin-bottom: 10px;
    margin-left: 10px
}

.product-image-summary .woodmart-product-brands a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 10px;
    min-height: 70px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 2px rgba(0,0,0,.12);
    box-shadow: 0 0 2px rgba(0,0,0,.12);
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.product-image-summary .woodmart-product-brands a:hover {
    -webkit-box-shadow: 0 0 6px rgba(0,0,0,.14);
    box-shadow: 0 0 6px rgba(0,0,0,.14)
}

.product-image-summary .woodmart-product-brands img {
    max-width: 90px
}

.product-image-summary .woodmart-product-countdown {
    margin-bottom: 10px
}

.product-image-summary .woodmart-stock-progress-bar {
    margin-bottom: 20px
}

.product-image-summary .quantity {
    margin-bottom: 10px;
    margin-right: 10px
}

.product-image-summary .single_add_to_cart_button {
    margin-bottom: 10px
}

.product-image-summary .cart {
    margin-bottom: 15px
}

.product-image-summary .variations {
    margin-bottom: 25px
}

.woocommerce-product-details__short-description {
    line-height: 1.8
}

.woocommerce-product-details__short-description p {
    line-height: 1.8
}

.woocommerce-product-details__short-description table {
    margin-bottom: 0
}

.product-images-inner {
    position: relative;
    z-index: 1
}

.woocommerce-product-gallery:not(.thumbs-position-centered) {
    opacity: 1 !important
}

.woocommerce-product-gallery .owl-carousel {
    overflow: hidden
}

.woocommerce-product-gallery .owl-carousel .product-image-wrap {
    padding-right: 2px;
    padding-left: 2px
}

.woocommerce-product-gallery .owl-loaded:after,.woocommerce-product-gallery .owl-loaded:before {
    content: none
}

.woocommerce-product-gallery .woocommerce-product-gallery__image img,.woocommerce-product-gallery .woocommerce-product-gallery__image--placeholder img,.woocommerce-product-gallery .product-image-thumbnail img {
    width: 100%
}

.woocommerce-product-gallery .product-image-thumbnail {
    cursor: pointer;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.woocommerce-product-gallery .product-image-thumbnail.active-thumb {
    -webkit-transition: none;
    transition: none
}

.woocommerce-product-gallery .product-image-thumbnail:hover,.woocommerce-product-gallery .product-image-thumbnail.active-thumb {
    opacity: .5
}

.woocommerce-product-gallery .thumbnails {
    opacity: 0
}

.woocommerce-product-gallery .thumbnails.thumbnails-ready {
    opacity: 1;
    -webkit-transition: opacity .6s ease 1s;
    transition: opacity .6s ease 1s
}

.woocommerce-product-gallery .slick-slider {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.woocommerce-product-gallery .slick-slider .slick-list {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    max-width: 100%;
    width: 100%
}

.woocommerce-product-gallery .slick-slider .slick-prev,.woocommerce-product-gallery .slick-slider .slick-next {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
}

.woocommerce-product-gallery .thumbnails.owl-carousel .owl-item {
    padding-right: 2px;
    padding-left: 2px
}

.image-action-none .product-image-wrap a {
    cursor: default
}

.image-action-none .owl-carousel .product-image-wrap a {
    cursor: move
}

.image-action-zoom .owl-carousel .product-image-wrap {
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab
}

.image-action-zoom .owl-grab .zoomImg {
    opacity: 0 !important;
    -webkit-transition: opacity .25s ease;
    transition: opacity .25s ease
}

.thumbs-position-centered .woocommerce-product-gallery__image {
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.thumbs-position-centered .owl-item:not(.center) .woocommerce-product-gallery__image {
    opacity: .4;
    pointer-events: none
}

.thumbs-position-bottom .woocommerce-product-gallery__wrapper {
    margin-bottom: 4px
}

.thumbs-position-bottom_column .product-image-wrap,.thumbs-position-bottom_grid .product-image-wrap,.thumbs-position-bottom_combined .product-image-wrap {
    margin-bottom: 4px
}

.thumbs-position-bottom_column .product-image-wrap:first-child,.thumbs-position-bottom_grid .product-image-wrap:first-child,.thumbs-position-bottom_combined .product-image-wrap:first-child {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%
}

.thumbs-position-bottom_grid .woocommerce-product-gallery__wrapper,.thumbs-position-bottom_combined .woocommerce-product-gallery__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -2px;
    margin-left: -2px
}

.thumbs-position-bottom_grid .product-image-wrap,.thumbs-position-bottom_combined .product-image-wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%;
    padding-right: 2px;
    padding-left: 2px;
    max-width: 50%
}

.thumbs-position-bottom_combined .product-image-wrap:nth-child(3n+4) {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%
}

.image-full-width .product-images.vc_row-no-padding {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
    padding-left: 0;
    max-width: none
}

.image-full-width .product-image-summary-inner {
    display: block
}

.image-full-width .product-image-summary-inner:after,.image-full-width .product-image-summary-inner:before {
    content: ""
}

.image-full-width .product-image-summary-inner > div:not(:last-child) {
    margin-bottom: 35px
}

.image-full-width .product-image-summary-inner > .vc_row-full-width {
    margin-bottom: 0 !important
}

.image-full-width.product-design-alt .summary-inner {
    margin: 0 auto
}

.product-additional-galleries {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 30px
}

.product-additional-galleries > div {
    margin-bottom: 10px
}

.product-additional-galleries > div:last-child {
    margin-bottom: 0
}

.product-360-button,.product-video-button,.woodmart-show-product-gallery-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.product-360-button > a,.product-video-button > a,.woodmart-show-product-gallery-wrap > a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    overflow: hidden;
    min-width: 50px;
    height: 50px;
    border-radius: 30px;
    background: rgba(255,255,255,.9);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.08);
    box-shadow: 0 0 5px rgba(0,0,0,.08);
    color: rgba(0,0,0,.7);
    font-size: 13px
}

.product-360-button > a:before,.product-video-button > a:before,.woodmart-show-product-gallery-wrap > a:before {
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    content: "\f125";
    font-family: "woodmart-font"
}

.product-360-button > a > span,.product-video-button > a > span,.woodmart-show-product-gallery-wrap > a > span {
    overflow: hidden;
    padding: 0;
    max-width: 0;
    white-space: nowrap;
    font-weight: 600;
    -webkit-transition: padding .4s cubic-bezier(0.175, 0.885, 0.32, 1.15),max-width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    transition: padding .4s cubic-bezier(0.175, 0.885, 0.32, 1.15),max-width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15)
}

.product-360-button > a:hover,.product-360-button > a:focus,.product-video-button > a:hover,.product-video-button > a:focus,.woodmart-show-product-gallery-wrap > a:hover,.woodmart-show-product-gallery-wrap > a:focus {
    color: #333
}

.product-360-button > a:hover > span,.product-video-button > a:hover > span,.woodmart-show-product-gallery-wrap > a:hover > span {
    padding-right: 25px;
    max-width: 280px
}

.product-360-button > a:before {
    font-size: 26px;
    content: "\f102";
    font-family: "woodmart-font"
}

.woodmart-show-product-gallery-wrap > a:before {
    content: "\f121";
    font-family: "woodmart-font"
}

.product-video-button > a:before {
    content: "\f100";
    font-family: "woodmart-font"
}

.variations_form .variations {
    -webkit-transition: margin-bottom .3s ease;
    transition: margin-bottom .3s ease
}

.variations_form .variations label {
    margin-bottom: 0;
    margin-right: 20px;
    color: #2d2a2a;
    white-space: nowrap;
    font-weight: 600
}

.variations_form .variations label:after {
    content: ":";
    margin-left: 2px
}

.variations_form .variations tr:last-child td {
    padding-bottom: 0
}

.variations_form .variations td {
    padding: 0;
    padding-bottom: 20px;
    border: none;
    vertical-align: middle
}

.variations_form .variations .value {
    position: relative;
    width: 100%
}

.variations_form .variations .value select {
    display: inline-block;
    max-width: 260px
}

.variations_form .variations .with-swatches select {
    display: none
}

.variations_form .reset_variations {
    display: inline-block;
    display: inline-block !important;
    visibility: hidden !important;
    margin-left: 10px;
    color: #3f3f3f;
    vertical-align: middle;
    font-size: 12px;
    opacity: 0 !important;
    pointer-events: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.variations_form .reset_variations:before {
    display: inline-block;
    margin-right: 5px;
    font-family: "FontAwesome";
    content: "\f00d"
}

.variations_form .reset_variations:hover {
    color: #818181
}

.variations_form.variation-swatch-selected .reset_variations {
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: visible
}

.variations_form .woocommerce-variation {
    -webkit-animation: wd-fadeInBottomShort .2s ease;
    animation: wd-fadeInBottomShort .2s ease
}

.variations_form .woocommerce-variation:after {
    content: "";
    display: block;
    clear: both
}

.variations_form .woocommerce-variation-price,.variations_form .woocommerce-variation-availability {
    display: inline;
    vertical-align: middle
}

.variations_form .woocommerce-variation-price .price {
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 15px;
    vertical-align: middle;
    font-size: 16px;
    line-height: 1.2
}

.variations_form .woocommerce-variation-availability .stock {
    display: inline-block;
    vertical-align: middle
}

.variations_form .woocommerce-variation-description p {
    margin-bottom: 10px
}

.color-scheme-light .variations_form label {
    color: #fff
}

.color-scheme-light .variations_form .reset_variations {
    color: rgba(255,255,255,.9)
}

.color-scheme-light .variations_form .reset_variations:hover {
    color: #fff
}

.product_meta {
    display: block;
    line-height: 1.2
}

.product_meta > span {
    color: #333;
    font-weight: 600;
    font-size: 14px
}

.product_meta > span a,.product_meta > span span {
    display: inline-block;
    margin: 0 1px;
    color: #777;
    font-weight: normal
}

.product_meta > span a:hover {
    color: #747474
}

.product-share {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.2
}

.product-share .share-title {
    margin-right: 5px;
    color: #1b1919;
    vertical-align: middle;
    font-weight: 600
}

.product-share .share-title:after {
    content: ":"
}

.product-share .woodmart-social-icons {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex
}

.single_add_to_cart_button {
    color: #fff
}

.single_add_to_cart_button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.single_add_to_cart_button + .added_to_cart {
    display: none
}

.swatches-select {
    display: inline-block;
    vertical-align: middle
}

.swatches-select > div {
    position: relative;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    min-width: 25px;
    border-bottom: 2px solid transparent;
    color: #1b1919;
    vertical-align: middle;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.3;
    cursor: pointer
}

.swatches-select > div:hover {
    border-color: #000
}

.swatches-select > div.swatch-size-large {
    font-size: 18px
}

.swatches-select > div.swatch-size-xlarge {
    font-size: 24px
}

.swatches-select > div:not(:last-child) {
    margin-right: 15px
}

.swatches-select .image-swatch,.swatches-select .colored-swatch {
    width: 25px;
    height: 25px;
    border-bottom: none !important;
    border-radius: 50%;
    background-size: cover;
    font-size: 0
}

.swatches-select .image-swatch:after,.swatches-select .colored-swatch:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid transparent
}

.swatches-select .image-swatch[style$="#ffffff"],.swatches-select .colored-swatch[style$="#ffffff"] {
    border: 1px solid rgba(0,0,0,.15)
}

.swatches-select .image-swatch:hover:after,.swatches-select .image-swatch.active-swatch:after,.swatches-select .colored-swatch:hover:after,.swatches-select .colored-swatch.active-swatch:after {
    border-color: #000
}

.swatches-select .image-swatch.swatch-size-large,.swatches-select .colored-swatch.swatch-size-large {
    width: 45px;
    height: 45px;
    font-size: 0
}

.swatches-select .image-swatch.swatch-size-xlarge,.swatches-select .colored-swatch.swatch-size-xlarge {
    width: 70px;
    height: 70px;
    font-size: 0
}

.swatches-select .swatch-enabled {
    cursor: pointer
}

.swatches-select .swatch-disabled {
    opacity: .4;
    cursor: default
}

.swatches-select .active-swatch {
    border-color: #000
}

.color-scheme-light .swatches-select > div {
    color: #fff
}

.color-scheme-light .swatches-select > div:hover {
    border-color: #fff
}

.color-scheme-light .swatches-select .active-swatch {
    border-color: #fff
}

.color-scheme-light .swatches-select .image-swatch:hover:after,.color-scheme-light .swatches-select .image-swatch.active-swatch:after,.color-scheme-light .swatches-select .colored-swatch:hover:after,.color-scheme-light .swatches-select .colored-swatch.active-swatch:after {
    border-color: #fff
}

.browser-Safari .product-sticky-on .summary-inner.is_stuck,.browser-Safari .product-sticky-on .product-images-inner.is_stuck {
    -webkit-transform: translateZ(0);
    -webkit-perspective: 800px;
    -webkit-backface-visibility: hidden
}

.product-summary-shadow .summary-inner {
    padding: 30px 35px 15px 35px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.1);
    box-shadow: 0 0 5px rgba(0,0,0,.1)
}

.product-summary-shadow .single-product-sidebar {
    border: none
}

.product-full-width.image-full-width .summary-inner {
    margin: 0 auto
}

.product-full-width.product-design-alt:not(.product-sticky-on) .summary-inner,.product-full-width.product-summary-shadow:not(.product-sticky-on) .summary-inner {
    margin: 0 auto
}

.product-has-bg .product-tabs-wrapper {
    border-top: none
}

.product-design-default .entry-summary.col-lg-4 .woocommerce-breadcrumb .breadcrumb-link-last,.product-design-default .entry-summary.col-lg-4 .yoast-breadcrumb .breadcrumb-link-last {
    margin-right: 0;
    color: #333;
    font-weight: 600
}

.product-design-default .entry-summary.col-lg-4 .woocommerce-breadcrumb .breadcrumb-link-last:after,.product-design-default .entry-summary.col-lg-4 .yoast-breadcrumb .breadcrumb-link-last:after {
    content: none
}

.product-design-default .entry-summary.col-lg-4 .woocommerce-breadcrumb .breadcrumb-last,.product-design-default .entry-summary.col-lg-4 .yoast-breadcrumb .breadcrumb-last {
    display: none
}

.woodmart-before-product-tabs {
    margin-top: -41px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #f7f7f7;
    text-align: center
}

.woodmart-before-product-tabs .product_meta {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle
}

.woodmart-before-product-tabs .product_meta > span,.woodmart-before-product-tabs .product_meta > div:not(.product-share) {
    display: inline-block;
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 10px
}

.woodmart-before-product-tabs .product-share {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0;
    margin-left: 10px;
    vertical-align: middle
}

.product-tabs-wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background-color: #fff
}

.full-height-sidebar-wrap .product-tabs-wrapper {
    background-color: transparent
}

.poduct-tabs-inner > div:not(:last-child) {
    margin-bottom: 40px
}

.tabs-layout-tabs .woodmart-accordion-title {
    display: none
}

.tabs-layout-tabs .tabs {
    margin-top: -40px;
    margin-bottom: 30px;
    text-align: center
}

.tabs-layout-tabs .tabs li {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-right: 30px;
    color: #2d2a2a;
    font-weight: 600
}

.tabs-layout-tabs .tabs li a {
    position: relative;
    display: inline-block;
    padding-top: 30px;
    padding-bottom: 10px;
    color: inherit;
    text-transform: uppercase;
    font-weight: inherit;
    font-size: 16px;
    opacity: .7
}

.tabs-layout-tabs .tabs li a:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    margin-bottom: -2px;
    width: 0;
    height: 3px;
    -webkit-transition: width .3s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    transition: width .3s cubic-bezier(0.175, 0.885, 0.32, 1.15)
}

.tabs-layout-tabs .tabs li a:hover,.tabs-layout-tabs .tabs li a:focus {
    color: inherit;
    opacity: 1
}

.tabs-layout-tabs .tabs li.active a {
    opacity: 1
}

.tabs-layout-tabs .tabs li.active a:after {
    width: 100%
}

.tabs-layout-tabs .tabs li:last-child {
    margin-right: 0
}

.tabs-layout-tabs #tab-additional_information .wc-tab-inner > div > h2:first-child {
    margin-right: auto;
    margin-left: auto;
    max-width: 650px
}

.tabs-layout-tabs #tab-additional_information .shop_attributes {
    margin: 0 auto;
    max-width: 650px
}

.woodmart-accordion-title {
    position: relative;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px
}

.woodmart-accordion-title:after {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    color: #bbb;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    -webkit-transition: -webkit-transform .4s ease;
    transition: -webkit-transform .4s ease;
    transition: transform .4s ease;
    transition: transform .4s ease, -webkit-transform .4s ease;
    content: "\f124";
    font-family: "woodmart-font";
    backface-visibility: hidden;
    perspective: 800px;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 800px
}

.woodmart-accordion-title.active:after {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.tabs-layout-accordion {
    border-top: 2px solid rgba(119,119,119,.17)
}

.tabs-layout-accordion .tabs {
    display: none
}

.tabs-layout-accordion .woodmart-tab-wrapper {
    border-bottom: 1px solid rgba(119,119,119,.17)
}

.tabs-layout-accordion .woodmart-tab-wrapper .wc-tab {
    padding-bottom: 20px
}

.tabs-layout-accordion .woodmart-tab-wrapper .wc-tab > h2:first-child {
    display: none
}

.tabs-layout-accordion .woodmart-scroll {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden
}

.tabs-layout-accordion .woodmart-scroll .woodmart-scroll-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-right: 20px;
    max-height: 250px
}

.tabs-layout-accordion .woodmart-scroll .woodmart-scroll-pane {
    right: 2px
}

.tabs-layout-accordion .has-scrollbar .woodmart-scroll-content {
    overflow: scroll;
    overflow-x: hidden
}

.tabs-layout-accordion .shop_attributes {
    margin-bottom: 10px
}

.tabs-layout-accordion #tab-reviews {
    margin-top: 10px
}

.tabs-layout-accordion #tab-reviews .wc-tab-inner .woodmart-scroll-content {
    max-height: 400px
}

.tabs-location-standard.reviews-location-separate.tabs-type-tabs .woocommerce-tabs {
    padding-bottom: 30px;
    border-bottom: 1px solid
}

.tabs-location-standard.tabs-type-accordion > div:not(:last-child) {
    margin-bottom: 25px
}

.tabs-location-standard.tabs-type-accordion .product-tabs-wrapper {
    padding-top: 25px;
    padding-bottom: 25px;
    border-top: none
}

.tabs-location-standard.tabs-type-accordion:not(.reviews-location-separate) .product-tabs-wrapper,.tabs-location-standard.tabs-type-accordion.meta-location-after_tabs .product-tabs-wrapper {
    border-bottom: none
}

.tabs-location-standard.tabs-type-accordion .woodmart-before-product-tabs {
    margin-top: -26px
}

.tabs-location-summary .product-image-summary .woocommerce-Reviews {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0
}

.tabs-location-summary .product-image-summary .woocommerce-Reviews #comments,.tabs-location-summary .product-image-summary .woocommerce-Reviews #review_form_wrapper {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding-right: 0;
    padding-left: 0;
    max-width: 100%;
    width: 100%
}

.tabs-location-summary .product-image-summary .commentlist {
    margin-top: 0;
    margin-bottom: 20px
}

.tabs-location-summary .product-image-summary .commentlist li:not(:last-child) {
    margin-bottom: 5px;
    padding-bottom: 5px
}

.tabs-location-summary .product-image-summary .woocommerce-Reviews-title {
    display: none
}

.tabs-location-summary .tabs-layout-accordion {
    margin-top: 10px;
    margin-bottom: 25px
}

.tabs-location-summary .tabs-layout-accordion .woodmart-accordion-title {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px
}

.tabs-location-summary:not(.reviews-location-separate) .woodmart-before-product-tabs {
    margin-top: 0
}

.tabs-location-summary.meta-location-add_to_cart .product_meta {
    padding-top: 0;
    border-top: none
}

.woocommerce-Tabs-panel {
    display: none;
    line-height: 1.6;
    -webkit-animation: wd-fadeIn .4s ease;
    animation: wd-fadeIn .4s ease
}

.woocommerce-Tabs-panel .wc-tab-inner > div > h2:first-child {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px
}

#tab-additional_information .shop_attributes th,#tab-additional_information .shop_attributes td {
    padding-right: 0;
    padding-left: 0
}

#tab-additional_information .shop_attributes th p,#tab-additional_information .shop_attributes td p {
    margin-bottom: 0
}

#tab-additional_information .shop_attributes th {
    text-align: left;
    font-size: 14px
}

#tab-additional_information .shop_attributes td {
    text-align: right
}

#tab-additional_information .shop_attributes tr:last-child th,#tab-additional_information .shop_attributes tr:last-child td {
    border: none
}

#tab-seller ul li {
    margin-bottom: 15px
}

#tab-seller ul li > span {
    color: #333;
    font-weight: 600
}

#tab-seller ul li > span.details {
    color: #777;
    font-weight: normal
}

#tab-description,#tab-brand_tab,#tab-woodmart_additional_tab {
    line-height: 1.8
}

.woocommerce-Reviews {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-right: -30px;
    margin-left: -30px
}

.woocommerce-Reviews #comments,.woocommerce-Reviews #review_form_wrapper {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 50%;
    flex: 0 1 50%;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 50%
}

.woocommerce-Reviews .comment-reply-title,.woocommerce-Reviews .woocommerce-Reviews-title {
    text-transform: uppercase;
    font-size: 14px
}

.woocommerce-Reviews .clear {
    display: none
}

.woocommerce-review-link {
    color: #777;
    text-decoration: none;
    font-size: 13px
}

.woocommerce-review-link:hover {
    color: #2d2a2a
}

.comment-respond .stars {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap
}

.comment-respond .stars a {
    position: absolute;
    top: 0;
    left: 0;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 0
}

.comment-respond .stars a:before,.comment-respond .stars a:after {
    position: absolute;
    left: 0;
    height: 22px;
    color: #b1b1b1;
    font-size: 14px;
    font-family: "FontAwesome";
    line-height: 22px
}

.comment-respond .stars a:after {
    content: ""
}

.comment-respond .stars a:hover:after,.comment-respond .stars a.active:after {
    color: #eabe12
}

.comment-respond .star-1 {
    z-index: 5
}

.comment-respond .star-1:hover:after,.comment-respond .star-1.active:after {
    content: "\f005"
}

.comment-respond .star-1:after {
    width: 13px
}

.comment-respond .star-2 {
    z-index: 4
}

.comment-respond .star-2:hover:after,.comment-respond .star-2.active:after {
    content: "\f005\f005"
}

.comment-respond .star-2:after {
    width: 29px
}

.comment-respond .star-3 {
    z-index: 3
}

.comment-respond .star-3:hover:after,.comment-respond .star-3.active:after {
    content: "\f005\f005\f005"
}

.comment-respond .star-3:after {
    width: 44px
}

.comment-respond .star-4 {
    z-index: 2
}

.comment-respond .star-4:hover:after,.comment-respond .star-4.active:after {
    content: "\f005\f005\f005\f005"
}

.comment-respond .star-4:after {
    width: 59px
}

.comment-respond .star-5 {
    z-index: 1
}

.comment-respond .star-5:hover:after,.comment-respond .star-5.active:after {
    content: "\f005\f005\f005\f005\f005"
}

.comment-respond .star-5:before {
    content: "\f006\f006\f006\f006\f006"
}

.commentlist > li {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid
}

.commentlist > li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none
}

.commentlist .review_comment_container,.commentlist .comment_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 15px 0 15px 0
}

.commentlist .review_comment_container .dokan-review-author-img img,.commentlist .review_comment_container > img,.commentlist .comment_container .dokan-review-author-img img,.commentlist .comment_container > img {
    margin-right: 20px;
    max-width: 60px;
    border-radius: 50%
}

.commentlist .comment-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.commentlist .comment-text .star-rating {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    margin-bottom: 10px;
    margin-right: 0
}

.commentlist .comment-text .meta {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px
}

.commentlist .comment-text .meta strong {
    color: #2d2a2a
}

.commentlist .comment-text .meta time {
    font-style: italic
}

.commentlist .comment-text .description {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    margin-bottom: 0;
    max-width: 100%;
    line-height: 1.6
}

.commentlist .comment-text .description p {
    margin-bottom: 10px
}

.commentlist .comment-text .description p:last-child {
    margin-bottom: 0
}

.product-extra-content {
    margin-bottom: 40px
}

.product-image-summary-wrap + .product-extra-content {
    margin-top: 35px;
    margin-bottom: 0
}

.related-and-upsells > div {
    margin-bottom: 40px
}

.related-and-upsells > div:first-child {
    padding-top: 0;
    border-top: 0
}

.related-and-upsells > div:last-child {
    margin-bottom: 0
}

.related-and-upsells:after,.related-and-upsells:before {
    content: none
}

.related-and-upsells:empty {
    margin-top: -40px
}

.related-and-upsells .woodmart-carousel-container {
    margin-bottom: 0
}

.woodmart-products-nav {
    position: relative;
    margin-bottom: 10px;
    font-size: 0
}

.woodmart-products-nav .product-btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle
}

.woodmart-products-nav .product-btn > a {
    display: block;
    width: 20px;
    height: 20px;
    color: #333;
    vertical-align: middle;
    text-align: center;
    letter-spacing: 0;
    font-size: 0;
    line-height: 20px
}

.woodmart-products-nav .product-btn > a:hover {
    color: #878787
}

.woodmart-products-nav .product-btn > a span {
    font-size: 12px
}

.woodmart-products-nav .product-btn > a span:before {
    display: inline-block;
    content: "\f111";
    font-family: "woodmart-font"
}

.woodmart-products-nav .product-btn:hover > .wrapper-short {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility .3s ease;
    transition: opacity .3s ease,visibility .3s ease;
    -webkit-animation: wd-fadeInLeftShort .3s ease both;
    animation: wd-fadeInLeftShort .3s ease both
}

.woodmart-products-nav .product-next > a span:before {
    content: "\f110";
    font-family: "woodmart-font"
}

.woodmart-products-nav .woodmart-back-btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    width: 20px;
    height: 20px;
    color: #333;
    vertical-align: middle;
    text-align: center;
    line-height: 20px
}

.woodmart-products-nav .woodmart-back-btn span:not(.woodmart-tooltip-label) {
    display: none
}

.woodmart-products-nav .woodmart-back-btn .woodmart-tooltip-label {
    z-index: 391
}

.woodmart-products-nav .woodmart-back-btn:after {
    font-size: 14px;
    content: "\f11a";
    font-family: "woodmart-font"
}

.woodmart-products-nav .woodmart-back-btn:hover {
    color: #878787
}

.woodmart-products-nav .wrapper-short {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 350;
    visibility: hidden;
    padding-top: 10px;
    min-width: 240px;
    opacity: 0;
    -webkit-transition: opacity .1s ease .1s,visibility .1s ease .1s;
    transition: opacity .1s ease .1s,visibility .1s ease .1s;
    -webkit-animation: wd-fadeOutLeftShort .1s ease .1s both;
    animation: wd-fadeOutLeftShort .1s ease .1s both
}

.woodmart-products-nav .product-short {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.woodmart-products-nav .product-short-image img {
    max-width: 90px
}

.woodmart-products-nav .product-short-description {
    padding: 10px 15px
}

.woodmart-products-nav .product-short-description .product-title {
    margin-bottom: 7px;
    font-size: 14px
}

.woodmart-products-nav .product-short-description .price {
    display: block;
    font-size: 14px;
    line-height: 1.2
}

.woodmart-product-instagram {
    margin-bottom: 35px;
    padding-top: 40px;
    border-top: 1px solid
}

.woodmart-product-instagram .product-instagram-intro {
    font-size: 16px
}

.woodmart-product-instagram .product-instagram-intro span {
    color: #333;
    font-weight: 600
}

.product-quick-view .apple-pay-button-wrapper,.quick-shop-wrapper .product-quick-view {
    display: none
}

@supports(-webkit-appearance: -apple-pay-button) {
    .apple-pay-button-wrapper,.apple-pay-button-checkout-separator {
        margin-bottom:10px
    }

    .apple-pay-button-checkout-separator {
        color: #212121;
        font-weight: 600;
        font-size: 12px
    }

    body.single-product div.product form.cart .quantity,.single-product div.product form.cart .quantity input[type=button],.single-product div.product form.cart .quantity ~ .button {
        width: auto
    }

    .single-product div.product form.cart .quantity input[type=number] {
        width: 30px
    }

    body.single-product div.product form.cart .apple-pay-button-wrapper {
        display: inline-block;
        vertical-align: middle
    }

    body.single-product div.product form.cart .apple-pay-button {
        margin-right: 10px;
        max-width: 20%
    }
}

.product-design-alt .product-image-summary div[itemprop=description] {
    margin-bottom: 20px
}

.product-design-alt .product-image-summary .product_meta {
    margin-bottom: 15px
}

.product-design-alt .product-image-summary .product_meta > span {
    display: inline-block;
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
    vertical-align: middle
}

.product-design-alt .entry-summary {
    text-align: center
}

.product-design-alt .woocommerce-product-details__short-description > ul,.product-design-alt .woocommerce-product-details__short-description > ol {
    padding-left: 0;
    text-align: center
}

.product-design-alt .woocommerce-product-details__short-description > ul li,.product-design-alt .woocommerce-product-details__short-description > ol li {
    list-style: none
}

.product-design-alt .woocommerce-product-details__short-description > ul li:before,.product-design-alt .woocommerce-product-details__short-description > ol li:before {
    content: none
}

.product-design-alt .woocommerce-product-details__short-description > ul ul,.product-design-alt .woocommerce-product-details__short-description > ul ol,.product-design-alt .woocommerce-product-details__short-description > ol ul,.product-design-alt .woocommerce-product-details__short-description > ol ol {
    padding-left: 0
}

.product-design-alt .woocommerce-variation {
    margin-top: 0
}

.product-design-alt .woocommerce-variation-price .price {
    margin-right: 7px;
    margin-left: 7px
}

.product-design-alt .woocommerce-variation-availability .stock {
    margin-right: 7px;
    margin-left: 7px
}

.product-design-alt table.variations .reset_variations {
    bottom: -30px
}

.product-design-alt .variation-swatch-selected .variations {
    margin-bottom: 50px
}

.product-design-alt.tabs-location-summary .woodmart-accordion-title:after {
    content: none
}

.product-design-alt.tabs-location-summary .woocommerce-Tabs-panel {
    text-align: left
}

.woodmart-checkout-steps ul {
    color: #2d2a2a
}

.woodmart-checkout-steps ul li {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 1.2
}

.woodmart-checkout-steps ul li a {
    display: inline-block;
    color: inherit;
    opacity: .7
}

.woodmart-checkout-steps ul li a:hover,.woodmart-checkout-steps ul li a:focus {
    color: inherit;
    opacity: 1
}

.woodmart-checkout-steps ul li > span {
    opacity: .7
}

.woodmart-checkout-steps ul li span {
    position: relative;
    display: block
}

.woodmart-checkout-steps ul li:after {
    margin: 0 15px;
    font-weight: bold;
    font-size: 85%;
    opacity: .7;
    content: "\f118";
    font-family: "woodmart-font"
}

.woodmart-checkout-steps ul li:last-child:after {
    content: none
}

.woodmart-checkout-steps ul .step-active a,.woodmart-checkout-steps ul .step-active > span {
    opacity: 1
}

.color-scheme-light .woodmart-checkout-steps ul {
    color: #fff
}

form.checkout > .woocommerce-NoticeGroup,.woocommerce-NoticeGroup-checkout {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 100%;
    width: 100%
}

.woocommerce-checkout .woocommerce [role=alert] {
    margin-bottom: 30px
}

.woocommerce-form-coupon-toggle > .woocommerce-info,.woocommerce-form-login-toggle > .woocommerce-info {
    display: block;
    margin-bottom: 25px !important;
    padding: 0;
    min-height: 0;
    background-color: transparent;
    color: #2d2a2a;
    font-weight: 600;
    font-size: 14px
}

.woocommerce-form-coupon-toggle > .woocommerce-info:before,.woocommerce-form-login-toggle > .woocommerce-info:before {
    content: none
}

.woocommerce-form-coupon-toggle > .woocommerce-info .showcoupon,.woocommerce-form-coupon-toggle > .woocommerce-info .showlogin,.woocommerce-form-login-toggle > .woocommerce-info .showcoupon,.woocommerce-form-login-toggle > .woocommerce-info .showlogin {
    margin-left: 5px
}

.login.hidden-form {
    position: relative;
    margin-bottom: 30px;
    padding: 30px;
    max-width: 470px;
    border: 3px solid #efefef
}

.login.hidden-form p {
    margin-bottom: 15px
}

.checkout_coupon {
    margin-bottom: 30px;
    padding: 30px 25px 10px 25px;
    max-width: 450px;
    border: 2px dashed #ddd;
    text-align: center
}

.checkout_coupon .form-row-first,.checkout_coupon .form-row-last {
    display: inline-block;
    float: none;
    width: auto;
    vertical-align: top
}

.checkout_coupon .input-text {
    min-width: 220px
}

.checkout_coupon .button {
    color: #fff
}

.checkout_coupon .button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woocommerce-billing-fields {
    margin-top: 30px;
    margin-bottom: 20px
}

.woocommerce-billing-fields:after {
    content: "";
    display: block;
    clear: both
}

.woocommerce-billing-fields abbr {
    border: none
}

.woocommerce-shipping-fields {
    margin-bottom: 20px;
    padding-top: 30px;
    border-top: 1px solid
}

.woocommerce-shipping-fields textarea {
    min-height: 110px
}

.woocommerce-account-fields {
    margin-bottom: 30px
}

.woocommerce-account-fields .woocommerce-form__label {
    color: #333;
    font-weight: 600
}

.create-account > label {
    display: inline-block
}

div.create-account {
    padding: 30px;
    border: 3px solid #efefef
}

#ship-to-different-address label {
    display: inline;
    margin: 0;
    margin-right: 5px;
    color: #2d2a2a
}

#order_review_heading {
    text-align: center
}

.checkout-order-review,.woocommerce-order-pay .entry-content > .woocommerce {
    position: relative;
    margin-bottom: 40px;
    padding: 30px;
    background-color: #f7f7f7
}

.checkout-order-review:before,.checkout-order-review:after,.woocommerce-order-pay .entry-content > .woocommerce:before,.woocommerce-order-pay .entry-content > .woocommerce:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: transparent;
    background-image: radial-gradient(farthest-side, rgba(0, 0, 0, 0) 6px, #f7f7f7 0);
    background-size: 15px 15px
}

.checkout-order-review:before,.woocommerce-order-pay .entry-content > .woocommerce:before {
    top: -10px;
    background-position: -3px -5px,0 0
}

.checkout-order-review:after,.woocommerce-order-pay .entry-content > .woocommerce:after {
    bottom: -10px;
    background-position: -3px 2px,0 0
}

.woodmart-table-wrapper {
    overflow-x: auto;
    margin-bottom: 20px;
    padding: 5px 15px;
    background-color: #fff;
    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.05);
    box-shadow: 1px 1px 2px rgba(0,0,0,.05)
}

.woodmart-table-wrapper table {
    margin-bottom: 0
}

.payment_methods {
    margin-bottom: 20px
}

.payment_methods li img {
    margin-right: 5px;
    margin-left: 5px;
    max-height: 40px
}

.payment_methods li > label {
    display: inline;
    margin-bottom: 0
}

.payment_methods > li {
    margin-bottom: 15px
}

.payment_methods .payment_box {
    position: relative;
    margin-top: 15px;
    padding: 15px 15px;
    background-color: #fff;
    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.05);
    box-shadow: 1px 1px 2px rgba(0,0,0,.05)
}

.payment_methods .payment_box p {
    margin-bottom: 10px
}

.payment_methods .payment_box p:last-child {
    margin-bottom: 0
}

.payment_methods .payment_box:before {
    position: absolute;
    top: -4px;
    left: 25px;
    color: #fff;
    font-size: 32px;
    font-family: "FontAwesome";
    line-height: 0;
    content: "\f0d8"
}

.payment_methods .payment_method_paypal img {
    margin-left: 10px
}

.payment_methods .payment_method_paypal a {
    margin-left: 15px;
    text-decoration: underline
}

.woocommerce-terms-and-conditions {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.05);
    box-shadow: 1px 1px 2px rgba(0,0,0,.05)
}

.woocommerce-terms-and-conditions-wrapper {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid
}

.woocommerce-terms-and-conditions-wrapper a {
    font-weight: 600
}

.woocommerce-terms-and-conditions-wrapper .woocommerce-privacy-policy-text {
    margin-bottom: 20px
}

.woocommerce-terms-and-conditions-wrapper .woocommerce-privacy-policy-text:not(:last-child) {
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid
}

.woocommerce-privacy-policy-text {
    margin-bottom: 20px
}

.woocommerce-privacy-policy-text:empty {
    display: none
}

.woocommerce-privacy-policy-text a {
    font-weight: 600
}

.woocommerce-privacy-policy-text p:last-child {
    margin-bottom: 0
}

#place_order {
    width: 100%;
    color: #fff;
    padding: 14px 28px;
    font-size: 14px;
    line-height: 20px
}

#place_order:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woocommerce-order-pay .entry-content > .woocommerce {
    margin: 0 auto;
    max-width: 600px
}

.cart-empty:before {
    content: "\f101";
    font-family: "woodmart-font"
}

.cart-empty:after {
    position: absolute;
    top: 27px;
    left: 50%;
    margin-left: -10px;
    color: #858585;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    content: "\f10f";
    font-family: "woodmart-font"
}

.woodmart-empty-page-text {
    margin-bottom: 0;
    text-align: center;
    font-size: 110%;
    line-height: 1.8
}

.woodmart-empty-page-text + .return-to-shop {
    margin-top: 25px;
    margin-bottom: 5vw
}

.woodmart-empty-page-text + .return-to-shop .button {
    padding: 14px 28px;
    font-size: 14px;
    line-height: 20px
}

.return-to-shop {
    text-align: center
}

.return-to-shop .button {
    color: #fff
}

.return-to-shop .button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woocommerce-cart .woocommerce-notices-wrapper [role=alert] {
    margin-bottom: 30px
}

.woocommerce-cart .row > .woocommerce-notices-wrapper {
    max-width: 100%;
    width: 100%
}

.woocommerce-cart .row > [role=alert],.woocommerce-cart .row > .woocommerce-notices-wrapper {
    margin-right: 15px;
    margin-left: 15px
}

.cart-totals-inner {
    padding: 25px;
    border: 3px solid #efefef
}

.cart-totals-inner h2 {
    margin-bottom: 5px;
    padding-left: 6px
}

.cart-totals-inner table {
    margin-bottom: 10px
}

.cart-totals-inner table tr:last-child th,.cart-totals-inner table tr:last-child td {
    border-bottom: none
}

.cart-totals-inner table .cart-subtotal .amount {
    color: #777;
    font-weight: normal
}

.cart-totals-inner .woocommerce-shipping-destination {
    margin-top: 10px;
    margin-bottom: 10px
}

.cart-totals-inner .woocommerce-shipping-calculator {
    margin-top: 10px
}

.cart-totals-inner .woocommerce-shipping-calculator > p {
    margin-bottom: 0
}

.cart-totals-inner .shipping-calculator-form {
    margin-top: 20px
}

.cart-totals-inner .shipping-calculator-form .button {
    padding: 10px 14px;
    font-size: 12px;
    line-height: 16px
}

.cart-totals-inner .shipping-calculator-button {
    font-weight: 600
}

.cart-totals-inner .checkout-button {
    padding-top: 13px;
    padding-bottom: 13px;
    color: #fff;
    width: 100%
}

.cart-totals-inner .checkout-button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.cart-actions .coupon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.cart-actions .coupon label {
    display: none
}

.cart-actions .coupon .input-text {
    margin-right: 10px;
    max-width: 230px
}

.cart-actions .button[name=apply_coupon] {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    color: #fff
}

.cart-actions .button[name=apply_coupon]:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.cross-sells {
    margin-top: 70px
}

.woodmart-registration-page {
    margin-right: auto;
    margin-left: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 1000px
}

.woodmart-registration-page.woodmart-no-registration {
    max-width: 450px
}

#customer_login {
    margin-right: -40px;
    margin-left: -40px
}

#customer_login > .col-md-6 {
    padding-top: 25px;
    padding-right: 40px;
    padding-bottom: 25px;
    padding-left: 40px
}

#customer_login > div:not(:first-child):last-child {
    border-left: 1px solid
}

.col-register-text {
    text-align: center
}

.registration-info,.login-info {
    margin-bottom: 20px
}

.woodmart-register-tabs .col-register,.woodmart-register-tabs .col-login {
    -webkit-animation: wd-fadeIn .7s ease;
    animation: wd-fadeIn .7s ease
}

.woodmart-register-tabs .col-register {
    display: none
}

.active-register .col-register {
    display: block
}

.active-register .col-login {
    display: none
}

.with-login-reg-info .registration-info,.with-login-reg-info .login-info {
    -webkit-animation: wd-fadeIn .7s ease;
    animation: wd-fadeIn .7s ease
}

.with-login-reg-info .login-info {
    display: none
}

.with-login-reg-info.active-register .registration-info {
    display: none
}

.with-login-reg-info.active-register .login-info {
    display: block
}

.login:not(.hidden-form) {
    display: block !important
}

.login-form-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.login-form-footer .lost_password,.login-form-footer .remember-me-label,.login-form-footer .woocommerce-form-login__rememberme {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px
}

.login-form-footer .remember-me-label,.login-form-footer .woocommerce-form-login__rememberme {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1
}

.login-form-footer .lost_password {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
}

.login-form-footer .lost_password:hover {
    text-decoration: underline;
    opacity: .7
}

.lost_reset_password {
    margin-right: auto;
    margin-left: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 470px
}

.lost_reset_password .form-row-first {
    padding-top: 20px;
    border-top: 1px solid
}

.lost_reset_password p {
    width: 100%;
    font-size: 110%
}

.woocommerce-lost-password .site-content .woocommerce > p {
    margin-right: auto;
    margin-left: auto;
    max-width: 470px;
    text-align: center;
    font-size: 110%
}

.woocommerce-lost-password .site-content .woocommerce > p:before {
    display: block;
    margin-bottom: 10px;
    color: rgba(135,135,135,.15);
    font-weight: normal;
    font-size: 180px;
    line-height: 180px;
    content: "\f11f";
    font-family: "woodmart-font"
}

.register .button,.login .button,.lost_reset_password .button {
    width: 100%;
    color: #fff
}

.register .button:hover,.login .button:hover,.lost_reset_password .button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woodmart-social-login {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px
}

.social-login-btn {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 200px;
    flex: 1 1 200px;
    margin-bottom: 15px;
    padding-right: 5px;
    padding-left: 5px
}

.social-login-btn > a {
    display: block !important;
    color: #fff !important;
    position: relative;
    display: inline-block;
    outline: none;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    letter-spacing: .3px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease,-webkit-box-shadow .25s ease;
    padding: 12px 20px;
    font-size: 13px;
    line-height: 18px
}

.social-login-btn > a:hover {
    text-decoration: none
}

.social-login-btn > a:focus {
    outline: none
}

.social-login-btn > a:before {
    position: absolute;
    top: 50%;
    left: 15px;
    font-weight: normal;
    font-size: 22px;
    font-family: "FontAwesome";
    line-height: 26px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.social-login-btn > a:hover {
    color: #fff !important
}

.social-login-btn .login-vk-link {
    background-color: #597da3
}

.social-login-btn .login-vk-link:before {
    content: "\f189"
}

.social-login-btn .login-vk-link:hover {
    background-color: #4c6b8c
}

.social-login-btn .login-fb-link {
    background-color: #3b5998
}

.social-login-btn .login-fb-link:before {
    content: "\f09a"
}

.social-login-btn .login-fb-link:hover {
    background-color: #314a7e
}

.social-login-btn .login-goo-link {
    background-color: #4285f4
}

.social-login-btn .login-goo-link:before {
    content: "\f1a0"
}

.social-login-btn .login-goo-link:hover {
    background-color: #206ff2
}

.social-login-btn:last-child {
    margin-bottom: 0
}

.woodmart-social-alt-style [class^=login-] {
    -webkit-box-shadow: none !important;
    box-shadow: none !important
}

.woodmart-social-alt-style .login-fb-link:before {
    left: 9px;
    font-size: 28px;
    content: "\f230"
}

.woodmart-social-alt-style .login-goo-link:before,.woodmart-social-alt-style .login-goo-link:after {
    content: "";
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.woodmart-social-alt-style .login-goo-link:before {
    left: 13px;
    z-index: 1;
    width: 16px;
    height: 16px;
    background-image: url(http://13.127.231.217/wp-content/themes/woodmart2/inc/admin/assets/images/google-btn-icon.svg);
    background-position: center;
    background-size: cover
}

.woodmart-social-alt-style .login-goo-link:after {
    left: 8px;
    width: 26px;
    height: 26px;
    background-color: #fff
}

.woodmart-social-alt-style .login-vk-link:before {
    left: 10px
}

.btns-shop-rounded .woodmart-social-alt-style .social-login-btn > a {
    border-radius: 5px
}

.btns-shop-semi-rounded .woodmart-social-alt-style .login-goo-link:after,.btns-shop-rounded .woodmart-social-alt-style .login-goo-link:after {
    border-radius: 5px
}

.social-login-title,.register-or {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 30px;
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px
}

.social-login-title:after,.social-login-title:before,.register-or:after,.register-or:before {
    content: "";
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0px;
    flex: 1 0 0;
    border-bottom: 1px solid
}

.social-login-title:after,.register-or:after {
    margin-left: 20px
}

.social-login-title:before,.register-or:before {
    margin-right: 20px
}

.register-or {
    display: none;
    margin-top: 30px
}

.register > p {
    position: relative
}

#reg_password:focus + .woocommerce-password-strength + .woocommerce-password-hint {
    visibility: visible;
    opacity: 1
}

.woocommerce-password-hint {
    position: absolute;
    right: 0;
    bottom: 100%;
    visibility: hidden;
    margin-bottom: -10px;
    padding: 20px;
    max-width: 300px;
    width: 100%;
    background: #fff;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.15);
    box-shadow: 0 0 4px rgba(0,0,0,.15);
    opacity: 0;
    -webkit-transition: opacity .5s,visibility .5s;
    transition: opacity .5s,visibility .5s
}

.woocommerce-password-hint:after {
    position: absolute;
    top: 100%;
    left: 30px;
    color: #fff;
    text-shadow: 0 2px 3px rgba(0,0,0,.1);
    font-size: 26px;
    font-family: "FontAwesome";
    line-height: 7px;
    content: "\f0d7"
}

.woocommerce-password-strength {
    margin-top: 20px;
    margin-bottom: -10px;
    padding: 10px 20px
}

.woocommerce-password-strength.short,.woocommerce-password-strength.bad {
    background-color: #e0b252;
    color: #fff
}

.woocommerce-password-strength.strong,.woocommerce-password-strength.good {
    background: #459647;
    color: #fff;
    font-weight: bold
}

.woocommerce-password-strength:empty {
    display: none;
    margin: 0;
    padding: 0
}

.woocommerce-my-account-wrapper {
    margin-left: -30px;
    margin-right: -30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

.woocommerce-MyAccount-content,.woodmart-my-account-sidebar {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-top: 10px
}

.woodmart-my-account-sidebar {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 25%;
    flex: 1 0 25%;
    max-width: 25%;
    width: 25%;
    border-right: 1px solid
}

.woodmart-my-account-sidebar .sidebar-container {
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 1px solid
}

.woocommerce-MyAccount-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 75%;
    flex: 1 0 75%;
    max-width: 75%;
    width: 75%
}

.woocommerce-MyAccount-content > p {
    font-size: 110%
}

.woocommerce-MyAccount-content > p:not(.woocommerce-Message):first-child {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid
}

.woocommerce-MyAccount-content > p:not(.woocommerce-Message):first-child strong {
    color: #2d2a2a
}

.woocommerce-MyAccount-content > p:not(.woocommerce-Message):first-child mark {
    color: #fff
}

.woocommerce-MyAccount-content > .button {
    color: #fff
}

.woocommerce-MyAccount-content > .button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woocommerce-MyAccount-content .woocommerce-message[role=alert] {
    margin-bottom: 30px
}

.order-info mark {
    color: #fff
}

.woocommerce-EditAccountForm fieldset {
    margin-top: 40px
}

.woocommerce-MyAccount-title {
    font-size: 18px;
    font-weight: 600;
    padding-left: 15px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    text-transform: uppercase;
    border-bottom: 1px solid
}

.woocommerce-MyAccount-navigation {
    margin-bottom: 30px
}

.woocommerce-MyAccount-navigation ul li a {
    display: block;
    padding: 10px 15px;
    color: rgba(0,0,0,.9);
    line-height: 20px;
    text-transform: none;
    font-size: 14px;
    font-weight: 600
}

.woocommerce-MyAccount-navigation ul li a:hover,.woocommerce-MyAccount-navigation ul li a:focus {
    color: rgba(0,0,0,.9);
    background-color: #f7f7f7;
    text-decoration: none
}

.woocommerce-MyAccount-navigation ul li.is-active > a {
    color: rgba(0,0,0,.9);
    background-color: rgba(136,136,136,.12);
    cursor: default
}

.woocommerce-MyAccount-navigation ul li:last-child {
    border-bottom: none
}

.order-again .button {
    color: #fff
}

.order-again .button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woodmart-my-account-links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: -10px;
    margin-right: -10px
}

.woodmart-my-account-links > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 33%;
    flex: 1 1 33%;
    max-width: 33%;
    width: 33%;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px
}

.woodmart-my-account-links a {
    display: block;
    padding: 20px;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.18);
    box-shadow: 0 0 4px rgba(0,0,0,.18);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: #3f3f3f
}

.woodmart-my-account-links a:before {
    content: "\f437";
    font-family: "woodmart-font";
    display: block;
    color: #d0d0d0;
    margin-bottom: 10px;
    font-size: 50px;
    font-weight: 400;
    line-height: 50px;
    -webkit-transition: color .25s ease;
    transition: color .25s ease
}

.woodmart-my-account-links a:hover,.woodmart-my-account-links a:focus {
    color: #3f3f3f;
    background-color: rgba(0,0,0,.03)
}

.woodmart-my-account-links .dashboard-link {
    display: none
}

.woodmart-my-account-links .wishlist-link a:before {
    content: "\f431";
    font-family: "woodmart-font"
}

.woodmart-my-account-links .edit-account-link a:before {
    content: "\f432";
    font-family: "woodmart-font"
}

.woodmart-my-account-links .orders-link a:before {
    content: "\f435";
    font-family: "woodmart-font"
}

.woodmart-my-account-links .downloads-link a:before {
    content: "\f433";
    font-family: "woodmart-font"
}

.woodmart-my-account-links .payment-methods-link a:before {
    content: "\f439";
    font-family: "woodmart-font"
}

.woodmart-my-account-links .edit-address-link a:before {
    content: "\f436";
    font-family: "woodmart-font"
}

.woodmart-my-account-links .customer-logout-link a:before {
    content: "\f434";
    font-family: "woodmart-font"
}

.woocommerce-Button--next,.woocommerce-Button--previous,.woocommerce-MyAccount-downloads-file {
    color: #fff
}

.woocommerce-Button--next:hover,.woocommerce-Button--previous:hover,.woocommerce-MyAccount-downloads-file:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woocommerce-order {
    margin: 0 auto;
    max-width: 800px;
    text-align: center
}

.woocommerce-order .woocommerce-columns--addresses {
    text-align: left
}

.woocommerce-thankyou-order-received {
    margin-bottom: 30px;
    padding: 3%;
    width: 100%;
    border: 2px dashed #7a9c59;
    color: #7a9c59;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.4
}

.woocommerce-thankyou-order-details,.wc-bacs-bank-details {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px
}

.woocommerce-thankyou-order-details li,.wc-bacs-bank-details li {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0;
    margin-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    border-right: 1px solid;
    color: #777;
    text-align: center
}

.woocommerce-thankyou-order-details li:last-child,.wc-bacs-bank-details li:last-child {
    border-right: none
}

.woocommerce-thankyou-order-details strong,.wc-bacs-bank-details strong {
    display: block;
    margin-top: 10px;
    color: #2d2a2a
}

.woocommerce-thankyou-order-details .amount,.wc-bacs-bank-details .amount {
    color: #2d2a2a
}

.woocommerce-bacs-bank-details {
    margin-top: 40px;
    margin-bottom: 40px
}

.wc-bacs-bank-details-heading + .wc-bacs-bank-details-account-name {
    margin-top: -15px
}

.wc-bacs-bank-details-account-name {
    margin-bottom: 30px;
    font-size: 16px;
    opacity: .6
}

.wc-bacs-bank-details-heading,.woocommerce-order-details__title,.woocommerce-customer-details > h2 {
    text-transform: uppercase
}

.woocommerce-order-details {
    margin-top: 40px
}

.woocommerce-order-details .responsive-table {
    margin-bottom: 50px
}

.woocommerce-order-details address,.woocommerce-order-details .woocommerce-column__title {
    text-align: left
}

.color-scheme-light .woocommerce-order-details {
    padding: 30px;
    background: rgba(0,0,0,.5)
}

.woocommerce-customer-details--phone,.woocommerce-customer-details--email {
    margin-bottom: 0
}

.track_order {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-left: -5px;
    margin-right: -5px
}

.track_order p {
    padding-left: 5px;
    padding-right: 5px
}

.track_order p:first-child {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    width: 100%;
    font-size: 110%;
    text-align: center;
    margin-bottom: 30px
}

.track_order .button {
    min-width: 130px
}

.track_order .form-row {
    float: none;
    width: auto
}

.track_order .form-row-first,.track_order .form-row-last {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.track_order .clear {
    display: none
}

.woodmart-products-tabs .tabs-navigation-wrapper {
    position: relative
}

.woodmart-products-tabs .woodmart-tabs-header {
    position: relative
}

.woodmart-products-tabs .open-title-menu {
    display: none
}

.woodmart-products-tabs .tabs-name {
    color: #2d2a2a;
    line-height: 1.4
}

.woodmart-products-tabs .tabs-name > span {
    vertical-align: middle
}

.woodmart-products-tabs .tabs-name .img-wrapper {
    margin-right: 10px
}

.woodmart-products-tabs .products-tabs-title {
    margin-right: -15px;
    margin-left: -15px;
    color: #333;
    font-weight: 600
}

.woodmart-products-tabs .products-tabs-title li {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    color: inherit;
    vertical-align: bottom;
    text-transform: uppercase;
    font-weight: inherit;
    font-size: 16px;
    line-height: 1.4;
    opacity: .7;
    cursor: pointer;
    -webkit-transition: opacity .25s ease,color .25s ease;
    transition: opacity .25s ease,color .25s ease
}

.woodmart-products-tabs .products-tabs-title li:hover,.woodmart-products-tabs .products-tabs-title li.active-tab-title {
    opacity: 1
}

.woodmart-products-tabs .products-tabs-title .tab-label {
    position: relative
}

.woodmart-products-tabs .woodmart-tab-content {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .25s ease,visibility 0s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility 0s ease,-webkit-transform .25s ease;
    transition: transform .25s ease,opacity .25s ease,visibility 0s ease;
    transition: transform .25s ease,opacity .25s ease,visibility 0s ease,-webkit-transform .25s ease;
    -webkit-transform: none;
    transform: none
}

.woodmart-products-tabs .woodmart-tab-content.loading {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .25s ease,visibility 0s ease .3s,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility 0s ease .3s,-webkit-transform .25s ease;
    transition: transform .25s ease,opacity .25s ease,visibility 0s ease .3s;
    transition: transform .25s ease,opacity .25s ease,visibility 0s ease .3s,-webkit-transform .25s ease;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
    pointer-events: none
}

.woodmart-products-tabs.tabs-design-default .woodmart-tab-content.loading .wrap-loading-arrow,.woodmart-products-tabs.tabs-design-alt .woodmart-tab-content.loading .wrap-loading-arrow {
    display: none
}

.woodmart-products-tabs.tabs-design-default .woodmart-tabs-header {
    margin-bottom: 15px
}

.woodmart-products-tabs.tabs-design-default .woodmart-tabs-header:not([class*=text-]) {
    text-align: center
}

.woodmart-products-tabs.tabs-design-default .tabs-name {
    margin-bottom: 10px
}

.woodmart-products-tabs.tabs-design-default .products-tabs-title .img-wrapper {
    margin-bottom: 10px
}

.woodmart-products-tabs.tabs-design-alt .woodmart-tabs-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px
}

.woodmart-products-tabs.tabs-design-alt .tabs-name,.woodmart-products-tabs.tabs-design-alt .tabs-navigation-wrapper {
    margin-bottom: 10px
}

.woodmart-products-tabs.tabs-design-alt .products-tabs-title li {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    vertical-align: middle
}

.woodmart-products-tabs.tabs-design-alt .products-tabs-title .img-wrapper {
    margin-right: 10px
}

.woodmart-products-tabs.tabs-design-simple .woodmart-tabs-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 20px;
    border-bottom: 2px solid #eaeaea
}

.woodmart-products-tabs.tabs-design-simple .tabs-name {
    position: relative;
    z-index: 1;
    margin-bottom: -2px;
    margin-right: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 2px solid;
    vertical-align: middle
}

.woodmart-products-tabs.tabs-design-simple .tabs-name > span {
    vertical-align: bottom
}

.woodmart-products-tabs.tabs-design-simple .tabs-name .img-wrapper {
    margin-left: 4px
}

.woodmart-products-tabs.tabs-design-simple .products-tabs-title li {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 14px
}

.woodmart-products-tabs.tabs-design-simple .products-tabs-title .img-wrapper {
    margin-right: 10px
}

.woodmart-products-tabs.tabs-design-simple .owl-nav,.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow {
    position: absolute;
    top: -62px;
    -webkit-animation: wd-fadeIn .5s ease both .3s;
    animation: wd-fadeIn .5s ease both .3s
}

.woodmart-products-tabs.tabs-design-simple .owl-nav > div,.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow > div {
    position: static;
    visibility: visible;
    margin-top: 0;
    width: 30px;
    height: 40px;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible
}

.woodmart-products-tabs.tabs-design-simple .owl-nav > div:after,.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow > div:after {
    font-weight: 700;
    font-size: 14px
}

.woodmart-products-tabs.tabs-design-simple .owl-nav > div[class*=prev],.woodmart-products-tabs.tabs-design-simple .owl-nav > div[class*=next],.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow > div[class*=prev],.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow > div[class*=next] {
    margin: 0;
    padding: 0
}

.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow {
    right: -10px
}

.woodmart-products-tabs.tabs-design-simple .owl-nav {
    right: 0
}

.woodmart-products-tabs.tabs-design-simple .woodmart-carousel-spacing-30 .owl-nav {
    right: 5px
}

.woodmart-products-tabs.tabs-design-simple .owl-loaded:after,.woodmart-products-tabs.tabs-design-simple .owl-loaded:before {
    content: none
}

.woodmart-products-tabs.tabs-design-simple .woodmart-products-loader {
    position: absolute;
    top: 0;
    right: 0;
    left: 0 !important;
    margin-top: 30px
}

.woodmart-products-tabs.tabs-design-simple .woodmart-tab-content.loading .owl-nav,.woodmart-products-tabs.tabs-design-simple .woodmart-tab-content.loading .wrap-loading-arrow {
    display: none
}

.woodmart-products-tabs.element-loading .woodmart-tab-content .woodmart-products-loader {
    display: none !important
}

.color-scheme-light .woodmart-products-tabs .tabs-name {
    color: #fff
}

.color-scheme-light .woodmart-products-tabs .products-tabs-title li {
    color: #fff
}

.color-scheme-light .woodmart-products-tabs.tabs-design-simple .woodmart-tabs-header {
    border-color: rgba(255,255,255,.15)
}

.woodmart-tabs-loader {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    margin-top: 50px;
    text-align: center;
    opacity: 0;
    pointer-events: none
}

.browser-Safari .woodmart-tabs-loader {
    visibility: visible
}

.element-loading .woodmart-tabs-loader:after {
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.element-loading .woodmart-tabs-loader {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility .3s ease;
    transition: opacity .3s ease,visibility .3s ease
}

.woodmart-product-filters {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px
}

.woodmart-product-filters .woodmart-pf-checkboxes {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 200px;
    flex: 1 1 200px;
    width: 0
}

.woodmart-product-filters > div {
    margin-bottom: 10px;
    padding-right: 5px;
    padding-left: 5px
}

.woodmart-pf-btn button {
    padding-right: 40px;
    padding-left: 40px;
    color: #fff
}

.woodmart-pf-btn button:hover {
    color: #fff;
    -webkit-box-shadow: inset 0 0 200px rgba(0,0,0,.1);
    box-shadow: inset 0 0 200px rgba(0,0,0,.1)
}

.woodmart-pf-checkboxes {
    position: relative
}

.woodmart-pf-title {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 40px;
    height: 42px;
    border: 2px solid rgba(129,129,129,.2);
    color: #333;
    line-height: 1;
    cursor: pointer;
    -webkit-transition: border-color .5s ease;
    transition: border-color .5s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.woodmart-pf-title .title-text {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px
}

.woodmart-pf-title:after {
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -6px;
    color: #b7b7b7;
    font-size: 12px;
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease;
    content: "\f124";
    font-family: "woodmart-font";
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.woodmart-pf-title:hover {
    border-color: rgba(129,129,129,.3)
}

.opened .woodmart-pf-title:after {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg)
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-title {
    border-color: rgba(255,255,255,.15);
    color: #fff
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-title:after {
    color: rgba(255,255,255,.8)
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-title:hover {
    border-color: rgba(255,255,255,.4)
}

.woodmart-pf-results {
    overflow: hidden;
    white-space: nowrap;
    line-height: 1
}

.woodmart-pf-results li {
    position: relative;
    display: inline-block;
    margin-left: 5px;
    padding: 4px 8px;
    background-color: #f1f1f1;
    color: #333;
    font-weight: 600;
    font-size: 12px;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-pf-results li:after {
    position: absolute;
    top: 50%;
    left: 7px;
    margin-top: -4px;
    font-size: 8px;
    opacity: 0;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    content: "\f10f";
    font-family: "woodmart-font"
}

.woodmart-pf-results li:hover {
    padding-left: 20px
}

.woodmart-pf-results li:hover:after {
    opacity: 1
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-results li {
    background-color: #101010;
    color: #fff
}

.woodmart-pf-checkboxes .woodmart-scroll-content {
    position: relative;
    max-height: 35vh
}

.woodmart-pf-checkboxes .has-scrollbar .woodmart-scroll-content {
    overflow: scroll;
    overflow-x: hidden
}

.woodmart-pf-dropdown {
    position: absolute;
    top: 100%;
    right: 6px;
    left: 6px;
    z-index: 300;
    display: none;
    overflow: hidden;
    width: auto;
    height: auto;
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.woodmart-pf-dropdown .pf-value {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 18px;
    padding-bottom: 8px;
    padding-left: 18px;
    color: #777;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.woodmart-pf-dropdown .pf-value:hover {
    background-color: #f9f9f9;
    color: #777
}

.woodmart-pf-dropdown .pf-active > .pf-value {
    color: #333;
    font-weight: 600
}

.woodmart-pf-dropdown .swatches-brands .filter-swatch span {
    border: none !important;
    border-radius: 0
}

.woodmart-pf-dropdown .swatches-brands:not(.show-labels-off) .filter-swatch span:after {
    content: none
}

.woodmart-pf-dropdown .swatches-brands.show-labels-off .filter-swatch span:after {
    border-radius: 0;
    background-color: rgba(255,255,255,.6);
    color: #2d2a2a
}

.woodmart-pf-dropdown .show-labels-off {
    padding: 10px
}

.woodmart-pf-dropdown .show-labels-off .filter-swatch {
    margin-right: 0
}

.woodmart-pf-dropdown .show-labels-off li {
    display: inline-block
}

.woodmart-pf-dropdown .show-labels-off .pf-value:hover {
    background-color: transparent !important
}

.woodmart-pf-dropdown .show-labels-off .swatch-inner {
    margin: 6px;
    padding: 0
}

.woodmart-pf-dropdown .show-labels-off li:not(.with-swatch-text) .layer-term-name {
    display: none
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-dropdown {
    background-color: #101010
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-dropdown .pf-value {
    color: rgba(255,255,255,.8)
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-dropdown .pf-value:hover {
    background-color: rgba(255,255,255,.08);
    color: rgba(255,255,255,.8)
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-dropdown .pf-active > .pf-value {
    color: #fff
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-dropdown .swatches-brands.show-labels-off .filter-swatch span:after {
    background-color: rgba(0,0,0,.6);
    color: #fff
}

.woodmart-pf-price-range .woodmart-pf-dropdown {
    padding: 20px
}

.woodmart-pf-price-range .ui-slider-horizontal {
    margin-bottom: 20px
}

.woodmart-pf-price-range .filter_price_slider_amount {
    margin-right: -20px;
    margin-bottom: -20px;
    margin-left: -20px;
    padding: 6px 20px;
    border-top: 1px solid;
    background-color: #f9f9f9;
    text-align: center
}

.woodmart-pf-price-range .price_label {
    color: #2d2a2a;
    font-weight: 600;
    font-size: 14px
}

.woodmart-pf-price-range .price_label .from:after {
    content: "-";
    margin-right: 10px;
    margin-left: 10px
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-price-range .filter_price_slider_amount {
    background-color: rgba(0,0,0,.3)
}

.woodmart-product-filters.color-scheme-light .woodmart-pf-price-range .price_label {
    color: #fff
}

.woodmart-pf-categories .children .pf-value {
    padding-left: 35px
}

.woodmart-pf-categories .children .children .pf-value {
    padding-left: 55px
}

.woodmart-products-element {
    position: relative
}

.pagination-arrows {
    position: relative;
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,-webkit-transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,transform .25s ease;
    transition: opacity .25s ease,visibility .25s ease,transform .25s ease,-webkit-transform .25s ease;
    -webkit-transform: none;
    transform: none
}

.pagination-arrows.loading {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
    pointer-events: none
}

.browser-Safari .pagination-arrows.loading {
    visibility: visible
}

.woodmart-animated-products .product-grid-item {
    opacity: 0;
    -webkit-transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: transform .3s ease,opacity .3s ease;
    transition: transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;
    -webkit-transform: scale(0.7);
    transform: scale(0.7)
}

.woodmart-animated-products .product-grid-item.woodmart-animated {
    opacity: 1;
    -webkit-transform: none;
    transform: none
}

.woodmart-products-loader {
    position: fixed;
    top: 50%;
    left: 50%;
    visibility: hidden;
    margin-top: -15px;
    margin-left: -15px;
    text-align: center;
    opacity: 0;
    pointer-events: none
}

.browser-Safari .woodmart-products-loader {
    visibility: visible
}

.element-loading .woodmart-products-loader:after {
    -webkit-animation: wd-rotate 450ms infinite linear;
    animation: wd-rotate 450ms infinite linear
}

.element-loading .woodmart-products-loader {
    -webkit-transition: opacity .15s ease,visibility .15s ease;
    transition: opacity .15s ease,visibility .15s ease
}

.element-loading .woodmart-products-loader:not(.hidden-loader) {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .3s ease,visibility .3s ease;
    transition: opacity .3s ease,visibility .3s ease
}

.brands-widget .brand-item {
    text-align: center
}

.brands-widget .brand-item a {
    display: block;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px
}

.brands-widget .brand-item img {
    max-height: 60px
}

.brands-widget .brand-item img.woodmart-lazy-load {
    -o-object-fit: contain;
    object-fit: contain
}

.brands-carousel .owl-carousel:not(.owl-loaded),.brands-carousel .owl-stage {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.brands-list .brand-item {
    margin-bottom: 15px;
    text-align: left
}

.brands-list .brand-item a {
    padding: 0;
    color: #777
}

.color-scheme-light .brands-list .brand-item a {
    color: rgba(255,255,255,.9)
}

.color-scheme-light .brands-list .brand-item a:hover {
    color: #fff
}

.brands-style-bordered .brand-item {
    border-width: 1px
}

.brands-style-bordered.brands-grid {
    overflow: hidden
}

.brands-style-bordered.brands-grid .row {
    margin-right: -2px;
    margin-bottom: -2px
}

.brands-style-bordered.brands-grid .brand-item {
    border-right-style: solid;
    border-bottom-style: solid
}

.brands-style-bordered.brands-carousel .brand-item {
    border-right-style: solid
}

.brands-style-bordered.brands-carousel .owl-stage-outer,.brands-style-bordered.brands-carousel .owl-carousel:not(.owl-loaded) {
    border-width: 1px;
    border-style: solid
}

.brands-style-bordered.brands-carousel .owl-stage-outer {
    margin-right: 1px;
    margin-left: 1px
}

.brands-style-bordered.brands-carousel .owl-item:last-child .brand-item {
    border-right-style: none
}

.brands-style-bordered.brands-list .row {
    margin-right: -10px;
    margin-left: -10px
}

.brands-style-bordered.brands-list .brand-item {
    margin-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px
}

.brands-style-bordered.brands-list .brand-item > a {
    padding-bottom: 10px;
    border-bottom: 1px solid
}

.color-scheme-light .brands-style-bordered {
    border-color: rgba(255,255,255,.15)
}

.brands-hover-simple .brand-item img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: -webkit-filter .3s ease;
    transition: -webkit-filter .3s ease;
    transition: filter .3s ease;
    transition: filter .3s ease, -webkit-filter .3s ease
}

.brands-hover-simple .brand-item:hover img {
    -webkit-filter: grayscale(0);
    filter: grayscale(0)
}

.brands-hover-alt .brand-item img {
    opacity: .5;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: opacity .3s ease,-webkit-filter .3s ease;
    transition: opacity .3s ease,-webkit-filter .3s ease;
    transition: filter .3s ease,opacity .3s ease;
    transition: filter .3s ease,opacity .3s ease,-webkit-filter .3s ease
}

.brands-hover-alt .brand-item:hover img {
    opacity: 1;
    -webkit-filter: grayscale(0);
    filter: grayscale(0)
}

.not-brand-selected {
    text-align: center;
    padding: 20px 0
}

.add_to_cart_inline ins {
    padding: 0;
    text-decoration: none
}

.add_to_cart_inline > a {
    margin-left: 10px
}

.add_to_cart_inline > a.added {
    display: none
}

.add_to_cart_inline > a:after {
    border-color: #fff
}

.slick-slider {
    position: relative;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y
}

.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0
}

.slick-list:focus {
    outline: none
}

.slick-list.dragging {
    cursor: pointer;
    cursor: hand
}

.slick-slider .slick-track,.slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-right: auto;
    margin-left: auto
}

.slick-track:before,.slick-track:after {
    content: "";
    display: table
}

.slick-track:after {
    clear: both
}

.slick-loading .slick-track {
    visibility: hidden
}

.slick-slide {
    display: none;
    float: left;
    min-height: 1px;
    height: 100%
}

[dir=rtl] .slick-slide {
    float: right
}

.slick-slide img {
    display: block
}

.slick-slide.slick-loading img {
    display: none
}

.slick-slide.dragging img {
    pointer-events: none
}

.slick-initialized .slick-slide {
    display: block
}

.slick-loading .slick-slide {
    visibility: hidden
}

.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent
}

.slick-arrow.slick-hidden {
    display: none
}

.thumbnails.slick-slider .slick-list {
    width: 100%
}

.thumbnails.slick-slider .slick-track {
    margin-top: -7px;
    margin-bottom: -7px
}

.thumbnails.slick-slider .slick-slide {
    padding-top: 7px;
    padding-bottom: 7px
}

.slick-vertical .thumbnails.slick-slider .slick-slide {
    border: none
}

.thumbnails.slick-slider .slick-slide:focus {
    outline: none
}

.thumbnails.slick-slider .slick-slide:hover {
    opacity: .5
}

.thumbnails.slick-slider .slick-slide.current-image {
    opacity: .5
}

.thumbnails.slick-slider > button {
    padding: 0;
    width: 48%;
    height: 30px;
    border: none;
    background-color: rgba(133,133,133,.07);
    color: #333;
    font-size: 0;
    line-height: 30px
}

.thumbnails.slick-slider > button:hover {
    background-color: rgba(133,133,133,.15);
    -webkit-box-shadow: none;
    box-shadow: none
}

.thumbnails.slick-slider > button:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none
}

.thumbnails.slick-slider > button:before {
    display: block;
    height: 30px;
    vertical-align: middle;
    font-size: 12px;
    line-height: 30px
}

.thumbnails.slick-slider > button.slick-prev {
    float: left
}

.thumbnails.slick-slider > button.slick-prev:before {
    content: "\f112";
    font-family: "woodmart-font"
}

.thumbnails.slick-slider > button.slick-next {
    float: right
}

.thumbnails.slick-slider > button.slick-next:before {
    content: "\f124";
    font-family: "woodmart-font"
}

.wcfm-dashboard-page table th {
    text-transform: none
}

.wcfm-dashboard-page input[type=search] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.wcfm-dashboard-page .select2-container--default .select2-selection {
    border-width: 1px;
    border-color: #ccc;
    border-radius: 3px
}

.wcfm-dashboard-page .select2-container--default .select2-selection--single .select2-selection__rendered {
    margin-left: 8px
}

.wcfm-dashboard-page .select2-container--default.select2-container--focus .select2-selection--multiple {
    border-width: 1px
}

.wcfm-dashboard-page .wp-color-result.button {
    border: 1px solid #ccc
}

.wcfm-dashboard-page .add_new_wcfm_ele_dashboard,.wcfm-dashboard-page .wcfm_import_export {
    font-weight: 400 !important
}

.wcfm-dashboard-page .media-toolbar input[type=search] {
    height: auto
}

.wcfm-dashboard-page .ui-datepicker-title select {
    padding-right: 15px;
    background-image: none
}

.wcfm-dashboard-page .media-modal-close {
    position: absolute;
    padding: 0;
    background-color: transparent
}

.wcfm-dashboard-page #wcfm-main-contentainer .select2-search input {
    line-height: 1 !important
}

.wcfm_product_popup_button_wrapper {
    right: 85px;
    bottom: 12px
}

.wcfm_buttons {
    top: 15px;
    left: 15px;
    z-index: 100;
    border-radius: 0
}

.wcfm_buttons .wcfm_button {
    height: 30px
}

.product-grid-item .wcfm_buttons {
    top: 0;
    opacity: 0
}

.product-grid-item:hover .wcfm_buttons {
    opacity: 1
}

.wcfm-store-page .row {
    margin-left: -15px;
    margin-right: -15px
}

.wcfm-store-page .woodmart-products-holder {
    margin-top: 20px
}

.wcfm-store-page .product-grid-item {
    padding-right: 15px;
    padding-left: 15px
}

#wcfmmp-store .woodmart-hover-base .hover-content-inner p {
    padding-bottom: 0;
    line-height: 22px
}

.wcfmmp_sold_by_wrapper,.post-type-archive-product .wcfmmp_sold_by_container .wcfmmp-store-rating {
    margin-bottom: 5px
}

.woodmart-hover-standard .wcfmmp_sold_by_container,.woodmart-hover-quick .wcfmmp_sold_by_container,.woodmart-hover-icons .wcfmmp_sold_by_container,.woodmart-hover-button .wcfmmp_sold_by_container,.woodmart-hover-info-alt .wcfmmp_sold_by_container,.woodmart-hover-tiled .wcfmmp_sold_by_container {
    margin-top: 5px
}

.woodmart-hover-info-alt .wcfmmp_sold_by_container {
    color: #fff
}

.woodmart-hover-info .wcfmmp_sold_by_container,.woodmart-hover-alt .wcfmmp_sold_by_container {
    display: none
}

.product-quick-view .wcfmmp-store-rating,.woodmart-hover-tiled .wcfmmp-store-rating {
    margin-left: 0 !important
}

.product-quick-view .wcfmmp_sold_by_container {
    margin-bottom: 15px
}

.wcfmmp-store-product-search input[type=search] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

#wcfmmp-store .sidebar_heading {
    margin-bottom: 20px
}

#wcfmmp-store .widget_product_categories .cat-item {
    padding: 0
}

.wcfm_ele_wrapper {
    margin-top: 0
}

a.wcfm_catalog_enquiry,span.add_enquiry,a.wcfm_follow_me,a.wcfm_chat_now_button {
    display: inline-block;
    float: none;
    margin-top: 0
}

.wcppec-checkout-buttons {
    margin: 0
}

.product-design-default .wcppec-checkout-buttons {
    text-align: left
}

.woodmart-sticky-btn-container .wcppec-checkout-buttons {
    margin-left: 10px
}

.wcppec-checkout-buttons__button {
    padding-top: 0
}

.single-product-page .wcppec-checkout-buttons {
    margin-bottom: 25px
}

.wcppec-checkout-buttons__button {
    display: inline-block;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px
}

.cart-totals-inner .wcppec-checkout-buttons {
    text-align: center
}

.cart-totals-inner .wcppec-checkout-buttons a:not(:last-child) {
    margin-bottom: 10px
}

.cart-totals-inner .wcppec-checkout-buttons__separator {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #333;
    font-weight: 600;
    font-size: 16px
}

body .select2-container--default {
    min-height: 42px
}

body .select2-container--default .select2-selection {
    border: 2px solid rgba(129,129,129,.2);
    border-radius: 0;
    background-color: transparent;
    -webkit-transition: border-color .4s ease;
    transition: border-color .4s ease
}

body .select2-container--default .select2-selection:focus {
    outline: none
}

body .select2-container--default .select2-selection--single {
    padding: 0 15px;
    height: 42px;
    text-align: left;
    font-size: 14px;
    line-height: 38px
}

body .select2-container--default .select2-selection--single .select2-selection__rendered {
    display: inline;
    padding-right: 0 !important;
    padding-left: 0 !important;
    color: #777;
    line-height: 1.4
}

body .select2-container--default .select2-selection--single .select2-selection__placeholder {
    color: inherit
}

body .select2-container--default .select2-selection--single .select2-selection__arrow {
    top: 8px;
    right: 10px !important;
    background-position: right 1px top 50%;
    background-size: auto 18px;
    background-repeat: no-repeat
}

body .select2-container--default .select2-selection--single .select2-selection__arrow b {
    display: none
}

body .select2-container--default .select2-selection--single .select2-selection__clear {
    position: absolute;
    top: 10px;
    right: 35px;
    color: #bbb
}

body .select2-container--default .select2-selection--multiple {
    min-height: 42px
}

body .select2-container--default .select2-selection--multiple .select2-selection__rendered {
    display: block;
    margin-bottom: 9px;
    padding: 0 15px
}

body .select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-selection__choice {
    margin-top: 9px;
    margin-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 8px;
    padding-left: 6px;
    border: none;
    border-radius: 0;
    background-color: #f1f1f1;
    color: #333;
    font-weight: 600;
    font-size: 12px
}

body .select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-selection__choice__remove {
    margin-top: -2px;
    margin-right: 4px;
    color: inherit;
    font-size: 16px;
    line-height: 12px
}

body .select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-search--inline {
    display: inline-block;
    margin: 0;
    margin-top: 9px;
    line-height: 1
}

body .select2-container--default .select2-selection--multiple .select2-selection__rendered .select2-search--inline input {
    height: auto
}

body .select2-container--default .select2-search--dropdown {
    position: relative;
    padding: 18px;
    border-bottom: 2px solid rgba(129,129,129,.2);
    background-color: #f9f9f9
}

body .select2-container--default .select2-search--dropdown .select2-search__field {
    padding: 0 15px;
    height: 42px;
    border: 2px solid rgba(129,129,129,.2);
    background-color: #fff;
    background-image: none;
    color: #777
}

body .select2-container--default .select2-search--dropdown:after {
    position: absolute;
    top: 50%;
    right: 30px;
    margin-top: -9px;
    color: #8c8c8c;
    font-size: 18px;
    line-height: 18px;
    content: "\f125";
    font-family: "woodmart-font"
}

body .select2-container--default .select2-results__option--highlighted[aria-selected] {
    background-color: #f2f2f2;
    color: #333
}

body .select2-container--default .select2-results__option[aria-selected=true] {
    color: #fff;
    font-weight: 600
}

body .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

body .select2-container--default .select2-dropdown {
    border-width: 2px;
    border-color: rgba(129,129,129,.2);
    border-radius: 0;
    background-color: #fff
}

body .select2-container--default .select2-results__option {
    padding: 10px 18px
}

body .select2-container--default .select2-results__option:focus {
    outline: none
}

body .select2-container--default.select2-container--focus .select2-selection--multiple {
    border-width: 2px;
    border-color: rgba(129,129,129,.3)
}

body .wp-playlist-item,.menu-item-register .login-title,.login-form-side .woocommerce-form-login,.login-form-side .create-account-question,.autocomplete-suggestion,.view-all-results,.woodmart-search-full-screen .searchform,.copyrights-wrapper,.mobile-nav .create-nav-msg,.comments-area .comment,.comments-area .children,.comments-area .logged-in-as > a:not(:last-child),.widget,.mobile-menu-widget,.widget-heading,.woodmart-recent-posts li,.widget_rss ul li,.widget_tag_cloud .tagcloud a,.widget_product_tag_cloud .tagcloud a,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion.vc_tta-color-white .vc_tta-panel,.woodmart-title-style-bordered .left-line,.woodmart-title-style-bordered .right-line,.popup-quick-view .entry-summary .product_meta,.widget_product_categories .count,.product_list_widget > li,.widget_shopping_cart .total,.woodmart-woocommerce-layered-nav .count,.products-bordered-grid.elements-grid,.products-bordered-grid .owl-stage-outer,.products-bordered-grid div.owl-carousel:not(.owl-loaded),.woodmart-clear-filters-wrapp,.filters-area,.single-product-sidebar.sidebar-right,.single-product-sidebar.sidebar-left,.meta-location-add_to_cart .product_meta,.product-tabs-wrapper,.tabs-location-standard.reviews-location-separate.tabs-type-tabs .woocommerce-tabs,.commentlist > li,.woodmart-product-instagram,.woocommerce-shipping-fields,.woocommerce-terms-and-conditions-wrapper,.woocommerce-terms-and-conditions-wrapper .woocommerce-privacy-policy-text,#customer_login > div:not(:first-child):last-child,.lost_reset_password .form-row-first,.social-login-title:after,.social-login-title:before,.register-or:after,.register-or:before,.woodmart-my-account-sidebar,.woodmart-my-account-sidebar .sidebar-container,.woocommerce-MyAccount-content > p:not(.woocommerce-Message):first-child,.woocommerce-MyAccount-title,.woocommerce-thankyou-order-details li,.wc-bacs-bank-details li,.woodmart-pf-price-range .filter_price_slider_amount,.brands-style-bordered .brand-item,.brands-style-bordered.brands-carousel .owl-stage-outer,.brands-style-bordered.brands-carousel .owl-carousel:not(.owl-loaded),.brands-style-bordered.brands-list .brand-item > a {
    border-color: rgba(129,129,129,.2)
}

.color-scheme-light .autocomplete-suggestion,.color-scheme-light .products-bordered-grid.elements-grid,.color-scheme-light .products-bordered-grid .owl-stage-outer,.color-scheme-light .products-bordered-grid .owl-carousel:not(.owl-loaded) {
    border-color: rgba(255,255,255,.15)
}

.whb-color-dark .navigation-style-default .item-level-0:hover > a,.whb-color-dark .navigation-style-default .item-level-0.current-menu-item > a,a:hover,h1 a:hover,h2 a:hover,h3 a:hover,h4 a:hover,h5 a:hover,h6 a:hover,blockquote footer:before,blockquote cite,blockquote cite a,.site-mobile-menu li.current-menu-item > a,.site-mobile-menu .sub-menu li.current-menu-item > a,.comments-area .reply a,.comments-area .reply a:hover,.comments-area .logged-in-as > a:hover,.error404 .page-title,.not-found .entry-header:before {
    color: #7eb934
}

.menu-opener:not(.has-bg),.menu-label-primary,.mobile-nav-tabs .mobile-tab-title:after,.icon-sub-menu.up-icon,.widget_tag_cloud .tagcloud a:hover,.widget_tag_cloud .tagcloud a:focus,.widget_product_tag_cloud .tagcloud a:hover,.widget_product_tag_cloud .tagcloud a:focus {
    background-color: #7eb934
}

blockquote,.menu-label-primary:before,.widget_tag_cloud .tagcloud a:hover,.widget_tag_cloud .tagcloud a:focus,.widget_product_tag_cloud .tagcloud a:hover,.widget_product_tag_cloud .tagcloud a:focus {
    border-color: #7eb934
}

.menu-label-secondary {
    background-color: #fbbc34
}

.menu-label-secondary:before {
    border-color: #fbbc34
}

.woodmart-hover-base .hover-content table th,.product-image-summary .shop_attributes th,.woocommerce-product-details__short-description table th,body,.font-text,.menu-item-register .create-account-link,.menu-label,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-accordion .vc_tta-panel-title {
    font-family: "lato",Arial,Helvetica,sans-serif
}

.menu-mega-dropdown .sub-menu > li > a,.mega-menu-list > li > a,h1,h2,h3,h4,h5,h6,.title,legend,.woocommerce-Reviews .comment-reply-title,.font-primary,table th,.page-title .entry-title,.widget_rss ul li > a,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab > a,.woocommerce-column__title,header.title > h3,.tabs-layout-tabs .tabs li,.woodmart-accordion-title,.woodmart-checkout-steps ul,.woocommerce-billing-fields > h3,.woocommerce-shipping-fields > h3,.woocommerce-additional-fields > h3,#ship-to-different-address label,#order_review_heading,.cart-empty,.cart-totals-inner h2,.social-login-title,.register-or,.woocommerce-MyAccount-title,.woodmart-products-tabs .tabs-name,.woodmart-products-tabs .products-tabs-title {
    font-family: "Poppins",Arial,Helvetica,sans-serif
}

.autocomplete-suggestion .suggestion-title,.widget_recent_entries ul li a,.widget_recent_comments ul li > a,.woodmart-recent-posts .entry-title a,.group_table td.label a,.product-grid-item .product-title,.product-title,td.product-name a,.category-grid-item .category-title,.product-image-summary .entry-title {
    font-family: "Poppins","MS Sans Serif",Geneva,sans-serif
}

.main-nav-style,.menu-opener,.categories-menu-dropdown .item-level-0 > a,.woodmart-burger-icon .woodmart-burger-label,.woodmart-shopping-cart .woodmart-cart-totals,.woodmart-header-links .item-level-0 > a,.main-nav .item-level-0 > a,.whb-secondary-menu .item-level-0 > a,.full-screen-nav .item-level-0 > a {
    font-family: "lato",Arial,Helvetica,sans-serif
}

.font-alt {
    font-family: "Courgette","Comic Sans MS",cursive
}

select,body .select2-container--default .select2-selection--single .select2-selection__arrow {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)
}

.color-scheme-light select {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSI+PHBhdGggZD0iTTYgOWw2IDYgNi02Ii8+PC9zdmc+)
}

.site-logo,.header-categories-nav,.search-button > a,.whb-column .woodmart-search-form,.woodmart-burger-icon,.whb-column > .woodmart-button-wrapper,.whb-column > .woodmart-social-icons,.whb-column > .info-box-wrapper,.whb-text-element,.whb-html-block-element,.woodmart-shopping-cart > a {
    padding-right: 10px;
    padding-left: 10px
}

h1,h2,h3,h4,h5,h6,.title,legend,.woocommerce-Reviews .comment-reply-title {
    display: block;
    margin-bottom: 20px;
    color: #2d2a2a;
    font-weight: 600;
    line-height: 1.4
}

legend,.element-title,.comments-area .comments-title,.comments-area .comment-reply-title,.slider-title,.woocommerce-column__title,header.title > h3,.woodmart-checkout-steps ul,.woocommerce-billing-fields > h3,.woocommerce-shipping-fields > h3,.woocommerce-additional-fields > h3,#ship-to-different-address label,#order_review_heading,.cart-totals-inner h2,.cross-sells > h2,.col-login > h2,.col-register > h2,.col-register-text > h2,.woocommerce-MyAccount-content > h2,.woocommerce-MyAccount-content header > h2,.woodmart-products-tabs .tabs-name {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px
}

.autocomplete-suggestion .suggestion-title,.widget_recent_entries ul li a,.widget_recent_comments ul li > a,.woodmart-recent-posts .entry-title a,.group_table td.label a,.product-grid-item .product-title,.product-title {
    word-wrap: break-word;
    font-weight: 500;
    line-height: 1.3
}

.widget_recent_reviews .product-title,.widget_shopping_cart .product-title {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.widget_recent_reviews .product-title,td.product-name a,a.product-title,.color-scheme-dark .widget a.product-title,.color-scheme-dark .woodmart-widget a.product-title,.color-scheme-dark div[class^=vc_wp] a.product-title,.autocomplete-suggestion .suggestion-title,.widget_recent_entries ul li a,.widget_recent_comments ul li > a,.woodmart-recent-posts .entry-title a,.group_table td.label a,.product-grid-item .product-title,.product-title {
    color: #333
}

.widget_recent_entries ul li a:hover,.widget_recent_comments ul li > a:hover,.woodmart-recent-posts .entry-title a:hover,.widget_recent_reviews .product-title:hover,td.product-name a:hover,.group_table td.label a:hover,a.product-title:hover,.product-grid-item .product-title a:hover,.color-scheme-dark .widget a.product-title:hover,.color-scheme-dark .woodmart-widget a.product-title:hover,.color-scheme-dark div[class^=vc_wp] a.product-title:hover,.widget_shopping_cart .mini_cart_item:hover .product-title,.product-title a:hover {
    color: rgba(51,51,51,.7)
}

.color-scheme-light .widget_recent_entries ul li a,.color-scheme-light .widget_recent_comments ul li > a,.color-scheme-light .woodmart-recent-posts .entry-title a,.color-scheme-light .widget_recent_reviews .product-title,.color-scheme-light td.product-name a,.color-scheme-light .widget a.product-title,.color-scheme-light .woodmart-widget a.product-title,.color-scheme-light div[class^=vc_wp] a.product-title,.color-scheme-light a.product-title,.color-scheme-light .autocomplete-suggestion .suggestion-title,.color-scheme-light .product-grid-item .product-title,.woodmart-hover-info-alt h3.product-title,.color-scheme-light .product-title {
    color: #fff
}

.color-scheme-light .widget_recent_entries ul li a:hover,.color-scheme-light .widget_recent_comments ul li > a:hover,.color-scheme-light .woodmart-recent-posts .entry-title a:hover,.color-scheme-light .widget_recent_reviews .product-title:hover,.color-scheme-light td.product-name a:hover,.color-scheme-light div[class^=vc_wp] a.product-title:hover,.color-scheme-light a.product-title:hover,.color-scheme-light .product-grid-item .product-title a:hover,.woodmart-hover-info-alt h3.product-title a:hover,.color-scheme-light .widget_shopping_cart .mini_cart_item:hover .product-title,.dropdowns-color-light .dropdown-cart .mini_cart_item:hover .product-title,.dropdowns-color-light .cart-widget-side .mini_cart_item:hover .product-title,.color-scheme-light .product-title a:hover {
    color: rgba(255,255,255,.8)
}

.dropdowns-color-light .cart-widget-side .widget-heading,.dropdowns-color-light .login-form-side .widget-heading {
    border-color: rgba(255,255,255,.15)
}

.dropdowns-color-light .cart-widget-side .widget-heading .widget-title,.dropdowns-color-light .login-form-side .widget-heading .widget-title {
    color: #fff
}

.dropdowns-color-light .cart-widget-side .close-side-widget,.dropdowns-color-light .login-form-side .close-side-widget {
    color: #fff
}

.platform-Windows .woodmart-search-opened .header-banner,.platform-Windows .full-screen-menu-open .header-banner,.platform-Windows .woodmart-search-opened .whb-row,.platform-Windows .full-screen-menu-open .whb-row,.platform-Windows .woodmart-search-opened .main-page-wrapper,.platform-Windows .full-screen-menu-open .main-page-wrapper {
    padding-right: 17px
}

div.wpcf7-response-output,.woocommerce-error,.woocommerce-message,.woocommerce-info {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 80px;
    padding-left: 65px;
    min-height: 60px;
    border: none;
    color: #fff;
    line-height: 1.3
}

div.wpcf7-response-output:before,.woocommerce-error:before,.woocommerce-message:before,.woocommerce-info:before {
    position: absolute;
    top: 50%;
    left: 24px;
    margin-top: -9px;
    font-size: 18px;
    font-family: "FontAwesome";
    line-height: 18px
}

div.wpcf7-response-output a,.woocommerce-error a,.woocommerce-message a,.woocommerce-info a {
    color: #fff;
    text-decoration: underline
}

div.wpcf7-response-output a:hover,.woocommerce-error a:hover,.woocommerce-message a:hover,.woocommerce-info a:hover {
    color: rgba(255,255,255,.8)
}

div.wpcf7-response-output .amount,.woocommerce-error .amount,.woocommerce-message .amount,.woocommerce-info .amount {
    color: #fff
}

div.wpcf7-response-output > *,.woocommerce-error > *,.woocommerce-message > *,.woocommerce-info > * {
    margin-right: 10px;
    margin-left: 10px
}

div.wpcf7-response-output .button,.woocommerce-error .button,.woocommerce-message .button,.woocommerce-info .button,div.wpcf7-response-output .wc-backward,.woocommerce-error .wc-backward,.woocommerce-message .wc-backward,.woocommerce-info .wc-backward {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0;
    border: none;
    border-bottom: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600
}

div.wpcf7-response-output .button:hover,.woocommerce-error .button:hover,.woocommerce-message .button:hover,.woocommerce-info .button:hover,div.wpcf7-response-output .wc-backward:hover,.woocommerce-error .wc-backward:hover,.woocommerce-message .wc-backward:hover,.woocommerce-info .wc-backward:hover {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .7
}

div.wpcf7-response-output .button:focus,.woocommerce-error .button:focus,.woocommerce-message .button:focus,.woocommerce-info .button:focus,div.wpcf7-response-output .wc-backward:focus,.woocommerce-error .wc-backward:focus,.woocommerce-message .wc-backward:focus,.woocommerce-info .wc-backward:focus {
    -webkit-box-shadow: none;
    box-shadow: none
}

div.wpcf7-response-output .vc_message_box-icon,.woocommerce-error .vc_message_box-icon,.woocommerce-message .vc_message_box-icon,.woocommerce-info .vc_message_box-icon {
    display: none
}

div.wpcf7-validation-errors,div.wpcf7-mail-sent-ng,.woocommerce-error,.woocommerce-info {
    background-color: #e0b252
}

div.wpcf7-validation-errors:before,div.wpcf7-mail-sent-ng:before,.woocommerce-error:before,.woocommerce-info:before {
    content: "\f071"
}

.wpcf7-mail-sent-ok,.woocommerce-message {
    background-color: #459647
}

.wpcf7-mail-sent-ok:before,.woocommerce-message:before {
    content: "\f00c"
}

.notifications-sticky div.wpcf7-response-output,.notifications-sticky .woocommerce-error,.notifications-sticky .woocommerce-message,.notifications-sticky .woocommerce-info {
    position: fixed;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    margin: 0;
    cursor: pointer;
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0);
    -webkit-animation: wd-fadeInUpBig .35s ease .5s both;
    animation: wd-fadeInUpBig .35s ease .5s both
}

.notifications-sticky div.wpcf7-response-output:after,.notifications-sticky .woocommerce-error:after,.notifications-sticky .woocommerce-message:after,.notifications-sticky .woocommerce-info:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 60px;
    background-color: rgba(0,0,0,.1);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
    content: "\f10f";
    font-family: "woodmart-font"
}

.notifications-sticky div.hidden-notice.wpcf7-response-output,.notifications-sticky .hidden-notice.woocommerce-error,.notifications-sticky .hidden-notice.woocommerce-message,.notifications-sticky .hidden-notice.woocommerce-info {
    -webkit-animation: wd-fadeOutDownBig .35s ease both;
    animation: wd-fadeOutDownBig .35s ease both
}

.notifications-sticky div.wpcf7-response-output:hover:after,.notifications-sticky .woocommerce-error:hover:after,.notifications-sticky .woocommerce-message:hover:after,.notifications-sticky .woocommerce-info:hover:after {
    background-color: rgba(0,0,0,.2)
}

.search-no-results.woocommerce .woocommerce-info,.woocommerce-checkout .woocommerce [role=alert],.woocommerce-form-coupon-toggle > .woocommerce-info,.woocommerce-form-login-toggle > .woocommerce-info,.woocommerce-cart .woocommerce-notices-wrapper [role=alert],.woocommerce-MyAccount-content .woocommerce-message[role=alert] {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: auto;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding-right: 30px;
    max-width: 100%;
    width: 100%;
    cursor: default;
    -webkit-transform: none;
    transform: none;
    -webkit-animation: none;
    animation: none
}

.search-no-results.woocommerce .woocommerce-info:after,.woocommerce-checkout .woocommerce [role=alert]:after,.woocommerce-form-coupon-toggle > .woocommerce-info:after,.woocommerce-form-login-toggle > .woocommerce-info:after,.woocommerce-cart .woocommerce-notices-wrapper [role=alert]:after,.woocommerce-MyAccount-content .woocommerce-message[role=alert]:after {
    content: none
}

.search-no-results.woocommerce .hidden-notice.woocommerce-info,.woocommerce-checkout .woocommerce .hidden-notice[role=alert],.woocommerce-form-coupon-toggle > .hidden-notice.woocommerce-info,.woocommerce-form-login-toggle > .hidden-notice.woocommerce-info,.woocommerce-cart .woocommerce-notices-wrapper .hidden-notice[role=alert],.woocommerce-MyAccount-content .hidden-notice.woocommerce-message[role=alert] {
    -webkit-animation: none;
    animation: none
}

.whb-color-light .navigation-style-default .item-level-0 > a,.whb-color-light .navigation-style-underline .item-level-0 > a,.whb-color-light .navigation-style-separated .item-level-0 > a,.whb-color-light .navigation-style-bordered .item-level-0 > a,.full-screen-nav .item-level-0 > a {
    color: #fff
}

.whb-color-light .navigation-style-default .item-level-0 > a:after,.whb-color-light .navigation-style-underline .item-level-0 > a:after,.whb-color-light .navigation-style-separated .item-level-0 > a:after,.whb-color-light .navigation-style-bordered .item-level-0 > a:after,.full-screen-nav .item-level-0 > a:after {
    color: rgba(255,255,255,.6)
}

.whb-color-light .navigation-style-default .item-level-0:hover > a,.whb-color-light .navigation-style-underline .item-level-0:hover > a,.whb-color-light .navigation-style-separated .item-level-0:hover > a,.whb-color-light .navigation-style-bordered .item-level-0:hover > a,.full-screen-nav .item-level-0:hover > a {
    color: rgba(255,255,255,.8)
}

.whb-color-light .navigation-style-default .item-level-0.current-menu-item > a,.whb-color-light .navigation-style-underline .item-level-0.current-menu-item > a,.whb-color-light .navigation-style-separated .item-level-0.current-menu-item > a,.whb-color-light .navigation-style-bordered .item-level-0.current-menu-item > a,.full-screen-nav .item-level-0.current-menu-item > a {
    color: #fff
}

.navigation-style-default .menu-mega-dropdown .color-scheme-light .sub-menu > li > a,.navigation-style-underline .menu-mega-dropdown .color-scheme-light .sub-menu > li > a,.navigation-style-separated .menu-mega-dropdown .color-scheme-light .sub-menu > li > a,.navigation-style-bordered .menu-mega-dropdown .color-scheme-light .sub-menu > li > a,.vertical-navigation .menu-mega-dropdown .color-scheme-light .sub-menu > li > a,.full-screen-nav .menu-mega-dropdown .sub-menu > li > a {
    color: #fff
}

.navigation-style-default .menu-mega-dropdown .color-scheme-light .sub-menu > li > a:hover,.navigation-style-underline .menu-mega-dropdown .color-scheme-light .sub-menu > li > a:hover,.navigation-style-separated .menu-mega-dropdown .color-scheme-light .sub-menu > li > a:hover,.navigation-style-bordered .menu-mega-dropdown .color-scheme-light .sub-menu > li > a:hover,.vertical-navigation .menu-mega-dropdown .color-scheme-light .sub-menu > li > a:hover,.full-screen-nav .menu-mega-dropdown .sub-menu > li > a:hover {
    color: rgba(255,255,255,.8)
}

.navigation-style-default .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a,.navigation-style-underline .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a,.navigation-style-separated .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a,.navigation-style-bordered .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a,.vertical-navigation .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a,.full-screen-nav .menu-mega-dropdown .sub-sub-menu li a {
    color: rgba(255,255,255,.6)
}

.navigation-style-default .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a:hover,.navigation-style-underline .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a:hover,.navigation-style-separated .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a:hover,.navigation-style-bordered .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a:hover,.vertical-navigation .menu-mega-dropdown .color-scheme-light .sub-sub-menu li a:hover,.full-screen-nav .menu-mega-dropdown .sub-sub-menu li a:hover {
    color: #fff
}

.whb-color-dark .navigation-style-default .item-level-0 > a {
    color: #333
}

.whb-color-dark .navigation-style-default .item-level-0 > a:after {
    color: rgba(82,82,82,.45)
}

.woodmart-header-links .color-scheme-dark li a,.navigation-style-default .menu-simple-dropdown .color-scheme-dark li a,.navigation-style-separated .menu-simple-dropdown .color-scheme-dark li a,.navigation-style-bordered .menu-simple-dropdown .color-scheme-dark li a,.vertical-navigation .menu-simple-dropdown li a {
    color: #777
}

.woodmart-header-links .color-scheme-dark li a:hover,.navigation-style-default .menu-simple-dropdown .color-scheme-dark li a:hover,.navigation-style-separated .menu-simple-dropdown .color-scheme-dark li a:hover,.navigation-style-bordered .menu-simple-dropdown .color-scheme-dark li a:hover,.vertical-navigation .menu-simple-dropdown li a:hover {
    background-color: #f9f9f9;
    color: #777
}

.navigation-style-default .menu-mega-dropdown .color-scheme-dark .sub-menu > li > a,.navigation-style-separated .menu-mega-dropdown .color-scheme-dark .sub-menu > li > a,.navigation-style-bordered .menu-mega-dropdown .color-scheme-dark .sub-menu > li > a,.vertical-navigation .menu-mega-dropdown .sub-menu > li > a {
    color: #2d2a2a
}

.navigation-style-default .menu-mega-dropdown .color-scheme-dark .sub-sub-menu li a,.navigation-style-separated .menu-mega-dropdown .color-scheme-dark .sub-sub-menu li a,.navigation-style-bordered .menu-mega-dropdown .color-scheme-dark .sub-sub-menu li a,.vertical-navigation .menu-mega-dropdown .sub-sub-menu li a {
    color: #777
}

.woodmart-header-links .color-scheme-light li a,.navigation-style-default .menu-simple-dropdown .color-scheme-light li a,.navigation-style-separated .menu-simple-dropdown .color-scheme-light li a,.navigation-style-bordered .menu-simple-dropdown .color-scheme-light li a,.vertical-navigation .menu-simple-dropdown .color-scheme-light li a {
    color: rgba(255,255,255,.8)
}

.woodmart-header-links .color-scheme-light li a:hover,.navigation-style-default .menu-simple-dropdown .color-scheme-light li a:hover,.navigation-style-separated .menu-simple-dropdown .color-scheme-light li a:hover,.navigation-style-bordered .menu-simple-dropdown .color-scheme-light li a:hover,.vertical-navigation .menu-simple-dropdown .color-scheme-light li a:hover {
    background-color: rgba(255,255,255,.08);
    color: #fff
}

.whb-color-dark .navigation-style-underline .item-level-0 > a {
    color: #333
}

.whb-color-dark .navigation-style-underline .item-level-0 > a:after {
    color: rgba(82,82,82,.45)
}

.whb-color-dark .navigation-style-underline .item-level-0:hover > a {
    color: #333
}

.navigation-style-underline .menu-simple-dropdown .color-scheme-dark li a {
    color: #777
}

.navigation-style-underline .menu-simple-dropdown .color-scheme-dark li a:hover {
    color: #333
}

.navigation-style-underline .menu-mega-dropdown .color-scheme-dark .sub-menu > li > a {
    color: #2d2a2a
}

.navigation-style-underline .menu-mega-dropdown .color-scheme-dark .sub-menu > li > a:hover {
    color: #2d2a2a
}

.navigation-style-underline .menu-mega-dropdown .color-scheme-dark .sub-sub-menu li a {
    color: #777
}

.navigation-style-underline .menu-mega-dropdown .color-scheme-dark .sub-sub-menu li a:hover {
    color: #333
}

.whb-color-light .navigation-style-underline .item-level-0 > a .nav-link-text:after {
    background-color: rgba(255,255,255,.5)
}

.navigation-style-underline .menu-simple-dropdown .color-scheme-light .nav-link-text:after {
    background-color: rgba(255,255,255,.5)
}

.navigation-style-underline .menu-simple-dropdown .color-scheme-light li a {
    color: rgba(255,255,255,.8)
}

.navigation-style-underline .menu-simple-dropdown .color-scheme-light li a:hover {
    color: #fff
}

.navigation-style-underline .menu-mega-dropdown .color-scheme-light .nav-link-text:after {
    background-color: rgba(255,255,255,.5)
}

.whb-color-dark .navigation-style-separated .item-level-0 > a,.whb-color-dark .navigation-style-bordered .item-level-0 > a {
    color: #333
}

.whb-color-dark .navigation-style-separated .item-level-0 > a:after,.whb-color-dark .navigation-style-bordered .item-level-0 > a:after {
    color: rgba(82,82,82,.45)
}

.whb-color-dark .navigation-style-separated .item-level-0:after,.whb-color-dark .navigation-style-bordered .item-level-0:after {
    border-color: rgba(129,129,129,.2)
}

.whb-color-dark .navigation-style-separated .item-level-0:hover > a,.whb-color-dark .navigation-style-bordered .item-level-0:hover > a {
    color: rgba(51,51,51,.6)
}

.whb-color-light .navigation-style-separated .item-level-0:after,.whb-color-light .navigation-style-bordered .item-level-0:after {
    border-color: rgba(255,255,255,.25)
}

.menu-mega-dropdown .sub-menu > li > a,.mega-menu-list > li > a {
    position: relative;
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px
}

.menu-mega-dropdown .sub-menu > li > a .category-icon,.mega-menu-list > li > a .category-icon {
    margin-top: -2px
}

.menu-mega-dropdown .sub-menu > li > a .menu-label,.mega-menu-list > li > a .menu-label {
    margin-bottom: 7px
}

.menu-mega-dropdown .sub-sub-menu li a,.mega-menu-list .sub-sub-menu li a {
    display: block;
    padding: 9px 0;
    font-size: 14px;
    line-height: 18px
}

.menu-mega-dropdown .sub-sub-menu li a .menu-label,.mega-menu-list .sub-sub-menu li a .menu-label {
    margin-bottom: -2px
}

.color-scheme-light .searchform input[type=text],.whb-color-light .search-style-default input[type=text],.woodmart-vc-ajax-search.color-light .searchform input[type=text] {
    border-color: rgba(255,255,255,.5);
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
}

.color-scheme-light .searchform input[type=text]:focus,.whb-color-light .search-style-default input[type=text]:focus,.woodmart-vc-ajax-search.color-light .searchform input[type=text]:focus {
    border-color: rgba(255,255,255,.7)
}

.color-scheme-light .searchform ::-webkit-input-placeholder,.whb-color-light .search-style-default ::-webkit-input-placeholder,.woodmart-vc-ajax-search.color-light .searchform ::-webkit-input-placeholder {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .searchform ::-moz-placeholder,.whb-color-light .search-style-default ::-moz-placeholder,.woodmart-vc-ajax-search.color-light .searchform ::-moz-placeholder {
    color: #fff
}

.color-scheme-light .searchform :-moz-placeholder,.whb-color-light .search-style-default :-moz-placeholder,.woodmart-vc-ajax-search.color-light .searchform :-moz-placeholder {
    color: #fff
}

.color-scheme-light .searchform :-ms-input-placeholder,.whb-color-light .search-style-default :-ms-input-placeholder,.woodmart-vc-ajax-search.color-light .searchform :-ms-input-placeholder {
    color: rgba(255,255,255,.6)
}

.color-scheme-light .searchform .searchsubmit,.whb-color-light .search-style-default .searchsubmit,.woodmart-vc-ajax-search.color-light .searchform .searchsubmit {
    color: #fff
}

.color-scheme-light .searchform .searchsubmit:before,.whb-color-light .search-style-default .searchsubmit:before,.woodmart-vc-ajax-search.color-light .searchform .searchsubmit:before {
    border-left-color: #fff;
    border-color: rgba(255,255,255,.4)
}

.color-scheme-light .searchform .search-by-category .input-dropdown-inner,.whb-color-light .search-style-default .search-by-category .input-dropdown-inner,.woodmart-vc-ajax-search.color-light .search-by-category .input-dropdown-inner {
    border-color: rgba(255,255,255,.5)
}

.color-scheme-light .searchform .search-by-category .input-dropdown-inner > a,.whb-color-light .search-style-default .search-by-category .input-dropdown-inner > a,.woodmart-vc-ajax-search.color-light .search-by-category .input-dropdown-inner > a {
    color: #fff
}

.full-screen-close-icon,#cboxClose,button.mfp-close {
    position: fixed;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 50px;
    background: none;
    background-color: rgba(0,0,0,.3);
    color: #fff;
    text-align: center;
    text-indent: 0;
    font-weight: 400;
    font-size: 0;
    opacity: 1;
    cursor: pointer;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.full-screen-close-icon:after,#cboxClose:after,button.mfp-close:after {
    display: inline-block;
    font-size: 16px;
    line-height: 50px;
    content: "\f10f";
    font-family: "woodmart-font"
}

.full-screen-close-icon:hover,#cboxClose:hover,button.mfp-close:hover {
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff;
    opacity: 1
}

button.mfp-close {
    opacity: 0;
    -webkit-transition: all .25s ease,opacity 0s ease 0s;
    transition: all .25s ease,opacity 0s ease 0s
}

.mfp-ready button.mfp-close {
    opacity: 1;
    -webkit-transition: all .25s ease,opacity .3s ease .35s;
    transition: all .25s ease,opacity .3s ease .35s
}

td.product-remove a,.woocommerce-remove-coupon {
    position: relative;
    display: inline-block;
    padding-right: 0 !important;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    font-size: 0;
    line-height: 30px;
    padding-right: 19px;
    cursor: pointer
}

td.product-remove a:after,.woocommerce-remove-coupon:after,td.product-remove a:before,.woocommerce-remove-coupon:before {
    content: " ";
    position: absolute;
    top: 50%;
    display: inline-block;
    margin-top: -1px;
    width: 13px;
    height: 2px;
    background-color: #000;
    -webkit-transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out;
    transition: background-color .2s ease-in-out,transform .2s ease-in-out,width .2s ease-in-out,-webkit-transform .2s ease-in-out;
    right: 0
}

td.product-remove a:after,.woocommerce-remove-coupon:after {
    -webkit-transform: rotate(-44deg);
    transform: rotate(-44deg)
}

td.product-remove a:before,.woocommerce-remove-coupon:before {
    -webkit-transform: rotate(44deg);
    transform: rotate(44deg)
}

td.product-remove a:hover:after,.woocommerce-remove-coupon:hover:after {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

td.product-remove a:hover:before,.woocommerce-remove-coupon:hover:before {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
}

td.product-remove a:after,.woocommerce-remove-coupon:after,td.product-remove a:before,.woocommerce-remove-coupon:before {
    right: 8px
}

.dropdown-cart,.woodmart-search-dropdown,.sub-menu-dropdown,.menu-simple-dropdown .sub-sub-menu,.vertical-navigation .sub-menu-dropdown,.woodmart-product-categories .children {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .2s ease,visibility .2s ease,-webkit-transform .2s ease;
    transition: opacity .2s ease,visibility .2s ease,-webkit-transform .2s ease;
    transition: opacity .2s ease,visibility .2s ease,transform .2s ease;
    transition: opacity .2s ease,visibility .2s ease,transform .2s ease,-webkit-transform .2s ease;
    pointer-events: none
}

.dropdown-cart:after,.woodmart-search-dropdown:after,.sub-menu-dropdown:after,.menu-simple-dropdown .sub-sub-menu:after,.vertical-navigation .sub-menu-dropdown:after,.woodmart-product-categories .children:after {
    content: "";
    position: absolute
}

.browser-Safari .dropdown-cart,.browser-Safari .woodmart-search-dropdown,.browser-Safari .sub-menu-dropdown,.browser-Safari .menu-simple-dropdown .sub-sub-menu,.menu-simple-dropdown .browser-Safari .sub-sub-menu,.browser-Safari .vertical-navigation .sub-menu-dropdown,.vertical-navigation .browser-Safari .sub-menu-dropdown,.browser-Safari .woodmart-product-categories .children,.woodmart-product-categories .browser-Safari .children {
    visibility: visible
}

.dropdown-cart,.woodmart-search-dropdown,.sub-menu-dropdown,.woodmart-product-categories .children {
    margin: 15px 0 0 0;
    -webkit-transform: translateY(15px) translateZ(0);
    transform: translateY(15px) translateZ(0)
}

.dropdown-cart:after,.woodmart-search-dropdown:after,.sub-menu-dropdown:after,.woodmart-product-categories .children:after {
    top: auto;
    right: 0;
    bottom: 100%;
    left: 0;
    width: auto;
    height: 15px
}

.whb-header-bottom .dropdown-cart,.whb-top-bar .dropdown-cart,.whb-clone .dropdown-cart,.navigation-style-bordered .dropdown-cart,.whb-header-bottom .woodmart-search-dropdown,.whb-top-bar .woodmart-search-dropdown,.whb-clone .woodmart-search-dropdown,.navigation-style-bordered .woodmart-search-dropdown,.whb-header-bottom .sub-menu-dropdown,.whb-top-bar .sub-menu-dropdown,.whb-clone .sub-menu-dropdown,.navigation-style-bordered .sub-menu-dropdown {
    margin: 0
}

.whb-header-bottom .dropdown-cart:after,.whb-top-bar .dropdown-cart:after,.whb-clone .dropdown-cart:after,.navigation-style-bordered .dropdown-cart:after,.whb-header-bottom .woodmart-search-dropdown:after,.whb-top-bar .woodmart-search-dropdown:after,.whb-clone .woodmart-search-dropdown:after,.navigation-style-bordered .woodmart-search-dropdown:after,.whb-header-bottom .sub-menu-dropdown:after,.whb-top-bar .sub-menu-dropdown:after,.whb-clone .sub-menu-dropdown:after,.navigation-style-bordered .sub-menu-dropdown:after {
    height: auto
}

.menu-simple-dropdown .sub-sub-menu,.vertical-navigation .sub-menu-dropdown {
    margin: 0;
    -webkit-transform: translateX(-15px) translateZ(0);
    transform: translateX(-15px) translateZ(0)
}

.menu-simple-dropdown .sub-sub-menu:after,.vertical-navigation .sub-menu-dropdown:after {
    top: 0;
    right: 100%;
    bottom: 0;
    left: auto;
    width: 2px;
    height: auto
}

.woodmart-shopping-cart:hover > .dropdown-cart,.woodmart-shopping-cart.display-widget > .dropdown-cart,.woodmart-header-links .opened > .sub-menu-dropdown,.search-button:hover .woodmart-search-dropdown,.item-event-hover:hover > .sub-menu-dropdown,.item-menu-opened > .sub-menu-dropdown,.menu-simple-dropdown li:hover > ul,.woodmart-product-categories li:hover > .children {
    visibility: visible;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    pointer-events: visible;
    pointer-events: unset
}

.cart-widget-side,.login-form-side,.mobile-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 500;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: 340px;
    background-color: #fff;
    -webkit-transition: -webkit-transform .25s ease;
    transition: -webkit-transform .25s ease;
    transition: transform .25s ease;
    transition: transform .25s ease, -webkit-transform .25s ease
}

.dropdowns-color-light .cart-widget-side,.dropdowns-color-light .login-form-side,.dropdowns-color-light .mobile-nav {
    background-color: #101010
}

.slide-from-left {
    right: auto;
    left: 0;
    -webkit-transform: translate3d(-340px, 0, 0);
    transform: translate3d(-340px, 0, 0)
}

.cart-widget-side,.login-form-side,.slide-from-right {
    right: 0;
    left: auto;
    -webkit-transform: translate3d(340px, 0, 0);
    transform: translate3d(340px, 0, 0)
}

aside.sidebar-container.show-hidden-sidebar,.cart-widget-side.woodmart-cart-opened,.login-form-side.woodmart-login-side-opened,.mobile-nav.act-mobile-menu {
    -webkit-transform: none;
    transform: none
}

.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tabs-container {
    mask-image: linear-gradient(to left, transparent 5px, #000 40px);
    -webkit-mask-image: linear-gradient(to left, transparent 5px, #000 40px)
}

.popup-quick-view .entry-summary {
    mask-image: linear-gradient(to top, transparent 5px, #000 40px);
    -webkit-mask-image: linear-gradient(to top, transparent 5px, #000 40px)
}

.navigation-style-underline .nav-link-text,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab .vc_tta-title-text,.woodmart-products-tabs.tabs-design-default .products-tabs-title .tab-label,.woodmart-products-tabs.tabs-design-alt .products-tabs-title .tab-label {
    position: relative;
    display: inline-block;
    padding-top: 1px;
    padding-bottom: 1px
}

.navigation-style-underline .nav-link-text:after,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab .vc_tta-title-text:after,.category-nav-link .category-name:after,.woodmart-checkout-steps ul li span:after,.woodmart-products-tabs.tabs-design-default .products-tabs-title .tab-label:after,.woodmart-products-tabs.tabs-design-alt .products-tabs-title .tab-label:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    transition: width .4s cubic-bezier(0.175, 0.885, 0.32, 1.15)
}

.navigation-style-underline .item-level-0:hover > a .nav-link-text:after,.navigation-style-underline .item-level-0.current-menu-item > a .nav-link-text:after,.navigation-style-underline .sub-menu a:hover .nav-link-text:after,.navigation-style-underline .sub-sub-menu a:hover .nav-link-text:after,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab > a:hover .vc_tta-title-text:after,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tab.vc_active .vc_tta-title-text:after,.woodmart-product-categories .category-nav-link > a:hover .category-name:after,.woodmart-product-categories .category-nav-link > a:focus .category-name:after,.woodmart-product-categories .current-cat > .category-nav-link .category-name:after,.woodmart-checkout-steps ul .step-active span:after,.woodmart-products-tabs.tabs-design-default .products-tabs-title li:hover .tab-label:after,.woodmart-products-tabs.tabs-design-default .products-tabs-title li.active-tab-title .tab-label:after,.woodmart-products-tabs.tabs-design-alt .products-tabs-title li:hover .tab-label:after,.woodmart-products-tabs.tabs-design-alt .products-tabs-title li.active-tab-title .tab-label:after {
    width: 100%
}

.whb-top-bar .woodmart-navigation .item-level-0 > a .menu-label,.whb-clone .woodmart-navigation .item-level-0 > a .menu-label,.vertical-navigation .item-level-0 > a .menu-label,.site-mobile-menu li a .menu-label {
    position: static;
    margin-left: 5px;
    opacity: 1
}

.whb-top-bar .woodmart-navigation .item-level-0 > a .menu-label:before,.whb-clone .woodmart-navigation .item-level-0 > a .menu-label:before,.vertical-navigation .item-level-0 > a .menu-label:before,.site-mobile-menu li a .menu-label:before {
    content: none
}

.woodmart-hover-base .hover-content table th,.product-image-summary .shop_attributes th,.woocommerce-product-details__short-description table th {
    font-weight: 600
}

.woodmart-hover-base .hover-content table td,.product-image-summary .shop_attributes td,.woocommerce-product-details__short-description table td,.woodmart-hover-base .hover-content table th,.product-image-summary .shop_attributes th,.woocommerce-product-details__short-description table th {
    padding: 5px 5px;
    border-bottom-style: dashed
}

.woodmart-hover-base .hover-content table tr td:last-child,.product-image-summary .shop_attributes tr td:last-child,.woocommerce-product-details__short-description table tr td:last-child {
    text-align: right
}

.woodmart-hover-base .hover-content table tr:last-child td,.product-image-summary .shop_attributes tr:last-child td,.woocommerce-product-details__short-description table tr:last-child td,.woodmart-hover-base .hover-content table tr:last-child th,.product-image-summary .shop_attributes tr:last-child th,.woocommerce-product-details__short-description table tr:last-child th {
    border-bottom: none
}

.woodmart-hover-base .hover-content table p,.product-image-summary .shop_attributes p,.woocommerce-product-details__short-description table p {
    margin-bottom: 0;
    line-height: inherit
}

.unordered-list,.order-list,.comments-area .comment-body ul,.comments-area .comment-body ol,.wc-tab-inner > div > ol,.wc-tab-inner > div > ul,.woocommerce-product-details__short-description > ol,.woocommerce-product-details__short-description > ul,.hover-content-inner > ol,.hover-content-inner > ul,.woodmart-entry-content > ol,.woodmart-entry-content > ul,.wpb_text_column .wpb_wrapper > ol,.wpb_text_column .wpb_wrapper > ul,.woodmart-text-block > ol,.woodmart-text-block > ul,.portfolio-single-content > ol,.portfolio-single-content > ul,.woocommerce-terms-and-conditions > ol,.woocommerce-terms-and-conditions > ul,.entry-content > ol,.entry-content > ul,.header-banner-container > ol,.header-banner-container > ul,.vc_toggle_content > ol,.vc_toggle_content > ul,.textwidget > ul:not(.menu),.textwidget > ol:not(.menu) {
    margin-bottom: 20px;
    padding-left: 20px;
    text-align: left
}

.unordered-list li,.order-list li,.comments-area .comment-body ul li,.comments-area .comment-body ol li,.wc-tab-inner > div > ol li,.wc-tab-inner > div > ul li,.woocommerce-product-details__short-description > ol li,.woocommerce-product-details__short-description > ul li,.hover-content-inner > ol li,.hover-content-inner > ul li,.woodmart-entry-content > ol li,.woodmart-entry-content > ul li,.wpb_text_column .wpb_wrapper > ol li,.wpb_text_column .wpb_wrapper > ul li,.woodmart-text-block > ol li,.woodmart-text-block > ul li,.portfolio-single-content > ol li,.portfolio-single-content > ul li,.woocommerce-terms-and-conditions > ol li,.woocommerce-terms-and-conditions > ul li,.entry-content > ol li,.entry-content > ul li,.header-banner-container > ol li,.header-banner-container > ul li,.vc_toggle_content > ol li,.vc_toggle_content > ul li,.textwidget > ul:not(.menu) li,.textwidget > ol:not(.menu) li {
    margin-bottom: 10px
}

.unordered-list li:last-child,.order-list li:last-child,.comments-area .comment-body ul li:last-child,.comments-area .comment-body ol li:last-child,.wc-tab-inner > div > ol li:last-child,.wc-tab-inner > div > ul li:last-child,.woocommerce-product-details__short-description > ol li:last-child,.woocommerce-product-details__short-description > ul li:last-child,.hover-content-inner > ol li:last-child,.hover-content-inner > ul li:last-child,.woodmart-entry-content > ol li:last-child,.woodmart-entry-content > ul li:last-child,.wpb_text_column .wpb_wrapper > ol li:last-child,.wpb_text_column .wpb_wrapper > ul li:last-child,.woodmart-text-block > ol li:last-child,.woodmart-text-block > ul li:last-child,.portfolio-single-content > ol li:last-child,.portfolio-single-content > ul li:last-child,.woocommerce-terms-and-conditions > ol li:last-child,.woocommerce-terms-and-conditions > ul li:last-child,.entry-content > ol li:last-child,.entry-content > ul li:last-child,.header-banner-container > ol li:last-child,.header-banner-container > ul li:last-child,.vc_toggle_content > ol li:last-child,.vc_toggle_content > ul li:last-child,.textwidget > ul:not(.menu) li:last-child,.textwidget > ol:not(.menu) li:last-child {
    margin-bottom: 0
}

.unordered-list li > ul,.order-list li > ul,.comments-area .comment-body ul li > ul,.comments-area .comment-body ol li > ul,.wc-tab-inner > div > ol li > ul,.wc-tab-inner > div > ul li > ul,.woocommerce-product-details__short-description > ol li > ul,.woocommerce-product-details__short-description > ul li > ul,.hover-content-inner > ol li > ul,.hover-content-inner > ul li > ul,.woodmart-entry-content > ol li > ul,.woodmart-entry-content > ul li > ul,.wpb_text_column .wpb_wrapper > ol li > ul,.wpb_text_column .wpb_wrapper > ul li > ul,.woodmart-text-block > ol li > ul,.woodmart-text-block > ul li > ul,.portfolio-single-content > ol li > ul,.portfolio-single-content > ul li > ul,.woocommerce-terms-and-conditions > ol li > ul,.woocommerce-terms-and-conditions > ul li > ul,.entry-content > ol li > ul,.entry-content > ul li > ul,.header-banner-container > ol li > ul,.header-banner-container > ul li > ul,.vc_toggle_content > ol li > ul,.vc_toggle_content > ul li > ul,.textwidget > ul:not(.menu) li > ul,.textwidget > ol:not(.menu) li > ul,.unordered-list li > ol,.order-list li > ol,.comments-area .comment-body ul li > ol,.comments-area .comment-body ol li > ol,.wc-tab-inner > div > ol li > ol,.wc-tab-inner > div > ul li > ol,.woocommerce-product-details__short-description > ol li > ol,.woocommerce-product-details__short-description > ul li > ol,.hover-content-inner > ol li > ol,.hover-content-inner > ul li > ol,.woodmart-entry-content > ol li > ol,.woodmart-entry-content > ul li > ol,.wpb_text_column .wpb_wrapper > ol li > ol,.wpb_text_column .wpb_wrapper > ul li > ol,.woodmart-text-block > ol li > ol,.woodmart-text-block > ul li > ol,.portfolio-single-content > ol li > ol,.portfolio-single-content > ul li > ol,.woocommerce-terms-and-conditions > ol li > ol,.woocommerce-terms-and-conditions > ul li > ol,.entry-content > ol li > ol,.entry-content > ul li > ol,.header-banner-container > ol li > ol,.header-banner-container > ul li > ol,.vc_toggle_content > ol li > ol,.vc_toggle_content > ul li > ol,.textwidget > ul:not(.menu) li > ol,.textwidget > ol:not(.menu) li > ol {
    margin-bottom: 0
}

.unordered-list ul,.order-list ul,.comments-area .comment-body ul ul,.comments-area .comment-body ol ul,.wc-tab-inner > div > ol ul,.wc-tab-inner > div > ul ul,.woocommerce-product-details__short-description > ol ul,.woocommerce-product-details__short-description > ul ul,.hover-content-inner > ol ul,.hover-content-inner > ul ul,.woodmart-entry-content > ol ul,.woodmart-entry-content > ul ul,.wpb_text_column .wpb_wrapper > ol ul,.wpb_text_column .wpb_wrapper > ul ul,.woodmart-text-block > ol ul,.woodmart-text-block > ul ul,.portfolio-single-content > ol ul,.portfolio-single-content > ul ul,.woocommerce-terms-and-conditions > ol ul,.woocommerce-terms-and-conditions > ul ul,.entry-content > ol ul,.entry-content > ul ul,.header-banner-container > ol ul,.header-banner-container > ul ul,.vc_toggle_content > ol ul,.vc_toggle_content > ul ul,.textwidget > ul:not(.menu) ul,.textwidget > ol:not(.menu) ul,.unordered-list ol,.order-list ol,.comments-area .comment-body ul ol,.comments-area .comment-body ol ol,.wc-tab-inner > div > ol ol,.wc-tab-inner > div > ul ol,.woocommerce-product-details__short-description > ol ol,.woocommerce-product-details__short-description > ul ol,.hover-content-inner > ol ol,.hover-content-inner > ul ol,.woodmart-entry-content > ol ol,.woodmart-entry-content > ul ol,.wpb_text_column .wpb_wrapper > ol ol,.wpb_text_column .wpb_wrapper > ul ol,.woodmart-text-block > ol ol,.woodmart-text-block > ul ol,.portfolio-single-content > ol ol,.portfolio-single-content > ul ol,.woocommerce-terms-and-conditions > ol ol,.woocommerce-terms-and-conditions > ul ol,.entry-content > ol ol,.entry-content > ul ol,.header-banner-container > ol ol,.header-banner-container > ul ol,.vc_toggle_content > ol ol,.vc_toggle_content > ul ol,.textwidget > ul:not(.menu) ol,.textwidget > ol:not(.menu) ol {
    margin-top: 10px;
    padding-left: 20px
}

.comments-area .comment-body dl,.wc-tab-inner > div > dl,.woocommerce-product-details__short-description > dl,.hover-content-inner > dl,.woodmart-entry-content > dl,.wpb_text_column .wpb_wrapper > dl,.woodmart-text-block > dl,.portfolio-single-content > dl,.woocommerce-terms-and-conditions > dl,.entry-content > dl,.header-banner-container > dl,.vc_toggle_content > dl {
    text-align: left
}

.comments-area .comment-body dl dt,.wc-tab-inner > div > dl dt,.woocommerce-product-details__short-description > dl dt,.hover-content-inner > dl dt,.woodmart-entry-content > dl dt,.wpb_text_column .wpb_wrapper > dl dt,.woodmart-text-block > dl dt,.portfolio-single-content > dl dt,.woocommerce-terms-and-conditions > dl dt,.entry-content > dl dt,.header-banner-container > dl dt,.vc_toggle_content > dl dt {
    color: #2d2a2a;
    font-weight: bold
}

.comments-area .comment-body dl dd,.wc-tab-inner > div > dl dd,.woocommerce-product-details__short-description > dl dd,.hover-content-inner > dl dd,.woodmart-entry-content > dl dd,.wpb_text_column .wpb_wrapper > dl dd,.woodmart-text-block > dl dd,.portfolio-single-content > dl dd,.woocommerce-terms-and-conditions > dl dd,.entry-content > dl dd,.header-banner-container > dl dd,.vc_toggle_content > dl dd {
    margin-bottom: 20px
}

.inline-list {
    margin-right: -15px;
    margin-left: -15px
}

.inline-list li {
    display: inline-block;
    padding-top: 5px;
    padding-right: 15px;
    padding-bottom: 5px;
    padding-left: 15px
}

.inline-list-with-border li {
    padding-top: 0;
    padding-bottom: 0
}

.inline-list-with-border li:not(:last-child) {
    border-right: 1px solid rgba(129,129,129,.2)
}

.color-scheme-light .inline-list-with-border li:not(:last-child) {
    border-color: rgba(255,255,255,.15)
}

.unordered-list ol > li,.order-list > li,.order-list ol > li,.comments-area .comment-body ol > li,.wc-tab-inner > div > ul ol > li,.woocommerce-product-details__short-description > ul ol > li,.hover-content-inner > ul ol > li,.woodmart-entry-content > ul ol > li,.wpb_text_column .wpb_wrapper > ul ol > li,.woodmart-text-block > ul ol > li,.portfolio-single-content > ul ol > li,.woocommerce-terms-and-conditions > ul ol > li,.entry-content > ul ol > li,.header-banner-container > ul ol > li,.vc_toggle_content > ul ol > li,.wc-tab-inner > div > ol > li,.woocommerce-product-details__short-description > ol > li,.hover-content-inner > ol > li,.woodmart-entry-content > ol > li,.wpb_text_column .wpb_wrapper > ol > li,.woodmart-text-block > ol > li,.portfolio-single-content > ol > li,.woocommerce-terms-and-conditions > ol > li,.entry-content > ol > li,.header-banner-container > ol > li,.vc_toggle_content > ol > li,.wc-tab-inner > div > ol ol > li,.woocommerce-product-details__short-description > ol ol > li,.hover-content-inner > ol ol > li,.woodmart-entry-content > ol ol > li,.wpb_text_column .wpb_wrapper > ol ol > li,.woodmart-text-block > ol ol > li,.portfolio-single-content > ol ol > li,.woocommerce-terms-and-conditions > ol ol > li,.entry-content > ol ol > li,.header-banner-container > ol ol > li,.vc_toggle_content > ol ol > li,.textwidget > ul:not(.menu) ol > li,.textwidget > ol:not(.menu) > li,.textwidget > ol:not(.menu) ol > li {
    list-style: decimal
}

.unordered-list ol > li:before,.order-list > li:before,.order-list ol > li:before,.comments-area .comment-body ol > li:before,.wc-tab-inner > div > ul ol > li:before,.woocommerce-product-details__short-description > ul ol > li:before,.hover-content-inner > ul ol > li:before,.woodmart-entry-content > ul ol > li:before,.wpb_text_column .wpb_wrapper > ul ol > li:before,.woodmart-text-block > ul ol > li:before,.portfolio-single-content > ul ol > li:before,.woocommerce-terms-and-conditions > ul ol > li:before,.entry-content > ul ol > li:before,.header-banner-container > ul ol > li:before,.vc_toggle_content > ul ol > li:before,.wc-tab-inner > div > ol > li:before,.woocommerce-product-details__short-description > ol > li:before,.hover-content-inner > ol > li:before,.woodmart-entry-content > ol > li:before,.wpb_text_column .wpb_wrapper > ol > li:before,.woodmart-text-block > ol > li:before,.portfolio-single-content > ol > li:before,.woocommerce-terms-and-conditions > ol > li:before,.entry-content > ol > li:before,.header-banner-container > ol > li:before,.vc_toggle_content > ol > li:before,.wc-tab-inner > div > ol ol > li:before,.woocommerce-product-details__short-description > ol ol > li:before,.hover-content-inner > ol ol > li:before,.woodmart-entry-content > ol ol > li:before,.wpb_text_column .wpb_wrapper > ol ol > li:before,.woodmart-text-block > ol ol > li:before,.portfolio-single-content > ol ol > li:before,.woocommerce-terms-and-conditions > ol ol > li:before,.entry-content > ol ol > li:before,.header-banner-container > ol ol > li:before,.vc_toggle_content > ol ol > li:before,.textwidget > ul:not(.menu) ol > li:before,.textwidget > ol:not(.menu) > li:before,.textwidget > ol:not(.menu) ol > li:before {
    content: none
}

.unordered-list > li,.unordered-list ul > li,.order-list ul > li,.comments-area .comment-body ul > li,.wc-tab-inner > div > ul > li,.woocommerce-product-details__short-description > ul > li,.hover-content-inner > ul > li,.woodmart-entry-content > ul > li,.wpb_text_column .wpb_wrapper > ul > li,.woodmart-text-block > ul > li,.portfolio-single-content > ul > li,.woocommerce-terms-and-conditions > ul > li,.entry-content > ul > li,.header-banner-container > ul > li,.vc_toggle_content > ul > li,.wc-tab-inner > div > ul ul > li,.woocommerce-product-details__short-description > ul ul > li,.hover-content-inner > ul ul > li,.woodmart-entry-content > ul ul > li,.wpb_text_column .wpb_wrapper > ul ul > li,.woodmart-text-block > ul ul > li,.portfolio-single-content > ul ul > li,.woocommerce-terms-and-conditions > ul ul > li,.entry-content > ul ul > li,.header-banner-container > ul ul > li,.vc_toggle_content > ul ul > li,.wc-tab-inner > div > ol ul > li,.woocommerce-product-details__short-description > ol ul > li,.hover-content-inner > ol ul > li,.woodmart-entry-content > ol ul > li,.wpb_text_column .wpb_wrapper > ol ul > li,.woodmart-text-block > ol ul > li,.portfolio-single-content > ol ul > li,.woocommerce-terms-and-conditions > ol ul > li,.entry-content > ol ul > li,.header-banner-container > ol ul > li,.vc_toggle_content > ol ul > li,.textwidget > ul:not(.menu) > li,.textwidget > ul:not(.menu) ul > li,.textwidget > ol:not(.menu) ul > li {
    position: relative;
    list-style: none
}

.unordered-list > li:before,.unordered-list ul > li:before,.order-list ul > li:before,.comments-area .comment-body ul > li:before,.wc-tab-inner > div > ul > li:before,.woocommerce-product-details__short-description > ul > li:before,.hover-content-inner > ul > li:before,.woodmart-entry-content > ul > li:before,.wpb_text_column .wpb_wrapper > ul > li:before,.woodmart-text-block > ul > li:before,.portfolio-single-content > ul > li:before,.woocommerce-terms-and-conditions > ul > li:before,.entry-content > ul > li:before,.header-banner-container > ul > li:before,.vc_toggle_content > ul > li:before,.wc-tab-inner > div > ul ul > li:before,.woocommerce-product-details__short-description > ul ul > li:before,.hover-content-inner > ul ul > li:before,.woodmart-entry-content > ul ul > li:before,.wpb_text_column .wpb_wrapper > ul ul > li:before,.woodmart-text-block > ul ul > li:before,.portfolio-single-content > ul ul > li:before,.woocommerce-terms-and-conditions > ul ul > li:before,.entry-content > ul ul > li:before,.header-banner-container > ul ul > li:before,.vc_toggle_content > ul ul > li:before,.wc-tab-inner > div > ol ul > li:before,.woocommerce-product-details__short-description > ol ul > li:before,.hover-content-inner > ol ul > li:before,.woodmart-entry-content > ol ul > li:before,.wpb_text_column .wpb_wrapper > ol ul > li:before,.woodmart-text-block > ol ul > li:before,.portfolio-single-content > ol ul > li:before,.woocommerce-terms-and-conditions > ol ul > li:before,.entry-content > ol ul > li:before,.header-banner-container > ol ul > li:before,.vc_toggle_content > ol ul > li:before,.textwidget > ul:not(.menu) > li:before,.textwidget > ul:not(.menu) ul > li:before,.textwidget > ol:not(.menu) ul > li:before {
    position: absolute;
    top: 6px;
    left: -20px;
    font-size: 8px;
    content: "\f110";
    font-family: "woodmart-font"
}

.form-style-underlined .woocommerce-billing-fields__field-wrapper > p,.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p,.form-style-underlined .order_comments_field > p,.form-style-underlined .comment-form-author,.form-style-underlined .comment-form-email,.form-style-underlined .comment-form-url {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    border-bottom: 2px solid rgba(129,129,129,.2);
    -webkit-transition: border-color .4s ease;
    transition: border-color .4s ease
}

.form-style-underlined .woocommerce-billing-fields__field-wrapper > p:hover,.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p:hover,.form-style-underlined .order_comments_field > p:hover,.form-style-underlined .comment-form-author:hover,.form-style-underlined .comment-form-email:hover,.form-style-underlined .comment-form-url:hover {
    border-color: rgba(129,129,129,.3)
}

.form-style-underlined .woocommerce-billing-fields__field-wrapper > p.woocommerce-invalid,.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p.woocommerce-invalid,.form-style-underlined .order_comments_field > p.woocommerce-invalid,.form-style-underlined .woocommerce-invalid.comment-form-author,.form-style-underlined .woocommerce-invalid.comment-form-email,.form-style-underlined .woocommerce-invalid.comment-form-url {
    border-color: #ca1919
}

.form-style-underlined .woocommerce-billing-fields__field-wrapper > p label,.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p label,.form-style-underlined .order_comments_field > p label,.form-style-underlined .comment-form-author label,.form-style-underlined .comment-form-email label,.form-style-underlined .comment-form-url label {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-bottom: 0;
    margin-right: 15px
}

.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=email],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=email],.form-style-underlined .order_comments_field > p input[type=email],.form-style-underlined .comment-form-author input[type=email],.form-style-underlined .comment-form-email input[type=email],.form-style-underlined .comment-form-url input[type=email],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=date],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=date],.form-style-underlined .order_comments_field > p input[type=date],.form-style-underlined .comment-form-author input[type=date],.form-style-underlined .comment-form-email input[type=date],.form-style-underlined .comment-form-url input[type=date],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=search],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=search],.form-style-underlined .order_comments_field > p input[type=search],.form-style-underlined .comment-form-author input[type=search],.form-style-underlined .comment-form-email input[type=search],.form-style-underlined .comment-form-url input[type=search],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=number],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=number],.form-style-underlined .order_comments_field > p input[type=number],.form-style-underlined .comment-form-author input[type=number],.form-style-underlined .comment-form-email input[type=number],.form-style-underlined .comment-form-url input[type=number],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=text],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=text],.form-style-underlined .order_comments_field > p input[type=text],.form-style-underlined .comment-form-author input[type=text],.form-style-underlined .comment-form-email input[type=text],.form-style-underlined .comment-form-url input[type=text],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=tel],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=tel],.form-style-underlined .order_comments_field > p input[type=tel],.form-style-underlined .comment-form-author input[type=tel],.form-style-underlined .comment-form-email input[type=tel],.form-style-underlined .comment-form-url input[type=tel],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=url],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=url],.form-style-underlined .order_comments_field > p input[type=url],.form-style-underlined .comment-form-author input[type=url],.form-style-underlined .comment-form-email input[type=url],.form-style-underlined .comment-form-url input[type=url],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p input[type=password],.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p input[type=password],.form-style-underlined .order_comments_field > p input[type=password],.form-style-underlined .comment-form-author input[type=password],.form-style-underlined .comment-form-email input[type=password],.form-style-underlined .comment-form-url input[type=password],.form-style-underlined .woocommerce-billing-fields__field-wrapper > p select,.form-style-underlined .woocommerce-shipping-fields__field-wrapper > p select,.form-style-underlined .order_comments_field > p select,.form-style-underlined .comment-form-author select,.form-style-underlined .comment-form-email select,.form-style-underlined .comment-form-url select {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border-bottom-style: none
}

.wrap-loading-arrow > div:not(.disabled):hover,.woocommerce-product-gallery .owl-nav > div:not(.disabled):hover {
    color: rgba(0,0,0,.5)
}

.wrap-loading-arrow > div.disabled,.woocommerce-product-gallery .owl-nav > div.disabled {
    color: rgba(0,0,0,.4);
    cursor: default
}

.color-scheme-light .wrap-loading-arrow > div:not(.disabled):hover {
    color: rgba(255,255,255,.8)
}

.color-scheme-light .wrap-loading-arrow > div.disabled {
    color: rgba(255,255,255,.6)
}

.hover-color-scheme-dark,.hover-color-scheme-light {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.hover-color-scheme-dark h1,.hover-color-scheme-light h1,.hover-color-scheme-dark h2,.hover-color-scheme-light h2,.hover-color-scheme-dark h3,.hover-color-scheme-light h3,.hover-color-scheme-dark h4,.hover-color-scheme-light h4,.hover-color-scheme-dark h5,.hover-color-scheme-light h5,.hover-color-scheme-dark h6,.hover-color-scheme-light h6 {
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.widget_shopping_cart .buttons .btn-cart:hover,.widget_price_filter .price_slider_amount .button:hover,.cart-totals-inner .shipping-calculator-form .button:hover,.cart-actions .button[name=update_cart]:hover,.woodmart-switch-to-register:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.btns-default-3d .widget_shopping_cart .buttons .btn-cart,.btns-default-3d .widget_price_filter .price_slider_amount .button,.btns-default-3d .cart-totals-inner .shipping-calculator-form .button,.btns-default-3d .cart-actions .button[name=update_cart],.btns-default-3d .woodmart-switch-to-register,.btns-default-3d #dokan-form-contact-seller.seller-form input.dokan-btn-theme,.btns-default-3d .wcmp-quick-info-wrapper input[type=submit],.btns-default-3d .simplePopup .submit-report-abuse,.btns-default-3d .vendor_sort input[type=submit] {
    border: none;
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease,-webkit-box-shadow 0s ease
}

.btns-default-3d .widget_shopping_cart .buttons .btn-cart:hover,.btns-default-3d .widget_price_filter .price_slider_amount .button:hover,.btns-default-3d .cart-totals-inner .shipping-calculator-form .button:hover,.btns-default-3d .cart-actions .button[name=update_cart]:hover,.btns-default-3d .woodmart-switch-to-register:hover,.btns-default-3d #dokan-form-contact-seller.seller-form input.dokan-btn-theme:hover,.btns-default-3d .wcmp-quick-info-wrapper input[type=submit]:hover,.btns-default-3d .simplePopup .submit-report-abuse:hover,.btns-default-3d .vendor_sort input[type=submit]:hover {
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15)
}

.btns-default-3d .widget_shopping_cart .buttons .btn-cart:active,.btns-default-3d .widget_price_filter .price_slider_amount .button:active,.btns-default-3d .cart-totals-inner .shipping-calculator-form .button:active,.btns-default-3d .cart-actions .button[name=update_cart]:active,.btns-default-3d .woodmart-switch-to-register:active,.btns-default-3d #dokan-form-contact-seller.seller-form input.dokan-btn-theme:active,.btns-default-3d .wcmp-quick-info-wrapper input[type=submit]:active,.btns-default-3d .simplePopup .submit-report-abuse:active,.btns-default-3d .vendor_sort input[type=submit]:active {
    top: 1px;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btns-default-rounded .widget_shopping_cart .buttons .btn-cart,.btns-default-rounded .widget_price_filter .price_slider_amount .button,.btns-default-rounded .cart-totals-inner .shipping-calculator-form .button,.btns-default-rounded .cart-actions .button[name=update_cart],.btns-default-rounded .woodmart-switch-to-register,.btns-default-rounded #dokan-form-contact-seller.seller-form input.dokan-btn-theme,.btns-default-rounded .wcmp-quick-info-wrapper input[type=submit],.btns-default-rounded .simplePopup .submit-report-abuse,.btns-default-rounded .vendor_sort input[type=submit] {
    border-radius: 35px
}

.btns-default-semi-rounded .widget_shopping_cart .buttons .btn-cart,.btns-default-semi-rounded .widget_price_filter .price_slider_amount .button,.btns-default-semi-rounded .cart-totals-inner .shipping-calculator-form .button,.btns-default-semi-rounded .cart-actions .button[name=update_cart],.btns-default-semi-rounded .woodmart-switch-to-register,.btns-default-semi-rounded #dokan-form-contact-seller.seller-form input.dokan-btn-theme,.btns-default-semi-rounded .wcmp-quick-info-wrapper input[type=submit],.btns-default-semi-rounded .simplePopup .submit-report-abuse,.btns-default-semi-rounded .vendor_sort input[type=submit] {
    border-radius: 5px
}

.btns-default-light .widget_shopping_cart .buttons .btn-cart,.btns-default-light .widget_price_filter .price_slider_amount .button,.btns-default-light .cart-totals-inner .shipping-calculator-form .button,.btns-default-light .cart-actions .button[name=update_cart],.btns-default-light .woodmart-switch-to-register,.btns-default-light #dokan-form-contact-seller.seller-form input.dokan-btn-theme,.btns-default-light .wcmp-quick-info-wrapper input[type=submit],.btns-default-light .simplePopup .submit-report-abuse,.btns-default-light .vendor_sort input[type=submit] {
    color: #fff
}

.btns-default-hover-light .widget_shopping_cart .buttons .btn-cart:hover,.btns-default-hover-light .widget_price_filter .price_slider_amount .button:hover,.btns-default-hover-light .cart-totals-inner .shipping-calculator-form .button:hover,.btns-default-hover-light .cart-actions .button[name=update_cart]:hover,.btns-default-hover-light .woodmart-switch-to-register:hover,.btns-default-hover-light #dokan-form-contact-seller.seller-form input.dokan-btn-theme:hover,.btns-default-hover-light .wcmp-quick-info-wrapper input[type=submit]:hover,.btns-default-hover-light .simplePopup .submit-report-abuse:hover,.btns-default-hover-light .vendor_sort input[type=submit]:hover {
    color: #fff
}

.btns-default-dark .widget_shopping_cart .buttons .btn-cart,.btns-default-dark .widget_price_filter .price_slider_amount .button,.btns-default-dark .cart-totals-inner .shipping-calculator-form .button,.btns-default-dark .cart-actions .button[name=update_cart],.btns-default-dark .woodmart-switch-to-register,.btns-default-dark #dokan-form-contact-seller.seller-form input.dokan-btn-theme,.btns-default-dark .wcmp-quick-info-wrapper input[type=submit],.btns-default-dark .simplePopup .submit-report-abuse,.btns-default-dark .vendor_sort input[type=submit] {
    color: #333
}

.btns-default-hover-dark .widget_shopping_cart .buttons .btn-cart:hover,.btns-default-hover-dark .widget_price_filter .price_slider_amount .button:hover,.btns-default-hover-dark .cart-totals-inner .shipping-calculator-form .button:hover,.btns-default-hover-dark .cart-actions .button[name=update_cart]:hover,.btns-default-hover-dark .woodmart-switch-to-register:hover,.btns-default-hover-dark #dokan-form-contact-seller.seller-form input.dokan-btn-theme:hover,.btns-default-hover-dark .wcmp-quick-info-wrapper input[type=submit]:hover,.btns-default-hover-dark .simplePopup .submit-report-abuse:hover,.btns-default-hover-dark .vendor_sort input[type=submit]:hover {
    color: #333
}

td.woocommerce-orders-table__cell-order-actions a:hover,.account-payment-methods-table .button:hover,.woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover,.product-list-item .woodmart-add-btn > a:hover,.woodmart-hover-standard .btn-add > a:hover,.popup-quick-view .woodmart-scroll-content > a:hover,.woodmart-sticky-btn .woodmart-sticky-add-to-cart:hover,.popup-added_to_cart .view-cart:hover,.widget_shopping_cart .buttons .checkout:hover,button[name=save_account_details]:hover,button[name=save_address]:hover,button[name=track]:hover,.single_add_to_cart_button:hover,.checkout_coupon .button:hover,#place_order:hover,.return-to-shop .button:hover,.cart-totals-inner .checkout-button:hover,.cart-actions .button[name=apply_coupon]:hover,.register .button:hover,.login .button:hover,.lost_reset_password .button:hover,.social-login-btn > a:hover,.woocommerce-MyAccount-content > .button:hover,.order-again .button:hover,.woocommerce-Button--next:hover,.woocommerce-Button--previous:hover,.woocommerce-MyAccount-downloads-file:hover,.woodmart-pf-btn button:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.btns-shop-3d .hotspot-content .add_to_cart_button,.btns-shop-3d td.woocommerce-orders-table__cell-order-actions a,.btns-shop-3d .account-payment-methods-table .button,.btns-shop-3d .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a,.btns-shop-3d .product-list-item .woodmart-add-btn > a,.btns-shop-3d .woodmart-hover-standard .btn-add > a,.btns-shop-3d .popup-quick-view .woodmart-scroll-content > a,.btns-shop-3d .woodmart-sticky-btn .woodmart-sticky-add-to-cart,.btns-shop-3d .popup-added_to_cart .view-cart,.btns-shop-3d .woodmart-compare-col .button,.btns-shop-3d .woodmart-compare-col .added_to_cart,.btns-shop-3d .widget_shopping_cart .buttons .checkout,.btns-shop-3d button[name=save_account_details],.btns-shop-3d button[name=save_address],.btns-shop-3d button[name=track],.btns-shop-3d .single_add_to_cart_button,.btns-shop-3d .checkout_coupon .button,.btns-shop-3d #place_order,.btns-shop-3d .return-to-shop .button,.btns-shop-3d .cart-totals-inner .checkout-button,.btns-shop-3d .cart-actions .button[name=apply_coupon],.btns-shop-3d .register .button,.btns-shop-3d .login .button,.btns-shop-3d .lost_reset_password .button,.btns-shop-3d .social-login-btn > a,.btns-shop-3d .woocommerce-MyAccount-content > .button,.btns-shop-3d .order-again .button,.btns-shop-3d .woocommerce-Button--next,.btns-shop-3d .woocommerce-Button--previous,.btns-shop-3d .woocommerce-MyAccount-downloads-file,.btns-shop-3d .woodmart-pf-btn button,.btns-shop-3d .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart,.btns-shop-3d #dokan-seller-listing-wrap .dokan-btn,.btns-shop-3d .woocommerce-MyAccount-content .dokan-btn,.btns-shop-3d .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button {
    border: none;
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease,-webkit-box-shadow 0s ease
}

.btns-shop-3d .hotspot-content .add_to_cart_button:hover,.btns-shop-3d td.woocommerce-orders-table__cell-order-actions a:hover,.btns-shop-3d .account-payment-methods-table .button:hover,.btns-shop-3d .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover,.btns-shop-3d .product-list-item .woodmart-add-btn > a:hover,.btns-shop-3d .woodmart-hover-standard .btn-add > a:hover,.btns-shop-3d .popup-quick-view .woodmart-scroll-content > a:hover,.btns-shop-3d .woodmart-sticky-btn .woodmart-sticky-add-to-cart:hover,.btns-shop-3d .popup-added_to_cart .view-cart:hover,.btns-shop-3d .woodmart-compare-col .button:hover,.btns-shop-3d .woodmart-compare-col .added_to_cart:hover,.btns-shop-3d .widget_shopping_cart .buttons .checkout:hover,.btns-shop-3d button[name=save_account_details]:hover,.btns-shop-3d button[name=save_address]:hover,.btns-shop-3d button[name=track]:hover,.btns-shop-3d .single_add_to_cart_button:hover,.btns-shop-3d .checkout_coupon .button:hover,.btns-shop-3d #place_order:hover,.btns-shop-3d .return-to-shop .button:hover,.btns-shop-3d .cart-totals-inner .checkout-button:hover,.btns-shop-3d .cart-actions .button[name=apply_coupon]:hover,.btns-shop-3d .register .button:hover,.btns-shop-3d .login .button:hover,.btns-shop-3d .lost_reset_password .button:hover,.btns-shop-3d .social-login-btn > a:hover,.btns-shop-3d .woocommerce-MyAccount-content > .button:hover,.btns-shop-3d .order-again .button:hover,.btns-shop-3d .woocommerce-Button--next:hover,.btns-shop-3d .woocommerce-Button--previous:hover,.btns-shop-3d .woocommerce-MyAccount-downloads-file:hover,.btns-shop-3d .woodmart-pf-btn button:hover,.btns-shop-3d .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart:hover,.btns-shop-3d #dokan-seller-listing-wrap .dokan-btn:hover,.btns-shop-3d .woocommerce-MyAccount-content .dokan-btn:hover,.btns-shop-3d .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button:hover {
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15)
}

.btns-shop-3d .hotspot-content .add_to_cart_button:active,.btns-shop-3d td.woocommerce-orders-table__cell-order-actions a:active,.btns-shop-3d .account-payment-methods-table .button:active,.btns-shop-3d .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:active,.btns-shop-3d .product-list-item .woodmart-add-btn > a:active,.btns-shop-3d .woodmart-hover-standard .btn-add > a:active,.btns-shop-3d .popup-quick-view .woodmart-scroll-content > a:active,.btns-shop-3d .woodmart-sticky-btn .woodmart-sticky-add-to-cart:active,.btns-shop-3d .popup-added_to_cart .view-cart:active,.btns-shop-3d .woodmart-compare-col .button:active,.btns-shop-3d .woodmart-compare-col .added_to_cart:active,.btns-shop-3d .widget_shopping_cart .buttons .checkout:active,.btns-shop-3d button[name=save_account_details]:active,.btns-shop-3d button[name=save_address]:active,.btns-shop-3d button[name=track]:active,.btns-shop-3d .single_add_to_cart_button:active,.btns-shop-3d .checkout_coupon .button:active,.btns-shop-3d #place_order:active,.btns-shop-3d .return-to-shop .button:active,.btns-shop-3d .cart-totals-inner .checkout-button:active,.btns-shop-3d .cart-actions .button[name=apply_coupon]:active,.btns-shop-3d .register .button:active,.btns-shop-3d .login .button:active,.btns-shop-3d .lost_reset_password .button:active,.btns-shop-3d .social-login-btn > a:active,.btns-shop-3d .woocommerce-MyAccount-content > .button:active,.btns-shop-3d .order-again .button:active,.btns-shop-3d .woocommerce-Button--next:active,.btns-shop-3d .woocommerce-Button--previous:active,.btns-shop-3d .woocommerce-MyAccount-downloads-file:active,.btns-shop-3d .woodmart-pf-btn button:active,.btns-shop-3d .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart:active,.btns-shop-3d #dokan-seller-listing-wrap .dokan-btn:active,.btns-shop-3d .woocommerce-MyAccount-content .dokan-btn:active,.btns-shop-3d .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button:active {
    top: 1px;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btns-shop-rounded .hotspot-content .add_to_cart_button,.btns-shop-rounded td.woocommerce-orders-table__cell-order-actions a,.btns-shop-rounded .account-payment-methods-table .button,.btns-shop-rounded .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a,.btns-shop-rounded .product-list-item .woodmart-add-btn > a,.btns-shop-rounded .woodmart-hover-standard .btn-add > a,.btns-shop-rounded .popup-quick-view .woodmart-scroll-content > a,.btns-shop-rounded .woodmart-sticky-btn .woodmart-sticky-add-to-cart,.btns-shop-rounded .popup-added_to_cart .view-cart,.btns-shop-rounded .woodmart-compare-col .button,.btns-shop-rounded .woodmart-compare-col .added_to_cart,.btns-shop-rounded .widget_shopping_cart .buttons .checkout,.btns-shop-rounded button[name=save_account_details],.btns-shop-rounded button[name=save_address],.btns-shop-rounded button[name=track],.btns-shop-rounded .single_add_to_cart_button,.btns-shop-rounded .checkout_coupon .button,.btns-shop-rounded #place_order,.btns-shop-rounded .return-to-shop .button,.btns-shop-rounded .cart-totals-inner .checkout-button,.btns-shop-rounded .cart-actions .button[name=apply_coupon],.btns-shop-rounded .register .button,.btns-shop-rounded .login .button,.btns-shop-rounded .lost_reset_password .button,.btns-shop-rounded .social-login-btn > a,.btns-shop-rounded .woocommerce-MyAccount-content > .button,.btns-shop-rounded .order-again .button,.btns-shop-rounded .woocommerce-Button--next,.btns-shop-rounded .woocommerce-Button--previous,.btns-shop-rounded .woocommerce-MyAccount-downloads-file,.btns-shop-rounded .woodmart-pf-btn button,.btns-shop-rounded .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart,.btns-shop-rounded #dokan-seller-listing-wrap .dokan-btn,.btns-shop-rounded .woocommerce-MyAccount-content .dokan-btn,.btns-shop-rounded .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button {
    border-radius: 35px
}

.btns-shop-semi-rounded .hotspot-content .add_to_cart_button,.btns-shop-semi-rounded td.woocommerce-orders-table__cell-order-actions a,.btns-shop-semi-rounded .account-payment-methods-table .button,.btns-shop-semi-rounded .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a,.btns-shop-semi-rounded .product-list-item .woodmart-add-btn > a,.btns-shop-semi-rounded .woodmart-hover-standard .btn-add > a,.btns-shop-semi-rounded .popup-quick-view .woodmart-scroll-content > a,.btns-shop-semi-rounded .woodmart-sticky-btn .woodmart-sticky-add-to-cart,.btns-shop-semi-rounded .popup-added_to_cart .view-cart,.btns-shop-semi-rounded .woodmart-compare-col .button,.btns-shop-semi-rounded .woodmart-compare-col .added_to_cart,.btns-shop-semi-rounded .widget_shopping_cart .buttons .checkout,.btns-shop-semi-rounded button[name=save_account_details],.btns-shop-semi-rounded button[name=save_address],.btns-shop-semi-rounded button[name=track],.btns-shop-semi-rounded .single_add_to_cart_button,.btns-shop-semi-rounded .checkout_coupon .button,.btns-shop-semi-rounded #place_order,.btns-shop-semi-rounded .return-to-shop .button,.btns-shop-semi-rounded .cart-totals-inner .checkout-button,.btns-shop-semi-rounded .cart-actions .button[name=apply_coupon],.btns-shop-semi-rounded .register .button,.btns-shop-semi-rounded .login .button,.btns-shop-semi-rounded .lost_reset_password .button,.btns-shop-semi-rounded .social-login-btn > a,.btns-shop-semi-rounded .woocommerce-MyAccount-content > .button,.btns-shop-semi-rounded .order-again .button,.btns-shop-semi-rounded .woocommerce-Button--next,.btns-shop-semi-rounded .woocommerce-Button--previous,.btns-shop-semi-rounded .woocommerce-MyAccount-downloads-file,.btns-shop-semi-rounded .woodmart-pf-btn button,.btns-shop-semi-rounded .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart,.btns-shop-semi-rounded #dokan-seller-listing-wrap .dokan-btn,.btns-shop-semi-rounded .woocommerce-MyAccount-content .dokan-btn,.btns-shop-semi-rounded .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button {
    border-radius: 5px
}

.btns-shop-light .hotspot-content .add_to_cart_button,.btns-shop-light td.woocommerce-orders-table__cell-order-actions a,.btns-shop-light .account-payment-methods-table .button,.btns-shop-light .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a,.btns-shop-light .product-list-item .woodmart-add-btn > a,.btns-shop-light .woodmart-hover-standard .btn-add > a,.btns-shop-light .popup-quick-view .woodmart-scroll-content > a,.btns-shop-light .woodmart-sticky-btn .woodmart-sticky-add-to-cart,.btns-shop-light .popup-added_to_cart .view-cart,.btns-shop-light .woodmart-compare-col .button,.btns-shop-light .woodmart-compare-col .added_to_cart,.btns-shop-light .widget_shopping_cart .buttons .checkout,.btns-shop-light button[name=save_account_details],.btns-shop-light button[name=save_address],.btns-shop-light button[name=track],.btns-shop-light .single_add_to_cart_button,.btns-shop-light .checkout_coupon .button,.btns-shop-light #place_order,.btns-shop-light .return-to-shop .button,.btns-shop-light .cart-totals-inner .checkout-button,.btns-shop-light .cart-actions .button[name=apply_coupon],.btns-shop-light .register .button,.btns-shop-light .login .button,.btns-shop-light .lost_reset_password .button,.btns-shop-light .social-login-btn > a,.btns-shop-light .woocommerce-MyAccount-content > .button,.btns-shop-light .order-again .button,.btns-shop-light .woocommerce-Button--next,.btns-shop-light .woocommerce-Button--previous,.btns-shop-light .woocommerce-MyAccount-downloads-file,.btns-shop-light .woodmart-pf-btn button,.btns-shop-light .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart,.btns-shop-light #dokan-seller-listing-wrap .dokan-btn,.btns-shop-light .woocommerce-MyAccount-content .dokan-btn,.btns-shop-light .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button {
    color: #fff
}

.btns-shop-hover-light .hotspot-content .add_to_cart_button:hover,.btns-shop-hover-light td.woocommerce-orders-table__cell-order-actions a:hover,.btns-shop-hover-light .account-payment-methods-table .button:hover,.btns-shop-hover-light .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover,.btns-shop-hover-light .product-list-item .woodmart-add-btn > a:hover,.btns-shop-hover-light .woodmart-hover-standard .btn-add > a:hover,.btns-shop-hover-light .popup-quick-view .woodmart-scroll-content > a:hover,.btns-shop-hover-light .woodmart-sticky-btn .woodmart-sticky-add-to-cart:hover,.btns-shop-hover-light .popup-added_to_cart .view-cart:hover,.btns-shop-hover-light .woodmart-compare-col .button:hover,.btns-shop-hover-light .woodmart-compare-col .added_to_cart:hover,.btns-shop-hover-light .widget_shopping_cart .buttons .checkout:hover,.btns-shop-hover-light button[name=save_account_details]:hover,.btns-shop-hover-light button[name=save_address]:hover,.btns-shop-hover-light button[name=track]:hover,.btns-shop-hover-light .single_add_to_cart_button:hover,.btns-shop-hover-light .checkout_coupon .button:hover,.btns-shop-hover-light #place_order:hover,.btns-shop-hover-light .return-to-shop .button:hover,.btns-shop-hover-light .cart-totals-inner .checkout-button:hover,.btns-shop-hover-light .cart-actions .button[name=apply_coupon]:hover,.btns-shop-hover-light .register .button:hover,.btns-shop-hover-light .login .button:hover,.btns-shop-hover-light .lost_reset_password .button:hover,.btns-shop-hover-light .social-login-btn > a:hover,.btns-shop-hover-light .woocommerce-MyAccount-content > .button:hover,.btns-shop-hover-light .order-again .button:hover,.btns-shop-hover-light .woocommerce-Button--next:hover,.btns-shop-hover-light .woocommerce-Button--previous:hover,.btns-shop-hover-light .woocommerce-MyAccount-downloads-file:hover,.btns-shop-hover-light .woodmart-pf-btn button:hover,.btns-shop-hover-light .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart:hover,.btns-shop-hover-light #dokan-seller-listing-wrap .dokan-btn:hover,.btns-shop-hover-light .woocommerce-MyAccount-content .dokan-btn:hover,.btns-shop-hover-light .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button:hover {
    color: #fff
}

.btns-shop-dark .hotspot-content .add_to_cart_button,.btns-shop-dark td.woocommerce-orders-table__cell-order-actions a,.btns-shop-dark .account-payment-methods-table .button,.btns-shop-dark .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a,.btns-shop-dark .product-list-item .woodmart-add-btn > a,.btns-shop-dark .woodmart-hover-standard .btn-add > a,.btns-shop-dark .popup-quick-view .woodmart-scroll-content > a,.btns-shop-dark .woodmart-sticky-btn .woodmart-sticky-add-to-cart,.btns-shop-dark .popup-added_to_cart .view-cart,.btns-shop-dark .woodmart-compare-col .button,.btns-shop-dark .woodmart-compare-col .added_to_cart,.btns-shop-dark .widget_shopping_cart .buttons .checkout,.btns-shop-dark button[name=save_account_details],.btns-shop-dark button[name=save_address],.btns-shop-dark button[name=track],.btns-shop-dark .single_add_to_cart_button,.btns-shop-dark .checkout_coupon .button,.btns-shop-dark #place_order,.btns-shop-dark .return-to-shop .button,.btns-shop-dark .cart-totals-inner .checkout-button,.btns-shop-dark .cart-actions .button[name=apply_coupon],.btns-shop-dark .register .button,.btns-shop-dark .login .button,.btns-shop-dark .lost_reset_password .button,.btns-shop-dark .social-login-btn > a,.btns-shop-dark .woocommerce-MyAccount-content > .button,.btns-shop-dark .order-again .button,.btns-shop-dark .woocommerce-Button--next,.btns-shop-dark .woocommerce-Button--previous,.btns-shop-dark .woocommerce-MyAccount-downloads-file,.btns-shop-dark .woodmart-pf-btn button,.btns-shop-dark .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart,.btns-shop-dark #dokan-seller-listing-wrap .dokan-btn,.btns-shop-dark .woocommerce-MyAccount-content .dokan-btn,.btns-shop-dark .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button {
    color: #333
}

.btns-shop-hover-dark .hotspot-content .add_to_cart_button:hover,.btns-shop-hover-dark td.woocommerce-orders-table__cell-order-actions a:hover,.btns-shop-hover-dark .account-payment-methods-table .button:hover,.btns-shop-hover-dark .woodmart-hover-base:not(.product-in-carousel):not(.hover-width-small):not(.add-small-button) .woodmart-add-btn > a:hover,.btns-shop-hover-dark .product-list-item .woodmart-add-btn > a:hover,.btns-shop-hover-dark .woodmart-hover-standard .btn-add > a:hover,.btns-shop-hover-dark .popup-quick-view .woodmart-scroll-content > a:hover,.btns-shop-hover-dark .woodmart-sticky-btn .woodmart-sticky-add-to-cart:hover,.btns-shop-hover-dark .popup-added_to_cart .view-cart:hover,.btns-shop-hover-dark .woodmart-compare-col .button:hover,.btns-shop-hover-dark .woodmart-compare-col .added_to_cart:hover,.btns-shop-hover-dark .widget_shopping_cart .buttons .checkout:hover,.btns-shop-hover-dark button[name=save_account_details]:hover,.btns-shop-hover-dark button[name=save_address]:hover,.btns-shop-hover-dark button[name=track]:hover,.btns-shop-hover-dark .single_add_to_cart_button:hover,.btns-shop-hover-dark .checkout_coupon .button:hover,.btns-shop-hover-dark #place_order:hover,.btns-shop-hover-dark .return-to-shop .button:hover,.btns-shop-hover-dark .cart-totals-inner .checkout-button:hover,.btns-shop-hover-dark .cart-actions .button[name=apply_coupon]:hover,.btns-shop-hover-dark .register .button:hover,.btns-shop-hover-dark .login .button:hover,.btns-shop-hover-dark .lost_reset_password .button:hover,.btns-shop-hover-dark .social-login-btn > a:hover,.btns-shop-hover-dark .woocommerce-MyAccount-content > .button:hover,.btns-shop-hover-dark .order-again .button:hover,.btns-shop-hover-dark .woocommerce-Button--next:hover,.btns-shop-hover-dark .woocommerce-Button--previous:hover,.btns-shop-hover-dark .woocommerce-MyAccount-downloads-file:hover,.btns-shop-hover-dark .woodmart-pf-btn button:hover,.btns-shop-hover-dark .woocommerce table.wishlist_table td.product-add-to-cart .add_to_cart:hover,.btns-shop-hover-dark #dokan-seller-listing-wrap .dokan-btn:hover,.btns-shop-hover-dark .woocommerce-MyAccount-content .dokan-btn:hover,.btns-shop-hover-dark .yith-ywraq-add-to-quote .yith-ywraq-add-button .button.add-request-quote-button:hover {
    color: #333
}

.main-nav .item-level-0.callto-btn > a:hover,.comment-form .submit:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}

.btns-accent-3d .main-nav .item-level-0.callto-btn > a,.btns-accent-3d .comment-form .submit,.btns-accent-3d .post-password-form input[type=submit],.btns-accent-3d .cookies-buttons .cookies-accept-btn,.btns-accent-3d div.open-table-widget .otw-button-wrap .otw-submit,.btns-accent-3d div.open-table-widget .otw-button-wrap .otw-submit-btn,.btns-accent-3d .mc4wp-form input[type=submit],.btns-accent-3d .woodmart-price-table .woodmart-plan-footer > a,.btns-accent-3d #yith-wpv-abuse,.btns-accent-3d div.wcmp_regi_main .button {
    border: none;
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    -webkit-transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,opacity .25s ease,-webkit-box-shadow 0s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease;
    transition: color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow 0s ease,opacity .25s ease,-webkit-box-shadow 0s ease
}

.btns-accent-3d .main-nav .item-level-0.callto-btn > a:hover,.btns-accent-3d .comment-form .submit:hover,.btns-accent-3d .post-password-form input[type=submit]:hover,.btns-accent-3d .cookies-buttons .cookies-accept-btn:hover,.btns-accent-3d div.open-table-widget .otw-button-wrap .otw-submit:hover,.btns-accent-3d div.open-table-widget .otw-button-wrap .otw-submit-btn:hover,.btns-accent-3d .mc4wp-form input[type=submit]:hover,.btns-accent-3d .woodmart-price-table .woodmart-plan-footer > a:hover,.btns-accent-3d #yith-wpv-abuse:hover,.btns-accent-3d div.wcmp_regi_main .button:hover {
    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -2px 0 rgba(0,0,0,.15)
}

.btns-accent-3d .main-nav .item-level-0.callto-btn > a:active,.btns-accent-3d .comment-form .submit:active,.btns-accent-3d .post-password-form input[type=submit]:active,.btns-accent-3d .cookies-buttons .cookies-accept-btn:active,.btns-accent-3d div.open-table-widget .otw-button-wrap .otw-submit:active,.btns-accent-3d div.open-table-widget .otw-button-wrap .otw-submit-btn:active,.btns-accent-3d .mc4wp-form input[type=submit]:active,.btns-accent-3d .woodmart-price-table .woodmart-plan-footer > a:active,.btns-accent-3d #yith-wpv-abuse:active,.btns-accent-3d div.wcmp_regi_main .button:active {
    top: 1px;
    -webkit-box-shadow: none;
    box-shadow: none
}

.btns-accent-rounded .main-nav .item-level-0.callto-btn > a,.btns-accent-rounded .comment-form .submit,.btns-accent-rounded .post-password-form input[type=submit],.btns-accent-rounded .cookies-buttons .cookies-accept-btn,.btns-accent-rounded div.open-table-widget .otw-button-wrap .otw-submit,.btns-accent-rounded div.open-table-widget .otw-button-wrap .otw-submit-btn,.btns-accent-rounded .mc4wp-form input[type=submit],.btns-accent-rounded .woodmart-price-table .woodmart-plan-footer > a,.btns-accent-rounded #yith-wpv-abuse,.btns-accent-rounded div.wcmp_regi_main .button {
    border-radius: 35px
}

.btns-accent-semi-rounded .main-nav .item-level-0.callto-btn > a,.btns-accent-semi-rounded .comment-form .submit,.btns-accent-semi-rounded .post-password-form input[type=submit],.btns-accent-semi-rounded .cookies-buttons .cookies-accept-btn,.btns-accent-semi-rounded div.open-table-widget .otw-button-wrap .otw-submit,.btns-accent-semi-rounded div.open-table-widget .otw-button-wrap .otw-submit-btn,.btns-accent-semi-rounded .mc4wp-form input[type=submit],.btns-accent-semi-rounded .woodmart-price-table .woodmart-plan-footer > a,.btns-accent-semi-rounded #yith-wpv-abuse,.btns-accent-semi-rounded div.wcmp_regi_main .button {
    border-radius: 5px
}

.btns-accent-light .main-nav .item-level-0.callto-btn > a,.btns-accent-light .comment-form .submit,.btns-accent-light .post-password-form input[type=submit],.btns-accent-light .cookies-buttons .cookies-accept-btn,.btns-accent-light div.open-table-widget .otw-button-wrap .otw-submit,.btns-accent-light div.open-table-widget .otw-button-wrap .otw-submit-btn,.btns-accent-light .mc4wp-form input[type=submit],.btns-accent-light .woodmart-price-table .woodmart-plan-footer > a,.btns-accent-light #yith-wpv-abuse,.btns-accent-light div.wcmp_regi_main .button {
    color: #fff
}

.btns-accent-hover-light .main-nav .item-level-0.callto-btn > a:hover,.btns-accent-hover-light .comment-form .submit:hover,.btns-accent-hover-light .post-password-form input[type=submit]:hover,.btns-accent-hover-light .cookies-buttons .cookies-accept-btn:hover,.btns-accent-hover-light div.open-table-widget .otw-button-wrap .otw-submit:hover,.btns-accent-hover-light div.open-table-widget .otw-button-wrap .otw-submit-btn:hover,.btns-accent-hover-light .mc4wp-form input[type=submit]:hover,.btns-accent-hover-light .woodmart-price-table .woodmart-plan-footer > a:hover,.btns-accent-hover-light #yith-wpv-abuse:hover,.btns-accent-hover-light div.wcmp_regi_main .button:hover {
    color: #fff
}

.btns-accent-dark .main-nav .item-level-0.callto-btn > a,.btns-accent-dark .comment-form .submit,.btns-accent-dark .post-password-form input[type=submit],.btns-accent-dark .cookies-buttons .cookies-accept-btn,.btns-accent-dark div.open-table-widget .otw-button-wrap .otw-submit,.btns-accent-dark div.open-table-widget .otw-button-wrap .otw-submit-btn,.btns-accent-dark .mc4wp-form input[type=submit],.btns-accent-dark .woodmart-price-table .woodmart-plan-footer > a,.btns-accent-dark #yith-wpv-abuse,.btns-accent-dark div.wcmp_regi_main .button {
    color: #333
}

.btns-accent-hover-dark .main-nav .item-level-0.callto-btn > a:hover,.btns-accent-hover-dark .comment-form .submit:hover,.btns-accent-hover-dark .post-password-form input[type=submit]:hover,.btns-accent-hover-dark .cookies-buttons .cookies-accept-btn:hover,.btns-accent-hover-dark div.open-table-widget .otw-button-wrap .otw-submit:hover,.btns-accent-hover-dark div.open-table-widget .otw-button-wrap .otw-submit-btn:hover,.btns-accent-hover-dark .mc4wp-form input[type=submit]:hover,.btns-accent-hover-dark .woodmart-price-table .woodmart-plan-footer > a:hover,.btns-accent-hover-dark #yith-wpv-abuse:hover,.btns-accent-hover-dark div.wcmp_regi_main .button:hover {
    color: #333
}

@media(min-width: 1025px) {
    .container {
        width:95%
    }

    [data-vc-full-width] {
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100vw;
        left: -2.5vw
    }

    [data-vc-full-width]:not([data-vc-stretch-content]) {
        padding-right: 2.5vw;
        padding-left: 2.5vw
    }

    .platform-Windows [data-vc-full-width] {
        width: calc(100vw - 17px)
    }

    .browser-Edge [data-vc-full-width] {
        width: calc(100vw - 12px)
    }

    .disabled-nanoscroller .woodmart-scroll .woodmart-scroll-content::-webkit-scrollbar {
        display: block
    }

    .disabled-nanoscroller .woodmart-scroll ::-webkit-scrollbar,.disabled-nanoscroller .woodmart-sidebar-scroll ::-webkit-scrollbar {
        width: 3px
    }

    .disabled-nanoscroller .woodmart-scroll ::-webkit-scrollbar-track,.disabled-nanoscroller .woodmart-sidebar-scroll ::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,.15)
    }

    .disabled-nanoscroller .woodmart-scroll ::-webkit-scrollbar-thumb,.disabled-nanoscroller .woodmart-sidebar-scroll ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.25)
    }

    .color-scheme-light .disabled-nanoscroller .woodmart-scroll ::-webkit-scrollbar-track,.color-scheme-light .disabled-nanoscroller .woodmart-sidebar-scroll ::-webkit-scrollbar-track {
        background-color: rgba(255,255,255,.15)
    }

    .color-scheme-light .disabled-nanoscroller .woodmart-scroll ::-webkit-scrollbar-thumb,.color-scheme-light .disabled-nanoscroller .woodmart-sidebar-scroll ::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,.35)
    }

    .whb-hidden-lg,.whb-hidden-desktop {
        display: none
    }

    .whb-full-width .whb-row > .container,.whb-full-width + .whb-clone .whb-row > .container {
        max-width: 100%;
        width: 95%
    }

    .whb-boxed:not(.whb-sticked) .whb-main-header {
        margin-right: auto;
        margin-left: auto;
        width: 95%
    }

    .whb-boxed:not(.whb-sticked) .whb-main-header .whb-row > .container {
        padding-right: 30px;
        padding-left: 30px;
        max-width: 100%;
        width: 100%
    }

    .whb-boxed:not(.whb-sticked) .whb-main-header:before {
        content: "";
        display: block;
        height: 30px
    }

    .whb-boxed:not(.whb-sticked) .whb-top-bar.whb-without-bg {
        margin-top: -30px
    }

    .whb-boxed:not(.whb-sticked) .whb-top-bar.whb-without-bg > .container {
        padding-right: 0;
        padding-left: 0
    }

    .wrapper-boxed .whb-boxed:not(.whb-sticked) .whb-main-header {
        max-width: 1160px
    }

    .woodmart-search-opened .whb-boxed:not(.whb-sticked) .whb-row {
        padding-right: 0
    }

    .site-mobile-menu li:hover > a {
        background-color: rgba(0,0,0,.04)
    }

    .dropdowns-color-light .site-mobile-menu li:hover > a {
        background-color: rgba(0,0,0,.9)
    }

    .sticky-footer-on .main-page-wrapper,.sticky-footer-on .woodmart-prefooter {
        position: relative
    }

    .sticky-footer-on .main-page-wrapper {
        z-index: 2
    }

    .sticky-footer-on .woodmart-prefooter {
        z-index: 1
    }

    .sticky-footer-on .footer-container {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 800px;
        perspective: 800px
    }

    .browser-Safari .sticky-footer-on .footer-container {
        opacity: 0
    }

    .browser-Safari .sticky-footer-on .visible-footer {
        opacity: 1
    }

    .owl-items-lg-1:not(.owl-loaded) > div {
        width: 100%
    }

    .owl-items-lg-1:not(.owl-loaded) > div:nth-child(n+2) {
        display: none
    }

    .owl-items-lg-2:not(.owl-loaded) > div {
        width: 50%
    }

    .owl-items-lg-2:not(.owl-loaded) > div:nth-child(n+3) {
        display: none
    }

    .owl-items-lg-3:not(.owl-loaded) > div {
        width: 33.3333333333%
    }

    .owl-items-lg-3:not(.owl-loaded) > div:nth-child(n+4) {
        display: none
    }

    .owl-items-lg-4:not(.owl-loaded) > div {
        width: 25%
    }

    .owl-items-lg-4:not(.owl-loaded) > div:nth-child(n+5) {
        display: none
    }

    .owl-items-lg-5:not(.owl-loaded) > div {
        width: 20%
    }

    .owl-items-lg-5:not(.owl-loaded) > div:nth-child(n+6) {
        display: none
    }

    .owl-items-lg-6:not(.owl-loaded) > div {
        width: 16.6666666667%
    }

    .owl-items-lg-6:not(.owl-loaded) > div:nth-child(n+7) {
        display: none
    }

    .owl-items-lg-7:not(.owl-loaded) > div {
        width: 14.2857142857%
    }

    .owl-items-lg-7:not(.owl-loaded) > div:nth-child(n+8) {
        display: none
    }

    .owl-items-lg-8:not(.owl-loaded) > div {
        width: 12.5%
    }

    .owl-items-lg-8:not(.owl-loaded) > div:nth-child(n+9) {
        display: none
    }

    .banner-btn-position-hover .content-banner {
        -webkit-transition: -webkit-transform .25s ease;
        transition: -webkit-transform .25s ease;
        transition: transform .25s ease;
        transition: transform .25s ease, -webkit-transform .25s ease
    }

    .banner-btn-position-hover .banner-inner p:first-child:empty ~ p:last-child {
        margin-top: -10px;
        margin-bottom: 0
    }

    .banner-btn-position-hover .banner-btn-wrapper {
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        opacity: 0;
        -webkit-transition: opacity .25s ease,-webkit-transform .25s ease;
        transition: opacity .25s ease,-webkit-transform .25s ease;
        transition: opacity .25s ease,transform .25s ease;
        transition: opacity .25s ease,transform .25s ease,-webkit-transform .25s ease;
        -webkit-transform: translateY(15px);
        transform: translateY(15px)
    }

    .banner-btn-position-hover:hover .content-banner {
        -webkit-transition: -webkit-transform .3s ease;
        transition: -webkit-transform .3s ease;
        transition: transform .3s ease;
        transition: transform .3s ease, -webkit-transform .3s ease
    }

    .banner-btn-position-hover:hover .banner-btn-wrapper {
        opacity: 1;
        -webkit-transition: opacity .4s ease,-webkit-transform .4s ease;
        transition: opacity .4s ease,-webkit-transform .4s ease;
        transition: opacity .4s ease,transform .4s ease;
        transition: opacity .4s ease,transform .4s ease,-webkit-transform .4s ease;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .banner-btn-position-hover.banner-vr-align-bottom.banner-btn-size-extra-small:hover .content-banner {
        -webkit-transform: translateY(-43px);
        transform: translateY(-43px)
    }

    .banner-btn-position-hover.banner-vr-align-bottom.banner-btn-size-small:hover .content-banner {
        -webkit-transform: translateY(-51px);
        transform: translateY(-51px)
    }

    .banner-btn-position-hover.banner-vr-align-bottom.banner-btn-size-default:hover .content-banner {
        -webkit-transform: translateY(-57px);
        transform: translateY(-57px)
    }

    .banner-btn-position-hover.banner-vr-align-bottom.banner-btn-size-large:hover .content-banner {
        -webkit-transform: translateY(-63px);
        transform: translateY(-63px)
    }

    .banner-btn-position-hover.banner-vr-align-bottom.banner-btn-size-extra-large:hover .content-banner {
        -webkit-transform: translateY(-71px);
        transform: translateY(-71px)
    }

    .banner-btn-position-hover.banner-vr-align-bottom.banner-btn-style-link:hover .content-banner {
        -webkit-transform: translateY(-39px);
        transform: translateY(-39px)
    }

    .banner-btn-position-hover.banner-vr-align-middle.banner-btn-size-extra-small:hover .content-banner {
        -webkit-transform: translateY(-21px);
        transform: translateY(-21px)
    }

    .banner-btn-position-hover.banner-vr-align-middle.banner-btn-size-small:hover .content-banner {
        -webkit-transform: translateY(-25px);
        transform: translateY(-25px)
    }

    .banner-btn-position-hover.banner-vr-align-middle.banner-btn-size-default:hover .content-banner {
        -webkit-transform: translateY(-28px);
        transform: translateY(-28px)
    }

    .banner-btn-position-hover.banner-vr-align-middle.banner-btn-size-large:hover .content-banner {
        -webkit-transform: translateY(-31px);
        transform: translateY(-31px)
    }

    .banner-btn-position-hover.banner-vr-align-middle.banner-btn-size-extra-large:hover .content-banner {
        -webkit-transform: translateY(-35px);
        transform: translateY(-35px)
    }

    .banner-btn-position-hover.banner-vr-align-middle.banner-btn-style-link:hover .content-banner {
        -webkit-transform: translateY(-19px);
        transform: translateY(-19px)
    }

    .quick-shop-wrapper::-webkit-scrollbar {
        width: 3px
    }

    .quick-shop-wrapper::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,.15)
    }

    .quick-shop-wrapper::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.25)
    }

    .color-scheme-light .quick-shop-wrapper::-webkit-scrollbar-track {
        background-color: rgba(255,255,255,.15)
    }

    .color-scheme-light .quick-shop-wrapper::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,.35)
    }

    .offcanvas-sidebar-desktop.admin-bar .area-sidebar-shop {
        top: 32px
    }

    .offcanvas-sidebar-desktop .woodmart-shop-loader:not(.hidden-loader) {
        margin-left: -15px !important
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) {
        left: 0;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .shop-loop-head {
        margin-top: -20px
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs,.offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-shop-tools {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs {
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(129,129,129,.2)
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs .woocommerce-breadcrumb,.offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs .yoast-breadcrumb {
        margin-bottom: 20px
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12).description-area-before .term-description,.offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12).description-area-before .page-description {
        margin-top: -10px;
        margin-bottom: 45px
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) > .woocommerce-notices-wrapper {
        margin-top: -10px;
        margin-bottom: 45px
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woocommerce-result-count {
        display: block
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-shop-tools {
        text-align: right
    }

    .offcanvas-sidebar-desktop .shop-content-area:not(.col-lg-12) .woodmart-show-sidebar-btn {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 500;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        margin-bottom: 0;
        padding-right: 0;
        padding-left: 0;
        max-width: none;
        width: 340px;
        background-color: #fff;
        -webkit-transition: -webkit-transform .25s ease;
        transition: -webkit-transform .25s ease;
        transition: transform .25s ease;
        transition: transform .25s ease, -webkit-transform .25s ease;
        -webkit-transform: translate3d(-340px, 0, 0);
        transform: translate3d(-340px, 0, 0)
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .widget-area {
        padding-top: 30px;
        padding-bottom: 30px
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .sidebar-widget {
        padding-right: 30px;
        padding-left: 30px
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .widget-heading {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .woodmart-sidebar-scroll {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        height: 100%
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .woodmart-sidebar-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        overflow-x: hidden
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .woodmart-sidebar-content:focus {
        outline: none
    }

    .offcanvas-sidebar-desktop .area-sidebar-shop .has-scrollbar .woodmart-sidebar-content {
        overflow: scroll;
        overflow-x: hidden
    }

    .thumbs-position-left > .col-lg-9 .woocommerce-product-gallery__wrapper {
        margin-left: -15px;
        width: auto
    }

    .thumbs-position-left > .col-lg-9 .product-additional-galleries {
        left: -15px
    }

    .woodmart-woocommerce-layered-nav .woodmart-scroll:hover .woodmart-scroll-content:not(.show-labels-off) + .woodmart-scroll-pane {
        margin-left: 10px
    }

    .browser-Firefox .woodmart-woocommerce-layered-nav .has-scrollbar .woodmart-scroll-pane,.browser-Edge .woodmart-woocommerce-layered-nav .has-scrollbar .woodmart-scroll-pane,.browser-Internet .woodmart-woocommerce-layered-nav .has-scrollbar .woodmart-scroll-pane {
        position: absolute;
        margin-left: 0 !important;
        opacity: 1
    }

    .browser-Firefox .woodmart-woocommerce-layered-nav .has-scrollbar .swatches-display-list li,.browser-Edge .woodmart-woocommerce-layered-nav .has-scrollbar .swatches-display-list li,.browser-Internet .woodmart-woocommerce-layered-nav .has-scrollbar .swatches-display-list li {
        margin-right: 9px
    }

    .products-bordered-grid .col-lg-12:first-child,.products-bordered-grid .col-lg-6:nth-child(-n+2),.products-bordered-grid .col-lg-4:nth-child(-n+3),.products-bordered-grid .col-lg-3:nth-child(-n+4),.products-bordered-grid .col-lg-20_0:nth-child(-n+5),.products-bordered-grid .col-lg-2:nth-child(-n+6) {
        border-top-width: 1px
    }
}

@media(min-width: 1200px) {
    .hidden-lg {
        display:none !important
    }

    .visible-lg {
        display: block !important
    }

    .wrapper-full-width-content .container {
        max-width: 100%
    }

    body[class*=wrapper-boxed] .container {
        max-width: 1160px;
        width: 100%
    }

    body[class*=wrapper-boxed] .website-wrapper {
        margin: 0 auto;
        max-width: 1200px;
        -webkit-box-shadow: 0 1px 9px rgba(0,0,0,.08);
        box-shadow: 0 1px 9px rgba(0,0,0,.08)
    }

    body[class*=wrapper-boxed] .header-banner {
        margin: 0 auto;
        max-width: 1200px
    }

    body[class*=wrapper-boxed] .whb-header:not(.whb-boxed) .whb-main-header,body[class*=wrapper-boxed].sticky-footer-on .footer-container,body[class*=wrapper-boxed] .main-nav .menu-item-design-full-width .sub-menu-dropdown,body[class*=wrapper-boxed] .whb-secondary-menu .menu-item-design-full-width .sub-menu-dropdown {
        right: auto;
        left: auto;
        max-width: 1200px;
        width: 100vw
    }

    .platform-Windows body[class*=wrapper-boxed].woodmart-search-opened .header-banner,.platform-Windows body[class*=wrapper-boxed].woodmart-search-opened .whb-row,.platform-Windows body[class*=wrapper-boxed].woodmart-search-opened .main-page-wrapper {
        padding-right: 0
    }

    body[class*=wrapper-boxed] .woodmart-search-full-screen {
        margin: 0 auto;
        max-width: 1200px
    }

    body[class*=wrapper-boxed] div[class*=woodmart-carousel-spacing] .owl-nav > div[class*=prev] {
        margin-left: 10px
    }

    body[class*=wrapper-boxed] div[class*=woodmart-carousel-spacing] .owl-nav > div[class*=next] {
        margin-right: 10px
    }

    body[class*=wrapper-boxed] .wrap-loading-arrow > div[class*=prev] {
        margin-left: 10px
    }

    body[class*=wrapper-boxed] .wrap-loading-arrow > div[class*=next] {
        margin-left: -10px
    }

    .wrapper-boxed .website-wrapper {
        overflow: hidden
    }

    .wrapper-boxed [data-vc-full-width] {
        left: auto;
        padding-right: 0;
        padding-left: 0;
        width: auto
    }

    .wrapper-boxed-2 .website-wrapper {
        overflow: visible
    }

    .banner-increased-padding .banner-title-small .banner-subtitle {
        font-size: 1vw
    }

    .banner-increased-padding .banner-title-small .banner-title {
        font-size: 1.2vw
    }

    .banner-increased-padding .banner-title-default .banner-subtitle {
        font-size: 1vw
    }

    .banner-increased-padding .banner-title-default .banner-title {
        font-size: 1.6vw
    }

    .banner-increased-padding .banner-title-large .banner-subtitle {
        font-size: 1.1vw
    }

    .banner-increased-padding .banner-title-large .banner-title {
        font-size: 2vw
    }

    .banner-increased-padding .banner-title-extra-large .banner-subtitle {
        font-size: 1.3vw
    }

    .banner-increased-padding .banner-title-extra-large .banner-title {
        font-size: 2.3vw
    }

    .site-content:not(.col-lg-12) .cart-content-wrapper .cart-data-form {
        -ms-flex-preferred-size: 60%;
        flex-basis: 60%;
        max-width: 60%
    }

    .site-content:not(.col-lg-12) .cart-content-wrapper .cart-totals-section {
        -ms-flex-preferred-size: 40%;
        flex-basis: 40%;
        max-width: 40%
    }
}

@media(max-width: 1200px) {
    .banner-title-small .banner-subtitle {
        font-size:1vw
    }

    .banner-title-small .banner-title {
        font-size: 1.2vw
    }

    .banner-title-default .banner-subtitle {
        font-size: 1vw
    }

    .banner-title-default .banner-title {
        font-size: 1.6vw
    }

    .banner-title-large .banner-subtitle {
        font-size: 1.1vw
    }

    .banner-title-large .banner-title {
        font-size: 2vw
    }

    .banner-title-extra-large .banner-subtitle {
        font-size: 1.3vw
    }

    .banner-title-extra-large .banner-title {
        font-size: 2.3vw
    }
}

@media(min-width: 992px)and (max-width: 1199px) {
    .hidden-md {
        display:none !important
    }

    .visible-md {
        display: block !important
    }
}

@media(max-width: 1024px) {
    .cart-widget-side,.login-form-side,.mobile-nav {
        width:300px
    }

    .slide-from-left {
        -webkit-transform: translate3d(-300px, 0, 0);
        transform: translate3d(-300px, 0, 0)
    }

    .cart-widget-side,.login-form-side,.slide-from-right {
        -webkit-transform: translate3d(300px, 0, 0);
        transform: translate3d(300px, 0, 0)
    }

    body .tablet-bg-img-hidden,.wpb_column.tablet-bg-img-hidden > div {
        background-image: none !important
    }

    .woodmart-parallax {
        background-attachment: scroll !important
    }

    .text-larger {
        font-size: inherit
    }

    .woodmart-tltp .woodmart-tooltip-label {
        display: none !important
    }

    .woodmart-close-side {
        top: -150px;
        height: calc(100vh + 300px)
    }

    .scrollToTop {
        right: 12px;
        bottom: 12px;
        width: 40px;
        height: 40px
    }

    .scrollToTop:after {
        font-size: 14px;
        line-height: 40px
    }

    .page-title {
        padding: 15px 0
    }

    .page-title .entry-title {
        font-size: 36px
    }

    .page-title .woodmart-checkout-steps ul li {
        font-size: 18px
    }

    .close-header-banner {
        width: 50px
    }

    .close-header-banner + .header-banner-link {
        right: 50px
    }

    .whb-visible-lg,.whb-hidden-mobile {
        display: none
    }

    .woodmart-search-dropdown,.woodmart-search-full-screen,.dropdown-cart,.full-screen-burger-icon,.full-screen-wrapper,.menu-item-register .sub-menu-dropdown {
        display: none
    }

    .search-button:not(.mobile-search-icon) {
        display: none
    }

    .whb-general-header .sub-menu-dropdown {
        margin: 0
    }

    .whb-general-header .sub-menu-dropdown:after {
        height: auto
    }

    .autocomplete-suggestion {
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px
    }

    .autocomplete-suggestion .suggestion-thumb {
        max-width: 45px
    }

    .autocomplete-suggestion .suggestion-title {
        font-size: 12px
    }

    .autocomplete-suggestion .suggestion-price {
        font-size: 12px;
        line-height: 1
    }

    .min-footer {
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-align: center
    }

    .min-footer .col-right {
        text-align: center
    }

    .min-footer > div {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        margin-bottom: 15px;
        max-width: 100%
    }

    .min-footer > div:last-child {
        margin-bottom: 0
    }

    .owl-nav > div,.wrap-loading-arrow > div {
        margin-top: -20px;
        width: 40px;
        height: 40px
    }

    .owl-nav > div:after,.wrap-loading-arrow > div:after {
        font-weight: 700;
        font-size: 14px;
        line-height: 14px
    }

    .owl-nav > div[class*=prev],.owl-nav > div[class*=next],.wrap-loading-arrow > div[class*=prev],.wrap-loading-arrow > div[class*=next] {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    .owl-nav > div[class*=prev],.wrap-loading-arrow > div[class*=prev] {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        padding-left: 0
    }

    .owl-nav > div[class*=next],.wrap-loading-arrow > div[class*=next] {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        padding-right: 0
    }

    .wrap-loading-arrow > div {
        -webkit-transition: all .15s ease;
        transition: all .15s ease
    }

    .owl-nav > div {
        visibility: visible;
        opacity: 1;
        pointer-events: visible
    }

    .owl-nav > div[class*=prev] {
        left: 5px
    }

    .owl-nav > div[class*=next] {
        right: 5px
    }

    div[class*=woodmart-carousel-spacing] .owl-nav > div[class*=prev] {
        margin-left: 35px
    }

    div[class*=woodmart-carousel-spacing] .owl-nav > div[class*=next] {
        margin-right: 35px
    }

    .slider-type-product,.slider-type-post,.categories-style-carousel {
        margin-bottom: 20px
    }

    .owl-loaded:after,.owl-loaded:before {
        content: none
    }

    .disable-owl-mobile .owl-carousel {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 10px !important;
        mask-image: linear-gradient(to left, transparent 5px, #000 40px);
        -webkit-mask-image: linear-gradient(to left, transparent 5px, #000 40px)
    }

    .disable-owl-mobile .owl-carousel > div {
        display: block !important;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto
    }

    .disable-owl-mobile.banners-carousel-wrapper .content-banner {
        -webkit-animation: none;
        animation: none
    }

    .disable-owl-mobile[data-hide_pagination_control=no] .owl-carousel {
        padding-bottom: 10px !important
    }

    .disable-owl-mobile.slider-type-post .owl-carousel {
        padding-bottom: 11px !important
    }

    .error404 .page-header:before {
        font-size: 280px;
        line-height: 240px
    }

    .error404 .page-title {
        padding: 70px 0;
        font-size: 50px
    }

    .error404 .page-content h2 {
        font-size: 24px
    }

    .error404 .page-content p {
        font-size: 14px
    }

    .woodmart-text-size-large ul {
        font-size: 16px
    }

    .woodmart-text-size-large.woodmart-list-shape-icon .list-icon {
        min-width: 30px;
        height: 30px;
        font-size: 16px;
        line-height: 30px
    }

    .woodmart-text-size-large.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
        font-size: 12px
    }

    .woodmart-text-size-extra-large ul {
        font-size: 18px
    }

    .woodmart-text-size-extra-large.woodmart-list-shape-icon .list-icon {
        min-width: 35px;
        height: 35px;
        font-size: 18px;
        line-height: 35px
    }

    .woodmart-text-size-extra-large.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
        font-size: 14px
    }

    .widget_nav_mega_menu .sub-menu-dropdown {
        display: none
    }

    .widget_nav_mega_menu .vertical-navigation .item-level-0.menu-item-has-children > a:after {
        content: none
    }

    .woodmart-images-gallery.view-carousel,.woodmart-images-gallery.view-justified {
        margin-bottom: 20px
    }

    .instagram-widget .hover-mask {
        display: none
    }

    .woodmart-title-size-medium .title-subtitle,.woodmart-title-size-large .title-subtitle,.woodmart-title-size-extra-large .title-subtitle {
        font-size: 14px
    }

    .woodmart-title-size-medium .woodmart-title-container,.woodmart-title-size-large .woodmart-title-container,.woodmart-title-size-extra-large .woodmart-title-container {
        font-size: 22px
    }

    .woodmart-title-size-medium .title-after_title,.woodmart-title-size-large .title-after_title,.woodmart-title-size-extra-large .title-after_title {
        font-size: 14px
    }

    .woodmart-title-style-underlined-2.woodmart-title-size-large .title,.woodmart-title-style-underlined-2.woodmart-title-size-extra-large .title {
        border-width: 2px
    }

    .woodmart-title-style-underlined-2:not(.woodmart-title-color-gradient).woodmart-title-size-extra-large .title {
        text-shadow: 1px 1px #fff,1px -1px #fff,-1px 1px #fff,-1px -1px #fff
    }

    .wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-top .vc_tta-tabs-container:after,.wpb-js-composer .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-bottom .vc_tta-tabs-container:after {
        content: ""
    }

    .content-banner .content-size-large {
        font-size: 16px
    }

    .content-width-10 {
        max-width: 30%
    }

    .content-width-20 {
        max-width: 40%
    }

    .content-width-30 {
        max-width: 50%
    }

    .content-width-40 {
        max-width: 60%
    }

    .content-width-50 {
        max-width: 70%
    }

    .content-width-60 {
        max-width: 80%
    }

    .content-width-70 {
        max-width: 90%
    }

    .woodmart-sticky-social {
        display: none
    }

    .box-with-text.text-size-large {
        font-size: 52px
    }

    .box-icon-with-bg.text-size-large .info-box-icon,.box-icon-with-border.text-size-large .info-box-icon {
        min-width: 100px;
        height: 100px;
        line-height: 100px
    }

    .box-btn-hover .info-btn-wrapper {
        position: static;
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }

    .box-style-border.box-btn-hover .info-btn-wrapper {
        position: absolute
    }

    .timer-size-large .woodmart-timer > span,.timer-size-xlarge .woodmart-timer > span {
        min-width: 65px;
        min-height: 65px;
        font-size: 24px;
        line-height: 24px
    }

    .timer-size-large .woodmart-timer > span span,.timer-size-xlarge .woodmart-timer > span span {
        font-size: 12px;
        line-height: 12px
    }

    p.form-row-first,p.form-row-last {
        float: none;
        width: 100%
    }

    .without-title.title-shop {
        padding: 0
    }

    .with-back-btn.title-design-centered:not(.without-title) .shop-title-wrapper {
        margin-right: 35px;
        margin-left: 35px
    }

    .woodmart-header-links .menu-item-my-account .sub-menu-dropdown {
        display: none
    }

    .woodmart-show-categories {
        display: block
    }

    .woodmart-product-categories {
        display: none;
        margin-right: 0;
        margin-left: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: rgba(172,172,172,.09);
        text-align: left
    }

    .woodmart-product-categories > li {
        display: block
    }

    .woodmart-product-categories .children {
        position: static;
        display: none;
        visibility: visible;
        margin-top: 0;
        width: 100%;
        background-color: rgba(172,172,172,.09);
        -webkit-box-shadow: none;
        box-shadow: none;
        opacity: 1;
        -webkit-transform: none;
        transform: none;
        pointer-events: visible;
        pointer-events: unset
    }

    .woodmart-product-categories .children .category-name {
        font-weight: 600
    }

    .woodmart-product-categories .children:after {
        content: none
    }

    .color-scheme-light .woodmart-product-categories {
        background-color: rgba(0,0,0,.4)
    }

    .color-scheme-light .woodmart-product-categories .children {
        background-color: rgba(0,0,0,.2)
    }

    .category-nav-link a {
        padding-top: 15px;
        padding-right: 20px;
        padding-bottom: 15px;
        padding-left: 20px
    }

    .hasno-product-count.woodmart-product-categories {
        margin-right: 0;
        margin-left: 0
    }

    .without-title .woodmart-product-categories {
        display: none
    }

    .without-title .woodmart-show-categories {
        display: inline-block
    }

    .without-title .category-nav-link a {
        padding-top: 15px;
        padding-bottom: 15px
    }

    .without-title .shop-title-wrapper {
        top: 8px;
        margin-top: 0
    }

    .without-title.with-back-btn .nav-shop {
        padding-right: 0;
        padding-left: 0
    }

    .title-design-default.without-title .shop-title-wrapper {
        position: static
    }

    .shop-loop-head {
        margin-top: -10px;
        margin-bottom: 10px
    }

    .description-area-before .term-description,.description-area-before .page-description {
        margin-top: -15px
    }

    .woodmart-products-shop-view,.woodmart-products-per-page {
        display: none
    }

    .product-grid-item .hover-img {
        display: none
    }

    .product-grid-item .woodmart-buttons {
        opacity: 1
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons {
        background-color: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-transform: none;
        transform: none
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons > div,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons > div {
        margin-bottom: 5px
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons > div a,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons > div a {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #fff;
        -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1);
        box-shadow: 1px 1px 1px rgba(0,0,0,.1)
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons > div a:before,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons > div a:before {
        font-size: 14px
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons > div a:after,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons > div a:after {
        margin-top: -7px;
        margin-left: -7px;
        width: 14px;
        height: 14px
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons > div:last-child,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons > div:last-child {
        margin-bottom: 0
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons .quick-view,.product-grid-item:not(.woodmart-hover-base) .woodmart-buttons .product-compare-button,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons .quick-view,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons .product-compare-button {
        display: none
    }

    .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons .woodmart-add-btn .button:not(.add_to_cart_button):before,.product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons .woodmart-add-btn .button:not(.add_to_cart_button):before {
        font-size: 14px
    }

    .color-scheme-light .product-grid-item:not(.woodmart-hover-base) .woodmart-buttons > div a,.color-scheme-light .product-grid-item.woodmart-hover-base.product-in-carousel .woodmart-buttons > div a {
        background-color: #101010
    }

    .woodmart-hover-base .content-product-imagin {
        top: -10px;
        right: -10px;
        left: -10px
    }

    .woodmart-hover-base.product-in-carousel .woodmart-buttons {
        visibility: visible;
        opacity: 1
    }

    .woodmart-hover-button .product-element-top:before,.woodmart-hover-info-alt .product-element-top:before {
        content: none
    }

    .woodmart-hover-button .woodmart-buttons,.woodmart-hover-info-alt .woodmart-buttons {
        top: 10px;
        right: 10px;
        visibility: visible
    }

    .woodmart-hover-button .woodmart-buttons > div a,.woodmart-hover-info-alt .woodmart-buttons > div a {
        background-color: #101010 !important
    }

    .woodmart-hover-button .hover-mask,.woodmart-hover-info-alt .hover-mask {
        display: none
    }

    .woodmart-hover-alt .swap-wrapp {
        overflow: visible;
        margin-bottom: 5px;
        height: auto;
        line-height: 1.3
    }

    .woodmart-hover-alt .wrap-price {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end
    }

    .woodmart-hover-alt .swap-elements .price {
        margin-bottom: 5px
    }

    .woodmart-hover-alt .swap-elements .price,.woodmart-hover-alt .swap-elements .btn-add-swap {
        overflow: visible;
        height: auto;
        line-height: 1.3
    }

    .woodmart-hover-alt .woodmart-product-cats,.woodmart-hover-alt .woodmart-product-brands-links {
        margin-bottom: 5px
    }

    .woodmart-hover-alt.purchasable:hover .swap-elements,.woodmart-hover-alt.product-type-grouped:hover .swap-elements {
        -webkit-transform: none;
        transform: none
    }

    .woodmart-hover-info .product-title {
        font-size: 14px
    }

    .woodmart-hover-quick .woodmart-add-btn {
        -webkit-transform: none;
        transform: none
    }

    .woodmart-hover-quick .woodmart-add-btn > a:not(.added_to_cart) {
        width: 40px;
        height: 40px
    }

    .woodmart-hover-quick .woodmart-add-btn > a:not(.added_to_cart) span:not(.woodmart-tooltip-label) {
        display: none
    }

    .woodmart-hover-quick .woodmart-add-btn > a:not(.added_to_cart):before {
        -webkit-transform: none;
        transform: none
    }

    .woodmart-hover-icons .woodmart-buttons {
        position: absolute;
        top: 10px;
        right: 10px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 0
    }

    .woodmart-hover-icons .wrapp-buttons {
        position: static;
        visibility: visible;
        opacity: 1;
        -webkit-transform: none !important;
        transform: none !important
    }

    .woodmart-hover-info-alt .top-information {
        position: static;
        padding: 0;
        opacity: 1
    }

    .woodmart-hover-info-alt .product-image-link {
        margin-bottom: 10px
    }

    .woodmart-spacing-0 .woodmart-hover-info-alt,.woodmart-spacing-2 .woodmart-hover-info-alt {
        margin-bottom: 10px
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .top-information .amount,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .top-information .price,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .top-information .price ins,body:not(.woodmart-dark) .woodmart-hover-info-alt .top-information .amount,body:not(.woodmart-dark) .woodmart-hover-info-alt .top-information .price,body:not(.woodmart-dark) .woodmart-hover-info-alt .top-information .price ins {
        color: #000
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .top-information del .amount,body:not(.woodmart-dark) .woodmart-hover-info-alt .top-information del .amount {
        color: #bbb
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woocommerce-price-suffix,body:not(.woodmart-dark) .woodmart-hover-info-alt .woocommerce-price-suffix {
        color: #777
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .quick-shop-wrapper,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .product-actions,body:not(.woodmart-dark) .woodmart-hover-info-alt .quick-shop-wrapper,body:not(.woodmart-dark) .woodmart-hover-info-alt .product-actions {
        display: none
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt h3.product-title a,body:not(.woodmart-dark) .woodmart-hover-info-alt h3.product-title a {
        color: #333
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt h3.product-title a:hover,body:not(.woodmart-dark) .woodmart-hover-info-alt h3.product-title a:hover {
        color: #333;
        opacity: .8
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .swatches-on-grid .swatch-on-grid,body:not(.woodmart-dark) .woodmart-hover-info-alt .swatches-on-grid .swatch-on-grid {
        color: #000
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .swatches-on-grid .current-swatch:after,body:not(.woodmart-dark) .woodmart-hover-info-alt .swatches-on-grid .current-swatch:after {
        background-color: #000
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-cats,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-brands-links,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-cats,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-brands-links {
        color: #9e9e9e
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-cats a,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-brands-links a,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-cats a,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-brands-links a {
        color: #9e9e9e
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-cats a:hover,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-cats a:focus,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-brands-links a:hover,div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .woodmart-product-brands-links a:focus,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-cats a:hover,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-cats a:focus,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-brands-links a:hover,body:not(.woodmart-dark) .woodmart-hover-info-alt .woodmart-product-brands-links a:focus {
        color: #5c5c5c
    }

    div[class^=vc_]:not(.color-scheme-light) .woodmart-hover-info-alt .star-rating:before,body:not(.woodmart-dark) .woodmart-hover-info-alt .star-rating:before {
        color: #bbb
    }

    .categories-style-masonry-first .category-grid-item:first-child .category-title {
        font-size: 20px
    }

    .single-product .site-content {
        margin-bottom: 25px
    }

    .single-product-page > div:not(:last-child) {
        margin-bottom: 25px
    }

    .related-and-upsells:empty {
        margin-top: -25px
    }

    .poduct-tabs-inner > div:not(:last-child) {
        margin-bottom: 25px
    }

    .breadcrumbs-location-below_header .single-breadcrumbs-wrapper {
        margin-top: -20px;
        margin-bottom: 10px
    }

    .breadcrumbs-location-summary .single-product-page {
        margin-top: -15px
    }

    .single-breadcrumbs-wrapper .single-breadcrumbs,.single-breadcrumbs-wrapper .container {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .single-breadcrumbs-wrapper .woocommerce-breadcrumb .breadcrumb-link-last {
        margin-right: 0;
        color: #333;
        font-weight: 600
    }

    .single-breadcrumbs-wrapper .woocommerce-breadcrumb .breadcrumb-link-last:after {
        content: none
    }

    .single-breadcrumbs-wrapper .woocommerce-breadcrumb .breadcrumb-last {
        display: none
    }

    .thumbs-position-left .woocommerce-product-gallery__wrapper {
        margin-bottom: 4px
    }

    .image-full-width .product-image-summary-inner > div:not(:last-child) {
        margin-bottom: 25px
    }

    .product-360-button > a,.product-video-button > a,.woodmart-show-product-gallery-wrap > a {
        min-width: 40px;
        height: 40px;
        line-height: 40px
    }

    .product-360-button > a:before,.product-video-button > a:before,.woodmart-show-product-gallery-wrap > a:before {
        width: 40px;
        height: 40px;
        font-size: 14px;
        line-height: 40px
    }

    .product-360-button > a:before {
        font-size: 22px
    }

    .product-image-summary .entry-title {
        margin-bottom: 15px;
        font-size: 24px
    }

    .product-image-summary .summary-inner > .price {
        margin-bottom: 15px;
        font-size: 18px
    }

    .product-image-summary .woocommerce-product-details__short-description,.product-image-summary .shop_attributes {
        margin-bottom: 20px
    }

    .product-design-default .woodmart-product-brands {
        float: none;
        margin-left: 0
    }

    .product-design-default .woodmart-product-brands a {
        display: inline-block;
        padding: 0;
        min-height: 0;
        background-color: transparent !important;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .product-design-default .woodmart-product-brands a:hover {
        -webkit-box-shadow: none;
        box-shadow: none;
        opacity: .5
    }

    .woodmart-before-product-tabs {
        margin-top: -26px
    }

    .product-tabs-wrapper {
        padding-top: 25px;
        padding-bottom: 25px;
        border-top: none
    }

    .woocommerce-tabs .woodmart-accordion-title {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 14px
    }

    .woocommerce-tabs .woocommerce-Reviews-title {
        display: none
    }

    .woocommerce-Tabs-panel {
        -webkit-animation: none;
        animation: none
    }

    .tabs-layout-accordion .woodmart-scroll .woodmart-scroll-content {
        max-height: none
    }

    .tabs-layout-tabs {
        border-top: 2px solid rgba(119,119,119,.17)
    }

    .tabs-layout-tabs .woodmart-accordion-title {
        display: block
    }

    .tabs-layout-tabs .tabs {
        display: none
    }

    .tabs-layout-tabs .woodmart-tab-wrapper {
        border-bottom: 1px solid rgba(119,119,119,.17)
    }

    .tabs-layout-tabs .woodmart-tab-wrapper .wc-tab {
        padding-bottom: 20px
    }

    .tabs-layout-tabs .woodmart-tab-wrapper .wc-tab > h2:first-child {
        display: none
    }

    .tabs-layout-tabs #tab-additional_information .wc-tab-inner > div > h2:first-child {
        max-width: 100%
    }

    .tabs-layout-tabs #tab-additional_information .shop_attributes {
        max-width: 100%
    }

    .tabs-type-tabs:not(.reviews-location-separate) .product-tabs-wrapper,.tabs-type-tabs.meta-location-after_tabs .product-tabs-wrapper {
        border-bottom: none
    }

    .tabs-location-standard.reviews-location-separate.tabs-type-tabs .woocommerce-tabs {
        padding-bottom: 0;
        border-bottom: none
    }

    .tabs-location-standard.tabs-type-accordion .woodmart-before-product-tabs {
        margin-top: -26px
    }

    .woocommerce-Reviews {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: 0;
        margin-left: 0
    }

    .woocommerce-Reviews #comments,.woocommerce-Reviews #review_form_wrapper {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        padding-right: 0;
        padding-left: 0;
        max-width: 100%;
        width: 100%
    }

    .woocommerce-Reviews .commentlist {
        margin-top: 0;
        margin-bottom: 25px
    }

    .woocommerce-Reviews .commentlist li:not(:last-child) {
        margin-bottom: 5px;
        padding-bottom: 5px
    }

    .product-design-default .variations_form .reset_variations,.popup-quick-view .variations_form .reset_variations {
        position: absolute;
        bottom: -30px;
        left: 0;
        margin-left: 0
    }

    .product-design-default .variations_form.variation-swatch-selected .variations,.popup-quick-view .variations_form.variation-swatch-selected .variations {
        margin-bottom: 50px
    }

    .popup-quick-view .view-details-btn {
        -webkit-transform: none;
        transform: none
    }

    .popup-quick-view .entry-summary .entry-title {
        font-size: 24px
    }

    .woodmart-sticky-btn .price del,.woodmart-sticky-btn .price ins {
        display: block
    }

    .woodmart-my-account-sidebar {
        -ms-flex-preferred-size: 35%;
        flex-basis: 35%;
        max-width: 35%;
        width: 35%
    }

    .woocommerce-MyAccount-content {
        -ms-flex-preferred-size: 65%;
        flex-basis: 65%;
        max-width: 65%;
        width: 65%
    }

    .woodmart-my-account-links > div {
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        max-width: 50%;
        width: 50%
    }

    td.product-thumbnail img {
        min-width: 65px;
        max-width: 65px
    }

    .cart-content-wrapper .cart-data-form {
        margin-bottom: 40px;
        padding-top: 0
    }

    .cross-sells {
        margin-top: 30px
    }

    .cart-empty {
        font-size: 42px
    }

    .cart-empty:before {
        font-size: 140px;
        line-height: 140px
    }

    .cart-empty:after {
        top: 22px;
        margin-left: -8px;
        font-size: 38px;
        line-height: 38px
    }

    .checkout_coupon .input-text {
        min-width: 0
    }

    .checkout_coupon .button {
        width: 100%
    }

    .woocommerce-lost-password .site-content .woocommerce > p:before {
        font-size: 110px;
        line-height: 110px
    }

    .woodmart-woocommerce-layered-nav .woodmart-scroll {
        overflow-y: scroll;
        padding-right: 5px
    }

    .woodmart-woocommerce-layered-nav .woodmart-scroll-content {
        overflow: visible
    }

    .woodmart-woocommerce-layered-nav .swatches-display-double li {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%
    }

    .woodmart-woocommerce-layered-nav .swatches-display-double li:last-child {
        margin-bottom: 0
    }

    .woodmart-products-tabs.tabs-design-simple .owl-nav > div,.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow > div {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .woodmart-highlighted-products .owl-nav > div,.woodmart-highlighted-products .wrap-loading-arrow > div {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .woodmart-highlighted-products .owl-nav > div[class*=next],.woodmart-highlighted-products .wrap-loading-arrow > div[class*=next] {
        padding-right: 0
    }

    .woodmart-highlighted-products .owl-nav > div[class*=prev],.woodmart-highlighted-products .wrap-loading-arrow > div[class*=prev] {
        padding-left: 0
    }

    .upsells-widget .small-product-content:hover .small-product-info {
        -webkit-transform: none;
        transform: none
    }

    .upsells-widget .small-product-info {
        position: static;
        z-index: 4;
        visibility: visible;
        padding: 10px;
        background: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        opacity: 1;
        pointer-events: visible
    }

    .upsells-widget .small-product-info:after {
        content: none
    }
}

@media(min-width: 769px)and (max-width: 1024px) {
    .woodmart-columns-3 > div {
        -ms-flex-preferred-size:50%;
        flex-basis: 50%;
        max-width: 50%;
        width: 50%
    }

    .woodmart-columns-4 > div {
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        max-width: 50%;
        width: 50%
    }

    .woodmart-columns-5 > div {
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        max-width: 50%;
        width: 50%
    }

    .woodmart-columns-6 > div {
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        max-width: 50%;
        width: 50%
    }

    .owl-items-md-1:not(.owl-loaded) > div {
        width: 100%
    }

    .owl-items-md-1:not(.owl-loaded) > div:nth-child(n+2) {
        display: none
    }

    .owl-items-md-2:not(.owl-loaded) > div {
        width: 50%
    }

    .owl-items-md-2:not(.owl-loaded) > div:nth-child(n+3) {
        display: none
    }

    .owl-items-md-3:not(.owl-loaded) > div {
        width: 33.3333333333%
    }

    .owl-items-md-3:not(.owl-loaded) > div:nth-child(n+4) {
        display: none
    }

    .owl-items-md-4:not(.owl-loaded) > div {
        width: 25%
    }

    .owl-items-md-4:not(.owl-loaded) > div:nth-child(n+5) {
        display: none
    }

    .vc_col-sm-6 .banner-title-small .banner-subtitle,.owl-items-md-2 .banner-title-small .banner-subtitle {
        font-size: 1vw
    }

    .vc_col-sm-6 .banner-title-small .banner-title,.owl-items-md-2 .banner-title-small .banner-title {
        font-size: 1.6vw
    }

    .vc_col-sm-6 .banner-title-default .banner-subtitle,.owl-items-md-2 .banner-title-default .banner-subtitle {
        font-size: 1.1vw
    }

    .vc_col-sm-6 .banner-title-default .banner-title,.owl-items-md-2 .banner-title-default .banner-title {
        font-size: 2vw
    }

    .vc_col-sm-6 .banner-title-large .banner-subtitle,.owl-items-md-2 .banner-title-large .banner-subtitle {
        font-size: 1.3vw
    }

    .vc_col-sm-6 .banner-title-large .banner-title,.owl-items-md-2 .banner-title-large .banner-title {
        font-size: 2.3vw
    }

    .banner-hide-btn-tablet {
        display: none !important
    }

    .offcanvas-sidebar-tablet.admin-bar .area-sidebar-shop {
        top: 32px
    }

    .offcanvas-sidebar-tablet .woodmart-shop-loader:not(.hidden-loader) {
        margin-left: -15px !important
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) {
        left: 0;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .shop-loop-head {
        margin-top: -25px
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs,.offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-shop-tools {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12).description-area-before .term-description,.offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12).description-area-before .page-description {
        margin-top: -15px;
        margin-bottom: 45px
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) > .woocommerce-notices-wrapper {
        margin-top: -15px;
        margin-bottom: 45px
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs {
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(129,129,129,.2)
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs .woocommerce-breadcrumb,.offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs .yoast-breadcrumb {
        margin-bottom: 15px
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woocommerce-result-count {
        display: block;
        margin-bottom: 15px
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-shop-tools {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .offcanvas-sidebar-tablet .shop-content-area:not(.col-lg-12) .woodmart-show-sidebar-btn {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex
    }

    .offcanvas-sidebar-tablet .shop-sidebar-opener:not(.sticky-toolbar) {
        display: block
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 500;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        margin-bottom: 0;
        padding-right: 0;
        padding-left: 0;
        max-width: none;
        width: 300px;
        background-color: #fff;
        -webkit-transition: -webkit-transform .25s ease;
        transition: -webkit-transform .25s ease;
        transition: transform .25s ease;
        transition: transform .25s ease, -webkit-transform .25s ease;
        -webkit-transform: translate3d(-300px, 0, 0);
        transform: translate3d(-300px, 0, 0)
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop .widget-area {
        padding-top: 30px;
        padding-bottom: 30px
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop .sidebar-widget {
        padding-right: 30px;
        padding-left: 30px
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop .widget-heading {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop .woodmart-sidebar-scroll {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        height: 100%
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop .woodmart-sidebar-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        overflow-x: hidden
    }

    .offcanvas-sidebar-tablet .area-sidebar-shop .woodmart-sidebar-content:focus {
        outline: none
    }

    .woocommerce-orders-table {
        display: block
    }

    .woocommerce-orders-table thead,.woocommerce-orders-table th {
        display: none
    }

    .woocommerce-orders-table tbody,.woocommerce-orders-table tfoot,.woocommerce-orders-table tr {
        display: block
    }

    .woocommerce-orders-table tr {
        position: relative;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(129,129,129,.2)
    }

    .woocommerce-orders-table tr:last-child {
        margin-bottom: 0
    }

    .woocommerce-orders-table td {
        display: block;
        margin-bottom: 8px;
        padding: 0 0 8px 0;
        border-bottom: none;
        text-align: right
    }

    .woocommerce-orders-table td:before {
        content: attr(data-title);
        float: left;
        padding-top: 3px;
        color: #2d2a2a;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 12px
    }

    .woocommerce-orders-table td:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none
    }

    .products-bordered-grid .col-md-12:first-child,.products-bordered-grid .col-md-6:nth-child(-n+2),.products-bordered-grid .col-md-4:nth-child(-n+3),.products-bordered-grid .col-md-3:nth-child(-n+4) {
        border-top-width: 1px
    }
}

@media(min-width: 768px)and (max-width: 1024px) {
    .reset-margin-tablet > .vc_column-inner {
        margin-right:0 !important;
        margin-left: 0 !important
    }
}

@media(max-width: 991px) {
    .woodmart-title-width-70 .woodmart-title-container,.woodmart-title-width-70 .title-after_title,.woodmart-title-width-70 .title-subtitle,.woodmart-title-width-60 .woodmart-title-container,.woodmart-title-width-60 .title-after_title,.woodmart-title-width-60 .title-subtitle {
        max-width:80%
    }

    .woodmart-title-width-50 .woodmart-title-container,.woodmart-title-width-50 .title-after_title,.woodmart-title-width-50 .title-subtitle,.woodmart-title-width-40 .woodmart-title-container,.woodmart-title-width-40 .title-after_title,.woodmart-title-width-40 .title-subtitle {
        max-width: 60%
    }

    .woodmart-title-width-30 .woodmart-title-container,.woodmart-title-width-30 .title-after_title,.woodmart-title-width-30 .title-subtitle,.woodmart-title-width-20 .woodmart-title-container,.woodmart-title-width-20 .title-after_title,.woodmart-title-width-20 .title-subtitle {
        max-width: 40%
    }
}

@media(min-width: 768px)and (max-width: 991px) {
    .hidden-sm {
        display:none !important
    }

    .visible-sm {
        display: block !important
    }

    .row-reverse-tablet:not(.vc_row-flex) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .row-reverse-tablet > .wpb_column:nth-child(1) {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .row-reverse-tablet > .wpb_column:nth-child(2) {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .row-reverse-tablet > .wpb_column:nth-child(3) {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .row-reverse-tablet > .wpb_column:nth-child(4) {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .row-reverse-tablet > .wpb_column:nth-child(5) {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .row-reverse-tablet > .wpb_column:nth-child(6) {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .row-reverse-tablet > .wpb_column:nth-child(7) {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .row-reverse-tablet > .wpb_column:nth-child(8) {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .row-reverse-tablet > .wpb_column:nth-child(9) {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .row-reverse-tablet > .wpb_column:nth-child(10) {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .row-reverse-tablet > .wpb_column:nth-child(11) {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .row-reverse-tablet > .wpb_column:nth-child(12) {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }
}

@media(max-width: 768px) {
    .admin-bar .cart-widget-side,.admin-bar .mobile-nav,.admin-bar .full-screen-close-icon,.admin-bar .header-banner,.admin-bar button.mfp-close {
        top:46px
    }

    .woodmart-spacing-30,.woodmart-spacing-20 {
        margin-right: -5px;
        margin-left: -5px
    }

    .woodmart-spacing-30 > div,.woodmart-spacing-30 > article,.woodmart-spacing-20 > div,.woodmart-spacing-20 > article {
        margin-bottom: 10px;
        padding-right: 5px;
        padding-left: 5px
    }

    div[class*=woodmart-columns-] > div {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%
    }

    .woodmart-carousel-spacing-20,.woodmart-carousel-spacing-30 {
        margin-right: -5px;
        margin-left: -5px
    }

    .woodmart-carousel-spacing-20 .slider-title,.woodmart-carousel-spacing-30 .slider-title {
        margin-right: 5px;
        margin-left: 5px
    }

    .woodmart-carousel-spacing-20 .owl-item,.woodmart-carousel-spacing-20 .owl-carousel:not(.owl-loaded) > div,.woodmart-carousel-spacing-30 .owl-item,.woodmart-carousel-spacing-30 .owl-carousel:not(.owl-loaded) > div {
        padding-right: 5px;
        padding-left: 5px
    }

    .woodmart-carousel-spacing-20 .owl-nav > div[class*=prev],.woodmart-carousel-spacing-30 .owl-nav > div[class*=prev] {
        left: -45px
    }

    .woodmart-carousel-spacing-20 .owl-nav > div[class*=next],.woodmart-carousel-spacing-30 .owl-nav > div[class*=next] {
        right: -45px
    }

    .page-title .woodmart-checkout-steps ul li {
        font-size: 24px
    }

    .offcanvas-sidebar-mobile .site-content:not(.col-lg-12) {
        left: 0;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%
    }

    .offcanvas-sidebar-mobile.admin-bar .sidebar-container {
        top: 46px
    }

    .offcanvas-sidebar-mobile .woodmart-sticky-sidebar-opener:not(.sticky-toolbar) {
        display: block
    }

    .offcanvas-sidebar-mobile .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 500;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        margin-bottom: 0;
        padding-right: 0;
        padding-left: 0;
        max-width: none;
        width: 300px;
        background-color: #fff;
        -webkit-transition: -webkit-transform .25s ease;
        transition: -webkit-transform .25s ease;
        transition: transform .25s ease;
        transition: transform .25s ease, -webkit-transform .25s ease;
        -webkit-transform: translate3d(-300px, 0, 0);
        transform: translate3d(-300px, 0, 0)
    }

    .offcanvas-sidebar-mobile .sidebar-container .widget-area {
        padding-top: 30px;
        padding-bottom: 30px
    }

    .offcanvas-sidebar-mobile .sidebar-container .sidebar-widget {
        padding-right: 30px;
        padding-left: 30px
    }

    .offcanvas-sidebar-mobile .sidebar-container .widget-heading {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .offcanvas-sidebar-mobile .sidebar-container .woodmart-sidebar-scroll {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        height: 100%
    }

    .offcanvas-sidebar-mobile .sidebar-container .woodmart-sidebar-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        overflow-x: hidden
    }

    .offcanvas-sidebar-mobile .sidebar-container .woodmart-sidebar-content:focus {
        outline: none
    }

    .header-banner-container {
        padding-right: 40px;
        padding-left: 40px
    }

    .close-header-banner {
        width: 40px
    }

    .close-header-banner + .header-banner-link {
        right: 40px
    }

    .admin-bar .header-banner {
        top: 46px
    }

    .admin-bar .whb-clone {
        top: 46px
    }

    .admin-bar .whb-sticked .whb-main-header {
        top: 46px
    }

    .comments-area .children {
        margin-left: 0
    }

    .comments-area .comment-author {
        float: none
    }

    .comments-area .comment-meta {
        text-align: left
    }

    .website-wrapper .wp-block-column {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        margin: 0
    }

    .error404 .page-header:before {
        top: -10px;
        font-size: 150px;
        line-height: 120px
    }

    .error404 .page-title {
        padding: 15px 0;
        font-size: 32px
    }

    .error404 .page-content h2 {
        font-size: 18px
    }

    .error404 .page-content > .searchform {
        max-width: 320px
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-tabs-container {
        display: block
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs .vc_tta-panel-heading {
        display: none
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-top .vc_tta-tabs-container,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-bottom .vc_tta-tabs-container {
        overflow: hidden
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-top .vc_tta-tabs-container:after,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-bottom .vc_tta-tabs-container:after {
        content: ""
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-top .vc_tta-tabs-list,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-bottom .vc_tta-tabs-list {
        overflow-y: auto;
        white-space: nowrap
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-top .vc_tta-tabs-list::-webkit-scrollbar,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-bottom .vc_tta-tabs-list::-webkit-scrollbar {
        display: none
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-left,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-right {
        display: block
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-left .vc_tta-tab,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-right .vc_tta-tab {
        display: inline-block
    }

    .vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-left.vc_tta-o-no-fill .vc_tta-panel-body,.vc_tta.vc_general.vc_tta-style-classic.vc_tta-tabs-position-right.vc_tta-o-no-fill .vc_tta-panel-body {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .woodmart-text-size-extra-large ul {
        font-size: 16px
    }

    .woodmart-text-size-extra-large.woodmart-list-shape-icon .list-icon {
        min-width: 30px;
        height: 30px;
        font-size: 16px;
        line-height: 30px
    }

    .woodmart-text-size-extra-large.woodmart-list-shape-icon.woodmart-list-type-unordered .list-icon {
        font-size: 12px
    }

    .testimonials-grid .testimonial {
        margin-bottom: 20px
    }

    .owl-items-sm-1 .banner-subtitle {
        font-size: 3vw
    }

    .owl-items-sm-1 .banner-title {
        font-size: 5vw
    }

    .banner-btn-position-hover .banner-btn-wrapper {
        display: none
    }

    .content-banner .content-size-large,.content-banner .content-size-medium {
        font-size: 14px
    }

    .banner-btn-wrapper .btn-size-default,.banner-btn-wrapper .btn-size-large,.banner-btn-wrapper .btn-size-extra-large {
        padding: 10px 14px;
        font-size: 12px;
        line-height: 16px
    }

    .banner-btn-wrapper .btn-style-link {
        padding: 0
    }

    .banner-hide-btn-mobile {
        display: none !important
    }

    .dvr-style-waves-small svg,.dvr-style-waves-wide svg,.dvr-style-triangle svg {
        height: 3vw !important
    }

    .dvr-style-curved-line svg,.dvr-style-diagonal-left svg,.dvr-style-diagonal-right svg,.dvr-style-half-circle svg,.dvr-style-paint-stroke svg {
        height: 50px !important
    }

    .has-categories-dropdown input[type=text] {
        padding-right: 50px
    }

    .search-by-category {
        display: none
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .shop-loop-head {
        margin-top: -25px
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs,.offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-shop-tools {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(129,129,129,.2)
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs .woocommerce-breadcrumb,.offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-woo-breadcrumbs .yoast-breadcrumb {
        margin-bottom: 15px
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12).description-area-before .term-description,.offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12).description-area-before .page-description {
        margin-top: -20px;
        margin-bottom: 45px
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) > .woocommerce-notices-wrapper {
        margin-top: -20px;
        margin-bottom: 45px
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-shop-tools {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .offcanvas-sidebar-mobile .shop-content-area:not(.col-lg-12) .woodmart-show-sidebar-btn {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex
    }

    .offcanvas-sidebar-mobile .sidebar-container.single-product-sidebar {
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        max-width: none;
        width: 300px
    }

    .woodmart-registration-page {
        padding-top: 0;
        padding-bottom: 0
    }

    #customer_login > .col-md-6 {
        padding-top: 0;
        padding-bottom: 0
    }

    #customer_login > div:not(:first-child):last-child {
        border: none
    }

    .register-or {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .col-register {
        margin-top: 30px
    }

    .woodmart-register-tabs .col-register {
        margin-top: 0
    }

    .woocommerce-my-account-wrapper {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .woocommerce-MyAccount-content,.woodmart-my-account-sidebar {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        padding-top: 0;
        padding-bottom: 0;
        max-width: 100%;
        width: 100%
    }

    .woodmart-my-account-sidebar {
        border-right: none
    }

    .woocommerce-lost-password .site-content .woocommerce > p {
        font-size: 100%
    }

    .woocommerce-lost-password .site-content .woocommerce > p:before {
        font-size: 80px;
        line-height: 80px
    }

    td.product-subtotal .table-responsive-label {
        font-size: 11px
    }

    td.product-subtotal span {
        font-size: 14px
    }

    .cart-actions .coupon {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 30px;
        padding: 25px;
        border: 2px dashed rgba(129,129,129,.2)
    }

    .cart-actions .coupon .input-text {
        max-width: none
    }

    .cart-totals-inner > h2 {
        margin-bottom: 15px;
        padding-left: 0
    }

    .cart-totals-inner .shop_table_responsive {
        margin-bottom: 20px
    }

    .cart-totals-inner .shop_table_responsive tr:last-child {
        padding-bottom: 0;
        border-bottom: 0
    }

    .cart-totals-inner .shop_table_responsive td:before {
        padding-top: 0;
        font-size: 14px
    }

    .cart-totals-inner tr.order-total td strong {
        font-size: 18px
    }

    .cart-empty {
        font-size: 32px
    }

    .cart-empty:before {
        font-size: 110px;
        line-height: 110px
    }

    .cart-empty:after {
        top: 15px;
        margin-left: -7px;
        font-size: 32px;
        line-height: 32px
    }

    .woodmart-empty-page-text {
        font-size: 100%
    }

    .woodmart-empty-page-text br {
        display: none
    }

    .table-responsive-label {
        display: inline-block
    }

    .shop_table_responsive {
        display: block
    }

    .shop_table_responsive thead,.shop_table_responsive th {
        display: none
    }

    .shop_table_responsive tbody,.shop_table_responsive tfoot,.shop_table_responsive tr {
        display: block
    }

    .shop_table_responsive tr {
        position: relative;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(129,129,129,.2)
    }

    .shop_table_responsive tr:last-child {
        margin-bottom: 0
    }

    .shop_table_responsive td {
        display: block;
        margin-bottom: 8px;
        padding: 0 0 8px 0;
        border-bottom: none;
        text-align: right
    }

    .shop_table_responsive td:before {
        content: attr(data-title);
        float: left;
        padding-top: 3px;
        color: #2d2a2a;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 12px
    }

    .shop_table_responsive td:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none
    }

    .woocommerce-cart-form__contents tr,.group_table tr,.wishlist_table tr {
        margin-bottom: 25px;
        padding-bottom: 25px;
        padding-left: 115px;
        min-height: 136px
    }

    .woocommerce-cart-form__contents td,.group_table td,.wishlist_table td {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 5px;
        padding: 0
    }

    .woocommerce-cart-form__contents td > *,.group_table td > *,.wishlist_table td > * {
        margin-bottom: 5px
    }

    .woocommerce-cart-form__contents td:before,.group_table td:before,.wishlist_table td:before {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        margin-bottom: 5px;
        padding-top: 0;
        text-align: left;
        font-size: 11px
    }

    .woocommerce-cart-form__contents td:not(:last-child),.group_table td:not(:last-child),.wishlist_table td:not(:last-child) {
        border-bottom: 1px dashed rgba(129,129,129,.2)
    }

    .woocommerce-cart-form__contents td.product-thumbnail,.group_table td.product-thumbnail,.wishlist_table td.product-thumbnail {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        margin-bottom: 0;
        padding-bottom: 0;
        max-height: 115px;
        border-bottom: none
    }

    .woocommerce-cart-form__contents td.product-thumbnail img,.group_table td.product-thumbnail img,.wishlist_table td.product-thumbnail img {
        min-width: 100px;
        max-width: 100px
    }

    .woocommerce-cart-form__contents td.product-remove,.group_table td.product-remove,.wishlist_table td.product-remove {
        position: absolute;
        top: -7px;
        right: -7px;
        z-index: 1;
        margin-bottom: 0;
        padding-bottom: 0;
        border: none
    }

    .woocommerce-cart-form__contents td.product-name,.group_table td.product-name,.wishlist_table td.product-name {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
        text-align: left
    }

    .woocommerce-cart-form__contents td.product-name > a,.woocommerce-cart-form__contents td.product-name > label,.group_table td.product-name > a,.group_table td.product-name > label,.wishlist_table td.product-name > a,.wishlist_table td.product-name > label {
        margin-bottom: 10px;
        padding-right: 30px
    }

    .woocommerce-cart-form__contents td.product-name:before,.group_table td.product-name:before,.wishlist_table td.product-name:before {
        content: none
    }

    .woocommerce-cart-form__contents td.product-quantity input[type=button],.woocommerce-cart-form__contents td.product-quantity input[type=number],.group_table td.product-quantity input[type=button],.group_table td.product-quantity input[type=number],.wishlist_table td.product-quantity input[type=button],.wishlist_table td.product-quantity input[type=number] {
        height: 30px
    }

    .woocommerce-cart-form__contents td.product-quantity input[type=number],.group_table td.product-quantity input[type=number],.wishlist_table td.product-quantity input[type=number] {
        width: 25px
    }

    .woocommerce-cart-form__contents ul.variation,.group_table ul.variation,.wishlist_table ul.variation {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 100%;
        flex: 1 0 100%;
        margin-top: 0;
        max-width: 100%;
        width: 100%;
        color: #777;
        font-size: 14px;
        line-height: inherit
    }

    .woocommerce-cart-form__contents ul.variation li,.group_table ul.variation li,.wishlist_table ul.variation li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 5px;
        border-bottom: 1px dashed rgba(129,129,129,.2)
    }

    .woocommerce-cart-form__contents ul.variation .item-variation-value,.woocommerce-cart-form__contents ul.variation .item-variation-name,.group_table ul.variation .item-variation-value,.group_table ul.variation .item-variation-name,.wishlist_table ul.variation .item-variation-value,.wishlist_table ul.variation .item-variation-name {
        margin-bottom: 5px
    }

    .woocommerce-cart-form__contents ul.variation .item-variation-name,.group_table ul.variation .item-variation-name,.wishlist_table ul.variation .item-variation-name {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        color: #2d2a2a;
        text-align: left;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 11px
    }

    .group_table {
        padding-top: 20px
    }

    .woodmart-checkout-steps ul li {
        margin-top: 0;
        margin-bottom: 0
    }

    .woodmart-checkout-steps ul li span:after {
        display: none
    }

    .woodmart-checkout-steps ul li:not(.step-active) {
        display: none
    }

    .woodmart-checkout-steps ul li:after {
        content: none
    }

    form.checkout.processing > .blockOverlay {
        position: fixed !important;
        z-index: 1000 !important
    }

    .woocommerce-billing-fields {
        margin-top: 0;
        margin-bottom: 40px
    }

    .woocommerce-additional-fields {
        margin-bottom: 40px
    }

    .checkout_coupon {
        margin-bottom: 20px
    }

    .woocommerce-thankyou-order-details li,.wc-bacs-bank-details li {
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        margin-bottom: 30px;
        max-width: 50%
    }

    .woocommerce-thankyou-order-details li:nth-child(even),.wc-bacs-bank-details li:nth-child(even) {
        border-right: none
    }

    .col2-set .col-1,.col2-set .col-2 {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%
    }

    .woodmart-shop-loader:not(.hidden-loader) {
        margin-left: -15px !important
    }

    .shop-loop-head {
        margin-top: -15px
    }

    .description-area-before .term-description,.description-area-before .page-description {
        margin-bottom: 30px
    }

    .woocommerce-ordering {
        position: relative;
        z-index: 1;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px
    }

    .woocommerce-ordering:after {
        position: static;
        margin-top: 0;
        color: #2d2a2a;
        font-size: 20px;
        content: "\f117";
        font-family: "woodmart-font"
    }

    .woocommerce-ordering select {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0;
        border: none;
        background-image: none;
        font-weight: 400;
        font-size: 0;
        -webkit-appearance: none;
        -moz-appearance: none
    }

    .woocommerce-ordering select option {
        font-size: 14px
    }

    .woocommerce-ordering select::-ms-expand {
        display: none
    }

    .category-grid-item .category-title {
        font-size: 16px
    }

    .category-grid-item .more-products {
        font-size: 14px
    }

    .category-grid-item:hover .category-image {
        -webkit-transform: none;
        transform: none
    }

    .categories-style-masonry-first .category-grid-item {
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        max-width: 50%;
        width: 50%
    }

    .categories-style-masonry-first .category-grid-item:first-child {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%
    }

    .cat-design-default .wrapp-category,.cat-design-center .wrapp-category,.cat-design-replace-title .wrapp-category {
        overflow: visible
    }

    .cat-design-default .category-image-wrapp,.cat-design-center .category-image-wrapp,.cat-design-replace-title .category-image-wrapp {
        position: relative;
        overflow: hidden
    }

    .cat-design-default .hover-mask,.cat-design-center .hover-mask,.cat-design-replace-title .hover-mask {
        position: static;
        padding: 10px;
        text-align: center;
        -webkit-transform: none;
        transform: none
    }

    .cat-design-default .more-products,.cat-design-center .more-products,.cat-design-replace-title .more-products {
        margin-top: 0;
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }

    .cat-design-center .wrapp-category,.cat-design-replace-title .wrapp-category {
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .cat-design-center .wrapp-category:before,.cat-design-replace-title .wrapp-category:before {
        content: none
    }

    .cat-design-center .category-image-wrapp,.cat-design-replace-title .category-image-wrapp {
        -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.12);
        box-shadow: 1px 1px 2px rgba(0,0,0,.12)
    }

    body:not(.woodmart-dark) .cat-design-center .category-title,body:not(.woodmart-dark) .cat-design-replace-title .category-title {
        color: #2d2a2a
    }

    body:not(.woodmart-dark) .cat-design-center .more-products,body:not(.woodmart-dark) .cat-design-replace-title .more-products {
        color: #8e8e8e
    }

    .cat-design-default .category-title {
        position: static
    }

    .cat-design-default.categories-with-shadow .wrapp-category {
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .cat-design-default.categories-with-shadow .category-image-wrapp {
        -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,.12);
        box-shadow: 1px 1px 2px rgba(0,0,0,.12)
    }

    .cat-design-center.without-product-count .hover-mask,.cat-design-center:not(.without-product-count) .hover-mask {
        -webkit-transform: none;
        transform: none
    }

    .cat-design-center:not(.without-product-count):hover .hover-mask {
        -webkit-transform: none;
        transform: none
    }

    .cat-design-replace-title .category-title {
        padding: 0;
        background-color: transparent !important;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .cat-design-replace-title .more-products {
        position: static;
        padding: 0;
        text-transform: capitalize;
        font-weight: 400;
        font-size: 14px;
        opacity: 1
    }

    .cat-design-replace-title:not(.without-product-count):hover .category-title {
        opacity: 1
    }

    .product-grid-item .swatches-select > div {
        font-size: 14px
    }

    .product-grid-item .swatches-select > div:not(:last-child) {
        margin-right: 10px
    }

    .product-grid-item .swatches-select .image-swatch,.product-grid-item .swatches-select .colored-swatch {
        min-width: 17px;
        width: 17px;
        height: 17px;
        font-size: 0
    }

    .quick-shop-wrapper .quick-shop-close {
        top: 0;
        right: 0;
        padding-right: 0;
        width: 30px;
        height: 30px
    }

    .quick-shop-wrapper .quick-shop-close:after,.quick-shop-wrapper .quick-shop-close:before {
        right: 9px
    }

    .quick-shop-wrapper .quick-shop-close:after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    .quick-shop-wrapper .quick-shop-close:before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .quick-shop-wrapper .quick-shop-close span {
        display: none
    }

    .quick-shop-wrapper .quick-shop-form {
        padding-top: 10px
    }

    .quick-shop-wrapper .variation-swatch-selected .variations {
        margin-bottom: 30px
    }

    .quick-shop-wrapper table.variations .label {
        margin-bottom: 2px
    }

    .quick-shop-wrapper table.variations .reset_variations {
        bottom: -23px
    }

    .quick-shop-wrapper select {
        height: 35px
    }

    .quick-shop-wrapper .single_add_to_cart_button {
        font-size: 0
    }

    .quick-shop-wrapper .single_add_to_cart_button:before {
        margin-right: 0;
        margin-left: 0
    }

    .product-list-item .product-wrapper {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-align: center
    }

    .product-list-item:not(:last-child) .product-wrapper {
        padding-bottom: 0;
        border-bottom: none
    }

    .product-list-item .product-element-top {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
        flex: 1 1 100%;
        margin-bottom: 10px;
        margin-right: 0;
        max-width: 100%;
        width: 100%
    }

    .product-list-item .product-title {
        margin-bottom: 5px;
        font-size: 14px
    }

    .product-list-item .woodmart-product-cats,.product-list-item .woodmart-product-brands-links {
        margin-bottom: 5px
    }

    .product-list-item .woocommerce-product-rating {
        margin-bottom: 0
    }

    .product-list-item .price {
        margin-bottom: 0;
        font-size: 15px
    }

    .product-list-item .swatches-on-grid {
        margin-top: 5px;
        margin-bottom: 0
    }

    .product-list-item .swatch-on-grid:not(.swatch-size-large):not(.swatch-size-xlarge):not(.text-only) {
        width: 15px;
        height: 15px
    }

    .product-list-item .woocommerce-product-details__short-description {
        display: none
    }

    .product-list-item .woodmart-add-btn {
        margin-top: 10px
    }

    .product-list-item .woodmart-add-btn > a span:not(.woodmart-tooltip-label) {
        padding: 10px 14px;
        font-size: 12px;
        line-height: 16px
    }

    .product-list-item .woodmart-add-btn .added_to_cart {
        padding: 10px 14px;
        font-size: 12px;
        line-height: 16px
    }

    .product-list-item.col-6:nth-child(2n+1) {
        clear: both
    }

    .woodmart-hover-base .wrapp-swatches {
        padding-top: 5px;
        padding-bottom: 5px
    }

    .woodmart-hover-base .quick-shop-close {
        top: -5px;
        right: -5px
    }

    .woodmart-hover-base.product-no-swatches .wrapp-swatches {
        display: none
    }

    .woodmart-highlighted-products:not(.with-title) .owl-nav > div[class*=prev] {
        left: -36px
    }

    .woodmart-highlighted-products:not(.with-title) .owl-nav > div[class*=next] {
        right: -36px
    }

    .woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div[class*=prev] {
        left: -14px !important
    }

    .woodmart-highlighted-products:not(.with-title) .wrap-loading-arrow > div[class*=next] {
        right: -14px !important
    }

    .products-bordered-grid.woodmart-spacing-20 .product,.products-bordered-grid.woodmart-spacing-30 .product {
        padding-top: 5px;
        padding-bottom: 5px
    }

    .products-bordered-grid.woodmart-carousel-spacing-20 .owl-carousel-item,.products-bordered-grid.woodmart-carousel-spacing-30 .owl-carousel-item {
        padding: 5px
    }

    .single-product-page .woodmart-product-brands img {
        max-width: 70px
    }

    .product-image-summary-inner > div {
        margin-bottom: 25px
    }

    .product-image-summary-inner > div:last-child {
        margin-bottom: 0
    }

    .product-image-summary-wrap > div,.product-image-summary-wrap > aside,.full-height-sidebar-wrap > div,.full-height-sidebar-wrap > aside {
        margin-bottom: 25px
    }

    .product-image-summary-wrap > div:last-child,.product-image-summary-wrap > aside:last-child,.full-height-sidebar-wrap > div:last-child,.full-height-sidebar-wrap > aside:last-child {
        margin-bottom: 0
    }

    .single-product-sidebar.sidebar-container {
        border: none
    }

    .thumbs-position-bottom_grid .woocommerce-product-gallery__wrapper,.thumbs-position-bottom_combined .woocommerce-product-gallery__wrapper {
        margin-right: 0;
        margin-left: 0
    }

    .breadcrumbs-location-summary .single-product-page {
        margin-top: -25px
    }

    .single-product-page .summary-inner {
        margin-bottom: -20px
    }

    .product-image-summary .entry-title {
        font-size: 20px
    }

    .related-and-upsells > div {
        margin-bottom: 25px
    }

    .related-and-upsells > div:last-child {
        margin-bottom: 0
    }

    .related-and-upsells .owl-dots {
        display: none
    }

    .related-and-upsells:empty {
        display: none
    }

    .woodmart-product-instagram {
        padding-top: 25px
    }

    .product-full-width.product-design-alt .summary-inner,.product-full-width.product-summary-shadow .summary-inner,.product-full-width.image-full-width .summary-inner {
        max-width: 100%
    }

    .popup-quick-view .woodmart-scroll-content {
        padding-top: 20px;
        padding-right: 15px;
        padding-bottom: 20px;
        padding-left: 15px
    }

    .popup-quick-view .entry-summary .entry-title {
        font-size: 20px
    }

    .popup-quick-view .entry-summary:after {
        content: none
    }

    .quick-view-horizontal .summary-inner,.quick-view-horizontal .woodmart-scroll-content {
        position: static
    }

    .quick-view-vertical .woodmart-scroll-content {
        max-height: none
    }

    .woodmart-sticky-btn {
        padding-top: 7px;
        padding-bottom: 7px
    }

    .woodmart-sticky-btn .woodmart-sticky-btn-content {
        display: none
    }

    .woodmart-sticky-btn .woodmart-sticky-btn-cart {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .woodmart-sticky-btn.mobile-off {
        display: none
    }

    .woodmart-sticky-btn-shown.scrollToTop {
        bottom: 75px
    }

    @supports(-webkit-appearance: -apple-pay-button) {
        body.single-product div.product form.cart .apple-pay-button,body.single-product div.product form.cart .quantity,body.single-product div.product form.cart .quantity ~ .button {
            margin-bottom:10px
        }
    }

    .woodmart-products-tabs .tabs-name .svg-icon {
        width: 25px !important;
        height: 25px !important
    }

    .woodmart-products-tabs .tabs-name .img-wrapper > img {
        max-height: 25px;
        width: auto
    }

    .woodmart-products-tabs .tabs-navigation-wrapper {
        overflow: hidden
    }

    .woodmart-products-tabs .tabs-navigation-wrapper .svg-icon {
        width: 25px !important;
        height: 25px !important
    }

    .woodmart-products-tabs .tabs-navigation-wrapper .img-wrapper > img {
        max-height: 25px;
        width: auto
    }

    .woodmart-products-tabs .products-tabs-title {
        overflow-y: auto;
        margin-right: -10px;
        margin-left: -10px;
        white-space: nowrap;
        mask-image: linear-gradient(to left, transparent 5px, #000 40px);
        -webkit-mask-image: linear-gradient(to left, transparent 5px, #000 40px)
    }

    .woodmart-products-tabs .products-tabs-title::-webkit-scrollbar {
        display: none
    }

    .woodmart-products-tabs .products-tabs-title li {
        padding-right: 10px;
        padding-left: 10px;
        font-size: 14px
    }

    .woodmart-products-tabs.tabs-design-alt .tabs-name,.woodmart-products-tabs.tabs-design-alt .tabs-navigation-wrapper {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%
    }

    .woodmart-products-tabs.tabs-design-simple .woodmart-tabs-header {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 10px;
        border-bottom: none
    }

    .woodmart-products-tabs.tabs-design-simple .tabs-name {
        margin-right: 0
    }

    .woodmart-products-tabs.tabs-design-simple .tabs-navigation-wrapper {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding-top: 10px;
        max-width: 100%;
        width: 100%;
        border-top: 2px solid #eaeaea
    }

    .woodmart-products-tabs.tabs-design-simple .owl-nav,.woodmart-products-tabs.tabs-design-simple .wrap-loading-arrow {
        top: -103px
    }

    .woodmart-products-tabs.tabs-design-simple .owl-carousel .owl-nav {
        right: -5px
    }

    .color-scheme-light .woodmart-products-tabs.tabs-design-simple .tabs-navigation-wrapper {
        border-color: rgba(255,255,255,.15)
    }
}

@media(max-width: 767px) {
    body .mobile-bg-img-hidden,.wpb_column.mobile-bg-img-hidden > div {
        background-image:none !important
    }

    body .reset-element-margin,.reset-margin > .vc_column-inner,.reset-margin-mobile > .vc_column-inner {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .hidden-xs {
        display: none !important
    }

    .visible-xs {
        display: block !important
    }

    .row-reverse-mobile:not(.vc_row-flex) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .row-reverse-mobile > .wpb_column:nth-child(1) {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12
    }

    .row-reverse-mobile > .wpb_column:nth-child(2) {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11
    }

    .row-reverse-mobile > .wpb_column:nth-child(3) {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10
    }

    .row-reverse-mobile > .wpb_column:nth-child(4) {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9
    }

    .row-reverse-mobile > .wpb_column:nth-child(5) {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8
    }

    .row-reverse-mobile > .wpb_column:nth-child(6) {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7
    }

    .row-reverse-mobile > .wpb_column:nth-child(7) {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6
    }

    .row-reverse-mobile > .wpb_column:nth-child(8) {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5
    }

    .row-reverse-mobile > .wpb_column:nth-child(9) {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4
    }

    .row-reverse-mobile > .wpb_column:nth-child(10) {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .row-reverse-mobile > .wpb_column:nth-child(11) {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .row-reverse-mobile > .wpb_column:nth-child(12) {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .promo-banner .banner-subtitle {
        font-size: 3vw
    }

    .promo-banner .banner-title {
        font-size: 5vw
    }
}

@media(min-width: 577px)and (max-width: 768px) {
    .instagram-picture.col-sm-6 {
        -ms-flex:0 0 33.333333%;
        -webkit-box-flex: 0;
        flex: 0 0 33.333333%;
        max-width: 33.333333%
    }

    .owl-items-sm-3 .banner-subtitle,.owl-items-sm-2 .banner-subtitle {
        font-size: 2vw
    }

    .owl-items-sm-3 .banner-title,.owl-items-sm-2 .banner-title {
        font-size: 3vw
    }

    .owl-items-sm-1:not(.owl-loaded) > div {
        width: 100%
    }

    .owl-items-sm-1:not(.owl-loaded) > div:nth-child(n+2) {
        display: none
    }

    .owl-items-sm-2:not(.owl-loaded) > div {
        width: 50%
    }

    .owl-items-sm-2:not(.owl-loaded) > div:nth-child(n+3) {
        display: none
    }

    .owl-items-sm-3:not(.owl-loaded) > div {
        width: 33.3333333333%
    }

    .owl-items-sm-3:not(.owl-loaded) > div:nth-child(n+4) {
        display: none
    }

    .brand-item.col-sm-6 {
        -ms-flex: 0 0 33.333333%;
        -webkit-box-flex: 0;
        flex: 0 0 33.333333%;
        max-width: 33.333333%
    }

    .products-bordered-grid .col-sm-12:first-child,.products-bordered-grid .col-sm-6:nth-child(-n+2),.products-bordered-grid .col-sm-4:nth-child(-n+3) {
        border-top-width: 1px
    }
}

@media(max-width: 600px) {
    .admin-bar .whb-clone {
        top:0
    }

    .admin-bar .whb-sticked .whb-main-header {
        top: 0
    }
}

@media(max-width: 576px) {
    .mobile-nav-icon .woodmart-burger-label {
        display:none
    }

    .footer-widget-collapse > *:not(.widget-title):not(:first-child) {
        display: none;
        margin-top: 20px
    }

    .footer-widget-collapse .widget-title {
        position: relative;
        margin-bottom: 0;
        padding-right: 22px
    }

    .footer-widget-collapse .widget-title:after {
        position: absolute;
        top: calc(50% - 12px);
        right: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        color: #333;
        vertical-align: middle;
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        font-family: "FontAwesome";
        line-height: 24px;
        -webkit-transition: all .25s ease;
        transition: all .25s ease;
        content: "\f107"
    }

    .footer-widget-collapse.footer-widget-opened .widget-title:after {
        background-color: #f9f9f9;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .color-scheme-light .footer-widget-collapse .widget-title:after {
        color: #fff
    }

    .color-scheme-light .footer-widget-collapse.footer-widget-opened .widget-title:after {
        background-color: #fff;
        color: #333
    }

    .title-wrapper .title-subtitle {
        font-size: 12px
    }

    .title-wrapper .woodmart-title-container {
        font-size: 20px
    }

    .title-wrapper .title-subtitle,.title-wrapper .woodmart-title-container,.title-wrapper .title-after_title {
        max-width: 100%
    }

    .woodmart-text-block-wrapper .woodmart-title-container {
        max-width: 100%
    }

    .woodmart-countdown-timer .woodmart-timer > span {
        min-width: 55px;
        min-height: 55px;
        font-size: 20px;
        line-height: 20px
    }

    .woodmart-countdown-timer .woodmart-timer > span span {
        font-size: 10px;
        line-height: 10px
    }

    .owl-items-xs-1:not(.owl-loaded) > div {
        width: 100%
    }

    .owl-items-xs-1:not(.owl-loaded) > div:nth-child(n+2) {
        display: none
    }

    .owl-items-xs-2:not(.owl-loaded) > div {
        width: 50%
    }

    .owl-items-xs-2:not(.owl-loaded) > div:nth-child(n+3) {
        display: none
    }

    .cart-actions .button {
        width: 100%
    }

    .cart-actions .coupon {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .cart-actions .coupon .input-text {
        margin-bottom: 10px;
        margin-right: 0;
        max-width: none
    }

    .cart-empty {
        font-size: 28px
    }

    .cart-empty:before {
        font-size: 86px;
        line-height: 86px
    }

    .cart-empty:after {
        top: 11px;
        margin-left: -8px;
        font-size: 28px;
        line-height: 28px
    }

    .checkout_coupon .form-row-first,.checkout_coupon .form-row-last {
        width: 100%
    }

    .woodmart-my-account-links > div {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        width: 100%
    }

    .checkout-order-review {
        padding: 20px
    }

    .woodmart-table-wrapper {
        padding: 5px 10px
    }

    .woocommerce-thankyou-order-details,.wc-bacs-bank-details {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .woocommerce-thankyou-order-details li,.wc-bacs-bank-details li {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        margin-bottom: 0;
        padding-top: 15px;
        padding-right: 0;
        padding-bottom: 15px;
        padding-left: 0;
        max-width: 100%;
        border-right: none;
        border-bottom: 1px solid rgba(129,129,129,.2)
    }

    .woocommerce-pagination {
        text-align: center
    }

    .product-grid-item.col-6 .product-title,.product-grid-item.col-6 .woodmart-product-cats,.product-grid-item.col-6 .woodmart-product-brands-links,.product-grid-item.col-6 .hover-content {
        font-size: 12px
    }

    .product-grid-item.col-6 .price {
        font-size: 14px
    }

    .product-grid-item.col-6 .hover-content {
        max-height: 80px
    }

    .product-grid-item.col-6 .hover-content-inner {
        line-height: 20px
    }

    .product-grid-item.col-6 .hover-content-inner p {
        line-height: 20px
    }

    .product-grid-item.col-6 .show-full-description {
        max-height: none
    }

    .product-label {
        min-width: 40px
    }

    .product-label:not(:last-child) {
        margin-bottom: 5px
    }

    .labels-rectangular .product-label {
        padding-right: 5px;
        padding-left: 5px;
        font-size: 10px
    }

    .labels-rectangular .label-with-img {
        padding-right: 0;
        padding-left: 0
    }

    .labels-rounded .product-label {
        min-height: 40px;
        font-size: 10px
    }

    .browser-Internet .labels-rounded .product-label {
        height: 40px
    }

    .labels-rounded .label-with-img {
        min-height: auto
    }

    .title-line-one .product-grid-item.col-6 .product-title,.title-line-two .product-grid-item.col-6 .product-title {
        line-height: 15px
    }

    .title-line-one .product-grid-item.col-6 .product-title {
        max-height: 15px
    }

    .title-line-two .product-grid-item.col-6 .product-title {
        max-height: 30px
    }

    .woodmart-hover-tiled .product-element-bottom {
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px
    }

    .product-grid-item .woodmart-stock-progress-bar .stock-info {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .product-grid-item .woodmart-stock-progress-bar .total-sold {
        display: none
    }

    .product-image-summary .product-images .labels-rounded {
        top: 10px;
        right: 10px
    }

    .product-image-summary .product-images .labels-rounded .product-label {
        min-width: 40px;
        min-height: 40px
    }

    .browser-Internet .product-image-summary .product-images .labels-rounded .product-label {
        height: 40px
    }

    .product-image-summary .product-images .labels-rounded .label-with-img {
        min-height: auto
    }

    .woodmart-sticky-btn {
        padding-top: 0;
        padding-bottom: 0;
        background-color: unset;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .woodmart-sticky-btn .woodmart-sticky-btn-cart {
        margin-right: -15px;
        margin-left: -15px
    }

    .woodmart-sticky-btn .price,.woodmart-sticky-btn .stock,.woodmart-sticky-btn .woodmart-sticky-btn-wishlist {
        display: none
    }

    .woodmart-sticky-btn .cart {
        position: relative;
        width: 100%
    }

    .woodmart-sticky-btn .quantity {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        margin-right: 0
    }

    .woodmart-sticky-btn .quantity input[type=button],.woodmart-sticky-btn .quantity input[type=number] {
        border: none;
        background-color: rgba(0,0,0,.1);
        color: #fff
    }

    .woodmart-sticky-btn .quantity input[type=button]:hover,.woodmart-sticky-btn .quantity input[type=button]:active,.woodmart-sticky-btn .quantity input[type=number]:hover,.woodmart-sticky-btn .quantity input[type=number]:active {
        background-color: rgba(0,0,0,.2)
    }

    .woodmart-sticky-btn .quantity input[type=button] {
        min-width: 30px;
        border-radius: 0
    }

    .woodmart-sticky-btn .quantity input[type=button].minus {
        border-right: 1px solid rgba(255,255,255,.15)
    }

    .woodmart-sticky-btn .quantity input[type=button].plus {
        border-left: 1px solid rgba(255,255,255,.15)
    }

    .woodmart-sticky-btn .woodmart-sticky-btn-cart .woodmart-sticky-add-to-cart,.woodmart-sticky-btn .single_add_to_cart_button {
        border-radius: 0
    }

    .woodmart-sticky-btn .single_add_to_cart_button {
        padding-left: 110px;
        width: 100%
    }

    .woodmart-sticky-btn .single_add_to_cart_button:after {
        margin-left: 35px
    }

    .woodmart-sticky-btn .woodmart-sticky-add-to-cart {
        width: 100%
    }

    .woodmart-sticky-btn .wcppec-checkout-buttons {
        display: none
    }

    .woodmart-sticky-btn-shown.scrollToTop {
        bottom: 55px
    }

    .products-bordered-grid .col-12:first-child,.products-bordered-grid .col-6:nth-child(-n+2) {
        border-top-width: 1px
    }
}

`;