import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import { media, getVhInPixels } from '../styles/style_utils'
import Helmet from 'react-helmet'

import Header from '../containers/header'
import Layout from '../components/layout'
import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import FAC from '../components/fac'
import { SplashImg } from '../components/splash'
import { ToplineBackground } from '../components/header'
import {
  Section,
  SectionTitle,
  SectionHeading,
  SectionButton,
} from '../components/section'
import { LinkImage } from '../components/link-image'
import WorkCard from '../components/work-card'
import workProjects from '../data/work-projects'

import landing_header from '../assets/images/header_images/landing_header2.jpg'

import annaFreud from '../assets/images/partner_logos/anna_freud.png'
import bluecross from '../assets/images/partner_logos/bluecross.png'
import cast from '../assets/images/partner_logos/cast.png'
import lcn from '../assets/images/partner_logos/lcn.png'
import nhs from '../assets/images/partner_logos/nhs.png'
import qsa from '../assets/images/partner_logos/qsa.png'

const WorkLink = styled(SectionButton).attrs(({ className }) => ({
  className: `${className} no-underline w-20-l w-40-m w-80 tc`,
}))`
  z-index: 0;
`

const Splash = styled(SplashImg)`
  background-position: 73%;
  ${media.m`
    background-position: 86%;
  `};
  ${media.l`
    background-position: 67%;
  `};
`

const IndexPage = () => (
  <Layout>
    <Helmet
      title="InFact Digital Co-op"
      meta={[
        {
          name: 'description',
          content:
            'We are a design & development digital co-operative using technology in service of humans and nature.',
        },
      ]}
    />
    <Header image={landing_header} splash={Splash}>
      We're a design & development co-operative using Technology in service of
      humans and nature
    </Header>
    <Headroom style={{ position: 'fixed' }} pinStart={getVhInPixels()}>
      <ToplineBackground />
    </Headroom>
    <OurApproach />

    <Section bg_color="light-gray">
      <SectionHeading mb>
        <SectionTitle>Our Work</SectionTitle>
      </SectionHeading>

      <div className="flex-ns flex-column flex-row-ns justify-between-ns">
        <WorkCard {...workProjects['founders-and-coders']} />
        <WorkCard {...workProjects['meme-generator']} />
      </div>
      <WorkLink as={Link} to="/our-work">
        See It All
      </WorkLink>
    </Section>

    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>InFact works with</SectionTitle>
      </SectionHeading>
      <div className="flex justify-center flex-wrap justify-between-l mb7-l">
        <LinkImage
          as="a"
          src={nhs}
          width="6rem"
          href="http://www.slam.nhs.uk/"
          target="_blank"
        />
        <LinkImage
          as="a"
          src={cast}
          width="14rem"
          target="_blank"
          href="http://www.wearecast.org.uk/"
        />
        <LinkImage
          as="a"
          src={annaFreud}
          width="17rem"
          target="_blank"
          href="https://www.annafreud.org/"
        />
        <LinkImage
          as="a"
          src={bluecross}
          width="5em"
          target="_blank"
          href="https://www.bluecross.org.uk/"
        />
        <LinkImage
          as="a"
          src={lcn}
          width="10rem"
          target="_blank"
          href="http://www.lawcentres.org.uk/"
        />
        <LinkImage
          as="a"
          src={qsa}
          width="5rem"
          target="_blank"
          href="https://www.quakersocialaction.org.uk/"
        />
      </div>
    </Section>
    <GetToKnowUs />
    <FAC />
  </Layout>
)

export default IndexPage
