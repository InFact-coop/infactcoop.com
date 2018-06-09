import React from 'react'
import Link from 'gatsby-link'

import Header from '../containers/header'
import { AboutCard, CardsWrapper } from '../components/about-us'
import { Wrapper, ZigZag, Text, Title } from '../components/about-pages'
import { YellowBackgroundSplash } from '../components/splash'

import { ToplineBackground } from '../components/header'
import lucy from '../assets/images/team_images/lucy.png'
import ivan from '../assets/images/team_images/ivan.png'
import noga from '../assets/images/team_images/noga.png'
import max from '../assets/images/team_images/max.png'
import sophie from '../assets/images/team_images/sophie.png'

import aboutus_header from '../assets/images/header_images/aboutus_header.jpg'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const AboutUs = () => (
  <div>
    <ToplineBackground />
    <Wrapper>
      <Title>We are InFact</Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        We are InFact Co-op, a small digital and creative agency with a
        razor-sharp focus: to work with charities, non-profits and businesses to
        provide digital answers to their organisational problems. Comprised of a
        diverse group of designers, developers, and web professionals, we
        believe in the power of technology and design to act as a force for
        social good.
      </Text>
      <Text>
        We recognise the transformative impact and reach that the internet has
        had on every aspect of the modern world. We wish to leverage that reach
        to turn your great ideas into reality. If this sounds like you,
        <Link to="/contact-us"> then why not get in touch?</Link>
      </Text>
    </Wrapper>
    <CardsWrapper>
      {AboutCard(
        ivan,
        'Ivan Gonzalez',
        'Lead Developer',
        'https://github.com/ivanmauricio'
      )}
      {AboutCard(lucy, 'Lucy King', 'Developer', 'https://github.com/lucymk')}
      {AboutCard(
        max,
        'Max Gerber',
        'Developer',
        'https://github.com/maxgerber/'
      )}
      {AboutCard(
        sophie,
        'Sophie Levens',
        'Developer',
        'https://github.com/sophielevens'
      )}
      {AboutCard(
        noga,
        'Noga Enbar',
        'Designer',
        'http://www.inbarcodedesign.com/'
      )}
    </CardsWrapper>
  </div>
)

const AboutWork = () => {
  return (
    <div>
      <Header image={aboutus_header} splash={YellowBackgroundSplash}>
        Co-operatively driven design and development
      </Header>
      <AboutUs />
    </div>
  )
}

export default AboutWork
