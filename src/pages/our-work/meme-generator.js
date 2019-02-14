import React from 'react'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import {
  WorkWrapper,
  WorkImg,
  WorkDescription,
  BannerImg,
  TestimonialWrapper,
  TestimonialPerson,
  TestimonialText,
} from '../../components/work-content'
import RandomCards from '../../components/random-cards'

import meme_header from '../../assets/images/header_images/meme_header.png'
import meme_1 from '../../assets/images/inline_images/meme_1.png'
import meme_2 from '../../assets/images/inline_images/meme_2.png'

const MemeGenerator = () => (
  <Layout>
    <Header
      topicLine="Activism"
      tagLine="EU Compliant Meme Generator"
      subTagLine="A campaign tool to aid Create.Refresh in their fight against Article 13."
      gradient
    />
    <div className="ma0">
      <BannerImg src={meme_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We worked together with Purpose, who build and support forward
          thinking movements, to create a tool for Create.Refresh that would
          help them raise awareness of the implications of Article 13.
        </WorkDescription>
        <WorkImg src={meme_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We built an app which:
          <ul className="tl">
            <li>
              Engages the target audience with a simple layout accompanied by
              retro 90s design and animations
            </li>
            <li>
              Enables users to make uploaded memes/photos 'EU Compliant' by
              using the tool
            </li>
            <li>
              Allows and encourages users to share the tool and their unique
              cartoon on Twitter and Facebook, to maximise reach
            </li>
            <li>
              Connects to a backend API deployed on AWS which implements
              Cartoonify and returns a cartoon based the original upload
            </li>
            <li>
              Supports analytics and tracking events using Google Analytics,
              Facebook Pixel and Twitter Pixel
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={meme_2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out the EU Compliant Meme Generator{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://compliantmemegenerator.eu"
            >
              here
            </a>
          </p>
        </WorkDescription>
      </WorkWrapper>
      <TestimonialWrapper>
        <TestimonialText>
          "Working with InFact has been a completely smooth and timely
          experience. The team contributed to decision making and came up with
          innovative solutions to fit our specification, making this project
          100% easier for us."
        </TestimonialText>
        <TestimonialPerson>
          Aaron Parr, Digital Campaigner at Purpose
        </TestimonialPerson>
      </TestimonialWrapper>
    </div>
    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>More Work</SectionTitle>
      </SectionHeading>
      <RandomCards location="meme-generator" />
    </Section>
  </Layout>
)

export default MemeGenerator
