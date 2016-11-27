import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { pushHistory } from 'sagas/helper';

import { sample, types } from './actions';
import { sampleApi } from './api';

function* run(action) {
  try {
    const { data } = yield call(sampleApi, action.payload);
    console.log(data);
    yield put(sample.success(data));
    yield call(pushHistory, '/');
  } catch (err) {
    yield put(sample.failure({ _error: err.message }));
  }
}

export function* takeSample() {
  yield takeLatest(types.SAMPLE, run);
}

export default [takeSample];
