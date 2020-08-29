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
          Name repository: {name}
        </div>
        <div>
          <a href={url} target="_blank" >{url}</a>
        </div>
        <div>
          {statisticInfo}
        </div>
      </section>
  );
}



export default ReposCard;
