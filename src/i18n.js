import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';

import enTranslationMessages from './translations/en.json';
import jaTranslationMessages from './translations/ja.json';

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

export const DEFAULT_LOCALE = 'en';

export const locales = [
  'en',
  'ja',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ?
    formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);

  messageKeys.forEach((messageKey) => {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] =
        messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  });

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  ja: formatTranslationMessages('ja', jaTranslationMessages),
};

export const i18nConfigureAndRender = (render) => {
  if (module.hot) {
    module.hot.accept('./i18n', () => {
      render();
    });
  }

  if (!window.Intl) {
    (new Promise((resolve) => {
      resolve(System.import('intl'));
    }))
      .then(() => Promise.all([
        System.import('intl/locale-data/jsonp/en.js'),
        System.import('intl/locale-data/jsonp/ja.js'),
      ]))
      .then(() => render())
      .catch((err) => {
        throw err;
      });
  } else {
    render();
  }
};
