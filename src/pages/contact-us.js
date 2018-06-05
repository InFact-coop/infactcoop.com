import React from 'react'
import styled from 'styled-components'

import HeaderLanding from '../containers/header'
import { YellowOverlay } from '../components/splash'
import { Wrapper, ZigZag, Title } from '../components/about-pages'
import {
  Form,
  Text,
  Input,
  Label,
  HelpText,
  SubmitButton,
} from '../components/contact-us'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const ContactUs = () => (
  <div>
    <HeaderLanding>We would love to meet you!</HeaderLanding>
    <Wrapper>
      <Title>Get in touch</Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        If you have a project idea you would like to collaborate on, want to ask
        some questions or just connect and say hi, drop us a line!
      </Text>
      <Form action="https://formspree.io/hello@infactcoop.com" method="POST">
        <Label>
          Name<Input type="text" name="name" />
        </Label>
        <Label>
          Company Name<Input type="text" name="company_name" />
        </Label>
        <Label>
          Email<Input type="email" name="_replyto" />
        </Label>
        <Label>
          How can we help you?<HelpText type="text" name="how_can_we_help" />
        </Label>
        <input type="hidden" name="_subject" value="Website Query" />
        <input type="hidden" name="_next" value="http://localhost:8000/" />
        <SubmitButton type="submit" value="SUBMIT">
          SUBMIT
        </SubmitButton>
      </Form>
    </Wrapper>
  </div>
)

export default ContactUs
