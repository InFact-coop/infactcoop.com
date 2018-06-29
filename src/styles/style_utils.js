import React from 'react'
import { css } from 'styled-components'
import { fontWhiteToFade, fontFadeToWhite } from './style_animations'

const getVhInPixels = (vh = 65) =>
  document.documentElement.clientHeight * (vh / 100)

const media = {
  ns: (...args) => css`
    @media screen and (min-width: 40em) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media screen and (min-width: 40em) and (max-width: 65em) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media screen and (min-width: 65em) {
      ${css(...args)};
    }
  `,
}
const displayElement = (bool, displayAs) => {
  return css`
    display: ${bool ? displayAs : 'none'};
  `
}

const menuAnimationToggle = menuIsOpen => {
  switch (menuIsOpen) {
    case 'OPENED':
      return css`
        animation: ${fontFadeToWhite} 1s 1 0.3s forwards;
      `

    case 'CLOSED':
      return css`
        animation: ${fontWhiteToFade} 0.5s 1 0s forwards;
      `

    default:
      return css`
        animation: inherit;
      `
  }
}

const userSelect = bool =>
  bool
    ? css`
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
      `
    : css``

const backgroundImage = imgUrl => {
  return imgUrl ? `url(${imgUrl}) no-repeat center center / contain` : ``
}
const backgroundImageToggle = (bool, trueUrl, falseUrl) => {
  const trueCss = `url(${trueUrl}) no-repeat center center / contain`
  const falseCss = `url(${falseUrl}) no-repeat center center / contain`
  return bool ? trueCss : falseCss
}

const spacingNone = '0'
const spacing1 = '0.5rem'
const spacing2 = '1rem'
const spacing3 = '1.5rem'
const spacing4 = '3rem'
const spacing5 = '4rem'
const spacing6 = '5rem'
const spacing7 = '6rem'
const spacing8 = '7.5rem'

const emptySpan = () => <span className="dn" />

export default {
  media,
  backgroundImage,
  backgroundImageToggle,
  displayElement,
  emptySpan,
  menuAnimationToggle,
  getVhInPixels,
  spacingNone,
  spacing1,
  spacing2,
  spacing3,
  spacing4,
  spacing5,
  spacing6,
  spacing7,
  spacing8,
  userSelect,
}
