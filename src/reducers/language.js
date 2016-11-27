/**
 * language/locale reducer.
 */
import { fromJS } from 'immutable';

import { types } from 'actions/language';
import { DEFAULT_LOCALE } from 'i18n';

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCALE:
      return state.set('locale', action.payload);

    default:
      return state;
  }
};
