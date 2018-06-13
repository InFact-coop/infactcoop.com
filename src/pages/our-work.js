import React from 'react'
import styled, { css } from 'styled-components'

import { media, getVhInPixels } from '../styles/style_utils'
import Headroom from 'react-headroom'
import Header from '../containers/header'
import {
  Wrapper,
  Picture,
  Overlay,
  SectionCard,
  SectionText,
} from '../components/work-card'
import { Section, SectionTitle, SectionHeading } from '../components/section'
import { CardTitle, CardSubTitle, CardHeading } from '../components/card'
import { SplashImg } from '../components/splash'
import { LinkImage } from '../components/link-image'
import { ToplineBackground } from '../components/header'

import stimmy_card from '../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../assets/images/card_images/cast_card.png'
import bluecross_card from '../assets/images/card_images/bluecross_card.png'
import ourwork_header from '../assets/images/header_images/ourwork_header.png'
import first_days_card from '../assets/images/card_images/first_days_card.png'
import lcn_card from '../assets/images/card_images/lcn_card.png'
import unlock_card from '../assets/images/card_images/unlock_card.png'
import yimovi_card from '../assets/images/card_images/yimovi_card.png'
import lwc_card from '../assets/images/card_images/lwc_card.png'

const PictureWithFilter = styled(Picture)`
  ${({ src, gradient }) =>
    css`
      background-image: ${gradient}, url(${src});
    `};
`

import annaFreud from '../assets/images/partner_logos/anna_freud_grey.png'
import bluecross from '../assets/images/partner_logos/bluecross_grey.png'
import lwc from '../assets/images/partner_logos/lwc-grey.png'
import cast from '../assets/images/partner_logos/cast_grey.png'
import lcn from '../assets/images/partner_logos/lcn_grey.png'
import ucl from '../assets/images/partner_logos/ucl_grey.png'
import nhs from '../assets/images/partner_logos/nhs_grey.png'
import qsa from '../assets/images/partner_logos/qsa_grey.png'
import cambridge from '../assets/images/partner_logos/cambridge_grey.png'

const Splash = SplashImg.extend`
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
      />
      <LinkImage
        src={cast}
        width="14rem"
        target="_blank"
        href="http://www.wearecast.org.uk/"
      />
      <LinkImage
        src={annaFreud}
        width="17rem"
        target="_blank"
        href="https://www.annafreud.org/"
      />
      <LinkImage
        src={lwc}
        width="5em"
        target="_blank"
        href="http://www.womenscentre.org/"
      />
      <LinkImage
        src={bluecross}
        width="5em"
        target="_blank"
        href="https://www.bluecross.org.uk/"
      />
      <LinkImage
        src={lcn}
        width="10rem"
        target="_blank"
        href="http://www.lawcentres.org.uk/"
      />
      <LinkImage
        src={ucl}
        width="14rem"
        target="_blank"
        href="https://www.ucl.ac.uk/"
      />
      <LinkImage
        src={cambridge}
        width="17rem"
        target="_blank"
        href="https://www.cam.ac.uk/"
      />
      <LinkImage
        src={qsa}
        width="5rem"
        target="_blank"
        href="https://www.quakersocialaction.org.uk/"
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
      />
      <LinkImage
        src={cast}
        width="14rem"
        target="_blank"
        href="http://www.wearecast.org.uk/"
      />
      <LinkImage
        src={annaFreud}
        width="17rem"
        target="_blank"
        href="https://www.annafreud.org/"
      />
      <LinkImage
        src={lwc}
        width="5em"
        target="_blank"
        href="http://www.womenscentre.org/"
      />
      <LinkImage
        src={bluecross}
        width="5em"
        target="_blank"
        href="https://www.bluecross.org.uk/"
      />
    </div>
    <div className="flex justify-center flex-wrap justify-between-ns mv7">
      <LinkImage
        src={lcn}
        width="10rem"
        target="_blank"
        href="http://www.lawcentres.org.uk/"
      />
      <LinkImage
        src={qsa}
        width="5rem"
        target="_blank"
        href="https://www.quakersocialaction.org.uk/"
      />
      <LinkImage
        src={ucl}
        width="14rem"
        target="_blank"
        href="https://www.ucl.ac.uk/"
      />
      <LinkImage
        src={cambridge}
        width="17rem"
        target="_blank"
        href="https://www.cam.ac.uk/"
      />
    </div>
  </div>
)

const WorkGallery = () => (
  <div>
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
        <Wrapper to="/our-work/stimmy-things">
          <Picture src={stimmy_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Mental Health</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Stimmy Things</CardSubTitle>
            <SectionText>
              Working in collaboration with young people, parents and
              clinicians, we designed and built an app that helps young people
              with ADHD to manage their symptoms.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/bluecross">
          <PictureWithFilter
            src={bluecross_card}
            gradient={
              'linear-gradient(225deg, rgba(0,159,223,0.3) 0%, rgba(0,51,136,0.3) 100%)'
            }
          >
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
          </PictureWithFilter>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Blue Cross</CardSubTitle>
            <SectionText>
              We created an app for conscientious owners to find a loving new
              home for their pet.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/cast">
          <Picture src={cast_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>CAST Digital Fellowship</CardSubTitle>
            <SectionText>
              We collaborated with CAST to support senior staff at non-profits
              in becoming leaders of their organisation’s digital development.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/coming-soon">
          <PictureWithFilter
            src={yimovi_card}
            gradient={
              'linear-gradient(225deg, rgba(0,0,0,0.1) 0%, rgba(50,45,55,0.1) 100%)'
            }
          >
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />{' '}
          </PictureWithFilter>
          <SectionCard>
            <CardHeading>
              <CardTitle>Education</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Yimovi</CardSubTitle>
            <SectionText>
              YiMovi is a CMS-based website with a catalogue of films from the
              Chinese medical humanties field, built for UCL University.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/coming-soon">
          <Picture src={lcn_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />{' '}
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Law Centres Network</CardSubTitle>
            <SectionText>
              We built the LCN Feedback Platform to allow simple, quick, data
              collection with instant feedback on what others think.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/coming-soon">
          <Picture src={first_days_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />{' '}
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Wales Cooperative</CardSubTitle>
            <SectionText>
              Platform for helping with volunteer engagement from the beginning
              of the recruitment process right through to getting feedback on
              the volunteer's first day.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/coming-soon">
          <PictureWithFilter
            src={lwc_card}
            gradient="radial-gradient(circle, rgba(250,125,120,0.3) 0%, rgba(97,20,204,0.3) 100%)"
          >
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />{' '}
          </PictureWithFilter>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Lancashire Women's Centre</CardSubTitle>
            <SectionText>
              We created LWC: Service Search, which is an app to help women
              access the right services so they can feel more in control of
              their lives.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/coming-soon">
          <PictureWithFilter
            src={unlock_card}
            gradient="linear-gradient(225deg, rgba(0,0,0,0.1) 0%, rgba(50,45,55,0.1) 100%)"
          >
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />{' '}
          </PictureWithFilter>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Unlock</CardSubTitle>
            <SectionText>
              We built a chat bot to feature on Unlock's informationHub. Users
              can click on it and interact with it to answer their questions
              related to travel to the U.S.
            </SectionText>
          </SectionCard>
        </Wrapper>
      </div>
    </Section>
  </div>
)

export default WorkGallery
