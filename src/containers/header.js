import React from 'react'
import { connect } from 'react-redux'

import { Menu } from '../components/menu'
import { SplashGradient, SplashImg, Tagline } from '../components/header'
import { toggleMenu } from '../state/actions'
import { emptySpan } from '../styles/style_utils'

const mapStateToProps = ({ menuIsOpen }) => {
  return { menuIsOpen }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu)
    },
  }
}

const HeaderLanding = ({
  menuIsOpen,
  toggleMenu,
  image,
  children,
  overlay,
}) => {
  const Splash = image ? SplashImg : SplashGradient
  const Overlay = overlay ? overlay : emptySpan

  return (
    <Splash src={image}>
      <Overlay />
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <Tagline>{children}</Tagline>
    </Splash>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLanding)
