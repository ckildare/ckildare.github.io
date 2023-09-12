import styles from './cardWrapper.module.scss';
import classNames from 'classnames';
import React from 'react';
import { ProjectStatus } from '@/public/enums/projectStatus';

export default function CardWrapper(props) {

  function getColorClass(status) {
    if (status == ProjectStatus.InProgress) {
      return styles.inProgress;
    } else if (status == ProjectStatus.Finished) {
      return styles.finished;
    } else if (status == ProjectStatus.Paused) {
      return styles.paused;
    } else if (status == ProjectStatus.Abandoned) {
      return styles.abandoned;
    } else {
      return styles.cardWrapper;
    }
  }

  return (
    <div className={classNames(getColorClass(props.status), styles.cardWrapper)}>
      {props.children}
    </div>
  )
};