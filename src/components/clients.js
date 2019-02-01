import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import { Section, SectionTitle, SectionHeading } from './section'
import BackgroundImg from './background-img'

import annaFreud from '../assets/images/partner_logos/anna_freud.png'
import bluecross from '../assets/images/partner_logos/bluecross.png'
import cast from '../assets/images/partner_logos/cast.png'
import lcn from '../assets/images/partner_logos/lcn.png'
import nhs from '../assets/images/partner_logos/nhs.png'
import qsa from '../assets/images/partner_logos/qsa.png'

const LinkImage = styled(BackgroundImg).attrs(({ className }) => ({
  className: `${className} h4 ma1 ma0-ns mb0-ns dib link pointer`,
}))`
  background-size: contain;
  width: 40%;
  ${media.ns`
    width: ${({ width }) => width};
  `};
`

const Clients = () => (
  <Section bg_color="white">
    <SectionHeading mb>
      <SectionTitle>InFact works with</SectionTitle>
    </SectionHeading>
    <div className="flex justify-center flex-wrap justify-between-ns mb7-ns">
      <LinkImage
        as="a"
        src={nhs}
        width="6rem"
        href="http://www.slam.nhs.uk/"
        target="_blank"
      />
      <LinkImage
        as="a"
        src={cast}
        width="14rem"
        target="_blank"
        href="http://www.wearecast.org.uk/"
      />
      <LinkImage
        as="a"
        src={annaFreud}
        width="17rem"
        target="_blank"
        href="https://www.annafreud.org/"
      />
      <LinkImage
        as="a"
        src={bluecross}
        width="5em"
        target="_blank"
        href="https://www.bluecross.org.uk/"
      />
      <LinkImage
        as="a"
        src={lcn}
        width="10rem"
        target="_blank"
        href="http://www.lawcentres.org.uk/"
      />
      <LinkImage
        as="a"
        src={qsa}
        width="5rem"
        target="_blank"
        href="https://www.quakersocialaction.org.uk/"
      />
    </div>
  </Section>
)

export default Clients
