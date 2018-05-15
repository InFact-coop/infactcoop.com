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
  background: linear-gradient(
    to right,
    rgba(97, 20, 204, 1) 0%,
    rgba(250, 125, 120, 1) 100%
  );
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
      <Logo />
      <Burger menuIsOpen={menuIsOpen} onClick={toggleMenu} />
    </Topline>
    <LinkContainer>
      <MenuItem href="#">Home</MenuItem>
      <MenuItem href="#">Our Work</MenuItem>
      <MenuItem href="#">Approach</MenuItem>
      <MenuItem href="#">About InFact</MenuItem>
      <MenuItem href="#">Founders & Coders</MenuItem>
      <MenuItem href="#">Insights</MenuItem>
      <MenuItem href="#">Contact</MenuItem>
    </LinkContainer>
  </Splash>
)

export default { Burger, BurgerGradient, Menu }
