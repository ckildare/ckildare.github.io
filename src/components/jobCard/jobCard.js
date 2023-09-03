import styles from './jobCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

import ProjectCard from '../projectCard/projectCard';
import schoolIcon from '../../public/icons/school.svg';

export default function jobCard(props) {

  const tabbedBullet = <>&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;</>;

  return (
    <>
      <div className={styles.jobBody}>
        <div className={styles.jobDescription}>
          <div className={styles.descriptionTopRow}>
            <div className={styles.jobTitle}>{props.job?.jobTitle}</div>
            <div className={styles.jobDuration}>{props.job?.startDate} to {props.job?.endDate}</div>
          </div>
          <div className={styles.descriptionMiddleRow}>
            <div className={styles.companyName}>{props.job?.companyData?.name}</div>
            <div className={styles.companyAddress}>{props.job?.companyData?.address}</div>
          </div>
          <div className={styles.descriptionSupervisors}>
            <div className={styles.sectionTitle}>Supervisors</div>
            {props.job?.supervisors?.map((supervisor, key) => {
              return (<div key={key} className={styles.supervisor}>{tabbedBullet}{supervisor}</div>)
            })}
          </div>
        </div>
        <div className={styles.contributions}>
          <div className={styles.sectionTitle}>Contributions</div>
          <div className={styles.contributionListWrapper}>
            {props.job?.contributions?.map((contribution, key) => {
              return (<div key={key} className={styles.contribution}>{tabbedBullet}{contribution}</div>)
            })}
          </div>
        </div>
        <div className={styles.outcomes}>
          <div className={styles.sectionTitle}>Outcomes</div>
          <div className={styles.outcomesListWrapper}>
            {props.job?.outcomes?.map((outcome, key) => {
              return (<div key={key} className={styles.outcome}>{tabbedBullet}{outcome}</div>)
            })}
          </div>
        </div>
      </div>
      <div className={styles.lineDivider} />
    </>
  )
};