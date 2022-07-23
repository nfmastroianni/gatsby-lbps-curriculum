const departments = [
  {
    id: 'bilingualesl',
    title: 'Bilingual / ESL, & World Languages',
    curriculaUrl: '',
    departmentUrl: '',
    description:
      'Bilingual / ESL: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere dolor commodi ea eum natus debitis! Facilis, voluptatum ipsum! Cupiditate dolore, ipsa a expedita sit ex placeat assumenda suscipit minima!',
    image: 'bilingual_logo',
  },
  {
    id: 'physicaleducation',
    title: 'Health & Physical Education',
    curriculaUrl: '',
    departmentUrl: '',
    description:
      'Health & Physical Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere dolor commodi ea eum natus debitis! Facilis, voluptatum ipsum! Cupiditate dolore, ipsa a expedita sit ex placeat assumenda suscipit minima!',
    image: 'pe_logo',
  },
  {
    id: 'specialeducation',
    title: 'Special Education',
    curriculaUrl: '',
    departmentUrl: '',
    description:
      'Special Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere dolor commodi ea eum natus debitis! Facilis, voluptatum ipsum! Cupiditate dolore, ipsa a expedita sit ex placeat assumenda suscipit minima!',
    image: 'sped_logo',
  },
]
const mainMenu = [
  {
    linkText: 'Curriculum Home Page',
    url: '/',
    type: 'internal',
    id: 2,
  },
  {
    linkText: 'Curricula',
    url: '/curricula/',
    type: 'internal',
    id: 3,
    subMenu: [
      {
        linkText: 'K-5 Curricula',
        url: '/curricula/k-5/',
        type: 'internal',
        id: 'c1',
      },
      {
        linkText: '6-8 Curricula',
        url: '/curricula/6-8/',
        type: 'internal',
        id: 'c2',
      },
      {
        linkText: '9-12 Curricula',
        url: '/curricula/9-12/',
        type: 'internal',
        id: 'c3',
      },
    ],
  },
  {
    linkText: 'District Homepage',
    url: 'https://www.longbranch.k12.nj.us',
    type: 'external',
    id: 1,
  },
]
export { departments, mainMenu }
