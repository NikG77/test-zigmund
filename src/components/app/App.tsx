import React from 'react';
import Form from "../form/form";
import ReposList from "../repos-list/repos-list";


function App(): JSX.Element {
  return (
    <div className="main">
      <h1 className="main__title">Тестовое задание</h1>
      <Form />
      <ReposList />
    </div>
  );
}

export default App;

