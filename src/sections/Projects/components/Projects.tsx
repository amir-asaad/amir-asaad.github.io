import React, { useCallback, useRef, useState } from 'react';

import { ProjectsI } from '../interfaces';

import ProjectVideo from './ProjectVideo';
import ProjectNameAndDescription from './ProjectNameAndDescription';

import '../styles/project.css';
import ProjectLinks from './ProjectLinks';
import ProjectTechnology from './ProjectTechnology';

const Projects: React.FC = () => {
  const [projects] = useState<ProjectsI[]>([
    {
      name: 'Pokedex',
      description: [
        'Developed a Pokedex web app that uses the PokeAPI to display all Pokemon details.',
        "Design is inspired by Rogelio Martines' Pokedex Web Design (https://www.behance.net/gallery/148252385/Pokdex-Web-Design)"
      ],
      laptopVideo: '/pokedex/pokemon-video-laptop.mov',
      mobileVideo: '/pokedex/pokemon-video-phone.mov',
      websiteLink: 'https://amir-asaad.github.io/pokemon/',
      sourceCodeLink: 'https://github.com/amir-asaad/pokemon',
      technologies: ['TypeScript', 'React', 'HTML', 'CSS', 'Material UI']
    }
  ]);

  const firstObserver = useRef<IntersectionObserver>();
  const doAnimationRef = useCallback(
    (node: any, observerNumber: number) => {
      firstObserver.current = new IntersectionObserver((entries) => {
        if (node.classList.contains('has-animated')) {
          return;
        }

        if (entries[0].isIntersecting) {
          node.classList.add('has-animated');

          const isNormalGrid = observerNumber % 2 === 0;

          entries[0].target.children[0].classList.add(
            isNormalGrid
              ? 'animation-slide-from-left'
              : 'animation-slide-from-right'
          );

          entries[0].target.children[1].classList.add(
            isNormalGrid
              ? 'animation-slide-from-right'
              : 'animation-slide-from-left'
          );

          // Flip the animation
          // Text div is now in the left side while video is now in the right side
          if (!isNormalGrid) {
            entries[0].target.children[1].classList.add('flipped');
          }
        }
      });

      if (node) {
        firstObserver.current.observe(node);
      }
    },
    []
  );

  const displayProjects = () => {
    return (
      <section className="project">
        {projects.map((project, projectIndex) => {
          return (
            <div
              ref={(node) => {
                doAnimationRef(node, projectIndex);
              }}
              className={`project-card ${
                projectIndex === projects.length - 1 ? '' : 'border-bottom'
              }`}
              key={`project-${projectIndex}`}
            >
              <div className="project-card__texts">
                <ProjectNameAndDescription
                  name={project.name}
                  description={project.description}
                />
                <ProjectTechnology technologies={project.technologies} />
                <ProjectLinks
                  websiteLink={project.websiteLink}
                  sourceCodeLink={project.sourceCodeLink}
                />
              </div>
              <div className="project-card__video mb-8">
                <ProjectVideo videoSrc="pokedex/pokemon-video-laptop.mov" />
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <section className="section-project">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        {displayProjects()}
      </div>
    </section>
  );
};

export default Projects;
