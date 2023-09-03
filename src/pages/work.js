import styles from './styles/work.module.scss';
import JobCard from '@/components/jobCard/jobCard';

import { jobData } from '@/public/data/jobData';
//import resume from '@/public/resume.pdf';

import React from 'react';

export default function Schooling() {
  return (
    <div className={styles.workPageContainer}>
      <p className={styles.title} as={'div'}>Work Experiences</p>
      <p className={styles.subtitle} as={'div'}>... and what I have learned.</p>
      <div className={styles.workPageBody}>
        {jobData.map((job, key) => {
          return (<div key={key} className={styles.jobWrapper}><JobCard job={job} /></div>)
        })}
        <a 
          className={styles.resume}
          href="./resume.pdf"
          target="blank">My Resume</a>
      </div>
    </div>
  )
};
