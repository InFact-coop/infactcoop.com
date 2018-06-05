import React from 'react'
import styled from 'styled-components'

import OurWork from '../components/our-work'
import Header from '../containers/header-work'
import { SectionHeading, SectionTitle } from '../components/section'

import {
  WorkWrapper,
  WorkImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
} from '../components/work-content'

import { PurpleOverlay } from '../components/splash'
import BackgroundImg from '../components/background-img'
import bluecross_header from '../assets/images/header_images/bluecross_header.png'
import bluecross_img1 from '../assets/images/inline_images/bluecross_img1.png'
import bluecross_img2 from '../assets/images/inline_images/bluecross_img2.png'

const BannerImg = styled(BackgroundImg)`
  width: 100vw;
  height: 85vh;
  max-width: 1440px;
`

const WorkContent = () => (
  <div className="ma0">
    <BannerImg src={bluecross_header}>
      <PurpleOverlay />
    </BannerImg>
    <WorkWrapper>
      <SectionHeading>
        <SectionTitle>The Challenge</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        Blue Cross are an animal welfare charity. They reached out to InFact
        because they were noticing more enquiries than ever from prospective
        owners, yet lacked the pets to match them up with.
      </WorkDescription>
      <SectionHeading>
        <SectionTitle>Discovery and Design</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        We hosted a design workshop with major stakeholders from the
        organisation in order to better understand the challenge. As we delved
        deeper, we discovered concern about online, unregulated marketplaces for
        pets. These marketplaces thrive on their ease-of-use, pose serious risks
        to animal welfare. We found that any solution we built would have to
        rival the “big players” for usability, but contain additional checks and
        a focus on welfare that one would expect from an organisation like Blue
        Cross.
      </WorkDescription>
      <WorkImg src={bluecross_img1} />
      <SectionHeading>
        <SectionTitle>The Solution</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        From this brief, we created a companion app for conscientious owners to
        find a loving new home for their pets. The aims of the solution:
        <ul>
          <li>
            To give “re-homers” a viable alternative to marketplaces like
            Gumtree
          </li>
          <li>
            To reassure them through positive language that Blue Cross has the
            best interests of the animal at heart
          </li>
          <li>
            To assess the rehousing application in terms of need, and triage
            them appropriately
          </li>
          <li>
            To covertly flag up signs of wrongdoing through questionnaires{' '}
          </li>
          <li>
            To make the app sensitive, warm, and easy to use for what could be
            an emotional, transitionary stage in our users’ lives
          </li>
        </ul>
      </WorkDescription>
      <WorkImg src={bluecross_img2} />
      <TestimonialText>
        InFact are the best! venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc
      </TestimonialText>
      <TestimonialPerson>
        Kelly Grellier, Director of Strategic Business Planning at Blue Cross
      </TestimonialPerson>
    </WorkWrapper>
  </div>
)

const AboutWork = ({ history }) => {
  const topicLine = 'Non-profit sector'
  const tagLine = 'Blue Cross: Giving a Pet'
  const subTagLine =
    'An app to help conscientious owners find a loving new home for their pet'

  return (
    <div>
      <Header topicLine={topicLine} tagLine={tagLine} subTagLine={subTagLine} />
      <WorkContent />
      <OurWork history={history} />
    </div>
  )
}

export default AboutWork
