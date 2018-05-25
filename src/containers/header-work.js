import React from 'react'
import { connect } from 'react-redux'

import { toggleMenu } from '../state/actions'

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
} from '../components/header'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

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

const Header = ({ menuIsOpen, toggleMenu }) => (
  <SplashWhite>
    <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    <Topline>
      <a href="/">
        <LogoGradient />
      </a>
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
