const departments = [
  {
    id: 'bilingualesl',
    title: 'Bilingual / ESL, & World Languages',
    curriculaUrl: '',
    curriculaUrlType: '',
    departmentUrl:
      'https://sites.google.com/longbranch.k12.nj.us/office-of-bilingual-education/home',
    departmentUrlType: 'external',
    description:
      'Bilingual / ESL: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere dolor commodi ea eum natus debitis! Facilis, voluptatum ipsum! Cupiditate dolore, ipsa a expedita sit ex placeat assumenda suscipit minima!',
    image: 'bilingual_logo',
  },
  {
    id: 'physicaleducation',
    title: 'Health & Physical Education',
    curriculaUrl: '',
    curriculaUrlType: '',
    departmentUrl: 'https://www.longbranch.k12.nj.us/Domain/466',
    departmentUrlType: 'external',
    description:
      'Health & Physical Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere dolor commodi ea eum natus debitis! Facilis, voluptatum ipsum! Cupiditate dolore, ipsa a expedita sit ex placeat assumenda suscipit minima!',
    image: 'pe_logo',
  },
  {
    id: 'specialeducation',
    title: 'Special Education & Services',
    curriculaUrl: '',
    curriculaUrlType: '',
    departmentUrl: 'https://www.longbranch.k12.nj.us/Domain/89',
    departmentUrlType: 'external',
    description:
      'Special Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere dolor commodi ea eum natus debitis! Facilis, voluptatum ipsum! Cupiditate dolore, ipsa a expedita sit ex placeat assumenda suscipit minima!',
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
      // {
      //   linkText: '6-8 Curricula',
      //   url: '/curricula/6-8/',
      //   type: 'internal',
      //   id: 'c2',
      // },
      // {
      //   linkText: '9-12 Curricula',
      //   url: '/curricula/9-12/',
      //   type: 'internal',
      //   id: 'c3',
      // },
    ],
  },
  {
    linkText: 'Gifted & Talented',
    url: '/gifted/',
    type: 'internal',
    id: 4,
  },
  {
    linkText: 'District Homepage',
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
    subtitle: 'Students in Grades K-5',
    description:
      'During their time in our elementary program, students will experience steady successes as they strive to meet the challenges put before them. Courses at this level offer students a wide array of topics to help them grow and discover interests. Check out the curricula for K-5 courses by clicking the button nearby.',
  },
  {
    id: 'span2',
    title: '6-8',
    subtitle: 'Students in Grades 6-8',
    description:
      'Middle school is an important period of growth for students as they prepare for secondary school. Courses at the middle school level are able to offer deeper explorations of content and skills than those experienced in the primary grades. ',
  },
  {
    id: 'span3',
    title: '9-12',
    subtitle: 'Students in Grades 9-12',
    description:
      'High school courses seek to refine and strengthen key academic and life skills initially developed in primary and middle school. After completing their course work at Long Branch High School, our students are ready for their next step whether in college or career.',
  },
]

export { departments, practices, mainMenu, gradeSpans }
