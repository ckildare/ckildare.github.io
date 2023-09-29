/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardWrapper from '@/components/cards/cardWrapper/cardWrapper';
import styles from './styles/home.module.scss'

import speedway from '../public/my-photos/speedway.jpg';
import jobFair from '../public/my-photos/job-fair-2023.jpg';
import prom from '../public/my-photos/prom.jpg';
import jaxAndMe from '../public/my-photos/jax-and-me.jpg';

export default function Home() {

  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className={styles.homeContainer}>
      <div className={styles.photoContainer}>
        <Image width={isMobile ? 350 : 500} height={isMobile ? 210 : 300} src={speedway} alt={"The Speedway Motors intern group of 2022 and I."} />
        <Image width={isMobile ? 350 : 500} height={isMobile ? 210 : 300} src={prom} alt={"My friends and I at prom."} />
      </div>
      <div className={styles.introductionContainer}>
        <CardWrapper>{tab}My name is Connor Kildare. I am a Junior in Software Engineering at the University of Nebraska - Lincoln. I am proficient in C#, React, and JavaScript. I am also familiar with C, Python, Jave, etc. </CardWrapper>
        <CardWrapper>{tab}I aspire to be a Software Engineer to produce accessible code with a meaningful impact to my users. I also hope to gain diverse work experience working in Software. </CardWrapper>
        <CardWrapper>{tab}In my free time, I work on projects that can help me or those around me in day-to-day life. I work with some friends under the team name, “Buddy Systems”, where we periodically meet to work on projects that interest us. I formerly was a Vice-President of the Operating Systems and Open-Source Group at UNL, and now participate in UNL&apos;s Game Dev club.</CardWrapper>
        <div className={styles.bottomPhotoContainer}>
          <Image width={isMobile ? 200 : 300} height={isMobile ? 200 : 300} src={jobFair} alt={"Me at the 2023 UNL Fall Career Fair."} />
          <Image width={isMobile ? 200 : 300} height={isMobile ? 200 : 300} src={jaxAndMe} alt={"My little brother, Jax, and I."} />
        </div>
      </div>
    </div>
  )
};