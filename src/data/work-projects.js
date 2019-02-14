import stimmy_card from '../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../assets/images/card_images/cast_card.png'
import bluecross_card from '../assets/images/card_images/bluecross_card.png'
import first_days_card from '../assets/images/card_images/first_days_card.png'
import lcn_card from '../assets/images/card_images/lcn_card.png'
import yimovi_card from '../assets/images/card_images/yimovi_card.png'
import lwc_card from '../assets/images/card_images/lwc_card.png'
import meme_card from '../assets/images/card_images/meme_card.png'
import ys_card from '../assets/images/card_images/ys_card.png'
import discover_card from '../assets/images/card_images/discover_card.png'
import workhub_card from '../assets/images/card_images/workhub_card.png'
import facweb_card from '../assets/images/card_images/facweb_card.png'

export default {
  workhub: {
    to: '/our-work/workhub',
    src: workhub_card,
    title: 'Start-Up',
    subtitle: 'Workhub',
    description:
      'Workhub is a platform to capture how teams work together and to explore how the world works.',
  },
  discover: {
    to: '/our-work/discover',
    src: discover_card,
    title: 'Health',
    subtitle: 'Discoverbot',
    description:
      'An app teaching 16-18 year olds psychological techniques based on cognitive behavioural therapy principles to make helpful changes to their lives and to build resilience to stress.',
  },
  'founders-and-coders': {
    to: '/our-work/founders-and-coders',
    src: facweb_card,
    title: 'Partnerships',
    subtitle: 'Founders and Coders',
    description:
      'Creating a new look and feel for a community close to our hearts, Founders and Coders.',
  },
  'meme-generator': {
    to: '/our-work/meme-generator',
    src: meme_card,
    title: 'Activism',
    subtitle: 'EU Compliant Meme Generator',
    description:
      'A campaign tool to aid Create.Refresh in their fight against Article 13.',
  },
  'your-sanctuary': {
    to: '/our-work/your-sanctuary',
    src: ys_card,
    title: 'Tech for Good',
    subtitle: 'Your Sanctuary',
    description:
      'A tool to allow victims of domestic violence to gain information, either from a live advisor or through a chatbot.',
  },
  bluecross: {
    to: '/our-work/bluecross',
    src: bluecross_card,
    title: 'Tech for Good',
    subtitle: 'Blue Cross',
    description:
      'We created an app for conscientious owners to find a loving new home for their pet.',

    gradient:
      'linear-gradient(225deg, rgba(0,159,223,0.3) 0%, rgba(0,51,136,0.3) 100%)',
  },
  cast: {
    to: '/our-work/cast',
    src: cast_card,
    title: 'Tech for Good',
    subtitle: 'CAST Digital Fellowship',
    description:
      'We collaborated with CAST to support senior staff at non-profits in becoming leaders of their organisation’s digital development.',
  },
  'stimmy-things': {
    to: '/our-work/stimmy-things',
    src: stimmy_card,
    title: 'Health',
    subtitle: 'Stimmy Things',
    description:
      'Working in collaboration with young people, parents and clinicians, we designed and built an app that helps young people with ADHD to manage their symptoms.',
  },
  lwc: {
    to: '/our-work/lwc',
    src: lwc_card,
    title: 'Tech for Good',
    subtitle: "Lancashire Women's Centers",
    description:
      'We created LWC: Service Search, which is an app to help women access the right services so they can feel more in control of their lives.',

    gradient:
      'radial-gradient(circle, rgba(250,125,120,0.3) 0%, rgba(97,20,204,0.3) 100%)',
  },
  'first-days': {
    to: '/our-work/first-days',
    src: first_days_card,
    title: 'Tech for Good',
    subtitle: 'Wales Cooperative',
    description:
      "Platform for helping with volunteer engagement from the beginning of the recruitment process right through to getting feedback on the volunteer's first day.",
  },
  yimovi: {
    to: '/our-work/coming-soon',
    src: yimovi_card,
    title: 'Education',
    subtitle: 'Yimovi',
    description:
      'YiMovi is a CMS-based website with a catalogue of films from the Chinese medical humanties field, built for UCL University.',

    gradient:
      'linear-gradient(225deg, rgba(0,0,0,0.1) 0%, rgba(50,45,55,0.1) 100%)',
  },
  lcn: {
    to: '/our-work/lcn',
    src: lcn_card,
    title: 'Tech for Good',
    subtitle: 'Law Centres Network',
    description:
      'We built the LCN Feedback Platform to allow simple, quick, data collection with instant feedback on what others think.',
  },
}
