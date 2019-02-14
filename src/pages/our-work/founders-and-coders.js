import React from 'react'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import {
  WorkWrapper,
  WorkImg,
  WorkDescription,
  BannerImg,
} from '../../components/work-content'
import RandomCards from '../../components/random-cards'

import facweb_header from '../../assets/images/header_images/facweb_header.png'
import facweb_1 from '../../assets/images/inline_images/facweb_1.png'
import facweb_2 from '../../assets/images/inline_images/facweb_2.png'

const FoundersAndCoders = () => (
  <Layout>
    <Header
      topicLine="Partnerships"
      tagLine="Founders and Coders"
      subTagLine="Creating a new look and feel for a community close to our hearts, Founders and Coders."
      gradient
    />
    <div className="ma0">
      <BannerImg src={facweb_header} />
      <WorkWrapper>
        <SectionHeading>
          <SectionTitle>The Challenge</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          Founders and Coders asked us to create a unique new brand ecosystem
          for them from the ground up. Our aim was to use contemporary design
          and creative code to build a site which would visually reinforce their
          mission: to use cutting-edge technology as a tool for social change.
        </WorkDescription>
        <SectionHeading>
          <SectionTitle>Discovery and Design</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="mb3">
            We ran initial workshops with the Founders and Coders team in order
            to better understand their current brand, their identity and values
            and their vision for the future of the organisation.
          </p>
          <p className="mb3">
            Following this, we conducted interviews with users of the old
            Founders and Coders website, in order to better understand their
            motives. We used our findings to create user personas, helping us to
            gain valuable insight and ensure the users’ needs were met.{' '}
          </p>
          <p className="mb3">
            We also involved the community, including current students and
            alumni, at various stages of the design and development proccess.
            This way we knew that the new site would represent the diversity of
            voices that make up Founders and Coders in the best way possible.
          </p>
          <p>
            The final designs are composed of a rich fabric of influences and
            inspirations which guided us through this creative process — from
            contemporary web design to modern art movements. Our overarching
            goal was to create a welcoming and playful environment composed of
            marks, signs and emblems. These represent snippets of code and
            symbols which appear simple in the abstract but, like individuals in
            a community, form something altogether more magical when put
            together.
          </p>
        </WorkDescription>
        <WorkImg src={facweb_1} />
        <SectionHeading>
          <SectionTitle>The Solution</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          We created a brand ecosystem and website which:
          <ul className="tl">
            <li>
              Is playful yet professional and unites the integral Founders and
              Coders themes of ‘code’ and ‘community’
            </li>
            <li>
              Ensures all users and interested parties can find what they need
              quickly and easily by providing clearly defined sections{' '}
            </li>
            <li>
              Engages and attracts by using exciting animations and interactions
            </li>
            <li>
              Takes into consideration and implements a variety of accessiblity
              requirements
            </li>
            <li>
              Can easily be maintained and further developed as an open source
              project by the wider community
            </li>
          </ul>
        </WorkDescription>
        <WorkImg src={facweb_2} />
        <SectionHeading>
          <SectionTitle>See The Real Deal</SectionTitle>
        </SectionHeading>
        <WorkDescription>
          <p className="font-3 tc">
            Check out the Founders and Coders website{' '}
            <a
              className="light-green b ttu"
              target="_blank"
              rel="noopener noreferrer"
              href="https://foundersandcoders.com"
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
      <RandomCards location="founders-and-coders" />
    </Section>
  </Layout>
)

export default FoundersAndCoders
