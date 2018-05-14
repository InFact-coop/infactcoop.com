import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

const WorkWrapper = styled.div.attrs({
  className: 'center flex flex-column mv4 items-center',
})`
  background-color: light-gray;
  max-width: 1201px;
`
const WorkTitle = styled.div.attrs({
  className: 'font-1 ttu reglo black mb2 w-80 w-50-ns tc',
})``

const WorkDescription = styled.p.attrs({
  className: 'font-5 sans-serif black w-75 w-60-ns',
})`
  & + p {
    margin-top: 16px;
  }
`

const WorkImg = styled.img.attrs({
  className: 'w-100 mv4',
})``

const TestimonialText = styled.p.attrs({
  className: 'font-3 sans-serif black mb2 w-80 w-90-ns',
})``

const TestimonialPerson = styled.p.attrs({
  className: 'font-5 sans-serif black w-80 w-90-ns',
})``

export {
  WorkWrapper,
  WorkTitle,
  WorkImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
}
