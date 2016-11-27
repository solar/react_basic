import _ from 'lodash';
import { createAction } from 'redux-actions';

export const SUFFIX = {
  success: 'SUCCESS',
  failure: 'FAILURE',
};

export const actionTypes = (prefix, suffixes, ...args) => args.reduce((types, type) => {
  const add = [type].concat(suffixes.map(s => `${type}_${s}`));
  const result = types;
  add.forEach((v) => {
    result[v] = prefix + v;
  });
  return result;
}, {});

export const asyncActionTypes = (prefix, ...args) =>
  actionTypes(prefix, _.values(SUFFIX), ...args);

export const createAsyncActions = type => ({
  run: createAction(type),
  success: createAction(`${type}_${SUFFIX.success}`),
  failure: createAction(`${type}_${SUFFIX.failure}`),
});
