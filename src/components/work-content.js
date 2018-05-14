import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

const WorkWrapper = styled.div.attrs({
  className: 'center flex flex-column mv4 items-center',
})`
  background-color: light-grey;
  max-width: 1201px;

  ${media.ns`
  margin-top: 4rem;
  margin-bottom: 4rem;
  `};
`
const WorkTitle = styled.div.attrs({
  className: 'font-1 ttu reglo black mb2 w-80 tc',
})`
  ${media.ns`
    width: 50%;
    `};
`

const WorkDescription = styled.p.attrs({
  className: 'font-5 sans-serif black w-75',
})`
  & + p {
    margin-top: 16px;
  }

  ${media.ns`
    width: 60%;
    `};
`

const WorkImg = styled.img.attrs({
  className: 'w-100 mv4',
})``

const TestimonialText = styled.p.attrs({
  className: 'font-3 sans-serif black mb2 w-80',
})`
  ${media.ns`
    width: 90%;
    `};
`

const TestimonialPerson = styled.p.attrs({
  className: 'font-5 sans-serif black w-80',
})`
  ${media.ns`
    width: 90%;
    `};
`

export {
  WorkWrapper,
  WorkTitle,
  WorkImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
}
