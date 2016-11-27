import { call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

export function* pushHistory(path) {
  if (browserHistory) yield call(browserHistory.push, path);
}
