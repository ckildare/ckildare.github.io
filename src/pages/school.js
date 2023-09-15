import styles from './styles/school.module.scss';
import classNames from 'classnames';
import CourseCard from '@/components/cards/courseCard/courseCard';
import Image from 'next/image';

import { courseData } from '@/public/data/courseData';
import rightChevron from '@/public/icons/chevron/chevron-right.svg';
import downChevron from '@/public/icons/chevron/chevron-down.svg';

import React from 'react';
import CardWrapper from '@/components/cards/cardWrapper/cardWrapper';

export default function Schooling() {
  var semesterDataMapping = [];

  courseData.map((semester, key) => {
    semesterDataMapping.push(
      {
        id: key,
        isOpen: false,
        semester: semester
      }
    )
  });
  semesterDataMapping[0].isOpen = true;


  const [semesterItems, setSemesterItems] = React.useState(semesterDataMapping);

  const toggleItem = (itemId) => {
    setSemesterItems((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };

  return (
    <div className={styles.coursePageContainer}>
      <p className={styles.title} as={'div'}>Coursework</p>
      <p className={styles.subtitle} as={'div'}>... and what I have learned.</p>
      <div className={styles.semesterWrapper}>
        {semesterItems.map((semesterItem, key) => {
          return (<SemesterCard
            semester={semesterItem.semester}
            id={semesterItem.id}
            key={key}
            isOpen={semesterItem.isOpen}
            toggleItem={() => toggleItem(semesterItem.id)}
          />)
        })}
      </div>
    </div>
  )
};

function SemesterCard(props) {

  const semesterCardItem = React.useRef(null);

  const onSemesterClick = () => {
    props.toggleItem(props.semester.id);

    setTimeout(() => {
      if (semesterCardItem.current && !props.isOpen) {
        semesterCardItem.current.scrollIntoView(
          {
            block: 'start',
            behavior: 'smooth'
          }
        );
      };
    }, 2)
  }

  return (
    <CardWrapper
      ref={semesterCardItem}
      classNames={classNames(styles.semester, !props.isOpen ? styles.semesterClosed : false)}
    >
      <div className={
        classNames(styles.semesterTitleWrapper, props.isOpen && styles.semesterTitleWrapperOpen)}
        onClick={onSemesterClick}>
        <Image
          src={props.isOpen ? downChevron : rightChevron}
          className={styles.projectChevron}
          alt={'Project Chevron'}
          height={30}
          width={30}
        />
        <p>{props.semester.semesterName}</p>
      </div>
      {props.isOpen ?
        <div className={styles.courseWrapper}>
          {props.semester?.courses?.length > 0 &&
            props.semester.courses.map((course, key) => { return (<CourseCard course={course} semesterName={props.semester.semesterName} key={key} />) })}
        </div>
        : false
      }
    </CardWrapper>
  )
}
