import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { media } from '../styles/style_utils'

import { CardBody, CardHeading, CardTitle, CardSubTitle } from './card'

import BackgroundImg from './background-img'

const Overlay = styled.div.attrs({
  className: 'absolute w-100 pointer',
})`
  height: 100%;
  background: ${({ background }) => background};
  opacity: 0;
  transition: 0.5s;
`
const Picture = styled(BackgroundImg)`
  transition: 0.5s;
  width: 100%;
  padding-bottom: 100%;

  ${media.ns`
    height: 0;
  `};
`

const PictureWithFilter = styled(Picture)`
  ${({ src, gradient }) =>
    css`
      background-image: ${gradient}, url(${src});
    `};
`

const SectionCard = styled.div.attrs({
  className:
    'bg-white shadow-5 absolute ph4-l pv4-l pv3-m ph3-m pv3 ph3 center tc tl-ns pointer flex-column justify-center',
})`
  width: 95%;
  right: 2.5%;
  transition: 0.5s;
  transform: translateY(-2rem);
  height: 70vw;
  display: flex;
  min-height: 280px;

  ${media.ns`
    width: 90%;
    left: 2.5%;
    display: inline-block;
  `};
  ${media.m`
    margin-bottom: 7%;
    height: 250px;
    bottom: 1rem;
    transform: translateY(0);
  `};
  ${media.l`
    height: 40%;
    margin-bottom: 7%;
    bottom: 0;
    transform: translateY(0);
  `};
`

const Wrapper = styled(Link).attrs({
  className: 'relative black no-underline db mb3 mb0-ns',
})`
  height: 182vw;
  max-height: 640px;
  transition: 0.5s;

  ${media.ns`
    max-height: 200vh;
  `}
  ${media.m`
    height: 67vw;
    width: 46%;
  `}
  ${media.l`
    height: 850px;
    width: 46%;
  `}

  &:hover ${Picture} {
    transform: translateY(0.5rem) scale(1.05);
    transition: 0.5s;
  }
  &:hover ${SectionCard} {
    transform: translateY(-2rem);
    transition: 0.7s;
  }
  &:hover ${Overlay} {
    opacity: 1;
    transition: 0.5s;
  }

`
const SectionText = styled(CardBody)`
  height: auto;
  ${media.ns`
    height: 30%;
  `};
`

const WorkCard = ({ src, to, gradient, title, subtitle, description }) => {
  const PictureWrapper = gradient ? PictureWithFilter : Picture
  return (
    <Wrapper to={to}>
      <PictureWrapper src={src} gradient={gradient}>
        <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
      </PictureWrapper>
      <SectionCard>
        <CardHeading>
          <CardTitle>{title}</CardTitle>
        </CardHeading>
        <CardSubTitle uppercase>{subtitle}</CardSubTitle>
        <SectionText>{description}</SectionText>
      </SectionCard>
    </Wrapper>
  )
}

export { Wrapper, Picture, Overlay, SectionCard, SectionText, WorkCard }
