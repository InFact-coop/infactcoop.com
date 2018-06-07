import React from 'react'
import styled from 'styled-components'

import burgerClosedWhiteSVG from '../assets/icons/inline/menu_white_animation.svg'
import burgerInitWhiteSVG from '../assets/icons/inline/menu_white_animation.svg'
import burgerInitGradientSVG from '../assets/icons/inline/menu_white_animation.svg'
import burgerClosedGradientSVG from '../assets/icons/inline/menu_white_animation.svg'
import burgerOpenSVG from '../assets/icons/inline/menu_white_animation.svg'

const BurgerClosedWhite = styled(burgerClosedWhiteSVG).attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})``
const BurgerInitWhite = styled(burgerInitWhiteSVG).attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})``
const BurgerInitGradient = styled(burgerInitGradientSVG).attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})``
const BurgerClosedGradient = styled(burgerClosedGradientSVG).attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})``

const BurgerOpen = styled(burgerOpenSVG).attrs({
  className: 'w3-ns h3-ns w2 h3 pointer burger',
})``

export default {
  BurgerClosedWhite,
  BurgerInitWhite,
  BurgerInitGradient,
  BurgerClosedGradient,
  BurgerOpen,
}
