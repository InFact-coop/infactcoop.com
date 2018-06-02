import React from 'react'
import styled from 'styled-components'

import HeaderLanding from '../containers/header'
import { BlueOverlay } from '../components/overlay'
import { Wrapper, ZigZag, Text, Title } from '../components/about-pages'
import BackgroundImg from '../components/background-img'

import lyingOnTheGrass from '../assets/images/we_love_fac.png'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const Picture = styled(BackgroundImg).attrs({
  className: 'mt4',
})`
  width: 100%;
  height: 600px;
`

const CardWrapper = styled.div.attrs({
  className:
    'mv3 flex flex-row-ns flex-column justify-between-ns items-start-ns items-center',
})``

const Card = styled.div.attrs({
  className: 'mt4 tc tl-ns w-25-ns w-90',
})``

const CardTitle = styled.div.attrs({
  className: 'font-1-ns font-2 ttu reglo',
})``

const CardBody = styled.div.attrs({
  className: 'font-4 sans-serif',
})``

const OurApproach = () => (
  <div>
    <HeaderLanding image={lyingOnTheGrass} overlay={BlueOverlay}>
      Putting the users at the heart of the creative process
    </HeaderLanding>
    <Wrapper>
      <Title>Collaborative, empathetic and dynamic</Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        We work in an Agile, user-centred fashion - however we know this doesn’t
        mean much to everyone. This is how we interpret it:
        <ul>
          <li>
            We believe in close collaboration with you, because you’re the
            experts of your domain! We love learning about your world,
            understanding the unique challenges you face and helping you to
            solve them.
          </li>
          <li>
            We test our solutions with your users at every stage of the process.
            This allows us to see exactly what they think of it and how they
            interact with it. This process highlights what’s working and what’s
            not as early as possible.
          </li>
          <li>
            We use what we discover to improve the product during the next cycle
            of work. This ensures that what we are building satisfies real user
            needs. We repeat this process until we arrive at the product that
            serves your users needs in the best possible manner
          </li>
        </ul>
      </Text>
      <Text>
        Working in this way can feel uncertain because the end product seems
        undefined. We know that this approach can be scary! However time and
        time again we’ve seen that products made this way ultimately deliver
        more impact in less time and at a lower cost. This is because rather
        than the product being undefined, it is constantly being redefined to
        reflect your user's ideal product and this often comes a lot sooner than
        anticipated.
      </Text>
      <Picture src={lyingOnTheGrass} />
      <CardWrapper>
        <Card>
          <CardTitle>Discovery</CardTitle>
          <CardBody>
            In collaboration with you and your team we will carry out a variety
            of exercises designed to discover problems and explore solutions.
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Design</CardTitle>
          <CardBody>
            Prioritising your users' needs, we will work with your brand
            identity to create the best design to connect you to your users.
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Development</CardTitle>
          <CardBody>
            Working in short efficient bursts and in close collaboration with
            the Product Owner, we prioritise, build and user-test features.
          </CardBody>
        </Card>
      </CardWrapper>
    </Wrapper>
  </div>
)

export default OurApproach
