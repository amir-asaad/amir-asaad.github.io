import React from 'react';

import '../styles/project-technology.css';

interface Props {
  technologies: string[];
}

const ProjectTechnology: React.FC<Props> = (props) => {
  return (
    <div className="project-technology | mb-8">
      <ul className="project-technology__lists">
        {props.technologies.map((technology, technologyIndex) => {
          return (
            <li
              className="list-style-type-none text-center"
              key={`technology-${technologyIndex}`}
            >
              {technology}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectTechnology;
