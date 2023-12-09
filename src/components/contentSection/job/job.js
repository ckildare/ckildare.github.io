import TechPill from '../../pills/techPill';
import styles from './job.module.scss';

const Job = ({ job }) => {
  return (
    <div className={styles.jobCardWrapper}>
      <div className={styles.jobHeader}>
        <div className={styles.jobDate}>
          <div className={styles.startDate}>{job.startDate}</div>
          -
          <div className={styles.endDate}>{job.endDate}</div>
        </div>
        <div className={styles.jobTitle}>{job.title}</div>
        <div className={styles.jobCompany}>{job.companyData.name}</div>
      </div>
      <div className={styles.jobDescriptionSection}>
        <div className={styles.jobSectionTitle}>About {job.companyData.shortName}</div>
        <div className={styles.jobDescription}>{job.companyData.description}</div>
      </div>
      <div className={styles.jobDescriptionSection}>
        <div className={styles.jobSectionTitle}>My Contributions</div>
        <div className={styles.listDescription}>
          {job.contributions.map((contribution, key) => {
            return (
              <div key={key} className={styles.listItem}>
                <div className={styles.bullet}>&#x2022;</div>
                <div className={styles.listItemText}>{contribution}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.jobDescriptionSection}>
        <div className={styles.jobSectionTitle}>Outcomes</div>
        <div className={styles.listDescription}>
          {job.outcomes.map((outcome, key) => {
            return (
              <div key={key} className={styles.listItem}>
                <div className={styles.bullet}>&#x2022;</div>
                <div className={styles.listItemText}>{outcome}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.techPillSection}>
        {job.technologies.map((technology, key) => {
          return (
            <TechPill key={key} name={technology} />
          )
        })}
      </div>
    </div>
  );
};

export default Job;