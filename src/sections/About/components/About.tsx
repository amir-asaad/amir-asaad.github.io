import React from 'react';

import '../styles/about.css';
import Skills from './Skills';
import Socials from './Socials';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About</h2>
      <div className="about | mb-8">
        <img
          src="/about/profile-picture.png"
          alt="Profile"
        />
        <div className="about__texts">
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae magni reprehenderit, fuga porro eius deleniti hic cumque
            laudantium iusto inventore minus similique reiciendis ab!
            Repudiandae atque nam laboriosam accusantium.
          </p>
          <Socials />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
