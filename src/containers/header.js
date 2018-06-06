import React from 'react'
import { connect } from 'react-redux'

import { Menu } from '../components/menu'
import { Tagline } from '../components/header'
import { SplashGradient } from '../components/splash'
import { toggleMenu } from '../state/actions'

const Header = ({ menuIsOpen, toggleMenu, image, children, splash }) => {
  const Splash = image ? splash : SplashGradient
  return (
    <Splash src={image}>
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <Tagline>{children}</Tagline>
    </Splash>
  )
}

export default connect(
  ({ menuIsOpen }) => ({ menuIsOpen }),
  { toggleMenu }
)(Header)
