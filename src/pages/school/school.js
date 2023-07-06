import styles from './school.module.scss';
import CourseCard from '@/components/courseCard/courseCard';

import React from 'react';
import classNames from 'classnames';

export default function Schooling() {

  const courseData = [
    {
      title: "Software Engineering I",
      courseNumber: "Soft 160",
      semester: "Fall",
      year: 2021,
      instructors: [
        "Dr. Christopher Bohn",
        "Dr. Suzanne Person"
      ],
      description: "",
      projects: [
        {
          title: "",
          description: "",
          link: ""
        }
      ],
      outcomes: [
        ""
      ],
      courseLink: ""
    },
    {
      title: "Software Engineering I",
      classNumber: "Soft 160",
      semester: "Spring",
      year: "Fall 20",
      instructors: [
        "Dr. Christopher Bohn",
        "Dr. Suzanne Person"
      ],
      description: "",
      projects: [
        {
          title: "",
          description: "",
          link: ""
        }
      ],
      outcomes: [
        ""
      ],
      courseLink: ""
    }
  ]

  return (
    <div className={styles.coursePageContainer}>
      <p className={styles.title} as={'div'}>Coursework</p>
      <p className={styles.subtitle} as={'div'}>... and what I have learned.</p>
      <div className={styles.courseGridWrapper}>
        {courseData.map((course, key) => { return (<CourseCard course={course} key={key} />) })}
      </div>
    </div>
  )
};
