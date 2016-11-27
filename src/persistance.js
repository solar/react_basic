import { createTransform, persistStore as persist } from 'redux-persist-immutable';

const blacklistForms = [];

const persistFilter = (state, paths = []) => {
  try {
    return state.filter(x => paths.includes(x));
  } catch (e) {
    return state;
  }
};

const filterReducer = (reducerName, inboundPaths, outboundPaths) => createTransform(
  // inbound
  (inboundState, _key) =>
    (inboundPaths ? persistFilter(inboundState, inboundPaths) : inboundState),

  // outbound
  (outboundState, _key) =>
    (outboundPaths ? persistFilter(outboundState, outboundPaths) : outboundState),

  { whitelist: [reducerName] }
);

export const persistStore = (store, postRehydrate) => persist(store, {
  blacklist: [
    'route',
  ],
  transforms: [
    filterReducer('form', blacklistForms, blacklistForms),
  ],
}, () => postRehydrate());
