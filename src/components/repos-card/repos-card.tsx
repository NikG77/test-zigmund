import React from 'react';
import {Repository} from "../../types";

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
      <div className={`statistics__item statistics__item-${name}`} key={name}>
        <svg viewBox="0 0 17 17" width={17} height={17}>
          <use xlinkHref={`#${name}`}></use>
        </svg>
        <span> {name} </span>
        <span> {count}</span>
      </div>
    );
  });

  return (
      <div className="card">
        <div className="card__name">
          <a className="card__name" href={url} target="_blank" >{name}</a>
        </div>
        <div className="card__description">
          <span>{description}</span>
        </div>

        <div className="statistics">
          {statisticInfo}
        </div>

      </div>
  );
}



export default ReposCard;
