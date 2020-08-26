import React from 'react';
import {Repository} from "../../types";

interface Props {
  repository: Repository,

}

const ReposCard: React.FC<Props> = ({repository}: Props) => {
  const {
    name,
    url,
    statistics
   } = repository;

  const statisticInfo = Object.entries(statistics).map(([name, count]) => {
    return (
      <div className={`statistics-${name}`} key={name}>{name}: {count} </div>
    );
  });

  return (
      <section>
        <div>
          <h4>Name repository: {name}</h4>
        </div>
        <div>
          <h4>Url: {url}</h4>
        </div>
        <div>
          {statisticInfo}
        </div>
      </section>
  );
}



export default ReposCard;
