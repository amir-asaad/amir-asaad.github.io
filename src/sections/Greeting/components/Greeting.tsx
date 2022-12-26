import React from 'react';

import '../styles/greetings.css';

const Greeting: React.FC = () => {
  return (
    <section className="greetings-section | d-flex align-items-start justify-content-center flex-direction-column primary--text">
      <div>
        <h1 className="greetings-first-text animation-typing-and-blinking | d-block">
          Hello, I'm Amir O. Asaad,
        </h1>
      </div>
      <div>
        <h1 className="greetings-second-text">
          a frontend developer from the Philippines.
        </h1>
      </div>
    </section>
  );
};

export default Greeting;
