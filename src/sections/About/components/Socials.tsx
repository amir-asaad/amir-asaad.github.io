import React, { useState } from 'react';
import Link from '../../../reusables/components/Link';

import '../styles/social.css';

const Socials: React.FC = () => {
  const [socialLinks] = useState([
    {
      text: 'Linkedin',
      imageSrc: 'linkedin',
      url: 'https://www.linkedin.com/in/amir-asaad-355b211b7/'
    },
    {
      text: 'Github',
      imageSrc: 'github',
      url: 'https://github.com/amir-asaad'
    }
  ]);
  return (
    <div className="socials">
      <ul className="d-flex gap-10 list-style-type-none pa-0 flex-wrap">
        {socialLinks.map((socialLink, socialLinkIndex) => (
          <li
            key={`socialLink-${socialLinkIndex}`}
            className="pb-4"
          >
            <Link
              imageSrc={`/about/${socialLink.imageSrc}.svg`}
              text={socialLink.text}
              linkUrl={socialLink.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
