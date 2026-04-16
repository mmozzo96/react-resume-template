import {ContactSection, ContactType} from './dataDef';

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
      text: '+358 504471221',
    },
  ],
};
