import type { StaticImageData } from 'next/image'
import ixigoImg from '../images/ixigo.png'
import fincentDesktopImg from '../images/fincent_desktop.png'
import fincentAppImg from '../images/fincent_app.png'
import airlearnImg from '../images/airlearn.png'
import nextlevelImg from '../images/nextlevel.png'
import ikeaImg from '../images/ikea.png'

export interface BodySection {
  type: 'text' | 'image'
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  image?: StaticImageData | string
  imageAlt?: string
}

export interface CaseStudy {
  slug: string
  title: string
  category: string
  company: string
  tags: string[]
  year: string
  role: string
  overview: string
  heroImage: StaticImageData
  sections: BodySection[]
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  ixigo: {
    slug: 'ixigo',
    title: 'How I increased the conversion rate from 4.5% to 7.5% (85%)',
    category: 'UX Design',
    company: 'IXIGO',
    tags: ['UX Research', 'UI Design', 'Mobile', 'Conversion Optimisation'],
    year: '2022',
    role: 'Lead Design',
    overview:
      "The ixigo Trains App ranks #7 in the top 10 travel apps worldwide & #2 in India in terms of downloads and hours spent in apps with ~90 million monthly active users. There is a huge influx of users engaging with our app — however, the engagement vs. booking ratio was quiet small. We needed to find the gaps in the UX so that ratio could be increased. Even a small tweak could make a huge difference in the conversion.",
    heroImage: ixigoImg,
    sections: [
      {
        type: 'text',
        heading: 'About ixigo trains',
        paragraphs: [
          'The ixigo Trains App ranks #7 in the top 10 travel apps worldwide & #2 in India in terms of downloads and hours spent in apps with ~90 million monthly active users.',
          'India has the fourth largest railway network with over 13,452 passenger trains, with a passenger count of 24 million passengers a day.',
          'They aim to focus on the next billion users in India, mainly from tier 2/3 cities. This is the MOST difficult audience to crack. They are hyper price sensitive, not tech savvy and use low bandwidth phones — non trusting but also forgiving — and want processes to be as straight forward as possible, even if it takes more time and effort.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Problem Statement: Improving conversions by driving users into the booking funnel & improving the overall usability of the page.',
          'There is a huge influx of users engaging with our app. However, the engagement vs. booking ratio is quite small. We needed to find the gaps in the UX so that ratio could be increased. Even a small tweak could make a huge difference in the conversion.',
        ],
        bullets: [
          'Train searches per day: 4 lac',
          'Average bookings per day: 16,500',
          'Conversion rate: 4.1%',
        ],
      },
      {
        type: 'text',
        heading: 'Kick-off Meeting & Brainstorming',
        paragraphs: [
          'Here, design & product collaborated to break down the problem & understand what we were trying to solve.',
          'The data suggested we were facing drop-offs at the search listing page. The reason identified: the current design was limiting users to only check availability & not driving them towards booking. The information architecture & visual hierarchy were incoherent.',
        ],
      },
      {
        type: 'text',
        heading: 'User Research',
        paragraphs: [
          'We first analysed our data through user session videos & tracking numbers.',
          'To improve the information architecture, we did a card sort with the data points on the listing page — so we could prioritise or eliminate information. We also chose two different personas: a frequent traveller (once a week/month) and one who books occasionally (once in a few months or a year).',
        ],
        bullets: [
          'Arrival / departure time',
          'Usual delay',
          'Route',
          'Train rating',
          'Dates',
          'Availability',
          'Train name & number',
          'Origin / destination',
          'Duration',
          'Classes',
          'Price',
        ],
      },
      {
        type: 'image',
        image: '/images/projects/ixigo/research.png',
        imageAlt: 'Card sorting and user research at New Delhi railway station',
      },
      {
        type: 'text',
        heading: 'Usability Testing',
        paragraphs: [
          'We created a working prototype & tested it out with users at the New Delhi railway station. We silently observed their behaviour.',
        ],
      },
      {
        type: 'text',
        heading: 'Key Findings',
        paragraphs: [
          '"Availability was of main importance to everyone, but the priority of other data points depended on the persona."',
          'Overall, there wasn\'t too much gap in the weightage — so it was more about the arrangement & visual hierarchy.',
        ],
        bullets: [
          'Arrival & departure timings and train duration were important deciding & filtering factors.',
          'Users had difficulty finding what they wanted (class, train details, etc.)',
          'Comparing trains was difficult in the existing design.',
          'Train operation days were not understood by users.',
        ],
      },
      {
        type: 'text',
        heading: 'Direction & Wireframing',
        paragraphs: [
          'Considering all the insights from the card sort & data analysis, we identified all the pain points to focus on.',
        ],
        bullets: [
          'Comparison of trains was difficult in the existing design.',
          'The existing page was too focused on conveying "availability" rather than "bookability". We needed to shift that focus by improving on the CTAs, visual hierarchy & copy.',
          'Being a very information-heavy page, we would have to use better visual cues, placement & white space to enhance usability.',
          'Rethinking the filter tray.',
          'The train detail page could be moved into a bottom sheet — not an entire new page — so users don\'t have to go back & forth and don\'t lose context.',
        ],
      },
      {
        type: 'image',
        image: '/images/projects/ixigo/wireframes.png',
        imageAlt: 'ixigo SRP wireframes and direction explorations',
      },
      {
        type: 'text',
        heading: 'The Final Solution',
        paragraphs: [
          'Shifting the focus to booking — The availability information was now shown upfront with the class itself, colour-coded based on availability. On tapping, the detailed availability would appear with a "Book" CTA. This also made it far easier to compare availability between trains.',
          'Improving the information architecture — Creating a visual hierarchy with the help of font weights, colours & spacing. Some information was moved to the train details page to reduce cognitive load on the listing.',
          'Better access to filters — Based on user preferences, a few key filters were surfaced upfront. All classes were displayed on the listing in a carousel format.',
        ],
      },
      {
        type: 'image',
        image: '/images/projects/ixigo/solution.png',
        imageAlt: 'ixigo SRP final solution screens',
      },
    ],
  },

