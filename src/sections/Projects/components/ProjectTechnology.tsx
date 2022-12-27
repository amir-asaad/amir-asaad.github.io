import React from 'react';
import Technology from '../../../reusables/components/Technology';
import { TechnologyI } from '../../../reusables/interfaces/technology.interface';

import '../styles/project-technology.css';

interface Props {
  technologies: TechnologyI[];
}

const ProjectTechnology: React.FC<Props> = (props) => {
  return (
    <div className="project-technology | mb-8">
      <ul className="d-flex flex-wrap gap-10">
        {props.technologies.map((technology, technologyIndex) => {
          return (
            <li
              className="list-style-type-none text-center"
              key={`technology-${technologyIndex}`}
            >
              <Technology
                imageSrc={`/icons/${technology.imageSrc}.svg`}
                text={technology.text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectTechnology;
