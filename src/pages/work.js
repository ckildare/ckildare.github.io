import styles from './styles/work.module.scss';
import JobCard from '@/components/cards/jobCard/jobCard';

import { jobData } from '@/public/data/jobData';
import resumeSvg from '@/public/icons/resume.svg'
//import resume from '@/public/data/resume.pdf'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CardWrapper from '@/components/cards/cardWrapper/cardWrapper';

export default function Schooling() {
  return (
    <div className={styles.workPageContainer}>
      <p className={styles.title} as={'div'}>Work Experiences</p>
      <p className={styles.subtitle} as={'div'}>... and what I have learned.</p>
      <div className={styles.workPageBody}>
        {jobData.map((job, key) => {
          return (<div key={key} className={styles.jobWrapper}><JobCard job={job} /></div>)
        })}
          <Link
            href={""}
            target={"blank"}
          >
            <CardWrapper classNames={styles.resume}>
            <Image src={resumeSvg} height={40} width={40} alt={"Resume icon"} />
            <p>Resume</p>
            </CardWrapper>
          </Link>
      </div>
    </div>
  )
};
