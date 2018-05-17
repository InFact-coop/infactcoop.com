import styled from 'styled-components'

const Wrapper = styled.div.attrs({
  className:
    'pa5-ns pv3 mv1 mv0-ns ph1 center flex flex-column items-center bg-light-gray',
})`
  max-width: 1201px;
`
const Title = styled.div.attrs({
  className: 'font-1 ttu reglo black mb2 w-80-ns tc',
})``

const Text = styled.p.attrs({
  className: 'font-4 sans-serif black w-75-ns w-90 tc tl-ns mt2',
})``

const ZigZag = styled.img.attrs({
  className: 'mb1',
})``

export { Wrapper, Title, Text, ZigZag }
