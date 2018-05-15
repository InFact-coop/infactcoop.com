import React from 'react'
import { connect } from 'react-redux'

import { Burger, Menu } from '../components/menu'
import {
  SplashGradient,
  SplashImg,
  Topline,
<<<<<<< HEAD
  LogoGradient,
  TaglineBlack,
  SubTaglineBlack,
  TopicLine,
  WorkHeading,
  ZigZag,
} from '../components/header'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'
=======
  Logo,
  Tagline,
} from '../components/header'
import { toggleMenu } from '../state/actions'
>>>>>>> master

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

const emptySpan = () => <span className="dn" />

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
      <Topline>
        <Logo />
        <Burger menuIsOpen={menuIsOpen} onClick={toggleMenu} />
      </Topline>
      <Tagline>{children}</Tagline>
    </Splash>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLanding)
