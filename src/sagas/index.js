import { spawn } from 'redux-saga/effects';

import takeFormSubmit from './form';

export default function* rootSaga() {
  yield [
    spawn(takeFormSubmit),
  ];
}
