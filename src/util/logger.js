import { Iterable } from 'immutable';
import Logger from 'js-logger';

import { formatTime } from './string';

export const setupLogger = () => {
  Logger.useDefaults({
    formatter: (messages) => {
      messages.unshift(`[${formatTime()}]`);
    },
  });
};

const convertImmutable = (obj) => {
  if (Iterable.isIterable(obj)) {
    return obj.toJS();
  } else if (obj !== null && typeof obj === 'object') {
    const newObj = {};

    Object.entries(obj).forEach(([k, v]) => {
      newObj[k] = convertImmutable(v);
    });
    return newObj;
  }
  return obj;
};

export const createReduxLogger = () => {
  const collapsePrefix = [
    'redux-form/',
    '@@router/',
  ];
  const collapse = [
  ];
  const blacklist = [
  ];

  const create = require('redux-logger'); // eslint-disable-line global-require

  return create({
    collapsed: (getState, action) => collapsePrefix.find(a =>
        action.type.startsWith(a)) || collapse.includes(action.type),
    predicate: (getState, action) => !blacklist.includes(action.type),
    stateTransformer: state => convertImmutable(state),
    actionTransformer: action => convertImmutable(action),
  });
};
