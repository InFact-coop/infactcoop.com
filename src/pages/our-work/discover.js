import React from 'react'

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
  WorkDescription,
  BannerImg,
} from '../../components/work-content'

import discover_header from '../../assets/images/header_images/discover_header.png'
import discover_1 from '../../assets/images/inline_images/discover_1.png'
import discover_2 from '../../assets/images/inline_images/discover_2.png'

import stimmy_card from '../../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../../assets/images/card_images/cast_card.png'

const AboutWork = () => (
  <Layout>
    <Header
      topicLine="Health"
      tagLine="DISCOVERbot"
      subTagLine="An app teaching 16-18 year olds psychological techniques based on cognitive behavioural therapy principles to make helpful changes to their lives and to build resilience to stress."
      gradient
    />
    <div className="ma0">
      <BannerImg src={discover_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          The{' '}
          <a
            className="link light-green b"
            href="https://www.theguardian.com/society/2018/nov/28/public-service-awards-2018-all-winners"
            target="_blank"
            rel="noopener noreferrer"
          >
            award-winning
          </a>{' '}
          DISCOVER team run one-day interactive group workshops where
          participants learn psychological techniques based on cognitive
          behavioural therapy principles. Our challenge was to build a digital
          product which would engage the young people in the weeks and months
          after the workshop, helping them to consolidate the teachings from the
          day.
        </WorkDescription>
        <SectionHeading>
          <SectionTitle>Discovery and Design</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="mb3">
            We ran an inital workshop with the DISCOVER team to gain a better
            insight into their internal processes and organisational needs. We
            then decided on two additional workshops with a group of young
            people who had been through the whole DISCOVER programme. The
            workshops shed light on possible ways we could use technology to
            enhance the DISCOVER experience and keep users engaged throughout.
            Through conversations, exercises and sharing of ideas we decided to
            translate the DISCOVER workshop materials into a friendly bot.
          </p>
          <p>
            Our designer then spent time creating a clickable prototype which we
            tested with the young people and iterated on before we started
            development work. By the time we reached development stage, we had
            gained many insights through testing and the bot's direction was
            positive and well received by the young people.
          </p>
        </WorkDescription>
        <WorkImg src={discover_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We built an app which:
          <ul className="tl">
            <li>
              Enables users to review tips and techniques from the workshop by
              interacting with friendly chatbot or by going through static
              content
            </li>
            <li>
              Allows users to set specific goals for themselves, putting the
              learning from the workshops into practice
            </li>
            <li>
              Gives near-complete access to the app offline and from the home
              screens through the use of Progressive Web App technology
            </li>
            <li>
              Engages the audience with fun and friendly design and animations
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={discover_2} />
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
  </Layout>
)

export default AboutWork
