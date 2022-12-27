import React from 'react';
import { TechnologyI } from '../interfaces/technology.interface';

import '../styles/technology.css';

interface Props extends TechnologyI {}

const Technology: React.FC<Props> = (props) => {
  return (
    <div className="technology | d-flex gap-10 px-4">
      <img
        src={props.imageSrc}
        alt={props.text}
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Technology;
