import React from 'react'

import WorkContent from '../containers/work-content'
import OurWork from '../components/our-work'

const AboutWork = ({ history }) => {
  return (
    <div>
      <WorkContent />
      <OurWork history={history} />
    </div>
  )
}

export default AboutWork
