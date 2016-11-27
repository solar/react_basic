import { createAction } from 'redux-actions';

import { actionTypes } from 'actions/helper';

export const types = actionTypes('app/containers/LanguageProvider/', [], 'CHANGE_LOCALE');

export const changeLocale = createAction(types.CHANGE_LOCALE);
