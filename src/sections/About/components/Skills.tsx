import React, { useState } from 'react';
import Technology from '../../../reusables/components/Technology';

import '../styles/skills.css';

const Skills: React.FC = () => {
  const [skills] = useState([
    { text: 'JavaScript', imageSrc: 'javascript' },
    { text: 'Vue', imageSrc: 'vue' },
    { text: 'TypeScript', imageSrc: 'typescript' },
    { text: 'React', imageSrc: 'react' },
    { text: 'HTML5', imageSrc: 'html5' },
    { text: 'CSS3', imageSrc: 'css3' }
  ]);

  return (
    <div className="skills">
      <h3>Skills:</h3>
      <ul className="list-style-type-none pa-0">
        {skills.map((skill, skillIndex) => (
          <li key={`skill-${skillIndex}`}>
            <Technology
              imageSrc={`/icons/${skill.imageSrc}.svg`}
              text={skill.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
