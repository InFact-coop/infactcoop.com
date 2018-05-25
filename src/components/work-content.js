import styled from 'styled-components'

const WorkWrapper = styled.div.attrs({
  className: 'center flex flex-column mv4 items-center',
})`
  background-color: light-gray;
  max-width: 1201px;
`
const WorkTitle = styled.div.attrs({
  className: 'font-1 ttu reglo black w-80 w-50-ns tc',
})``

const WorkDescription = styled.p.attrs({
  className: 'font-5 sans-serif black w-75 w-60-ns',
})`
  & h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 4px 0px 4px 0px;
  }

  & ul {
    list-style-type: circle;
    list-style-position: inside;
    margin: 16px 0px 0px 8px;
  }

  & + p {
    margin-top: 16px;
  }

  & + div {
    margin-top: 32px;
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

const ZigZag = styled.img.attrs({
  className: 'mb2',
})``

export {
  WorkWrapper,
  WorkTitle,
  WorkImg,
  WorkDescription,
  TestimonialPerson,
  TestimonialText,
  ZigZag,
}
