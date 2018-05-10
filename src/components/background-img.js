import React from 'react'
import styled, { css } from 'styled-components'

const BackgroundImg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  height: 40rem;

  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
`

const BackgroundFilter = styled.div`
  height: fit-content;
  width: fit-content;
  opacity: 0.3;
  z-index: 1;
  background: radial-gradient(circle, #fa7d78 0%, #6114cc 100%);
`

export { BackgroundImg, BackgroundFilter }
