import React from 'react';

import '../styles/project-links.css';

interface Props {
  websiteLink: string;
  sourceCodeLink: string;
}

const ProjectLinks: React.FC<Props> = (props) => {
  return (
    <div className="project-links | d-flex justify-content-center mb-8 mt-16">
      <a
        className="white--text"
        href={props.websiteLink}
        target="_blank"
        rel="noreferrer"
      >
        Website
      </a>
      <a
        className="white--text"
        href={props.sourceCodeLink}
        target="_blank"
        rel="noreferrer"
      >
        Source Code
      </a>
    </div>
  );
};

export default ProjectLinks;
