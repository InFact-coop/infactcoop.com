import React from 'react'
import styled, { css } from 'styled-components'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import {
  Wrapper,
  Picture,
  Overlay,
  SectionCard,
  SectionText,
} from '../../components/work-card'
import { CardTitle, CardSubTitle, CardHeading } from '../../components/card'
import {
  WorkWrapper,
  WorkImg,
  BannerImg,
  WorkDescription,
} from '../../components/work-content'

import ys_header from '../../assets/images/header_images/ys_header.png'
import ys_1 from '../../assets/images/inline_images/ys_1.png'
import ys_2 from '../../assets/images/inline_images/ys_2.png'
import cast_card from '../../assets/images/card_images/cast_card.png'
import bluecross_card from '../../assets/images/card_images/bluecross_card.png'

const PictureWithFilter = styled(Picture)`
  ${({ src, gradient }) =>
    css`
      background-image: ${gradient}, url(${src});
    `};
`

const AboutWork = () => (
  <Layout>
    <Header
      topicLine="Tech for Good"
      tagLine="Your Sanctuary"
      subTagLine="A tool to allow victoms of domestic violence to gain useful information, either from a live advisor or through a chatbot."
      gradient
    />
    <div className="ma0">
      <BannerImg src={ys_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          Your Sanctuary wanted to help their users access information and
          support outside of the hours their helpline was staffed. They also
          wanted their information to be more accessible to users who are
          disabled and in vulnerable situations.
        </WorkDescription>
        <SectionHeading>
          <SectionTitle>Discovery and Design</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          Working with Your Sanctuary and CAST, we decided to draw inspiration
          from a previous tool we had built for Action For Children. Reusing
          some of the functionality and ideas from this helped us progress
          forwards quicker and come up with a simple, yet effective design with
          an integrated out of the box chat solution.
        </WorkDescription>
        <WorkImg src={ys_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We built an app which:
          <ul className="tl">
            <li>
              Communicates information clearly and concisely for vulnerable
              users
            </li>
            <li>
              Implements a chatbot to provide information to users out of hours,
              as well as provide answers to commonly asked FAQs to free up staff
              time
            </li>
            <li>
              Connects users and staff on the chat tool and enables users to
              return to the session at another time
            </li>
            <li>
              Gives users optional anonymity through a coded login system (users
              enter their email only if they want to be sent reminders of their
              password)
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={ys_2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out Your Sanctuary{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://chat.yoursanctuary.org.uk/"
            >
              here
            </a>
          </p>
        </WorkDescription>
      </WorkWrapper>
    </div>

    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>More Work</SectionTitle>
      </SectionHeading>
      <div className="flex-ns flex-column flex-row-ns justify-between-ns">
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
      </div>
    </Section>
  </Layout>
)

export default AboutWork
