import {AcademicCapIcon, ArrowDownTrayIcon, BuildingOffice2Icon, FlagIcon, MapIcon} from '@heroicons/react/24/outline';
import B from '../components/B';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/galaxy-header-bg.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Michele Mozzo',
  description: "Michele's personal website. Template from Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Michele.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <B>Frontend Software Engineer</B>, who taught himself into the world of web development. I am based in{' '}
        <B>Espoo</B>, close to the <B>Helsinki</B> area
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time I like to spend some quality time with friends, enjoy a relaxing walk in the beautiful
        finnish forests or go playing a football match.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Michele-Mozzo-CV.pdf',
      text: 'Resume',
      blank: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `As a frontend software engineer my core strength lies in developing user interfaces, 
  but I have knowledge on how to operate on the full stack of web applications.
  I am passionate about the subject and a fast learner, approaching every challenge with an open mindset, 
  while keeping my strong logical thinking, which helps me to approach any challenge with realistic and pragmatic solutions.
  I am self-motivated and capable of working in a fast-paced, agile and multidisciplinary environment.`,
  aboutItems: [
    {label: 'Location', text: 'Helsinki, FI', Icon: MapIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Study', text: 'University of Trento, Trento, IT', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'KONE', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'CSS/SCSS',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'AWS cloud',
        level: 4,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Italian',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Trento, Italy | September 2018 - May 2021',
    location: 'University of Trento',
    title: 'M.Sc. in Theoretical and Computational Physics',
    content: <p>120 ECTS in “Theory of Fundamental Interactions and Cosmology”</p>,
  },
  {
    date: 'Trento, Italy | September 2015 - September 2018',
    location: 'University of Trento',
    title: 'B.Sc. in Physics',
    content: (
      <p>180 ECTS in the areas of quantum mechanic, statistical physics, computational and mathematical methods</p>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'Espoo, Finland | November 2022',
    location: 'Junction 2022, “Green code now you must” CGI challenge',
    title: '0x00ff00',
    content: (
      <p>
        Developed simple post <B>blog website</B> with energy consumption reduction mindset, for a challenge sponsored
        by CGI at Junction 2022. Our team was composed by three people in total.<br></br>
        Implemented a clean and efficient <B>UI</B> using <B>JavaScript</B> and <B>React.js</B> to cut energy
        consumption to minimum.<br></br>
        Worked on profiling energy usage from CPU components to maximize energy efficiency.<br></br>
        The <B>project placed second</B> out of the 20+ teams that worked on the challenge.
      </p>
    ),
  },
  {
    date: 'Trento, Italy | December 2020 - May 2021',
    location: 'Master Thesis, University of Trento',
    title: 'Modelling electromagnetic emission from Kilonovae: photosphere and temperature profiles',
    content: (
      <p>
        Developed a <B>predictive computational model</B> to study Kilonovae emissions. The simulations have been coded
        in <B>Python</B>. Performed results validation using data analysis methods such as
        <B>regression processes</B>, <B>chi squared tests</B> and <B>autocorrelation computations</B>.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Espoo, Finalnd | February 2023 - Present',
    location: 'KONE',
    title: 'Frontend Developer Trainee',
    content: (
      <p>
        Currently working at KONE as <B>Frontend Developer Trainee</B> in the R&D team.<br></br>
        The project I am taking care of is a web UI that displays real-time data in a digital-twin of a building.
        <br></br>I helped bringing the project from its POC phase to the first release given to the customer.<br></br>
        The technologies I am working with are: <B>React.js</B> implemented with <B>Typescript</B>, <B>THREE.js</B> for
        displaying and animating 3D digital twins, <B>AWS cloud</B> services for hosting, CI/CD, authentication,{' '}
        <B>Apollo</B>
        and <B>websocket</B> for APIs handling.
      </p>
    ),
  },
  {
    date: 'Helsinki, Finalnd | Oct 2021 - Nov 2022',
    location: 'P3 Financial Group',
    title: 'Software Developer Trainee',
    content: (
      <p>
        I helped developing existing and indipendent applications.<br></br>
        Two major projects I worked on were a form application and a portal application to show and sort data form
        control center.<br></br>
        The technologies I worked with were: <B>React.js</B> implemented with both <B>Typescript</B> and{' '}
        <B>Javascript</B>, <B>Zod</B> and <B>Yup</B> for form validation, <B>react-query</B> for APIs handling,{' '}
        <B>Chakra-UI</B> for components ad styling, <B>GitLab</B> for CI/CD, <B>Next.js</B> as UI framework and a{' '}
        <B>SpingBoot</B> framework in <B>Java</B> for backend adjustment.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ken-Lauren Daganio',
      ref: 'https://www.linkedin.com/in/kdaganio/',
      text: `Michele's strength lies in his tenacity to do the right thing. Whenever he is faced with a problem that he can't currently solve, he will take the time to dig deeper and look for a solution that is correct and efficient. He is never afraid to question technical decisions, and makes it a point to understand something completely before making an opinion of his own.
        During my time working with him in P3 he showed excellence by picking up unfamiliar things digging his heels and eventually working and owning small to medium sized projects. His presence is refreshing and gives us more senior devs on the team a chance to re-evaluate our established practices, and approach greenfield projects with a fresh set of eyes. 
        Michele, will become a great addition to any organization he will be part of. I will definitely will want to work with him again.`,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out dropping a message in my email, linkedin account or on my phone',
  items: [
    {
      type: ContactType.Email,
      text: 'micky.mozzo@gmail.com',
      href: 'mailto:micky.mozzo@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Michele Mozzo',
      href: 'https://www.linkedin.com/in/michele-mozzo-96a845204/',
    },
    {
      type: ContactType.Phone,
      text: '+358 466364860',
    },
    {
      type: ContactType.Phone,
      text: '+39 3486788526',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mmozzo96'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/michele-mozzo-96a845204/'},
];
