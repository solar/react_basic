import { fromJS } from 'immutable';

import { types } from './actions';

const initialState = fromJS({
  value: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAMPLE_SUCCESS:
      return state.set('value', action.payload);
    default:
      return state;
  }
};
