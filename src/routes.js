import { getAsyncInjectors } from 'util/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const Loaded = {};

const loadModule = cb => componentModule =>
  cb(null, componentModule.default);

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  const routeDef = cb => (...promises) => {
    const promise = Promise.all(promises);

    promise.then(([component]) => {
      loadModule(cb)(component);
    });

    promise.catch(errorLoading);
  };

  const routeSagaDef = cb => (name, ...promises) => {
    const renderRoute = loadModule(cb);

    const promise = Promise.all(promises);

    promise.then(([component, sagas]) => {
      if (Loaded[name]) {
        renderRoute(component);
      } else {
        Loaded[name] = name;
        injectSagas(sagas.default);

        renderRoute(component);
      }
    });

    promise.catch(errorLoading);
  };

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        routeDef(cb)(System.import('containers/Home'));
      },
    }, {
      path: '/sample',
      name: 'sample',
      getComponent(nextState, cb) {
        routeSagaDef(cb)('sample',
          System.import('containers/Sample'),
          System.import('containers/Sample/sagas'),
        );
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        routeDef(cb)(System.import('containers/NotFound'));
      },
    },
  ];
}
