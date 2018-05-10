import React from 'react'
import Link from 'gatsby-link'
import { Burger, Menu } from '../components/menu'
import { Splash, Topline, Logo, Tagline } from '../components/header.js'
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

const HeaderLanding = ({ siteTitle, menuIsOpen, toggleMenu }) => (
  <Splash>
    <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    <Topline>
      <Logo />
      <Burger menuIsOpen={menuIsOpen} onClick={toggleMenu} />
    </Topline>
    <Tagline>InFact is the most awesome co-op you will ever work with.</Tagline>
  </Splash>
)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLanding)
