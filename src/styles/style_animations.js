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

export default { fontWhiteToFade, fontFadeToWhite }
