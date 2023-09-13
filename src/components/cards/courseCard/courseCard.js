import styles from './courseCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

import ProjectCard from '../projectCard/projectCard';
import schoolIcon from '../../../public/icons/school.svg';

export default function CourseCard(props) {

  const tabbedBullet = <>&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;</>;

  return (
    <div className={styles.courseBody}>
      <>
        <div className={styles.title}>{props.course?.title}</div>
        <div className={styles.lineDivider} />
      </>
      <div className={styles.courseInfo}>
        <div>
          <div className={styles.headerInfo}>
            <p className={styles.courseNumber}>{props.course?.courseNumber}</p>
            <p className={styles.semester}>{props.course?.semester}</p>
          </div>
          <div>
            <p className={styles.professorTitle}>Instructors</p>
            <div className={styles.courseInfoTitleUnderline} />
            <div className={styles.professorList}>
              {props.course?.instructors.map((instructor, key) => {
                return (
                  <p className={styles.professorText} key={key}>{tabbedBullet}{instructor}</p>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.courseDescriptionColumn}>
          <p className={styles.courseInfoTitle} as={'div'}>Overview</p>
          <div className={styles.courseInfoTitleUnderline} />
          <p className={styles.courseOverviewBody} as={'div'}>{props.course?.description}</p>
        </div>
        <div className={styles.courseOutcomesColumn}>
          <p className={styles.courseInfoTitle}>Outcomes</p>
          <div className={styles.courseInfoTitleUnderline} />
          <div className={styles.courseOutcomesBody}>
            {props.course?.outcomes?.map((outcome, key) => {
              return (
                <p className={styles.outcome} key={key}>{tabbedBullet}{outcome}</p>
              );
            })}
          </div>
        </div>
        <Link className={styles.courseLink} href={props.course?.courseLink}>
          <Image src={schoolIcon} height={40} width={40} className={styles.courseLinkImage} alt={"Icon for project"} />
          <p as={'div'} className={styles.linkText}>Course on UNL Website</p>
        </Link>
        {props.course?.projects.map((project, key) => { return (<ProjectCard project={project} key={key} isSchoolProject={true} />) })}
      </div>
    </div>
  )
};