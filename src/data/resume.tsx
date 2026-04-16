import B from '../components/B';
import {TimelineItem} from './dataDef';

export const education: TimelineItem[] = [
  {
    date: 'Trento, Italy | September 2018 - May 2021',
    location: 'University of Trento',
    title: 'M.Sc. in Theoretical and Computational Physics',
    content: (
      <>
        <p>120 ECTS in “Theory of Fundamental Interactions and Cosmology”</p>
        <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500">Thesis</p>
        <p className="text-base font-semibold">
          Modelling electromagnetic emission from Kilonovae: photosphere and temperature profiles
        </p>
        <p className="mt-1">
          Developed a predictive computational model to study Kilonovae emissions. The simulations have been coded in
          Python. Performed results validation using data analysis methods such as regression processes, chi squared
          tests and autocorrelation computations.
        </p>
      </>
    ),
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
        Developed a simple blog website with energy consumption reduction mindset, for a challenge sponsored by CGI at
        Junction 2022. Our team was composed by three people in total.<br></br>
        Implemented a clean and efficient UI using JavaScript and React.js to cut energy consumption to minimum.
        <br></br>
        Worked on profiling energy usage from CPU components to maximize energy efficiency.<br></br>
        The project placed second out of the 20+ teams that worked on the challenge.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Helsinki, Finland | January 2025 - Present',
    location: 'Ritchie Bros.',
    title: 'Software Engineer',
    content: (
      <>
        <p>
          Frontend engineer on a large-scale marketplace platform, embedded in a cross-functional team responsible for
          the seller-side experience.
        </p>
        <ul className="ml-4 list-disc">
          <li>
            Contributed to the redesign and rebuild of the seller portal alongside two other frontend developers.
            Delivered new pages, asset management views and financial document integration leading to a 75% reduction in
            internal FinOps support tickets.
          </li>
          <li>
            Developed a custom AI-assisted workflow using dedicated agents to streamline TDD implementation, taking
            features from Jira tickets and Figma designs through to tested, reviewable code.
          </li>
          <li>
            Collaborated closely with multiple product teams (buyer, search, and others) as well as PMs and designers to
            ship cohesive, production-ready features.
          </li>
        </ul>
        <p className="mt-2">
          <B>Technologies:</B> React.js, TypeScript, Next.js, CircleCI
        </p>
      </>
    ),
  },
  {
    date: 'Espoo, Finland | February 2023 - December 2024',
    location: 'KONE',
    title: 'Frontend Developer',
    content: (
      <p>
        Lead frontend developer on a six-person cross-functional team, building a web UI to visualise real-time data
        within a 3D digital twin of a building. Took the product from proof-of-concept to first customer release.
        <br></br>
        Solved key performance bottlenecks in 3D mesh rendering at scale and implemented live data streaming via{' '}
        WebSocket.
        <br></br>
        <br></br>
        <B>Technologies:</B> React.js, TypeScript, THREE.js, Apollo/GraphQL, WebSocket, AWS
      </p>
    ),
  },
  {
    date: 'Helsinki, Finland | October 2021 - November 2022',
    location: 'P3 Financial Group',
    title: 'Junior Software Engineer',
    content: (
      <p>
        Joined directly after completing my Master's degree, gaining first professional exposure to full-stack web
        development in a small team environment. Contributed to two internal applications: a form builder and a data
        portal.
        <br></br>
        <br></br>
        <B>Technologies:</B> React.js, Next.js, MongoDB, and GitLab CI/CD pipelines under the guidance of senior
        developers.
      </p>
    ),
  },
];
