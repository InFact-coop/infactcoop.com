import styled from 'styled-components'
import BackgroundImg from './background-img'

const WorkWrapper = styled.div.attrs({
  className:
    'pa5-ns pv3 mv1 mv0-ns ph1 center flex flex-column items-center bg-light-gray',
})`
  max-width: 1201px;
`
const WorkTitle = styled.div.attrs({
  className: 'font-1 ttu reglo black w-80 w-50-ns tc',
})``

const WorkDescription = styled.p.attrs({
  className: 'font-4 sans-serif black w-75-ns w-90',
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
    margin-top: 48px;
  }
`

const WorkImg = styled(BackgroundImg).attrs({
  className: 'w-100 mv4',
})`
  height: 75vh;
`

const TestimonialText = styled.p.attrs({
  className: 'font-3 sans-serif black mb2 w-75-ns w-90',
})``

const TestimonialPerson = styled.p.attrs({
  className: 'font-5 sans-serif black w-75-ns w-90',
})``

const ZigZag = styled.img.attrs({
  className: 'mb2',
})``

const BannerImg = styled(BackgroundImg)`
  width: 100vw;
  height: 85vh;
  max-width: 1440px;
`

export {
  WorkWrapper,
  WorkTitle,
  WorkImg,
  WorkDescription,
  BannerImg,
  TestimonialPerson,
  TestimonialText,
  ZigZag,
}
