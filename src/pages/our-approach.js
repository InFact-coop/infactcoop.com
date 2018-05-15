import React from 'react'

import HeaderLanding from '../containers/header'
import { BlueOverlay } from '../components/overlay'

import lyingOnTheGrass from '../assets/images/we_love_fac.png'

const OurApproach = () => {
  return (
    <div>
      <HeaderLanding image={lyingOnTheGrass} overlay={BlueOverlay}>
        Our day to day is an ongoing process of discovering new things about
        human experience
      </HeaderLanding>
    </div>
  )
}

export default OurApproach
