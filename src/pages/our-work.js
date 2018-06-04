import React from 'react'

import HeaderLanding from '../containers/header'

import ourwork_header from '../assets/images/header_images/ourwork_header.png'
import OurWork from '../components/our-work'

const WorkGallery = ({ history }) => {
  return (
    <div>
      <HeaderLanding image={ourwork_header}>
        Working with great people on inspiring projects
      </HeaderLanding>
      <OurWork history={history} />
    </div>
  )
}

export default WorkGallery
