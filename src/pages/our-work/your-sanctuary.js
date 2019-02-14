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

import ys_header from '../../assets/images/header_images/ys_header.png'
import ys_1 from '../../assets/images/inline_images/ys_1.png'
import ys_2 from '../../assets/images/inline_images/ys_2.png'

const YourSanctuary = () => (
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
      <RandomCards location="your-sanctuary" />
    </Section>
  </Layout>
)

export default YourSanctuary
