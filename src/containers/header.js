import React from 'react'
import Link from 'gatsby-link'
import { BurgerGradient, Menu } from '../components/menu'
import {
  SplashWhite,
  Topline,
  LogoGradient,
  TaglineBlack,
} from '../components/header.js'
import { connect } from 'react-redux'
import { toggleMenu } from '../state/actions'

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

const Header = ({ siteTitle, menuIsOpen, toggleMenu }) => (
  <SplashWhite>
    <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    <Topline>
      <LogoGradient />
      <BurgerGradient menuIsOpen={menuIsOpen} onClick={toggleMenu} />
    </Topline>
    <TaglineBlack>Stimmy Things</TaglineBlack>
  </SplashWhite>
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
