import React from 'react'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import {
  WorkWrapper,
  WorkImg,
  BannerImg,
  WorkDescription,
} from '../../components/work-content'

import RandomCards from '../../components/random-cards'

import first_days_header from '../../assets/images/header_images/first_days_header.png'
import first_days_1 from '../../assets/images/inline_images/first_days_1.png'
import first_days_2 from '../../assets/images/inline_images/first_days_2.png'

const FirstDays = () => (
  <Layout>
    <Header
      topicLine="Tech for good"
      tagLine="First Days"
      subTagLine="Helping organisations through all stages of volunteer recruitment"
      gradient
    />
    <div className="ma0">
      <BannerImg src={first_days_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>

        <WorkDescription>
          Many organisations operate with the help of volunteers and face a
          similar set of challenges around recruiting and communicating with
          them. The Wales Co-operative Centre together with the Wales Council
          for Voluntary Action (WCVA) asked us to help them create a tool to aid
          organisations with these tasks.
        </WorkDescription>
        <WorkImg src={first_days_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          In close collaboration with CAST we built First Days, an app which
          aims to help non-profit organisations recruit volunteers by guiding
          them through every step of the process. Organisations can assess their
          specific needs and create a really focused role description, helping
          them attract someone with the necessary skills and experience. After
          finding the right person, First Days helps organisations prepare the
          volunteer for their role and also get feedback from them in order to
          improve the experience of their future volunteers.
        </WorkDescription>
        <WorkImg src={first_days_2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out First Days{' '}
            <a
              className="light-green b ttu pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.firstdayswales.co.uk/"
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
      <RandomCards location="first-days" />
    </Section>
  </Layout>
)

export default FirstDays
