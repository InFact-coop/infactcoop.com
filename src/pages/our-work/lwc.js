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

import lwc_header from '../../assets/images/header_images/lwc_header.png'
import lwc_1 from '../../assets/images/inline_images/lwc_1.png'
import lwc_2 from '../../assets/images/inline_images/lwc_2.png'

const LWC = () => (
  <Layout>
    <Header
      topicLine="Tech for good"
      tagLine="Lancashire Women's Centers"
      subTagLine="An app to help women access the right services so they can feel more in control of their lives"
      gradient
    />
    <div className="ma0">
      <BannerImg src={lwc_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>

        <WorkDescription>
          Lancashire Women’s Centers is a one stop shop offering safe,
          non-judgemental and professional support to women. LWC face a plethora
          of challenges including:
          <ul className="tl">
            <li>
              the complex emotions of stigma and fear of judgement attached to
              seeking help with services.
            </li>
            <li>
              struggling with using the LWC peer support group to its fullest
              extent.
            </li>
            <li>
              the need to make sure that users are getting the services that are
              right for them.
            </li>
          </ul>
        </WorkDescription>
        <SectionHeading>
          <SectionTitle>Discovery and Design</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          Running a design workshop with LWC we discovered a common theme
          running through their challenges and decided to focus on improving the
          way that women access the services on offer. This included thinking a
          lot about how to make the design sensitive, warm and easy to use.
        </WorkDescription>
        <WorkImg src={lwc_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We built LWC: Service Search, which:
          <ul className="tl">
            <li>Gives women a safe way to see what services LWC offer</li>
            <li>
              Reassures women that they are not alone through real stories of
              women LWC have helped
            </li>
            <li>Creates a feeling of trust between the women and LWC</li>
            <li>
              Guides women to contact LWC in the way that is right for them
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={lwc_2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out LWC: Service Search{' '}
            <a
              className="light-green b ttu pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://womenscentre.herokuapp.com/"
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
      <RandomCards location="lwc" />
    </Section>
  </Layout>
)

export default LWC
