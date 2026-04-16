import testimonialImage from '../images/testimonial.webp';
import {TestimonialSection} from './dataDef';

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
