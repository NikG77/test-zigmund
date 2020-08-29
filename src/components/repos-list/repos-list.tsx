import React, { Dispatch } from 'react';
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Repository } from "../../types";
import { ActionCreator } from "../../reduser/reducer";
import ReposCard from "../repos-card/repos-card";
import Loader from "../loader/loader";

interface Props {
  nameOrganization: string,
  listRepos: Repository[],
  isReposLoading: boolean,
  pageCount: number,
  onPageChange: (nameOrganization: string, page: number) => void;
}

const ReposList: React.FC<Props> = ({nameOrganization, listRepos, isReposLoading, pageCount, onPageChange}: Props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [nameOrganization]);

  return (isReposLoading ? <Loader /> :
    <React.Fragment>
      {listRepos.length > 0 && (
        <React.Fragment>
          <div>
            <h2>Вы смотрите репозитории по организации {nameOrganization}</h2>
          </div>

          {listRepos.map((repository: Repository) =>
              <ReposCard key={repository.name} repository={repository} />
          )}

      <div
        className=" ">
                    <span className=" ">
                      page {page} from {pageCount}
                        </span>
        <div className=" ">
          <button
            onClick={(() => {
              onPageChange(nameOrganization, page - 1);
              setPage(page - 1);
            })}
            type="button"
            className="btn"
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            onClick={(() => {
              onPageChange(nameOrganization, page + 1);
              setPage( page + 1)
            })}
            type="button"
            className="btn"
            disabled={page === pageCount}
          >
            Next
          </button>
        </div>
      </div>
        </React.Fragment>
      )}

    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  nameOrganization: state.nameOrganization,
  listRepos: state.listRepos,
  isReposLoading: state.isReposLoading,
  pageCount: state.pageCount,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onPageChange(name: string, page: number) {
    dispatch(ActionCreator.setName(name, page));
  },
});

export {ReposList};
export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
