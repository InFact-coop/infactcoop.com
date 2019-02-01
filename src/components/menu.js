import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import {
  backgroundImageToggle,
  menuAnimationToggle,
  getVhInPixels,
  disableUserSelect,
} from '../styles/style_utils'
import { Topline, LogoWhite, LogoGradient } from './header'
import burgerClosed from '../assets/icons/menu_white_close.svg'
import burgerOpen from '../assets/icons/menu_white.svg'
import burgerGradient from '../assets/icons/menu_gradient.svg'

const BurgerWhite = styled.div.attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})`
  background: ${props =>
    backgroundImageToggle(
      props.menuIsOpen === 'OPENED',
      burgerOpen,
      burgerClosed
    )};
  transition: ${props =>
    props.menuIsOpen === 'OPENED'
      ? 'inherit'
      : 'background 0.2s ease-out 0.5s'};
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
  transition: ${props =>
    props.menuIsOpen === 'OPENED'
      ? 'inherit'
      : 'background 0.2s ease-out 0.5s'};
`
const Splash = styled.nav.attrs({
  className: `nav w-100 z-1 top-0 flex-column justify-center`,
})`
  position: fixed;
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

const MenuItem = styled(Link).attrs({
  className: 'dib ttu heading-ns font-1 reglo link grow',
})`
  &:focus {
    outline: 0;
  }
  color: transparent;
  ${props => menuAnimationToggle(props.menuIsOpen)};
  pointer-events: ${({ menuIsOpen }) =>
    menuIsOpen === 'OPENED' ? 'inherit' : 'none'};
  ${({ menuIsOpen }) => disableUserSelect(menuIsOpen !== 'OPENED')};
`

const MenuItemATag = MenuItem.withComponent('a')

const LinkContainer = styled.div.attrs({
  className: `nav w-100 flex flex-column items-center justify-around pt3 pt0-ns`,
})`
  height: 80vh;
`

const Menu = ({ menuIsOpen, toggleMenu, gradient }) => {
  const Burger = gradient ? BurgerGradient : BurgerWhite
  const Logo = gradient ? LogoGradient : LogoWhite
  return (
    <Splash menuIsOpen={menuIsOpen}>
      <Headroom
        style={{ position: 'fixed', top: 0 }}
        pinStart={document && getVhInPixels()}
      >
        <Topline gradient={gradient} menuIsOpen={menuIsOpen}>
          <Link to="/" onClick={() => toggleMenu({ pageChange: true })}>
            <Logo menuIsOpen={menuIsOpen} />
          </Link>
          <Burger menuIsOpen={menuIsOpen} onClick={() => toggleMenu()} />
        </Topline>
      </Headroom>
      <LinkContainer>
        <MenuItem
          menuIsOpen={menuIsOpen}
          to="/"
          onClick={() => toggleMenu({ pageChange: true })}
        >
          Home
        </MenuItem>
        <MenuItem
          menuIsOpen={menuIsOpen}
          to="/our-work"
          onClick={() => toggleMenu({ pageChange: true })}
        >
          Our Work
        </MenuItem>
        <MenuItem
          menuIsOpen={menuIsOpen}
          to="/our-approach"
          onClick={() => toggleMenu({ pageChange: true })}
        >
          Approach
        </MenuItem>
        <MenuItem
          menuIsOpen={menuIsOpen}
          to="/about-us"
          onClick={() => toggleMenu({ pageChange: true })}
        >
          About InFact
        </MenuItem>
        <MenuItemATag
          menuIsOpen={menuIsOpen}
          href="https://foundersandcoders.com/"
          target="_blank"
        >
          Founders & Coders
        </MenuItemATag>
        <MenuItem
          to="/contact-us"
          menuIsOpen={menuIsOpen}
          onClick={() => toggleMenu({ pageChange: true })}
        >
          Contact
        </MenuItem>
      </LinkContainer>
    </Splash>
  )
}

export { BurgerWhite, BurgerGradient, Menu }
