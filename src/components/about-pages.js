import styled from 'styled-components'

const Wrapper = styled.div.attrs({
  className:
    'pa5-l pa4-m pv3 mv1 mv0-ns ph1 center flex flex-column items-center bg-light-gray',
})`
  max-width: 1201px;
`
const Title = styled.div.attrs({
  className: 'highlight-custom font-1 ttu reglo black mb3 w-80-ns tc',
})``

const Text = styled.p.attrs({
  className:
    'highlight-custom font-4 sans-serif black w-75-l w-90-m w-90 tc tl-ns',
})`
  & ul {
    list-style-type: circle;
    list-style-position: inside;
    margin: 24px 0px 0px 16px;

    &::selection {
      background: #50cfcf;
      color: #f8f8f8;
    }
  }

  & li {
    margin-top: 16px;

    &::selection {
      background: #50cfcf;
      color: #f8f8f8;
    }
  }

  & + p {
    margin-top: 24px;
  }
`

const ZigZag = styled.img.attrs({
  className: 'mb3',
})``

export { Wrapper, Title, Text, ZigZag }
