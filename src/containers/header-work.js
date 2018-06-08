import React from 'react'
import { connect } from 'react-redux'

import { toggleMenu } from '../state/actions'

import { Menu } from '../components/menu'
import {
  SplashWhite,
  TaglineBlack,
  SubTaglineBlack,
  TopicLine,
  WorkHeading,
  ZigZag,
} from '../components/header'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const Header = ({
  menuIsOpen,
  toggleMenu,
  topicLine,
  tagLine,
  subTagLine,
  gradient,
}) => {
  return (
    <SplashWhite>
      <Menu
        menuIsOpen={menuIsOpen}
        toggleMenu={toggleMenu}
        gradient={gradient}
      />
      <WorkHeading>
        <TopicLine>{topicLine}</TopicLine>
        <ZigZag src={wigglyBottom} alt="wiggle" />
        <TaglineBlack>{tagLine}</TaglineBlack>
        <SubTaglineBlack>{subTagLine}</SubTaglineBlack>
      </WorkHeading>
    </SplashWhite>
  )
}

export default connect(
  ({ menuIsOpen }) => ({ menuIsOpen }),
  { toggleMenu }
)(Header)
