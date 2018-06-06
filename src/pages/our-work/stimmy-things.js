import React from 'react'

import OurWork from '../../components/our-work'
import Header from '../../containers/header-work'
import { SectionHeading, SectionTitle } from '../../components/section'

import {
  WorkWrapper,
  WorkImg,
  BannerImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
  TestimonialWrapper,
} from '../../components/work-content'

import stimmythings_header from '../../assets/images/header_images/stimmythings_header.svg'
import stimmythings_img1 from '../../assets/images/inline_images/stimmythings_img1.png'
import stimmythings_img2 from '../../assets/images/inline_images/stimmythings_img2.png'

const WorkContent = () => (
  <div className="ma0">
    <BannerImg src={stimmythings_header} />
    <WorkWrapper>
      <SectionHeading>
        <SectionTitle>The Challenge</SectionTitle>
      </SectionHeading>
      <WorkDescription>
        We were approached by Slam, a leading mental health trust, and the Anna
        Freud Centre, a young person's mental health charity. They asked us to
        work together with young people with ADHD to identify ways in which some
        of their symptoms could be alleviated through the use of technology.
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
        <ul>
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
      <WorkDescription className="tc">
        <p className="font-3">
          Check out Stimmy Things{' '}
          <a
            className="light-green b ttu"
            target="_blank"
            href="https://stimmythings.com/"
          >
            here
          </a>
        </p>
      </WorkDescription>
    </WorkWrapper>
    <TestimonialWrapper>
      <TestimonialText>
        InFact are the best! venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc
      </TestimonialText>
      <TestimonialPerson>
        Mariane Caitan, program lead at CAMHS London
      </TestimonialPerson>
    </TestimonialWrapper>
  </div>
)

const AboutWork = ({ history }) => {
  const topicLine = 'Mental Health'
  const tagLine = 'Stimmy Things'
  const subTagLine = 'An app to help young people deal better with ADHD.'

  return (
    <div>
      <Header topicLine={topicLine} tagLine={tagLine} subTagLine={subTagLine} />
      <WorkContent />
      <OurWork history={history} />
    </div>
  )
}

export default AboutWork
