import React from 'react'

import AboutUs from '../components/about-us'
import HeaderLanding from '../containers/header'
import { BlueOverlay } from '../components/overlay'

import getToKnowUs from '../assets/images/get_to_know_us.png'

const AboutWork = () => {
  return (
    <div>
      <HeaderLanding image={getToKnowUs} overlay={BlueOverlay}>
        Co-operatively driven design and development.
      </HeaderLanding>
      <AboutUs />
    </div>
  )
}

export default AboutWork
