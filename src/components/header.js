import React from 'react'
import Link from 'gatsby-link'
import { Burger } from './menu'
import styled from 'styled-components'
import { media, backgroundImage } from '../layouts/styles/style_utils'
import logo from '../assets/logos/infact_logo_white.svg'

const Splash = styled.section.attrs({
  className:
    'pa1 flex flex-column items-center justify-center items-start-ns justify-start-ns',
})`
  height: 90vh;
  background: linear-gradient(
    0deg,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
`

const TopLine = styled.div.attrs({
  className: 'flex justify-between items-center w-100 h4 absolute top-0 ph6',
})``

const Logo = styled.div.attrs({
  className: 'w5 h4',
})`
  background: ${backgroundImage(logo)};
`

const Tagline = styled.div.attrs({
  className: 'heading white w-50-l w-70-m w-90 pl7-ns pl0 absolute tl-ns tc',
})`
  top: 30%;
  ${media.m`top: 33%`};
  ${media.l`top: 35%`};
`

const Header = ({ siteTitle }) => (
  <Splash>
    <TopLine>
      <Logo />
      <Burger />
    </TopLine>
    <Tagline>InFact is the most awesome co-op you will ever work with.</Tagline>
  </Splash>
)

export default Header
