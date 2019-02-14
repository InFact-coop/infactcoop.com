import React from 'react'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import {
  WorkWrapper,
  WorkImg,
  WorkDescription,
  BannerImg,
  TestimonialWrapper,
  TestimonialPerson,
  TestimonialText,
} from '../../components/work-content'
import RandomCards from '../../components/random-cards'

import workhub_header from '../../assets/images/header_images/workhub_header.png'
import workhub_1 from '../../assets/images/inline_images/workhub_1.png'
import workhub_2 from '../../assets/images/inline_images/workhub_2.png'

const Workhub = () => (
  <Layout>
    <Header
      topicLine="Start-up"
      tagLine="Workhub"
      subTagLine="
      Workhub is a platform to capture how teams work together and to explore how the world works."
      gradient
    />
    <div className="ma0">
      <BannerImg src={workhub_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          The founders needed a beta version of their designed prototype built,
          which aims to help individuals and organisations communicate and share
          best working practices. It had a significant number of complex
          features and required a lot of thought and consideration around
          performance.
        </WorkDescription>
        <WorkImg src={workhub_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We built an app which:
          <ul className="tl">
            <li>
              Allows users to document their ways of working using a rich text
              editor to form ‘pages’, and to organise these pages in ‘workbooks’
            </li>
            <li>
              Implements version control to enable users to return to previous
              versions of a document, and see how it has changed over time
            </li>
            <li>
              Enables users to fork pages/workbooks and edit them to reflect
              their own ways of working
            </li>
            <li>
              Builds in notifications so users know how other people are
              interacting with their content
            </li>
            <li>
              Contains ‘like’ and ‘watch’ features to understand popularity of
              content
            </li>
            <li>
              Allows users to search all content by keywords, filter results by
              time periods and rank them according to likes/watches/forks
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={workhub_2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out Workhub{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://workhub.io"
            >
              here
            </a>
          </p>
        </WorkDescription>
      </WorkWrapper>
      <TestimonialWrapper>
        <TestimonialText>
          "InFact were awesome. They were incredibly flexible and easy to work
          with. They shared our passion for the Workhub product and you can see
          that in the work that they did for us. We’re looking forward to
          working with them on the next phase! "
        </TestimonialText>
        <TestimonialPerson>
          Jess Leitch, Co-founder of Workhub
        </TestimonialPerson>
      </TestimonialWrapper>
    </div>
    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>More Work</SectionTitle>
      </SectionHeading>
      <RandomCards location="workhub" />
    </Section>
  </Layout>
)

export default Workhub
