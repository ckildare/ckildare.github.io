import JobCard from '@/components/jobCard';
import { jobData } from '../../../public/data/jobData';
import styles from './work.module.scss';
import CircleDivider from '@/components/circleDivider';

const Work = () => {
  return (
    <div className={styles.workWrapper}>
      <div className={styles.title}>Work Experience</div>
      <div className={styles.workSections}>
        {jobData.map((job, key) => {
          return (
            <div className={styles.workSection} key={key}>
              <JobCard job={job} />
              {key != jobData.length - 1 && <CircleDivider />}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Work;