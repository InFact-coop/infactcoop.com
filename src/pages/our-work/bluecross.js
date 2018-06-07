import React from 'react'

import Header from '../../containers/header-work'
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
  WorkDescription,
  TestimonialWrapper,
  TestimonialPerson,
  TestimonialText,
  BannerImg,
} from '../../components/work-content'

import bluecross_header from '../../assets/images/header_images/bluecross_header.png'
import bluecross_img1 from '../../assets/images/inline_images/bluecross_img1.png'
import bluecross_img2 from '../../assets/images/inline_images/bluecross_img2.png'
import stimmy_card from '../../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../../assets/images/card_images/cast_card.png'

const AboutWork = () => (
  <div>
    <Header
      topicLine="Non-profit sector"
      tagLine="Blue Cross: Giving a Pet"
      subTagLine="An app to help conscientious owners find a loving new home for their pet"
    />
    <div className="ma0">
      <BannerImg src={bluecross_header} />
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
          deeper, we discovered concern about online, unregulated marketplaces
          for pets. These marketplaces thrive on their ease-of-use, pose serious
          risks to animal welfare. We found that any solution we built would
          have to rival the “big players” for usability, but contain additional
          checks and a focus on welfare that one would expect from an
          organisation like Blue Cross.
        </WorkDescription>
        <WorkImg src={bluecross_img1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          From this brief, we created a companion app for conscientious owners
          to find a loving new home for their pets. The aims of the solution:
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
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription className="tc">
          <p className="font-3">
            Check out Giving a Pet{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bluecross.herokuapp.com/"
            >
              here
            </a>
          </p>
        </WorkDescription>
      </WorkWrapper>
      <TestimonialWrapper>
        <TestimonialText>
          "InFact are the best! venenatis faucibus. Nullam quis ante. Etiam sit
          amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
          sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
          bibendum sodales, augue velit cursus nunc."
        </TestimonialText>
        <TestimonialPerson>
          Kelly Grellier, Director of Strategic Business Planning at Blue Cross
        </TestimonialPerson>
      </TestimonialWrapper>
    </div>
    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>More Work</SectionTitle>
      </SectionHeading>
      <div className="flex-ns flex-column flex-row-ns justify-between-ns">
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
      </div>
    </Section>
  </div>
)

export default AboutWork
