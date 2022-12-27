import React from 'react';
import Link from '../../../reusables/components/Link';

import '../styles/project-links.css';

interface Props {
  websiteLink: string;
  sourceCodeLink: string;
}

const ProjectLinks: React.FC<Props> = (props) => {
  return (
    <ul className="project-links | list-style-type-none d-flex flex-wrap gap-10 mb-8 mt-16">
      <li>
        <Link
          text="Website"
          imageSrc={`${'icons/web.png'}`}
          linkUrl={props.websiteLink}
        />
      </li>
      <li>
        <Link
          text="Source Code"
          imageSrc="/icons/github.svg"
          linkUrl={props.websiteLink}
        />
      </li>
    </ul>
  );
};

export default ProjectLinks;
