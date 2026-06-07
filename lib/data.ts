export interface Project {
  _id: string
  slug: string
  title: string
  subtitle: string
  company: string
  category: string
  description: string
  tags: string[]
  link?: string
  image?: string
  imageFile?: string
}

export const STATIC_PROJECTS: Project[] = [
  {
    _id: '1',
    slug: 'ixigo',
    title: 'Redesigning search to reduce drop-off for 10M+ users',
    subtitle: 'Search Results Page',
    company: 'IXIGO',
    category: 'UX Design',
    description:
      "Redesigning the search results page for one of India's largest travel platforms to improve conversion rates and overall user experience.",
    tags: ['UX Research', 'UI Design', 'Mobile'],
    imageFile: 'ixigo.png',
  },
  {
    _id: '4',
    slug: 'airlearn',
    title: 'Driving engagement with Monthly Recap on Unacademy',
    subtitle: 'Engagement Feature',
    company: 'UNACADEMY',
    category: 'Feature Design',
    description:
      'Driving engagement and revenue growth through a personalised monthly recap experience on the AirLearn platform.',
    tags: ['EdTech', 'Feature Design', 'Growth'],
    imageFile: 'airlearn.png',
  },
  {
    _id: '2',
    slug: 'fincent-desktop',
    title: 'Making financial data feel simple for small businesses',
    subtitle: 'Web Platform',
    company: 'FINCENT',
    category: 'Product Design',
    description:
      'Complete redesign of the financial heads-up dashboard, bringing clarity and focus to a complex accounting platform.',
    tags: ['Product Design', 'Web App', 'Fintech'],
    imageFile: 'fincent_desktop.png',
  },
  {
    _id: '3',
    slug: 'fincent-ios',
    title: 'Fincent iOS',
    subtitle: 'Mobile Application',
    company: 'FINCENT',
    category: 'Mobile Design',
    description:
      'Native iOS app design for a personal finance platform, focused on making financial management feel approachable and clear.',
    tags: ['iOS', 'Mobile Design', 'Fintech'],
    imageFile: 'fincent_app.png',
  },
  {
    _id: '5',
    slug: 'nextlevel',
    title: 'NextLevel by Unacademy',
    subtitle: 'Recruitment Platform',
    company: 'UNACADEMY',
    category: 'Product Design',
    description:
      'Redesigned the hiring experience, increasing shortlisted candidates by 31% through a streamlined, candidate-first application flow.',
    tags: ['Product Design', 'B2B', 'Growth'],
    imageFile: 'nextlevel.png',
  },
  {
    _id: '6',
    slug: 'ikea',
    title: 'IKEA — Checkout Flow Redesign',
    subtitle: 'E-commerce Optimisation',
    company: 'IKEA',
    category: 'UX Design',
    description:
      'Optimising the checkout experience to reduce cart abandonment and improve conversion for a global retail giant.',
    tags: ['E-commerce', 'UX Audit', 'Checkout'],
    imageFile: 'ikea.png',
  },
]
