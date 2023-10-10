import styles from './styles/work.module.scss';
import JobCard from '@/components/cards/jobCard/jobCard';

import { jobData } from '@/public/data/jobData';
import resumeSvg from '@/public/icons/resume.svg';
//import resume from './resume.pdf';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CardWrapper from '@/components/cards/cardWrapper/cardWrapper';

export default function Schooling() {
  const downloadResume = async () => {
    await fetch('src/public/data/resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.pdf';
        alink.click();
      })
    });
  }

  return (
    <div className={styles.workPageContainer}>
      <p className={styles.title} as={'div'}>Work Experiences</p>
      <p className={styles.subtitle} as={'div'}>... and what I have learned.</p>
      <div className={styles.workPageBody}>
        {jobData.map((job, key) => {
          return (<div key={key} className={styles.jobWrapper}><JobCard job={job} /></div>)
        })}
      </div>
    </div>
  )
};
