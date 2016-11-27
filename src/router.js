import React from 'react';
import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll/lib/useScroll';

import createRoutes from 'routes';
import App from 'containers/App';

const makeHistory = store => syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    let prevRoutingState = null;
    let prevRoutingStateJS = null;

    const routingState = state.get('route');

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  },
});

const makeRouter = (store) => {
  const routes = {
    component: App,
    childRoutes: createRoutes(store),
  };

  return (
    <Router
      history={makeHistory(store)}
      render={applyRouterMiddleware(useScroll())}
    >
      {routes}
    </Router>
  );
};

export default makeRouter;
