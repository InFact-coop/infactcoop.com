import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

const Form = styled.form.attrs({
  className: 'w-75-ns w-90 flex flex-column items-center mv6 ph6-ns ph2 ',
})``

const Text = styled.p.attrs({
  className: 'font-4 sans-serif black w-75-ns w-90 tc',
})``

const Input = styled.input.attrs({
  className: 'mt1 ba w-100 pa2',
})``

const SubmitButton = styled.input.attrs({
  className: 'w-40-ns w-60 b white font-4 sans-serif pv2 mt2',
})`
  background: linear-gradient(90deg, #009cf3 0%, #16d6d9 100%);
`

const HelpText = styled.textarea.attrs({
  className: 'mt1 w-100 b--black pa2 ',
})`
  height: 10vh;
`

const Label = styled.label.attrs({
  className: 'w-100 tl font-4 sans-serif black mb4',
})``

export { Form, Text, Input, HelpText, Label, SubmitButton }
