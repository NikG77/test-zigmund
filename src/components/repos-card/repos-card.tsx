import React from "react";
import {Repository} from "../../types";
import styles from "./repos-card.module.scss"


interface Props {
  repository: Repository,
}

const ReposCard: React.FC<Props> = ({repository}: Props) => {
  const {
    name,
    url,
    description,
    statistics
   } = repository;

  const statisticInfo = Object.entries(statistics).map(([name, count]) => {
    return (
      <div className={styles.statistics__item} key={name}>
        <svg viewBox="0 0 17 17" width={17} height={17}>
          <use xlinkHref={`#${name}`}></use>
        </svg>
        <span> {name} </span>
        <span> {count}</span>
      </div>
    );
  });

  return (
      <div className={styles.card}>
        <div className={styles.card__name}>
          <a href={url}>{name}</a>
        </div>
        <div className={styles.card__description}>
          <span>{description}</span>
        </div>

        <div className={styles.statistics}>
          {statisticInfo}
        </div>
      </div>
  );
}


export default ReposCard;
