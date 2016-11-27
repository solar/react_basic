import { put } from 'redux-saga/effects';

import { getErrorCode, ErrorCodes } from 'util/error';

export function* handleApi(worker, action) {
  try {
    yield* worker(action);
  } catch (err) {
    switch (getErrorCode(err)) {
      default:
        throw err;
    }
  }
}
