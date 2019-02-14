import React from 'react'

import Header from '../../containers/header-work'
import Layout from '../../components/layout'
import { SectionHeading, SectionTitle, Section } from '../../components/section'
import { BannerImg } from '../../components/work-content'
import RandomCards from '../../components/random-cards'

import header_img from '../../assets/images/other/us_portrait_christa.jpg'

const ComingSoon = () => (
  <Layout>
    <Header
      topicLine="Work in progress"
      tagLine="Coming soon!"
      subTagLine="We haven't made this page yet, but as you can see, we're busy working on it."
      gradient
    />
    <div className="ma0">
      <BannerImg src={header_img} />
    </div>
    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>
          <div className="dn-ns">
            <div className="tc flex flex-column">
              <span>Check these out</span>
              <span>in the meantime!</span>
            </div>
          </div>
          <div className="tc dn db-ns">Check these out in the meantime!</div>
        </SectionTitle>
      </SectionHeading>
      <RandomCards />
    </Section>
  </Layout>
)

export default ComingSoon
