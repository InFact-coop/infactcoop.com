import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {
  backgroundImageToggle,
  menuAnimationToggle,
} from '../styles/style_utils'
import { Topline, Logo } from './header'
import burgerClosed from '../assets/icons/menu_white_close.svg'
import burgerOpen from '../assets/icons/menu_white.svg'
import burgerGradient from '../assets/icons/menu_gradient.svg'

const Burger = styled.div.attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})`
  background: ${props =>
    backgroundImageToggle(
      props.menuIsOpen === 'OPENED',
      burgerOpen,
      burgerClosed
    )};
`
const BurgerGradient = styled.div.attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})`
  background: ${props =>
    backgroundImageToggle(
      props.menuIsOpen === 'OPENED',
      burgerOpen,
      burgerGradient
    )};
`
const Splash = styled.nav.attrs({
  className: `nav w-100 z-1 fixed flex-column justify-center`,
})`
  max-width: 1440px;
  height: ${props => (props.menuIsOpen === 'OPENED' ? '100vh' : '0')};
  transition: 0.8s;
  display: flex;
  transition-delay: 0.1s;
  background: linear-gradient(
    to right,
    rgba(97, 20, 204, 1) 0%,
    rgba(250, 125, 120, 1) 100%
  );
`

const MenuItem = styled.a.attrs({
  className: 'dib ttu heading-ns font-1 reglo link',
})`
  color: transparent;
  ${props => menuAnimationToggle(props.menuIsOpen)};
`
const LinkContainer = styled.div.attrs({
  className: `nav w-100 flex flex-column items-center justify-around pt3 pt0-ns`,
})`
  height: 80vh;
`

const Menu = ({ menuIsOpen, toggleMenu }) => (
  <Splash menuIsOpen={menuIsOpen}>
    <Topline>
      <Link to="/">
        <Logo />
      </Link>
      <Burger menuIsOpen={menuIsOpen} onClick={toggleMenu} />
    </Topline>
    <LinkContainer>
      <MenuItem menuIsOpen={menuIsOpen} href="/">
        Home
      </MenuItem>
      <MenuItem menuIsOpen={menuIsOpen} href="/our-work">
        Our Work
      </MenuItem>
      <MenuItem menuIsOpen={menuIsOpen} href="/our-approach">
        Approach
      </MenuItem>
      <MenuItem menuIsOpen={menuIsOpen} href="/about-us">
        About InFact
      </MenuItem>
      <MenuItem
        menuIsOpen={menuIsOpen}
        href="https://foundersandcoders.com/"
        target="_blank"
      >
        Founders & Coders
      </MenuItem>
      <MenuItem href="/contact-us" menuIsOpen={menuIsOpen}>
        Contact
      </MenuItem>
    </LinkContainer>
  </Splash>
)

export default { Burger, BurgerGradient, Menu }
