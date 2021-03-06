import styled from 'styled-components'

const Form = styled.form.attrs({
  className:
    'w-75-l w-100 flex flex-column items-center mv6-ns mv4 ph6-l ph4-m ph2',
})``

const Text = styled.p.attrs({
  className: 'font-4 sans-serif black w-75-l w-90 tc',
})``

const Input = styled.input.attrs({
  className: 'mt1 ba w-100 pa2 bg-light-gray',
})`
  border: 1px solid black;
`

const SubmitButton = styled.button.attrs({
  className: 'w-40-ns w-60 b hover-blue white font-4 sans-serif pv2 mt2-ns',
})`
  border: 1px solid transparent;
  border-image: linear-gradient(
    to right,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
  border-image-slice: 1;
  background-image: linear-gradient(
    to right,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
  z-index: 100;
  background-size: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 0;


  &:before {
    background-image: linear-gradient(#fff, #fff);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity 0.15s ease;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
`

const HelpText = styled.textarea.attrs({
  className: 'mt1 w-100 pa2 bg-light-gray',
})`
  height: 10vh;
  border: 1px solid black;
`

const Label = styled.label.attrs({
  className: 'w-100 tl font-4 sans-serif black mb4',
})``

export { Form, Text, Input, HelpText, Label, SubmitButton }
