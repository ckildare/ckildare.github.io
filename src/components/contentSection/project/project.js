import LinkPill from '@/components/pills/linkPill';
import TechPill from '../../pills/techPill';
import styles from './project.module.scss';
import { useState } from 'react';
import StatusPill from '@/components/pills/statusPill';

const Project = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.projectCardWrapper}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitle}>{project.title}</div>
      </div>
      <div className={styles.projectDescriptionSection}>
        <StatusPill projectStatus={project.status} />
        <div className={styles.projectSectionTitle}>About {project.shortTitle}</div>
        <div className={styles.projectDescription}>{project.context}</div>
        <div className={styles.projectDescription}>{project.concept}</div>
        <div className={styles.listDescription}>
          {(project.conceptStepList ?? []).map((step, key) => {
            return (
              <div key={key} className={styles.listItem}>
                <div className={styles.number}>{key + 1}.</div>
                <div className={styles.listItemText}>{step}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.projectDescriptionSection}>
        <div className={styles.projectSectionTitle}>Outcomes</div>
        <div className={styles.listDescription}>
          {project.outcomes.map((outcome, key) => {
            return (
              <div key={key} className={styles.listItem}>
                <div className={styles.bullet}>&#x2022;</div>
                <div className={styles.listItemText}>{outcome}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.linkPillSection}>
        {project.projectLink && <LinkPill name="Project" link={project.projectLink} />}
        {project.repoLink && <LinkPill name="Repository" link={project.repoLink} />}
      </div>
      <div className={styles.techPillSection}>
        {project.technologies.map((technology, key) => {
          return (
            <TechPill key={key} name={technology} />
          )
        })}
      </div>
    </div>
  );
};

export default Project;