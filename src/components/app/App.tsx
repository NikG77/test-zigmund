import React from 'react';
import Main from "../main/main";
import ReposList from "../repos-list/repos-list";


function App(): JSX.Element {
  return (
    <div className="main">
      <h1 className="main__title">Тестовое задание</h1>
      <Main />
      <ReposList />
    </div>
  );
}

export default App;

