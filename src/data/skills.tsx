import {FaAws} from 'react-icons/fa';
import {
  SiCircleci,
  SiCss3,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJira,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import {TbFileCode, TbUsers} from 'react-icons/tb';

import WebSocketIcon from '../components/Icon/WebSocketIcon';
import {SkillGroup} from './dataDef';

export const skills: SkillGroup[] = [
  {
    name: 'Proficient in',
    skills: [
      {name: 'React.js', level: 0, Icon: SiReact},
      {name: 'TypeScript', level: 0, Icon: SiTypescript},
      {name: 'JavaScript', level: 0, Icon: SiJavascript},
      {name: 'Next.js', level: 0, Icon: SiNextdotjs},
      {name: 'CSS/SCSS', level: 0, Icon: SiCss3},
      {name: 'GraphQL/Apollo', level: 0, Icon: SiGraphql},
      {name: 'Jest/RTL', level: 0, Icon: SiJest},
    ],
  },
  {
    name: 'Experienced with',
    skills: [
      {name: 'AWS', level: 0, Icon: FaAws},
      {name: 'WebSocket', level: 0, Icon: WebSocketIcon},
      {name: 'Python', level: 0, Icon: SiPython},
      {name: 'Figma', level: 0, Icon: SiFigma},
    ],
  },
  {
    name: 'Ways of working',
    skills: [
      {name: 'AI-assisted development', level: 0, Icon: SiOpenai},
      {name: 'Agile/Scrum', level: 0, Icon: SiJira},
      {name: 'CI/CD (GitLab, CircleCI)', level: 0, Icon: SiCircleci},
      {name: 'Code review', level: 0, Icon: TbFileCode},
      {name: 'Cross-functional collaboration', level: 0, Icon: TbUsers},
    ],
  },
];
