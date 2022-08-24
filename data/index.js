const departments = [
  {
    id: 'bilingualesl',
    title: 'bilingualTitle',
    curriculaUrl: '',
    curriculaUrlType: '',
    departmentUrl:
      'https://sites.google.com/longbranch.k12.nj.us/office-of-bilingual-education/home',
    departmentUrlType: 'external',
    description: 'bilingualDescription',
    image: 'bilingual_logo',
  },
  {
    id: 'physicaleducation',
    title: 'physedTitle',
    curriculaUrl: '',
    curriculaUrlType: '',
    departmentUrl: 'https://www.longbranch.k12.nj.us/Domain/466',
    departmentUrlType: 'external',
    description: 'hpeDescription',
    image: 'pe_logo',
  },
  {
    id: 'specialeducation',
    title: 'spedTitle',
    curriculaUrl: '',
    curriculaUrlType: '',
    departmentUrl: 'https://www.longbranch.k12.nj.us/Domain/89',
    departmentUrlType: 'external',
    description: 'spedDescription',
    image: 'sped_logo',
  },
]

// INSTRUCTIONAL PRACTICES
const practices = [
  {
    id: 'practice1',
    title: 'Progress Monitoring',
    description:
      'An important part of insruction, progress monitoring (also known as formative assessment) provides teachers and administrators with important data.  More description needed...',
    url: 'https://www.readingrockets.org/article/student-progress-monitoring-what-means-your-child',
    type: 'external',
  },
  {
    id: 'practice2',
    title: 'Readers & Writers Workshop',
    description:
      'COPIED (CHANGE) The Reading and Writing Workshop Model is a structured time for the teaching and learning of literacy instruction. The Reading Workshop is an uninterrupted time for students to read, think and converse about authentic literature on a daily basis.',
    url: '',
    type: '',
  },
]

// MAIN MENU ITEMS
const mainMenu = [
  {
    linkText: 'Curriculum Home Page',
    url: '/',
    type: 'internal',
    id: 2,
  },
  {
    linkText: 'curricula',
    url: '/curricula/',
    type: 'internal',
    id: 3,
    subMenu: [
      {
        linkText: 'k5Curricula',
        url: '/curricula/k-5/',
        type: 'internal',
        id: 'c1',
      },
      {
        linkText: 'sixEightCurricula',
        url: '/curricula/6-8/',
        type: 'internal',
        id: 'c2',
      },
      // {
      //   linkText: '9-12 Curricula',
      //   url: '/curricula/9-12/',
      //   type: 'internal',
      //   id: 'c3',
      // },
    ],
  },
  {
    linkText: 'giftedAndTalented',
    url: '/gifted/',
    type: 'internal',
    id: 4,
  },
  {
    linkText: 'districtHomepage',
    url: 'https://www.longbranch.k12.nj.us',
    type: 'external',
    id: 1,
  },
]

// GRADE SPANS
const gradeSpans = [
  {
    id: 'span1',
    title: 'K-5',
    subtitle: 'k5Subtitle',
    description: 'k5Description',
  },
  {
    id: 'span2',
    title: '6-8',
    subtitle: 'sixEightSubtitle',
    description: 'sixEightDescription',
  },
  {
    id: 'span3',
    title: '9-12',
    subtitle: 'nineTwelveSubtitle',
    description: 'nineTwelveDescription',
  },
]

export { departments, practices, mainMenu, gradeSpans }
