import * as React from 'react';
import {connect} from "react-redux";
import Main from "../main/main";
import Loader from "../loader/loader";
import ReposList from "../repos-list/repos-list";

interface Props {
  isReposLoading: boolean,
}

function App({isReposLoading}: Props): JSX.Element {

  return (isReposLoading ? <Loader /> :
    <div>
      <h1>Тестовое задание</h1>
      <Main />
      <ReposList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isReposLoading: state.isReposLoading,
});

export {App};
export default connect(mapStateToProps)(App);
