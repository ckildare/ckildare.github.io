import styles from './jobCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

import CardWrapper from '../cardWrapper/cardWrapper';

export default function jobCard(props) {

  const tabbedBullet = <>&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;</>;

  return (
    <>
      <CardWrapper classNames={styles.jobBody}>
        <div className={styles.jobDescription}>
          <CardWrapper classNames={styles.jobTitle}>{props.job?.jobTitle}</CardWrapper>
          <CardWrapper>
            <div className={styles.companyName}>{props.job?.companyData?.name}</div>
            <div className={styles.sectionLineDivider} />
            <div className={styles.jobDuration}>{props.job?.startDate} to {props.job?.endDate}</div>
            <div className={styles.companyAddress}>{props.job?.companyData?.address}</div>
          </CardWrapper>
          <CardWrapper classNames={styles.descriptionSupervisors}>
            <div className={styles.sectionTitle}>Supervisors</div>
            <div className={styles.sectionLineDivider} />
            <div className={styles.listWrapper}>
              {props.job?.supervisors?.map((supervisor, key) => {
                return (<div key={key} className={styles.supervisor}>{tabbedBullet}{supervisor}</div>)
              })}
            </div>
          </CardWrapper>
        </div>
        <CardWrapper classNames={styles.contributions}>
          <div className={styles.sectionTitle}>Contributions</div>
          <div className={styles.sectionLineDivider} />
          <div className={styles.listWrapper}>
            {props.job?.contributions?.map((contribution, key) => {
              return (<div key={key} className={styles.contribution}>{tabbedBullet}{contribution}</div>)
            })}
          </div>
        </CardWrapper>
        <CardWrapper classNames={styles.outcomes}>
          <div className={styles.sectionTitle}>Outcomes</div>
          <div className={styles.sectionLineDivider} />
          <div className={styles.listWrapper}>
            {props.job?.outcomes?.map((outcome, key) => {
              return (<div key={key} className={styles.outcome}>{tabbedBullet}{outcome}</div>)
            })}
          </div>
        </CardWrapper>
      </CardWrapper>
      <div className={styles.lineDivider} />
    </>
  )
};