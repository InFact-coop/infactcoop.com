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

const Card = styled.div.attrs({
  className: '',
})``

const CardTitle = styled.div.attrs({
  className: 'font-1 ttu reglo',
})``

const CardBody = styled.div.attrs({
  className: 'font-3 sans-serif',
})``

const OurApproach = () => (
  <div>
    <HeaderLanding image={lyingOnTheGrass} overlay={BlueOverlay}>
      Our day to day is an ongoing process of discovering new things about human
      experience
    </HeaderLanding>
    <Wrapper>
      <Title>
        We use agile processes and user centred design to improve people's lives
        and have a meaningful impact on the world
      </Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est
        mi, rhoncus ut mauris non, ultricies tincidunt dolor. Vivamus ac nisl
        magna. Nulla ligula orci, accumsan vel mattis vel, pulvinar in leo.
        Phasellus nisl enim, efficitur vitae magna in, porttitor molestie massa.
        Maecenas vehicula sagittis magna, quis convallis ex molestie sit amet.
        Nunc sodales posuere erat, vel elementum lorem suscipit non.
        Pellentesque et malesuada sapien, non ullamcorper lacus. Aliquam
        tincidunt vehicula dui nec mattis. Nunc lacinia quam ut interdum
        eleifend. In in dictum sapien, nec gravida nisl. Curabitur sit amet
        mollis nisl. Vivamus ut volutpat sem. Sed a tempus magna, sit amet
        elementum sem.
      </Text>
      <Text>
        Aenean nec enim pretium, volutpat enim ut, pharetra felis. Vestibulum
        dictum mattis mi efficitur commodo. Mauris metus ante, dictum sit amet
        orci id, tincidunt blandit justo. Maecenas in ipsum porttitor, mollis
        urna non, venenatis enim. Nam sapien est, pellentesque at erat eu,
        laoreet facilisis quam. Nullam dignissim, justo vitae tempus varius,
        sapien diam convallis orci, quis maximus ex ligula maximus elit. Nullam
        orci nibh, molestie in nibh eget, ullamcorper sodales augue.
      </Text>
      <Text>
        Aenean diam orci, laoreet vel lectus id, semper imperdiet nisl. Integer
        porta tincidunt mauris in hendrerit. In euismod ante sit amet lorem
        tempor, tincidunt volutpat felis pharetra. Phasellus justo odio,
        consectetur ut mi at, maximus facilisis metus. Aliquam non ligula magna.
        In et urna volutpat, volutpat erat pretium, auctor nulla. Nulla ac
        condimentum elit, non pharetra augue. Fusce a lorem ligula. Phasellus
        laoreet vulputate neque sed ultrices.
      </Text>
      <Picture src={lyingOnTheGrass} />
      <div className="flex mt4">
        <Card>
          <CardTitle>Discovery & Workshops</CardTitle>
          <CardBody>
            Here we can talk about our amazing workshops which are the best
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Discovery & Workshops</CardTitle>
          <CardBody>
            Here we can talk about our amazing workshops which are the best
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Discovery & Workshops</CardTitle>
          <CardBody>
            Here we can talk about our amazing workshops which are the best
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Discovery & Workshops</CardTitle>
          <CardBody>
            Here we can talk about our amazing workshops which are the best
          </CardBody>
        </Card>
      </div>
    </Wrapper>
  </div>
)

export default OurApproach
