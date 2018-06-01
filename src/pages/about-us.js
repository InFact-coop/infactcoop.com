import React from 'react'

import HeaderLanding from '../containers/header'
import { AboutCard, CardsWrapper } from '../components/about-us'
import { Wrapper, ZigZag, Text, Title } from '../components/about-pages'
import { BlueOverlay } from '../components/overlay'

import getToKnowUs from '../assets/images/get_to_know_us.png'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const AboutUs = () => (
  <div>
    <Wrapper>
      <Title>We are InFact</Title>
      <ZigZag src={wigglyBottom} />
      <Text>
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      </Text>
      <Text>
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus.
      </Text>
    </Wrapper>
    <div className="flex justify-center w-100">
      <CardsWrapper>
        {AboutCard(
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkT67u_ff9g-DypfoRa47KEZemnj1MGNt3-GxA_zJjHDkV2Ze5',
          'Noga Enbar',
          'Designer',
          'fl mh3'
        )}
        {AboutCard(
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPea89TfLL9HAV1Lu6SwIsoaXrtbk3j0PyvxDGrIJI-8hyo-t3',
          'Ivan Gonzalez',
          'Lead Developer',
          'mh3'
        )}
        {AboutCard(
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlfqQ1yQ6WFA_r_HnGzn6wcCdxvS-nswvLqCSnCegOV2yd4DZ',
          'Lucy King',
          'Developer',
          'fr mh3'
        )}
        {AboutCard(
          'https://www.billboard.com/files/styles/article_main_image/public/media/MAX-press-photo-by-Mike-Zahar-2018-billboard-1548.jpg',
          'Max Gerber',
          'Developer',
          'fl mh3'
        )}
        {AboutCard(
          'https://pixel.nymag.com/imgs/daily/vulture/2017/12/05/05-sophie-feature-lede.w512.h600.2x.jpg',
          'Sophie Levens',
          'Developer',
          'mh3'
        )}
      </CardsWrapper>
    </div>
  </div>
)

const AboutWork = () => {
  return (
    <div>
      <HeaderLanding image={getToKnowUs} overlay={BlueOverlay}>
        Co-operatively driven design and development.
      </HeaderLanding>
      <AboutUs />
    </div>
  )
}

export default AboutWork
