import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import * as ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { reducer } from "./reduser/reducer";
import App from "./components/app/App";
import mySaga from "./sagas/mySaga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
