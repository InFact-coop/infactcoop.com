import React from 'react'

import HeaderLanding from '../containers/header'
import { BlueOverlay } from '../components/overlay'

import getToKnowUs from '../assets/images/get_to_know_us.png'
import OurWork from '../components/our-work'

const WorkGallery = ({ history }) => {
  return (
    <div>
      <HeaderLanding image={getToKnowUs} overlay={BlueOverlay}>
        Working with great people on inspiring projects.
      </HeaderLanding>
      <OurWork history={history} />
    </div>
  )
}

export default WorkGallery
