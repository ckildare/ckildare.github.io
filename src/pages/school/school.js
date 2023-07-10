import styles from './school.module.scss';
import CourseCard from '@/components/courseCard/courseCard';
import Image from 'next/image';

import { courseData } from '@/public/data/courseData';
import rightChevron from '../../public/icons/chevron-right.svg';
import downChevron from '../../public/icons/chevron-down.svg';

import React from 'react';

export default function Schooling() {
  return (
    <div className={styles.coursePageContainer}>
      <p className={styles.title} as={'div'}>Coursework</p>
      <p className={styles.subtitle} as={'div'}>... and what I have learned.</p>
      <div className={styles.semesterWrapper}>
        {courseData.map((semester, key) => {
          return (<SemesterCard semester={semester} key={key} />)
        })}
      </div>
    </div>
  )
};

function SemesterCard(props) {
  const [openSemester, toggleOpen] = React.useState(false);

  function handleOpenSemester() {
    toggleOpen(!openSemester);
  }

  return (
            
    <div className={styles.semester}>
      <div className={styles.semesterName}>
        <Image
          src={openSemester ? downChevron : rightChevron}
          className={styles.projectChevron}
          alt={'Project Chevron'}
          height={20}
          width={20}
        />
        <p>{props.semester.semesterName}</p>
      </div>
      <div className={styles.courseWrapper}>
        {props.semester?.courses?.length > 0 ?
          props.semester.courses.map((course, key) => { return (<CourseCard course={course} key={key} />) })
          :
          false
        }
      </div>
    </div>
  )
}
