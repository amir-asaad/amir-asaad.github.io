import React from 'react';

import '../styles/project-name-and-description.css';

interface Props {
  name: string;
  description: string[];
  additionalDescription?: JSX.Element;
}

const ProjectNameAndDescription: React.FC<Props> = (props) => {
  return (
    <div className="project-name-and-description mb-8">
      <h3 className="fw-bold fs-600 mb-2">{props.name}</h3>
      <ul>
        {props.description.map((description, descriptionIndex) => (
          <li
            key={`description-${descriptionIndex}`}
            className="mb-2"
          >
            {description}
          </li>
        ))}
        {props.additionalDescription}
      </ul>
    </div>
  );
};

export default ProjectNameAndDescription;
