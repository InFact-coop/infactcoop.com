import React from 'react'
import styled from 'styled-components'

import OurWork from '../components/our-work'
import Header from '../containers/header-work'

import {
  WorkWrapper,
  WorkTitle,
  WorkImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
} from '../components/work-content'

import { PurpleOverlay } from '../components/overlay'
import BackgroundImg from '../components/background-img'
import stimmyPic from '../assets/images/projects/stimmy_things_hero.svg'

const BannerImg = styled(BackgroundImg)`
  width: 100vw;
  height: 60vh;
  max-width: 1440px;
`

const WorkContent = () => (
  <div>
    <BannerImg src={stimmyPic}>
      <PurpleOverlay />
    </BannerImg>
    <WorkWrapper>
      <WorkTitle>The Challenge</WorkTitle>
      <WorkDescription>
        We were approached by Slam, a leading mental health trust, and the Anna
        Freud Centre, a young person's mental health charity. They asked us to
        work together with young people with ADHD to identify ways in which some
        of their symptoms could be alleviated through the use of technology.
      </WorkDescription>
      <WorkTitle>Discovery and Design</WorkTitle>
      <WorkDescription>
        One young person taught us about 'Stims' - self-soothing exercises
        performed by people with a number of disorders helping them to relax,
        focus their minds and concentrate in the face of overwhelming sensory
        input. Her idea of a "virtual self-soothe box" was so complete and
        compelling that we decided to bring it to reality for our app.
      </WorkDescription>
      <WorkImg src={stimmyPic} />
      <WorkTitle>The Solution</WorkTitle>
      <WorkDescription>
        <ul>
          We built an app which:
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
      <WorkImg src={stimmyPic} />
      <TestimonialText>
        InFact are the best! venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc
      </TestimonialText>
      <TestimonialPerson>
        Mariane Caitan, program lead at CAMHS London
      </TestimonialPerson>
    </WorkWrapper>
  </div>
)

const AboutWork = ({ history }) => {
  return (
    <div>
      <Header />
      <WorkContent />
      <OurWork history={history} />
    </div>
  )
}

export default AboutWork
