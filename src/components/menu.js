import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { backgroundImageToggle } from '../styles/style_utils'
import burgerClosed from '../assets/icons/menu_white_close.svg'
import burgerOpen from '../assets/icons/menu_white.svg'

const Burger = styled.div.attrs({
  className: 'w3 h3',
})`
  background: ${props =>
    backgroundImageToggle(props.menuIsOpen, burgerOpen, burgerClosed)};
`

export default { Burger }
