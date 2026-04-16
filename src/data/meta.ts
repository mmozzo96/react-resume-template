import {HomepageMeta} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'Michele Mozzo',
  description: "Michele's personal website. Template from Tim Baker's react resume template",
};

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
