import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import B from '../components/B';
import heroImage from '../images/galaxy-header-bg.jpg';
import {Hero} from './dataDef';
import {SectionId} from './meta';

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Michele.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 w-3/4 sm:prose-base lg:prose-lg ">
        I am a <B>Software Engineer</B> with a Master's in Theoretical Physics and 4 years building production React
        applications. I am based in <B>Espoo</B>, close to the <B>Helsinki</B> area
      </p>
      <p className="prose-sm text-stone-200 w-3/4 sm:prose-base lg:prose-lg">
        When I'm not coding, you'll find me on a football pitch, walking through Finnish forests, battling friends over
        board games, or catching up with them over good food.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Michele Mozzo Resume.pdf',
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
