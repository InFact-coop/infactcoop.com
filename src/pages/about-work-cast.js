import React from 'react'
import styled from 'styled-components'

import { SectionHeading, SectionTitle } from '../components/section'
import OurWork from '../components/our-work'
import Header from '../containers/header-work'

import {
  WorkWrapper,
  WorkImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
} from '../components/work-content'

import { PurpleOverlay } from '../components/overlay'
import BackgroundImg from '../components/background-img'
import workshop from '../assets/images/LWC_PIC.png'

const BannerImg = styled(BackgroundImg)`
  width: 100vw;
  height: 85vh;
  max-width: 1440px;
`

const WorkContent = () => (
  <div>
    <BannerImg src={workshop}>
      <PurpleOverlay />
    </BannerImg>
    <WorkWrapper>
      <SectionHeading>
        <SectionTitle>The Challenge</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        For many non-profits the cost and fear of digital is a big barrier. This
        often stems from past negative experiences and means charities often shy
        away from exploring digital options. However through technology,
        charities could achieve their goals in a more effective and
        cost-efficient manner.
      </WorkDescription>
      <SectionHeading>
        <SectionTitle>The Solution</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        The CAST Digital Fellowship is a comprehensive learning programme for
        nonprofit leaders. Senior staff develop a better understanding and use
        of tech and digital innovation. This enables them to become leaders of
        their organisation’s – and the sector’s – digital development.
      </WorkDescription>
      <WorkImg src={workshop} />
      <SectionHeading>
        <SectionTitle>Our Involvement</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        <h2>The Workshop</h2>
        We led a one day workshop with groups from the different organisations.
        To help us understand the challenges they were facing, the groups
        spanned all levels of experience within the charity. We led the
        participants through a set of exercises designed to help them:
        <ul>
          <li>
            Discover the problems faced by both their service users and their
            staff.
          </li>
          <li>
            Identify the challenge that would be most suited to tackling through
            a digital approach.
          </li>
          <li>Explore varied solutions to the problem</li>
          <li>
            Assess the pros and cons of each solution and select one to be taken
            forward for further design and development
          </li>
        </ul>
      </WorkDescription>
      <WorkDescription>
        We then assisted the group to select the person that would be most
        suitable to manage the development phase. We trained this person in
        agile methodologies, Github and product ownership.
      </WorkDescription>
      <WorkDescription>
        <h2>The Development</h2>
        In collaboration with the product owner we took the idea from the
        workshop and created a prototype. This prototype was then taken out and
        tested with users to gauge its viability and the extent to which it
        solved the initial problem.
      </WorkDescription>
      <WorkDescription>
        <h2>The Outcome</h2>
        Following the work with CAST we worked with some of the organisations
        such as LCN and Bluecross, to take the prototypes forward, and transform
        them into fully working products ready for release into the world.
      </WorkDescription>
      <WorkImg src={workshop} />
      <TestimonialText>
        InFact are the best! venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc
      </TestimonialText>
      <TestimonialPerson>
        Ellie Hale, Digital Fellowship and communities lead at CAST
      </TestimonialPerson>
    </WorkWrapper>
  </div>
)

const AboutWork = ({ history }) => {
  const topicLine = 'non-profits'
  const tagLine = 'CAST Digital Fellowship'
  const subTagLine =
    'Empowering non-profits to achieve positive change through technology.'

  return (
    <div>
      <Header topicLine={topicLine} tagLine={tagLine} subTagLine={subTagLine} />
      <WorkContent />
      <OurWork history={history} />
    </div>
  )
}

export default AboutWork
