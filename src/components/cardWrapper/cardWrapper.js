import styles from './cardWrapper.module.scss';
import React from 'react';

export default function CardWrapper(props) {

  return (
    <div className={styles.cardWrapper}>
      {props.children}
    </div>
  )
};