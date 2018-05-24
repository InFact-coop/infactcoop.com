import React from 'react'
import { css } from 'styled-components'

const media = {
  ns: (...args) => css`
    @media screen and (min-width: 40em) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media screen and (min-width: 40em) and (max-width: 60em) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media screen and (min-width: 60em) {
      ${css(...args)};
    }
  `,
}
const displayElement = (bool, displayAs) => {
  return css`
    display: ${bool ? displayAs : 'none'};
  `
}

const backgroundImage = imgUrl => {
  return imgUrl ? `url(${imgUrl}) no-repeat center center / contain` : ``
}
const backgroundImageToggle = (bool, trueUrl, falseUrl) => {
  const trueCss = `url(${trueUrl}) no-repeat center center / contain`
  const falseCss = `url(${falseUrl}) no-repeat center center / contain`
  return bool ? trueCss : falseCss
}

const emptySpan = () => <span className="dn" />

export default {
  media,
  backgroundImage,
  backgroundImageToggle,
  displayElement,
  emptySpan,
}
