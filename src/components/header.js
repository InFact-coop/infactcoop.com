import React from 'react'
import styled from 'styled-components'
import { backgroundImage, backgroundImageToggle } from '../styles/style_utils'
import logo from '../assets/logos/infact_logo_white.svg'
import logoGradient from '../assets/logos/infact_logo_gradient.svg'
console.log('logoGradient', logoGradient)
const SplashBase = styled.section.attrs({
  className: 'flex flex-column items-center items-start-ns justify-center-ns',
})``

const SplashWhite = SplashBase.extend`
  background: white;
`

const Topline = styled.div.attrs({
  className:
    'flex justify-between items-center w-100 ph6-ns ph2 absolute top-0',
})`
  max-width: 1440px;
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
  className:
    'heading-ns font-1 ttu w-90 w-50-ns reglo white pl7-ns pl0 tl-ns tc',
})``

const ZigZag = styled.img.attrs({
  className: 'mb1',
})``

const TopicLine = styled.div.attrs({
  className: 'font-4 ttu sans-serif black mt2 mb1',
})``

const TaglineBlack = styled.p.attrs({
  className: 'font-0-ns font-1 ttu reglo black',
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
