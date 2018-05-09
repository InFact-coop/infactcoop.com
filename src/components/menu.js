import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { backgroundImageToggle, displayElement } from '../styles/style_utils'
import { Topline, Logo } from './header'
import burgerClosed from '../assets/icons/menu_white_close.svg'
import burgerOpen from '../assets/icons/menu_white.svg'

const Burger = styled.div.attrs({
  className: 'w3 h3 pointer',
})`
  background: ${props =>
    backgroundImageToggle(props.menuIsOpen, burgerOpen, burgerClosed)};
`

const Splash = styled.nav.attrs({
  className: `w-100 z-1 fixed vh-100`,
})`
  ${props => displayElement(props.menuIsOpen)};
  background: linear-gradient(
    0deg,
    rgba(250, 125, 120, 1) 0%,
    rgba(97, 20, 204, 1) 100%
  );
`

const MenuItem = styled.a.attrs({
  className: 'dib link ttu heading white pv2',
})``

const LinkContainer = styled.div.attrs({
  className: `w-100 flex flex-column items-center justify-center`,
})``

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

export default { Burger, Menu }
