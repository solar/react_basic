import { fromJS } from 'immutable';

import { types } from './actions';
import { DEFAULT_LOCALE } from './constants';

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
};
