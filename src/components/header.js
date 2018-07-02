import React from 'react'
import styled from 'styled-components'
import { backgroundImage, backgroundImageToggle } from '../styles/style_utils'
import logo from '../assets/logos/infact_logo_white.svg'
import logoGradient from '../assets/logos/infact_logo_gradient.svg'
import { appear } from '../styles/style_animations'
import { media, spacing1, spacing5, spacing8 } from '../styles/style_utils'

const SplashBase = styled.section.attrs({
  className: 'flex flex-column items-center items-start-ns justify-center',
})``

const SplashWhite = SplashBase.extend`
  background: white;
`

const Topline = styled.div.attrs({
  className: 'flex justify-between items-center w-100 center',
})`
  background-color: ${({ gradient, menuIsOpen }) =>
    gradient && menuIsOpen !== 'OPENED'
      ? 'rgba(255, 255, 255, 0.9)'
      : 'inherit'};
  transition: ${({ menuIsOpen }) =>
    menuIsOpen === 'OPENED' ? '0s' : 'background-color 0.2s ease-out 0.7s'};
  max-width: 1440px;
  padding-right: ${spacing1};
  padding-left: ${spacing1};
  ${media.m`
    padding-right: ${spacing5}
    padding-left: ${spacing5}
  `};
  ${media.l`
    padding-right: ${spacing8}
    padding-left: ${spacing8}
  `};
`
const ToplineBackground = styled.div.attrs({
  className: 'w-100 h4-ns h3 z-1 center topline-bg',
})`
  background: linear-gradient(
    to right,
    rgba(0, 156, 243, 0.9) 0%,
    rgba(22, 214, 217, 0.9) 100%
  );
  max-width: 1440px;
  animation: ${appear} 2s 1 0s forwards;
`
const LogoWhite = styled.div.attrs({
  className: 'w5-ns h4-ns w4 h3',
})`
  background: ${backgroundImage(logo)};
  transition: ${props =>
    props.menuIsOpen === 'OPENED'
      ? 'inherit'
      : 'background 0.2s ease-out 0.5s'};
`
const LogoGradient = styled.div.attrs({
  className: 'w5-ns h4-ns w4 h3',
})`
  background: ${props =>
    backgroundImageToggle(props.menuIsOpen === 'OPENED', logo, logoGradient)};
  transition: ${props =>
    props.menuIsOpen === 'OPENED'
      ? 'inherit'
      : 'background 0.2s ease-out 0.5s'};
`

const Tagline = styled.div.attrs({
  className: 'heading-ns font-1 ttu w-90 w-50-l w-90-m reglo white tl-ns tc',
})`
  padding-left: 0;
  ${media.ns`
    padding-left: 2.45em;
  `};
`

const ZigZag = styled.img.attrs({
  className: 'mb1',
})``

const TopicLine = styled.div.attrs({
  className: 'font-4 ttu sans-serif black mt2 mb1',
})``

const TaglineBlack = styled.p.attrs({
  className: props =>
    'ttu reglo black' +
    (props.smallFont
      ? ' heading-ns font-1 w-30-ns center mt2'
      : ' font-0-ns font-1'),
})``

const SubTaglineBlack = styled.div.attrs({
  className: 'font-4 sans-serif black',
})``

const WorkHeading = ({ children }) => (
  <div className="mb6-ns mb4 tc w-100 mt7">
    <div className="mb2-ns mb1 mh1">{children}</div>
  </div>
)

export default {
  SplashWhite,
  Topline,
  ToplineBackground,
  LogoWhite,
  LogoGradient,
  Tagline,
  TaglineBlack,
  SubTaglineBlack,
  TopicLine,
  WorkHeading,
  ZigZag,
  SplashBase,
}
