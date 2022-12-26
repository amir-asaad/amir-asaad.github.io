import React, { useState } from 'react';
import Technology from '../../../reusables/components/Technology';

import '../styles/skills.css';

const Skills: React.FC = () => {
  const [skills] = useState([
    { text: 'JavaScript', imageUrl: 'javascript' },
    { text: 'Vue', imageUrl: 'vue' },
    { text: 'TypeScript', imageUrl: 'typescript' },
    { text: 'React', imageUrl: 'react' },
    { text: 'HTML5', imageUrl: 'html5' },
    { text: 'CSS3', imageUrl: 'css3' }
  ]);

  return (
    <div className="skills">
      <h3>Skills:</h3>
      <ul className="list-style-type-none pa-0">
        {skills.map((skill, skillIndex) => (
          <li key={`skill-${skillIndex}`}>
            <Technology
              image={`/about/${skill.imageUrl}.svg`}
              text={skill.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
