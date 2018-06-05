import React from 'react'

import Header from '../containers/header'

import ourwork_header from '../assets/images/header_images/ourwork_header.png'
import OurWork from '../components/our-work'
import { SplashImg } from '../components/splash'

const WorkGallery = ({ history }) => {
  return (
    <div>
      <Header image={ourwork_header} splash={SplashImg}>
        Working with great people on inspiring projects
      </Header>
      <OurWork history={history} />
    </div>
  )
}

export default WorkGallery
