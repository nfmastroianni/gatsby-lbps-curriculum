export const mainMenu = [
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
