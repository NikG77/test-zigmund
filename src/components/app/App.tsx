import React from "react";
import Form from "../form/form";
import ReposList from "../repos-list/repos-list";
import styles from "./app.module.scss"


function App(): JSX.Element {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Тестовое задание</h1>
      <Form />
      <ReposList />
    </div>
  );
}

export default App;

