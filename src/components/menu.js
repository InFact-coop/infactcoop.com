import React from 'react'
import styled from 'styled-components'

import { backgroundImageToggle, displayElement } from '../styles/style_utils'
import { Topline, Logo } from './header'
import burgerClosed from '../assets/icons/menu_white_close.svg'
import burgerOpen from '../assets/icons/menu_white.svg'
import burgerGradient from '../assets/icons/menu_gradient.svg'

const Burger = styled.div.attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})`
  background: ${props =>
    backgroundImageToggle(props.menuIsOpen, burgerOpen, burgerClosed)};
`
const BurgerGradient = styled.div.attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})`
  background: ${props =>
    backgroundImageToggle(props.menuIsOpen, burgerOpen, burgerGradient)};
`
const Splash = styled.nav.attrs({
  className: `w-100 z-1 fixed vh-100 flex-column justify-center`,
})`
  max-width: 1440px;
  ${props => displayElement(props.menuIsOpen, 'flex')};
  background: linear-gradient(225deg, #fa7d78 0%, #6114cc 100%);
`

const MenuItem = styled.a.attrs({
  className: 'dib link ttu heading-ns font-1 reglo white',
})``

const LinkContainer = styled.div.attrs({
  className: `w-100 flex flex-column items-center justify-around pt3 pt0-ns`,
})`
  height: 80vh;
`

const Menu = ({ menuIsOpen, toggleMenu }) => (
  <Splash menuIsOpen={menuIsOpen}>
    <Topline>
      <a href="/">
        <Logo />
      </a>
      <Burger menuIsOpen={menuIsOpen} onClick={toggleMenu} />
    </Topline>
    <LinkContainer>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/our-work">Our Work</MenuItem>
      <MenuItem href="/our-approach">Approach</MenuItem>
      <MenuItem href="/about-us">About InFact</MenuItem>
      <MenuItem href="https://foundersandcoders.com/" target="_blank">
        Founders & Coders
      </MenuItem>
      {
        // <MenuItem href="#">Insights</MenuItem>
      }
      <MenuItem href="#">Contact</MenuItem>
    </LinkContainer>
  </Splash>
)

export default { Burger, BurgerGradient, Menu }
