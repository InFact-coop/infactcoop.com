import React from 'react'
import styled, { css } from 'styled-components'

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
`

const PurpleOverlay = styled(Overlay)`
  background: radial-gradient(circle, #fa7d78 0%, #6114cc 100%);
`
const BlueOverlay = styled(Overlay)`
  background: radial-gradient(circle, #009cf3 0%, #16d6d9 100%);
`
export { PurpleOverlay, BlueOverlay }
