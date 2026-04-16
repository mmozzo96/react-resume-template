import {AcademicCapIcon, BuildingOffice2Icon, FlagIcon, MapIcon} from '@heroicons/react/24/outline';

import {About} from './dataDef';

export const aboutData: About = {
  description: `With a Master's in Theoretical Physics and a track record of building production React applications across multiple industries, I bring an analytical mindset to frontend engineering that goes beyond the surface. I have a strong focus on building clean, complex user interfaces and have experience taking products from early POC through to customer-facing release, working with technologies including React, TypeScript, Next.js, and GraphQL.`,
  aboutItems: [
    {label: 'Location', text: 'Helsinki, FI', Icon: MapIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Study', text: 'University of Trento, Trento, IT', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'KONE', Icon: BuildingOffice2Icon},
  ],
};
