import styles from './projects.module.scss';
import React from 'react';
import ProjectCard from '@/components/projectCard/projectCard';

import { projectData } from '@/public/data/projectData';

export default function Projects() {

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
