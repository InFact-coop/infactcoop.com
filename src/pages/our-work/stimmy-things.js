import React from 'react'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import {
  WorkWrapper,
  WorkImg,
  BannerImg,
  WorkDescription,
  TestimonialWrapper,
  TestimonialPerson,
  TestimonialText,
} from '../../components/work-content'
import RandomCards from '../../components/random-cards'

import stimmythings_header from '../../assets/images/header_images/stimmythings_header.svg'
import stimmythings_img1 from '../../assets/images/inline_images/stimmythings_img1.png'
import stimmythings_img2 from '../../assets/images/inline_images/stimmythings_img2.png'

const StimmyThings = () => (
  <Layout>
    <Header
      topicLine="Health"
      tagLine="Stimmy Things"
      subTagLine="An app to help young people deal better with ADHD."
      gradient
    />
    <div className="ma0">
      <BannerImg src={stimmythings_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We were approached by Slam, a leading mental health trust, and the
          Anna Freud Centre, a young person's mental health charity. They asked
          us to work together with young people with ADHD to identify ways in
          which some of their symptoms could be alleviated through the use of
          technology.
        </WorkDescription>
        <SectionHeading>
          <SectionTitle>Discovery and Design</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          One young person taught us about 'Stims' - self-soothing exercises
          performed by people with a number of disorders helping them to relax,
          focus their minds and concentrate in the face of overwhelming sensory
          input. Her idea of a "virtual self-soothe box" was so complete and
          compelling that we decided to bring it to reality for our app.
        </WorkDescription>
        <WorkImg src={stimmythings_img1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We built an app which:
          <ul className="tl">
            <li>
              Engages our audience with fun and friendly design and animations
            </li>
            <li>
              Enables users to save their own personalised stims so they can
              easily use them in the future
            </li>
            <li>
              Allows our users to connect with other people facing similar
              struggles via a stim-sharing platform
            </li>
            <li>
              Gives near-complete access to the app offline and from the home
              screens through the use of Progressive Web App technology
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={stimmythings_img2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out Stimmy Things{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://stimmythings.com/"
            >
              here
            </a>
          </p>
        </WorkDescription>
      </WorkWrapper>
      <TestimonialWrapper>
        <TestimonialText>
          As experts in the mental health of children and families, we needed
          experts in digital design and development … and we found in InFact!
          We’ve worked with various members of the team for 2 years, and their
          design ideas, attention to detail, enthusiasm, and ultimately, end
          products have always been extremely impressive. The latest example of
          our partnership is Stimmy Things, which exemplifies their talent for
          taking a great idea, and turning it into something really beautiful,
          usable and helpful. We can’t wait to work with InFact again!
        </TestimonialText>
        <TestimonialPerson>
          Alex Goforth, Programme Lead Children & Young People's IAPT at Anna
          Freud Centre
        </TestimonialPerson>
      </TestimonialWrapper>
    </div>

    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>More Work</SectionTitle>
      </SectionHeading>
      <RandomCards location="stimmy-things" />
    </Section>
  </Layout>
)

export default StimmyThings
