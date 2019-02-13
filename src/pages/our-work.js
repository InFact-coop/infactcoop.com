import React from 'react'
import styled, { css } from 'styled-components'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'

import { media, getVhInPixels } from '../styles/style_utils'
import Header from '../containers/header'
import Layout from '../components/layout'
import { Picture, WorkCard } from '../components/work-card'
import { Section, SectionTitle, SectionHeading } from '../components/section'
import { SplashImg } from '../components/splash'
import { LinkImage } from '../components/link-image'
import { ToplineBackground } from '../components/header'

import workProjects from '../data/work-projects'

import ourwork_header from '../assets/images/header_images/ourwork_header.png'

import annaFreud from '../assets/images/partner_logos/anna_freud.png'
import bluecross from '../assets/images/partner_logos/bluecross.png'
import lwc from '../assets/images/partner_logos/lwc.png'
import cast from '../assets/images/partner_logos/cast.png'
import lcn from '../assets/images/partner_logos/lcn.png'
import ucl from '../assets/images/partner_logos/ucl.png'
import nhs from '../assets/images/partner_logos/nhs.png'
import qsa from '../assets/images/partner_logos/qsa.png'
import cambridge from '../assets/images/partner_logos/cambridge.png'

const Splash = styled(SplashImg)`
  ${media.m`
    background-position: 65%;
  `};
  ${media.l`
    background-position: center;
  `};
`

const PartnersMobile = () => (
  <div className="dn-l">
    <div className="flex justify-center flex-wrap mv7-l">
      <LinkImage
        src={nhs}
        width="6rem"
        href="http://www.slam.nhs.uk/"
        target="_blank"
        grayscale
      />
      <LinkImage
        src={cast}
        width="14rem"
        target="_blank"
        href="http://www.wearecast.org.uk/"
        grayscale
      />
      <LinkImage
        src={annaFreud}
        width="17rem"
        target="_blank"
        href="https://www.annafreud.org/"
        grayscale
      />
      <LinkImage
        src={lwc}
        width="5em"
        target="_blank"
        href="http://www.womenscentre.org/"
        grayscale
      />
      <LinkImage
        src={bluecross}
        width="5em"
        target="_blank"
        href="https://www.bluecross.org.uk/"
        grayscale
      />
      <LinkImage
        src={lcn}
        width="10rem"
        target="_blank"
        href="http://www.lawcentres.org.uk/"
        grayscale
      />
      <LinkImage
        src={ucl}
        width="14rem"
        target="_blank"
        href="https://www.ucl.ac.uk/"
        grayscale
      />
      <LinkImage
        src={cambridge}
        width="17rem"
        target="_blank"
        href="https://www.cam.ac.uk/"
        grayscale
      />
      <LinkImage
        src={qsa}
        width="5rem"
        target="_blank"
        href="https://www.quakersocialaction.org.uk/"
        grayscale
      />
    </div>
  </div>
)

const Partners = () => (
  <div className="dn db-l">
    <div className="flex justify-center flex-wrap justify-between-ns mv7-l">
      <LinkImage
        src={nhs}
        width="6rem"
        href="http://www.slam.nhs.uk/"
        target="_blank"
        grayscale
      />
      <LinkImage
        src={cast}
        width="14rem"
        target="_blank"
        href="http://www.wearecast.org.uk/"
        grayscale
      />
      <LinkImage
        src={annaFreud}
        width="17rem"
        target="_blank"
        href="https://www.annafreud.org/"
        grayscale
      />
      <LinkImage
        src={lwc}
        width="5em"
        target="_blank"
        href="http://www.womenscentre.org/"
        grayscale
      />
      <LinkImage
        src={bluecross}
        width="5em"
        target="_blank"
        href="https://www.bluecross.org.uk/"
        grayscale
      />
    </div>
    <div className="flex justify-center flex-wrap justify-between-ns mv7">
      <LinkImage
        src={lcn}
        width="10rem"
        target="_blank"
        href="http://www.lawcentres.org.uk/"
        grayscale
      />
      <LinkImage
        src={qsa}
        width="5rem"
        target="_blank"
        href="https://www.quakersocialaction.org.uk/"
        grayscale
      />
      <LinkImage
        src={ucl}
        width="14rem"
        target="_blank"
        href="https://www.ucl.ac.uk/"
        grayscale
      />
      <LinkImage
        src={cambridge}
        width="17rem"
        target="_blank"
        href="https://www.cam.ac.uk/"
        grayscale
      />
    </div>
  </div>
)

const WorkGallery = () => (
  <Layout>
    <Helmet
      title="Our Work - InFact Digital Co-op"
      meta={[
        {
          name: 'description',
          content:
            "Check out some of the apps and websites we're most proud of.",
        },
      ]}
    />
    <Header image={ourwork_header} splash={Splash}>
      Working with great people on inspiring projects
    </Header>
    <Headroom style={{ position: 'fixed' }} pinStart={getVhInPixels()}>
      <ToplineBackground />
    </Headroom>
    <Section bg_color="white">
      <PartnersMobile />
      <Partners />
    </Section>
    <Section bg_color="light-gray">
      <SectionHeading mb>
        <SectionTitle>Our Work</SectionTitle>
      </SectionHeading>

      <div className="flex-ns flex-column flex-row-ns flex-wrap justify-between-ns">
        {Object.values(workProjects).map((workProject, i) => (
          <WorkCard {...workProject} key={i} />
        ))}
      </div>
    </Section>
  </Layout>
)

export default WorkGallery
