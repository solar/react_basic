import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist-immutable';

import createReducer from 'reducers';
import * as reducers from 'reducers/index';
import { createReduxLogger } from 'util/logger';
import defaultSagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState, history) => {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createReduxLogger());
  }

  const enhancers = [
    autoRehydrate(),
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer({
      ...reducers,
    }),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // default sagas
  sagaMiddleware.run(defaultSagas);

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('reducers', () => {
      System.import('reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
};

export default configureStore;
