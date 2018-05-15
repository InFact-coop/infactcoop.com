import React from 'react'
import { connect } from 'react-redux'

import { Burger, Menu } from '../components/menu'
import { Splash, Topline, Logo, Tagline } from '../components/header'
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

const HeaderLanding = ({ menuIsOpen, toggleMenu }) => (
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
