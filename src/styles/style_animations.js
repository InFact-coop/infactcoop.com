import { keyframes } from 'styled-components'

const fontWhiteToFade = keyframes`
  0% {
    color: white;
  } 100% {
    color: transparent;
  };
`

const fontFadeToWhite = keyframes`
  0% {
    color: transparent;
  } 100% {
    color: white;
  };
`

const airplaneMove = keyframes`
    0% {
      transform: rotate(10deg);
      top: 13px;
      right: 25px;
      height: 30px;
    }
    5% {
      transform: rotate(10deg);
      top: 13px;
      right: 0px;
      height: 30px;
    }
    20% {
      transform: rotate(-20deg);
      top: 13px;
      right: -130px;
      height: 45px;
    }
    40% {
      transform: rotate(10deg);
      top: -40px;
      right: -280px;
      opacity: 1;
    }
    100% {
      transform: rotate(60deg);
      top: -200px;
      right: -1000px;
      height: 0;
      opacity: 0;
    }
  `

export default { fontWhiteToFade, fontFadeToWhite, airplaneMove }
