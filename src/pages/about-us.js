import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'

import Header from '../containers/header'

import { getVhInPixels } from '../styles/style_utils'
import Layout from '../components/layout'
import { AboutCard, CardsWrapper } from '../components/about-us'
import { Wrapper, ZigZag, Text, Title } from '../components/about-pages'
import { YellowBackgroundSplash } from '../components/splash'

import { SectionTitle, SectionHeading } from '../components/section'

import { ToplineBackground } from '../components/header'
import lucy from '../assets/images/team_images/lucy.jpg'
import ivan from '../assets/images/team_images/ivan.jpg'
import noga from '../assets/images/team_images/noga.jpg'
import max from '../assets/images/team_images/max.jpg'

import aboutus_header from '../assets/images/header_images/aboutus_header.jpg'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const ExternalLink = styled.a.attrs({
  className: 'link light-green b pointer',
  target: '_blank',
  rel: 'noopener noreferrer',
})``

const AboutUs = () => (
  <div>
    <Helmet
      title="About Us - InFact Digital Co-op"
      meta={[
        {
          name: 'description',
          content:
            'Find out about InFact, a cooperative community made up of a diverse group of designers, developers and web professionals.',
        },
      ]}
    />
    <Headroom style={{ position: 'fixed' }} pinStart={getVhInPixels()}>
      <ToplineBackground />
    </Headroom>
    <Wrapper>
      <Title>We are InFact</Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        We are InFact Digital Co-op, a small digital and creative agency with a
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
        <Link to="/contact-us" className="link light-green b">
          {' '}
          then why not get in touch?
        </Link>
      </Text>
      <SectionHeading className="mt5">
        <SectionTitle>The future of the web is co-operative</SectionTitle>
      </SectionHeading>
      <Text>
        Our industry is saturated with companies who market themselves as
        "disrupters" and "innovators" — with the newest and shiniest fad tech,
        with astronomical and unsustainable rates of growth, with data
        harvesting and corporate interests winning out against civil liberties.
        But we've seen this script before, and we think there's a better way.
      </Text>
      <Text>
        We came to the internet believing in its power to act as a free, open
        site for discussion and exchange across borders, and its potential for
        social good beyond profit. We are at our best to leverage this power as
        a workers' co-operative, which means we are 100% owned and controlled by
        our employees.
      </Text>
      <Text>
        We are at the same time workers, directors, accountants, strategists,
        product managers, designers and developers, sometimes donning several of
        these hats simultaneously. Most of all we value the autonomy and
        decision-making power we have over our work lives, getting to shape them
        according to our own vision and values. If you'd like to find out more,
        check out{' '}
        <ExternalLink href="https://www.youtube.com/watch?v=UKtHJP7Qfio">
          this video
        </ExternalLink>{' '}
        on the amazing benefits of being a co-operative.
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
    <Layout>
      <Header image={aboutus_header} splash={YellowBackgroundSplash}>
        Co-operatively driven design and development
      </Header>
      <AboutUs />
    </Layout>
  )
}

export default AboutWork
