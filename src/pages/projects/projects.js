import styles from './projects.module.scss';
import React from 'react';
import ProjectCard from '@/components/projectCard/projectCard';
import { ProjectStatus } from '@/public/enums/projectStatus';

import axelWilson from '../../public/card-screenshots/axel-wilson-cover-image.png';
import buddySystems from '../../public/card-screenshots/buddy-systems-cover-image.png';
import deprecatedPortfolioSite from '../../public/card-screenshots/portfolio-site-cover-image.png';
import laundryScheduler from '../../public/card-screenshots/laundry-scheduler-cover-image.png';

export default function Projects() {

  const projectData = [
    {
      title: "Deprecated Portfolio Site",
      displayImg: deprecatedPortfolioSite,
      context: "My first portfolio site was built to practice my frontend development skills and show internships as an example of the work I would be able to do.",
      concept: "This site included information on projects that I had completed, a short about me section, a link to my resume, and a few contact links. Although it was small, it was effective in communicating my experiences.",
      outcomes: [
        "Deploying and managing a live website.",
        "Communicating my work and school experiences.",
        "Developing a website to implement responsive sizing.",
        "HTML",
        "Sass ( CSS )"
      ],
      status: ProjectStatus.Finished,
      projectLink: "",
      githubLink: "",
      supportingImgs: [],
    },
    {
      title: "Axel Wilson's Music Maker",
      displayImg: axelWilson,
      context: "I helped build Axel Wilson's Music Maker during the 2022 Cornhacks hackathon. The hackathon had the theme “Retro”. My contributions include research on the concept, frontend development, peer programming on integrating Spotify API.",
      concept: "Axel Wilson’s Music Maker is a dynamic web application that utilizes Spotify's web API. Our web app allows the user to… ",
      conceptStepList: [
        "Select a song to search.",
        "Recommends five songs based on the searched song.",
        "The user chooses one or more songs to continue.",
        "Recommends five more songs based off the selected search on the last screen.",
        "Repeats until the user decides to finish getting recommended songs.",
        "Each selected song will be compiled into a final playlist."
      ],
      outcomes: [
        "Preparing for a project through research.",
        "React.js, HTML, Sass ( CSS ), JS, Python.",
        "Building API connections.",
        "Manipulating GraphQL queries.",
        "Managing state in a dynamic website.",
        "Working in a team environment."
      ],
      status: ProjectStatus.Paused,
      projectLink: "https://axel-wilsons-mixtape-maker.herokuapp.com",
      githubLink: "https://github.com/CodeCricut/RetroPlaylistGenerator",
      supportingImgs: [],
    },
    {
      title: "BuddySystem's Portfolio Site",
      displayImg: buddySystems,
      context: "",
      concept: "",
      outcomes: [],
      status: ProjectStatus.Abandoned,
      projectLink: "",
      githubLink: "",
      supportingImgs: [],
    },
    {
      title: "UNL Laundry Scheduler",
      displayImg: laundryScheduler,
      context: "",
      concept: "",
      outcomes: [],
      status: ProjectStatus.Paused,
      projectLink: "",
      githubLink: "",
      supportingImgs: [],
    },
    {
      title: "Current Portfolio Site",
      displayImg: "",
      context: "",
      concept: "",
      outcomes: [],
      status: ProjectStatus.InProgress,
      projectLink: "",
      githubLink: "",
      supportingImgs: [],
    },
  ]

  return (
    <div className={styles.projectPageContainer}>
      <p className={styles.title} as={'div'}>Personal Projects</p>
      <p className={styles.subtitle} as={'div'}>These are some projects that I have completed.</p>
      <div className={styles.projectGridWrapper}>
        {projectData.map((project, key) => { return (<ProjectCard project={project} key={key} />) })}
      </div>
    </div>
  )
};
