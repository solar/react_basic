import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  home: {
    id: 'home',
    defaultMessage: 'Home',
  },
  submitButton: {
    id: 'submit_button',
    defaultMessage: 'Submit',
  },
});

export const formErrors = defineMessages({
});

export const formatMessage = (intl, arg, values = {}) => {
  if (typeof arg === 'object') return intl.formatMessage(arg, values);
  return intl.formatMessage({ id: arg, defaultMessage: arg }, values);
};
