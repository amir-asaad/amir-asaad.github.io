import { TechnologyI } from '../../../reusables/interfaces/technology.interface';

export interface ProjectsI {
  name: string;
  description: string[];
  laptopVideo: string;
  mobileVideo: string;
  websiteLink: string;
  sourceCodeLink: string;
  technologies: TechnologyI[];
}

export interface ProjectLinkI {
  name: string;
  link: string;
}
