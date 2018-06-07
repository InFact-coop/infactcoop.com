import React from 'react'
import styled, { css } from 'styled-components'

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

const Splash = SplashImg.extend`
  ${media.m`
    background-position: 65%;
  `};
  ${media.l`
    background-position: center;
  `};
`

const WorkGallery = () => (
  <div>
    <Header image={ourwork_header} splash={Splash}>
      Working with great people on inspiring projects
    </Header>
    <Section bg_color="white">
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

        <Wrapper to="/our-work/holding">
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

        <Wrapper to="/our-work/holding">
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

        <Wrapper to="/our-work/holding">
          <Picture src={first_days_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />{' '}
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Wales Cooperative Centre</CardSubTitle>
            <SectionText>
              First Days is a platform built to help engage with volunteers from
              the beginning of the recruitment process right through to getting
              feedback on the volunteer's first day.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/holding">
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

        <Wrapper to="/our-work/holding">
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
