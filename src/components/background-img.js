import React from 'react'
import styled, { css } from 'styled-components'

const BackgroundImg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;

  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
`

export default BackgroundImg