import styles from './courseCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

import ProjectCard from '../projectCard/projectCard';
import CardWrapper from '../cardWrapper/cardWrapper';
import schoolIcon from '../../../public/icons/school.svg';

export default function CourseCard(props) {

  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>

  const tabbedBullet = <>{tab}- &nbsp;</>;

  return (
    <div className={styles.courseBody}>
      <>
        <div className={styles.title}>{props.course?.title}</div>
        <div className={styles.lineDivider} />
      </>
      <div className={styles.courseInfo}>
        <CardWrapper classNames={styles.cardExtension}>
          <div className={styles.headerInfo}>
            <p className={styles.courseNumber}>{props.course?.courseNumber}</p>
            <p className={styles.semester}>{props.semesterName}</p>
          </div>
          <div className={styles.courseInfoTitleUnderline} />
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
        </CardWrapper>
        <CardWrapper classNames={classNames(styles.cardExtension, styles.courseColumn)}>
            <p className={styles.courseInfoTitle} as={'div'}>Overview</p>
            <div className={styles.courseInfoTitleUnderline} />
            <p className={styles.courseColumnBody} as={'div'}>{tab}{props.course?.description}</p>
        </CardWrapper>
        <CardWrapper classNames={classNames(styles.cardExtension, styles.courseColumn)}>
          <p className={styles.courseInfoTitle}>Outcomes</p>
          <div className={styles.courseInfoTitleUnderline} />
          <div className={styles.courseColumnBody}>
            {props.course?.outcomes?.map((outcome, key) => {
              return (
                <p className={styles.outcome} key={key}>{tabbedBullet}{outcome}</p>
              );
            })}
          </div>
        </CardWrapper>
        <Link className={styles.courseLink} href={props.course?.courseLink}>
          <Image src={schoolIcon} height={40} width={40} className={styles.courseLinkImage} alt={"Icon for project"} />
          <p as={'div'} className={styles.linkText}>Course on UNL Website</p>
        </Link>
        {props.course?.projects?.map((project, key) => { return (<ProjectCard project={project} key={key} isSchoolProject={true} />) })}
      </div>
    </div>
  )
};