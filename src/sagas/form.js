import { takeEvery } from 'redux-saga';
import { call, put, race, take } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';

import { FORM_SUBMIT } from 'actions/formSubmit';

function* submit({
  payload: {
    action,
    successAction,
    failureAction,
    values,
    resolve,
    reject,
  },
}) {
  yield put({ type: action, payload: values });

  const { ok, ng } = yield race({
    ok: take(successAction),
    ng: take(failureAction),
  });

  if (ok) {
    yield call(resolve, ok.payload);
  } else {
    yield call(reject, new SubmissionError(ng.payload));
  }
}

export default function* takeFormSubmit() {
  yield takeEvery(FORM_SUBMIT, submit);
}
