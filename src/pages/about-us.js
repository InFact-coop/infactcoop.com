import React from 'react'

import Header from '../containers/header'
import { AboutCard, CardsWrapper } from '../components/about-us'
import { Wrapper, ZigZag, Text, Title } from '../components/about-pages'
import { YellowBackgroundSplash } from '../components/splash'

import lucy from '../assets/images/team_images/lucy.jpg'
import ivan from '../assets/images/team_images/ivan.jpg'
import noga from '../assets/images/team_images/noga.jpg'
import max from '../assets/images/team_images/max.jpg'
import sophie from '../assets/images/team_images/sophie.jpg'

import aboutus_header from '../assets/images/header_images/aboutus_header.jpg'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const AboutUs = () => (
  <div>
    <Wrapper>
      <Title>We are InFact</Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      </Text>
      <Text>
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus.
      </Text>
    </Wrapper>
    <CardsWrapper>
      {AboutCard(noga, 'Noga Enbar', 'Designer')}
      {AboutCard(ivan, 'Ivan Gonzalez', 'Lead Developer')}
      {AboutCard(lucy, 'Lucy King', 'Developer')}
      {AboutCard(max, 'Max Gerber', 'Developer')}
      {AboutCard(sophie, 'Sophie Levens', 'Developer')}
    </CardsWrapper>
  </div>
)

const AboutWork = () => {
  return (
    <div>
      <Header image={aboutus_header} splash={YellowBackgroundSplash}>
        Co-operatively driven design and development.
      </Header>
      <AboutUs />
    </div>
  )
}

export default AboutWork
