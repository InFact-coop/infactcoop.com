import React from 'react'
import styled from 'styled-components'
import { media, backgroundImage } from '../styles/style_utils'
import logo from '../assets/logos/infact_logo_white.svg'
import logoGradient from '../assets/logos/infact_logo_gradient.svg'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const Splash = styled.section.attrs({
  className: 'flex flex-column items-center items-start-ns justify-start-ns',
})`
  height: 90vh;
  background: linear-gradient(
    0deg,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
`
const SplashWhite = styled.section.attrs({
  className: 'flex flex-column items-center items-start-ns justify-start-ns',
})`
  background: white;
  height: 40vh;
`

const Topline = styled.div.attrs({
  className:
    'flex justify-between items-center w-100 ph6-ns ph2 absolute top-0',
})`
  max-width: 1440px;
`

const Logo = styled.div.attrs({
  className: 'w5-ns h4-ns w4 h3',
})`
  background: ${backgroundImage(logo)};
`

const LogoGradient = styled(Logo)`
  background: ${backgroundImage(logoGradient)};
`

const Tagline = styled.div.attrs({
  className:
    'heading-ns font-1 ttu reglo white w-50-l w-70-m w-90 pl7-ns pl0 absolute tl-ns tc',
})`
  top: 30%;
  ${media.m`top: 33%`};
  ${media.l`top: 35%`};
`

const ZigZag = styled.img.attrs({
  className: 'mb1',
})``

const TopicLine = styled.div.attrs({
  className: 'font-4 ttu sans-serif black mt2 mb1',
})``

const TaglineBlack = styled.div.attrs({
  className: 'font-0 ttu reglo black',
})``

const SubTaglineBlack = styled.div.attrs({
  className: 'font-4 sans-serif black',
})``

const WorkHeading = ({ children }) => (
  <div className="mb2-ns mb1 tc w-100 mt7">
    <div className="mb2-ns mb1">{children}</div>
  </div>
)

export default {
  Splash,
  SplashWhite,
  Topline,
  Logo,
  LogoGradient,
  Tagline,
  TaglineBlack,
  SubTaglineBlack,
  TopicLine,
  WorkHeading,
  ZigZag,
}
