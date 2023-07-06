import styles from './courseCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

import ProjectCard from '@/components/projectCard/projectCard';
import schoolIcon from '../../public/icons/school.svg';

export default function CourseCard(props) {
  const [openCourse, toggleOpen] = React.useState(false);

  function handleOpenCourse() {
    toggleOpen(!openCourse);
  }

  return (
    <div className={styles.courseBody}>
      <div className={styles.courseInformation}>
        <div className={styles.title}>{props.course?.title}</div>
        <div className={styles.headerInfo}>
          <p className={styles.courseNumber}>{props.course?.courseNumber}</p>
          <p className={styles.dayTaken}>{props.course?.courseDate}</p>
        </div>
        <p className={styles.professorTitle}>Instructors</p>
        {props.course?.instructors.map((instructor, key) => {
          <p className={styles.professorText} key={key}>{instructor}</p>
        })}
        <Link class={styles.projectLink} href={props.course?.courseLink}>
          <Image src={schoolIcon} height={40} width={40} className={styles.courseLinkImage} alt={"Icon for project"} />
          <p as={'div'} className={styles.linkText}>Project</p>
        </Link>
      </div>
    </div>
  )
};