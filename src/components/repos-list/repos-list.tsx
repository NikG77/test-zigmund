import * as React from 'react';
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {Repository} from "../../types";
import ReposCard from "../repos-card/repos-card";

interface Props {
  authorizationStatus: string,
  nameOrganization: string,
  listRepos: Repository[],
}

const ReposList: React.FC<Props> = ({authorizationStatus, nameOrganization, listRepos}: Props) => {

  return (
    <React.Fragment>
      {authorizationStatus === AuthorizationStatus.AUTH && (
        <React.Fragment>
          <div>
            <h2>Организация: {nameOrganization}</h2>
          </div>

          {listRepos.map((repozitory) =>
              <ReposCard key={repozitory.name} repository={repozitory} />
          )}
        </React.Fragment>
      )}

    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  nameOrganization: state.nameOrganization,
  listRepos: state.listRepos,
});

export {ReposList};
export default connect(mapStateToProps)(ReposList);
