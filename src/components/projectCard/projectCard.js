import styles from './projectCard.module.scss';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import CardWrapper from '../cardWrapper/cardWrapper';
import classNames from 'classnames';

import githubLogo from '../../public/icons/github.svg';
import projectIcon from '../../public/icons/rocket-launch.svg';
import rightChevron from '../../public/icons/chevron/chevron-right.svg';
import downChevron from '../../public/icons/chevron/chevron-down.svg';


export default function ProjectCard(props) {
  const [openProject, toggleOpen] = React.useState(false);

  function handleOpenProject() {
    toggleOpen(!openProject);
  }

  return (
    <div className={classNames(
      props.isSchoolProject ? styles.projectContainerSchool : styles.projectContainer,
      openProject ? styles.projectContainerOpen : false)}>
      <button
        className={
          classNames(styles.buttonWrapper, !openProject ?
            styles.buttonWrapperShadow
            : false)}
        id={"projectMouse"}
        as={'div'}
        onClick={handleOpenProject}
      >
        {props.project?.displayImg != "" ?
          <Image
            priority
            className={styles.coverImage}
            height={props.isSchoolProject ? 169 : 210}
            width={props.isSchoolProject ? 336 : 417.5}
            src={props.project?.displayImg ?? ""}
            alt={"Cover image for " + props.project?.title + "project"}
          />
          :
          <div className={styles.imagePlaceholder}>Placeholder</div>
        }
        <div className={styles.titleWrapper}>
          <Image
            src={openProject ? downChevron : rightChevron}
            className={styles.projectChevron}
            alt={'Project Chevron'}
            height={20}
            width={20}
          />
          <div className={styles.title}>{props.project?.title}</div>
        </div>
      </button>
      {openProject ?
        <div className={styles.projectBody}>
          <hr className={styles.lineDivider} />
          <CardWrapper status={props.project?.status}>
            <p className={styles.status} as={'div'}>Status: {props.project?.status}</p>
          </CardWrapper>
          <CardWrapper>
            <p className={styles.projectTextHeader} as={'div'}>Context</p>
            <hr className={styles.lineDivider} />
            <p className={styles.projectText}>{props.project?.context}</p>
          </CardWrapper>
          <CardWrapper>
            <p className={styles.projectTextHeader} as={'div'}>Concept</p>
            <hr className={styles.lineDivider} />
            <p className={styles.projectText}>{props.project?.concept}</p>
            {props.project?.conceptStepList?.length > 0 ?
              <div className={styles.projectTextList}>
                <hr className={styles.lineDivider} />
                {props.project?.conceptStepList.map((stepText, key) => {
                  return (
                    <p className={styles.projectListItem} as={'div'} key={key}>{(key + 1) + ".\t" + stepText}</p>
                  )
                })}
              </div>
              : false
            }
          </CardWrapper>
          <hr className={styles.lineDivider} />
          <div className={styles.projectLinkWrapper}>
            <Link class={styles.projectLink} href={props.project?.githubLink}>
              <Image src={githubLogo} height={40} width={40} alt={"Github logo"} />
              <p as={'div'} className={styles.linkText}>Github</p>
            </Link>
            {props.project?.projectLink != "" ?
              <>
                <Link class={styles.projectLink} href={props.project?.projectLink}>
                  <Image src={projectIcon} height={40} width={40} className={styles.projectLinkImage} alt={"Icon for project"} />
                  <p as={'div'} className={styles.linkText}>Project</p>
                </Link>
              </>
              : false
            }
          </div>
          {props.project?.supportingImgs != null || props.project?.supportingImgs > 0 ?
            props.project?.supportingImgs.map((supportImg, key) => {
              return (
                <div className={styles.supportImg}>
                  <Image className={styles.coverImage} src={supportImg.img ?? ""} height={210} width={420} key={key} />
                  <p className={styles.supportImgCaption}>{supportImg.caption}</p>
                </div>
              )
            })
            :
            false
          }

        </div>
        : false
      }
    </div>
  )
};