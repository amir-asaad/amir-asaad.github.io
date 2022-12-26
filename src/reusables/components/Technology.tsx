import React from 'react';

import '../styles/technology.css';

interface Props {
  image: string;
  text: string;
}

const Technology: React.FC<Props> = (props) => {
  return (
    <div className="technology | d-flex gap-10 px-4">
      <img
        src={props.image}
        alt={props.text}
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Technology;
