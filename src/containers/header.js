import React from 'react'
import Link from 'gatsby-link'
import { BurgerGradient, Menu } from '../components/menu'
import {
  SplashWhite,
  Topline,
  LogoGradient,
  TaglineBlack,
  SubTaglineBlack,
  TopicLine,
  WorkHeading,
  ZigZag,
} from '../components/header.js'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

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
    <WorkHeading>
      <TopicLine>Mental Health</TopicLine>
      <ZigZag src={wigglyBottom} alt="wiggle" />
      <TaglineBlack>Stimmy Things</TaglineBlack>
      <SubTaglineBlack>
        An app to help young people deal better with ADHD.
      </SubTaglineBlack>
    </WorkHeading>
  </SplashWhite>
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