  'fincent-desktop': {
    slug: 'fincent-desktop',
    title: 'Fincent — Redesigning Headsup',
    category: 'Product Design',
    company: 'FINCENT',
    tags: ['Product Design', 'Web App', 'Fintech'],
    year: '2023',
    role: 'Senior Product Designer',
    overview:
      'Fincent is a financial management platform for small businesses. Headsup — the core dashboard — was dense, hard to scan, and gave users no clear path to action. I redesigned it from the ground up to bring clarity, focus, and confidence to a complex accounting experience.',
    heroImage: fincentDesktopImg,
    sections: [
      {
        type: 'text',
        heading: 'Starting Point',
        paragraphs: [
          'The legacy dashboard surfaced every data point with equal visual weight. Business owners told us they opened the app, felt overwhelmed, and closed it without taking any action. The interface was comprehensive but paralysing.',
          'Interviews with 14 small business owners revealed they cared most about three things: what money was coming in this week, what bills were due, and whether they were on track against budget.',
        ],
      },
      {
        type: 'image',
        image: fincentDesktopImg,
        imageAlt: 'Fincent Headsup dashboard redesign',
      },
      {
        type: 'text',
        heading: 'Design Decisions',
        paragraphs: [
          'I introduced a progressive disclosure model — a top-level summary with three key metrics (cash balance, receivables, upcoming payments), with drill-down available on demand. The chart replaced a raw table as the default view.',
          'Colour was used sparingly and purposefully: green for incoming, amber for alerts, red for overdue. We removed eight modules from the default layout and moved them to a customisable sidebar.',
        ],
      },
      {
        type: 'text',
        heading: 'Impact',
        paragraphs: [
          'Weekly active usage of the dashboard increased by 41% in the 60 days post-launch. Support tickets related to "not understanding my finances" dropped by 28%. NPS for the product rose from 22 to 47.',
        ],
      },
    ],
  },

  'fincent-ios': {
    slug: 'fincent-ios',
    title: 'Fincent iOS',
    category: 'Mobile Design',
    company: 'FINCENT',
    tags: ['iOS', 'Mobile Design', 'Fintech'],
    year: '2023',
    role: 'Product Designer',
    overview:
      'Small business owners rarely sit at a desk. Fincent needed a native iOS companion that let users check their financial health, approve expenses, and flag issues on the go — without the cognitive load of the desktop product.',
    heroImage: fincentAppImg,
    sections: [
      {
        type: 'text',
        heading: 'The Challenge',
        paragraphs: [
          'A direct mobile port of the web app had already failed in testing. The information architecture designed for a 1440px screen collapsed completely on a phone — too many taps, too much scrolling, too much cognitive load.',
          'We needed to rethink what "using Fincent on mobile" actually meant, starting from the jobs users needed to do on the go rather than replicating the desktop feature set.',
        ],
      },
      {
        type: 'image',
        image: fincentAppImg,
        imageAlt: 'Fincent iOS app screens',
      },
      {
        type: 'text',
        heading: 'Mobile-First Rethink',
        paragraphs: [
          'Research showed mobile use fell into two distinct patterns: a quick daily check ("am I okay?") and an action trigger ("something needs my attention now"). I designed for both with a notification-first entry point and a glanceable home screen.',
          'The approval flow — a major mobile use case — was redesigned as a card-based swipe interface. Users could approve or flag expenses in under 3 seconds per item.',
        ],
      },
      {
        type: 'text',
        heading: 'Results',
        paragraphs: [
          'The iOS app achieved 4.6 stars in the App Store within its first month. Mobile approval of expenses — previously near zero — became the dominant approval channel within 8 weeks of launch.',
        ],
      },
    ],
  },

