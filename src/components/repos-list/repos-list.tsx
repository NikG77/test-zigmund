import React, { Dispatch } from 'react';
import { connect } from "react-redux";
import { Repository } from "../../types";
import { ActionCreator } from "../../reduser/reducer";
import { PageDirection, StatusLoading } from "../../const";
import styles from "./repos-list.module.scss";

import ReposCard from "../repos-card/repos-card";
import Loader from "../loader/loader";


interface ReposListProps {
  nameOrganization: string;
  repositories: Repository[];
  statusLoading: string;
  pageCount: number;
  onPageChange: (nameOrganization: string, page: number) => void;
  currentPage: number;
}

interface ButtonProps {
  pageDirection: string;

}


const ReposList: React.FC<ReposListProps> = ({ nameOrganization, repositories, statusLoading, pageCount, onPageChange, currentPage }: ReposListProps) => {

  const Button: React.FC<ButtonProps> = ({ pageDirection }: ButtonProps) => {
    let nextPage, isDisabled;

    switch (pageDirection) {

      case PageDirection.PREVIOUS:
        nextPage = currentPage - 1;
        isDisabled = currentPage === 1;
        break;

      case PageDirection.NEXT:
        nextPage = currentPage + 1;
        isDisabled = currentPage === pageCount;
        break;
      default:
        return null;
    }

    return (
      <button className={styles.btn}
              onClick={(() => {
                onPageChange(nameOrganization, nextPage);
              })}
              type="button"
              disabled={isDisabled}
      >
        {pageDirection}
      </button>
    )
  }

  const notRepeatAnswer = (
    <div className={styles.answer__error}>
      <p>
        Sorry, we cannot re-contact GitHub for the next page. Try again later
      </p>
    </div>
  );

  return (statusLoading === StatusLoading.LOADING ? <Loader /> :
    <React.Fragment>
      {repositories.length > 0 && (
        <React.Fragment>
          <div className={styles.repository}>
            <div className={styles.repository__title}>
              <h2>Вы нашли репозитории по организации {nameOrganization}:</h2>
            </div>
            <div className={styles.repository__list}>
              {repositories.map((repository: Repository) =>
                  <ReposCard key={repository.name} repository={repository} />
              )}
            </div>
          </div>
          {pageCount > 0 && statusLoading === StatusLoading.ERROR && notRepeatAnswer}

          <div className={styles.pagination}>
            <div className={styles.pagination__page}>
              <span>page {currentPage} from {pageCount}</span>
            </div>
            <div className={styles.pagination__btn}>
              <Button pageDirection={PageDirection.PREVIOUS}/>
              <Button pageDirection={PageDirection.NEXT}/>
            </div>
          </div>
        </React.Fragment>
      )}

    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  nameOrganization: state.nameOrganization,
  repositories: state.repositories,
  statusLoading: state.statusLoading,
  pageCount: state.pageCount,
  currentPage: state.currentPage,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onPageChange(name: string, page: number) {
    dispatch(ActionCreator.getRepositories(name, page));
  },
});

export {ReposList};
export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
