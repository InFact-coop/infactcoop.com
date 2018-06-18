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

import lcn_header from '../../assets/images/header_images/lcn_header.png'
import lcn_img1 from '../../assets/images/inline_images/lcn_img1.png'
import lcn_img2 from '../../assets/images/inline_images/lcn_img2.png'

import stimmy_card from '../../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../../assets/images/card_images/cast_card.png'

const AboutWork = () => (
  <div>
    <Header
      topicLine="Tech for Good"
      tagLine="Law Centres Network"
      subTagLine="Effecting real change through simple, quick, data collection and instant feedback from your network"
      gradient
    />
    <div className="ma0">
      <BannerImg src={lcn_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="mb3">
            Law Centres Network (or LCN) are the central body of nationwide
            pro-bono law centres. A vital part of their work is campaigning for
            policy changes to laws which disadvantage society's most vulnerable.
            LCN collects statistics so that they can understand the shifting
            portrait of their visitors, and present that narrative to
            parliament. However, at the beginning of our involvement, each law
            centre was providing data in many different formats, making them
            hard to combine and make sense of.
          </p>
          <p>
            The challenge was to provide a platform allowing Law Centres to
            quickly share statistics with LCN. The platform also had to allow
            law centre staff to connect with eachother, and share feedback with
            head office.
          </p>
        </WorkDescription>
        <SectionHeading>
          <SectionTitle>Discovery and Design</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          LCN were a part of CAST's Digital Fellowship programme. After a design
          sprint and subsequent user testing, we decided to run a follow-up
          workshop. We clarified the problem space, and through a series of
          exercises designed to challenge our preconceptions, we visualised
          intuitive new ways to organise the platform.
        </WorkDescription>
        <WorkImg src={lcn_img1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We created the LCN Feedback Platform, which:
          <ul className="tl">
            <li>
              Allows Law Centre workers to input statistics (for instance how
              many people they have given advice for that week) so that LCN can
              collect consistent data from across the network
            </li>
            <li>
              Allows users to quickly and easily share their case studies,
              success stories, trends, or annoyances with both LCN and their
              peers around the country
            </li>
            <li>
              Stores both statistics and comments in a way that is easily
              accessible to LCN, to notice trends across the country
            </li>
            <li>
              Implements a robust login feature with different permissions for
              administrators or regular users
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={lcn_img2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out the LCN Feedback app{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://lawcentres.herokuapp.com"
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