  airlearn: {
    slug: 'airlearn',
    title: 'Unacademy — AirLearn Monthly Recap',
    category: 'Feature Design',
    company: 'UNACADEMY',
    tags: ['EdTech', 'Feature Design', 'Growth'],
    year: '2022',
    role: 'Senior Product Designer',
    overview:
      "AirLearn is Unacademy's personalised learning product. Monthly engagement was declining and learners lacked visibility into their own progress. I designed a monthly recap experience that celebrated achievements, surfaced insights, and nudged learners back into learning streaks.",
    heroImage: airlearnImg,
    sections: [
      {
        type: 'text',
        heading: 'The Opportunity',
        paragraphs: [
          'Spotify Wrapped had proven that personalised year-in-review experiences drive both retention and organic sharing. Unacademy had rich learning data — hours watched, concepts mastered, streaks maintained — but no surface to make it meaningful to learners.',
          'The hypothesis: if learners could see their progress in an emotionally resonant way, they would feel more invested and more likely to continue.',
        ],
      },
      {
        type: 'image',
        image: airlearnImg,
        imageAlt: 'AirLearn Monthly Recap screens',
      },
      {
        type: 'text',
        heading: 'The Design',
        paragraphs: [
          'I designed a full-screen card-based experience delivered the first week of each month. Each card focused on one insight: hours learned, top subject, longest streak, comparison to peers. Animation and copy were tuned to feel celebratory, not clinical.',
          'A share card at the end allowed learners to post their recap to social — designed to feel like an achievement badge rather than an ad.',
        ],
      },
      {
        type: 'text',
        heading: 'Outcome',
        paragraphs: [
          'The Monthly Recap drove a 23% uplift in monthly active usage in the week following delivery. 31% of recipients shared their recap externally, generating earned media equivalent to a mid-scale campaign. Feature became a core part of the AirLearn retention playbook.',
        ],
      },
    ],
  },

  nextlevel: {
    slug: 'nextlevel',
    title: 'NextLevel by Unacademy',
    category: 'Product Design',
    company: 'UNACADEMY',
    tags: ['Product Design', 'B2B', 'Growth'],
    year: '2021',
    role: 'Lead Product Designer',
    overview:
      'NextLevel was Unacademy\'s recruitment platform connecting companies with candidates from its learning ecosystem. The original application flow had a 71% abandonment rate. I redesigned the end-to-end candidate experience to make applying feel as simple as applying on LinkedIn.',
    heroImage: nextlevelImg,
    sections: [
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Candidates were dropping out at every step of the application process. Forms were long, context was missing, and the experience felt generic — there was no sense that Unacademy understood their learning journey or valued what they\'d accomplished on the platform.',
          'Companies were also frustrated: shortlist quality was low because candidates who did apply often lacked the skills listed in their profiles.',
        ],
      },
      {
        type: 'image',
        image: nextlevelImg,
        imageAlt: 'NextLevel recruitment platform redesign',
      },
      {
        type: 'text',
        heading: 'Redesign Approach',
        paragraphs: [
          'I introduced a profile-first model: candidates\' Unacademy learning data pre-populated their application — courses completed, assessments passed, skills certified. Applying became a two-tap action for most roles.',
          'For companies, I redesigned the shortlisting interface to surface verified skill signals alongside the application. This improved recruiter confidence in candidates surfaced by the algorithm.',
        ],
      },
      {
        type: 'text',
        heading: 'Impact',
        paragraphs: [
          'Application completion rate improved from 29% to 73%. Shortlisted candidates per job posting increased by 31%. Time-to-hire for partner companies decreased by an average of 12 days.',
        ],
      },
    ],
  },

  ikea: {
    slug: 'ikea',
    title: 'IKEA — Checkout Flow Redesign',
    category: 'UX Design',
    company: 'IKEA',
    tags: ['E-commerce', 'UX Audit', 'Checkout'],
    year: '2023',
    role: 'UX Consultant',
    overview:
      "IKEA's e-commerce checkout had among the highest cart abandonment rates in the furniture category. I conducted a full UX audit and redesigned the checkout flow to remove friction, build trust at critical decision points, and reduce the steps between cart and confirmation.",
    heroImage: ikeaImg,
    sections: [
      {
        type: 'text',
        heading: 'The Audit',
        paragraphs: [
          'A heuristic evaluation and session recording analysis across 2,400 sessions identified five abandonment hotspots: delivery date selection, assembly cost disclosure, payment method friction, address form errors, and order summary clarity.',
          'The most damaging: assembly costs were revealed only at the final step, causing 38% of users who reached that screen to abandon — a classic dark pattern in reverse, except it was unintentional.',
        ],
      },
      {
        type: 'image',
        image: ikeaImg,
        imageAlt: 'IKEA checkout flow redesign',
      },
      {
        type: 'text',
        heading: 'Key Changes',
        paragraphs: [
          'Assembly costs were surfaced on the product page and in the cart. Delivery date selection was moved earlier and given visual clarity with a calendar-style picker. The payment step was redesigned to support one-click for saved methods.',
          'The address form was rebuilt with inline validation and smart defaults based on postcode lookup. The order summary became persistent on the right panel throughout checkout.',
        ],
      },
      {
        type: 'text',
        heading: 'Results',
        paragraphs: [
          'Cart abandonment dropped by 22% in the three months following launch. Average checkout completion time reduced by 40 seconds. Customer satisfaction scores for the purchase experience improved from 3.4 to 4.2 out of 5.',
        ],
      },
    ],
  },
}

export default CASE_STUDIES
